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
    <section className="academy-bleed relative min-h-[280px] w-full sm:min-h-[360px] md:min-h-[440px] lg:min-h-[520px]">
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
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/50 to-transparent" />

      <div className="absolute inset-0 flex items-center">
        <div className="academy-container w-full py-10 md:py-16">
          <p className="text-xs font-medium uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            IIT Guwahati · MeitY Initiative
          </p>
          <h1 className="mt-2 max-w-2xl font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            {slide.title}
          </h1>
          <p className="mt-3 max-w-xl text-sm text-muted sm:text-base md:text-lg">
            {slide.subtitle}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <GlowButton href="/academy/courses">Explore Courses</GlowButton>
            <GlowButton href="/portal/register" variant="secondary">
              Register Online
            </GlowButton>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => go(-1)}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-theme-border bg-nav/80 p-2 text-foreground backdrop-blur hover:bg-cyan-500/10 sm:left-4"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-theme-border bg-nav/80 p-2 text-foreground backdrop-blur hover:bg-cyan-500/10 sm:right-4"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={slides[i].src}
            type="button"
            onClick={() => setIndex(i)}
            className={cn(
              "h-2 rounded-full transition-all",
              i === index ? "w-8 bg-cyan-500" : "w-2 bg-foreground/30"
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
