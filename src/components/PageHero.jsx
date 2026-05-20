import { Link } from "react-router-dom";

export default function PageHero({ title, subtitle, crumbs = [] }) {
  return (
    <section className="px-4 sm:px-6 py-4 sm:py-6 md:py-8">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-blue-700 via-blue-800 to-blue-950 rounded-2xl sm:rounded-3xl px-5 sm:px-8 md:px-12 py-8 sm:py-10 md:py-12 relative overflow-hidden shadow-lg shadow-blue-900/15">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }}
          aria-hidden="true"
        />
        <div className="absolute -right-8 -top-8 w-48 h-48 rounded-full bg-blue-400/10 blur-2xl pointer-events-none" aria-hidden="true" />
        <div className="absolute right-12 top-1/2 -translate-y-1/2 pointer-events-none hidden md:block" aria-hidden="true">
          <div className="w-28 h-28 rounded-full border-2 border-blue-400/30" />
          <div className="w-20 h-20 rounded-full border-2 border-blue-300/20 absolute -right-4 top-6" />
        </div>

        <div className="relative z-10">
          {crumbs.length > 0 && (
            <nav className="mb-3 text-blue-200/90 text-xs sm:text-sm flex flex-wrap gap-x-1 gap-y-0.5">
              {crumbs.map((c, i) => (
                <span key={c.label}>
                  {i > 0 && <span className="mx-2 text-blue-400/60">/</span>}
                  {c.to ? (
                    <Link to={c.to} className="hover:text-white transition-colors">{c.label}</Link>
                  ) : (
                    <span className="text-white/90">{c.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">{title}</h1>
          {subtitle && (
            <p className="text-blue-100/90 text-sm md:text-base mt-3 max-w-2xl leading-relaxed">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
}
