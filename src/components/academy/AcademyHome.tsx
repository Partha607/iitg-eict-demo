"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { scrapedSynopsis } from "@/data/scraped-content";
import { GlassCard } from "@/components/ui/GlassCard";
import { HeroCarousel } from "@/components/academy/HeroCarousel";
import { NoticeBulletin } from "@/components/academy/NoticeBulletin";
import { SocialFeed } from "@/components/academy/SocialFeed";

export function AcademyHome() {
  return (
    <>
      <HeroCarousel />

      <div className="academy-container py-10 md:py-14">
        <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-muted sm:text-base">
          {scrapedSynopsis}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.stats.map((s) => (
            <GlassCard key={s.label} className="text-center">
              <p className="font-display text-2xl font-bold text-cyan-600 sm:text-3xl dark:text-cyan-400">
                {s.value}
              </p>
              <p className="mt-1 text-xs text-muted sm:text-sm">{s.label}</p>
            </GlassCard>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <NoticeBulletin />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
            {siteConfig.pillars.map((p) => (
              <GlassCard key={p.title}>
                <h3 className="font-display text-base font-semibold text-foreground sm:text-lg">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{p.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { href: "/academy/about", label: "About & History", desc: "Synopsis, IIT Guwahati, NE states" },
            { href: "/academy/courses", label: "Courses & Fees", desc: "Phase I/II, domains, certifications" },
            { href: "/portal/register", label: "Register Online", desc: "Admission flow for programmes" },
          ].map((card) => (
            <Link key={card.href} href={card.href}>
              <GlassCard className="group h-full transition-colors hover:border-cyan-400/30">
                <h3 className="font-display text-lg text-foreground group-hover:text-cyan-600 dark:group-hover:text-cyan-300">
                  {card.label}
                </h3>
                <p className="mt-2 text-sm text-muted">{card.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-cyan-600 dark:text-cyan-400">
                  Open <ArrowRight size={14} />
                </span>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>

      <SocialFeed />
    </>
  );
}
