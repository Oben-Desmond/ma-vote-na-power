import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import RecentComments from "./RecentComments";
import SearchInput from "./SearchInput";
import { ARTICLES, IMGS } from "../data/constants";
import { blogSearchPath } from "../lib/articleSearch";

function SidebarContent({ compact = false }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get("search") ?? "");

  function handleSearch(value) {
    navigate(blogSearchPath(value));
  }

  return (
    <>
      <SearchInput
        value={query}
        onChange={setQuery}
        onSubmit={handleSearch}
        placeholder="Search articles"
        variant="subtle"
        ariaLabel="Search articles"
      />

      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.15em] mb-3">Recent</p>
        <h4 className="font-bold text-gray-900 mb-4">Recent Posts</h4>
        <div className="space-y-4">
          {ARTICLES.slice(0, compact ? 3 : 4).map((a) => (
            <Link key={a.id} to={a.path} className="flex gap-3 items-center group">
              <div className="w-11 h-11 rounded-lg overflow-hidden shrink-0 ring-1 ring-black/5">
                <img src={a.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 line-clamp-2 leading-snug transition-colors">{a.title}</div>
                <div className="text-xs text-gray-400 mt-0.5">{a.displayDate}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {!compact && (
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
          <h4 className="font-bold text-gray-900 mb-4">Recent Comments</h4>
          <RecentComments />
        </div>
      )}

      <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-5 text-white text-center shadow-lg shadow-blue-900/15 overflow-hidden relative">
        <div className="rounded-xl overflow-hidden mb-4 h-24 ring-1 ring-white/20">
          <img src={IMGS.electionsWorkshop} alt="Voter registration workshop" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="text-sm font-bold mb-1">Are you a Registered Voter?</div>
        <Link to="/register" className="inline-block bg-white text-blue-800 font-bold text-sm px-5 py-2 rounded-full mt-2 hover:bg-blue-50 transition-colors">
          Register to Vote
        </Link>
      </div>
    </>
  );
}

export default function ArticleSidebar({ className = "hidden lg:block w-64 xl:w-72 shrink-0" }) {
  return (
    <aside className={className}>
      <div className="sticky top-6 space-y-6">
        <SidebarContent />
      </div>
    </aside>
  );
}

export function ArticleSidebarMobile() {
  return (
    <aside className="lg:hidden w-full mt-10 pt-10 border-t border-gray-200">
      <div className="space-y-6">
        <SidebarContent compact />
      </div>
    </aside>
  );
}
