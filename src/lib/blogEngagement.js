import {
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  runTransaction,
  serverTimestamp,
  collectionGroup,
  limit,
} from "firebase/firestore";
import { db, isFirebaseConfigured } from "../config/firebase";

export const REACTION_TYPES = [
  { id: "like", label: "Like" },
  { id: "insightful", label: "Insightful" },
  { id: "celebrate", label: "Celebrate" },
];

function articleRef(slug) {
  return doc(db, "articles", slug);
}

function voteRef(slug, visitorId) {
  return doc(db, "articles", slug, "votes", visitorId);
}

function commentsRef(slug) {
  return collection(db, "articles", slug, "comments");
}

export function initials(name) {
  return (name || "?")
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function formatRelativeTime(date) {
  if (!date) return "Just now";
  const then = date instanceof Date ? date : new Date(date);
  const seconds = Math.floor((Date.now() - then.getTime()) / 1000);
  if (seconds < 60) return "Just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return then.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

/** @param {string} slug */
export function subscribeArticleEngagement(slug, { onCounts, onComments, onUserVotes, onError }) {
  if (!isFirebaseConfigured || !db) {
    onError?.(new Error("Firebase is not configured"));
    return () => {};
  }

  const unsubArticle = onSnapshot(
    articleRef(slug),
    (snap) => {
      const data = snap.data() || {};
      onCounts?.({
        like: data.like ?? 0,
        insightful: data.insightful ?? 0,
        celebrate: data.celebrate ?? 0,
      });
    },
    (err) => onError?.(err)
  );

  const unsubComments = onSnapshot(
    query(commentsRef(slug), orderBy("createdAt", "desc")),
    (snap) => {
      onComments?.(
        snap.docs.map((d) => {
          const data = d.data();
          return {
            id: d.id,
            name: data.name,
            message: data.message,
            createdAt: data.createdAt?.toDate?.() ?? null,
          };
        })
      );
    },
    (err) => onError?.(err)
  );

  return () => {
    unsubArticle();
    unsubComments();
  };
}

/** @param {string} slug @param {string} visitorId */
export function subscribeUserVotes(slug, visitorId, onUserVotes, onError) {
  if (!isFirebaseConfigured || !db || !visitorId) {
    return () => {};
  }

  return onSnapshot(
    voteRef(slug, visitorId),
    (snap) => {
      const data = snap.data() || {};
      onUserVotes?.({
        like: Boolean(data.like),
        insightful: Boolean(data.insightful),
        celebrate: Boolean(data.celebrate),
      });
    },
    (err) => onError?.(err)
  );
}

/** @param {function} onComments @param {function} [onError] */
export function subscribeRecentComments(onComments, onError) {
  if (!isFirebaseConfigured || !db) {
    onError?.(new Error("Firebase is not configured"));
    return () => {};
  }

  return onSnapshot(
    query(collectionGroup(db, "comments"), orderBy("createdAt", "desc"), limit(5)),
    (snap) => {
      onComments?.(
        snap.docs.map((d) => {
          const data = d.data();
          return {
            id: d.id,
            name: data.name,
            message: data.message,
            articleSlug: data.articleSlug,
            createdAt: data.createdAt?.toDate?.() ?? null,
          };
        })
      );
    },
    (err) => onError?.(err)
  );
}

/** @param {string} slug @param {string} visitorId @param {'like'|'insightful'|'celebrate'} type */
export async function toggleReaction(slug, visitorId, type) {
  if (!isFirebaseConfigured || !db) {
    throw new Error("Firebase is not configured. Add credentials to .env.local");
  }

  const aRef = articleRef(slug);
  const vRef = voteRef(slug, visitorId);

  await runTransaction(db, async (tx) => {
    const [articleSnap, voteSnap] = await Promise.all([tx.get(aRef), tx.get(vRef)]);
    const counts = articleSnap.data() || {};
    const votes = voteSnap.data() || {};
    const active = Boolean(votes[type]);
    const next = Math.max(0, (counts[type] ?? 0) + (active ? -1 : 1));

    tx.set(vRef, { ...votes, [type]: !active }, { merge: true });
    tx.set(
      aRef,
      {
        like: counts.like ?? 0,
        insightful: counts.insightful ?? 0,
        celebrate: counts.celebrate ?? 0,
        [type]: next,
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );
  });
}

/** @param {string} slug @param {{ name: string, message: string }} payload */
export async function addComment(slug, { name, message }) {
  if (!isFirebaseConfigured || !db) {
    throw new Error("Firebase is not configured. Add credentials to .env.local");
  }

  const trimmedName = name.trim();
  const trimmedMessage = message.trim();
  if (!trimmedName || !trimmedMessage) {
    throw new Error("Name and comment are required");
  }

  await addDoc(commentsRef(slug), {
    name: trimmedName,
    message: trimmedMessage,
    articleSlug: slug,
    createdAt: serverTimestamp(),
  });

  const aRef = articleRef(slug);
  const snap = await getDoc(aRef);
  const count = (snap.data()?.commentCount ?? 0) + 1;
  await runTransaction(db, async (tx) => {
    tx.set(aRef, { commentCount: count, updatedAt: serverTimestamp() }, { merge: true });
  });
}
