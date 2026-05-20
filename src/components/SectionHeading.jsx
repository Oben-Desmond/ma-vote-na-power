export default function SectionHeading({ eyebrow, title, description, action, dark = false }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10 md:mb-12">
      <div className="max-w-2xl min-w-0">
        {eyebrow && (
          <p className={`text-xs font-bold uppercase tracking-[0.2em] mb-2 ${dark ? "text-blue-300" : "text-blue-600"}`}>
            {eyebrow}
          </p>
        )}
        <h2 className={`text-xl sm:text-2xl md:text-3xl font-black tracking-tight ${dark ? "text-white" : "text-gray-900"}`}>
          {title}
        </h2>
        {description && (
          <p className={`text-sm md:text-base mt-3 leading-relaxed ${dark ? "text-gray-300" : "text-gray-500"}`}>
            {description}
          </p>
        )}
      </div>
      {action && <div className="w-full sm:w-auto shrink-0">{action}</div>}
    </div>
  );
}
