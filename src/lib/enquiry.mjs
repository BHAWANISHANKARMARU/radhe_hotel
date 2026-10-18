const whatsapp = "https://wa.me/918107487770";

export function validateEnquiry(type, details) {
  const errors = {};
  if (!details.start) errors.start = type === "stay" ? "Choose a check-in date." : "Choose a preferred date.";
  if (type === "stay" && !details.end) errors.end = "Choose a check-out date.";
  if (!details.guests) errors.guests = "Select the number of guests.";
  if (type === "stay" && details.start && details.end && details.end <= details.start) errors.end = "Check-out must be after check-in.";
  return errors;
}

export function buildWhatsAppEnquiry(type, details) {
  const label = type === "stay" ? "room stay" : type === "dining" ? "dining table" : "celebration";
  const dates = type === "stay" ? `Check-in: ${details.start}, check-out: ${details.end}` : `Preferred date: ${details.start}`;
  const name = details.name ? ` Name: ${details.name}.` : "";
  const message = `Namaste Radhe, I would like to enquire about a ${label}. ${dates}. Guests: ${details.guests}.${name}`;
  return `${whatsapp}?text=${encodeURIComponent(message)}`;
}
