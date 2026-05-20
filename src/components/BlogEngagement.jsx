import { useState } from "react";
import { FaHandsClapping, FaLightbulb, FaThumbsUp } from "react-icons/fa6";
import FormFeedback from "./FormFeedback";
import { formButton, formInput, formTextarea } from "./formStyles";
import { useBlogEngagement } from "../hooks/useBlogEngagement";
import { formatRelativeTime, initials, REACTION_TYPES } from "../lib/blogEngagement";

const REACTION_ICONS = {
  like: FaThumbsUp,
  insightful: FaLightbulb,
  celebrate: FaHandsClapping,
};

export default function BlogEngagement({ slug }) {
  const {
    configured,
    counts,
    userVotes,
    comments,
    loading,
    error,
    submitting,
    toggleReaction,
    postComment,
  } = useBlogEngagement(slug);

  const [form, setForm] = useState({ name: "", message: "" });
  const [formError, setFormError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setFormError(null);
    try {
      await postComment(form);
      setForm({ name: form.name, message: "" });
    } catch (err) {
      setFormError(err.message);
    }
  }

  return (
    <div className="mt-12">
      <div className="mb-8 pb-8 border-b border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Reactions</h3>
        {!configured && (
          <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-4">
            Live reactions require Firebase. Copy <code className="text-xs">.env.example</code> to{" "}
            <code className="text-xs">.env.local</code> and add your project keys, then restart the dev server.
          </p>
        )}
        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2 mb-4">{error}</p>
        )}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {REACTION_TYPES.map(({ id, label }) => {
            const Icon = REACTION_ICONS[id];
            const active = userVotes[id];
            const count = counts[id] ?? 0;
            return (
              <button
                key={id}
                type="button"
                disabled={!configured || loading}
                onClick={() => toggleReaction(id)}
                className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-colors disabled:opacity-50 ${
                  active
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:text-blue-700"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${active ? "bg-blue-500" : "bg-gray-100"}`}>
                  {loading ? "…" : count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-6">
        Comments {comments.length > 0 && <span className="text-gray-400 font-normal">({comments.length})</span>}
      </h3>

      {loading && configured && (
        <p className="text-sm text-gray-500 mb-4">Loading comments…</p>
      )}

      {!loading && configured && comments.length === 0 && (
        <p className="text-sm text-gray-500 mb-6">Be the first to share your thoughts on this article.</p>
      )}

      <div className="space-y-6 mb-8">
        {comments.map((c) => (
          <div key={c.id} className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center shrink-0">
              {initials(c.name)}
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-1 items-baseline">
                <span className="font-bold text-sm text-gray-900">{c.name}</span>
                <span className="text-gray-400 text-xs">{formatRelativeTime(c.createdAt)}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{c.message}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-2xl p-6 md:p-8 shadow-sm">
        <h4 className="font-bold text-gray-900 mb-1">Write your opinion</h4>
        <p className="text-gray-500 text-sm mb-5">Share your thoughts with the community.</p>
        {formError && (
          <div className="mb-4">
            <FormFeedback type="error">{formError}</FormFeedback>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className={formInput}
            placeholder="Your name *"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            disabled={!configured || submitting}
            required
          />
          <textarea
            className={`${formTextarea} h-28`}
            placeholder="Join the discussion"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            disabled={!configured || submitting}
            required
          />
          <button
            type="submit"
            disabled={!configured || submitting}
            className={`${formButton} w-full sm:w-auto`}
          >
            {submitting ? "Posting…" : "Post Your Comment"}
          </button>
        </form>
      </div>
    </div>
  );
}
