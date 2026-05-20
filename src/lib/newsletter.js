const NEWSLETTER_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfzQkm3MEYb5dU5iU8WqzqEjcjwqZeeqIpqplIK1sYjdv-vsg/formResponse";

const FIELD_FIRST_NAME = "entry.1820097367";
const FIELD_EMAIL = "entry.915424504";

export async function subscribeNewsletter({ firstName, email }) {
  const body = new URLSearchParams({
    [FIELD_FIRST_NAME]: firstName.trim(),
    [FIELD_EMAIL]: email.trim(),
  });

  await fetch(NEWSLETTER_FORM_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
}
