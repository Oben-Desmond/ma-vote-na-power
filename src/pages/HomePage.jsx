import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowIcon from "../components/ArrowIcon";
import CampaignImage from "../components/CampaignImage";
import PageSEO from "../components/PageSEO";
import SearchInput from "../components/SearchInput";
import SectionHeading from "../components/SectionHeading";
import { blogSearchPath } from "../lib/articleSearch";
import { searchArticles } from "../lib/searchArticles";
import { buildOrganizationSchema, buildWebPageSchema, PAGE_SEO } from "../lib/seo";
import { ARTICLES, SITE } from "../data/constants";
import { HOME_EVENTS, LEGACY_IMGS } from "../data/legacyImages";
import PartnerLogos from "../components/PartnerLogos";

const QUICK_LINKS = [
  { label: "Learn about", title: "Electoral process in Cameroon", to: "/blog/electoral-process-cameroon" },
  { label: "Learn about", title: "How to obtain a voter's card", to: "/blog/how-to-obtain-voters-card" },
  { label: "Get started", title: "Register to vote today", to: "/register" },
];

const WHAT_WE_DO = [
  { img: LEGACY_IMGS.inclusive, title: "Advocacy for Civil Rights", desc: "Protecting youth voices and civil liberties across Cameroon." },
  { img: LEGACY_IMGS.youthRally, title: "Youth Leadership", desc: "Conferences and programs that build the next generation of civic leaders." },
  { img: LEGACY_IMGS.mountain, title: "Community Outreach", desc: "Taking the Ma Vote message to schools, villages, and regions across the country." },
];

export default function HomePage() {
  const navigate = useNavigate();
  const [articleQuery, setArticleQuery] = useState("");
  const [openFaq, setOpenFaq] = useState(0);

  function handleArticleSearch(query) {
    navigate(blogSearchPath(query));
  }

  const filteredArticles = useMemo(() => searchArticles(ARTICLES, articleQuery), [articleQuery]);
  const displayedArticles = articleQuery.trim() ? filteredArticles : ARTICLES.slice(0, 4);

  const faqs = [
    { q: "What does Ma Vote 2025 na pawa mean?", a: "It means your vote in 2025 is power. We encourage youth to register, vote peacefully, and say NO to election violence." },
    { q: "How do I register with ELECAM?", a: "Visit any ELECAM office with your National ID. Complete biometric capture and collect your voter card when ready." },
    { q: "Is this campaign political?", a: "We are strictly non-partisan. MDDT Cameroon promotes civil rights education and youth participation, not any party." },
  ];

  return (
    <div className="overflow-x-hidden">
      <PageSEO
        {...PAGE_SEO.home}
        jsonLd={[buildOrganizationSchema(), buildWebPageSchema(PAGE_SEO.home)]}
      />
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-blue-50 via-white to-white py-14 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <p className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm tracking-wide mb-4">
              <span className="w-8 h-px bg-blue-300 hidden sm:inline-block" />
              {SITE.tagline}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight mb-5">
              Not Too Young
              <span className="block text-blue-700">To Vote</span>
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
              {SITE.mission} Register now. YES to voting. NO to violence.
            </p>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
              {SITE.hashtags.map((tag) => (
                <span key={tag} className="text-xs font-medium text-blue-800/80 bg-blue-100/80 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Link
                to="/about"
                className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white font-semibold px-7 py-3 rounded-full transition-colors shadow-md shadow-blue-700/20"
              >
                Learn More
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center justify-center border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white font-semibold px-7 py-3 rounded-full transition-colors"
              >
                Register to Vote
              </Link>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src="/images/hero.png"
              alt="Ma Vote 2025 na pawa — young voters holding voter cards"
              className="w-full max-w-lg h-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="relative">
            <div className="absolute -bottom-3 -left-3 w-full h-full border-2 border-yellow-400 rounded-2xl pointer-events-none" aria-hidden="true" />
            <CampaignImage
              src={LEGACY_IMGS.registrationEvent}
              alt="Ma Vote registration drive with ELECAM biometric capture"
              aspectClass="aspect-[4/3] lg:aspect-[5/4]"
              className="shadow-lg relative"
            />
          </div>

          <div className="space-y-4">
            <SectionHeading
              eyebrow="Your next step"
              title="Everything you need to vote with confidence"
              description="From understanding the electoral process to securing your voter card — start here."
            />
            {QUICK_LINKS.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                className="group flex items-center gap-5 p-5 md:p-6 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 text-left"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-700 font-bold text-sm shrink-0 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="font-bold text-gray-900 text-base md:text-lg group-hover:text-blue-700 transition-colors">{item.title}</div>
                </div>
                <ArrowIcon className="w-5 h-5 text-gray-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="relative py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-gray-900">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Blog & News"
            title="Recent Articles"
            description="Guides and insights on voting, elections, and youth civic engagement."
            action={
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <SearchInput
                  value={articleQuery}
                  onChange={setArticleQuery}
                  onSubmit={handleArticleSearch}
                  placeholder="Search articles"
                  variant="dark"
                  className="w-full sm:w-56"
                  ariaLabel="Search articles"
                />
                <Link to="/blog" className="inline-flex items-center justify-center text-sm font-semibold text-white border border-white/30 hover:bg-white/10 px-5 py-2 rounded-full transition-colors whitespace-nowrap">
                  View all
                </Link>
              </div>
            }
          />
          {articleQuery.trim() && (
            <p className="text-gray-400 text-sm mb-6">
              {filteredArticles.length} result{filteredArticles.length === 1 ? "" : "s"} on this page
              {filteredArticles.length > 0 && (
                <>
                  {" · "}
                  <Link to={blogSearchPath(articleQuery)} className="text-yellow-400 hover:text-yellow-300 font-medium">
                    View all on blog
                  </Link>
                </>
              )}
            </p>
          )}
          {displayedArticles.length === 0 ? (
            <div className="text-center py-12 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-gray-300 mb-3">No articles match &ldquo;{articleQuery}&rdquo;</p>
              <button
                type="button"
                onClick={() => setArticleQuery("")}
                className="text-yellow-400 text-sm font-semibold hover:text-yellow-300"
              >
                Clear search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayedArticles.map((a) => (
                <Link key={a.id} to={a.path} className="group text-left">
                  <div className="relative rounded-xl overflow-hidden mb-4 aspect-[4/3] ring-1 ring-white/10">
                    <img src={a.img} alt={a.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  </div>
                  <div className="text-white text-sm font-semibold group-hover:text-yellow-400 transition-colors line-clamp-2 leading-snug">{a.title}</div>
                  <div className="text-gray-400 text-xs mt-2">{a.displayDate}</div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Events */}
      <section className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Get involved"
            title="Upcoming Events"
            description="Join registration drives, conferences, and community outreach near you."
            action={
              <Link to="/events" className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors shrink-0">
                View calendar
                <ArrowIcon className="w-4 h-4" />
              </Link>
            }
          />
          <div className="grid md:grid-cols-2 gap-6">
            {HOME_EVENTS.slice(0, 2).map((ev) => (
              <Link
                key={ev.title}
                to="/events"
                className="group flex flex-col sm:flex-row gap-4 sm:gap-5 p-5 sm:p-6 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300"
              >
                <div className="w-full sm:w-24 h-40 sm:h-24 rounded-xl overflow-hidden shrink-0 ring-1 ring-black/5">
                  <img src={ev.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="min-w-0">
                  <div className="inline-block text-xs font-bold text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-full mb-2">{ev.date}</div>
                  <div className="font-bold text-gray-900 text-lg leading-snug group-hover:text-blue-700 transition-colors">{ev.title}</div>
                  <div className="text-gray-500 text-sm mt-1">{ev.location}</div>
                  <div className="text-gray-400 text-xs mt-2">{ev.time}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeading
            eyebrow="Our work"
            title="What We Do"
            description="MDDT Cameroon empowers young people through advocacy, education, and community action."
          />
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12 text-left">
            {WHAT_WE_DO.map((item) => (
              <div key={item.title} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                <div className="relative h-52 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-md shadow-blue-700/15">
            Explore our services
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FAQ + media */}
      <section className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-blue-100 shadow-sm">
            <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-2">FAQ</p>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 tracking-tight">Common questions</h2>
            <p className="text-gray-500 text-sm mb-8">Quick answers about voting, registration, and our mission.</p>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={faq.q} className="bg-white rounded-xl overflow-hidden border border-gray-200/80 shadow-sm">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 p-4 md:p-5 text-left hover:bg-gray-50/80 transition-colors"
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-semibold text-sm text-gray-800">{faq.q}</span>
                    <svg
                      className={`w-4 h-4 text-blue-600 shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-4 md:px-5 pb-4 md:pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Link to="/faqs" className="inline-flex items-center gap-2 mt-8 text-blue-700 font-semibold text-sm hover:text-blue-900 transition-colors">
              View all FAQs
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/10 ring-1 ring-black/5 aspect-video bg-gray-900">
            <iframe
              title="Ma Vote 2025 na pawa campaign video"
              src="https://www.youtube.com/embed/LGojRNeqJJg"
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 border-t border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">Trusted by</p>
          <h2 className="text-xl font-black text-gray-900 mb-10">Our Partners</h2>
          <PartnerLogos />
        </div>
      </section>
    </div>
  );
}
