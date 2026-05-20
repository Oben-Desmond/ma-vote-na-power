import { useEffect, useState, useCallback } from "react";
import {
  addComment,
  subscribeArticleEngagement,
  subscribeUserVotes,
  toggleReaction,
} from "../lib/blogEngagement";
import { isFirebaseConfigured } from "../config/firebase";
import { getVisitorId } from "../utils/visitorId";

const emptyCounts = { like: 0, insightful: 0, celebrate: 0 };
const emptyVotes = { like: false, insightful: false, celebrate: false };

export function useBlogEngagement(slug) {
  const [counts, setCounts] = useState(emptyCounts);
  const [userVotes, setUserVotes] = useState(emptyVotes);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(isFirebaseConfigured);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const visitorId = getVisitorId();

  useEffect(() => {
    if (!slug || !isFirebaseConfigured) {
      setLoading(false);
      return undefined;
    }

    setLoading(true);
    setError(null);

    const unsubEngagement = subscribeArticleEngagement(slug, {
      onCounts: (c) => {
        setCounts(c);
        setLoading(false);
      },
      onComments: setComments,
      onError: (err) => {
        setError(err.message || "Failed to load engagement");
        setLoading(false);
      },
    });

    const unsubVotes = subscribeUserVotes(slug, visitorId, setUserVotes);

    return () => {
      unsubEngagement();
      unsubVotes();
    };
  }, [slug, visitorId]);

  const handleToggleReaction = useCallback(
    async (type) => {
      if (!isFirebaseConfigured) return;
      setError(null);
      try {
        await toggleReaction(slug, visitorId, type);
      } catch (err) {
        setError(err.message || "Could not update reaction");
      }
    },
    [slug, visitorId]
  );

  const handleAddComment = useCallback(
    async ({ name, message }) => {
      if (!isFirebaseConfigured) return;
      setSubmitting(true);
      setError(null);
      try {
        await addComment(slug, { name, message });
      } catch (err) {
        setError(err.message || "Could not post comment");
        throw err;
      } finally {
        setSubmitting(false);
      }
    },
    [slug]
  );

  return {
    configured: isFirebaseConfigured,
    counts,
    userVotes,
    comments,
    loading,
    error,
    submitting,
    toggleReaction: handleToggleReaction,
    postComment: handleAddComment,
  };
}
