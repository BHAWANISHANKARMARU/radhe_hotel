"use client";
import { FormEvent, useMemo, useState } from "react";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { contact } from "@/data/site";

type EnquiryType = "stay" | "dining" | "celebration";
const types: { value: EnquiryType; label: string }[] = [
  { value: "stay", label: "Stay" }, { value: "dining", label: "Dining" }, { value: "celebration", label: "Celebration" },
];

export default function BookingForm({ compact = false }: { compact?: boolean }) {
  const [type, setType] = useState<EnquiryType>("stay");
  const [status, setStatus] = useState<"idle" | "prepared">("idle");
  const [error, setError] = useState("");
  const [payload, setPayload] = useState({ start: "", end: "", guests: "", name: "" });
  const whatsAppUrl = useMemo(() => {
    const label = type === "stay" ? "room stay" : type === "dining" ? "dining table" : "celebration";
    const dates = type === "stay" ? `Check-in: ${payload.start}, check-out: ${payload.end}` : `Preferred date: ${payload.start}`;
    const message = `Namaste Radhe, I would like to enquire about a ${label}. ${dates}. Guests: ${payload.guests}.${payload.name ? ` Name: ${payload.name}.` : ""}`;
    return `${contact.whatsapp}?text=${encodeURIComponent(message)}`;
  }, [payload, type]);

  function changeType(next: EnquiryType) { setType(next); setError(""); setStatus("idle"); }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!payload.start || !payload.guests || (type === "stay" && !payload.end)) { setError("Please complete the required details."); return; }
    if (type === "stay" && payload.end <= payload.start) { setError("Check-out must be after check-in."); return; }
    setError(""); setStatus("prepared");
  }

  if (status === "prepared") return <Box className={`bookingPrepared ${compact ? "compact" : ""}`} role="status" aria-live="polite">
    <Text className="eyebrow">Enquiry ready</Text><h3>Continue securely on WhatsApp.</h3>
    <p>No booking has been confirmed and no payment is required. Send the prepared message to the existing Radhe number.</p>
    <Flex gap="3" wrap="wrap"><a className="primaryAction" href={whatsAppUrl}>Open WhatsApp <span>↗</span></a><Button variant="ghost" onClick={() => setStatus("idle")}>Edit details</Button></Flex>
  </Box>;

  return <Box asChild><form className={`bookingPanel bookingLedger material-leather ${compact ? "compact" : ""}`} onSubmit={submit} noValidate>
    <div className="ledgerHeading"><span>Reservations</span><small>Radhe Hotel & Restaurant</small></div>
    <div className="ledgerPaper material-paper">
    <Flex className="bookingTypes" role="tablist" aria-label="Enquiry type">
      {types.map(item => <Button key={item.value} type="button" role="tab" aria-selected={type === item.value} onClick={() => changeType(item.value)}>{item.label}</Button>)}
    </Flex>
    <div className="bookingFields" key={type}>
      <label><span>{type === "stay" ? "Check-in" : "Preferred date"}</span><Input className="tactileField" type="date" value={payload.start} onChange={e => setPayload({ ...payload, start: e.target.value })} required /></label>
      {type === "stay" && <label><span>Check-out</span><Input className="tactileField" type="date" value={payload.end} onChange={e => setPayload({ ...payload, end: e.target.value })} required /></label>}
      <label><span>Guests</span><select className="tactileField" value={payload.guests} onChange={e => setPayload({ ...payload, guests: e.target.value })} required><option value="">Select</option><option value="1–2">1–2</option><option value="3–4">3–4</option><option value="5–10">5–10</option><option value="More than 10">More than 10</option></select></label>
      {!compact && <label><span>Your name <small>Optional</small></span><Input className="tactileField" value={payload.name} onChange={e => setPayload({ ...payload, name: e.target.value })} placeholder="How should we address you?" /></label>}
      <Button className="bookingSubmit" type="submit">Prepare enquiry <span>↗</span></Button>
    </div>
    {error && <p className="formError" role="alert">{error}</p>}
    {!compact && <p className="formTruth">This prepares a WhatsApp enquiry. Availability is confirmed personally by the Radhe team.</p>}
    </div>
  </form></Box>;
}
