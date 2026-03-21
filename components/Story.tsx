import ScrollReveal from "./ScrollReveal";

const items = [
  { title:"✨ First Meeting", text:"Two souls from the coastal lands of Konkan crossed paths, and something magical began — a connection neither could quite explain.", alt:false },
  { title:"🌊 Growing Closer", text:"Through shared laughter, long conversations, and quiet moments by the sea, their bond deepened like roots reaching into the earth.", alt:true },
  { title:"🌸 Family Blessings", text:"With the grace of the divine and the warm blessings of both families from Sindhudurg, the path was paved for a lifetime together.", alt:false },
  { title:"💍 Forever Begins", text:"And now, on this auspicious Akshay Tritiya day, they begin their forever — hand in hand, heart in heart, soul in soul.", alt:true },
];

export default function Story() {
  return (
    <section id="story" className="story-section">
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <ScrollReveal>
          <div className="section-title">
            <span className="label" style={{ fontFamily:"var(--font-great-vibes)" }}>Our Journey</span>
            <h2 style={{ fontFamily:"var(--font-cormorant)" }}>Our Love Story</h2>
            <div className="ornament-row"><span>♥</span></div>
          </div>
          <p className="story-desc" style={{ fontFamily:"var(--font-cormorant)" }}>Every love story is beautiful — ours is our favourite</p>
        </ScrollReveal>

        <div className="timeline">
          {items.map((item) => (
            <ScrollReveal key={item.title}>
              <div className="tl-item">
                {item.alt ? (
                  <>
                    <div className="tl-empty" />
                    <div className="tl-dot" />
                    <div className="tl-card">
                      <h4 style={{ fontFamily:"var(--font-cormorant)" }}>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="tl-card">
                      <h4 style={{ fontFamily:"var(--font-cormorant)" }}>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                    <div className="tl-dot" />
                    <div className="tl-empty" />
                  </>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
