const VARIANTS = {
  light: "border border-gray-300 rounded-full px-4 py-2 text-sm pl-10 outline-none focus:border-blue-400 w-full bg-white text-gray-900 placeholder:text-gray-400",
  dark: "bg-gray-700 text-white placeholder-gray-400 rounded-full px-4 py-2 text-sm pl-10 outline-none focus:ring-2 focus:ring-blue-400/40 w-full",
  subtle: "border border-gray-300 rounded-full px-4 py-2 text-sm pl-10 outline-none focus:border-blue-400 w-full bg-blue-50/50 text-gray-900 placeholder:text-gray-400",
};

function SearchIcon() {
  return (
    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

export default function SearchInput({
  value,
  onChange,
  onSubmit,
  placeholder = "Search…",
  variant = "light",
  className = "",
  inputClassName = "",
  ariaLabel = "Search",
}) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit?.(value);
  }

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`} role="search">
      <SearchIcon />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${VARIANTS[variant]} ${inputClassName}`}
        placeholder={placeholder}
        aria-label={ariaLabel}
      />
    </form>
  );
}
