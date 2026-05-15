"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsap } from "@/lib/gsap";
import { courses, type Course, type CourseStatus } from "@/data/courses";
import { GlassCard } from "@/components/ui/GlassCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Clock, Monitor } from "lucide-react";

const filters: (CourseStatus | "All")[] = [
  "All",
  "Published",
  "Upcoming",
  "Archived",
];

export function BentoCourseGrid() {
  const [filter, setFilter] = useState<CourseStatus | "All">("All");
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered =
    filter === "All" ? courses : courses.filter((c) => c.status === filter);

  useGSAP(
    () => {
      registerGsap();
      if (!gridRef.current) return;
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, stagger: 0.06, duration: 0.4, ease: "power2.out" }
      );
    },
    { dependencies: [filter] }
  );

  const spanClass = (size: Course["size"]) => {
    if (size === "large") return "md:col-span-2 md:row-span-2";
    if (size === "medium") return "md:col-span-2";
    return "";
  };

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
              filter === f
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40"
                : "border border-white/10 text-slate-400 hover:text-white"
            }`}
          >
            {f === "All" ? "All Courses" : f}
          </button>
        ))}
        <span className="ml-auto self-center text-sm text-slate-500">
          Phase I &amp; II consolidated
        </span>
      </div>

      <div
        ref={gridRef}
        className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {filtered.map((course) => (
          <GlassCard
            key={course.id}
            className={`flex flex-col ${spanClass(course.size)}`}
          >
            <div className="mb-3 flex items-center justify-between">
              <StatusBadge status={course.status} />
              <span className="text-xs text-slate-500">{course.phase}</span>
            </div>
            <h3 className="font-display text-lg font-semibold text-white">
              {course.title}
            </h3>
            <p className="mt-2 flex-1 text-sm text-slate-400">{course.description}</p>
            <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Clock size={12} /> {course.duration}
              </span>
              <span className="flex items-center gap-1">
                <Monitor size={12} /> {course.mode}
              </span>
              {course.fee && (
                <span className="text-cyan-400/80">{course.fee}</span>
              )}
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

