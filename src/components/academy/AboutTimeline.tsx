"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsap } from "@/lib/gsap";
import {
  timeline,
  achievements,
  facilities,
  neBenefitsBullets,
  neBenefitsNote,
  edTechNote,
  synopsis,
  phase1AchievementStats,
  newFdpDevelopment,
  whyEnrolReasons,
} from "@/data/about";
import { siteConfig } from "@/data/site";
import { images } from "@/lib/images";
import { GlassCard } from "@/components/ui/GlassCard";

export function AboutTimeline() {
  const statsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerGsap();
      if (statsRef.current) {
        gsap.from(statsRef.current.children, {
          scrollTrigger: { trigger: statsRef.current, start: "top 85%" },
          opacity: 0,
          y: 24,
          stagger: 0.1,
          duration: 0.6,
        });
      }
      if (timelineRef.current) {
        gsap.from(timelineRef.current.children, {
          scrollTrigger: { trigger: timelineRef.current, start: "top 80%" },
          opacity: 0,
          x: -20,
          stagger: 0.12,
          duration: 0.5,
        });
      }
    },
    { scope: statsRef }
  );

  return (
    <div>
      <section className="relative mb-16 overflow-hidden rounded-2xl border border-theme-border">
        <div className="relative aspect-[21/9] min-h-[200px] w-full">
          <Image
            src={images.heroAbout}
            alt="E&ICT Academy — technology and IIT Guwahati campus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-10 text-center">
            <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              About E&ICT Academy
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted">{synopsis}</p>
          </div>
        </div>
      </section>

      <GlassCard className="mb-12">
        <h2 className="font-display text-lg text-foreground">Phase-I Impact (scraped)</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead>
              <tr className="border-b border-theme-border text-muted">
                <th className="py-2 pr-4">Metric</th>
                <th className="py-2">Value</th>
              </tr>
            </thead>
            <tbody className="text-foreground/80">
              <tr className="border-b border-theme-border/50">
                <td className="py-2">FDPs conducted</td>
                <td className="py-2 text-cyan-600 dark:text-cyan-400">
                  {phase1AchievementStats.fdps}
                </td>
              </tr>
              <tr className="border-b border-theme-border/50">
                <td className="py-2">Faculty trained</td>
                <td className="py-2">
                  {phase1AchievementStats.facultyTrained.toLocaleString()}
                </td>
              </tr>
              <tr className="border-b border-theme-border/50">
                <td className="py-2">Students / professionals</td>
                <td className="py-2">
                  {phase1AchievementStats.studentsTrained.toLocaleString()}
                </td>
              </tr>
              <tr>
                <td className="py-2">Total beneficiaries</td>
                <td className="py-2 font-semibold text-foreground">
                  {phase1AchievementStats.totalBeneficiaries.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted">
          New FDPs developed: {newFdpDevelopment.electronics} Electronics,{" "}
          {newFdpDevelopment.it} IT, {newFdpDevelopment.ict} ICT — total{" "}
          {newFdpDevelopment.total}
        </p>
      </GlassCard>

      <div ref={statsRef} className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.stats.map((s) => (
          <GlassCard key={s.label} className="text-center">
            <p className="font-display text-3xl font-bold text-cyan-600 dark:text-cyan-400">
              {s.value}
            </p>
            <p className="mt-1 text-sm text-muted">{s.label}</p>
          </GlassCard>
        ))}
      </div>

      <div
        ref={timelineRef}
        className="mb-16 space-y-0 border-l border-cyan-400/30 pl-8"
      >
        {timeline.map((item) => (
          <div key={item.year} className="relative pb-10">
            <span className="absolute -left-[2.4rem] flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-xs font-bold text-cyan-700 ring-2 ring-cyan-400/40 dark:text-cyan-300">
              {item.year.slice(2)}
            </span>
            <h3 className="font-display text-lg text-foreground">{item.title}</h3>
            <p className="mt-1 text-sm text-muted">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <GlassCard>
          <div className="mb-4 flex items-center gap-3">
            <div className="relative h-12 w-12 shrink-0">
              <Image
                src={images.achievements}
                alt=""
                fill
                className="object-contain"
                aria-hidden
              />
            </div>
            <h2 className="font-display text-lg text-foreground">Achievements</h2>
          </div>
          <ul className="space-y-2 text-sm text-muted">
            {achievements.map((a) => (
              <li key={a} className="flex gap-2">
                <span className="text-cyan-600 dark:text-cyan-400">▸</span> {a}
              </li>
            ))}
          </ul>
        </GlassCard>
        <GlassCard>
          <div className="mb-4 flex items-center gap-3">
            <div className="relative h-12 w-12 shrink-0">
              <Image
                src={images.history}
                alt=""
                fill
                className="object-contain"
                aria-hidden
              />
            </div>
            <h2 className="font-display text-lg text-foreground">Facilities</h2>
          </div>
          <ul className="space-y-2 text-sm text-muted">
            {facilities.map((f) => (
              <li key={f} className="flex gap-2">
                <span className="text-cyan-600 dark:text-cyan-400">▸</span> {f}
              </li>
            ))}
          </ul>
        </GlassCard>
        <GlassCard className="md:col-span-2">
          <h2 className="font-display text-lg text-foreground">Benefits to NE States</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {neBenefitsBullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="text-cyan-600 dark:text-cyan-400">▸</span> {b}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted">{neBenefitsNote}</p>
          <p className="mt-4 rounded-lg border border-amber-400/20 bg-amber-500/5 p-3 text-xs text-amber-800 dark:text-amber-200/80">
            {edTechNote}
          </p>
        </GlassCard>
      </div>

      <GlassCard className="mt-8">
        <h2 className="font-display text-lg text-foreground">Why Enrol (Online Courses)</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {whyEnrolReasons.map((r) => (
            <div key={r.title} className="rounded-lg border border-theme-border p-4">
              <h3 className="text-sm font-medium text-foreground">{r.title}</h3>
              <p className="mt-1 text-xs text-muted">{r.benefits}</p>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
