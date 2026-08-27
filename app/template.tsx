"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useMotionPref } from "@/components/providers/MotionProvider";

/**
 * Route transition — every navigation re-mounts this template, producing a
 * controlled enter animation. Respects the motion preference.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const motionOn = useMotionPref();
  const pathname = usePathname();

  if (!motionOn) return <>{children}</>;

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
