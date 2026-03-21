"use client";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const imgs = [
  { src:"https://picsum.photos/seed/wedding-wide/800/500",  alt:"Couple" },
  { src:"https://picsum.photos/seed/bride-portrait/400/400", alt:"Bride" },
  { src:"https://picsum.photos/seed/groom-portrait/400/400", alt:"Groom" },
  { src:"https://picsum.photos/seed/couple-wide/800/500",   alt:"Together" },
  { src:"https://picsum.photos/seed/couple-flowers/400/400", alt:"Flowers" },
  { src:"https://picsum.photos/seed/wedding-decor/400/400",  alt:"Decor" },
];

export default function Gallery() {
  const [lb, setLb] = useState<number|null>(null);

  const prev = () => setLb((i) => ((i ?? 0) - 1 + imgs.length) % imgs.length);
  const next = () => setLb((i) => ((i ?? 0) + 1) % imgs.length);

  return (
    <section id="gallery" className="gallery-section">
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <ScrollReveal>
          <div className="section-title">
            <span className="label" style={{ fontFamily:"var(--font-great-vibes)" }}>Memories</span>
            <h2 style={{ fontFamily:"var(--font-cormorant)" }}>Photo Gallery</h2>
            <div className="ornament-row"><span>✦</span></div>
          </div>
          <p className="gallery-desc" style={{ fontFamily:"var(--font-cormorant)" }}>Moments that tell our story</p>
        </ScrollReveal>
        <div className="gallery-grid">
          {imgs.map((img, i) => (
            <ScrollReveal key={img.src} delay={i % 3 * 0.1}>
              <div className="g-item" onClick={() => setLb(i)}>
                <img src={img.src} alt={img.alt} loading="lazy" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                <div className="g-overlay"><i className="fas fa-search-plus" style={{ color:"white", fontSize:"2rem" }} /></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      {lb !== null && (
        <div className="lightbox open" onClick={() => setLb(null)}>
          <button className="lb-close" onClick={() => setLb(null)}><i className="fas fa-times" /></button>
          <button className="lb-nav lb-prev" onClick={(e) => { e.stopPropagation(); prev(); }}><i className="fas fa-chevron-left" /></button>
          <img src={imgs[lb].src} alt={imgs[lb].alt} onClick={(e) => e.stopPropagation()} style={{ maxWidth:"90vw", maxHeight:"85vh", objectFit:"contain", borderRadius:"8px" }} />
          <button className="lb-nav lb-next" onClick={(e) => { e.stopPropagation(); next(); }}><i className="fas fa-chevron-right" /></button>
        </div>
      )}
    </section>
  );
}
