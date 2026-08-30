import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Script from "next/script";
import "./globals.css";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { SfxProvider } from "@/components/providers/SfxProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { FloatingMusicPlayer } from "@/components/ui/FloatingMusicPlayer";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sans = GeistSans;
const mono = GeistMono;

export const metadata: Metadata = {
  title: "Aly Maher — Remote Technical Partner",
  description:
    "Aly Maher is a remote technical partner who builds complete digital systems — from WordPress and commerce to full-stack applications, integrations, infrastructure, and interactive experiences.",
  keywords: [
    "Aly Maher",
    "Remote Developer",
    "Full-Stack Engineer",
    "WordPress Engineer",
    "E-commerce",
    "WooCommerce",
    "Next.js",
    "Payment Middleware",
    "AI Automation",
  ],
  authors: [{ name: "Aly Maher" }],
  openGraph: {
    title: "Aly Maher — Remote Technical Partner",
    description:
      "Building complete digital systems — from WordPress and commerce to custom applications, integrations, and interactive web.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050607",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Aly Maher",
    description:
      "Remote technical partner building complete digital systems — from WordPress and commerce to full-stack applications, integrations, infrastructure, and interactive experiences.",
    url: "https://aly-maher-portfolio.vercel.app",
    telephone: "+201152663461",
    email: "alymaher.494@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressCountry: "EG",
    },
    areaServed: ["EG", "SA", "AE", "DE"],
    sameAs: [
      "https://github.com/alymaher494",
      "https://wa.me/201152663461",
    ],
  };

  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(jsonLd)}
        </Script>
        <MotionProvider>
          <SfxProvider />
          <ScrollProgress />
          <Nav />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-void focus:text-signal focus:px-4 focus:py-2 focus:border focus:border-signal"
          >
            Skip to content
          </a>
          <main id="main-content">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
          <FloatingMusicPlayer />
        </MotionProvider>
      </body>
    </html>
  );
}
