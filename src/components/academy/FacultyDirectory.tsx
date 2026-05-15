"use client";

import { useState } from "react";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { faculty, type FacultyCategory } from "@/data/faculty";
import { committees, associatedFaculty } from "@/data/board";
import { GlassCard } from "@/components/ui/GlassCard";

const categories: (FacultyCategory | "All")[] = [
  "All",
  "Administrative",
  "Board",
  "Team",
  "Associate",
  "Past",
];

export function FacultyDirectory() {
  const [cat, setCat] = useState<FacultyCategory | "All">("All");
  const filtered =
    cat === "All" ? faculty : faculty.filter((f) => f.category === cat);

  return (
    <div>
      <h1 className="font-display text-4xl font-bold text-white">Faculty & Team</h1>
      <p className="mt-2 text-slate-400">
        Administrative, board, team, and associate faculty — consolidated directory
      </p>

      <div className="mb-8 mt-6 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCat(c)}
            className={`rounded-full px-3 py-1 text-sm ${
              cat === c
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40"
                : "border border-white/10 text-slate-400"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((member) => (
          <GlassCard key={member.id} className="flex flex-col items-center text-center">
            <div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full border-2 border-cyan-400/20 bg-slate-800">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              ) : (
                <span className="flex h-full items-center justify-center text-2xl text-slate-500">
                  {member.name.charAt(0)}
                </span>
              )}
            </div>
            <h3 className="font-display font-semibold text-white">{member.name}</h3>
            <p className="text-sm text-cyan-400/80">{member.role}</p>
            <p className="mt-1 text-xs text-slate-500">{member.category}</p>
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="mt-3 flex items-center gap-1 text-xs text-slate-400 hover:text-cyan-400"
              >
                <Mail size={12} /> {member.email}
              </a>
            )}
            <button
              type="button"
              className="mt-2 text-slate-500 hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </button>
          </GlassCard>
        ))}
      </div>

      <div className="mt-16 space-y-6">
        <h2 className="font-display text-2xl font-bold text-white">Governance &amp; Committees</h2>
        <p className="text-sm text-slate-500">
          From eict.iitg.ac.in board committee page — consolidated under Faculty
        </p>
        {committees.map((c) => (
          <GlassCard key={c.title}>
            <h3 className="font-display text-lg text-white">{c.title}</h3>
            <ul className="mt-3 space-y-1 text-sm text-slate-400">
              {c.members.map((m) => (
                <li key={m}>▸ {m}</li>
              ))}
            </ul>
          </GlassCard>
        ))}
        <GlassCard>
          <h3 className="font-display text-lg text-white">Associated Faculty</h3>
          <ul className="mt-3 grid gap-1 text-sm text-slate-400 sm:grid-cols-2">
            {associatedFaculty.map((m) => (
              <li key={m}>▸ {m}</li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </div>
  );
}

