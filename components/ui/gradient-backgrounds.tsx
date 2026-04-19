import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * Same shape as the reference (`125% 125% at 50% 10%, #fff 40%, …100%`) but edge is **sky blue**, not indigo/violet.
 * Stops keep it light at the top, clearly blue toward the bottom/sides (avoids muddy lavender on some displays).
 */
export const SKY_PAGE_RADIAL =
  "radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #bae6fd 72%, #7dd3fc 100%)";

type GradientPageBackgroundProps = {
  children: ReactNode;
  className?: string;
  gradientClassName?: string;
};

/**
 * Wraps scroll sections below the hero. Keeps full-bleed photo heroes free of this wash.
 * Uses a soft sky-blue radial (Tailwind sky-100 / sky-50 territory), not violet.
 */
export function GradientPageBackground({
  children,
  className,
  gradientClassName,
}: GradientPageBackgroundProps) {
  return (
    <div className={cn("relative w-full min-h-full", className)}>
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-0",
          gradientClassName,
        )}
        style={{ background: SKY_PAGE_RADIAL }}
        aria-hidden
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

type SkyGradientLayerProps = {
  className?: string;
  /** Fixed = viewport-sized backdrop; absolute = fills positioned parent */
  fixed?: boolean;
};

/** Optional standalone layer if you need the same gradient outside the wrapper. */
export function SkyGradientLayer({
  className,
  fixed = false,
}: SkyGradientLayerProps) {
  return (
    <div
      className={cn(
        "pointer-events-none inset-0 z-0",
        fixed ? "fixed" : "absolute",
        className,
      )}
      style={{ background: SKY_PAGE_RADIAL }}
      aria-hidden
    />
  );
}
