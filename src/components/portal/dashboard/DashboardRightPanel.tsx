"use client";

import Link from "next/link";
import {
  calendarDays,
  calendarHighlight,
  quickLinks,
  staffQuickLinks,
  studentAnnouncements,
} from "@/data/dashboard-mock";
import { Calendar, ChevronRight, Info, Megaphone } from "./DashboardIcons";

function AnnouncementIcon({ type }: { type: string }) {
  if (type === "calendar") return <Calendar size={16} className="text-blue-600" />;
  if (type === "info") return <Info size={16} className="text-amber-600" />;
  return <Megaphone size={16} className="text-blue-600" />;
}

export function StudentRightPanel() {
  return (
  <>
      <PanelCard title="Important Announcements">
        <Link href="#" className="mb-3 block text-right text-xs text-blue-600 hover:underline">
          View all
        </Link>
        <ul className="space-y-4">
          {studentAnnouncements.map((a) => (
            <li key={a.title} className="flex gap-3">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-500/10">
                <AnnouncementIcon type={a.icon} />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1a2b4a] dark:text-slate-100">{a.title}</p>
                <p className="text-xs text-slate-500">{a.desc}</p>
                <p className="mt-1 text-[10px] text-slate-400">{a.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </PanelCard>

      <PanelCard title="Quick Links" className="mt-4">
        <ul className="divide-y divide-slate-100 dark:divide-slate-800">
          {quickLinks.map((link) => (
            <li key={link}>
              <Link
                href="#"
                className="flex items-center justify-between py-2.5 text-sm text-slate-700 hover:text-blue-600 dark:text-slate-300"
              >
                {link}
                <ChevronRight size={14} className="text-slate-400" />
              </Link>
            </li>
          ))}
        </ul>
      </PanelCard>

      <CalendarWidget className="mt-4" />
    </>
  );
}

export function StaffRightPanel({
  activity,
}: {
  activity: { text: string; time: string; icon: string }[];
}) {
  return (
    <>
      <PanelCard title="Recent Activity">
        <Link href="#" className="mb-3 block text-right text-xs text-blue-600 hover:underline">
          View all activities
        </Link>
        <ul className="space-y-4 border-l-2 border-blue-100 pl-4 dark:border-blue-900">
          {activity.map((item) => (
            <li key={item.text} className="relative">
              <span className="absolute -left-[1.35rem] top-1 h-2.5 w-2.5 rounded-full bg-blue-500" />
              <p className="text-sm text-[#1a2b4a] dark:text-slate-200">{item.text}</p>
              <p className="text-[10px] text-slate-400">{item.time}</p>
            </li>
          ))}
        </ul>
      </PanelCard>

      <CalendarWidget className="mt-4" />

      <PanelCard title="Quick Links" className="mt-4">
        <ul className="divide-y divide-slate-100 dark:divide-slate-800">
          {staffQuickLinks.map((link) => (
            <li key={link}>
              <Link
                href="#"
                className="flex items-center justify-between py-2.5 text-sm text-slate-700 hover:text-blue-600 dark:text-slate-300"
              >
                {link}
                <ChevronRight size={14} className="text-slate-400" />
              </Link>
            </li>
          ))}
        </ul>
      </PanelCard>
    </>
  );
}

function PanelCard({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800 ${className}`}
    >
      <h3 className="font-semibold text-[#1a2b4a] dark:text-slate-100">{title}</h3>
      {children}
    </section>
  );
}

function CalendarWidget({ className = "" }: { className?: string }) {
  const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  return (
    <PanelCard title="Calendar" className={className}>
      <p className="mb-3 text-center text-sm font-medium text-slate-600">May 2026</p>
      <div className="grid grid-cols-7 gap-1 text-center text-[10px]">
        {weekDays.map((d) => (
          <span key={d} className="font-medium text-slate-400">
            {d}
          </span>
        ))}
        <span />
        {calendarDays.map((day) => (
          <span
            key={day}
            className={`flex h-7 w-7 items-center justify-center rounded-full mx-auto ${
              day === calendarHighlight
                ? "bg-blue-600 font-bold text-white"
                : "text-slate-600 dark:text-slate-400"
            }`}
          >
            {day}
          </span>
        ))}
      </div>
    </PanelCard>
  );
}
