import LogoSVG from "./LogoSVG";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-logo-wrap">
        <LogoSVG size={100} color="#C9A96E" />
      </div>
      <p className="footer-quote" style={{ fontFamily:"var(--font-cormorant)" }}>Two hearts, one beautiful journey - April 19, 2026</p>
      <div className="footer-line" />
      <p className="footer-fam" style={{ fontFamily:"var(--font-cormorant)" }}>
        <strong>Wedding Coordinator</strong><br />
        Ku. Gauri Rajan Kambli - <a href="tel:+919821291646">+91 9821 291 646</a>
      </p>
      <div className="footer-line" />
      <p className="footer-fam" style={{ fontFamily:"var(--font-cormorant)" }}>
        <strong>Grooms Family</strong><br />
        Shri. Rajan Madhukar Kambli and Sau. Rushali Rajan Kambli<br />
        Malvan, Dist. Sindhudurg
      </p>
      <br />
      <p className="footer-fam" style={{ fontFamily:"var(--font-cormorant)" }}>
        <strong>Brides Family</strong><br />
        Shri. Suresh Bhikaji Bagkar and Sau. Savita Suresh Bagkar<br />
        Redi, Tal. Vengurla, Dist. Sindhudurg
      </p>
      <div className="footer-line" />
      <p className="footer-copy">Made with love for Omkar &amp; Saloni&apos;s Wedding · April 19, 2026 · Mumbai</p>
    </footer>
  );
}
