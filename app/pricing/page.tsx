import type { Metadata } from "next";
import { Pricing } from "@/components/sections/Pricing";

export const metadata: Metadata = {
  title: "Pricing — Aly Maher",
  description:
    "Transparent project tiers: Starter ($500+), Growth ($2,000+), Enterprise ($5,000+).",
};

export default function PricingPage() {
  return (
    <main className="relative pt-20">
      <Pricing />
    </main>
  );
}
