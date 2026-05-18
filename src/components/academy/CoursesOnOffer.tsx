import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Monitor } from "lucide-react";
import { courses } from "@/data/courses";
import { getDomainThumbnail } from "@/lib/images";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { StatusBadge } from "@/components/ui/StatusBadge";

const FEATURED_COUNT = 6;

const featuredCourses = courses
  .filter((c) => c.featured)
  .slice(0, FEATURED_COUNT);

/**
 * Homepage section that highlights a curated set of courses, sitting just
 * above the "Connect With Us" social feed - mirrors the layout pattern from
 * eict.iitr.ac.in's "Courses on Offer" section.
 */
export function CoursesOnOffer() {
  return (
    <section className="academy-container py-10 md:py-14">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3 md:mb-8">
        <div>
          <h2 className="text-on-watermark font-display text-2xl font-bold text-foreground md:text-3xl">
            Courses on Offer
          </h2>
          <p className="text-on-watermark mt-2 max-w-2xl text-base text-foreground/85 sm:text-lg">
            Featured programmes - certifications, FDPs and short-term trainings open for
            registration.
          </p>
        </div>
        <GlowButton href="/academy/courses" variant="secondary" className="shrink-0">
          Explore all courses
          <ArrowRight size={16} />
        </GlowButton>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featuredCourses.map((course) => {
          const thumb = getDomainThumbnail(course.domain);
          return (
            <Link
              key={course.id}
              href="/academy/courses"
              className="group block"
            >
              <GlassCard className="flex h-full flex-col overflow-hidden p-0 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:shadow-lg">
                {thumb && (
                  <div className="relative h-36 w-full shrink-0 overflow-hidden border-b border-theme-border">
                    <Image
                      src={thumb}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      aria-hidden
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
                    <span className="absolute right-3 top-3 rounded-full bg-card/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-foreground/85 backdrop-blur-sm sm:text-xs">
                      {course.category}
                    </span>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <StatusBadge status={course.status} />
                    <span className="text-xs text-muted">{course.phase}</span>
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground group-hover:text-cyan-700 sm:text-lg dark:group-hover:text-cyan-300">
                    {course.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {course.description}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-muted">
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Monitor size={12} /> {course.mode}
                    </span>
                    {course.fee && (
                      <span className="font-semibold text-cyan-600 dark:text-cyan-400/90">
                        {course.fee}
                      </span>
                    )}
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-cyan-700 dark:text-cyan-300">
                    View course <ArrowRight size={14} />
                  </span>
                </div>
              </GlassCard>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
