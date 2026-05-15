"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { GlowButton } from "@/components/ui/GlowButton";
import { siteConfig } from "@/data/site";

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
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="font-display text-lg font-bold text-white">
          {siteConfig.name}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors hover:text-cyan-400",
                pathname === link.href ? "text-cyan-400" : "text-slate-400"
              )}
            >
              {link.label}
            </Link>
          ))}
          <GlowButton href="/portal/login" variant="secondary">
            Portal Login
          </GlowButton>
        </div>

        <button
          type="button"
          className="md:hidden text-slate-300"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 px-4 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-slate-300"
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
