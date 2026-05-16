"use client";

import Link from "next/link";
import { Megaphone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { GlassCard } from "@/components/ui/GlassCard";

export function NoticeBulletin() {
  const items = [...siteConfig.news, ...siteConfig.news];
  const doubled = items.map((n, i) => ({ ...n, key: `${n.title}-${i}` }));

  return (
    <GlassCard className="flex h-full min-h-[280px] flex-col overflow-hidden md:min-h-[320px]">
      <div className="flex items-center justify-between gap-2 border-b border-theme-border pb-3">
        <div className="flex items-center gap-2">
          <Megaphone size={18} className="text-cyan-600 dark:text-cyan-400" />
          <h2 className="font-display text-lg font-semibold text-foreground">
            News &amp; Notice Board
          </h2>
        </div>
        <Link
          href="/academy/contact"
          className="shrink-0 text-xs text-cyan-600 hover:underline dark:text-cyan-400"
        >
          View all
        </Link>
      </div>

      <div className="relative mt-3 flex-1 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-8 bg-gradient-to-b from-[var(--card)] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-8 bg-gradient-to-t from-[var(--card)] to-transparent" />

        <div className="bulletin-track space-y-0">
          {doubled.map((n) => (
            <article
              key={n.key}
              className="flex gap-3 border-b border-theme-border/60 py-3 last:border-0"
            >
              {n.isNew && (
                <span className="mt-0.5 shrink-0 rounded bg-cyan-500/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase text-cyan-700 dark:text-cyan-300">
                  New
                </span>
              )}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium leading-snug text-foreground">{n.title}</p>
                <time className="mt-1 block text-xs text-muted">{n.date}</time>
              </div>
            </article>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
