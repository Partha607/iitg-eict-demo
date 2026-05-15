"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ClipboardList,
  Home,
  Kanban,
  LayoutDashboard,
  LogOut,
  UserPlus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";

const navItems = [
  { href: "/portal/lms", label: "LMS Dashboard", icon: LayoutDashboard },
  { href: "/portal/register", label: "Registration", icon: UserPlus },
  { href: "/portal/admin/enquiries", label: "Enquiries", icon: Kanban },
  { href: "/portal/admin/cms", label: "CMS", icon: ClipboardList },
];

export function PortalSidebar() {
  const pathname = usePathname();

  return (
    <>
      <aside className="hidden w-64 shrink-0 flex-col border-r border-white/5 bg-slate-950/90 p-4 md:flex">
        <Link href="/" className="mb-8 font-display text-lg font-bold text-white">
          {siteConfig.name}
          <span className="mt-1 block text-xs font-normal text-cyan-400/70">Portal</span>
        </Link>
        <nav className="flex flex-1 flex-col gap-1">
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
                pathname === href || pathname.startsWith(href + "/")
                  ? "bg-cyan-500/15 text-cyan-300"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              )}
            >
              <Icon size={18} />
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="/academy/about"
          className="mb-2 flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-500 hover:text-slate-300"
        >
          <Home size={16} />
          Back to Academy
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-500 hover:text-red-300"
        >
          <LogOut size={16} />
          Sign out
        </Link>
      </aside>

      <nav className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-white/5 bg-slate-950/95 px-2 py-2 md:hidden">
        {navItems.slice(0, 4).map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex flex-1 flex-col items-center gap-0.5 py-1 text-[10px]",
              pathname === href ? "text-cyan-400" : "text-slate-500"
            )}
          >
            <Icon size={18} />
            <span className="truncate">{label.split(" ")[0]}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
