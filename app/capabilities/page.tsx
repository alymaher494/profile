import type { Metadata } from "next";
import { Architecture } from "@/components/sections/Architecture";

export const metadata: Metadata = {
  title: "Capabilities — Aly Maher",
  description:
    "Four engineering domains: Headless Web & E-commerce, Payment Middleware, Applied AI, and Multi-Tenant Infrastructure.",
};

export default function CapabilitiesPage() {
  return (
    <main className="relative pt-20">
      <Architecture />
    </main>
  );
}
