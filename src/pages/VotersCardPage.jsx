import { useState } from "react";
import { Link } from "react-router-dom";
import ArticleHero from "../components/ArticleHero";
import ArticleSidebar, { ArticleSidebarMobile } from "../components/ArticleSidebar";
import BlogEngagement from "../components/BlogEngagement";
import PageSEO from "../components/PageSEO";
import { IMGS } from "../data/constants";
import { buildArticleSchema, buildWebPageSchema, getArticleSeo, PAGE_SEO } from "../lib/seo";

const SECTIONS = [
  "Introduction",
  "Eligibility Criteria",
  "Validity and Renewal of Voter's Card",
  "How to Obtain your Voter's Card",
  "Importance of Obtaining a Voter's Card",
  "Recommendations",
  "Conclusion",
  "References",
];

export default function VotersCardPage() {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="bg-gray-50 overflow-x-hidden">
      <PageSEO
        {...PAGE_SEO.votersCard}
        canonicalPath={PAGE_SEO.votersCard.canonicalPath}
        image={IMGS.register}
        type="article"
        jsonLd={[
          buildArticleSchema({
            ...getArticleSeo({
              title: PAGE_SEO.votersCard.title,
              excerpt: PAGE_SEO.votersCard.description,
              path: PAGE_SEO.votersCard.canonicalPath,
              img: IMGS.register,
              author: "Youth Advocacy Team",
              displayDate: "January 23, 2025",
            }),
          }),
          buildWebPageSchema(PAGE_SEO.votersCard),
        ]}
      />
      <ArticleHero
        title="How To Obtain A Voter's Card In Cameroon: A Detailed Guide"
        date="January 20, 2025"
        author="John Doe"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 flex flex-col lg:flex-row gap-8 lg:gap-10">
        <aside className="w-full lg:w-56 xl:w-64 shrink-0 hidden lg:block">
          <div className="sticky top-6 bg-white border border-gray-200 rounded-xl p-4">
            {SECTIONS.map((s, i) => (
              <button
                key={s}
                type="button"
                onClick={() => setActiveSection(i)}
                className={`block text-sm w-full text-left py-1.5 px-2 rounded transition-colors ${activeSection === i ? "text-blue-700 font-semibold bg-blue-50" : "text-gray-500 hover:text-blue-600"}`}
              >
                {s}
              </button>
            ))}
          </div>
        </aside>

        <div className="flex-1 min-w-0 w-full max-w-none lg:max-w-2xl">
          <div className="lg:hidden mb-6 -mx-1 overflow-x-auto pb-2">
            <div className="flex gap-2 px-1">
              {SECTIONS.map((s, i) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setActiveSection(i)}
                  className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium shrink-0 transition-colors ${
                    activeSection === i
                      ? "bg-blue-700 text-white"
                      : "bg-white border border-gray-200 text-gray-600 hover:border-blue-300"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden mb-6 sm:mb-8 h-44 sm:h-56">
            <img src={IMGS.register} alt="Registration" className="w-full h-full object-cover" />
          </div>
          <section className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-black text-gray-900 mb-3">Introduction</h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">A voter&apos;s card is defined as a card provided by ELECAM to each Cameroonian citizen that allows him or her to vote in an election. This card includes the voter&apos;s full name, date and place of birth, parentage, photograph, fingerprints, occupation, domicile, and residence.</p>
            <p className="text-gray-700 text-sm leading-relaxed">Citizens&apos; lack of awareness of procedure, delays in obtaining National ID cards, which contribute to low voter registration, delays in issuing voter cards by ELECAM officials, and the problematic nature of voter registration in conflict and post-conflict areas are some of the challenges faced in the electoral process.</p>
          </section>
          <div className="rounded-xl overflow-hidden mb-4 h-36 sm:h-44">
            <img src={IMGS.voterCard} alt="ID Card" className="w-full h-full object-cover" />
          </div>
          <section className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-black text-gray-900 mb-3">Eligibility Criteria</h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">To be eligible for voter registration, the individual must be a Cameroonian citizen, be 20 years old, have resided in their municipality for at least 6 months, and have no criminal record that strips them of civil and political rights.</p>
          </section>
          <section className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-black text-gray-900 mb-3">Validity and Renewal of Voter&apos;s Card</h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">A voter&apos;s card is intended to be permanent. If it is lost or destroyed, it can be renewed. If your card is lost, your name may remain on the electoral register and you may vote with your national identity card—confirm with ELECAM before election day.</p>
            <p className="text-gray-700 text-sm leading-relaxed">If you change polling station or municipality—for example, registered in Limbe and now living in Buea—visit the nearest ELECAM office, surrender the old card, complete a transfer form, and receive a new card for your new location.</p>
          </section>
          <section className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-black text-gray-900 mb-5">How to Obtain your Voter&apos;s Card</h2>
            <div className="space-y-4">
              {[
                { n: 1, title: "Registration:", desc: "It is done at any nearby ELECAM office with a valid National Identity Card." },
                { n: 2, title: "Biometric Capture:", desc: "Picture and fingerprints of the voter are taken." },
                { n: 3, title: "Biographic Information:", desc: "Name, gender, date of birth and address are recorded." },
                { n: 4, title: "Issuance of a receipt:", desc: "A receipt is given to collect the voter's card when available." },
                { n: 5, title: "Issuance of voter's card:", desc: "The card is issued at ELECAM offices before elections." },
              ].map((step) => (
                <div key={step.n} className="flex gap-3 sm:gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">{step.n}</div>
                  <div className="min-w-0"><span className="font-bold text-gray-900 text-sm">{step.title}</span><span className="text-gray-600 text-sm"> {step.desc}</span></div>
                </div>
              ))}
            </div>
          </section>
          <div className="rounded-xl overflow-hidden mb-6 sm:mb-8 h-36 sm:h-44">
            <img src={IMGS.registrationEvent} alt="Biometric" className="w-full h-full object-cover" />
          </div>
          <section className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-black text-gray-900 mb-3">Importance of Obtaining a Voter&apos;s Card</h2>
            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-2">
              <li>Elect leaders and hold them accountable.</li>
              <li>Exercise democratic rights in referendums and local elections.</li>
              <li>Protect electoral integrity through biometric identification.</li>
              <li>Have a say on roads, education, healthcare, and local issues.</li>
              <li>Your vote is power—you need a voter&apos;s card to participate.</li>
            </ul>
          </section>
          <section className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-black text-gray-900 mb-3">Recommendations</h2>
            <ol className="list-decimal pl-5 text-gray-700 text-sm space-y-2">
              <li>Streamline National ID issuance so more citizens can register with ELECAM.</li>
              <li>Grassroots NGOs should run awareness campaigns for apolitical youth on democratic duties.</li>
              <li>In conflict areas, give internally displaced persons priority support to register and vote.</li>
            </ol>
          </section>
          <section className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-black text-gray-900 mb-3">Conclusion</h2>
            <p className="text-gray-700 text-sm leading-relaxed">Voting is for all youths—you are not too young to vote. Obtaining a voter&apos;s card is how young people exercise the duty to vote and shape policies that affect their lives. Participate in elections.</p>
          </section>
          <section className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-black text-gray-900 mb-3">References</h2>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>ACE Project — biometric voter registration in Cameroon</li>
              <li>ELECAM — registration on electoral lists (elecam.cm)</li>
              <li>The Electoral Code of Cameroon; The Constitution of Cameroon</li>
            </ul>
          </section>
          <div className="flex flex-wrap items-center gap-2 pt-6 sm:pt-8 border-t border-gray-200">
            <span className="text-sm text-gray-500">Tags:</span>
            {["voters", "civil rights", "Cameroon"].map((tag) => (
              <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
          <div className="mt-6 sm:mt-8 p-4 sm:p-5 bg-white rounded-xl flex flex-col sm:flex-row sm:justify-between gap-4 text-sm border border-gray-100">
            <div>
              <div className="text-xs text-gray-400">Previous article</div>
              <Link to="/blog/electoral-process-cameroon" className="font-semibold text-blue-600 hover:text-blue-800 line-clamp-2">Electoral process in Cameroon</Link>
            </div>
            <div className="sm:text-right">
              <div className="text-xs text-gray-400">Next article</div>
              <Link to="/blog/voter-eligibility-cameroon" className="font-semibold text-blue-600 hover:text-blue-800 line-clamp-2">Voter eligibility in Cameroon</Link>
            </div>
          </div>
          <BlogEngagement slug="how-to-obtain-voters-card" />
          <ArticleSidebarMobile />
        </div>
        <ArticleSidebar />
      </div>
    </div>
  );
}
