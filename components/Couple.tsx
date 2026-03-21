import ScrollReveal from "./ScrollReveal";

export default function Couple() {
  return (
    <section id="couple" className="couple-section">
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <ScrollReveal>
          <div className="section-title">
            <span className="label" style={{ fontFamily:"var(--font-great-vibes)" }}>The Couple</span>
            <h2 style={{ fontFamily:"var(--font-cormorant)" }}>Meet the Groom &amp; Bride</h2>
            <div className="ornament-row"><span>✦</span></div>
          </div>
        </ScrollReveal>

        <div className="couple-grid">
          <ScrollReveal delay={0.1}>
            <div className="person-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/omkar.jpeg" alt="Omkar Kambli — Groom" className="person-photo" style={{ objectPosition:"center 18%" }} />
              <p className="person-role">Groom</p>
              <h3 className="person-name" style={{ fontFamily:"var(--font-great-vibes)" }}>Omkar</h3>
              <div className="person-family" style={{ fontFamily:"var(--font-cormorant)" }}>
                <p><strong>Son of</strong></p>
                <p>Shri. Rajan Madhukar Kambli</p>
                <p>&amp; Sau. Rushali Rajan Kambli</p>
                <br />
                <p style={{ fontSize:"0.85rem" }}><em>Grandson of Late. Madhukar Anant Kambli<br />&amp; Late. Malati Madhukar Kambli</em></p>
                <br />
                <p style={{ fontSize:"0.85rem" }}>Malvan, Dist. Sindhudurg</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="couple-and" style={{ fontFamily:"var(--font-great-vibes)" }}>
              <small>❋</small>
              and
              <small>❋</small>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="person-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/saloni.jpeg" alt="Saloni Bagkar — Bride" className="person-photo" style={{ objectPosition:"center 20%" }} />
              <p className="person-role">Bride</p>
              <h3 className="person-name" style={{ fontFamily:"var(--font-great-vibes)" }}>Saloni</h3>
              <div className="person-family" style={{ fontFamily:"var(--font-cormorant)" }}>
                <p><strong>Daughter of</strong></p>
                <p>Shri. Suresh Bhikaji Bagkar</p>
                <p>&amp; Sau. Savita Suresh Bagkar</p>
                <br /><br /><br /><br />
                <p style={{ fontSize:"0.85rem" }}>Redi, Tal. Vengurla, Dist. Sindhudurg</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
