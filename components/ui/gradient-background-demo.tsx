import { cn } from "@/lib/utils";
import { SKY_PAGE_RADIAL } from "@/components/ui/gradient-backgrounds";

/**
 * Reference layout: full viewport with sky radial only (no purple).
 * Not wired to a route by default — use as a starting point or delete if unused.
 */
export default function GradientBackgroundDemo() {
  return (
    <div className="relative min-h-screen w-full">
      <div
        className="absolute inset-0 z-0"
        style={{ background: SKY_PAGE_RADIAL }}
        aria-hidden
      />
      <div
        className={cn(
          "relative z-10 flex min-h-screen items-center justify-center p-8",
          "text-sky-950",
        )}
      >
        <p className="text-sm text-sky-800/80">Sky gradient background (demo)</p>
      </div>
    </div>
  );
}
