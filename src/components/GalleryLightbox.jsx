import { useCallback, useEffect } from "react";

function NavButton({ label, onClick, className, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm transition-colors ${className}`}
    >
      {children}
    </button>
  );
}

export default function GalleryLightbox({ items, index, onClose, onNavigate }) {
  const item = items[index];
  const hasPrev = index > 0;
  const hasNext = index < items.length - 1;

  const goPrev = useCallback(() => {
    if (hasPrev) onNavigate(index - 1);
  }, [hasPrev, index, onNavigate]);

  const goNext = useCallback(() => {
    if (hasNext) onNavigate(index + 1);
  }, [hasNext, index, onNavigate]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, goPrev, goNext]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/95"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery viewer"
    >
      <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-4 shrink-0">
        <p className="text-white/70 text-sm font-medium tabular-nums">
          {index + 1} / {items.length}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="relative flex-1 flex items-center justify-center px-14 sm:px-20 py-4 min-h-0">
        {hasPrev && (
          <NavButton label="Previous image" onClick={goPrev} className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </NavButton>
        )}

        <img
          key={item.id}
          src={item.src}
          alt={item.alt}
          className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
        />

        {hasNext && (
          <NavButton label="Next image" onClick={goNext} className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </NavButton>
        )}
      </div>

      <div className="shrink-0 px-4 sm:px-6 py-4 sm:py-5 border-t border-white/10">
        <p className="text-white text-sm sm:text-base text-center max-w-3xl mx-auto leading-relaxed">
          {item.alt}
        </p>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1 justify-center">
          {items.map((thumb, i) => (
            <button
              key={thumb.id}
              type="button"
              onClick={() => onNavigate(i)}
              aria-label={`View image ${i + 1}: ${thumb.alt}`}
              aria-current={i === index ? "true" : undefined}
              className={`shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden ring-2 transition-all ${
                i === index ? "ring-white opacity-100 scale-105" : "ring-transparent opacity-50 hover:opacity-80"
              }`}
            >
              <img src={thumb.src} alt="" className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="absolute inset-0 -z-10"
        aria-label="Close gallery"
        onClick={onClose}
        tabIndex={-1}
      />
    </div>
  );
}
