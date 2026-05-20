import { Link } from "react-router-dom";
import { COMMENTS, ARTICLES } from "../data/constants";
import { useRecentComments } from "../hooks/useRecentComments";
import { formatRelativeTime, initials } from "../lib/blogEngagement";

function FallbackComments() {
  return COMMENTS.map((c) => (
    <div key={c.name} className="flex gap-2">
      <div className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
        {c.avatar}
      </div>
      <div>
        <p className="text-xs text-gray-600 line-clamp-2">{c.text}</p>
        <div className="text-xs text-gray-400 mt-0.5">{c.time}</div>
      </div>
    </div>
  ));
}

export default function RecentComments({ avatarSize = "sm" }) {
  const { comments, loading, configured } = useRecentComments();
  const avatarClass =
    avatarSize === "md"
      ? "w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0"
      : "w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0";

  if (!configured) {
    return <FallbackComments />;
  }

  if (loading) {
    return <p className="text-xs text-gray-500">Loading comments…</p>;
  }

  if (comments.length === 0) {
    return <p className="text-xs text-gray-500">No comments yet. Join the discussion on an article.</p>;
  }

  return comments.map((c) => {
    const article = ARTICLES.find((a) => a.slug === c.articleSlug);
    const preview = (
      <>
        <p className="text-xs text-gray-600 line-clamp-2">{c.message}</p>
        <div className="text-xs text-gray-400 mt-0.5">{formatRelativeTime(c.createdAt)}</div>
      </>
    );

    return (
      <div key={c.id} className="flex gap-2">
        <div className={avatarClass}>{initials(c.name)}</div>
        <div className="min-w-0">
          {article ? (
            <Link to={article.path} className="block hover:text-blue-600 transition-colors">
              {preview}
            </Link>
          ) : (
            preview
          )}
        </div>
      </div>
    );
  });
}
