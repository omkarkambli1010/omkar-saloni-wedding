"use client";
import { useState, useEffect } from "react";

interface Wish { name: string; text: string; ts: string; }

const defaults: Wish[] = [
  { name:"The Kambli Family", text:"May your love be as vast as the Arabian Sea and as enduring as the Western Ghats. Wishing you a lifetime of togetherness and joy!", ts:"" },
  { name:"The Bagkar Family", text:"Congratulations on this beautiful chapter. May Lord Ganesha bless your union with love, laughter, and eternal happiness!", ts:"" },
  { name:"A Dear Friend", text:"Omkar and Saloni - two wonderful souls made for each other. Wishing you every happiness on this auspicious occasion!", ts:"" },
];

export default function Wishes() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [wName, setWName] = useState("");
  const [wText, setWText] = useState("");

  useEffect(() => {
    const stored: Wish[] = JSON.parse(localStorage.getItem("om-sal-wishes") || "[]");
    setWishes(stored);
  }, []);

  function submit() {
    if (!wName.trim() || !wText.trim()) { alert("Please enter your name and message."); return; }
    const updated = [...wishes, { name: wName.trim(), text: wText.trim(), ts: new Date().toISOString() }];
    localStorage.setItem("om-sal-wishes", JSON.stringify(updated));
    setWishes(updated);
    setWName(""); setWText("");
  }

  const all = [...defaults, ...wishes].reverse();

  return (
    <section id="wishes" className="wishes-section">
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <div className="section-title">
          <span className="label" style={{ fontFamily:"var(--font-great-vibes)" }}>With Love</span>
          <h2 style={{ fontFamily:"var(--font-cormorant)" }}>Leave Your Blessings</h2>
          <div className="ornament-row"><span>♥</span></div>
        </div>
        <div className="wish-form-wrap">
          <input type="text" value={wName} onChange={(e)=>setWName(e.target.value)} placeholder="Your Name" />
          <textarea rows={4} value={wText} onChange={(e)=>setWText(e.target.value)} placeholder="Write your wishes and blessings for Omkar and Saloni..." />
          <button className="wish-send-btn" onClick={submit}><i className="fas fa-heart" /> Send Blessings</button>
        </div>
        <div className="wishes-list">
          {all.map((w, i) => (
            <div className="wish-card" key={i}>
              <p className="wish-text" style={{ fontFamily:"var(--font-cormorant)" }}>{w.text}</p>
              <p className="wish-by">— {w.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
