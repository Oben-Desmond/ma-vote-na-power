const CONTACT_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd3BEmvHw9QIzKfB7C8V-SJemIA3U6FTkBHkqX7H7zoIsGZ_Q/formResponse";

const FIELD_NAME = "entry.733903647";
const FIELD_EMAIL = "entry.529682440";
const FIELD_PHONE = "entry.71156195";
const FIELD_SUBJECT = "entry.493018925";
const FIELD_MESSAGE = "entry.2135353273";

export async function submitContactForm({ name, email, phone, subject, message }) {
  const body = new URLSearchParams({
    [FIELD_NAME]: name.trim(),
    [FIELD_EMAIL]: email.trim(),
    [FIELD_SUBJECT]: subject.trim(),
  });

  const trimmedPhone = phone.trim();
  const trimmedMessage = message.trim();

  if (trimmedPhone) body.set(FIELD_PHONE, trimmedPhone);
  if (trimmedMessage) body.set(FIELD_MESSAGE, trimmedMessage);

  await fetch(CONTACT_FORM_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
}
