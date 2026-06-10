import { SITE, ARTICLES } from "../data/constants";

export const SITE_URL = "https://www.mddtcameroon.org";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/hero.png`;

export const PAGE_SEO = {
  home: {
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.mission,
    path: "/",
  },
  about: {
    title: "About Us",
    description:
      "Learn about MDDT Cameroon's mission to promote youth advocacy on civil rights and enhance youth participation in elections across Cameroon.",
    path: "/about",
  },
  blog: {
    title: "Blog & News",
    description:
      "Guides and insights on voter registration, elections, ELECAM, and youth civic engagement in Cameroon.",
    path: "/blog",
  },
  services: {
    title: "Services & Programs",
    description:
      "Voter registration drives, youth civic education, Mr & Miss Civic Cameroon, inclusive democracy programs, and election observation across Cameroon.",
    path: "/services",
  },
  faqs: {
    title: "Frequently Asked Questions",
    description:
      "Answers about voting, voter registration, elections, ELECAM, and our non-partisan youth advocacy work in Cameroon.",
    path: "/faqs",
  },
  contact: {
    title: "Contact Us",
    description:
      "Get in touch with MDDT Cameroon about voter registration, partnerships, volunteering, or our youth civic education programs.",
    path: "/contact",
  },
  events: {
    title: "Upcoming Events",
    description:
      "Registration drives, conferences, and community outreach events across Cameroon from the Not Too Young To Vote campaign.",
    path: "/events",
  },
  gallery: {
    title: "Gallery",
    description:
      "Photos and videos from Ma Vote 2025 na pawa conferences, registration drives, and community outreach across Cameroon.",
    path: "/gallery",
  },
  register: {
    title: "Register to Vote",
    description:
      "Express your interest in registering to vote in Cameroon. We guide you through the ELECAM voter registration process.",
    path: "/register",
  },
  volunteer: {
    title: "Volunteer With Us",
    description:
      "Join the Not Too Young To Vote volunteer network and help mobilize young voters across all ten regions of Cameroon.",
    path: "/get-involved/volunteer",
  },
  partner: {
    title: "Partner With Us",
    description:
      "Collaborate with MDDT Cameroon to expand youth voter education, civic advocacy, and community outreach nationwide.",
    path: "/get-involved/partner",
  },
  votersCard: {
    title: "How To Obtain A Voter's Card In Cameroon",
    description:
      "Step-by-step guide to getting your voter's card in Cameroon — ELECAM registration, biometric capture, and collection.",
    path: "/voting/voters-card",
    canonicalPath: "/blog/how-to-obtain-voters-card",
  },
  electoralProcess: {
    title: "Electoral Process in Cameroon",
    description:
      "Understand how elections work in Cameroon — types of elections, the Electoral Code, ELECAM, voter eligibility, and polling day.",
    path: "/voting/electoral-process",
    canonicalPath: "/blog/electoral-process-cameroon",
  },
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildPageTitle(title) {
  if (!title || title.includes(SITE.name)) return title;
  return `${title} | ${SITE.name}`;
}

export function getArticleSeo(article) {
  return {
    title: article.title,
    description: article.excerpt,
    path: article.path,
    image: absoluteUrl(article.img),
    type: "article",
    author: article.author,
    publishedTime: article.displayDate,
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: SITE.name,
    alternateName: SITE.tagline,
    url: SITE_URL,
    logo: absoluteUrl("/images/hero.png"),
    description: SITE.mission,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address,
      addressCountry: "CM",
    },
    sameAs: Object.values(SITE.social),
  };
}

export function buildArticleSchema({ title, description, path, image, author, publishedTime }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: absoluteUrl(path),
    image: image || DEFAULT_OG_IMAGE,
    author: {
      "@type": "Person",
      name: author || SITE.name,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/hero.png"),
      },
    },
    datePublished: publishedTime,
    mainEntityOfPage: absoluteUrl(path),
  };
}

export function buildFaqSchema(sections) {
  const mainEntity = sections.flatMap((section) =>
    section.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: Array.isArray(item.a) ? item.a.join(" ") : item.a,
      },
    }))
  );

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };
}

export function buildWebPageSchema({ title, description, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: {
      "@type": "WebSite",
      name: SITE.name,
      url: SITE_URL,
    },
  };
}

export const SITEMAP_PATHS = [
  "/",
  "/about",
  "/blog",
  ...ARTICLES.map((a) => a.path),
  "/services",
  "/faqs",
  "/contact",
  "/events",
  "/gallery",
  "/register",
  "/get-involved/volunteer",
  "/get-involved/partner",
];
