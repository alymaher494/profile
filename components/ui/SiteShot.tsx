"use client";

import { useState } from "react";
import Image from "next/image";
import { cdnLoader } from "@/lib/imageLoader";
import { AxisField } from "@/components/ui/AxisField";

export function SiteShot({
  slug,
  title,
  className = "",
}: {
  slug: string;
  title: string;
  className?: string;
}) {
  const [err, setErr] = useState(false);

  if (err) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-surface ${className}`}
      >
        <AxisField
          className="absolute inset-0 m-auto h-3/4 w-3/4 opacity-60"
        />
        <div className="relative z-10 px-4 text-center">
          <div className="coord">NO SHOT // {slug.toUpperCase()}</div>
          <div className="mt-2 font-display text-sm text-ink">{title}</div>
          <div className="mt-1 font-mono text-[10px] uppercase tracking-widest2 text-muted-2">
            add /public/work/{slug}.png
          </div>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={`/work/${slug}.png`}
      alt={`${title} — screenshot`}
      width={1200}
      height={800}
      loading="lazy"
      loader={cdnLoader}
      onError={() => setErr(true)}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
