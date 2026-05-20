import { SOCIAL_ICONS } from "./Icons";
import { openShare } from "../lib/socialShare";

const DEFAULT_PLATFORMS = ["facebook", "twitter", "linkedin", "email"];

export default function SocialShareButtons({
  title,
  url,
  text,
  platforms = DEFAULT_PLATFORMS,
  size = "sm",
  className = "",
}) {
  const sizeClasses = size === "sm"
    ? "w-7 h-7"
    : "w-10 h-10";

  const iconSize = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";

  function handleShare(platform) {
    const shareUrl = url || window.location.href;
    openShare(platform, { url: shareUrl, title, text: text || title });
  }

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {platforms.map((platform) => {
        const { Icon, label } = SOCIAL_ICONS[platform];
        return (
          <button
            key={platform}
            type="button"
            onClick={() => handleShare(platform)}
            className={`${sizeClasses} bg-white hover:bg-blue-600 hover:text-white rounded flex items-center justify-center transition-colors border border-gray-200`}
            aria-label={`Share on ${label}`}
          >
            <Icon className={iconSize} />
          </button>
        );
      })}
    </span>
  );
}
