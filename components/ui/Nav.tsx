"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { PROFILE } from "@/lib/data";
import { Logo } from "@/components/ui/Logo";

const LINKS = [
  { href: "/", label: "Home", coord: "00" },
  { href: "/work", label: "Projects", coord: "01" },
  { href: "/capabilities", label: "Services", coord: "02" },
  { href: "/case-studies", label: "Case Studies", coord: "03" },
  { href: "/pricing", label: "Pricing", coord: "05" },
  { href: "/contact", label: "Contact", coord: "06" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-void/80 backdrop-blur-md border-b border-line" : ""
      }`}
    >
      <nav className="shell flex h-14 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="h-2 w-2 rounded-full bg-signal animate-signal-pulse" />
          <Logo className="h-7 w-auto" />
        </Link>

        {/* Desktop nav — unchanged */}
        <ul className="hidden items-center gap-6 lg:flex">
          {LINKS.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`group flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest2 transition-colors ${
                    active ? "text-signal" : "text-muted hover:text-ink"
                  }`}
                >
                  <span className="text-signal-dim group-hover:text-signal">
                    {item.coord}
                  </span>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-px w-6 bg-ink transition-transform ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-transform ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>

        <Link
          href="/contact"
          className="font-mono text-[11px] uppercase tracking-widest2 text-void bg-signal px-3 py-1.5 hover:bg-signal/90 transition-colors lg:inline-flex hidden"
        >
          Start
        </Link>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-void/80 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <nav className="absolute right-0 top-0 h-full w-72 max-w-[80vw] border-l border-line bg-void p-6">
            <ul className="mt-16 space-y-6">
              {LINKS.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center gap-3 font-mono text-sm uppercase tracking-widest2 transition-colors ${
                        active ? "text-signal" : "text-muted hover:text-ink"
                      }`}
                    >
                      <span className="text-signal-dim">
                        [{item.coord}]
                      </span>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-8">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex bg-signal px-6 py-3 font-mono text-xs uppercase tracking-widest2 text-void"
              >
                Start
              </Link>
            </div>
          </nav>
        </div>
      )}
    </motion.header>
  );
}
