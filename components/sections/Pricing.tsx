import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMarker } from "@/components/ui/SectionMarker";

const TIERS = [
  {
    name: "Starter",
    price: "$500+",
    description: "A focused digital presence that works.",
    includes: [
      "Single-page or simple multi-page site",
      "Responsive design",
      "Basic SEO setup",
      "1 round of revisions",
      "2–4 week delivery",
    ],
    cta: "Start a starter project",
    href: "/contact",
  },
  {
    name: "Growth",
    price: "$2,000+",
    description: "A complete system for growing businesses.",
    includes: [
      "Custom multi-page platform",
      "CMS or headless backend",
      "Advanced SEO + structured data",
      "Integrations (payments, WhatsApp, CRM)",
      "4–8 week delivery",
    ],
    cta: "Start a growth project",
    href: "/contact",
  },
  {
    name: "Enterprise",
    price: "$5,000+",
    description: "Full-stack platforms with contract-first engineering.",
    includes: [
      "Complex multi-tenant system",
      "Custom APIs and middleware",
      "Infrastructure + CI/CD",
      "Applied AI / automation",
      "Ongoing support available",
    ],
    cta: "Start an enterprise project",
    href: "/contact",
  },
];

export function Pricing() {
  return (
    <section className="relative border-t border-line py-24 sm:py-32">
      <div className="shell">
        <SectionMarker coord="05" label="PRICING" section="evidence" />
        <Reveal section="terminal" className="mt-6 max-w-2xl">
          <h2 className="display-lg text-ink">Transparent tiers.</h2>
          <p className="mt-4 text-muted">
            Every engagement starts with a clear scope and a fixed price range.
            No hidden fees — just contract-first delivery.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {TIERS.map((tier, i) => (
            <Reveal
              key={tier.name}
              section="terminal"
              delay={(i % 3) * 0.06}
              className="bg-void p-8"
            >
              <div className="coord">TIER.{String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-3 font-display text-xl text-ink">{tier.name}</h3>
              <div className="mt-2 font-display text-3xl text-signal">{tier.price}</div>
              <p className="mt-3 text-sm text-muted">{tier.description}</p>

              <ul className="mt-6 space-y-2">
                {tier.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 font-mono text-[11px] text-muted"
                  >
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-signal/70" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href={tier.href}
                className="mt-8 block w-full border border-line-strong px-6 py-3 text-center font-mono text-xs uppercase tracking-widest2 text-ink transition-colors hover:border-signal hover:text-signal"
              >
                {tier.cta}
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal section="terminal" className="mt-12 text-center">
          <p className="font-mono text-xs uppercase tracking-widest2 text-muted">
            Not sure which tier fits?{" "}
            <Link href="/contact" className="text-signal hover:underline">
              Send a brief
            </Link>{" "}
            and I&apos;ll map it for you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
