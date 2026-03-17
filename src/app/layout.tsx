import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import FloatingCTA from "@/components/FloatingCTA";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DHI Exteriors | Calgary's Premier Home Exterior Specialists",
  description:
    "With over 20 years of experience, DHI Exteriors delivers exceptional craftsmanship in exterior and interior painting, siding installation, custom decks, doors, windows, and basement development across Calgary and surrounding areas.",
  keywords: [
    "Calgary exterior painting",
    "Calgary siding installation",
    "deck building Calgary",
    "window replacement Calgary",
    "door installation Calgary",
    "basement development Calgary",
    "home renovation Calgary",
    "DHI Exteriors",
    "Calgary home improvement",
    "exterior specialists Calgary",
    "James Hardie siding Calgary",
    "Calgary contractors",
  ],
  openGraph: {
    title: "DHI Exteriors | Calgary's Premier Home Exterior Specialists",
    description:
      "Trusted by Calgary homeowners for 20+ years. Expert exterior painting, siding, decks, doors, windows, and basement development. Quality craftsmanship, lasting results.",
    url: "https://dhiexteriors.com",
    siteName: "DHI Exteriors",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DHI Exteriors | Calgary's Premier Home Exterior Specialists",
    description:
      "Trusted by Calgary homeowners for 20+ years. Expert exterior painting, siding, decks, doors, windows, and basement development.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://dhiexteriors.com"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "DHI Exteriors",
  description:
    "Calgary's premier home exterior specialists offering painting, siding, decks, doors, windows, and basement development with over 20 years of experience.",
  url: "https://dhiexteriors.com",
  telephone: "587-575-4832",
  email: "clarence@dhiexteriors.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Calgary",
    addressRegion: "AB",
    addressCountry: "CA",
  },
  areaServed: {
    "@type": "City",
    name: "Calgary",
  },
  priceRange: "$$",
  openingHours: "Mo-Fr 08:00-18:00",
  sameAs: [],
  serviceType: [
    "Exterior Painting",
    "Interior Painting",
    "Siding Installation",
    "Deck Building",
    "Door Installation",
    "Window Replacement",
    "Basement Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
          <FloatingCTA />
        </SmoothScroll>
      </body>
    </html>
  );
}
