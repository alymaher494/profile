"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { useRef, useEffect } from "react";
import { useMounted } from "@/lib/useMounted";
import { useMotionPref } from "@/components/providers/MotionProvider";

interface SectionProgressProps {
  /** Height of the rail in px (default 40) */
  size?: number;
  className?: string;
}

export function SectionProgress({ size = 40, className = "" }: SectionProgressProps) {
  const motionOn = useMotionPref();
  const mounted = useMounted();
  const containerRef = useRef<HTMLDivElement>(null);

  const raw = useMotionValue(0);
  const progress = useSpring(raw, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    if (!mounted || !motionOn || !containerRef.current) return;

    const container = containerRef.current;
    const update = () => {
      const rect = container.getBoundingClientRect();
      const start = rect.top + window.scrollY;
      const end = start + rect.height;
      const y = window.scrollY;
      if (y <= start) raw.set(0);
      else if (y >= end) raw.set(1);
      else raw.set((y - start) / (end - start));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [mounted, motionOn, raw]);

  if (!mounted || !motionOn) return null;

  return (
    <div ref={containerRef} className={`relative h-full w-px bg-line ${className}`}>
      <motion.div
        style={{ scaleY: progress }}
        className="absolute inset-x-0 top-0 h-full w-full origin-top bg-signal/40"
      />
      <div
        className="absolute -top-1 -left-1.5 h-3 w-3 rounded-full border border-signal/60 bg-void"
        style={{ transform: `translateY(${size}px)` }}
      />
    </div>
  );
}
