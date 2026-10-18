"use client";
import { FormEvent, useState } from "react";
import { Button, Input } from "@chakra-ui/react";
import { ArrowUpRight, Check } from "lucide-react";
import { buildWhatsAppEnquiry, validateEnquiry } from "@/lib/enquiry.mjs";

type EnquiryType = "stay" | "dining" | "celebration";
type EnquiryDetails = { start: string; end: string; guests: string; name: string };

const types: { value: EnquiryType; label: string }[] = [
  { value: "stay", label: "Stay" }, { value: "dining", label: "Dining" }, { value: "celebration", label: "Celebration" },
];
const initial: EnquiryDetails = { start: "", end: "", guests: "", name: "" };

export default function BookingForm({ compact = false }: { compact?: boolean }) {
  const [type, setType] = useState<EnquiryType>("stay");
  const [details, setDetails] = useState(initial);
  const [errors, setErrors] = useState<Partial<Record<"start" | "end" | "guests", string>>>({});
  const [ready, setReady] = useState(false);
  const today = new Date().toISOString().slice(0, 10);
  function select(next: EnquiryType) { setType(next); setErrors({}); setReady(false); }
  function update(name: keyof EnquiryDetails, value: string) { setDetails(current => ({ ...current, [name]: value })); setErrors(current => ({ ...current, [name]: undefined })); setReady(false); }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validateEnquiry(type, details);
    setErrors(next);
    setReady(Object.keys(next).length === 0);
  }
  if (ready) return <section className={`bookingReady ${compact ? "compact" : ""}`} role="status" aria-live="polite"><div className="readyIcon"><Check /></div><div><p className="kicker">Enquiry ready</p><h3>Continue with Radhe on WhatsApp</h3><p>This opens a prepared message. Availability is confirmed personally by the Radhe team; no booking or payment has been completed.</p><div className="readyActions"><a className="button buttonPrimary" href={buildWhatsAppEnquiry(type, details)}>Open WhatsApp <ArrowUpRight /></a><Button variant="plain" onClick={() => setReady(false)}>Edit details</Button></div></div></section>;
  return <form className={`bookingForm ${compact ? "compact" : ""}`} onSubmit={submit} noValidate>
    <div className="bookingHeader"><div><p className="kicker">Direct enquiry</p>{!compact && <h2>Tell us what you’re planning.</h2>}</div><div className="bookingTypes" role="group" aria-label="Enquiry type">{types.map(item => <Button key={item.value} type="button" aria-pressed={type === item.value} onClick={() => select(item.value)}>{item.label}</Button>)}</div></div>
    <div className="bookingFields">
      <label><span>{type === "stay" ? "Check-in" : "Preferred date"}</span><Input type="date" min={today} value={details.start} aria-invalid={!!errors.start} onChange={event => update("start", event.target.value)} />{errors.start && <small role="alert">{errors.start}</small>}</label>
      {type === "stay" && <label><span>Check-out</span><Input type="date" min={details.start || today} value={details.end} aria-invalid={!!errors.end} onChange={event => update("end", event.target.value)} />{errors.end && <small role="alert">{errors.end}</small>}</label>}
      <label><span>Guests</span><select value={details.guests} aria-invalid={!!errors.guests} onChange={event => update("guests", event.target.value)}><option value="">Select</option><option value="1–2">1–2</option><option value="3–4">3–4</option><option value="5–10">5–10</option><option value="More than 10">More than 10</option></select>{errors.guests && <small role="alert">{errors.guests}</small>}</label>
      {!compact && <label><span>Your name <i>Optional</i></span><Input value={details.name} autoComplete="name" placeholder="Your name" onChange={event => update("name", event.target.value)} /></label>}
      <Button className="button buttonPrimary bookingSubmit" type="submit">Prepare enquiry <ArrowUpRight /></Button>
    </div>
    {!compact && <p className="formNote">This form prepares a WhatsApp message. It does not check live availability or confirm a booking.</p>}
  </form>;
}
