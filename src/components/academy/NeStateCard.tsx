"use client";

import Image from "next/image";
import type { NeState } from "@/data/ne-states";
import { cn } from "@/lib/utils";

type NeStateCardProps = {
  state: NeState;
};

export function NeStateCard({ state }: NeStateCardProps) {
  return (
    <article
      className={cn(
        "group relative min-h-[220px] overflow-hidden rounded-xl border border-theme-border",
        "focus-within:ring-2 focus-within:ring-ring"
      )}
    >
      <Image
        src={state.image}
        alt=""
        fill
        className="object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:opacity-100 opacity-35 grayscale-[30%] group-hover:grayscale-0"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/75 to-background/40 transition-opacity duration-500 group-hover:opacity-0"
        aria-hidden
      />
      <div className="relative z-10 flex h-full min-h-[220px] flex-col justify-end p-4 transition-opacity duration-500 group-hover:opacity-0">
        <h3 className="font-display text-lg font-bold text-foreground drop-shadow-sm">
          {state.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-foreground/90">Capital: {state.capital}</p>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-foreground/85">
          {state.description}
        </p>
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      >
        <p className="text-center text-sm font-semibold text-white">{state.name}</p>
      </div>
    </article>
  );
}
