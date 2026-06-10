import { PARTNERS } from "../data/constants";

export default function PartnerLogos({ compact = false }) {
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-3 ${compact ? "lg:grid-cols-3" : "lg:grid-cols-5"} gap-4`}
    >
      {PARTNERS.map((partner) => (
        <div
          key={partner.id}
          className={`flex items-center justify-center bg-white border border-gray-200 rounded-xl hover:border-blue-200 hover:shadow-md transition-all duration-300 ${
            compact ? "min-h-[5rem] p-4" : "min-h-[5.5rem] px-4 py-5"
          }`}
        >
          <img
            src={partner.logo}
            alt={partner.alt}
            title={partner.name}
            className={`w-full object-contain ${compact ? "max-h-14" : "max-h-16"}`}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
