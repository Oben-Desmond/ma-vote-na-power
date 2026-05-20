import { Link, Navigate, useParams } from "react-router-dom";
import ArticleHero from "../components/ArticleHero";
import ArticleSidebar, { ArticleSidebarMobile } from "../components/ArticleSidebar";
import ArticleContent from "../components/ArticleContent";
import BlogEngagement from "../components/BlogEngagement";
import { ARTICLES } from "../data/constants";
import { getAdjacentArticles, getArticleBySlug } from "../data/articleBodies";

export default function BlogArticlePage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);
  const { prev, next } = getAdjacentArticles(slug);

  if (!article) return <Navigate to="/blog" replace />;

  const related = article.relatedSlugs
    .map((s) => ARTICLES.find((a) => a.slug === s))
    .filter(Boolean);

  return (
    <div className="bg-gray-50">
      <ArticleHero
        title={article.title}
        date={article.displayDate}
        author={article.author}
        category={article.category}
        image={article.img}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 flex flex-col lg:flex-row gap-8 lg:gap-10">
        <div className="flex-1 min-w-0 w-full max-w-none lg:max-w-2xl">
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm p-5 sm:p-6 md:p-10 mb-6 sm:mb-8">
            <div className="flex flex-wrap items-center gap-2 text-xs mb-8 pb-6 border-b border-gray-100">
              <span className="bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full">{article.readTime}</span>
              {article.tags.map((tag) => (
                <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>

            <p className="text-gray-600 text-base leading-relaxed mb-8 font-medium border-l-4 border-yellow-400 pl-4">
              {article.excerpt}
            </p>

            <ArticleContent blocks={article.blocks} />

            <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-gray-100">
              <span className="text-sm text-gray-500">Tags:</span>
              {article.tags.map((tag) => (
                <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>

          {related.length > 0 && (
            <div className="mb-8">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-2">Continue reading</p>
              <h3 className="font-black text-gray-900 text-lg mb-4">Related reading</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {related.map((r) => (
                  <Link key={r.slug} to={r.path} className="flex gap-3 p-4 bg-white border border-gray-100 rounded-2xl hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all group">
                    <img src={r.img} alt="" className="w-16 h-16 rounded-xl object-cover shrink-0 ring-1 ring-black/5" loading="lazy" />
                    <div>
                      <div className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 line-clamp-2">{r.title}</div>
                      <div className="text-xs text-gray-400 mt-1">{r.displayDate}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="p-5 md:p-6 bg-white border border-gray-100 rounded-2xl flex flex-col sm:flex-row justify-between gap-4 text-sm shadow-sm mb-8">
            {prev ? (
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Previous</div>
                <Link to={prev.path} className="font-semibold text-blue-700 hover:text-blue-900 line-clamp-2">{prev.title}</Link>
              </div>
            ) : <div />}
            {next && (
              <div className="sm:text-right">
                <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Next</div>
                <Link to={next.path} className="font-semibold text-blue-700 hover:text-blue-900 line-clamp-2">{next.title}</Link>
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm p-5 sm:p-6 md:p-8">
            <BlogEngagement slug={slug} />
          </div>

          <ArticleSidebarMobile />
        </div>
        <ArticleSidebar />
      </div>
    </div>
  );
}
