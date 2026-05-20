export function blogSearchPath(query) {
  const trimmed = query.trim();
  return trimmed ? `/blog?search=${encodeURIComponent(trimmed)}` : "/blog";
}
