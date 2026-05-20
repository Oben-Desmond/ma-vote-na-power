import { LOGO_VARIANTS } from "../data/logos";

const SIZES = {
  "horizontal-light": "h-11 w-auto max-w-[220px]",
  "horizontal-dark": "h-11 w-auto max-w-[220px]",
  "stacked-light": "h-28 w-auto max-w-[180px]",
  "stacked-dark": "h-28 w-auto max-w-[180px]",
  "icon-light": "h-10 w-10",
  "icon-dark": "h-10 w-10",
};

/**
 * @param {{ variant?: keyof typeof LOGO_VARIANTS, className?: string }} props
 */
export default function Logo({ variant = "horizontal-light", className = "" }) {
  const src = LOGO_VARIANTS[variant] ?? LOGO_VARIANTS["horizontal-light"];
  const size = SIZES[variant] ?? SIZES["horizontal-light"];

  return (
    <img
      src={src}
      alt="237 Civil Rights Insight"
      className={`object-contain ${size} ${className}`.trim()}
    />
  );
}
