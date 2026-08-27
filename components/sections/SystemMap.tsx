import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { AxisField } from "@/components/ui/AxisField";

const NODES = [
  {
    href: "/work",
    coord: "01",
    label: "Selected Work",
    desc: "Live client systems — the evidence ledger of real, shipped builds.",
  },
  {
    href: "/capabilities",
    coord: "02",
    label: "Capabilities",
    desc: "Four engineering domains, from headless web to infrastructure.",
  },
  {
    href: "/case-studies",
    coord: "03",
    label: "Case Studies",
    desc: "Architecture, contracts, and the decisions behind the builds.",
  },
  {
    href: "/contact",
    coord: "04",
    label: "Contact",
    desc: "Freelance, remote, or a technical conversation about a system.",
  },
];

export function SystemMap() {
  return (
    <section
      id="system-map"
      className="relative border-t border-line py-24 sm:py-32"
    >
      <AxisField className="pointer-events-none absolute -left-24 top-10 hidden h-[420px] w-[420px] opacity-30 lg:block" />

      <div className="shell relative">
        <div className="tech-mark mb-5">[ 00 / SYSTEM MAP ]</div>
        <Reveal className="max-w-2xl">
          <h2 className="display-lg text-ink">The system, mapped.</h2>
          <p className="mt-4 text-muted">
            One identity, four nodes. Each opens a deeper layer — from the
            shipped evidence to the engineering beneath it.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px bg-line sm:grid-cols-2">
          {NODES.map((n, i) => (
            <Reveal
              key={n.href}
              delay={i * 0.05}
              className="group bg-void transition-colors hover:bg-surface"
            >
              <Link
                href={n.href}
                className="flex h-full flex-col gap-4 p-8 transition-transform duration-500 group-hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="coord">NODE.{n.coord}</span>
                  <span className="font-mono text-sm text-muted-2 transition-colors group-hover:text-signal">
                    →
                  </span>
                </div>
                <h3 className="font-display text-2xl font-medium text-ink transition-colors group-hover:text-signal">
                  {n.label}
                </h3>
                <p className="max-w-sm text-sm leading-relaxed text-muted">
                  {n.desc}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
