"use client";

import { motion, useScroll, useMotionValue, useAnimationFrame } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import { cdnLoader } from "@/lib/imageLoader";
import { CLIENTS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMarker } from "@/components/ui/SectionMarker";

function ClientLogo({ name, file }: { name: string; file?: string }) {
  const [err, setErr] = useState(false);
  const src = file ? `/clients/${file}` : null;

  return (
    <div className="group flex h-24 w-24 shrink-0 cursor-pointer items-center justify-center border border-line bg-void p-3 transition-colors duration-300 hover:bg-void/80">
      {src && !err ? (
        <Image
          src={src}
          alt={name}
          width={96}
          height={96}
          loader={cdnLoader}
          onError={() => setErr(true)}
          loading="lazy"
          className="h-full w-full object-contain opacity-60 grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
        />
      ) : (
        <span className="text-center font-display text-sm text-muted leading-tight">{name}</span>
      )}
    </div>
  );
}

function Track({
  items,
  direction = 1,
}: {
  items: typeof CLIENTS;
  direction?: 1 | -1;
}) {
  const { scrollY } = useScroll();
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const baseSpeed = 0.5;

  useAnimationFrame((_t, delta) => {
    const track = trackRef.current;
    if (track) {
      const single = track.scrollWidth / 2;
      if (single > 0) {
        const velocity = scrollY.getVelocity();
        const speed = baseSpeed + Math.min(Math.abs(velocity) / 3000, 2);
        const next = x.get() + direction * speed * delta * 0.05;
        x.set(((next % single) - single) % single);
      }
    }
  });

  const repeated = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-px bg-line will-change-transform">
        {repeated.map((c, i) => (
          <ClientLogo key={i} name={c.name} file={c.file} />
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-void to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-void to-transparent" />
    </div>
  );
}

export function ClientMarquee() {
  return (
    <section className="relative overflow-hidden border-t border-line py-16 sm:py-20">
      <div className="shell mb-8">
        <SectionMarker coord="01" label="CLIENTS" section="evidence" />
        <Reveal className="mt-4 max-w-xl">
          <h2 className="display-lg text-ink">Trusted by.</h2>
          <p className="mt-3 text-muted">
            Real companies that shipped real systems. Names and storefronts.
          </p>
        </Reveal>
      </div>

      <div className="flex flex-col gap-3">
        <Track items={CLIENTS} direction={1} />
        <Track items={CLIENTS} direction={-1} />
      </div>
    </section>
  );
}
