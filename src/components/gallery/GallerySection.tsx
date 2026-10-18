"use client";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { galleryImages } from "@/data/content";

export default function GallerySection({ full = false }: { full?: boolean }) {
  const [active, setActive] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => { if (active !== null && !dialog.current?.open) dialog.current?.showModal(); else if (active === null && dialog.current?.open) dialog.current.close(); }, [active]);
  const move = (delta: number) => setActive(current => current === null ? null : (current + delta + galleryImages.length) % galleryImages.length);
  return <section className={`gallerySection ${full ? "full" : ""}`}>
    <div className="galleryHeading"><p className="chapterMark">A visual introduction</p><h1>{full ? "Four moments at Radhe." : "Look closer."}</h1><p>From the road outside to the room, restaurant and food waiting within.</p></div>
    <div className="galleryStory">{galleryImages.map((image, index) => <button key={image.src} className={`galleryItem item${index + 1}`} onClick={() => setActive(index)} aria-label={`Open image: ${image.caption}`}><Image src={image.src} alt={image.alt} fill sizes={index === 0 ? "(max-width: 900px) 100vw, 62vw" : "(max-width: 900px) 100vw, 38vw"} /><span><b>0{index + 1}</b>{image.caption}</span></button>)}</div>
    <dialog ref={dialog} className="lightbox" onClose={() => setActive(null)} onCancel={() => setActive(null)} onClick={event => { if (event.target === event.currentTarget) setActive(null); }}>{active !== null && <div className="lightboxInner"><Image src={galleryImages[active].src} alt={galleryImages[active].alt} fill sizes="92vw" /><p>{galleryImages[active].caption}</p><Button className="lightboxClose" onClick={() => setActive(null)} aria-label="Close gallery"><X /></Button><Button className="lightboxPrev" onClick={() => move(-1)} aria-label="Previous image"><ChevronLeft /></Button><Button className="lightboxNext" onClick={() => move(1)} aria-label="Next image"><ChevronRight /></Button></div>}</dialog>
  </section>;
}
