"use client";

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
      <section className="mb-16 text-center">
        <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
          About E&ICT Academy
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">{synopsis}</p>
      </section>

      <GlassCard className="mb-12">
        <h2 className="font-display text-lg text-white">Phase-I Impact (scraped)</h2>
        <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-500">
                  <th className="py-2 pr-4">Metric</th>
                  <th className="py-2">Value</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-white/5">
                  <td className="py-2">FDPs conducted</td>
                  <td className="py-2 text-cyan-400">{phase1AchievementStats.fdps}</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2">Faculty trained</td>
                  <td className="py-2">{phase1AchievementStats.facultyTrained.toLocaleString()}</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2">Students / professionals</td>
                  <td className="py-2">{phase1AchievementStats.studentsTrained.toLocaleString()}</td>
                </tr>
                <tr>
                  <td className="py-2">Total beneficiaries</td>
                  <td className="py-2 font-semibold text-white">
                    {phase1AchievementStats.totalBeneficiaries.toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          New FDPs developed: {newFdpDevelopment.electronics} Electronics,{" "}
          {newFdpDevelopment.it} IT, {newFdpDevelopment.ict} ICT — total{" "}
          {newFdpDevelopment.total}
        </p>
      </GlassCard>

      <div ref={statsRef} className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.stats.map((s) => (
          <GlassCard key={s.label} className="text-center">
            <p className="font-display text-3xl font-bold text-cyan-400">{s.value}</p>
            <p className="mt-1 text-sm text-slate-400">{s.label}</p>
          </GlassCard>
        ))}
      </div>

      <div ref={timelineRef} className="mb-16 space-y-0 border-l border-cyan-400/30 pl-8">
        {timeline.map((item) => (
          <div key={item.year} className="relative pb-10">
            <span className="absolute -left-[2.4rem] flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-xs font-bold text-cyan-300 ring-2 ring-cyan-400/40">
              {item.year.slice(2)}
            </span>
            <h3 className="font-display text-lg text-white">{item.title}</h3>
            <p className="mt-1 text-sm text-slate-400">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <GlassCard>
          <h2 className="font-display text-lg text-white">Achievements</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            {achievements.map((a) => (
              <li key={a} className="flex gap-2">
                <span className="text-cyan-400">▸</span> {a}
              </li>
            ))}
          </ul>
        </GlassCard>
        <GlassCard>
          <h2 className="font-display text-lg text-white">Facilities</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            {facilities.map((f) => (
              <li key={f} className="flex gap-2">
                <span className="text-cyan-400">▸</span> {f}
              </li>
            ))}
          </ul>
        </GlassCard>
        <GlassCard className="md:col-span-2">
          <h2 className="font-display text-lg text-white">Benefits to NE States</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            {neBenefitsBullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="text-cyan-400">▸</span> {b}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-slate-500">{neBenefitsNote}</p>
          <p className="mt-4 rounded-lg border border-amber-400/20 bg-amber-500/5 p-3 text-xs text-amber-200/80">
            {edTechNote}
          </p>
        </GlassCard>
      </div>

      <GlassCard className="mt-8">
        <h2 className="font-display text-lg text-white">Why Enrol (Online Courses)</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {whyEnrolReasons.map((r) => (
            <div key={r.title} className="rounded-lg border border-white/5 p-4">
              <h3 className="text-sm font-medium text-white">{r.title}</h3>
              <p className="mt-1 text-xs text-slate-400">{r.benefits}</p>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}

