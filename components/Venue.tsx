import ScrollReveal from "./ScrollReveal";

export default function Venue() {
  return (
    <section id="venue" className="venue-section">
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <ScrollReveal>
          <div className="section-title">
            <span className="label" style={{ fontFamily:"var(--font-great-vibes)" }}>Location</span>
            <h2 style={{ fontFamily:"var(--font-cormorant)" }}>Wedding Venue</h2>
            <div className="ornament-row"><span>✦</span></div>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="venue-card">
            <div className="venue-map-wrap">
              <iframe src="https://maps.google.com/maps?q=Chandavarkar+Road+Matunga+Mumbai+400019&output=embed" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Venue" />
            </div>
            <div className="venue-info">
              <h3 className="venue-name" style={{ fontFamily:"var(--font-cormorant)" }}>Shri Laxmashi Nappu Hall</h3>
              <p className="venue-sub" style={{ fontFamily:"var(--font-great-vibes)" }}>Matushri Velbhai Sabhagruha</p>
              <p className="venue-addr" style={{ fontFamily:"var(--font-cormorant)" }}>390, Chandavarkar Road, Matunga<br/>Station Road, Matunga<br/>Mumbai - 400019, Maharashtra</p>
              <div className="venue-btns">
                <a href="https://maps.google.com/?q=390+Chandavarkar+Road+Matunga+Mumbai+400019" target="_blank" rel="noopener noreferrer" className="vbtn primary"><i className="fas fa-map-marker-alt" /> Open in Google Maps</a>
                <a href="https://maps.google.com/maps?daddr=390+Chandavarkar+Road+Matunga+Mumbai+400019" target="_blank" rel="noopener noreferrer" className="vbtn outline"><i className="fas fa-directions" /> Get Directions</a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
