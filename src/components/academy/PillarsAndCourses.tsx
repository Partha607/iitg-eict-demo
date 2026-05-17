import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { siteConfig } from "@/data/site";
import { courses } from "@/data/courses";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { cn } from "@/lib/utils";

const ongoingCourses = courses.filter(
  (c) => c.status === "Published" || c.status === "Upcoming"
);

export function PillarsAndCourses() {
  return (
    <section className="mt-10">
      <div className="grid gap-6 xl:grid-cols-12">
        <div className="xl:col-span-5">
          <h2 className="font-display text-xl font-bold text-foreground md:text-2xl">
            Our pillars
          </h2>
          <div className="mt-4 flex flex-col gap-3">
            {siteConfig.pillars.map((p) => (
              <GlassCard
                key={p.title}
                className="flex flex-row items-center gap-4 p-4 sm:p-5"
              >
                <div
                  className="h-12 w-1 shrink-0 rounded-full bg-primary dark:bg-cyan-500"
                  aria-hidden
                />
                <div className="min-w-0">
                  <h3 className="font-display text-base font-semibold text-foreground sm:text-lg">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {p.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        <div className="xl:col-span-7">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary dark:text-cyan-400" aria-hidden />
              <h2 className="font-display text-xl font-bold text-foreground md:text-2xl">
                Ongoing courses
              </h2>
            </div>
            <GlowButton href="/academy/courses" variant="secondary" className="shrink-0">
              View all courses
              <ArrowRight size={16} />
            </GlowButton>
          </div>

          <GlassCard className="mt-4 p-0">
            <ul className="divide-y divide-theme-border">
              {ongoingCourses.map((course) => (
                <li key={course.id}>
                  <Link
                    href="/academy/courses"
                    className="flex flex-col gap-1 px-4 py-4 transition-colors hover:bg-accent/5 sm:flex-row sm:items-center sm:justify-between sm:px-5"
                  >
                    <div className="min-w-0">
                      <p className="font-medium text-foreground">{course.title}</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {course.domain} · {course.duration} · {course.mode}
                      </p>
                    </div>
                    <span
                      className={cn(
                        "mt-1 inline-flex w-fit shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase sm:mt-0",
                        course.status === "Published"
                          ? "bg-emerald-500/15 text-emerald-800 dark:text-emerald-300"
                          : "bg-amber-500/15 text-amber-900 dark:text-amber-200"
                      )}
                    >
                      {course.status}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
