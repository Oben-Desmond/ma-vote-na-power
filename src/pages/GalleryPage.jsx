import { useState } from "react";
import PageHero from "../components/PageHero";
import PageSEO from "../components/PageSEO";
import SectionHeading from "../components/SectionHeading";
import { GALLERY_PHOTOS, GALLERY_VIDEOS } from "../data/constants";
import { buildWebPageSchema, PAGE_SEO } from "../lib/seo";

export default function GalleryPage() {
  const [tab, setTab] = useState("photos");
  const items = tab === "photos" ? GALLERY_PHOTOS : GALLERY_VIDEOS;

  return (
    <div className="bg-gray-50">
      <PageSEO {...PAGE_SEO.gallery} jsonLd={buildWebPageSchema(PAGE_SEO.gallery)} />
      <PageHero
        title="Gallery"
        subtitle="Photos and videos from our conferences, registration drives, and community outreach."
        crumbs={[{ label: "Home", to: "/" }, { label: "Gallery" }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <SectionHeading
            eyebrow="Media"
            title={tab === "photos" ? "Photo gallery" : "Video gallery"}
            description="Moments from Ma Vote 2025 na pawa and MDDT Cameroon programs."
          />
          <div className="flex gap-2 shrink-0">
            {["photos", "videos"].map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={`px-5 py-2 rounded-full text-sm font-semibold capitalize transition-colors ${
                  tab === t
                    ? "bg-blue-700 text-white shadow-md shadow-blue-700/20"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-700"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
          {items.map((src, i) => (
            <div key={i} className="break-inside-avoid relative rounded-2xl overflow-hidden group ring-1 ring-black/5 shadow-sm hover:shadow-lg transition-shadow">
              <img src={src} alt="" className="w-full object-cover group-hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
              {tab === "videos" && (
                <>
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/95 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white/30">
                      <svg className="w-5 h-5 text-blue-700 ml-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <p className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white text-xs line-clamp-2">
                    Community outreach and youth advocacy event
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
