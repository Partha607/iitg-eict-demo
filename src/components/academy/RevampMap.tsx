"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { urlMappings } from "@/data/url-mapping";
import { GlassCard } from "@/components/ui/GlassCard";

const sections = ["Main Website", "Online Course"] as const;

export function RevampMap() {
  const [section, setSection] = useState<(typeof sections)[number] | "All">("All");

  const filtered =
    section === "All"
      ? urlMappings
      : urlMappings.filter((m) => m.section === section);

  return (
    <div>
      <div className="mb-8 text-center">
        <h1 className="font-display text-4xl font-bold text-white">URL Consolidation Map</h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-400">
          Every legacy page from urls.txt maps to a single route in this demo - showing how
          40+ scattered URLs become a streamlined Academy + Portal architecture.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap justify-center gap-2">
          {(["All", ...sections] as const).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSection(s)}
              className={`rounded-full px-4 py-1.5 text-sm ${
                section === s
                  ? "border border-cyan-400/40 bg-cyan-500/20 text-cyan-300"
                  : "border border-white/10 text-slate-400"
              }`}
            >
              {s}
            </button>
          ))}
      </div>

      <GlassCard className="overflow-hidden p-0">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-2 border-b border-white/5 bg-white/[0.02] px-4 py-3 text-xs font-medium uppercase tracking-wider text-slate-500 max-sm:hidden">
          <span>Legacy URL</span>
          <span className="w-8" />
          <span>New demo route</span>
        </div>
        <ul className="max-h-[60vh] divide-y divide-white/5 overflow-y-auto">
          {filtered.map((row) => (
            <li
              key={`${row.label}-${row.demoRoute}`}
              className="grid grid-cols-1 items-center gap-2 px-4 py-3 text-sm sm:grid-cols-[1fr_auto_1fr]"
            >
              <div>
                <p className="font-medium text-white">{row.label}</p>
                <a
                  href={row.legacyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-0.5 flex items-center gap-1 truncate text-xs text-slate-500 hover:text-cyan-400"
                >
                  {row.legacyUrl.replace("https://", "")}
                  <ExternalLink size={10} />
                </a>
                <span className="mt-1 inline-block rounded bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-400">
                  {row.section}
                </span>
              </div>
              <ArrowRight className="hidden h-4 w-4 shrink-0 text-cyan-400/60 sm:block" />
              <Link
                href={row.demoRoute}
                className="flex items-center gap-1 font-mono text-cyan-400 hover:underline"
              >
                {row.demoRoute}
                <ArrowRight size={14} />
              </Link>
            </li>
          ))}
        </ul>
      </GlassCard>

      <p className="mt-6 text-center text-xs text-slate-500">
        {filtered.length} mappings shown · Content sourced via Firecrawl from live EICT sites
      </p>
    </div>
  );
}
