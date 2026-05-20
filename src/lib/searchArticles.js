export function searchArticles(articles, query) {
  const q = query.trim().toLowerCase();
  if (!q) return articles;

  return articles.filter(
    (article) =>
      article.title.toLowerCase().includes(q) ||
      article.excerpt.toLowerCase().includes(q) ||
      article.author?.toLowerCase().includes(q) ||
      article.slug.toLowerCase().includes(q)
  );
}
