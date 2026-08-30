import type { Metadata } from "next";
import { ServicesMarket } from "@/components/sections/ServicesMarket";

export const metadata: Metadata = {
  title: "Services — Aly Maher",
  description:
    "Local expertise for Egypt, GCC, and Europe — from WordPress to custom platforms.",
};

export default function ServicesPage() {
  return (
    <main className="relative pt-20">
      <ServicesMarket />
    </main>
  );
}
