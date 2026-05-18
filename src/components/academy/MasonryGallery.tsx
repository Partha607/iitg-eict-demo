"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryItems, type GalleryPhase, type GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/utils";

const phases: GalleryPhase[] = ["All", "Phase I", "Phase II"];

// Bento-style span pattern: certain positions in the visible list get larger spans
const spanFor = (i: number) => {
  const pattern = [
    "md:col-span-2 md:row-span-2",
    "",
    "",
    "md:row-span-2",
    "",
    "md:col-span-2",
    "",
    "",
  ];
  return pattern[i % pattern.length];
};

export function MasonryGallery() {
  const [phase, setPhase] = useState<GalleryPhase>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered =
    phase === "All" ? galleryItems : galleryItems.filter((g) => g.phase === phase);

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % filtered.length)),
    [filtered.length]
  );
  const prev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? null : (i - 1 + filtered.length) % filtered.length
      ),
    [filtered.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, next, prev]);

  const active: GalleryItem | null =
    activeIndex !== null ? filtered[activeIndex] ?? null : null;

  return (
    <div className="academy-container py-8 md:py-12">
      <div className="text-center">
        <h1 className="text-on-watermark font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
          Gallery
        </h1>
        <p className="text-on-watermark mx-auto mt-3 max-w-2xl text-base text-foreground/85 sm:text-lg">
          Moments from Phase I &amp; II events, trainings, and life on campus.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {phases.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => {
              setPhase(p);
              setActiveIndex(null);
            }}
            className={cn(
              "relative rounded-full px-5 py-2 text-sm font-medium transition-all sm:text-base",
              phase === p
                ? "border border-cyan-400/50 bg-cyan-500/15 text-cyan-700 shadow-[0_0_20px_rgba(34,211,238,0.25)] dark:text-cyan-300"
                : "border border-theme-border bg-card/60 text-muted hover:border-cyan-400/30 hover:text-foreground"
            )}
          >
            {p}
          </button>
        ))}
      </div>

      <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:gap-4 md:grid-cols-4 md:auto-rows-[220px]">
        {filtered.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(i)}
            className={cn(
              "group relative overflow-hidden rounded-2xl border border-theme-border/70 bg-card/40 ring-1 ring-transparent transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:ring-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/60",
              spanFor(i)
            )}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              unoptimized
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            {/* Gradient overlay (always faint, intensifies on hover) */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
            {/* Phase badge */}
            <span
              className={cn(
                "absolute right-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide backdrop-blur-sm sm:text-xs",
                item.phase === "Phase I"
                  ? "bg-amber-500/85 text-amber-950"
                  : "bg-cyan-500/85 text-cyan-950"
              )}
            >
              {item.phase}
            </span>
            {/* Title slides up on hover */}
            <div className="absolute inset-x-0 bottom-0 translate-y-2 px-4 pb-3 text-left transition-transform duration-300 group-hover:translate-y-0">
              <p className="font-display text-sm font-semibold text-white drop-shadow-lg sm:text-base">
                {item.title}
              </p>
              <p className="mt-1 max-h-0 overflow-hidden text-xs text-white/80 opacity-0 transition-all duration-300 group-hover:max-h-12 group-hover:opacity-100">
                Click to expand
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
          >
            <X size={22} />
          </button>
          {filtered.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:left-6"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:right-6"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
          <div
            className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-slate-950/90 shadow-2xl ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={active.image}
                alt={active.title}
                fill
                sizes="100vw"
                unoptimized
                className="object-cover"
                priority
              />
            </div>
            <div className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-4 sm:px-7">
              <div>
                <p className="font-display text-base font-semibold text-white sm:text-lg">
                  {active.title}
                </p>
                <p className="text-xs text-white/60 sm:text-sm">{active.phase}</p>
              </div>
              <p className="text-xs text-white/50 sm:text-sm">
                {(activeIndex ?? 0) + 1} / {filtered.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
