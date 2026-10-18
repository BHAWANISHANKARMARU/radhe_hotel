import { MapPin, Phone } from "lucide-react";
import { Text } from "@chakra-ui/react";
import BookingForm from "@/components/BookingForm";
import { contact } from "@/data/site";

export const metadata = { title: "Contact | Radhe Hotel & Restaurant", description: "Contact Radhe Hotel & Restaurant on NH-11, Sridungargarh, Bikaner." };
export default function ContactPage(){return <main className="contactPage"><section className="contactIntro"><Text className="eyebrow">Contact & directions</Text><h1>We would be glad to welcome you.</h1><p>For rooms, dining or celebration enquiries, contact the Radhe team directly.</p></section><section className="contactLayout"><div className="contactDetails"><article><MapPin/><div><Text className="eyebrow">Visit</Text><p>{contact.address}</p><a href="https://maps.google.com/?q=Vasundhara+Nagar+Sridungargarh+Bikaner">Open directions ↗</a></div></article><article><Phone/><div><Text className="eyebrow">Call or WhatsApp</Text><a className="largeContact" href={contact.tel}>{contact.phone}</a><a href={contact.whatsapp}>Start a WhatsApp conversation ↗</a></div></article></div><BookingForm/></section></main>}
