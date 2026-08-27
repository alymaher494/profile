"use client";

import { useState } from "react";
import { PROFILE } from "@/lib/data";

/**
 * Logo — renders /public/logo.png when present, otherwise falls back to the
 * text mark. Drop your image at public/logo.png (or tell me the filename and
 * I'll point it here).
 */
export function Logo({ className = "" }: { className?: string }) {
  const [err, setErr] = useState(false);

  if (err) {
    return (
      <span
        className={`font-mono text-xs uppercase tracking-widest2 text-ink ${className}`}
      >
        {PROFILE.name.split(" ")[0].toUpperCase()}
        <span className="text-muted">/CORE</span>
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      alt={`${PROFILE.name} logo`}
      onError={() => setErr(true)}
      className={className}
    />
  );
}
