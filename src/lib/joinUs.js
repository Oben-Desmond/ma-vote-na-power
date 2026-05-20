const JOIN_US_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf-njJuhftGOnS3sbOgBF_iLzxpu35nE4dDaywEv5xUTlWcOA/formResponse";

const FIELD_NAME = "entry.733903647";
const FIELD_EMAIL = "entry.529682440";
const FIELD_PHONE = "entry.71156195";
const FIELD_COUNTRY = "entry.493018925";
const FIELD_REASON = "entry.574684633";
const FIELD_MESSAGE = "entry.2135353273";

export async function submitJoinForm({ name, email, phone, country, reason, message }) {
  const body = new URLSearchParams({
    [FIELD_NAME]: name.trim(),
    [FIELD_EMAIL]: email.trim(),
    [FIELD_COUNTRY]: country.trim(),
    [FIELD_REASON]: reason,
  });

  const trimmedPhone = phone.trim();
  const trimmedMessage = message.trim();

  if (trimmedPhone) body.set(FIELD_PHONE, trimmedPhone);
  if (trimmedMessage) body.set(FIELD_MESSAGE, trimmedMessage);

  await fetch(JOIN_US_FORM_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
}
