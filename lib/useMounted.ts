import { useEffect, useState } from "react";

/**
 * Returns false during SSR and the first client render, then true after mount.
 * Used to keep server markup identical to the first client render (no hydration
 * mismatch) and to guarantee content is visible even if JS fails.
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
