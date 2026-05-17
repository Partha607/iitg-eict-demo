"use client";

import { useState } from "react";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { faculty, type FacultyCategory } from "@/data/faculty";
import { committees, associatedFaculty } from "@/data/board";
import { avatarForIndex, images } from "@/lib/images";
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
      <h1 className="font-display text-4xl font-bold text-foreground">Faculty & Team</h1>
      <p className="mt-2 text-muted">
        Administrative, board, team, and associate faculty - consolidated directory
      </p>

      <div className="mb-8 mt-6 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCat(c)}
            className={`rounded-full px-3 py-1 text-sm ${
              cat === c
                ? "border border-cyan-400/40 bg-cyan-500/20 text-cyan-700 dark:text-cyan-300"
                : "border border-theme-border text-muted"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((member, index) => {
          const variant = avatarForIndex(index);
          const placeholder = images.avatars[variant];
          return (
            <GlassCard key={member.id} className="flex flex-col items-center text-center">
              <div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full border-2 border-cyan-400/20 bg-slate-800 dark:bg-slate-800">
                <Image
                  src={member.image ?? placeholder}
                  alt={member.name}
                  fill
                  className="object-cover"
                  unoptimized={!!member.image}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = placeholder;
                  }}
                />
              </div>
              <h3 className="font-display font-semibold text-foreground">{member.name}</h3>
              <p className="text-sm text-cyan-600 dark:text-cyan-400/80">{member.role}</p>
              <p className="mt-1 text-xs text-muted">{member.category}</p>
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="mt-3 flex items-center gap-1 text-xs text-muted hover:text-cyan-600 dark:hover:text-cyan-400"
                >
                  <Mail size={12} /> {member.email}
                </a>
              )}
              <button
                type="button"
                className="mt-2 text-muted hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </button>
            </GlassCard>
          );
        })}
      </div>

      <div className="mt-16 space-y-6">
        <h2 className="font-display text-2xl font-bold text-foreground">
          Governance &amp; Committees
        </h2>
        <p className="text-sm text-muted">
          From eict.iitg.ac.in board committee page - consolidated under Faculty
        </p>
        {committees.map((c) => (
          <GlassCard key={c.title}>
            <h3 className="font-display text-lg text-foreground">{c.title}</h3>
            <ul className="mt-3 space-y-1 text-sm text-muted">
              {c.members.map((m) => (
                <li key={m}>▸ {m}</li>
              ))}
            </ul>
          </GlassCard>
        ))}
        <GlassCard>
          <h3 className="font-display text-lg text-foreground">Associated Faculty</h3>
          <ul className="mt-3 grid gap-1 text-sm text-muted sm:grid-cols-2">
            {associatedFaculty.map((m) => (
              <li key={m}>▸ {m}</li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </div>
  );
}
