"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryItems, type GalleryPhase } from "@/data/gallery";
import { cn } from "@/lib/utils";

const phases: GalleryPhase[] = ["All", "Phase I", "Phase II"];

export function MasonryGallery() {
  const [phase, setPhase] = useState<GalleryPhase>("All");
  const filtered =
    phase === "All" ? galleryItems : galleryItems.filter((g) => g.phase === phase);

  return (
    <div className="academy-container py-8 md:py-12">
      <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Gallery</h1>
      <p className="mt-2 text-muted">Phase I &amp; II events and training sessions</p>

      <div className="mb-8 mt-6 flex gap-2">
        {phases.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => setPhase(p)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm",
              phase === p
                ? "border border-cyan-400/40 bg-cyan-500/15 text-cyan-700 dark:text-cyan-300"
                : "border border-theme-border text-muted"
            )}
          >
            {p}
          </button>
        ))}
      </div>

      <div className="columns-2 gap-4 md:columns-3">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-theme-border"
          >
            <div className="relative aspect-auto min-h-[160px] w-full">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={item.aspect === "tall" ? 800 : 400}
                className="h-auto w-full object-cover"
                unoptimized
              />
            </div>
            <p className="bg-slate-900/90 px-3 py-2 text-sm text-white">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

