"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsap } from "@/lib/gsap";
import {
  timeline,
  achievements,
  facilities,
  neBenefitsNote,
  edTechNote,
  phase1AchievementStats,
  newFdpDevelopment,
  whyEnrolReasons,
} from "@/data/about";
import { iitGuwahatiAbout, neStates } from "@/data/ne-states";
import { siteConfig } from "@/data/site";
import { images } from "@/lib/images";
import { GlassCard } from "@/components/ui/GlassCard";
import { PageHero } from "@/components/academy/PageHero";
import { scrapedSynopsis } from "@/data/scraped-content";

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
    <>
      <PageHero
        src={images.heroAbout}
        alt="E&ICT Academy — technology and IIT Guwahati campus"
        title="About E&ICT Academy"
        subtitle={scrapedSynopsis}
        minHeight="min-h-[240px] sm:min-h-[300px] md:min-h-[380px]"
      />

      <div className="academy-container pb-14">
        <section className="mb-14 grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              About IIT Guwahati
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {iitGuwahatiAbout}
            </p>
            <Link
              href="https://www.iitg.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-400"
            >
              Visit IIT Guwahati →
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-theme-border">
            <Image
              src="/images/IIT_Guwahati_Logo.svg"
              alt="IIT Guwahati"
              fill
              className="object-contain p-8"
            />
          </div>
        </section>

        <section id="northeast-states" className="mb-14 scroll-mt-24">
          <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
            Northeast India Outreach
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-muted sm:text-base">
            The Academy serves all eight states of Northeast India through FDPs, virtual classrooms,
            and industry-oriented programmes.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {neStates.map((state) => (
              <GlassCard
                key={state.id}
                className="relative overflow-hidden border-l-4"
                style={{ borderLeftColor: state.accent }}
              >
                <h3 className="font-display text-base font-semibold text-foreground">
                  {state.name}
                </h3>
                <p className="mt-1 text-xs text-muted">Capital: {state.capital}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{state.description}</p>
              </GlassCard>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">{neBenefitsNote}</p>
        </section>

        <GlassCard className="mb-12">
          <h2 className="font-display text-lg text-foreground">Phase-I Impact</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead>
                <tr className="border-b border-theme-border text-muted">
                  <th className="py-2 pr-4">Metric</th>
                  <th className="py-2">Value</th>
                </tr>
              </thead>
              <tbody className="text-foreground/90">
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
            <Link
              href="/academy/infrastructure"
              className="mt-4 inline-block text-sm text-cyan-600 hover:underline dark:text-cyan-400"
            >
              View infrastructure →
            </Link>
          </GlassCard>
        </div>

        <GlassCard className="mt-8">
          <p className="rounded-lg border border-amber-400/25 bg-amber-500/8 p-3 text-xs text-amber-900 dark:text-amber-100/90 sm:text-sm">
            {edTechNote}
          </p>
        </GlassCard>

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
    </>
  );
}
