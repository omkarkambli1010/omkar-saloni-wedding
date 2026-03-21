"use client";
import { useEffect, useState } from "react";

function getTimeLeft() {
  const target = new Date("2026-04-19T11:00:00+05:30").getTime();
  const diff = Math.max(target - Date.now(), 0);
  return {
    d: String(Math.floor(diff / 86400000)).padStart(2, "0"),
    h: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, "0"),
    m: String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0"),
    s: String(Math.floor((diff % 60000) / 1000)).padStart(2, "0"),
  };
}

export default function Countdown() {
  const [t, setT] = useState({ d:"00", h:"00", m:"00", s:"00" });

  useEffect(() => {
    setT(getTimeLeft());
    const id = setInterval(() => setT(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { val: t.d, label: "Days" },
    { val: t.h, label: "Hours" },
    { val: t.m, label: "Minutes" },
    { val: t.s, label: "Seconds" },
  ];

  return (
    <div className="countdown-section">
      <p className="cd-title" style={{ fontFamily:"var(--font-great-vibes)" }}>Counting Down to the Big Day</p>
      <div className="cd-row">
        {items.map((item, i) => (
          <div key={item.label} style={{ display:"contents" }}>
            <div className="cd-item">
              <span className="cd-num" style={{ fontFamily:"var(--font-cormorant)" }}>{item.val}</span>
              <p className="cd-label">{item.label}</p>
            </div>
            {i < 3 && <span className="cd-sep" style={{ fontFamily:"var(--font-cormorant)" }}>:</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
