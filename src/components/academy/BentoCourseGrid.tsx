"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight, Clock, Monitor } from "lucide-react";
import { gsap, registerGsap } from "@/lib/gsap";
import {
  courses,
  courseCategories,
  type Course,
  type CourseCategory,
} from "@/data/courses";
import { phase2Domains } from "@/data/course-domains";
import { fdpFeeRows, professionalCertFee } from "@/data/fees";
import { scrapedProfessionalDomains } from "@/data/scraped-content";
import { getDomainThumbnail, images } from "@/lib/images";
import { GlassCard } from "@/components/ui/GlassCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { cn } from "@/lib/utils";

type TabValue = (typeof courseCategories)[number];

const PAGE_SIZE_OPTIONS = [5, 10, 15, 20];

export function BentoCourseGrid() {
  const [tab, setTab] = useState<TabValue>("All Courses");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    if (tab === "All Courses") return courses;
    return courses.filter((c) => c.category === (tab as CourseCategory));
  }, [tab]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * pageSize;
  const end = start + pageSize;
  const visible = filtered.slice(start, end);

  useGSAP(
    () => {
      registerGsap();
      if (!gridRef.current) return;
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, stagger: 0.05, duration: 0.35, ease: "power2.out" }
      );
    },
    { dependencies: [tab, safePage, pageSize] }
  );

  const goToPage = (next: number) => {
    setPage(Math.min(Math.max(next, 1), totalPages));
  };

  return (
    <div>
      {/* Tab nav - mirrors eict.iitr.ac.in/programs/explore-courses */}
      <div className="mb-8 -mx-1 overflow-x-auto">
        <div className="flex min-w-max gap-1 border-b border-theme-border px-1">
          {courseCategories.map((t) => {
            const active = t === tab;
            const count =
              t === "All Courses"
                ? courses.length
                : courses.filter((c) => c.category === (t as CourseCategory)).length;
            return (
              <button
                key={t}
                type="button"
                onClick={() => {
                  setTab(t);
                  setPage(1);
                }}
                className={cn(
                  "relative whitespace-nowrap px-4 py-3 text-sm font-medium transition-colors sm:text-base",
                  active
                    ? "text-cyan-700 dark:text-cyan-300"
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                <span>{t}</span>
                <span
                  className={cn(
                    "ml-2 rounded-full px-2 py-0.5 text-xs",
                    active
                      ? "bg-cyan-500/20 text-cyan-700 dark:text-cyan-300"
                      : "bg-secondary text-foreground/70"
                  )}
                >
                  {count}
                </span>
                {active && (
                  <span
                    aria-hidden
                    className="absolute inset-x-1 -bottom-px h-0.5 rounded-full bg-cyan-500"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured domain tiles */}
      <div className="mb-10 grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          { label: "VLSI", src: images.thumbnails.vlsi },
          { label: "IoT", src: images.thumbnails.iot },
          { label: "Machine Learning", src: images.thumbnails.ml },
          { label: "Cybersecurity", src: images.thumbnails.cybersecurity },
        ].map(({ label, src }) => (
          <div
            key={label}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-theme-border"
          >
            <Image
              src={src}
              alt={`${label} domain`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <span className="absolute bottom-3 left-3 font-display text-sm font-semibold text-foreground">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Course grid */}
      {filtered.length === 0 ? (
        <GlassCard className="text-center text-muted">Coming soon…</GlassCard>
      ) : (
        <div
          ref={gridRef}
          className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {visible.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}

      {/* Pagination footer */}
      <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-theme-border pt-5 text-sm sm:flex-row">
        <div className="flex items-center gap-2 text-muted-foreground">
          <label htmlFor="page-size" className="font-medium">
            Items per page
          </label>
          <select
            id="page-size"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setPage(1);
            }}
            className="rounded-md border border-theme-border bg-card px-2 py-1 text-foreground"
          >
            {PAGE_SIZE_OPTIONS.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          <span className="ml-3">
            {filtered.length === 0
              ? "0 - 0 of 0"
              : `${start + 1} - ${Math.min(end, filtered.length)} of ${filtered.length}`}
          </span>
        </div>

        <div className="flex items-center gap-1">
          <PaginationButton
            label="First"
            onClick={() => goToPage(1)}
            disabled={safePage === 1}
          >
            <ChevronFirst size={16} />
          </PaginationButton>
          <PaginationButton
            label="Back"
            onClick={() => goToPage(safePage - 1)}
            disabled={safePage === 1}
          >
            <ChevronLeft size={16} />
          </PaginationButton>
          <span className="min-w-[2.5rem] rounded-md border border-theme-border bg-card px-3 py-1 text-center font-medium text-foreground">
            {safePage}
          </span>
          <PaginationButton
            label="Next"
            onClick={() => goToPage(safePage + 1)}
            disabled={safePage === totalPages}
          >
            <ChevronRight size={16} />
          </PaginationButton>
          <PaginationButton
            label="Last"
            onClick={() => goToPage(totalPages)}
            disabled={safePage === totalPages}
          >
            <ChevronLast size={16} />
          </PaginationButton>
        </div>
      </div>

      {/* Phase II domains chip cloud */}
      <GlassCard className="mt-12">
        <h2 className="font-display text-lg text-foreground">Phase-II Course Domains</h2>
        <p className="mt-1 text-sm text-muted">From eict.iitg.ac.in - 20 focus areas</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {phase2Domains.map((d) => (
            <span
              key={d}
              className="rounded-full border border-theme-border bg-theme-card px-3 py-1 text-xs text-foreground/80"
            >
              {d}
            </span>
          ))}
        </div>
      </GlassCard>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <GlassCard>
          <h2 className="font-display text-lg text-foreground">FDP Fee Structure (Phase-II)</h2>
          <p className="mt-1 text-xs text-muted">Inclusive of 18% GST</p>
          <table className="mt-4 w-full text-sm">
            <thead>
              <tr className="border-b border-theme-border text-left text-muted">
                <th className="py-2">Mode</th>
                <th className="py-2">Technical (₹)</th>
                <th className="py-2">Non-Technical (₹)</th>
              </tr>
            </thead>
            <tbody className="text-foreground/80">
              {fdpFeeRows.map((row) => (
                <tr key={row.mode} className="border-b border-theme-border/50">
                  <td className="py-2">{row.mode}</td>
                  <td className="py-2">{row.technical}</td>
                  <td className="py-2">{row.nonTechnical}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </GlassCard>
        <GlassCard>
          <h2 className="font-display text-lg text-foreground">Professional Certification</h2>
          <p className="mt-2 text-sm text-muted">
            Registration: ₹{professionalCertFee.registrationFee.toLocaleString()} (non-refundable)
          </p>
          <p className="mt-2 text-2xl font-bold text-cyan-600 dark:text-cyan-400">
            ₹{professionalCertFee.totalFourSemesters.toLocaleString()}
          </p>
          <p className="text-xs text-muted">
            4 semesters × ₹{professionalCertFee.perSemester.toLocaleString()} - courses.eictiitg.com
          </p>
          <ul className="mt-4 space-y-1 text-xs text-muted">
            {scrapedProfessionalDomains.map((d) => (
              <li key={d}>▸ {d}</li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </div>
  );
}

function CourseCard({ course }: { course: Course }) {
  const thumb = getDomainThumbnail(course.domain);
  return (
    <GlassCard className="flex flex-col overflow-hidden p-0">
      {thumb && (
        <div className="relative h-32 w-full shrink-0 border-b border-theme-border">
          <Image src={thumb} alt="" fill className="object-cover" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center justify-between gap-2">
          <StatusBadge status={course.status} />
          <span className="text-xs text-muted">{course.phase}</span>
        </div>
        <h3 className="font-display text-base font-semibold text-foreground sm:text-lg">
          {course.title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-muted">{course.description}</p>
        <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted">
          <span className="flex items-center gap-1">
            <Clock size={12} /> {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <Monitor size={12} /> {course.mode}
          </span>
          {course.fee && (
            <span className="font-medium text-cyan-600 dark:text-cyan-400/90">{course.fee}</span>
          )}
        </div>
      </div>
    </GlassCard>
  );
}

function PaginationButton({
  label,
  onClick,
  disabled,
  children,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className="flex h-8 w-8 items-center justify-center rounded-md border border-theme-border bg-card text-foreground transition-colors hover:border-cyan-400/40 hover:text-cyan-700 disabled:cursor-not-allowed disabled:opacity-40 dark:hover:text-cyan-300"
    >
      {children}
    </button>
  );
}
