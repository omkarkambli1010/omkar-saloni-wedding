"use client";
import { useState, useEffect } from "react";
import LogoSVG from "./LogoSVG";

interface Props { onOpen: () => void; }

export default function OpeningScreen({ onOpen }: Props) {
  const [closing, setClosing] = useState(false);

  // Lock body scroll while opening screen is visible
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  function handleOpen() {
    // Instantly jump to top before the overlay fades out
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    document.body.style.overflow = "";
    setClosing(true);
    setTimeout(onOpen, 900);
  }

  return (
    <div className={`opening-screen${closing ? " closing" : ""}`}>
      <div className="open-ring" style={{ width:320, height:320, animationDelay:"0s" }} />
      <div className="open-ring" style={{ width:500, height:500, animationDelay:"1.5s" }} />
      <div className="open-ring" style={{ width:700, height:700, animationDelay:"3s" }} />
      <div className="open-ring" style={{ width:900, height:900, animationDelay:"4.5s" }} />
      <div className="open-content">
        <span className="open-om">✦ ॐ ✦</span>
        <p className="open-tag" style={{ fontFamily:"var(--font-raleway)" }}>श्री गणेशाय नमः · A Wedding Invitation</p>
        <div className="open-logo-wrap">
          <LogoSVG size={160} color="#C9A96E" textColor="#7A3040" />
        </div>
        <p className="open-date" style={{ fontFamily:"var(--font-cormorant)" }}>Sunday · April 19, 2026 · Mumbai</p>
        <button className="open-btn" style={{ fontFamily:"var(--font-raleway)" }} onClick={handleOpen}>
          <span>✉&nbsp;&nbsp;Open Invitation</span>
        </button>
      </div>
    </div>
  );
}
