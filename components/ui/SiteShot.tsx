"use client";

import { useState } from "react";
import { AxisField } from "@/components/ui/AxisField";

/**
 * SiteShot — renders a screenshot of a real project. Drop the file at
 * /public/work/<slug>.png. If it's missing, a branded placeholder (the Core's
 * extracted geometry + the site name) is shown instead, so the layout never
 * breaks and you can add real screenshots later.
 */
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
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/work/${slug}.png`}
      alt={`${title} — screenshot`}
      loading="lazy"
      onError={() => setErr(true)}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
