import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { contact } from "@/data/site";

const TextLink = ({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) => <Link className={`textLink ${light ? "light" : ""}`} href={href}>{children}<ArrowRight aria-hidden="true" /></Link>;

export function HeroSection() {
  return <section className="arrivalHero">
    <div className="arrivalIntro sectionShell">
      <p className="arrivalPlace"><span>NH-11</span><span>Sridungargarh</span><span>Rajasthan</span></p>
      <h1>Your journey deserves<br className="desktopBreak" /> a beautiful pause.</h1>
      <div className="arrivalSummary"><p>Thoughtful stays, pure vegetarian dining, and warm Rajasthani hospitality on NH-11, Sridungargarh.</p><div><Link className="button buttonPrimary" href="/book">Book a stay</Link><TextLink href="/dining">Explore dining</TextLink></div></div>
    </div>
    <figure className="arrivalImage"><Image src="/images/radhe-exterior.png" alt="Radhe Hotel and Restaurant illuminated at dusk beside NH-11" fill priority sizes="100vw" /><figcaption><span>Radhe Hotel & Restaurant</span><span>Stay · Dine · Gather</span></figcaption></figure>
  </section>;
}

export function WelcomeSection() {
  return <section className="welcomePassage sectionShell"><p className="chapterMark">A place to pause</p><div><h2>Made for the road ahead—and the people around your table.</h2><p>Radhe brings together comfortable stays, pure vegetarian dining and space for family celebrations. Our approach is simple: make every visit feel considered, comfortable and genuinely welcoming.</p></div></section>;
}

export function StaySection() {
  return <section className="stayChapter"><div className="stayChapterTitle sectionShell"><p className="chapterMark">Rooms & stays</p><h2>Settle into your own rhythm.</h2><TextLink href="/stay">See your stay</TextLink></div><figure className="roomPanorama"><Image src="/images/heritage-room.png" alt="Comfortable Radhe guest room with warm Indian textiles" fill sizes="100vw" /></figure><div className="stayFoot sectionShell"><p>Comfortable rooms for overnight guests, travellers along NH-11, and visitors spending time in Sridungargarh.</p><Link href="/book">Enquire for your dates <ArrowRight /></Link></div></section>;
}

export function DiningSection() {
  return <section className="tableChapter"><div className="tableLead sectionShell"><p className="chapterMark light">At the table</p><h2>Pure vegetarian food.<br />Time to enjoy it.</h2><p>Visit for a meal, pause during a journey, or bring the family together. Contact the restaurant directly for the current menu and group arrangements.</p></div><div className="tableImages"><figure className="restaurantFrame"><Image src="/images/radhe-dining-room.png" alt="Radhe's warm vegetarian restaurant dining room" fill sizes="(max-width: 760px) 100vw, 68vw" /></figure><figure className="thaliFrame"><Image src="/images/rajasthani-thali.png" alt="Vegetarian Rajasthani meal served in brass bowls" fill sizes="(max-width: 760px) 75vw, 28vw" /><figcaption>Pure vegetarian dining</figcaption></figure></div><div className="tableLinks sectionShell"><TextLink href="/dining" light>Explore the restaurant</TextLink><a href={contact.whatsapp}>Ask for today’s menu <ArrowRight /></a></div></section>;
}

export function CelebrationSection() {
  return <section className="gatherChapter sectionShell"><div className="gatherStatement"><p className="chapterMark">Celebrations</p><h2>Bring your people. We’ll begin with a conversation.</h2></div><figure><Image src="/images/courtyard-hero.png" alt="Radhe courtyard arranged for an evening gathering" fill sizes="(max-width: 760px) 100vw, 72vw" /></figure><div className="gatherDetails"><p>For family celebrations and private gathering enquiries, share the occasion, preferred date and expected guest count with the Radhe team.</p><Link className="button buttonPrimary" href="/celebrations">Plan a celebration</Link></div></section>;
}

export function GlimpseSection() {
  return <section className="glimpseChapter"><div className="glimpseHeading sectionShell"><p className="chapterMark">A closer look</p><h2>One address, several ways to arrive.</h2><TextLink href="/gallery">Open the gallery</TextLink></div><div className="glimpseSequence"><figure><Image src="/images/radhe-exterior.png" alt="Radhe exterior at dusk" fill sizes="50vw" /></figure><figure><Image src="/images/rajasthani-thali.png" alt="Vegetarian Rajasthani meal" fill sizes="26vw" /></figure><figure><Image src="/images/radhe-dining-room.png" alt="Radhe restaurant interior" fill sizes="38vw" /></figure></div></section>;
}

export function ClosingSection() {
  return <section className="closingChapter"><div className="closingStory"><p className="chapterMark light">Our approach</p><h2>Warm hospitality, without complication.</h2><p>A comfortable place to pause. A vegetarian meal shared at ease. A celebration planned through a real conversation.</p><TextLink href="/about" light>Our story</TextLink></div><div className="closingAddress"><MapPin /><p className="chapterMark">Find Radhe</p><h3>On NH-11, in Sridungargarh.</h3><p>{contact.address}</p><div><a className="button buttonPrimary" href="https://maps.google.com/?q=Vasundhara+Nagar+Sridungargarh+Bikaner">Get directions</a><a href={contact.tel}><Phone />{contact.phone}</a></div></div></section>;
}
