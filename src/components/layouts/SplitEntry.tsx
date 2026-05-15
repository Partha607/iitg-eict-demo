"use client";

import Link from "next/link";
import { useRef } from "react";
import { Globe, GraduationCap } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsap } from "@/lib/gsap";
import { siteConfig } from "@/data/site";

export function SplitEntry() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLAnchorElement>(null);
  const rightRef = useRef<HTMLAnchorElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from([leftRef.current, rightRef.current, dividerRef.current], {
          opacity: 0,
          y: 30,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
        });
        gsap.to(dividerRef.current, {
          boxShadow: "0 0 20px rgba(34,211,238,0.4)",
          repeat: -1,
          yoyo: true,
          duration: 2,
        });
      });
      return () => mm.revert();
    },
    { scope: containerRef }
  );

  const handleHover = (side: "left" | "right", enter: boolean) => {
    const el = side === "left" ? leftRef.current : rightRef.current;
    const other = side === "left" ? rightRef.current : leftRef.current;
    if (!el || !other) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.to(el, {
      flexGrow: enter ? 1.15 : 1,
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(other, {
      flexGrow: enter ? 0.85 : 1,
      opacity: enter ? 0.7 : 1,
      duration: 0.4,
    });
    gsap.to(el, {
      boxShadow: enter
        ? "inset 0 0 80px rgba(34,211,238,0.12)"
        : "inset 0 0 0 rgba(34,211,238,0)",
      duration: 0.4,
    });
  };

  return (
    <div ref={containerRef} className="flex min-h-screen flex-col">
      <header className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-6 py-5 md:px-10">
        <div className="font-display text-lg font-bold tracking-tight text-white">
          {siteConfig.name}
          <span className="ml-2 text-xs font-normal text-cyan-400/80">IIT Guwahati</span>
        </div>
        <p className="hidden text-xs text-slate-500 md:block">{siteConfig.tagline}</p>
      </header>

      <div className="flex flex-1 flex-col md:flex-row">
        <Link
          ref={leftRef}
          href="/academy"
          className="group relative flex flex-1 flex-col items-center justify-center border-b border-white/5 bg-slate-950/80 p-10 transition-colors md:border-b-0 md:border-r"
          onMouseEnter={() => handleHover("left", true)}
          onMouseLeave={() => handleHover("left", false)}
        >
          <Globe className="mb-6 h-16 w-16 text-cyan-400 transition-transform group-hover:scale-110" />
          <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
            The Academy
          </h1>
          <p className="mt-3 max-w-sm text-center text-slate-400">
            I&apos;m exploring — courses, faculty, history &amp; discovery
          </p>
          <span className="mt-8 rounded-full border border-cyan-400/30 px-4 py-1.5 text-sm text-cyan-300">
            Public site →
          </span>
        </Link>

        <div
          ref={dividerRef}
          className="hidden w-px shrink-0 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent md:block"
        />

        <Link
          ref={rightRef}
          href="/portal/login"
          className="group relative flex flex-1 flex-col items-center justify-center bg-slate-900/80 p-10"
          onMouseEnter={() => handleHover("right", true)}
          onMouseLeave={() => handleHover("right", false)}
        >
          <GraduationCap className="mb-6 h-16 w-16 text-blue-400 transition-transform group-hover:scale-110" />
          <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
            The Portal
          </h1>
          <p className="mt-3 max-w-sm text-center text-slate-400">
            I have an account — LMS, registration &amp; admin
          </p>
          <span className="mt-8 rounded-full border border-blue-400/30 px-4 py-1.5 text-sm text-blue-300">
            Sign in →
          </span>
        </Link>
      </div>
    </div>
  );
}
