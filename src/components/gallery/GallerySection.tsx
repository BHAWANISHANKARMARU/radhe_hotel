"use client";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { galleryImages } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export default function GallerySection({ full = false }: { full?: boolean }) {
  const [active, setActive] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => { if (active !== null) dialog.current?.showModal(); else dialog.current?.close(); }, [active]);
  const move = (delta: number) => setActive(current => current === null ? null : (current + delta + galleryImages.length) % galleryImages.length);
  return <section className={`gallerySection ${full ? "full" : ""}`}>
    <Reveal><SectionHeading eyebrow="A glimpse of Radhe" title="Spaces made for a slower moment." intro="A visual introduction to staying, dining and gathering with us." /></Reveal>
    <div className="galleryMosaic">
      {galleryImages.map((image, index) => <Reveal key={image.src} delay={index * 70} className={`galleryTile tile-${index + 1}`}>
        <button onClick={() => setActive(index)} aria-label={`Open image: ${image.caption}`}><Image src={image.src} alt={image.alt} fill sizes={index === 0 ? "(max-width: 800px) 100vw, 60vw" : "(max-width: 800px) 100vw, 35vw"}/><span>{image.caption}<i>View</i></span></button>
      </Reveal>)}
    </div>
    <dialog ref={dialog} className="lightbox" onClose={() => setActive(null)} onClick={e => { if (e.target === e.currentTarget) setActive(null); }}>
      {active !== null && <div className="lightboxInner"><Image src={galleryImages[active].src} alt={galleryImages[active].alt} fill sizes="90vw"/><p>{galleryImages[active].caption}</p><Button className="lightboxClose" onClick={() => setActive(null)} aria-label="Close gallery"><X/></Button><Button className="lightboxPrev" onClick={() => move(-1)} aria-label="Previous image"><ChevronLeft/></Button><Button className="lightboxNext" onClick={() => move(1)} aria-label="Next image"><ChevronRight/></Button></div>}
    </dialog>
  </section>;
}
