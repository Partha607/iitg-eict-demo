"use client";

import Image from "next/image";
import Link from "next/link";
import { getDomainThumbnail } from "@/lib/images";
import { Download, Eye, Plus, Trash2 } from "./DashboardIcons";

type ListItem = { title: string; meta?: string; sub?: string };

function WidgetCard({
  title,
  children,
  createLabel,
}: {
  title: string;
  children: React.ReactNode;
  createLabel?: string;
}) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 dark:border-slate-700">
        <h3 className="text-sm font-semibold text-[#1a2b4a] dark:text-slate-100">{title}</h3>
        <Link href="#" className="text-xs text-blue-600 hover:underline">
          View all
        </Link>
      </div>
      <div className="p-3">{children}</div>
      {createLabel && (
        <div className="border-t border-slate-100 px-4 py-2 dark:border-slate-700">
          <Link href="#" className="text-xs font-medium text-blue-600 hover:underline">
            {createLabel} →
          </Link>
        </div>
      )}
    </section>
  );
}

function ActionIcons({ showGrade }: { showGrade?: boolean }) {
  return (
    <div className="flex shrink-0 gap-1">
      <button type="button" className="p-1 text-slate-400 hover:text-blue-600" aria-label="View">
        <Eye size={14} />
      </button>
      <button type="button" className="p-1 text-slate-400 hover:text-blue-600" aria-label="Add">
        <Plus size={14} />
      </button>
      {showGrade && (
        <button type="button" className="p-1 text-emerald-500" aria-label="Grade">
          <span className="text-[10px] font-bold">✓</span>
        </button>
      )}
      <button type="button" className="p-1 text-slate-400 hover:text-red-500" aria-label="Delete">
        <Trash2 size={14} />
      </button>
    </div>
  );
}

export function StaffCoursesWidget({
  courses,
}: {
  courses: { title: string; code: string; thumb: string }[];
}) {
  return (
    <WidgetCard title="My Courses">
      <ul className="space-y-3">
        {courses.map((c) => {
          const thumb = getDomainThumbnail(c.thumb) ?? getDomainThumbnail("ml");
          return (
            <li key={c.code} className="flex items-center gap-2">
              {thumb && (
                <div className="relative h-10 w-14 shrink-0 overflow-hidden rounded">
                  <Image src={thumb} alt="" fill className="object-cover" />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-medium">{c.title}</p>
                <p className="text-[10px] text-slate-500">{c.code}</p>
              </div>
              <ActionIcons />
            </li>
          );
        })}
      </ul>
    </WidgetCard>
  );
}

export function StaffListWidget({
  title,
  items,
  createLabel,
  showGrade,
  resource,
}: {
  title: string;
  items: ListItem[];
  createLabel?: string;
  showGrade?: boolean;
  resource?: boolean;
}) {
  return (
    <WidgetCard title={title} createLabel={createLabel}>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.title} className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="text-xs font-medium text-[#1a2b4a] dark:text-slate-200">{item.title}</p>
              {item.meta && <p className="text-[10px] text-slate-500">{item.meta}</p>}
              {item.sub && <p className="text-[10px] text-slate-400">{item.sub}</p>}
            </div>
            <div className="flex shrink-0 gap-1">
              {resource ? (
                <>
                  <button type="button" className="p-1 text-slate-400 hover:text-blue-600">
                    <Eye size={14} />
                  </button>
                  <button type="button" className="p-1 text-slate-400 hover:text-blue-600">
                    <Download size={14} />
                  </button>
                  <button type="button" className="p-1 text-slate-400 hover:text-red-500">
                    <Trash2 size={14} />
                  </button>
                </>
              ) : (
                <ActionIcons showGrade={showGrade} />
              )}
            </div>
          </li>
        ))}
      </ul>
    </WidgetCard>
  );
}
