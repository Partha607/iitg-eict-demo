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
  { href: "/academy/about", label: "About" },
  { href: "/academy/courses", label: "Courses" },
  { href: "/academy/faculty", label: "Faculty" },
  { href: "/academy/gallery", label: "Gallery" },
  { href: "/academy/contact", label: "Contact" },
  { href: "/academy/revamp", label: "Revamp Map" },
];

export function AcademyNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-theme-border bg-nav/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Logo href="/" />

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors hover:text-cyan-500 dark:hover:text-cyan-400",
                pathname === link.href
                  ? "text-cyan-600 dark:text-cyan-400"
                  : "text-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          <GlowButton href="/portal/login" variant="secondary">
            Portal Login
          </GlowButton>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="text-muted"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-theme-border px-4 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-foreground/80"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <GlowButton href="/portal/login" className="mt-4 w-full">
            Portal Login
          </GlowButton>
        </div>
      )}
    </nav>
  );
}
