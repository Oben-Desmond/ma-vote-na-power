import { useMemo, useState } from "react";
import GalleryLightbox from "../components/GalleryLightbox";
import PageHero from "../components/PageHero";
import PageSEO from "../components/PageSEO";
import SectionHeading from "../components/SectionHeading";
import { GALLERY_CATEGORIES, filterGalleryItems } from "../data/gallery";
import { buildWebPageSchema, PAGE_SEO } from "../lib/seo";

export default function GalleryPage() {
  const [category, setCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const items = useMemo(() => filterGalleryItems(category), [category]);

  function openLightbox(index) {
    setLightboxIndex(index);
  }

  function closeLightbox() {
    setLightboxIndex(null);
  }

  return (
    <div className="bg-gray-50">
      <PageSEO {...PAGE_SEO.gallery} jsonLd={buildWebPageSchema(PAGE_SEO.gallery)} />
      <PageHero
        title="Gallery"
        subtitle="Photos from our conferences, registration drives, and community outreach across Cameroon."
        crumbs={[{ label: "Home", to: "/" }, { label: "Gallery" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <SectionHeading
            eyebrow="Media"
            title="Campaign photo gallery"
            description={`${items.length} photo${items.length === 1 ? "" : "s"} from Ma Vote 2025 na pawa and MDDT Cameroon programs.`}
          />
          <div className="flex flex-wrap gap-2 shrink-0">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setCategory(cat.id);
                  setLightboxIndex(null);
                }}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  category === cat.id
                    ? "bg-blue-700 text-white shadow-md shadow-blue-700/20"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {items.length === 0 ? (
          <p className="text-center text-gray-500 py-16">No photos in this category yet.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {items.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => openLightbox(index)}
                className="group relative aspect-square rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-sm hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-shadow text-left"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 transition-all duration-300">
                  <p className="text-white text-xs font-medium line-clamp-2 leading-snug">{item.alt}</p>
                </div>
                <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 text-blue-700 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity shadow-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        )}

        <p className="text-center text-gray-400 text-xs mt-8">
          Click any photo to open the slideshow. Use arrow keys or the thumbnail strip to navigate.
        </p>
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          items={items}
          index={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
