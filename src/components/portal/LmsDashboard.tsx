"use client";

import { useState } from "react";
import { Bell, Calendar, Video } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { StatusBadge } from "@/components/ui/StatusBadge";
import {
  announcements,
  calendarEvents,
  gradingMatrix,
  lmsCourses,
} from "@/data/lms-mock";

export function LmsDashboard() {
  const [profView, setProfView] = useState(false);
  const active = lmsCourses[0];

  return (
    <div className="p-4 md:p-8">
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-bold text-white md:text-3xl">
            {profView ? "Grading Matrix" : "My Learning"}
          </h1>
          <p className="text-slate-400">
            {profView ? "Faculty view — Embedded Systems" : "Welcome back, Student"}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-400">
            <input
              type="checkbox"
              checked={profView}
              onChange={(e) => setProfView(e.target.checked)}
              className="rounded border-white/20"
            />
            Prof. view
          </label>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
            AS
          </div>
        </div>
      </header>

      {profView ? (
        <GlassCard>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-500">
                <th className="pb-3">Student</th>
                <th className="pb-3">Assignment</th>
                <th className="pb-3">Score</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {gradingMatrix.map((row) => (
                <tr key={row.student} className="border-b border-white/5">
                  <td className="py-3 text-white">{row.student}</td>
                  <td className="py-3 text-slate-400">{row.assignment}</td>
                  <td className="py-3 text-cyan-400">
                    {row.score ?? "—"}
                  </td>
                  <td className="py-3">
                    <StatusBadge status={row.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </GlassCard>
      ) : (
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-1">
            <GlassCard>
              <h2 className="mb-4 font-display text-sm font-semibold text-slate-400">
                MY COURSES
              </h2>
              {lmsCourses.map((c) => (
                <div
                  key={c.id}
                  className="mb-3 rounded-lg border border-white/5 p-3 last:mb-0 hover:border-cyan-400/30"
                >
                  <p className="font-medium text-white">{c.title}</p>
                  <p className="text-xs text-slate-500">{c.instructor}</p>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full bg-cyan-400"
                      style={{ width: `${c.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </GlassCard>
            <GlassCard>
              <h2 className="mb-3 flex items-center gap-2 font-display text-sm text-slate-400">
                <Video size={16} /> Live Classes
              </h2>
              <p className="text-sm text-white">Embedded Systems Lab</p>
              <p className="text-xs text-cyan-400">Today, 10:00 AM</p>
            </GlassCard>
          </div>

          <GlassCard glow className="lg:col-span-1">
            <h2 className="mb-6 font-display text-lg text-white">{active.title}</h2>
            <div className="flex justify-center">
              <ProgressRing progress={active.progress} size={140} />
            </div>
            <p className="mt-6 text-center text-sm text-slate-400">
              Instructor: {active.instructor}
            </p>
            <p className="text-center text-xs text-cyan-400">
              Next: {active.nextClass}
            </p>
          </GlassCard>

          <div className="space-y-4 lg:col-span-1">
            <GlassCard>
              <h2 className="mb-4 flex items-center gap-2 font-display text-sm text-slate-400">
                <Bell size={16} /> Announcements
              </h2>
              {announcements.map((a) => (
                <div key={a.title} className="mb-3 border-b border-white/5 pb-3 last:mb-0">
                  <p className={`text-sm ${a.urgent ? "text-cyan-300" : "text-white"}`}>
                    {a.title}
                  </p>
                  <p className="text-xs text-slate-500">{a.date}</p>
                </div>
              ))}
            </GlassCard>
            <GlassCard>
              <h2 className="mb-4 flex items-center gap-2 font-display text-sm text-slate-400">
                <Calendar size={16} /> May 2026
              </h2>
              <div className="grid grid-cols-4 gap-2 text-center text-xs">
                {calendarEvents.map((e) => (
                  <div
                    key={e.day}
                    className="rounded-lg border border-cyan-400/30 bg-cyan-500/10 p-2"
                  >
                    <p className="font-bold text-cyan-300">{e.day}</p>
                    <p className="mt-1 text-slate-400">{e.title}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      )}
    </div>
  );
}

