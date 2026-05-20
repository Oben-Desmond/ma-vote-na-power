import { Link } from "react-router-dom";
import ArticleHero from "../components/ArticleHero";
import ArticleSidebar, { ArticleSidebarMobile } from "../components/ArticleSidebar";
import { IMGS } from "../data/constants";

const TOC = [
  "What are elections?",
  "Types of elections in Cameroon",
  "History of Elections in Cameroon",
  "The Legal Framework for Elections",
  "What Does the Electoral Code Say?",
  "When Are Elections Conducted?",
  "Criteria for Voting and Voter Eligibility",
  "Voting Procedure in Cameroon",
  "Voter Registration in Cameroon",
  "Fraudulent Activities in Previous Electoral Processes",
];

const SECTIONS = [
  { n: 1, title: "What are elections?", text: "Elections are the formal process by which citizens choose their representatives and leaders. In Cameroon, elections are organized by ELECAM under the framework of the Constitution and Electoral Code.", img: null },
  { n: 2, title: "Cameroon holds several types of elections", list: ["Presidential Elections", "Parliamentary Elections", "Municipal Elections", "Regional Elections"], img: null },
  { n: 3, title: "History of Elections in Cameroon", text: "Cameroon has held regular elections since reunification, with evolving legal frameworks to strengthen democratic governance and youth participation.", img: IMGS.civicPageant },
  { n: 4, title: "The Legal Framework for Elections in Cameroon", text: "The Constitution and Electoral Code define the powers of ELECAM, registration requirements, and procedures for contesting results.", img: IMGS.ballot },
  { n: 5, title: "What Does the Electoral Code Say?", text: "The code sets eligibility, registration deadlines, campaign rules, and sanctions for electoral fraud.", img: null },
  { n: 6, title: "When Are Elections Conducted?", text: "Election dates are proclaimed by the President for presidential polls; other cycles follow statutory calendars announced by ELECAM.", img: IMGS.youth1 },
  { n: 7, title: "Criteria for Voting and Voter Eligibility", list: ["Cameroonian citizenship", "Minimum age of 20 years", "Residence in municipality for at least 6 months", "No deprivation of civil and political rights"], img: null },
  { n: 8, title: "Voting Procedure in Cameroon", text: "On election day, voters present their voter's card or ID, receive a ballot, vote in secret, and cast the ballot in the official box under ELECAM supervision.", img: null },
  { n: 9, title: "Voter Registration in Cameroon", text: "Registration is conducted at ELECAM offices with biometric capture and issuance of a voter's card before elections.", img: IMGS.register },
  { n: 10, title: "Fraudulent Activities in Previous Electoral Processes", text: "Past elections have faced challenges including irregular registration, ballot stuffing concerns, and access barriers in conflict-affected areas—underscoring the need for youth civic monitoring.", img: null },
];

export default function ElectoralProcessPage() {
  return (
    <div className="bg-gray-50 overflow-x-hidden">
      <ArticleHero title="Electoral process in Cameroon" date="March 23, 2023" author="MDDT Cameroon" image={IMGS.elecam} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 flex flex-col lg:flex-row gap-8 lg:gap-10">
        <aside className="w-full lg:w-56 xl:w-64 shrink-0 hidden lg:block">
          <div className="sticky top-6 bg-white border border-gray-200 rounded-xl p-4">
            {TOC.map((s, i) => (
              <a key={s} href={`#section-${i}`} className="block text-sm text-gray-600 hover:text-blue-600 py-1.5 px-2 rounded hover:bg-blue-50">{s}</a>
            ))}
            <div className="mt-6 bg-blue-700 rounded-xl p-4 text-white text-xs">
              <p className="font-bold mb-2">Voting & Registration</p>
              <Link to="/register" className="underline hover:text-blue-200">Register to Vote →</Link>
            </div>
          </div>
        </aside>

        <div className="flex-1 min-w-0 w-full max-w-none lg:max-w-2xl">
          <div className="lg:hidden mb-6 -mx-1 overflow-x-auto pb-2">
            <div className="flex gap-2 px-1">
              {TOC.map((s, i) => (
                <a
                  key={s}
                  href={`#section-${i}`}
                  className="whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium shrink-0 bg-white border border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-700 transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm border border-gray-100">
            {SECTIONS.map((sec, i) => (
              <section key={sec.n} id={`section-${i}`} className="mb-8 sm:mb-10 scroll-mt-24">
                <div className="flex gap-3 mb-3">
                  <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">{sec.n}</span>
                  <h2 className="text-base sm:text-lg font-black text-gray-900 min-w-0">{sec.title}</h2>
                </div>
                {sec.img && (
                  <div className="rounded-xl overflow-hidden mb-4 h-36 sm:h-44">
                    <img src={sec.img} alt="" className="w-full h-full object-cover" />
                  </div>
                )}
                {sec.list ? (
                  <ul className="list-disc pl-6 sm:pl-8 text-gray-700 text-sm space-y-1">
                    {sec.list.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                ) : (
                  <p className="text-gray-700 text-sm leading-relaxed">{sec.text}</p>
                )}
              </section>
            ))}
            <div className="bg-blue-50 rounded-xl p-4 sm:p-5 text-sm text-gray-700">
              <h3 className="font-bold text-gray-900 mb-3">References</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Constitution of the Republic of Cameroon</li>
                <li>Electoral Code of Cameroon</li>
                <li>ELECAM — Elections Cameroon official resources</li>
              </ol>
            </div>
          </div>

          <ArticleSidebarMobile />
        </div>
        <ArticleSidebar />
      </div>
    </div>
  );
}
