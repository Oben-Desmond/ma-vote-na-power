import { Link } from "react-router-dom";
import HeaderSearch from "./HeaderSearch";
import Logo from "./Logo";
import { SITE } from "../data/constants";

export default function TopBar({ mobileOpen = false, onMenuToggle }) {
  return (
    <div className="bg-white border-b border-gray-100 px-4 sm:px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <Link to="/" className="cursor-pointer shrink-0">
          <Logo variant="horizontal-dark" className="h-9 sm:h-11 max-w-[160px] sm:max-w-[220px]" />
        </Link>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm text-gray-600 min-w-0">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <div className="min-w-0">
              <div className="text-xs text-gray-400">Call Us</div>
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="font-semibold text-gray-700 hover:text-blue-600 truncate block">{SITE.phone}</a>
            </div>
          </div>
          <div className="hidden xl:flex items-center gap-2 min-w-0">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <div className="min-w-0">
              <div className="text-xs text-gray-400">Send Inquiries</div>
              <a href={`mailto:${SITE.email}`} className="font-semibold text-gray-700 hover:text-blue-600 truncate block">{SITE.email}</a>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <HeaderSearch />
            <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors whitespace-nowrap">
              Register to Vote
            </Link>
          </div>
        </div>

        <div className="flex lg:hidden items-center gap-1 sm:gap-2 shrink-0">
          <HeaderSearch />
          <Link
            to="/register"
            className="inline-flex bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-colors whitespace-nowrap"
          >
            Register
          </Link>
          <button
            type="button"
            onClick={onMenuToggle}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
