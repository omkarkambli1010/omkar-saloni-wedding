"use client";
import { useState, useEffect } from "react";
import LogoSVG from "./LogoSVG";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = [
    { href: "#story",   label: "Story" },
    { href: "#events",  label: "Events" },
    { href: "#venue",   label: "Venue" },
  ];

  return (
    <>
      {open && <div className="nav-backdrop" onClick={() => setOpen(false)} />}
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <a href="#hero" className="nav-logo">
          <LogoSVG size={52} color="#C9A96E" />
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
    </>
  );
}
