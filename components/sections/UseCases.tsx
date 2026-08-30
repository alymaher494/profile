import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Parallax } from "@/components/ui/Parallax";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { AxisField } from "@/components/ui/AxisField";

const USE_CASES = [
  {
    href: "/work?filter=ecommerce",
    coord: "01",
    label: "E-commerce",
    desc: "Online stores that convert visitors into buyers — WooCommerce, Shopify, or custom checkout.",
  },
  {
    href: "/work?filter=corporate",
    coord: "02",
    label: "Corporate site",
    desc: "Bilingual corporate presence that builds trust — from identity to content publishing.",
  },
  {
    href: "/work?filter=custom",
    coord: "03",
    label: "Custom system",
    desc: "Bespoke platforms, admin panels, and internal tools built for your exact workflow.",
  },
  {
    href: "/work?filter=infra",
    coord: "04",
    label: "Infrastructure",
    desc: "Hosting, CI/CD, DNS, and high-availability architecture — production-hardened.",
  },
  {
    href: "/work?filter=ai",
    coord: "05",
    label: "AI / Automation",
    desc: "Applied AI, chatbots, lead routing, and workflow automation that saves hours.",
  },
];

export function UseCases() {
  return (
    <section
      id="use-cases"
      className="relative border-t border-line py-24 sm:py-32"
    >
      <Parallax max={30} speed={0.2} section="architecture">
        <AxisField className="pointer-events-none absolute -left-24 top-10 hidden h-[420px] w-[420px] opacity-30 lg:block" />
      </Parallax>

      <div className="shell relative">
        <SectionMarker coord="02" label="USE CASES" section="architecture" />

        <Reveal section="architecture" className="mt-6 max-w-2xl">
          <h2 className="display-lg text-ink">Built for your system.</h2>
          <p className="mt-4 text-muted">
            Pick the use case that matches your needs. Each one maps to real,
            shipped work — not concept art.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((u, i) => (
            <Reveal
              key={u.href}
              delay={(i % 3) * 0.05}
              className="group bg-void transition-colors hover:bg-surface"
            >
              <Link
                href={u.href}
                className="relative flex h-full flex-col gap-4 p-8 transition-transform duration-500 group-hover:-translate-y-1"
              >
                <div className="relative z-10 flex items-center justify-between">
                  <span className="coord">NODE.{u.coord}</span>
                  <span className="font-mono text-sm text-muted-2 transition-colors group-hover:text-signal">
                    →
                  </span>
                </div>
                <h3 className="relative z-10 font-display text-2xl font-medium text-ink transition-colors group-hover:text-signal">
                  {u.label}
                </h3>
                <p className="relative z-10 max-w-sm text-sm leading-relaxed text-muted">
                  {u.desc}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
