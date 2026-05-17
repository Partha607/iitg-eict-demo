import Image from "next/image";
import { cn } from "@/lib/utils";

export type PageBackgroundLayout = "single" | "stacked" | "footer";

type PageBackgroundProps = {
  sources: readonly string[];
  layout?: PageBackgroundLayout;
  className?: string;
  /** Image layer strength (higher = more visible sketch) */
  opacity?: number;
  /** Scrim over sketches — lower keeps backgrounds more visible */
  scrimStrength?: "light" | "medium" | "footer";
};

const scrimClass = {
  light:
    "bg-gradient-to-b from-background/25 via-background/15 to-background/30 dark:from-background/35 dark:via-background/20 dark:to-background/40",
  medium:
    "bg-gradient-to-b from-background/40 via-background/28 to-background/45 dark:from-background/48 dark:via-background/32 dark:to-background/52",
  footer:
    "bg-gradient-to-t from-background/70 via-background/45 to-background/25 dark:from-background/75 dark:via-background/50 dark:to-background/30",
};

/**
 * Pencil-sketch page backgrounds. Content sits above (z-10+); sketches stay
 * visible while scrolling via a tall absolute layer inside the page wrapper.
 */
export function PageBackground({
  sources,
  layout = "single",
  className,
  opacity = 0.42,
  scrimStrength = "light",
}: PageBackgroundProps) {
  if (sources.length === 0) return null;

  const imageOpacity = { opacity } as React.CSSProperties;

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 z-0 min-h-full", className)}
    >
      {layout === "stacked" ? (
        <div className="flex min-h-full flex-col">
          {sources.map((src, index) => (
            <div
              key={src}
              className={cn(
                "relative w-full shrink-0",
                sources.length > 1 ? "min-h-[min(52vh,520px)]" : "min-h-full"
              )}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="100vw"
                className="sketch-bg-image object-contain object-center px-2 sm:px-4"
                style={imageOpacity}
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      ) : (
        <Image
          src={sources[0]}
          alt=""
          fill
          sizes="100vw"
          className={cn(
            "sketch-bg-image object-contain object-center px-1 sm:px-3",
            layout === "footer" ? "object-bottom" : "object-top"
          )}
          style={imageOpacity}
          priority={false}
        />
      )}
      <div className={cn("absolute inset-0", scrimClass[scrimStrength])} />
    </div>
  );
}
