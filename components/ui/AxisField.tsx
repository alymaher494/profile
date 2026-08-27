interface AxisFieldProps {
  className?: string;
  /** opacity multiplier 0..1 */
  opacity?: number;
}

/**
 * AxisField — the visual DNA of the Digital Core, extracted from WebGL into
 * SVG/CSS. Concentric radial grid + orthogonal axes + coordinate ticks.
 * Reused (never copied) across sections so the system stays coherent.
 */
export function AxisField({ className = "", opacity = 0.5 }: AxisFieldProps) {
  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      style={{ opacity }}
    >
      <defs>
        <radialGradient id="axis-fade" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c8ff40" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#c8ff40" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* radial rings */}
      {[60, 120, 180].map((r) => (
        <circle
          key={r}
          cx="200"
          cy="200"
          r={r}
          stroke="rgba(232,235,228,0.08)"
          strokeWidth="0.6"
        />
      ))}
      {/* orthogonal axes */}
      <line x1="200" y1="10" x2="200" y2="390" stroke="rgba(232,235,228,0.07)" strokeWidth="0.6" />
      <line x1="10" y1="200" x2="390" y2="200" stroke="rgba(232,235,228,0.07)" strokeWidth="0.6" />
      {/* coordinate ticks */}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2;
        const x = 200 + Math.cos(a) * 180;
        const y = 200 + Math.sin(a) * 180;
        return (
          <line
            key={i}
            x1={200 + Math.cos(a) * 172}
            y1={200 + Math.sin(a) * 172}
            x2={x}
            y2={y}
            stroke="rgba(200,255,64,0.25)"
            strokeWidth="0.8"
          />
        );
      })}
      <circle cx="200" cy="200" r="3" fill="url(#axis-fade)" />
    </svg>
  );
}
