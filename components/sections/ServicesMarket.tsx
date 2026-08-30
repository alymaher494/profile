import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMarker } from "@/components/ui/SectionMarker";

const MARKETS = [
  {
    id: "egypt",
    title: "Egypt",
    headline: "Built for Egyptian founders and SMEs.",
    body: "Practical systems that fit local payment methods, Arabic-first UX, and realistic budgets. From WordPress storefronts to custom booking platforms.",
    keywords: ["Arabic RTL", "Local payment methods", "SME-ready", "WordPress + WooCommerce"],
  },
  {
    id: "gcc",
    title: "GCC",
    headline: "Saudi, UAE, and Gulf markets — done right.",
    body: "Bilingual RTL, local payment gateways, and enterprise-grade infrastructure. We ship systems that meet regional compliance and user expectations.",
    keywords: ["RTL / AR+EN", "Moyasar / EdfaPay", "GDPR-ready", "Vercel + Cloudflare"],
  },
  {
    id: "europe",
    title: "Europe",
    headline: "Performance, privacy, and precision.",
    body: "German-market expertise with strict privacy standards, edge performance, and maintainable architecture. From headless CMS to custom platforms.",
    keywords: ["GDPR", "Edge caching", "Headless WordPress", "CI/CD"],
  },
];

export function ServicesMarket() {
  return (
    <section className="relative border-t border-line py-24 sm:py-32">
      <div className="shell">
        <SectionMarker coord="02" label="SERVICES" section="architecture" />
        <Reveal section="architecture" className="mt-6 max-w-2xl">
          <h2 className="display-lg text-ink">Local expertise, global standards.</h2>
          <p className="mt-4 text-muted">
            We tailor every engagement to your market — language, payments,
            compliance, and hosting included.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px bg-line lg:grid-cols-3">
          {MARKETS.map((m, i) => (
            <Reveal
              key={m.id}
              section="architecture"
              delay={(i % 3) * 0.06}
              className="bg-void p-8"
            >
              <div className="coord">MKT.{String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-3 font-display text-xl text-ink">{m.title}</h3>
              <p className="mt-2 text-sm font-medium text-signal">{m.headline}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{m.body}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {m.keywords.map((k) => (
                  <span
                    key={k}
                    className="border border-line px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest2 text-signal-dim"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal section="architecture" className="mt-12 text-center">
          <p className="font-mono text-xs uppercase tracking-widest2 text-muted">
            Ready to map your market?{" "}
            <a href="/contact" className="text-signal hover:underline">
              Send a brief
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
