import { Nucleus } from "@/components/sections/Nucleus";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { CapabilitiesPreview } from "@/components/sections/CapabilitiesPreview";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { LabFeed } from "@/components/sections/LabFeed";
import { SystemMap } from "@/components/sections/SystemMap";
import { Terminal } from "@/components/sections/Terminal";

export default function Home() {
  return (
    <main className="relative">
      <Nucleus />
      <ProofStrip />
      <SystemMap />
      <FeaturedWork />
      <CapabilitiesPreview />
      <LabFeed />
      <Terminal />
    </main>
  );
}
