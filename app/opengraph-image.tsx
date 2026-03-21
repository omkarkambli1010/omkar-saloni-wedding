import { ImageResponse } from "next/og";

export const alt = "Omkar & Saloni Wedding Invitation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #130709 0%, #2E0E18 38%, #6B1A2A 72%, #3A0D16 100%)",
        }}
      >
        {/* Outer decorative ring */}
        <div style={{
          position: "absolute",
          width: 520,
          height: 520,
          borderRadius: "50%",
          border: "1px solid rgba(201,169,110,0.12)",
          display: "flex",
        }} />
        <div style={{
          position: "absolute",
          width: 440,
          height: 440,
          borderRadius: "50%",
          border: "1px solid rgba(201,169,110,0.08)",
          display: "flex",
        }} />

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

          {/* OM */}
          <div style={{ color: "#C9A96E", fontSize: 26, letterSpacing: 14, marginBottom: 18 }}>
            ✦  ॐ  ✦
          </div>

          {/* Label */}
          <div style={{ color: "rgba(237,217,163,0.6)", fontSize: 13, letterSpacing: 9, marginBottom: 26, textTransform: "uppercase" }}>
            A Wedding Invitation
          </div>

          {/* Monogram O & S */}
          <div style={{ display: "flex", alignItems: "center", color: "#C9A96E" }}>
            <span style={{ fontSize: 148, lineHeight: 1, fontFamily: "Georgia, serif" }}>O</span>
            <span style={{ fontSize: 52, margin: "0 14px", color: "rgba(201,169,110,0.5)" }}>❋</span>
            <span style={{ fontSize: 148, lineHeight: 1, fontFamily: "Georgia, serif" }}>S</span>
          </div>

          {/* Names */}
          <div style={{ color: "rgba(255,255,255,0.92)", fontSize: 50, letterSpacing: 5, marginTop: 2, fontFamily: "Georgia, serif" }}>
            Omkar  &  Saloni
          </div>

          {/* Gold line */}
          <div style={{ width: 200, height: 1, background: "rgba(201,169,110,0.45)", marginTop: 20, marginBottom: 20, display: "flex" }} />

          {/* Date */}
          <div style={{ color: "#C9A96E", fontSize: 20, letterSpacing: 5 }}>
            Sunday, April 19, 2026  ·  Mumbai
          </div>

          {/* URL */}
          <div style={{ color: "rgba(255,255,255,0.22)", fontSize: 13, letterSpacing: 2, marginTop: 16 }}>
            omkarsaloniweddinginvite.netlify.app
          </div>

        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
