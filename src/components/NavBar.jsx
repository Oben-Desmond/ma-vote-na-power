import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_ITEMS, SITE } from "../data/constants";

function NavDropdown({ item }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isActive = item.children?.some((c) => location.pathname === c.path);

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        className={`flex items-center gap-1 py-4 text-sm font-medium border-b-2 transition-colors ${
          isActive ? "border-yellow-400 text-white" : "border-transparent text-blue-100 hover:text-white"
        }`}
      >
        {item.label}
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 bg-blue-800 rounded-b-lg shadow-lg py-2 min-w-[260px] z-50">
          {item.children.map((child) => (
            <Link
              key={child.path}
              to={child.path}
              className="block px-4 py-2.5 text-sm text-blue-100 hover:bg-blue-600 hover:text-white transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileNavDropdown({ item, onClose }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isActive = item.children?.some((c) => location.pathname === c.path);

  return (
    <div className="border-b border-blue-600/50">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`w-full flex items-center justify-between py-3.5 px-4 text-sm font-medium transition-colors ${
          isActive ? "text-yellow-400" : "text-white"
        }`}
        aria-expanded={open}
      >
        {item.label}
        <svg className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      {open && (
        <div className="pb-2 px-2 bg-blue-800/50">
          {item.children.map((child) => (
            <Link
              key={child.path}
              to={child.path}
              onClick={onClose}
              className={`block py-2.5 px-4 text-sm rounded-lg transition-colors ${
                location.pathname === child.path
                  ? "bg-blue-600 text-white font-medium"
                  : "text-blue-100 hover:bg-blue-600/60 hover:text-white"
              }`}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function NavBar({ mobileOpen = false, onClose }) {
  const location = useLocation();

  return (
    <>
      <nav className="hidden lg:block bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-6">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <NavDropdown key={item.label} item={item} />
            ) : (
              <Link
                key={item.label}
                to={item.path}
                className={`py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  location.pathname === item.path
                    ? "border-yellow-400 text-white"
                    : "border-transparent text-blue-100 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </nav>

      {mobileOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={onClose}
            aria-label="Close menu overlay"
          />
          <nav className="fixed top-[57px] sm:top-[61px] left-0 right-0 bottom-0 z-50 bg-blue-700 text-white overflow-y-auto lg:hidden">
            <div className="px-4 py-4 border-b border-blue-600/50 space-y-2 text-sm">
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-blue-100 hover:text-white py-1">
                <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </span>
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-blue-100 hover:text-white py-1 break-all">
                <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </span>
                {SITE.email}
              </a>
            </div>

            {NAV_ITEMS.map((item) =>
              item.children ? (
                <MobileNavDropdown key={item.label} item={item} onClose={onClose} />
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={onClose}
                  className={`block py-3.5 px-4 text-sm font-medium border-b border-blue-600/50 transition-colors ${
                    location.pathname === item.path
                      ? "text-yellow-400 bg-blue-800/40"
                      : "text-white hover:bg-blue-600/40"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}

            <div className="p-4">
              <Link
                to="/register"
                onClick={onClose}
                className="block w-full text-center bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 rounded-full transition-colors"
              >
                Register to Vote
              </Link>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
