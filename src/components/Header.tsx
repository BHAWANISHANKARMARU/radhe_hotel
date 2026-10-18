"use client";
import Image from "next/image";
import Link from "next/link";
import { Box, Flex } from "@chakra-ui/react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const firstLink = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();
  useEffect(() => { if (open) firstLink.current?.focus(); }, [open]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return <Box as="header" className="siteHeader">
    <Flex className="headerInner">
      <Link className="identity" href="/" aria-label="Radhe Hotel and Restaurant home">
        <Image src="/images/radhe-logo.png" width={54} height={42} alt="" priority />
        <span><strong>Radhe</strong><small>Hotel & Restaurant</small></span>
      </Link>
      <Flex as="nav" className="desktopNav" aria-label="Primary navigation">
        {nav.map(([label, href]) => <Link key={href} aria-current={pathname === href ? "page" : undefined} href={href}>{label}</Link>)}
      </Flex>
      <Link className="button buttonPrimary headerBook" href="/book">Book a stay</Link>
      <button className="menuToggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(value => !value)}>{open ? <X /> : <Menu />}</button>
    </Flex>
    <nav id="mobile-navigation" className={`mobileNav ${open ? "open" : ""}`} aria-hidden={!open} aria-label="Mobile navigation">
      {nav.map(([label, href], index) => <Link onClick={() => setOpen(false)} ref={index === 0 ? firstLink : undefined} tabIndex={open ? 0 : -1} key={href} aria-current={pathname === href ? "page" : undefined} href={href}>{label}</Link>)}
      <Link onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className="button buttonPrimary" href="/book">Book or enquire</Link>
    </nav>
  </Box>;
}
