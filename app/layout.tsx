import type { Metadata } from "next";
import { Great_Vibes, Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-great-vibes", display: "swap" });
const cormorant = Cormorant_Garamond({ weight: ["300","400","500","600","700"], style: ["normal","italic"], subsets: ["latin"], variable: "--font-cormorant", display: "swap" });
const raleway = Raleway({ weight: ["300","400","500","600","700"], subsets: ["latin"], variable: "--font-raleway", display: "swap" });

const SITE_URL = "https://omkarsaloniweddinginvite.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Omkar & Saloni Wedding Invitation | April 19, 2026 · Mumbai",
  description: "You are cordially invited to celebrate the wedding of Omkar Kambli and Saloni Bagkar on Sunday, April 19, 2026 at Shri Laxmashi Nappu Hall, Matunga, Mumbai, Maharashtra.",
  keywords: ["Omkar Saloni wedding", "Omkar Kambli", "Saloni Bagkar", "wedding invitation", "Mumbai wedding 2026", "Matunga wedding", "Kambli Bagkar wedding", "April 2026 wedding"],
  authors: [{ name: "Omkar Kambli" }],
  openGraph: {
    title: "Omkar & Saloni Wedding Invitation | April 19, 2026",
    description: "Join us to celebrate our wedding — Sunday, April 19, 2026 · Shri Laxmashi Nappu Hall, Matunga, Mumbai.",
    type: "website",
    url: SITE_URL,
    siteName: "Omkar & Saloni Wedding",
    locale: "en_IN",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Omkar & Saloni Wedding Invitation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omkar & Saloni Wedding Invitation | April 19, 2026",
    description: "Join us to celebrate our wedding — Sunday, April 19, 2026 · Matunga, Mumbai.",
    images: ["/images/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Omkar & Saloni Wedding",
  "startDate": "2026-04-19T11:00:00+05:30",
  "endDate": "2026-04-19T15:00:00+05:30",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "Shri Laxmashi Nappu Hall",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "390, Chandavarkar Road, Matunga",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400019",
      "addressCountry": "IN"
    }
  },
  "description": "Wedding ceremony of Omkar Kambli and Saloni Bagkar",
  "organizer": { "@type": "Person", "name": "Omkar Kambli" },
  "url": SITE_URL,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${greatVibes.variable} ${cormorant.variable} ${raleway.variable}`}>
      <head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body style={{ fontFamily: "var(--font-raleway), sans-serif" }}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
