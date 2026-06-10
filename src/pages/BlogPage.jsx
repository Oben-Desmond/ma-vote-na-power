import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PageSEO from "../components/PageSEO";
import RecentComments from "../components/RecentComments";
import SearchInput from "../components/SearchInput";
import SectionHeading from "../components/SectionHeading";
import { searchArticles } from "../lib/searchArticles";
import { buildWebPageSchema, PAGE_SEO } from "../lib/seo";
import { ARTICLES, IMGS } from "../data/constants";

export default function BlogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [featured, setFeatured] = useState(0);
  const [query, setQuery] = useState(() => searchParams.get("search") ?? "");

  useEffect(() => {
    const param = searchParams.get("search") ?? "";
    setQuery((current) => (current === param ? current : param));
  }, [searchParams]);

  useEffect(() => {
    const trimmed = query.trim();
    const param = searchParams.get("search") ?? "";
    if (trimmed === param) return;

    const timer = setTimeout(() => {
      if (trimmed) {
        setSearchParams({ search: trimmed }, { replace: true });
      } else if (param) {
        setSearchParams({}, { replace: true });
      }
    }, 350);

    return () => clearTimeout(timer);
  }, [query, searchParams, setSearchParams]);

  const filteredArticles = useMemo(() => searchArticles(ARTICLES, query), [query]);
  const heroArticles = query.trim() ? filteredArticles : ARTICLES;

  function handleSearchSubmit(value) {
    const trimmed = value.trim();
    if (trimmed) {
      setSearchParams({ search: trimmed });
    } else {
      setSearchParams({});
    }
  }

  function clearSearch() {
    setQuery("");
    setSearchParams({});
  }

  return (
    <div className="bg-gray-50">
      <PageSEO
        {...PAGE_SEO.blog}
        noindex={Boolean(query.trim())}
        jsonLd={buildWebPageSchema(PAGE_SEO.blog)}
      />
      <section className="relative bg-gray-900 py-10 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Blog & News"
            title="Latest from our team"
            description="Guides and insights on voting, elections, and youth civic engagement in Cameroon."
            dark
            action={
              <SearchInput
                value={query}
                onChange={setQuery}
                onSubmit={handleSearchSubmit}
                placeholder="Search articles…"
                variant="dark"
                className="w-full sm:w-64"
                ariaLabel="Search articles"
              />
            }
          />
          {query.trim() && (
            <p className="text-gray-400 text-sm mb-6 -mt-6">
              {filteredArticles.length} result{filteredArticles.length === 1 ? "" : "s"} for &ldquo;{query}&rdquo;
              {" · "}
              <button type="button" onClick={clearSearch} className="text-yellow-400 hover:text-yellow-300 font-medium">
                Clear
              </button>
            </p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {heroArticles.length === 0 ? (
              <p className="text-gray-400 text-sm col-span-full text-center py-8">No featured articles match your search.</p>
            ) : (
              heroArticles.slice(0, 5).map((a, i) => (
                <Link key={a.id} to={a.path} className="group text-left">
                  <div className={`relative rounded-xl overflow-hidden mb-3 aspect-[4/3] ring-1 ring-white/10 ${i === featured && !query ? "ring-2 ring-yellow-400" : ""}`}>
                    <img src={a.img} alt={a.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-60" />
                  </div>
                  <div className="text-white text-sm font-semibold group-hover:text-yellow-400 transition-colors line-clamp-2">{a.title}</div>
                  <div className="text-gray-400 text-xs mt-1">{a.date}</div>
                </Link>
              ))
            )}
          </div>
          {!query && (
            <div className="hidden md:flex justify-end gap-2 mt-4">
              <button
                type="button"
                onClick={() => setFeatured((p) => (p - 1 + ARTICLES.length) % ARTICLES.length)}
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Previous featured article"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => setFeatured((p) => (p + 1) % ARTICLES.length)}
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Next featured article"
              >
                ›
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-10">
          <div className="flex-1 min-w-0">
            <SectionHeading
              eyebrow="All articles"
              title="Latest Articles"
              description={query.trim() ? `Showing ${filteredArticles.length} matching article${filteredArticles.length === 1 ? "" : "s"}.` : "Browse our full library of voter education and election guides."}
            />

            {filteredArticles.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <p className="text-gray-600 font-medium mb-2">No articles match your search.</p>
                <button
                  type="button"
                  onClick={clearSearch}
                  className="text-blue-700 text-sm font-semibold hover:text-blue-900"
                >
                  Clear search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((a) => (
                  <Link key={a.id} to={a.path} className="group text-left bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all duration-300">
                    <div className="relative h-44 overflow-hidden">
                      <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                    <div className="p-5">
                      <div className="font-bold text-gray-900 text-sm group-hover:text-blue-700 transition-colors line-clamp-2 mb-2">{a.title}</div>
                      <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">{a.excerpt}</p>
                      <div className="text-blue-600 text-xs mt-3 font-semibold">{a.displayDate}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="w-full lg:w-64 xl:w-72 shrink-0">
            <div className="lg:sticky lg:top-6 bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Recent Comments</h3>
              <RecentComments avatarSize="md" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Watch"
            title="Latest Videos"
            description="Highlights from conferences, outreach, and civic programs."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[IMGS.forumStage, IMGS.nyfpPodiumSpeaker, IMGS.missCivicAwards, IMGS.workshopSession].map((img, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden mb-3 aspect-video ring-1 ring-black/5 shadow-sm">
                  <img src={img} alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-10 h-10 bg-white/95 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-4 h-4 text-blue-700 ml-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                </div>
                <div className="font-semibold text-gray-800 text-sm line-clamp-2">{ARTICLES[i].title}</div>
                <div className="text-blue-600 text-xs mt-1 font-medium">{ARTICLES[i].date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
