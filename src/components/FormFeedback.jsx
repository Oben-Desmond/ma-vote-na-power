const VARIANTS = {
  light: {
    success: "bg-green-50 text-green-800 border-green-200",
    error: "bg-red-50 text-red-700 border-red-200",
  },
  dark: {
    success: "bg-white/10 text-blue-50 border-white/20",
    error: "bg-red-500/20 text-red-100 border-red-400/30",
  },
  newsletter: {
    success: "bg-white/15 text-white border-white/25",
    error: "bg-black/20 text-red-100 border-red-300/40",
  },
};

export default function FormFeedback({ type = "success", variant = "light", children }) {
  if (!children) return null;

  return (
    <p
      className={`text-sm border rounded-lg px-4 py-2.5 ${VARIANTS[variant][type]}`}
      role={type === "success" ? "status" : "alert"}
    >
      {children}
    </p>
  );
}
