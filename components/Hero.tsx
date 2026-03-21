export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="h-ring" style={{ width:280, height:280, animationDuration:"35s" }} />
      <div className="h-ring" style={{ width:480, height:480, animationDuration:"55s", animationDirection:"reverse", borderStyle:"dashed" }} />
      <div className="h-ring" style={{ width:680, height:680, animationDuration:"75s" }} />
      <div className="h-ring" style={{ width:880, height:880, animationDuration:"95s", animationDirection:"reverse", borderStyle:"dashed", borderColor:"rgba(201,169,110,0.06)" }} />
      <div className="hero-glow g1" />
      <div className="hero-glow g2" />

      <div className="hero-content">
        <p className="hero-blessing" style={{ fontFamily:"var(--font-cormorant)" }}>॥ श्री गणेशाय नमः ॥</p>
        <p className="hero-subtitle-top" style={{ fontFamily:"var(--font-cormorant)" }}>Together with their families, joyfully invite you to celebrate</p>
        <h1 className="hero-names" style={{ fontFamily:"var(--font-great-vibes)" }}>
          Omkar
          <span className="amp">❋ &amp; ❋</span>
          Saloni
        </h1>
        <div className="hero-date-pill">
          <p className="big" style={{ fontFamily:"var(--font-cormorant)" }}>Sunday, April 19, 2026 &nbsp;·&nbsp; 11:00 AM</p>
          <p className="small">Matunga, Mumbai, Maharashtra</p>
        </div>
        <p className="hero-caption" style={{ fontFamily:"var(--font-cormorant)" }}>&ldquo;Two souls, one love — an eternal journey begins&rdquo;</p>
        <div className="hero-actions">
          <a href="#events" className="btn-gold"><i className="fas fa-heart" /> View Events</a>
          <a href="#wishes" className="btn-ghost"><i className="fas fa-star" /> Leave Wishes</a>
        </div>
      </div>

      <div className="scroll-hint">
        <span>Scroll</span>
        <i className="fas fa-chevron-down" />
      </div>
    </section>
  );
}
