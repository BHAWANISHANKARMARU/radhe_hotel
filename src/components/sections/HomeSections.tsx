import Image from "next/image";
import Link from "next/link";
import { Flex, Text } from "@chakra-ui/react";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import GallerySection from "@/components/gallery/GallerySection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { experiences } from "@/data/content";
import { contact } from "@/data/site";

const ArrowLink = ({ href, children }: { href: string; children: React.ReactNode }) => <Link className="textAction" href={href}>{children}<ArrowRight aria-hidden="true"/></Link>;

export function HeroSection() {
  return <><section className="heroSection">
    <Image className="heroImage" src="/images/radhe-exterior.png" alt="" fill priority sizes="100vw"/>
    <div className="heroOverlay"/>
    <div className="heroContent">
      <Text className="heroEyebrow">NH-11 · Sridungargarh · Rajasthan</Text>
      <h1>Your journey deserves a beautiful pause.</h1>
      <p>Thoughtful stays, pure vegetarian dining, and warm Rajasthani hospitality on NH-11, Sridungargarh.</p>
      <Flex className="heroActions"><Link className="primaryAction" href="/book">Book a stay <span>↗</span></Link><Link className="secondaryAction light" href="/dining">Explore dining</Link></Flex>
    </div>
    <div className="heroCaption"><span>Radhe Hotel & Restaurant</span><span>Bikaner, Rajasthan</span></div>
  </section><div className="bookingWrap"><BookingForm compact/></div></>;
}

export function IntroSection() {
  return <section className="introSection"><Reveal className="introImage"><Image src="/images/rajasthani-thali.png" alt="A vegetarian Rajasthani meal served in brass bowls" fill sizes="(max-width: 800px) 100vw, 42vw"/><span>Pure vegetarian dining</span></Reveal><Reveal className="introCopy" delay={100}><SectionHeading eyebrow="Welcome to Radhe" title="A warm pause, thoughtfully made."/><p>Radhe brings together a comfortable stay, pure vegetarian dining and space for family celebrations—conveniently placed for travellers and the local community.</p><p>Our approach is simple: make every visit feel considered, comfortable and genuinely welcoming.</p><ArrowLink href="/about">Our story</ArrowLink></Reveal></section>;
}

export function ExperiencesSection() {
  return <section className="experiencesSection"><Reveal><SectionHeading eyebrow="Three ways to arrive" title="Stay. Dine. Celebrate." intro="Choose the Radhe experience that brings you here."/></Reveal><div className="experienceGrid">{experiences.map((item,index)=><Reveal key={item.href} delay={index*80} className={`experienceCard experience-${index+1}`}><Link href={item.href}><div className="experienceImage"><Image src={item.image} alt={item.label === "Stay" ? "A guest room with warm Indian details" : item.label === "Dining" ? "A welcoming vegetarian restaurant interior" : "An atmospheric courtyard arranged for gathering"} fill sizes="(max-width: 800px) 100vw, 34vw"/></div><Text className="eyebrow">{item.label}</Text><h3>{item.title}</h3><p>{item.copy}</p><span className="inlineArrow">Discover <ArrowRight/></span></Link></Reveal>)}</div></section>;
}

export function StaySection() {
  return <section className="staySection"><Reveal className="stayVisual"><Image src="/images/heritage-room.png" alt="A calm guest room styled with Indian textiles" fill sizes="(max-width: 800px) 100vw, 58vw"/><div className="imageNote"><span>Stay at Radhe</span><small>Enquire directly for room details and availability</small></div></Reveal><Reveal className="stayEditorial" delay={100}><Text className="eyebrow">Rooms & stays</Text><h2>Rest that feels uncomplicated.</h2><p>Comfortable rooms offer a welcome pause for overnight guests and travellers along NH-11. Contact our team for the room option that best fits your visit.</p><div className="quietFacts"><span>Overnight stays</span><span>Direct enquiries</span><span>Restaurant on site</span></div><ArrowLink href="/stay">Explore your stay</ArrowLink></Reveal></section>;
}

export function DiningSection() {
  return <section className="diningSection"><Reveal className="diningCopy"><Text className="eyebrow">The restaurant</Text><h2>Vegetarian food, served with warmth.</h2><p>Radhe’s restaurant is a place to pause, share a meal and enjoy familiar flavours in a welcoming setting. For today’s menu or a table enquiry, speak directly with our team.</p><Flex className="sectionActions"><ArrowLink href="/dining">Explore dining</ArrowLink><a className="subtleLink" href={contact.whatsapp}>Ask for today’s menu ↗</a></Flex></Reveal><Reveal className="diningImages" delay={100}><div className="diningMain"><Image src="/images/radhe-dining-room.png" alt="A warm restaurant dining room prepared for families" fill sizes="(max-width: 800px) 100vw, 48vw"/></div><div className="diningDetail"><Image src="/images/rajasthani-thali.png" alt="A vegetarian meal served in traditional brassware" fill sizes="220px"/></div></Reveal></section>;
}

export function EventSection() {
  return <section className="eventSection"><Image src="/images/radhe-dining-room.png" alt="" fill sizes="100vw"/><div className="eventOverlay"/><Reveal className="eventCopy"><Text className="eyebrow">Celebrations at Radhe</Text><h2>For the moments that bring everyone together.</h2><p>Planning a family celebration or private gathering? Share the occasion and guest count with our team, and we’ll help you explore the right arrangement.</p><Link className="primaryAction ivory" href="/celebrations">Plan a celebration <span>↗</span></Link></Reveal></section>;
}

export function StorySection() {
  return <section className="storySection"><Reveal><Text className="eyebrow">Our point of view</Text><blockquote>“Hospitality is not about excess. It is about noticing what makes someone feel at ease.”</blockquote></Reveal><Reveal className="storyText" delay={100}><p>Radhe is a contemporary hospitality address rooted in the warmth of Rajasthan. We welcome travellers, diners and families with the same intention: a comfortable experience, thoughtfully presented.</p><ArrowLink href="/about">Read our story</ArrowLink></Reveal></section>;
}

export function LocationSection() {
  return <section className="locationSection"><div className="locationMap" aria-hidden="true"><span className="road roadOne"/><span className="road roadTwo"/><MapPin/><b>Radhe</b><small>NH-11 · Sridungargarh</small></div><Reveal className="locationCopy"><SectionHeading eyebrow="Find us" title="Well placed for the road ahead."/><p>{contact.address}</p><div className="contactActions"><a className="primaryAction" href="https://maps.google.com/?q=Vasundhara+Nagar+Sridungargarh+Bikaner">Get directions <span>↗</span></a><a className="phoneAction" href={contact.tel}><Phone/> {contact.phone}</a></div></Reveal></section>;
}

export { GallerySection };
