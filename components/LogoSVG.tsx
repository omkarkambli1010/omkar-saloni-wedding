interface Props {
  size?: number;
  color?: string;
}

export default function LogoSVG({ size = 120, color = "#C9A96E" }: Props) {
  const h = Math.round(size * 1.3);
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 400 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Omkar & Saloni monogram"
    >
      {/* Outer ring */}
      <circle cx="200" cy="200" r="188" stroke={color} strokeWidth="2" fill="none" opacity="0.55" />
      {/* Inner ring */}
      <circle cx="200" cy="200" r="172" stroke={color} strokeWidth="1" fill="none" opacity="0.38" />

      {/* Botanical sprig — top left */}
      <g stroke={color} strokeWidth="2.2" fill="none" opacity="0.7">
        <line x1="68" y1="68" x2="100" y2="100" />
        <line x1="68" y1="68" x2="52" y2="85" />
        <line x1="78" y1="78" x2="62" y2="95" />
        <line x1="88" y1="88" x2="72" y2="104" />
        <ellipse cx="54" cy="58" rx="10" ry="4.5" transform="rotate(-45 54 58)" />
        <ellipse cx="65" cy="49" rx="10" ry="4.5" transform="rotate(-30 65 49)" />
        <ellipse cx="44" cy="70" rx="10" ry="4.5" transform="rotate(-60 44 70)" />
      </g>

      {/* Botanical sprig — bottom right */}
      <g stroke={color} strokeWidth="2.2" fill="none" opacity="0.7">
        <line x1="332" y1="332" x2="300" y2="300" />
        <line x1="332" y1="332" x2="348" y2="315" />
        <line x1="322" y1="322" x2="338" y2="305" />
        <line x1="312" y1="312" x2="328" y2="296" />
        <ellipse cx="346" cy="342" rx="10" ry="4.5" transform="rotate(-45 346 342)" />
        <ellipse cx="335" cy="351" rx="10" ry="4.5" transform="rotate(-30 335 351)" />
        <ellipse cx="356" cy="330" rx="10" ry="4.5" transform="rotate(-60 356 330)" />
      </g>

      {/* O — same color as S, sits slightly left-center */}
      <text
        x="78"
        y="272"
        style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
        fontSize="205"
        fontWeight="300"
        fill={color}
        opacity="0.88"
      >
        O
      </text>

      {/* S — same color, overlapping right portion of O */}
      <text
        x="196"
        y="272"
        style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
        fontSize="205"
        fontWeight="300"
        fill={color}
        opacity="0.88"
      >
        S
      </text>

      {/* Thin separator */}
      <line x1="110" y1="295" x2="290" y2="295" stroke={color} strokeWidth="0.8" opacity="0.35" />

      {/* OMKAR & SALONI */}
      <text
        x="200"
        y="332"
        textAnchor="middle"
        style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
        fontSize="21"
        fontWeight="400"
        fill={color}
        letterSpacing="7"
      >
        OMKAR &amp; SALONI
      </text>

      {/* Date */}
      <text
        x="200"
        y="358"
        textAnchor="middle"
        style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
        fontSize="17"
        fontWeight="300"
        fill={color}
        opacity="0.72"
        letterSpacing="5"
      >
        19 · 04 · 2026
      </text>
    </svg>
  );
}
