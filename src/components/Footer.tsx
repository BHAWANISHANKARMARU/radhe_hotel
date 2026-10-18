import Image from "next/image";
import Link from "next/link";
import { Box, Flex, Text } from "@chakra-ui/react";
import { contact, nav } from "@/data/site";

export default function Footer() {
  return <Box as="footer" className="siteFooter guestBookFooter material-leather">
    <Flex className="footerTop">
      <div><Text className="eyebrow">Radhe Hotel & Restaurant</Text><h2>Your next pause<br/>begins here.</h2></div>
      <Link className="footerEnquire" href="/book">Book or enquire <span>↗</span></Link>
    </Flex>
    <div className="footerGrid">
      <div className="footerBrand"><Image src="/images/radhe-logo.png" width={100} height={78} alt=""/><p>Thoughtful stays, pure vegetarian dining and warm hospitality in Sridungargarh.</p></div>
      <div><b>Explore</b>{nav.slice(0,5).map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</div>
      <div><b>Enquiries</b><Link href="/stay">Rooms & stays</Link><Link href="/dining">Dining</Link><Link href="/celebrations">Celebrations</Link><a href={contact.whatsapp}>WhatsApp</a></div>
      <div><b>Visit</b><p>{contact.address}</p><a href={contact.tel}>{contact.phone}</a><a href="https://maps.google.com/?q=Vasundhara+Nagar+Sridungargarh+Bikaner">Directions ↗</a></div>
    </div>
    <Flex className="footerBase"><span>© 2026 Radhe Hotel & Restaurant</span><span>Sridungargarh · Bikaner · Rajasthan</span></Flex>
  </Box>;
}
