"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { GlowButton } from "@/components/ui/GlowButton";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const links = [
  { href: "/academy", label: "Home" },
  { href: "/academy/people", label: "People" },
  { href: "/academy/infrastructure", label: "Infrastructure" },
  { href: "/academy/gallery", label: "Gallery" },
  { href: "/academy/contact", label: "Contact Us" },
];

export function AcademyNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-theme-border bg-nav/95 backdrop-blur-xl">
      <div className="academy-container flex items-center justify-between gap-3 py-2.5 sm:py-3">
        <Logo href="/academy" imageClassName="h-11 w-auto sm:h-12" />

        <div className="hidden flex-1 items-center justify-center gap-1 lg:flex xl:gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-2.5 py-2 text-sm font-medium transition-colors hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-400 xl:px-3",
                pathname === link.href ||
                  (link.href !== "/academy" && pathname.startsWith(link.href))
                  ? "text-cyan-600 dark:text-cyan-400"
                  : "text-foreground/80"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <GlowButton href="/portal/login" variant="secondary" className="!px-3 !py-2 text-xs sm:text-sm">
            Portal
          </GlowButton>
          <GlowButton href="/portal/verify" className="!px-3 !py-2 text-xs sm:text-sm">
            Verify Certificate
          </GlowButton>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-lg p-2 text-foreground/80 hover:bg-cyan-500/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-theme-border md:hidden">
          <div className="academy-container space-y-1 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block rounded-lg px-3 py-2.5 text-sm font-medium",
                  pathname === link.href ? "bg-cyan-500/10 text-cyan-600" : "text-foreground/90"
                )}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-3">
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
    </nav>
  );
}
