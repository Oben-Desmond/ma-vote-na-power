import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import FormFeedback from "./FormFeedback";
import { SOCIAL_ICONS } from "./Icons";
import { newsletterInput } from "./formStyles";
import { FOOTER_LINKS, SITE } from "../data/constants";
import { subscribeNewsletter } from "../lib/newsletter";

const SOCIAL_PLATFORMS = ["facebook", "instagram", "twitter", "youtube"];

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="text-white font-bold text-sm mb-4 tracking-wide">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.path}>
            <Link to={l.path} className="text-gray-400 text-sm hover:text-white transition-colors inline-block">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleNewsletterSubmit(e) {
    e.preventDefault();
    setError("");

    const trimmedName = firstName.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName) {
      setError("Please enter your first name.");
      return;
    }

    if (!trimmedEmail) {
      setError("Please enter your email.");
      return;
    }

    setStatus("loading");

    try {
      await subscribeNewsletter({ firstName: trimmedName, email: trimmedEmail });
      setStatus("success");
      setFirstName("");
      setEmail("");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Newsletter */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 px-4 sm:px-6 py-12 sm:py-14 md:py-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }}
          aria-hidden="true"
        />
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-red-200 text-xs font-bold uppercase tracking-[0.2em] mb-2">Stay connected</p>
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-black tracking-tight mb-3">Get the latest updates</h3>
              <p className="text-red-100/90 text-sm leading-relaxed max-w-md">
                Youth advocacy, voting rights, and upcoming events across Cameroon — delivered to your inbox.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 md:p-7">
              <form className="space-y-3" onSubmit={handleNewsletterSubmit} noValidate>
                <div className="grid sm:grid-cols-2 gap-3">
                  <input
                    className={newsletterInput}
                    placeholder="First name *"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    disabled={status === "loading"}
                    autoComplete="given-name"
                    required
                  />
                  <input
                    className={newsletterInput}
                    placeholder="Email *"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading"}
                    autoComplete="email"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-gray-950 hover:bg-gray-900 text-white font-semibold px-7 py-2.5 rounded-full text-sm transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-lg"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Signing up…" : "Subscribe"}
                </button>
              </form>
              {status === "success" && (
                <div className="mt-4">
                  <FormFeedback type="success" variant="newsletter">Thanks for subscribing!</FormFeedback>
                </div>
              )}
              {error && (
                <div className="mt-4">
                  <FormFeedback type="error" variant="newsletter">{error}</FormFeedback>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main footer */}
      <div className="px-4 sm:px-6 py-12 sm:py-14 md:py-16 border-b border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="mb-5">
              <Logo variant="stacked-dark" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-sm">
              {SITE.mission} We are strictly non-partisan.
            </p>
            <p className="text-blue-400 font-semibold text-sm mb-4">{SITE.tagline}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {SITE.hashtags.map((tag) => (
                <span key={tag} className="text-xs text-gray-500 bg-gray-900 border border-gray-800 px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              {SOCIAL_PLATFORMS.map((platform) => {
                const { Icon, label } = SOCIAL_ICONS[platform];
                return (
                  <a
                    key={platform}
                    href={SITE.social[platform]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-600 hover:bg-blue-600/10 transition-colors"
                    aria-label={`Follow us on ${label}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-2">
            <FooterColumn title="Quick Links" links={FOOTER_LINKS.quick} />
          </div>
          <div className="lg:col-span-2">
            <FooterColumn title="Resources" links={FOOTER_LINKS.resources} />
          </div>
          <div className="lg:col-span-2">
            <FooterColumn title="Get Involved" links={FOOTER_LINKS.involved} />
          </div>

          {/* Contact */}
          <div className="lg:col-span-2 sm:col-span-2 lg:col-start-auto">
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="leading-relaxed">{SITE.address}</li>
              <li>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors block">
                  {SITE.phone}
                </a>
                <a href={`tel:${SITE.phoneAlt.replace(/\s/g, "")}`} className="hover:text-white transition-colors block mt-1">
                  {SITE.phoneAlt}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">{SITE.email}</a>
              </li>
              <li>
                <a href={`https://${SITE.website}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  {SITE.website}
                </a>
              </li>
            </ul>
            <Link
              to="/services"
              className="inline-flex items-center mt-6 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              Explore voting resources →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-4 sm:px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <span className="hover:text-gray-300 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-gray-300 cursor-pointer transition-colors">Terms of Use</span>
            <Link to="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
