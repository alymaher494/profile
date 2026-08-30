import { TICKER_WORDS } from "@/lib/data";
import { SectionMarker } from "@/components/ui/SectionMarker";

interface TickerBlockProps {
  variant?: "full" | "thin";
  rotate?: boolean;
  label?: string;
}

export function TickerBlock({
  variant = "full",
  rotate = true,
  label,
}: TickerBlockProps) {
  const items = [...TICKER_WORDS, ...TICKER_WORDS];
  const isFull = variant === "full";

  return (
    <section
      className={`relative overflow-hidden bg-signal text-void ${
        isFull ? "py-10 sm:py-14" : "py-3 sm:py-4"
      }`}
    >
      <div
        className={`flex w-max animate-ticker ${
          isFull && rotate ? "w-[140vw] -ml-[20vw] -rotate-[0.6deg]" : ""
        }`}
      >
        {items.map((word, i) => (
          <span
            key={i}
            className="flex items-center"
            style={{
              fontSize: isFull
                ? "clamp(40px, 6vw, 96px)"
                : "clamp(24px, 4vw, 48px)",
            }}
          >
            <span className="font-display font-medium leading-none whitespace-nowrap">
              {word}
            </span>
            <span className="mx-4 sm:mx-6 text-void/60 select-none">·</span>
          </span>
        ))}
      </div>

      {isFull && label && (
        <div className="shell absolute inset-0 flex items-center pointer-events-none">
          <SectionMarker coord="05" label={label} section="manifesto" />
        </div>
      )}
    </section>
  );
}
