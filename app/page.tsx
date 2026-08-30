import dynamic from "next/dynamic";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { UseCases } from "@/components/sections/UseCases";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { ClientMarquee } from "@/components/sections/ClientMarquee";
import { CapabilitiesPreview } from "@/components/sections/CapabilitiesPreview";
import { TechStack } from "@/components/sections/TechStack";
import { TickerBlock } from "@/components/sections/TickerBlock";
import { LabFeed } from "@/components/sections/LabFeed";
import { Engagement } from "@/components/sections/Engagement";
import { Reveal } from "@/components/ui/Reveal";

const Nucleus = dynamic(() => import("@/components/sections/Nucleus").then(m => m.Nucleus), {
  loading: () => (
    <section id="nucleus" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="shell relative z-10 grid gap-10 pt-24 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="tech-mark mb-6">[ 00 / NUCLEUS ]</div>
          <div className="display-xl text-ink">Aly Maher</div>
        </div>
      </div>
    </section>
  ),
});

const Terminal = dynamic(() => import("@/components/sections/Terminal").then(m => m.Terminal), {
  loading: () => (
    <section id="terminal" className="relative border-t border-line overflow-hidden py-28 sm:py-36">
      <div className="shell relative text-center">
        <div className="display-xl text-ink">Let&apos;s build your system.</div>
      </div>
    </section>
  ),
});

export default function Home() {
  return (
    <main className="relative">
      <Nucleus />
      <ProofStrip />
      <UseCases />
      <Reveal section="architecture" parallax parallaxDistance={-20}>
        <FeaturedWork />
      </Reveal>

      <Reveal section="circuitry" parallax parallaxDistance={-30}>
        <ClientMarquee />
      </Reveal>
      <Reveal section="architecture" parallax parallaxDistance={-20}>
        <CapabilitiesPreview />
      </Reveal>
      <Reveal section="architecture" parallax parallaxDistance={-20}>
        <TechStack />
      </Reveal>
      <Reveal section="architecture" parallax parallaxDistance={-20}>
        <LabFeed />
      </Reveal>
      <Reveal section="architecture" parallax parallaxDistance={-20}>
        <Engagement />
      </Reveal>
      <Terminal />
    </main>
  );
}
