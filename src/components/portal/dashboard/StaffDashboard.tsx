"use client";

import Link from "next/link";
import {
  staffActivity,
  staffAnnouncements,
  staffAssignments,
  staffCalendarEvents,
  staffCourses,
  staffDiscussions,
  staffGrades,
  staffLiveClasses,
  staffQuizzes,
  staffResources,
  staffStats,
} from "@/data/dashboard-mock";
import { DashboardIcon } from "./DashboardIcons";
import { WelcomeIllustration } from "./WelcomeIllustration";
import { PortalDashboardShell } from "./PortalDashboardShell";
import { StaffRightPanel } from "./DashboardRightPanel";
import { StaffCoursesWidget, StaffListWidget } from "./StaffWidgetGrid";

export function StaffDashboard() {
  return (
    <PortalDashboardShell
      role="staff"
      userName="Dr. P. K. Bora"
      rightPanel={<StaffRightPanel activity={staffActivity} />}
    >
      <section className="mb-6 flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#1a2b4a] dark:text-slate-100">
            Welcome back, Dr. P. K. Bora
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage courses, assignments, and student engagement from your dashboard.
          </p>
        </div>
        <div className="hidden shrink-0 md:block">
          <WelcomeIllustration />
        </div>
      </section>

      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {staffStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800"
          >
            <div className="mb-2 flex items-center justify-between">
              <DashboardIcon name={stat.icon} className="text-blue-600" />
              <Link href="#" className="text-[10px] text-blue-600 hover:underline">
                View all
              </Link>
            </div>
            <p className="text-2xl font-bold text-[#1a2b4a] dark:text-slate-100">{stat.count}</p>
            <p className="text-xs text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="space-y-4">
          <StaffCoursesWidget courses={staffCourses} />
          <StaffListWidget
            title="Assignments"
            createLabel="Create New Assignment"
            showGrade
            items={staffAssignments.map((a) => ({ title: a.title, meta: `Due ${a.due}` }))}
          />
          <StaffListWidget
            title="Discussions"
            createLabel="Create New Discussion"
            items={staffDiscussions.map((d) => ({
              title: d.title,
              meta: `${d.posts} posts`,
              sub: `Last active ${d.last}`,
            }))}
          />
        </div>

        <div className="space-y-4">
          <StaffListWidget
            title="Live Classes"
            items={staffLiveClasses.map((c) => ({
              title: c.title,
              meta: `${c.date} · ${c.time}`,
            }))}
          />
          <StaffListWidget
            title="Quizzes"
            createLabel="Create New Quiz"
            showGrade
            items={staffQuizzes.map((q) => ({ title: q.title, meta: `Due ${q.due}` }))}
          />
          <StaffListWidget
            title="Resources"
            createLabel="Upload New Resource"
            resource
            items={staffResources.map((r) => ({
              title: r.name,
              meta: `${r.type} · ${r.size}`,
            }))}
          />
        </div>

        <div className="space-y-4">
          <StaffListWidget
            title="Announcements"
            createLabel="Create New Announcement"
            items={staffAnnouncements.map((a) => ({ title: a.title, meta: a.date }))}
          />
          <StaffListWidget
            title="Grades"
            createLabel="Create New Gradebook"
            items={staffGrades.map((g) => ({ title: g.title, meta: `Published ${g.published}` }))}
          />
          <StaffListWidget
            title="Calendar"
            createLabel="Create New Event"
            items={staffCalendarEvents.map((e) => ({ title: e.title, meta: e.range }))}
          />
        </div>
      </div>
    </PortalDashboardShell>
  );
}
