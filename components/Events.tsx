import ScrollReveal from "./ScrollReveal";

const events = [
  {
    cls:"haldi", icon:"fas fa-sun", name:"Haldi Samarambh",
    date:"Friday, April 17, 2026", dateSub:"Haldi Ceremony",
    time:"6:30 PM onwards", venue:"At the Groom's Residence", venueSub:"",
    dress:"Yellow & Festive Colours",
  },
  {
    cls:"wedding", icon:"fas fa-ring", name:"Shubha Vivah",
    date:"Sunday, April 19, 2026", dateSub:"Main Wedding Ceremony",
    time:"11:00 AM (Muhurta 34 min)", venue:"Shri Laxmashi Nappu Hall", venueSub:"Matushri Velbhai Sabhagruha, Matunga",
    dress:"Traditional / Ethnic Formal",
  },
  {
    cls:"lunch", icon:"fas fa-utensils", name:"Welcome Reception & Lunch",
    date:"Sunday, April 19, 2026", dateSub:"Swagat Samarambh & Sneh Bhojan",
    time:"1:00 PM – 3:00 PM", venue:"Shri Laxmashi Nappu Hall, Matunga", venueSub:"",
    dress:"Traditional Indian Attire",
  },
  {
    cls:"puja", icon:"fas fa-om", name:"Satyanarayan Puja",
    date:"Tuesday, April 21, 2026", dateSub:"Post-Wedding Puja",
    time:"10:00 AM onwards", venue:"At the Groom's Residence", venueSub:"",
    dress:"Traditional / Casual Ethnic",
  },
];

export default function Events() {
  return (
    <section id="events" className="events-section">
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <ScrollReveal>
          <div className="section-title">
            <span className="label" style={{ fontFamily:"var(--font-great-vibes)" }}>Celebrations</span>
            <h2 style={{ fontFamily:"var(--font-cormorant)" }}>Wedding Events</h2>
            <div className="ornament-row"><span>✦</span></div>
          </div>
        </ScrollReveal>

        <div className="events-grid">
          {events.map((ev, i) => (
            <ScrollReveal key={ev.cls} delay={i % 2 === 0 ? 0.1 : 0.2}>
              <div className={`ev-card ${ev.cls}`}>
                <div className="ev-icon"><i className={ev.icon} /></div>
                <h3 className="ev-name" style={{ fontFamily:"var(--font-cormorant)" }}>{ev.name}</h3>
                <div className="ev-row">
                  <i className="fas fa-calendar-alt ev-i" />
                  <div><span>{ev.date}</span>{ev.dateSub && <span className="sub">{ev.dateSub}</span>}</div>
                </div>
                <div className="ev-row">
                  <i className="fas fa-clock ev-i" />
                  <div><span>{ev.time}</span></div>
                </div>
                <div className="ev-row">
                  <i className="fas fa-map-marker-alt ev-i" />
                  <div><span>{ev.venue}</span>{ev.venueSub && <span className="sub">{ev.venueSub}</span>}</div>
                </div>
                <div className="ev-dress"><strong>Dress Code:</strong> {ev.dress}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
