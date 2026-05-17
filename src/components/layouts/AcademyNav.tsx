"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { GlowButton } from "@/components/ui/GlowButton";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { images } from "@/lib/images";

const partnerLogos = [
  {
    src: "/images/IIT_Guwahati_Logo.svg",
    alt: "IIT Guwahati",
    width: 200,
    height: 80,
    className: "h-14 w-auto sm:h-16 md:h-[4.5rem] lg:h-20",
  },
  {
    src: "/images/digital_india.png",
    alt: "Digital India",
    width: 200,
    height: 72,
    className:
      "h-14 w-auto rounded-md bg-white px-3 py-2 sm:h-16 md:h-[4.25rem] lg:h-20 dark:bg-white/95",
  },
  {
    src: "/images/eindia_logo.png",
    alt: "Electronics India",
    width: 180,
    height: 72,
    className:
      "h-14 w-auto rounded-md bg-white px-3 py-2 sm:h-16 md:h-[4.25rem] lg:h-20 dark:bg-white/95",
  },
] as const;

const links = [
  { href: "/academy", label: "Home" },
  { href: "/academy/about", label: "About Us" },
  { href: "/academy/people", label: "People" },
  { href: "/academy/infrastructure", label: "Infrastructure" },
  { href: "/academy/gallery", label: "Gallery" },
  { href: "/academy/contact", label: "Contact Us" },
];

export function AcademyNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (href: string) =>
    cn(
      "rounded-lg px-2.5 py-2 text-base font-medium transition-colors hover:bg-cyan-500/10 hover:text-cyan-700 dark:hover:text-cyan-400 xl:px-3",
      pathname === href || (href !== "/academy" && pathname.startsWith(href))
        ? "text-cyan-700 dark:text-cyan-400"
        : "text-foreground"
    );

  return (
    <nav className="sticky top-0 z-50 border-b border-theme-border bg-nav/90 backdrop-blur-md">
      <div className="academy-nav-container">
        <div className="flex flex-wrap items-center justify-center gap-4 border-b border-theme-border/80 py-4 sm:gap-8 md:gap-10 lg:gap-12">
          <Link href="/academy" className="shrink-0">
            <Image
              src={images.logo}
              alt="Electronics & ICT Academy"
              width={360}
              height={96}
              className="h-16 w-auto max-w-[min(100%,22rem)] object-contain object-left sm:h-20 md:h-24 lg:h-28 dark:brightness-110"
              priority
            />
          </Link>
          {partnerLogos.map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className={logo.className}
            />
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 py-2.5 sm:py-3">
          <div className="hidden w-28 shrink-0 lg:block" aria-hidden />

          <div className="hidden flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <GlowButton
              href="/portal/login"
              variant="secondary"
              className="!px-3 !py-2 text-sm sm:text-base"
            >
              Portal
            </GlowButton>
            <GlowButton href="/portal/verify" className="!px-3 !py-2 text-sm sm:text-base">
              Verify Certificate
            </GlowButton>
          </div>

          <div className="flex flex-1 items-center justify-end gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="rounded-lg p-2 text-foreground hover:bg-cyan-500/10"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-theme-border pb-4 md:hidden">
            <div className="space-y-1 pt-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn("block px-3 py-2.5", linkClass(link.href))}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 px-3 pt-3">
                <GlowButton href="/portal/login" variant="secondary" className="w-full">
                  Portal
                </GlowButton>
                <GlowButton href="/portal/verify" className="w-full">
                  Verify Certificate
                </GlowButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
