"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { images } from "@/lib/images";
import { dashboardNav } from "@/data/dashboard-mock";
import { Bell, ChevronDown, LogOut, Mail, Search, DashboardIcon } from "./DashboardIcons";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { RoleAvatar } from "@/components/ui/RoleAvatar";

type PortalDashboardShellProps = {
  role: "student" | "staff";
  userName: string;
  children: React.ReactNode;
  rightPanel?: React.ReactNode;
};

export function PortalDashboardShell({
  role,
  userName,
  children,
  rightPanel,
}: PortalDashboardShellProps) {
  return (
    <div className="flex min-h-screen bg-[#eef1f6] text-[#1a2b4a] dark:bg-slate-950 dark:text-slate-100">
      {/* Sidebar */}
      <aside className="hidden w-[220px] shrink-0 flex-col bg-[#0b1f3f] text-white lg:flex">
        <div className="border-b border-white/10 px-4 py-5">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={images.logo}
              alt="IIT Guwahati"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-contain brightness-110"
            />
            <span className="text-sm font-semibold leading-tight">IIT Guwahati</span>
          </Link>
        </div>
        <nav className="flex-1 space-y-0.5 overflow-y-auto px-2 py-4">
          {dashboardNav.map((item, i) => {
            const active = i === 0;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
                  active
                    ? "bg-[#1a4d8c] font-medium text-[#f5d547]"
                    : "text-white/75 hover:bg-white/10 hover:text-white"
                )}
              >
                <DashboardIcon name={item.icon} className="shrink-0 opacity-90" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-white/10 p-4">
          <Link
            href="/"
            className="mb-4 flex items-center gap-2 text-sm text-white/70 hover:text-white"
          >
            <LogOut size={16} />
            Logout
          </Link>
          <p className="text-[10px] leading-relaxed text-white/40">
            © 2024 Indian Institute of Technology Guwahati
          </p>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Top bar */}
        <header className="border-b border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-900 lg:px-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-[#0b3d7a] dark:text-cyan-300">
                Department of Electronics and Computer Science
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Technology. Innovation. Impact.
              </p>
            </div>
            <div className="relative hidden max-w-md flex-1 md:block">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={16}
              />
              <input
                type="search"
                placeholder="Search for courses, resources, people..."
                className="w-full rounded-full border border-slate-200 bg-slate-50 py-2 pl-9 pr-4 text-sm outline-none focus:border-blue-400 dark:border-slate-700 dark:bg-slate-800"
              />
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <ThemeToggle />
              <button
                type="button"
                className="relative rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300"
                aria-label="Notifications"
              >
                <Bell size={20} />
                <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                  3
                </span>
              </button>
              <button
                type="button"
                className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300"
                aria-label="Messages"
              >
                <Mail size={20} />
              </button>
              <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 dark:border-slate-700 dark:bg-slate-800">
                <RoleAvatar role={role} size="sm" />
                <span className="hidden text-sm sm:inline">
                  Welcome {userName}
                  {role === "staff" ? ", Staff" : ""}
                </span>
                <ChevronDown size={14} className="text-slate-400" />
              </div>
            </div>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          <main className="min-w-0 flex-1 overflow-y-auto p-4 lg:p-6">{children}</main>
          {rightPanel && (
            <aside className="hidden w-[280px] shrink-0 overflow-y-auto border-l border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 xl:block">
              {rightPanel}
            </aside>
          )}
        </div>

        <footer className="border-t border-slate-200 bg-[#0b1f3f] px-4 py-2 text-center text-xs text-white/70 lg:text-right">
          <Link href="#" className="hover:text-white">
            Privacy Policy
          </Link>
          {" | "}
          <Link href="#" className="hover:text-white">
            Terms of Use
          </Link>
          {" | "}
          <Link href="#" className="hover:text-white">
            Accessibility
          </Link>
          {" | "}
          <Link href="#" className="hover:text-white">
            Feedback
          </Link>
        </footer>
      </div>
    </div>
  );
}
