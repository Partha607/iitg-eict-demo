"use client";

import Link from "next/link";
import { ArrowRight, Map } from "lucide-react";
import { siteConfig } from "@/data/site";
import { scrapedSynopsis } from "@/data/scraped-content";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowButton } from "@/components/ui/GlowButton";

export function AcademyHome() {
  return (
    <div>
      <section className="mb-12 text-center">
        <p className="text-sm uppercase tracking-widest text-cyan-400/80">
          IIT Guwahati · MeitY Initiative
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold text-white md:text-5xl">
          {siteConfig.fullName}
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-slate-400">{scrapedSynopsis}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <GlowButton href="/academy/courses">Explore Courses</GlowButton>
          <GlowButton href="/academy/revamp" variant="secondary">
            <Map size={16} className="mr-2 inline" />
            Revamp Map
          </GlowButton>
        </div>
      </section>

      <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.stats.map((s) => (
          <GlassCard key={s.label} className="text-center">
            <p className="font-display text-3xl font-bold text-cyan-400">{s.value}</p>
            <p className="mt-1 text-sm text-slate-400">{s.label}</p>
          </GlassCard>
        ))}
      </div>

      <div className="mb-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {siteConfig.pillars.map((p) => (
          <GlassCard key={p.title}>
            <h3 className="font-display text-lg text-white">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-400">{p.description}</p>
          </GlassCard>
        ))}
      </div>

      <GlassCard className="mb-12">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-display text-xl text-white">Latest News &amp; Notices</h2>
          <Link href="/academy/contact" className="text-sm text-cyan-400 hover:underline">
            Contact / FAQ
          </Link>
        </div>
        <ul className="mt-4 divide-y divide-white/5">
          {siteConfig.news.map((n) => (
            <li key={n.title} className="flex flex-wrap items-center gap-2 py-3">
              {n.isNew && (
                <span className="rounded bg-cyan-500/20 px-1.5 py-0.5 text-[10px] font-medium text-cyan-300">
                  NEW
                </span>
              )}
              <span className="flex-1 text-sm text-slate-300">{n.title}</span>
              <span className="text-xs text-slate-500">{n.date}</span>
            </li>
          ))}
        </ul>
      </GlassCard>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          { href: "/academy/about", label: "About & History", desc: "Synopsis, achievements, NE benefits" },
          { href: "/academy/courses", label: "Courses & Fees", desc: "Phase I/II, domains, certifications" },
          { href: "/portal/register", label: "Register Online", desc: "Admission flow from courses.eictiitg.com" },
        ].map((card) => (
          <Link key={card.href} href={card.href}>
            <GlassCard className="group h-full transition-colors hover:border-cyan-400/30">
              <h3 className="font-display text-lg text-white group-hover:text-cyan-300">
                {card.label}
              </h3>
              <p className="mt-2 text-sm text-slate-400">{card.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-cyan-400">
                Open <ArrowRight size={14} />
              </span>
            </GlassCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
