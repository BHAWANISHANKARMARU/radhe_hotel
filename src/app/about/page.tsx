import Image from "next/image";
import { Text } from "@chakra-ui/react";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = { title: "Our Story | Radhe Hotel & Restaurant", description: "The hospitality philosophy behind Radhe Hotel & Restaurant in Sridungargarh." };

export default function AboutPage(){return <main className="aboutPage">
  <section className="aboutHero"><div><Text className="eyebrow">Our story</Text><h1>Rajasthani warmth, expressed simply.</h1><p>Radhe is a hotel and pure vegetarian restaurant on NH-11 in Sridungargarh, created as a welcoming address for stays, meals and family occasions.</p></div><div className="aboutImage"><Image src="/images/radhe-exterior.png" alt="Hospitality architecture at dusk" fill priority sizes="(max-width: 800px) 100vw, 55vw"/></div></section>
  <section className="aboutPhilosophy"><Reveal><Text className="eyebrow">What guides us</Text><h2>Comfort, clarity and genuine welcome.</h2></Reveal><Reveal delay={100}><p>We believe hospitality feels best when it is attentive without being complicated. A comfortable place to pause. A vegetarian meal shared at ease. A celebration planned through a real conversation.</p><p>That is the experience Radhe aims to offer travellers and the Sridungargarh community.</p></Reveal></section>
  <section className="brandInterlude"><Image src="/images/radhe-logo.png" width={270} height={210} alt="Radhe Restaurant logo"/><p>The taste of tradition.<br/>A contemporary place to arrive.</p></section>
</main>}
