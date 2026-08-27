import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sans = GeistSans;
const mono = GeistMono;

export const metadata: Metadata = {
  title: "Aly Maher — Digital Engineer",
  icons: { icon: "/logo.png" },
  description:
    "Aly Maher is a digital engineer who builds complete web systems — from WordPress and e-commerce to full-stack applications, integrations, infrastructure, and interactive experiences.",
  keywords: [
    "Aly Maher",
    "Web Developer",
    "Full-Stack Engineer",
    "WordPress Engineer",
    "Creative Developer",
    "WooCommerce",
    "Next.js",
  ],
  authors: [{ name: "Aly Maher" }],
  openGraph: {
    title: "Aly Maher — Digital Engineer",
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
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        <MotionProvider>
          <ScrollProgress />
          <Nav />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
