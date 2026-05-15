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
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const navItems = [
  { href: "/portal/lms", label: "Student Dashboard", icon: LayoutDashboard },
  { href: "/portal/staff", label: "Staff Dashboard", icon: LayoutDashboard },
  { href: "/portal/register", label: "Registration", icon: UserPlus },
  { href: "/portal/admin/enquiries", label: "Enquiries", icon: Kanban },
  { href: "/portal/admin/cms", label: "CMS", icon: ClipboardList },
];

export function PortalSidebar() {
  const pathname = usePathname();

  return (
    <>
      <aside className="hidden w-64 shrink-0 flex-col border-r border-theme-border bg-nav/90 p-4 md:flex">
        <Logo href="/" className="mb-2" />
        <span className="mb-6 ml-1 text-xs text-cyan-600 dark:text-cyan-400/70">Portal</span>
        <nav className="flex flex-1 flex-col gap-1">
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
                pathname === href || pathname.startsWith(href + "/")
                  ? "bg-cyan-500/15 text-cyan-600 dark:text-cyan-300"
                  : "text-muted hover:bg-theme-card hover:text-foreground"
              )}
            >
              <Icon size={18} />
              {label}
            </Link>
          ))}
        </nav>
        <div className="mb-4 flex items-center justify-between px-1">
          <span className="text-xs text-muted">Theme</span>
          <ThemeToggle />
        </div>
        <Link
          href="/academy/about"
          className="mb-2 flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted hover:text-foreground"
        >
          <Home size={16} />
          Back to Academy
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted hover:text-red-500 dark:hover:text-red-300"
        >
          <LogOut size={16} />
          Sign out
        </Link>
      </aside>

      <nav className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-theme-border bg-nav/95 px-2 py-2 md:hidden">
        {navItems.slice(0, 4).map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex flex-1 flex-col items-center gap-0.5 py-1 text-[10px]",
              pathname === href ? "text-cyan-600 dark:text-cyan-400" : "text-muted"
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
