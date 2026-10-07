import type { Metadata } from "next";
import { Cardo, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBookingBar from "@/components/StickyBookingBar";
import { site } from "@/lib/site";

const display = Cardo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap"
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: "Psychologist in Malad West, Mumbai | Chandni Akhenia",
    template: "%s | Chandni Akhenia"
  },
  description: "Psychological counselling with Chandni Akhenia in Malad West, Mumbai and online. Explore support for anxiety, relationships, stress and emotional wellbeing.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: "Psychologist in Malad West, Mumbai | Chandni Akhenia",
    description: "A calm, collaborative space for psychological support in Malad West and online.",
    url: site.baseUrl,
    images: [{ url: site.portrait, width: 770, height: 1024, alt: "Psychologist Chandni Akhenia" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Psychologist in Malad West, Mumbai | Chandni Akhenia",
    description: "Psychological counselling in Malad West, Mumbai and online."
  },
  category: "health"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={display.variable + " " + body.variable}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        {children}
        <Footer />
        <StickyBookingBar />
      </body>
    </html>
  );
}
