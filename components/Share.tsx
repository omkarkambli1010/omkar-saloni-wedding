"use client";
import { useState } from "react";

export default function Share() {
  const [copied, setCopied] = useState(false);

  function shareWA() {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const msg = encodeURIComponent("Wedding Invitation\n\nOmkar and Saloni\nSunday, April 19, 2026 11:00 AM\nShri Laxmashi Nappu Hall, Matunga, Mumbai\n\nJoin us to celebrate!\n\n" + url);
    window.open("https://wa.me/?text=" + msg, "_blank");
  }

  function copyLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true); setTimeout(() => setCopied(false), 3000);
    }).catch(() => {
      const ta = document.createElement("textarea");
      ta.value = url; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); } catch(_) {}
      document.body.removeChild(ta);
      setCopied(true); setTimeout(() => setCopied(false), 3000);
    });
  }

  function saveCalendar() {
    const lines = ["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//OmkarSaloniWedding//EN","BEGIN:VEVENT","DTSTART:20260419T053000Z","DTEND:20260419T073400Z","SUMMARY:Omkar and Saloni Wedding","DESCRIPTION:Wedding Ceremony at Shri Laxmashi Nappu Hall Matunga Mumbai","LOCATION:390 Chandavarkar Road Matunga Mumbai 400019","STATUS:CONFIRMED","BEGIN:VALARM","TRIGGER:-P1D","DESCRIPTION:Tomorrow is Omkar and Saloni Wedding","ACTION:DISPLAY","END:VALARM","END:VEVENT","END:VCALENDAR"];
    const blob = new Blob([lines.join("\r\n")], { type:"text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "Omkar-Saloni-Wedding.ics";
    document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
  }

  return (
    <section id="share" className="share-section">
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <div className="section-title">
          <span className="label" style={{ fontFamily:"var(--font-great-vibes)" }}>Spread the Joy</span>
          <h2 style={{ fontFamily:"var(--font-cormorant)" }}>Share the Invitation</h2>
          <div className="ornament-row"><span>✦</span></div>
        </div>
        <p className="share-sub" style={{ fontFamily:"var(--font-cormorant)" }}>Help us celebrate by sharing this invitation with family and friends</p>
        <div className="share-row">
          <button className="sh-btn wa" onClick={shareWA}><i className="fab fa-whatsapp" /> Share on WhatsApp</button>
          <button className="sh-btn cp" onClick={copyLink}><i className="fas fa-link" /> Copy Invite Link</button>
          <button className="sh-btn cal" onClick={saveCalendar}><i className="fas fa-calendar-plus" /> Save to Calendar</button>
        </div>
        <p className={`copy-toast${copied ? " show" : ""}`}>Link copied to clipboard!</p>
      </div>
    </section>
  );
}
