import Image from "next/image";
import Link from "next/link";
import { Box } from "@chakra-ui/react";
import { contact, nav } from "@/data/site";

export default function Footer() {
  return <Box as="footer" className="siteFooter">
    <div className="footerCallout"><div><p className="kicker light">Plan your visit</p><h2>A comfortable stay, a good meal, or a reason to gather.</h2></div><Link className="button buttonLight" href="/book">Start an enquiry</Link></div>
    <div className="footerGrid">
      <div className="footerBrand"><Link href="/" aria-label="Radhe home"><Image src="/images/radhe-logo.png" width={76} height={59} alt="" /></Link><p>Thoughtful stays and pure vegetarian dining on NH-11 in Sridungargarh.</p></div>
      <div><b>Explore</b>{nav.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</div>
      <div><b>Enquiries</b><a href={contact.tel}>{contact.phone}</a><a href={contact.whatsapp}>WhatsApp</a><Link href="/book">Book or enquire</Link></div>
      <div><b>Visit</b><p>{contact.address}</p><a href="https://maps.google.com/?q=Vasundhara+Nagar+Sridungargarh+Bikaner">Open directions</a></div>
    </div>
    <div className="footerBase"><span>© 2026 Radhe Hotel & Restaurant</span><span>Sridungargarh · Rajasthan</span></div>
  </Box>;
}
