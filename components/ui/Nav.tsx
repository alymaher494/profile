"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { PROFILE } from "@/lib/data";
import { MotionToggle } from "@/components/ui/MotionToggle";
import { Logo } from "@/components/ui/Logo";

const LINKS = [
  { href: "/", label: "Core", coord: "00" },
  { href: "/work", label: "Work", coord: "01" },
  { href: "/capabilities", label: "Capabilities", coord: "02" },
  { href: "/case-studies", label: "Case Studies", coord: "03" },
  { href: "/contact", label: "Contact", coord: "04" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          <Logo className="h-5 w-auto" />
        </Link>

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

        <div className="flex items-center gap-4">
          <MotionToggle />
          <Link
            href="/contact"
            className="font-mono text-[11px] uppercase tracking-widest2 text-void bg-signal px-3 py-1.5 hover:bg-signal/90 transition-colors"
          >
            Start
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
