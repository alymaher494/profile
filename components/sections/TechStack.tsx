"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TECH } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { staggerFast } from "@/lib/motion";

const SLUG_MAP: Record<string, string> = {
  nodejs: "nodedotjs",
  go: "golang",
  "next.js": "nextdotjs",
  "acf pro": "acf",
};

function TechLogo({ name, slug }: { name: string; slug: string }) {
  const [err, setErr] = useState(false);
  const mapped = SLUG_MAP[slug.toLowerCase()] ?? slug.toLowerCase();
  const src = `https://thesvg.org/icons/${mapped}/default.svg`;

  return (
    <motion.div
      className="group flex h-24 flex-col items-center justify-center gap-3 border border-line bg-void p-4"
      whileHover="hover"
      variants={{
        hover: { y: -4, transition: { duration: 0.35, ease: "easeOut" } },
      }}
    >
      {err ? (
        <span className="font-mono text-xs uppercase tracking-widest2 text-muted">
          {name}
        </span>
      ) : (
        <motion.div
          variants={{
            hover: {
              y: -2,
              transition: { duration: 0.35, ease: "easeOut" },
            },
          }}
        >
          <Image
            src={src}
            alt={name}
            width={24}
            height={24}
            onError={() => setErr(true)}
            loading="lazy"
            className="max-h-10 w-auto rounded-sm bg-transparent transition-all group-hover:scale-110"
          />
        </motion.div>
      )}
      <span className="font-mono text-[10px] uppercase tracking-widest2 text-muted">
        {name}
      </span>
    </motion.div>
  );
}

export function TechStack() {
  return (
    <section className="relative border-t border-line py-24 sm:py-32">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <div className="tech-mark mb-5">[ 02 / STACK ]</div>
          <h2 className="display-lg text-ink">The toolkit.</h2>
          <p className="mt-4 text-muted">
            The technologies I reach for to ship production systems — from
            front-end frameworks to infrastructure.
          </p>
        </Reveal>

        <motion.div
          className="mt-12 grid grid-cols-2 gap-px bg-line sm:grid-cols-3 lg:grid-cols-5"
          variants={staggerFast(0.03)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
        >
          {TECH.map((t) => (
            <TechLogo key={t.slug} name={t.name} slug={t.slug} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
