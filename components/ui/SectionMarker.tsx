import { Reveal } from "./Reveal";

interface SectionMarkerProps {
  coord: string; // e.g. "02"
  label: string; // e.g. "EVIDENCE"
  section?: string;
  className?: string;
}

/**
 * SectionMarker — extracts the Digital Core's coordinate system into the UI.
 * Every section is plotted on the same axis the Core defines in the Hero,
 * so the experience reads as ONE system rather than disconnected pages.
 */
export function SectionMarker({
  coord,
  label,
  section = "evidence",
  className = "",
}: SectionMarkerProps) {
  return (
    <Reveal section={section} className={`flex items-center gap-3 ${className}`}>
      <span className="coord">[{coord}</span>
      <span className="h-px w-8 bg-line-strong" aria-hidden />
      <span className="tech-mark text-ink/80">{label}</span>
      <span className="coord">]</span>
    </Reveal>
  );
}
