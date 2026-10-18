"use client";
import Image from "next/image";
import Link from "next/link";
import { Box, Button, Flex } from "@chakra-ui/react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const firstLink = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();
  const overlaysHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { if (open) firstLink.current?.focus(); }, [open]);

  return <Box as="header" className={`siteHeader ${overlaysHero && !scrolled ? "over-hero" : "solid"}`}>
    <Flex className="headerInner">
      <Link className="identity" href="/" aria-label="Radhe Hotel and Restaurant home">
        <Image src="/images/radhe-logo.png" width={64} height={50} alt="" priority />
        <span><strong>Radhe</strong><small>Hotel & Restaurant</small></span>
      </Link>
      <Flex as="nav" className="desktopNav" aria-label="Primary navigation">
        {nav.map(([label, href]) => <Link key={href} className={pathname === href ? "active" : ""} href={href}>{label}</Link>)}
      </Flex>
      <Link className="headerBook" href="/book">Book a stay <span aria-hidden="true">↗</span></Link>
      <Button className="menuToggle" variant="ghost" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </Flex>
    <nav id="mobile-navigation" className={`mobileNav ${open ? "open" : ""}`} aria-hidden={!open} aria-label="Mobile navigation">
      {nav.map(([label, href], index) => <Link onClick={() => setOpen(false)} ref={index === 0 ? firstLink : undefined} tabIndex={open ? 0 : -1} key={href} href={href}><span>0{index + 1}</span>{label}</Link>)}
      <Link onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className="mobileBook" href="/book">Book or enquire <span>↗</span></Link>
    </nav>
  </Box>;
}
