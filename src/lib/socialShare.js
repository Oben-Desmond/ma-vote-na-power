export function getShareUrl(platform, { url, title, text }) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedText = encodeURIComponent(text || title);

  switch (platform) {
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    case "twitter":
      return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
    case "linkedin":
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
    case "email":
      return `mailto:?subject=${encodedTitle}&body=${encodedText}%0A%0A${encodedUrl}`;
    default:
      return url;
  }
}

export function openShare(platform, options) {
  const shareUrl = getShareUrl(platform, options);

  if (platform === "email") {
    window.location.href = shareUrl;
    return;
  }

  window.open(shareUrl, "_blank", "noopener,noreferrer,width=600,height=500");
}

export function getCurrentPageUrl(pathname) {
  return `${window.location.origin}${pathname}`;
}
