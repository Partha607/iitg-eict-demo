"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsap } from "@/lib/gsap";
import { timeline, achievements, facilities, neBenefits, edTechNote } from "@/data/about";
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
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          Established under MeitY at IIT Guwahati — specialized training in electronics
          and ICT for faculty and professionals across India, with focus on the North East.
        </p>
      </section>

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
          <p className="mt-3 text-sm text-slate-400">{neBenefits}</p>
          <p className="mt-4 rounded-lg border border-amber-400/20 bg-amber-500/5 p-3 text-xs text-amber-200/80">
            {edTechNote}
          </p>
        </GlassCard>
      </div>
    </div>
  );
}

