import { useEffect } from "react";
import { DEFAULT_OG_IMAGE, SITE_URL, absoluteUrl, buildPageTitle } from "../lib/seo";

const MANAGED_SELECTOR = "[data-seo-managed]";

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    el.setAttribute("data-seo-managed", "");
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    el.setAttribute("data-seo-managed", "");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id, data) {
  if (!data) return;
  let el = document.head.querySelector(`script[data-seo-jsonld="${id}"]`);
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.setAttribute("data-seo-jsonld", id);
    el.setAttribute("data-seo-managed", "");
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function removeManagedNodes() {
  document.head.querySelectorAll(MANAGED_SELECTOR).forEach((node) => node.remove());
}

export default function PageSEO({
  title,
  description,
  path = "/",
  canonicalPath,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noindex = false,
  jsonLd,
}) {
  const pageTitle = buildPageTitle(title);
  const canonical = absoluteUrl(canonicalPath || path);
  const ogImage = image.startsWith("http") ? image : absoluteUrl(image);

  const jsonLdKey = jsonLd ? JSON.stringify(jsonLd) : "";

  useEffect(() => {
    document.title = pageTitle;

    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", pageTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", ogImage);

    upsertMeta("property", "og:site_name", "Not Too Young To Vote");
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:title", pageTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:locale", "en_CM");

    upsertLink("canonical", canonical);

    const schemas = jsonLdKey ? JSON.parse(jsonLdKey) : null;
    if (Array.isArray(schemas)) {
      schemas.forEach((schema, index) => upsertJsonLd(String(index), schema));
    } else if (schemas) {
      upsertJsonLd("0", schemas);
    }

    return removeManagedNodes;
  }, [pageTitle, description, canonical, ogImage, type, noindex, jsonLdKey]);

  return null;
}

export { SITE_URL };
