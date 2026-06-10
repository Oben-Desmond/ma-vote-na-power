import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ArrowIcon from "../components/ArrowIcon";
import PageHero from "../components/PageHero";
import PageSEO from "../components/PageSEO";
import SearchInput from "../components/SearchInput";
import SectionHeading from "../components/SectionHeading";
import { FAQ_SECTIONS, IMGS, POPULAR_QUESTIONS } from "../data/constants";
import { findFirstFaqMatchId, searchFaqSections } from "../lib/searchFaqs";
import { buildFaqSchema, buildWebPageSchema, PAGE_SEO } from "../lib/seo";

function FaqItem({ item, id, openId, setOpenId }) {
  const isOpen = openId === id;
  const isList = Array.isArray(item.a);

  return (
    <div className="border border-gray-200/80 rounded-xl overflow-hidden mb-3 bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setOpenId(isOpen ? null : id)}
        className="w-full flex items-center justify-between gap-4 p-4 md:p-5 text-left hover:bg-gray-50/80 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-sm text-gray-800">{item.q}</span>
        <svg
          className={`w-4 h-4 text-blue-600 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-4 md:px-5 pb-4 md:pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
          {isList ? (
            <ul className="list-disc pl-5 space-y-1">
              {item.a.map((line) => <li key={line}>{line}</li>)}
            </ul>
          ) : (
            <p>{item.a}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  const [openId, setOpenId] = useState("0-0");
  const [query, setQuery] = useState("");

  const filteredSections = useMemo(() => searchFaqSections(FAQ_SECTIONS, query), [query]);

  useEffect(() => {
    if (!query.trim()) return;
    const matchId = findFirstFaqMatchId(FAQ_SECTIONS, query);
    if (matchId) setOpenId(matchId);
  }, [query]);

  return (
    <div className="bg-gray-50">
      <PageSEO
        {...PAGE_SEO.faqs}
        jsonLd={[buildFaqSchema(FAQ_SECTIONS), buildWebPageSchema(PAGE_SEO.faqs)]}
      />
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Answers about voting, registration, elections, and our non-partisan youth advocacy work."
        crumbs={[{ label: "Home", to: "/" }, { label: "FAQs" }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 flex flex-col lg:flex-row gap-8 lg:gap-10">
        <aside className="w-full lg:w-72 shrink-0 space-y-6">
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder="Search questions"
            ariaLabel="Search questions"
          />
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">?</div>
              <h3 className="font-bold text-gray-900">Popular Questions</h3>
            </div>
            <ul className="space-y-3">
              {POPULAR_QUESTIONS.map((q) => (
                <li key={q.path}>
                  <Link to={q.path} className="flex items-center justify-between text-sm text-blue-700 hover:text-blue-900 group">
                    <span className="line-clamp-2 flex-1">{q.label}</span>
                    <ArrowIcon className="w-4 h-4 shrink-0 ml-2 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <img src={IMGS.electionsWorkshop} alt="Voter registration drive" className="w-full h-36 object-cover" loading="lazy" />
            <div className="p-5 text-center">
              <p className="font-bold text-gray-900 text-sm mb-3">Are you a Registered Voter?</p>
              <Link to="/register" className="inline-block bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-blue-800 transition-colors">
                Register to Vote
              </Link>
            </div>
          </div>
        </aside>

        <div className="flex-1">
          <SectionHeading
            eyebrow="Help centre"
            title="Browse questions"
            description={query ? (filteredSections.length > 0 ? `Showing results for “${query}”` : `No questions match “${query}”`) : "Expand any question to read the full answer."}
          />

          {filteredSections.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <p className="text-gray-600 mb-3">Try a different keyword or browse all questions.</p>
              <button
                type="button"
                onClick={() => setQuery("")}
                className="text-blue-700 text-sm font-semibold hover:text-blue-900"
              >
                Clear search
              </button>
            </div>
          ) : (
            filteredSections.map((section) => {
              const sectionIndex = FAQ_SECTIONS.findIndex((s) => s.title === section.title);
              return (
                <div key={section.title} className="mb-10">
                  <h3 className="text-blue-700 font-bold text-sm uppercase tracking-wide mb-4">{section.title}</h3>
                  {section.items.map((item) => {
                    const originalIndex = FAQ_SECTIONS[sectionIndex].items.findIndex((i) => i.q === item.q);
                    const id = `${sectionIndex}-${originalIndex}`;
                    return (
                      <FaqItem key={item.q} item={item} id={id} openId={openId} setOpenId={setOpenId} />
                    );
                  })}
                </div>
              );
            })
          )}
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20 md:pb-24">
        <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-8 sm:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lg shadow-red-900/15">
          <div>
            <p className="text-red-200 text-xs font-bold uppercase tracking-[0.2em] mb-2">Need more help?</p>
            <p className="text-white font-bold text-lg md:text-xl">Still have questions? We&apos;re here to help.</p>
          </div>
          <Link to="/contact" className="bg-white text-red-600 font-semibold px-7 py-3 rounded-full hover:bg-red-50 transition-colors shrink-0">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
