import { Link } from "react-router-dom";

export default function CallToAction({
  title,
  description,
  primaryTo,
  primaryLabel,
  secondaryTo,
  secondaryLabel,
  image,
  variant = "default",
}) {
  const isYellow = variant === "yellow";

  return (
    <div
      className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row gap-6 sm:gap-8 items-start md:items-center relative overflow-hidden ${
        isYellow
          ? "bg-gradient-to-br from-yellow-400 to-yellow-300 border border-yellow-500/20"
          : "bg-white border border-gray-100 shadow-lg shadow-blue-900/5"
      }`}
    >
      {image && !isYellow && (
        <img
          src={image}
          alt=""
          className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-[0.07] pointer-events-none"
        />
      )}
      <div className="flex-1 relative z-10">
        <h2 className={`text-2xl font-black mb-3 tracking-tight ${isYellow ? "text-gray-900" : "text-gray-900"}`}>
          {title}
        </h2>
        <p className={`text-sm leading-relaxed mb-6 max-w-lg ${isYellow ? "text-gray-800" : "text-gray-600"}`}>
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          {secondaryTo && (
            <Link
              to={secondaryTo}
              className={`inline-flex items-center justify-center font-semibold px-6 py-2.5 rounded-full text-sm transition-colors ${
                isYellow
                  ? "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                  : "border-2 border-blue-700 text-blue-700 hover:bg-blue-50"
              }`}
            >
              {secondaryLabel}
            </Link>
          )}
          {primaryTo && (
            <Link
              to={primaryTo}
              className={`inline-flex items-center justify-center font-semibold px-6 py-2.5 rounded-full text-sm transition-colors ${
                isYellow
                  ? "bg-gray-900 text-white hover:bg-gray-800"
                  : "bg-blue-700 text-white hover:bg-blue-800 shadow-md shadow-blue-700/20"
              }`}
            >
              {primaryLabel}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
