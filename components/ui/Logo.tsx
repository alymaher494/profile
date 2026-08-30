"use client";

import { useState } from "react";
import Image from "next/image";
import { cdnLoader } from "@/lib/imageLoader";
import { PROFILE } from "@/lib/data";

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
    <Image
      src="/logo.png"
      alt={`${PROFILE.name} logo`}
      width={180}
      height={40}
      loader={cdnLoader}
      onError={() => setErr(true)}
      className={className}
    />
  );
}
