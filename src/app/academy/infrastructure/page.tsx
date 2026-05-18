import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/academy/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { academyLabs, instituteFacilities } from "@/data/infrastructure";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Infrastructure | E&ICT Academy IIT Guwahati",
  description: "Labs, smart classrooms, and ICT facilities at IIT Guwahati",
};

const accentRing = {
  cyan: "ring-cyan-400/30 from-cyan-500/20 to-cyan-500/0",
  amber: "ring-amber-400/30 from-amber-500/20 to-amber-500/0",
  violet: "ring-violet-400/30 from-violet-500/20 to-violet-500/0",
} as const;

const accentText = {
  cyan: "text-cyan-600 dark:text-cyan-400",
  amber: "text-amber-600 dark:text-amber-400",
  violet: "text-violet-600 dark:text-violet-400",
} as const;

export default function InfrastructurePage() {
  return (
    <>
      <PageHero
        src={images.infraHero}
        alt="E&ICT Academy infrastructure - labs and classrooms"
        title="Infrastructure"
        subtitle="State-of-the-art labs, smart classrooms, and computing facilities at IIT Guwahati"
        minHeight="min-h-[320px] sm:min-h-[420px] md:min-h-[520px] lg:min-h-[60vh]"
      />

      <div className="academy-container space-y-10 pb-14">
        {academyLabs.map((lab, idx) => {
          const reverse = idx % 2 === 1;
          return (
            <GlassCard key={lab.id} className="overflow-hidden p-0">
              <div
                className={cn(
                  "grid items-stretch gap-0 md:grid-cols-2",
                  reverse && "md:[&>*:first-child]:order-2"
                )}
              >
                <div
                  className={cn(
                    "relative min-h-[240px] overflow-hidden bg-gradient-to-br ring-1",
                    accentRing[lab.accent]
                  )}
                >
                  <Image
                    src={lab.image}
                    alt={lab.name}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-background/10" />
                </div>
                <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
                  <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                    {lab.name}
                  </h2>
                  <p className="text-base leading-relaxed text-muted sm:text-lg">
                    {lab.description}
                  </p>
                  <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                    {lab.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-base text-foreground/85 sm:text-lg"
                      >
                        <CheckCircle2
                          size={18}
                          className={cn("mt-0.5 shrink-0", accentText[lab.accent])}
                          aria-hidden
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassCard>
          );
        })}

        <GlassCard className="overflow-hidden p-0">
          <div className="grid items-stretch gap-0 md:grid-cols-[1fr_1.4fr]">
            <div className="relative min-h-[220px] overflow-hidden">
              <Image
                src={images.buildingGarden}
                alt="IIT Guwahati campus facilities"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/30" />
            </div>
            <div className="p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                Institute Facilities
              </h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {instituteFacilities.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-base text-muted sm:text-lg"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-cyan-600 dark:text-cyan-400"
                      aria-hidden
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </GlassCard>
      </div>
    </>
  );
}
