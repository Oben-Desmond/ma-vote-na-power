import PageHero from "../components/PageHero";
import PageSEO from "../components/PageSEO";
import SectionHeading from "../components/SectionHeading";
import { EVENTS } from "../data/constants";
import { buildWebPageSchema, PAGE_SEO } from "../lib/seo";

const CALENDAR_DAYS = Array.from({ length: 31 }, (_, i) => i + 1);
const HIGHLIGHTED = [22, 23, 24, 25, 26, 29, 30];

export default function EventsPage() {
  return (
    <div className="bg-gray-50">
      <PageSEO {...PAGE_SEO.events} jsonLd={buildWebPageSchema(PAGE_SEO.events)} />
      <PageHero
        title="Upcoming Events"
        subtitle="Registration drives, conferences, and community outreach across Cameroon."
        crumbs={[{ label: "Home", to: "/" }, { label: "Upcoming Events" }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-sm lg:col-span-1">
            <div className="flex items-center justify-between mb-4 sm:mb-5">
              <h3 className="font-black text-gray-900 text-sm tracking-wide">January 2025</h3>
              <div className="flex gap-1 text-gray-400">
                <button type="button" className="w-8 h-8 rounded-full hover:bg-blue-50 hover:text-blue-700 transition-colors" aria-label="Previous month">‹</button>
                <button type="button" className="w-8 h-8 rounded-full hover:bg-blue-50 hover:text-blue-700 transition-colors" aria-label="Next month">›</button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-0.5 sm:gap-1 text-center text-[10px] sm:text-xs mb-2 text-gray-400 font-semibold uppercase tracking-wide">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => <span key={d}>{d.slice(0, 3)}</span>)}
            </div>
            <div className="grid grid-cols-7 gap-0.5 sm:gap-1 text-center text-xs sm:text-sm">
              {CALENDAR_DAYS.map((d) => (
                <span
                  key={d}
                  className={`py-1 sm:py-1.5 rounded-full transition-colors ${HIGHLIGHTED.includes(d) ? "bg-blue-700 text-white font-semibold" : "text-gray-700 hover:bg-gray-100"}`}
                >
                  {d}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <SectionHeading
              eyebrow="Calendar"
              title="Featured events"
              description="Join us at conferences, outreach programs, and registration drives."
            />
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {EVENTS.map((ev) => (
                <article
                  key={ev.title}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all duration-300"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img src={ev.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-xs font-bold text-white bg-blue-700/90 px-2.5 py-0.5 rounded-full">{ev.date}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 text-sm line-clamp-2 mb-2 group-hover:text-blue-700 transition-colors">{ev.title}</h3>
                    <p className="text-gray-500 text-xs mb-2 line-clamp-1">{ev.location}</p>
                    <p className="text-gray-400 text-xs flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {ev.time}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
