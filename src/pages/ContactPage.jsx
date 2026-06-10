import { useState } from "react";
import PageHero from "../components/PageHero";
import PageSEO from "../components/PageSEO";
import FormFeedback from "../components/FormFeedback";
import { formButtonDark, formInputDark, formTextareaDark } from "../components/formStyles";
import { MailIcon, MapPinIcon, PhoneIcon, PhonePrefix, SOCIAL_ICONS } from "../components/Icons";
import { SITE } from "../data/constants";
import { submitContactForm } from "../lib/contact";
import { buildWebPageSchema, PAGE_SEO } from "../lib/seo";

const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(SITE.address)}&z=15&hl=en&output=embed`;

const INFO = [
  { Icon: PhoneIcon, title: "Phone", lines: [SITE.phone, SITE.phoneAlt] },
  { Icon: MapPinIcon, title: "Address", lines: [SITE.address] },
  { Icon: MailIcon, title: "Email", lines: [SITE.email, SITE.website] },
];

const FOLLOW_PLATFORMS = ["facebook", "instagram", "twitter", "youtube", "linkedin"];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedSubject = subject.trim();

    if (!trimmedName) {
      setError("Please enter your name.");
      return;
    }

    if (!trimmedEmail) {
      setError("Please enter your email.");
      return;
    }

    if (!trimmedSubject) {
      setError("Please enter a subject.");
      return;
    }

    setStatus("loading");

    try {
      await submitContactForm({
        name: trimmedName,
        email: trimmedEmail,
        phone,
        subject: trimmedSubject,
        message,
      });
      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="bg-gray-50">
      <PageSEO {...PAGE_SEO.contact} jsonLd={buildWebPageSchema(PAGE_SEO.contact)} />
      <PageHero
        title="Contact"
        subtitle="Questions about voter registration, partnerships, or our programs? We'd love to hear from you."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
          <div className="lg:flex-1 w-full bg-gradient-to-br from-blue-800 to-blue-950 rounded-2xl p-6 sm:p-8 md:p-10 text-white shadow-xl min-w-0">
            <h2 className="text-xl sm:text-2xl font-black mb-3">Stay connected with us</h2>
            <p className="text-blue-200 text-sm mb-8 leading-relaxed max-w-lg">
              Have a question about voter registration, partnerships, or our programs? Send us a message and our team will respond as soon as possible.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  className={formInputDark}
                  placeholder="Your Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={status === "loading"}
                  autoComplete="name"
                  required
                />
                <input
                  className={formInputDark}
                  placeholder="Email *"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading"}
                  autoComplete="email"
                  required
                />
              </div>
              <div className="flex border border-blue-500/50 rounded-lg overflow-hidden bg-blue-700/40 focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-300/20 transition-shadow">
                <span className="px-3 py-2.5 text-sm border-r border-blue-500/50 shrink-0 flex items-center">
                  <PhonePrefix />
                </span>
                <input
                  className="flex-1 px-4 py-2.5 text-sm bg-transparent placeholder-blue-300 outline-none disabled:opacity-60 min-w-0"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={status === "loading"}
                  autoComplete="tel"
                />
              </div>
              <input
                className={formInputDark}
                placeholder="Subject *"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                disabled={status === "loading"}
                required
              />
              <textarea
                className={`${formTextareaDark} h-32`}
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={status === "loading"}
              />
              <button type="submit" className={formButtonDark} disabled={status === "loading"}>
                {status === "loading" ? "Sending…" : "Send Message"}
              </button>
              {status === "success" && (
                <FormFeedback type="success" variant="dark">Message sent! We will get back to you soon.</FormFeedback>
              )}
              {error && (
                <FormFeedback type="error" variant="dark">{error}</FormFeedback>
              )}
            </form>
          </div>

          <div className="lg:w-80 w-full space-y-4 shrink-0">
            {INFO.map(({ Icon, title, lines }) => (
              <div key={title} className="bg-white rounded-xl p-5 shadow-sm flex gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                  {lines.map((l) => <p key={l} className="text-gray-600 text-sm leading-relaxed">{l}</p>)}
                </div>
              </div>
            ))}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">Follow Us</h3>
              <div className="flex gap-3 text-gray-600">
                {FOLLOW_PLATFORMS.map((platform) => {
                  const { Icon, label } = SOCIAL_ICONS[platform];
                  return (
                    <a
                      key={platform}
                      href={SITE.social[platform]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 hover:text-blue-700 transition-colors"
                      aria-label={`Follow us on ${label}`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="px-4 sm:px-6 pb-16 sm:pb-20 md:pb-24" aria-labelledby="contact-map-heading">
        <div className="max-w-7xl mx-auto">
          <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-2">Location</p>
          <h2 id="contact-map-heading" className="text-2xl font-black text-gray-900 mb-2 tracking-tight">
            Find us
          </h2>
          <p className="text-gray-500 text-sm mb-6 flex items-start gap-2 max-w-xl">
            <MapPinIcon className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <span>{SITE.address}</span>
          </p>
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden h-64 sm:h-80 md:h-96 shadow-xl border border-gray-200 bg-gray-200 ring-1 ring-black/5">
            <iframe
              title={`Map: ${SITE.address}`}
              src={MAP_EMBED_URL}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}
