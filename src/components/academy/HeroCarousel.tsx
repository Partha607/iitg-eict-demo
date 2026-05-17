"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { GlowButton } from "@/components/ui/GlowButton";
import { cn } from "@/lib/utils";

export function HeroCarousel() {
  const slides = siteConfig.heroSlides;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const go = (dir: -1 | 1) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  };

  const slide = slides[index];

  return (
    <div className="flex h-full min-h-[320px] flex-col gap-4 lg:min-h-[420px]">
      <div className="relative aspect-[4/3] w-full max-h-[420px] overflow-hidden rounded-xl border border-theme-border bg-muted/20 shadow-sm">
        {slides.map((s, i) => (
          <div
            key={s.src}
            className={cn(
              "absolute inset-0 transition-opacity duration-700",
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            )}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              className="object-cover object-center"
              priority={i === 0}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        ))}

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/35 to-transparent"
          aria-hidden
        />

        <button
          type="button"
          onClick={() => go(-1)}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/30 bg-black/40 p-2 text-white backdrop-blur hover:bg-black/55"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/30 bg-black/40 p-2 text-white backdrop-blur hover:bg-black/55"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>

        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={slides[i].src}
              type="button"
              onClick={() => setIndex(i)}
              className={cn(
                "h-2 rounded-full transition-all",
                i === index ? "w-7 bg-white" : "w-2 bg-white/50"
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center rounded-xl border border-theme-border bg-card/80 p-4 backdrop-blur-sm sm:p-5">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary dark:text-cyan-400">
          IIT Guwahati · MeitY Initiative
        </p>
        <h1 className="mt-2 font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl">
          {slide.title}
        </h1>
        <p className="mt-2 text-base leading-relaxed text-foreground/90">{slide.subtitle}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <GlowButton href="/academy/courses">Explore Courses</GlowButton>
          <GlowButton href="/portal/register" variant="secondary">
            Register Online
          </GlowButton>
        </div>
      </div>
    </div>
  );
}
