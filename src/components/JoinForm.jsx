import { useState } from "react";
import { PhonePrefix } from "./Icons";
import FormFeedback from "./FormFeedback";
import { formButton, formInput, formSelect, formTextarea } from "./formStyles";
import { submitJoinForm } from "../lib/joinUs";

export default function JoinForm({
  submitLabel = "Submit Interest",
  showCompany = false,
  showWhy = false,
  reason,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedCountry = country.trim();

    if (!trimmedName) {
      setError("Please enter your name.");
      return;
    }

    if (!trimmedEmail) {
      setError("Please enter your email.");
      return;
    }

    if (!trimmedCountry) {
      setError("Please select your country of residence.");
      return;
    }

    if (showCompany && !company.trim()) {
      setError("Please enter your company name.");
      return;
    }

    setStatus("loading");

    let fullMessage = message.trim();
    if (showCompany && company.trim()) {
      fullMessage = `Company: ${company.trim()}${fullMessage ? `\n\n${fullMessage}` : ""}`;
    }

    try {
      await submitJoinForm({
        name: trimmedName,
        email: trimmedEmail,
        phone,
        country: trimmedCountry,
        reason,
        message: fullMessage,
      });
      setStatus("success");
      setName("");
      setEmail("");
      setCompany("");
      setCountry("");
      setPhone("");
      setMessage("");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  }

  const disabled = status === "loading";

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          className={formInput}
          placeholder="Your Name *"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={disabled}
          autoComplete="name"
          required
        />
        <input
          className={formInput}
          placeholder="Email *"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={disabled}
          autoComplete="email"
          required
        />
      </div>

      {showCompany && (
        <input
          className={formInput}
          placeholder="Your Company's Name *"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          disabled={disabled}
          autoComplete="organization"
          required
        />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <select
          className={`${formSelect} ${country ? "text-gray-900" : "text-gray-400"}`}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          disabled={disabled}
          required
        >
          <option value="" disabled>Country of residence *</option>
          <option>Cameroon</option>
          <option>Nigeria</option>
          <option>Other</option>
        </select>
        <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 transition-shadow">
          <span className="bg-gray-50 px-3 py-2.5 text-sm border-r border-gray-300 shrink-0 text-gray-600 flex items-center">
            <PhonePrefix />
          </span>
          <input
            className="flex-1 px-4 py-2.5 text-sm outline-none disabled:opacity-60 min-w-0"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={disabled}
            autoComplete="tel"
          />
        </div>
      </div>

      <textarea
        className={`${formTextarea} ${showWhy ? "h-32" : "h-28"}`}
        placeholder={showWhy ? "Why do you want to work with us?" : "Anything else you'd like us to know?"}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={disabled}
      />

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
        <button type="submit" className={`${formButton} w-full sm:w-auto min-w-[160px]`} disabled={disabled}>
          {disabled ? "Submitting…" : submitLabel}
        </button>
        {status === "success" && (
          <FormFeedback type="success">Thank you! We will be in touch soon.</FormFeedback>
        )}
      </div>

      {error && <FormFeedback type="error">{error}</FormFeedback>}
    </form>
  );
}
