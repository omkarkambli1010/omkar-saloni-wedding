"use client";
import { useState } from "react";

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("1");
  const [msg, setMsg] = useState("");
  const [evts, setEvts] = useState<string[]>(["wedding"]);

  function toggleEvt(v: string) {
    setEvts((prev) => prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]);
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) { alert("Please enter your name and phone."); return; }
    const rsvps = JSON.parse(localStorage.getItem("om-sal-rsvps") || "[]");
    rsvps.push({ name, phone, guests, evts, msg, ts: new Date().toISOString() });
    localStorage.setItem("om-sal-rsvps", JSON.stringify(rsvps));
    setSubmitted(true);
  }

  const evtList = [
    { val:"haldi",   label:"Haldi Ceremony - April 17, 6:30 PM" },
    { val:"wedding", label:"Wedding Ceremony - April 19, 11:00 AM" },
    { val:"lunch",   label:"Welcome Lunch - April 19, 1-3 PM" },
    { val:"puja",    label:"Satyanarayan Puja - April 21, 10:00 AM" },
  ];

  return (
    <section id="rsvp" className="rsvp-section">
      <div style={{ maxWidth:1100, margin:"0 auto", position:"relative" }}>
        <div className="section-title">
          <span className="label" style={{ fontFamily:"var(--font-great-vibes)" }}>Kindly Reply</span>
          <h2 style={{ fontFamily:"var(--font-cormorant)" }}>RSVP</h2>
          <div className="ornament-row"><span>✦</span></div>
        </div>
        <div className="rsvp-wrap">
          {submitted ? (
            <div className="rsvp-success show">
              <div className="rsvp-success-icon" style={{ fontSize:"3.5rem", color:"var(--gold)", marginBottom:"1rem" }}>✓</div>
              <h3 style={{ fontFamily:"var(--font-great-vibes)" }}>Thank You!</h3>
              <p>Your RSVP has been received. We are so happy you will be celebrating with us!</p>
              <p className="see-you" style={{ fontFamily:"var(--font-great-vibes)" }}>See you on April 19th!</p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <div className="f-row">
                <div className="f-group"><label>Your Name *</label><input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Full Name" required /></div>
                <div className="f-group"><label>Phone Number *</label><input type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="+91 XXXXX XXXXX" required /></div>
              </div>
              <div className="f-group">
                <label>Number of Guests</label>
                <select value={guests} onChange={(e)=>setGuests(e.target.value)}>
                  <option value="1">Just Me (1)</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5+">5 or more</option>
                </select>
              </div>
              <div className="f-group">
                <label>Which events will you attend?</label>
                <div className="cb-group">
                  {evtList.map((ev) => (
                    <label className="cb-item" key={ev.val}>
                      <input type="checkbox" checked={evts.includes(ev.val)} onChange={()=>toggleEvt(ev.val)} />
                      <span>{ev.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="f-group">
                <label>Message (Optional)</label>
                <textarea rows={3} value={msg} onChange={(e)=>setMsg(e.target.value)} placeholder="Dietary needs, special requests..." />
              </div>
              <button type="submit" className="rsvp-submit"><i className="fas fa-paper-plane" /> Confirm My Attendance</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
