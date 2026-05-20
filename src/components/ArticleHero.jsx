import { Link, useLocation } from "react-router-dom";
import SocialShareButtons from "./SocialShareButtons";
import { getCurrentPageUrl } from "../lib/socialShare";
import { IMGS } from "../data/constants";

const SIDEBAR_LINKS = [
  { label: "Register to Vote", to: "/register" },
  { label: "How To Obtain A Voter's Card In Cameroon", to: "/blog/how-to-obtain-voters-card" },
  { label: "Electoral process in Cameroon", to: "/blog/electoral-process-cameroon" },
];

export default function ArticleHero({ title, date, author, category = "Voting & Registration", image = IMGS.election }) {
  const { pathname } = useLocation();
  const shareUrl = getCurrentPageUrl(pathname);

  return (
    <div className="flex flex-col md:flex-row min-h-0 md:min-h-[240px] border-b border-gray-200">
      <div className="md:w-64 lg:w-72 bg-gradient-to-b from-blue-800 to-blue-900 relative overflow-hidden shrink-0">
        <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} aria-hidden="true" />
        <nav className="relative z-10 p-5 sm:p-6 md:p-8 flex flex-row md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-visible">
          <p className="hidden md:block text-blue-300 text-xs font-bold uppercase tracking-[0.15em] mb-1">Resources</p>
          {SIDEBAR_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-white/85 hover:text-white text-xs sm:text-sm font-medium border-l-0 md:border-l-2 border-transparent hover:border-yellow-400 md:pl-3 px-3 py-2 md:py-0 md:px-0 rounded-full md:rounded-none bg-white/10 md:bg-transparent whitespace-nowrap shrink-0 transition-colors leading-snug"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex-1 bg-gradient-to-br from-gray-50 to-white px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10 flex flex-col justify-center min-w-0">
        <span className="text-blue-700 text-xs font-bold uppercase tracking-[0.2em] mb-2 sm:mb-3">{category}</span>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-3 sm:mb-4">{title}</h1>
        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-x-5 gap-y-2 text-sm text-gray-500">
          <span className="text-blue-700 font-semibold">{date}</span>
          <span>By <span className="text-gray-700 font-medium">{author}</span></span>
          <span className="flex items-center gap-2">
            <span className="text-gray-400">Share</span>
            <SocialShareButtons title={title} url={shareUrl} />
          </span>
        </div>
      </div>
    </div>
  );
}
