import { Text } from "@chakra-ui/react";
import BookingForm from "@/components/BookingForm";
import { contact } from "@/data/site";

export const metadata = { title: "Book or Enquire | Radhe Hotel & Restaurant", description: "Prepare a direct room, dining or celebration enquiry for Radhe Hotel & Restaurant." };
export default function BookPage(){return <main className="bookPage"><section className="bookIntro"><Text className="eyebrow">Direct enquiries</Text><h1>Let us prepare for your arrival.</h1><p>Share the essentials below. We will prepare a message for the existing Radhe WhatsApp number so the team can personally confirm the details.</p><div><span>No online payment</span><span>No false confirmation</span><span>Direct Radhe contact</span></div><a href={contact.tel}>Prefer to call? {contact.phone}</a></section><BookingForm/></main>}
