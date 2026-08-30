import Link from "next/link";
import { PROFILE } from "@/lib/data";
import { Logo } from "@/components/ui/Logo";

const NODES = [
  { href: "/work", coord: "01", label: "Projects", desc: "Live client systems — the evidence ledger." },
  { href: "/capabilities", coord: "02", label: "Services", desc: "Four engineering domains, from headless web to infra." },
  { href: "/case-studies", coord: "03", label: "Case Studies", desc: "Architecture, contracts, and decisions behind the builds." },
  { href: "/pricing", coord: "05", label: "Pricing", desc: "Transparent project tiers." },
  { href: "/contact", coord: "06", label: "Contact", desc: "Freelance, remote, or a technical conversation." },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-surface/40">
      <div className="shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-signal" />
            <Logo className="h-8 w-auto" />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {PROFILE.role}
          </p>
        </div>

        <div>
          <div className="tech-mark mb-4">[ NAV ]</div>
          <ul className="space-y-2">
            {NODES.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="font-mono text-[11px] uppercase tracking-widest2 text-muted transition-colors hover:text-signal"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="tech-mark mb-4">[ CHANNELS ]</div>
          <ul className="space-y-2">
            {PROFILE.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="font-mono text-[11px] uppercase tracking-widest2 text-muted transition-colors hover:text-signal"
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${PROFILE.email}`}
                className="font-mono text-[11px] uppercase tracking-widest2 text-muted transition-colors hover:text-signal"
              >
                {PROFILE.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="tech-mark mb-4">[ STATUS ]</div>
          <p className="text-sm leading-relaxed text-muted">
            Available for freelance &amp; remote engagements.
          </p>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-widest2 text-signal-dim">
            {PROFILE.location}
          </p>
        </div>
      </div>

      <div className="border-t border-line py-5">
        <div className="shell flex items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-widest2 text-muted-2">
          <span className="h-px w-10 bg-line-strong" />
          SYS.END // {PROFILE.name} — {PROFILE.role}
          <span className="h-px w-10 bg-line-strong" />
        </div>
      </div>
    </footer>
  );
}
