"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ArrowLeft,
  ClipboardList,
  Home,
  Kanban,
  LayoutDashboard,
  Shield,
  UserPlus,
} from "lucide-react";
import { cn, normalizePath } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { usePortalAuth } from "@/components/portal/PortalAuthProvider";
import type { PortalRole } from "@/lib/portal-auth";

type NavItem = {
  href: string;
  label: string;
  icon: typeof LayoutDashboard;
  roles: PortalRole[];
};

const navItems: NavItem[] = [
  {
    href: "/portal/lms",
    label: "Student Dashboard",
    icon: LayoutDashboard,
    roles: ["student"],
  },
  {
    href: "/portal/staff",
    label: "Staff Dashboard",
    icon: LayoutDashboard,
    roles: ["staff"],
  },
  {
    href: "/portal/register",
    label: "Registration",
    icon: UserPlus,
    roles: ["student", "staff"],
  },
  {
    href: "/portal/admin/enquiries",
    label: "Enquiries",
    icon: Kanban,
    roles: ["admin"],
  },
  {
    href: "/portal/admin/cms",
    label: "CMS",
    icon: ClipboardList,
    roles: ["admin"],
  },
];

export function PortalSidebar() {
  const pathname = normalizePath(usePathname());
  const router = useRouter();
  const { role, signOut } = usePortalAuth();

  const visibleItems = role
    ? navItems.filter((item) => item.roles.includes(role))
    : [];

  const handleSignOut = () => {
    signOut();
    router.push("/portal/login");
  };

  return (
    <>
      <aside className="hidden w-64 shrink-0 flex-col border-r border-theme-border bg-nav/90 p-4 md:flex">
        <Logo href="/" imageClassName="h-14 w-auto sm:h-16 md:h-[4.25rem]" className="mb-2" />
        <span className="mb-1 ml-1 flex items-center gap-1.5 text-sm font-medium text-foreground">
          {role === "admin" && <Shield size={14} className="text-accent" aria-hidden />}
          Portal
          {role === "admin" && (
            <span className="rounded bg-accent/15 px-1.5 py-0.5 text-xs text-accent">Admin</span>
          )}
        </span>
        <nav className="mt-4 flex flex-1 flex-col gap-1">
          {visibleItems.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-base transition-colors",
                pathname === href || pathname.startsWith(href + "/")
                  ? "bg-cyan-500/15 font-medium text-cyan-700 dark:text-cyan-300"
                  : "text-foreground/85 hover:bg-theme-card hover:text-foreground"
              )}
            >
              <Icon size={20} aria-hidden />
              {label}
            </Link>
          ))}
        </nav>
        <div className="mb-4 flex items-center justify-between px-1">
          <span className="text-sm text-muted-foreground">Theme</span>
          <ThemeToggle />
        </div>
        <Link
          href="/academy"
          className="mb-2 flex items-center gap-2 rounded-lg px-3 py-2.5 text-base text-foreground/85 hover:text-foreground"
        >
          <Home size={18} aria-hidden />
          Back to Academy
        </Link>
        <button
          type="button"
          onClick={handleSignOut}
          className="flex w-full items-center gap-2 rounded-lg border border-theme-border bg-card/60 px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-cyan-500/10 hover:text-cyan-700 dark:hover:text-cyan-400"
        >
          <ArrowLeft size={18} aria-hidden />
          Back to Login
        </button>
      </aside>

      <nav className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-theme-border bg-nav/95 px-2 py-2 md:hidden">
        {visibleItems.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex flex-1 flex-col items-center gap-0.5 py-1 text-xs font-medium",
              pathname === href ? "text-cyan-700 dark:text-cyan-400" : "text-foreground/75"
            )}
          >
            <Icon size={20} aria-hidden />
            <span className="truncate">{label.split(" ")[0]}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
