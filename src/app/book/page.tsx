import { Check, Phone } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import { contact } from "@/data/site";
export const metadata = { title: "Book or Enquire", description: "Prepare a direct room, dining or celebration enquiry for Radhe Hotel & Restaurant." };
export default function BookPage(){return <main className="bookPage"><section className="bookIntro"><div><p className="kicker light">Direct enquiries</p><h1>Tell us what brings you to Radhe.</h1><p>Share the essentials and continue on WhatsApp. The Radhe team will personally confirm availability and next steps.</p></div><ul><li><Check/>No online payment</li><li><Check/>No automatic confirmation</li><li><Check/>Direct contact with the Radhe team</li></ul><a href={contact.tel}><Phone/> Prefer to call? {contact.phone}</a></section><section className="bookFormArea"><BookingForm/></section></main>}
