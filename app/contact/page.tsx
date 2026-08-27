import type { Metadata } from "next";
import { Terminal } from "@/components/sections/Terminal";

export const metadata: Metadata = {
  title: "Contact — Aly Maher",
  description:
    "Freelance engagements, remote roles, or a technical conversation about a system you need shipped.",
};

export default function ContactPage() {
  return (
    <main className="relative pt-20">
      <Terminal />
    </main>
  );
}
