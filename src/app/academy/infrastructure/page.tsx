import { PageHero } from "@/components/academy/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { academyLabs, instituteFacilities } from "@/data/infrastructure";
import { images } from "@/lib/images";

export const metadata = {
  title: "Infrastructure | E&ICT Academy IIT Guwahati",
  description: "Labs, smart classrooms, and ICT facilities at IIT Guwahati",
};

export default function InfrastructurePage() {
  return (
    <>
      <PageHero
        src={images.heroAbout}
        alt="E&ICT Academy infrastructure and laboratories"
        title="Infrastructure"
        subtitle="State-of-the-art labs, smart classrooms, and computing facilities at IIT Guwahati"
      />

      <div className="academy-container space-y-10 pb-14">
        {academyLabs.map((lab) => (
          <GlassCard key={lab.id}>
            <h2 className="font-display text-xl font-semibold text-foreground">{lab.name}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{lab.description}</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {lab.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-foreground/85">
                  <span className="text-cyan-600 dark:text-cyan-400">▸</span>
                  {h}
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}

        <GlassCard>
          <h2 className="font-display text-xl font-semibold text-foreground">
            Institute Facilities
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {instituteFacilities.map((f) => (
              <li key={f} className="flex gap-2">
                <span className="text-cyan-600 dark:text-cyan-400">▸</span>
                {f}
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </>
  );
}
