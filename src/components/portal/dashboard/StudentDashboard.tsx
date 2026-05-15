"use client";

import Image from "next/image";
import Link from "next/link";
import {
  continueLearning,
  studentActivity,
  studentCourses,
} from "@/data/dashboard-mock";
import { images, getDomainThumbnail } from "@/lib/images";
import { PortalDashboardShell } from "./PortalDashboardShell";
import { StudentRightPanel } from "./DashboardRightPanel";
import { Bell, ChevronRight, GraduationCap, User } from "./DashboardIcons";

export function StudentDashboard() {
  return (
    <PortalDashboardShell
      role="student"
      userName="Student"
      rightPanel={<StudentRightPanel />}
    >
      <section className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-r from-[#0b3d7a] via-[#1a5fad] to-[#0b1f3f] shadow-lg">
        <div className="relative z-10 flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div className="max-w-lg">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#f5d547]">
              Welcome back
            </p>
            <h1 className="mt-1 font-display text-2xl font-bold text-white md:text-3xl">
              Welcome to ECSE Learning Portal
            </h1>
            <p className="mt-2 text-sm text-blue-100/90">
              Access courses, live classes, assignments, and resources for the Department of
              Electronics and Computer Science at IIT Guwahati.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="#courses"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
              >
                Explore Courses <ChevronRight size={16} />
              </Link>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-4 py-2 text-sm text-white hover:bg-white/10"
              >
                <Bell size={16} /> View Announcements
              </button>
            </div>
          </div>
          <div className="relative hidden h-40 w-64 shrink-0 overflow-hidden rounded-xl md:block lg:h-48 lg:w-80">
            <Image src={images.heroAbout} alt="IIT Guwahati campus" fill className="object-cover" />
          </div>
        </div>
      </section>

      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        <div className="relative overflow-hidden rounded-xl border border-emerald-200 bg-white p-5 shadow-sm dark:border-emerald-900/30 dark:bg-slate-800">
          <div className="relative flex gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <User size={28} />
            </div>
            <div>
              <h2 className="font-semibold text-[#1a2b4a] dark:text-slate-100">Teacher Training</h2>
              <p className="mt-1 text-xs text-slate-500">
                Faculty development programmes and FDP modules for educators.
              </p>
              <Link href="#" className="mt-2 inline-flex items-center gap-1 text-sm text-emerald-700 hover:underline">
                View Programs <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-blue-200 bg-white p-5 shadow-sm dark:border-blue-900/30 dark:bg-slate-800">
          <div className="relative flex gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
              <GraduationCap size={28} />
            </div>
            <div>
              <h2 className="font-semibold text-[#1a2b4a] dark:text-slate-100">Student Training</h2>
              <p className="mt-1 text-xs text-slate-500">
                Professional certifications and skill-building courses for students.
              </p>
              <Link href="#" className="mt-2 inline-flex items-center gap-1 text-sm text-blue-700 hover:underline">
                View Programs <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section id="courses" className="mb-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[#1a2b4a] dark:text-slate-100">My Courses</h2>
          <Link href="#" className="text-sm text-blue-600 hover:underline">
            View all courses →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {studentCourses.map((course) => {
            const thumb = getDomainThumbnail(course.thumb);
            const isOngoing = course.status === "Ongoing";
            return (
              <article
                key={course.id}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800"
              >
                {thumb && (
                  <div className="relative h-24 w-full">
                    <Image src={thumb} alt="" fill className="object-cover" />
                  </div>
                )}
                <div className="p-4">
                  <span
                    className={`inline-block rounded px-2 py-0.5 text-[10px] font-semibold ${
                      isOngoing
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {course.status}
                  </span>
                  <h3 className="mt-2 text-sm font-semibold text-[#1a2b4a] dark:text-slate-100">
                    {course.title}
                  </h3>
                  <p className="text-[10px] text-slate-500">{course.instructor}</p>
                  {isOngoing ? (
                    <div className="mt-3">
                      <div className="flex justify-between text-[10px] text-slate-500">
                        <span>Progress</span>
                        <span>{course.progress}% Completed</span>
                      </div>
                      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                  ) : (
                    <p className="mt-2 text-[10px] text-blue-600">Starts {course.startDate}</p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h2 className="mb-4 font-semibold text-[#1a2b4a] dark:text-slate-100">Continue Learning</h2>
          <div className="space-y-4">
            {continueLearning.map((item) => (
              <div key={item.title} className="flex items-center gap-4">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center">
                  <svg className="h-12 w-12 -rotate-90" viewBox="0 0 36 36" aria-hidden>
                    <circle cx="18" cy="18" r="15" fill="none" className="stroke-slate-200" strokeWidth="3" />
                    <circle
                      cx="18"
                      cy="18"
                      r="15"
                      fill="none"
                      className="stroke-blue-600"
                      strokeWidth="3"
                      strokeDasharray={`${item.progress} 100`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute text-[10px] font-bold text-blue-700">{item.progress}%</span>
                </div>
                <p className="text-sm text-[#1a2b4a] dark:text-slate-200">{item.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-semibold text-[#1a2b4a] dark:text-slate-100">Recent Activity</h2>
            <Link href="#" className="text-xs text-blue-600 hover:underline">
              View all
            </Link>
          </div>
          <ul className="space-y-3">
            {studentActivity.map((a) => (
              <li
                key={a.title}
                className="flex gap-3 border-b border-slate-50 pb-3 last:border-0 dark:border-slate-700"
              >
                <span
                  className={`mt-0.5 h-2 w-2 shrink-0 rounded-full ${
                    a.type === "success"
                      ? "bg-emerald-500"
                      : a.type === "grade"
                        ? "bg-amber-500"
                        : "bg-blue-500"
                  }`}
                />
                <div>
                  <p className="text-sm text-[#1a2b4a] dark:text-slate-200">{a.title}</p>
                  <p className="text-[10px] text-slate-400">{a.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </PortalDashboardShell>
  );
}
