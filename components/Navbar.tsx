"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#story",   label: "Story" },
    { href: "#events",  label: "Events" },
    { href: "#venue",   label: "Venue" },
    { href: "#gallery", label: "Gallery" },
    { href: "#wishes",  label: "Wishes" },
  ];

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <a href="#hero" className="nav-logo royal-logo">
        <span className="royal-logo-crown">♛ Est. 2026 ♛</span>
        <span className="royal-logo-names">Omkar <span className="royal-logo-sep">✦</span> Saloni</span>
        <span className="royal-logo-tagline">— Together Forever —</span>
      </a>
      <ul className={`nav-links${open ? " open" : ""}`}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          </li>
        ))}
      </ul>
      <button className="hamburger" onClick={() => setOpen((v) => !v)} aria-label="Menu">
        <span /><span /><span />
      </button>
    </nav>
  );
}
