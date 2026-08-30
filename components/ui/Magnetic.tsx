"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useMounted } from "@/lib/useMounted";
import { useMotionPref } from "@/components/providers/MotionProvider";

interface MagneticProps {
  children: React.ReactNode;
  /** Max translate in px toward cursor (default 8) */
  strength?: number;
  section?: string;
  className?: string;
}

export function Magnetic({
  children,
  strength = 8,
  section,
  className = "",
}: MagneticProps) {
  const motionOn = useMotionPref();
  const mounted = useMounted();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  if (!mounted || !motionOn) {
    return <div className={className}>{children}</div>;
  }

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    const maxDist = Math.max(rect.width, rect.height) / 2;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const factor = Math.min(dist / maxDist, 1);
    x.set(dx * factor * (strength / 100));
    y.set(dy * factor * (strength / 100));
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
