"use client";

import { motion } from "framer-motion";
import { revealUp } from "@/lib/motion";
import { useMounted } from "@/lib/useMounted";
import { useMotionPref } from "@/components/providers/MotionProvider";

interface RevealProps {
  children: React.ReactNode;
  /** section key for intensity: nucleus|evidence|architecture|circuitry|terminal */
  section?: string;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}

/**
 * Reveal — the single entrance primitive. Intensity is inherited from the
 * section so motion "decelerates" down the page (Controlled Deceleration).
 *
 * SSR / first client render is always VISIBLE (no inline hidden styles), so
 * there is no hydration mismatch and content never stays blank if JS fails.
 * The entrance animation only engages after mount and only when motion is on.
 */
export function Reveal({
  children,
  section = "evidence",
  delay = 0,
  className,
  as = "div",
}: RevealProps) {
  const motionOn = useMotionPref();
  const mounted = useMounted();
  const MotionTag = motion[as] as typeof motion.div;
  const Tag = as as "div";

  if (!mounted || !motionOn) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={revealUp(section, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
    >
      {children}
    </MotionTag>
  );
}
