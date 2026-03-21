interface Props {
  size?: number;
  color?: string;
  textColor?: string;
}

export default function LogoSVG({ size = 120, color = "#C9A96E", textColor = "#7A3040" }: Props) {
  return (
    <svg
      width={size}
      height={size * 1.3}
      viewBox="0 0 120 156"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Omkar & Saloni monogram"
    >
      {/* Outer ring */}
      <circle cx="60" cy="60" r="56" stroke={color} strokeWidth="0.8" fill="none" opacity="0.7" />
      {/* Inner ring */}
      <circle cx="60" cy="60" r="50" stroke={color} strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Botanical sprig — top left */}
      <g stroke={color} strokeWidth="0.8" fill="none" opacity="0.75">
        <line x1="22" y1="22" x2="30" y2="30" />
        <line x1="22" y1="22" x2="18" y2="26" />
        <line x1="24" y1="24" x2="20" y2="28" />
        <line x1="26" y1="26" x2="22" y2="30" />
        <ellipse cx="19" cy="20" rx="3" ry="1.5" transform="rotate(-45 19 20)" />
        <ellipse cx="22" cy="17" rx="3" ry="1.5" transform="rotate(-30 22 17)" />
        <ellipse cx="17" cy="24" rx="3" ry="1.5" transform="rotate(-60 17 24)" />
      </g>

      {/* Botanical sprig — bottom right */}
      <g stroke={color} strokeWidth="0.8" fill="none" opacity="0.75">
        <line x1="98" y1="98" x2="90" y2="90" />
        <line x1="98" y1="98" x2="102" y2="94" />
        <line x1="96" y1="96" x2="100" y2="92" />
        <line x1="94" y1="94" x2="98" y2="90" />
        <ellipse cx="101" cy="100" rx="3" ry="1.5" transform="rotate(-45 101 100)" />
        <ellipse cx="98" cy="103" rx="3" ry="1.5" transform="rotate(-30 98 103)" />
        <ellipse cx="103" cy="96" rx="3" ry="1.5" transform="rotate(-60 103 96)" />
      </g>

      {/* Overlapping O */}
      <text
        x="34"
        y="78"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="62"
        fontWeight="400"
        fill={textColor}
        opacity="0.92"
        letterSpacing="-2"
      >
        O
      </text>

      {/* Overlapping S */}
      <text
        x="54"
        y="78"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="62"
        fontWeight="400"
        fill={color}
        opacity="0.92"
        letterSpacing="-2"
      >
        S
      </text>

      {/* OMKAR & SALONI */}
      <text
        x="60"
        y="108"
        textAnchor="middle"
        fontFamily="'Georgia', serif"
        fontSize="7.5"
        fontWeight="400"
        fill={textColor}
        letterSpacing="3"
      >
        OMKAR &amp; SALONI
      </text>

      {/* Date */}
      <text
        x="60"
        y="120"
        textAnchor="middle"
        fontFamily="'Georgia', serif"
        fontSize="6.5"
        fontWeight="400"
        fill={color}
        letterSpacing="2.5"
      >
        19 · 04 · 2026
      </text>
    </svg>
  );
}
