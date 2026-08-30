"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { useMounted } from "@/lib/useMounted";
import { useMotionPref } from "@/components/providers/MotionProvider";

interface CounterProps {
  /** Target numeric value */
  to: number;
  /** Duration in seconds (default 1.2) */
  duration?: number;
  /** Number of decimal places (default 0) */
  decimals?: number;
  /** Optional prefix/suffix */
  prefix?: string;
  suffix?: string;
  section?: string;
  className?: string;
}

export function Counter({
  to,
  duration = 1.2,
  decimals = 0,
  prefix = "",
  suffix = "",
  section,
  className = "",
}: CounterProps) {
  const motionOn = useMotionPref();
  const mounted = useMounted();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  const raw = useMotionValue(0);
  const spring = useSpring(raw, { stiffness: 80, damping: 20, restDelta: 0.001 });
  const rounded = useTransform(spring, (v) =>
    Number(v.toFixed(decimals)).toLocaleString(),
  );
  const display = useTransform(rounded, (val) => `${prefix}${val}${suffix}`);

  useEffect(() => {
    if (!mounted || !motionOn || !inView) return;
    raw.set(to);
  }, [mounted, motionOn, inView, raw, to]);

  if (!mounted || !motionOn) {
    return (
      <span ref={ref} className={className}>
        {prefix}
        {to.toLocaleString()}
        {suffix}
      </span>
    );
  }

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}
