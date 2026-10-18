import Image from "next/image";
import Link from "next/link";
import { Text } from "@chakra-ui/react";
import BookingForm from "./BookingForm";
import { Reveal } from "./ui/Reveal";

const content = {
  stay: { eyebrow: "Rooms & stays", title: "A comfortable pause along your journey.", intro: "Radhe offers rooms for overnight guests and travellers visiting Sridungargarh.", image: "/images/heritage-room.png", alt: "A calm guest room with warm Indian details", sectionTitle: "Stay in your own rhythm.", body: "Whether Radhe is a stop along the highway or your base in town, our team can help you understand the available room options for your dates. We keep the process personal: share your plans, and we’ll confirm the relevant details directly.", notes: ["Comfortable overnight stays", "Room details shared on enquiry", "Direct confirmation from the Radhe team"] },
  dining: { eyebrow: "Pure vegetarian dining", title: "A table with room for everyone.", intro: "Gather for vegetarian food in a warm, welcoming restaurant setting.", image: "/images/radhe-dining-room.png", alt: "A welcoming restaurant dining room", sectionTitle: "Dining made easy.", body: "Visit for a meal, pause during a journey, or bring the family together around the table. Contact the restaurant directly for the current menu, dining enquiries and group arrangements.", notes: ["Pure vegetarian dining", "Table enquiries on WhatsApp", "Group dining enquiries welcome"] },
  celebrations: { eyebrow: "Celebrations & gatherings", title: "A thoughtful setting for your people.", intro: "Explore Radhe for family celebrations and private event enquiries.", image: "/images/radhe-dining-room.png", alt: "A warm dining space prepared for a gathering", sectionTitle: "Tell us what you are planning.", body: "Every gathering begins with different needs. Share the occasion, preferred date and expected guest count, and the Radhe team will discuss the available arrangements directly with you.", notes: ["Family celebration enquiries", "Private gathering enquiries", "Arrangements discussed directly"] },
} as const;

export default function InnerPage({ kind }: { kind: keyof typeof content }) {
  const page = content[kind];
  return <main className="offeringPage">
    <section className="offeringHero"><Image src={page.image} alt={page.alt} fill priority sizes="100vw"/><div className="offeringOverlay"/><div className="offeringTitle"><Text className="eyebrow">{page.eyebrow}</Text><h1>{page.title}</h1><p>{page.intro}</p><Link className="primaryAction ivory" href="/book">Make an enquiry <span>↗</span></Link></div></section>
    <section className="offeringIntro"><Reveal><Text className="eyebrow">At Radhe</Text><h2>{page.sectionTitle}</h2></Reveal><Reveal delay={100}><p>{page.body}</p><div className="offeringNotes">{page.notes.map(note=><span key={note}>{note}</span>)}</div></Reveal></section>
    <section className="offeringImageBreak"><Image src={kind === "dining" ? "/images/rajasthani-thali.png" : kind === "stay" ? "/images/radhe-exterior.png" : "/images/radhe-dining-room.png"} alt="" fill sizes="100vw"/></section>
    <section className="offeringEnquiry"><Reveal><Text className="eyebrow">Direct enquiry</Text><h2>Start with a few details.</h2><p>We will prepare a WhatsApp message for the existing Radhe contact number. The team will personally confirm availability and next steps.</p></Reveal><Reveal delay={100}><BookingForm/></Reveal></section>
  </main>;
}
