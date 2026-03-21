import type { Metadata } from "next";
import { Great_Vibes, Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-great-vibes" });
const cormorant = Cormorant_Garamond({ weight: ["300","400","500","600","700"], style: ["normal","italic"], subsets: ["latin"], variable: "--font-cormorant" });
const raleway = Raleway({ weight: ["300","400","500","600","700"], subsets: ["latin"], variable: "--font-raleway" });

export const metadata: Metadata = {
  title: "Omkar ♥ Saloni | Wedding Invitation",
  description: "Together with their families, Omkar & Saloni joyfully invite you to celebrate their wedding — April 19, 2026, Mumbai.",
  openGraph: {
    title: "Omkar ♥ Saloni | Wedding Invitation",
    description: "Join us to celebrate our wedding — April 19, 2026, Mumbai.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${greatVibes.variable} ${cormorant.variable} ${raleway.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </head>
      <body style={{ fontFamily: "var(--font-raleway), sans-serif" }}>{children}</body>
    </html>
  );
}
