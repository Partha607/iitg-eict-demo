"use client";

import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { faculty, type FacultyMember } from "@/data/faculty";
import { committees, associatedFaculty } from "@/data/board";
import { avatarForIndex, images } from "@/lib/images";
import { GlassCard } from "@/components/ui/GlassCard";

const designationOrder = [
  "Principal Investigator",
  "Project Manager",
  "Project Engineer",
  "Associate Project Engineer",
  "Associate Project Scientist",
  "Assistant Project Engineer",
  "Assistant Project Scientist",
  "Office Assistant",
  "Senior Project Technician",
];

function groupByDesignation(members: FacultyMember[]) {
  const groups = new Map<string, FacultyMember[]>();
  for (const m of members) {
    const list = groups.get(m.role) ?? [];
    list.push(m);
    groups.set(m.role, list);
  }
  const ordered: { designation: string; members: FacultyMember[] }[] = [];
  for (const role of designationOrder) {
    const list = groups.get(role);
    if (list?.length) {
      ordered.push({ designation: role, members: list });
      groups.delete(role);
    }
  }
  for (const [designation, list] of groups) {
    ordered.push({ designation, members: list });
  }
  return ordered;
}

export function PeopleDirectory() {
  const groups = groupByDesignation(faculty);

  return (
    <div className="academy-container py-8 md:py-12">
      <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">People</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">
        Team members grouped by designation - administrative leadership, project staff, and
        support personnel at E&ICT Academy IIT Guwahati.
      </p>

      <div className="mt-10 space-y-12">
        {groups.map(({ designation, members }) => (
          <section key={designation}>
            <h2 className="mb-4 border-b border-theme-border pb-2 font-display text-xl font-semibold text-foreground">
              {designation}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {members.map((member, index) => {
                const variant = avatarForIndex(index);
                const placeholder = images.avatars[variant];
                return (
                  <GlassCard
                    key={member.id}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full border-2 border-cyan-400/25 bg-slate-100 dark:bg-slate-800">
                      <Image
                        src={member.image ?? placeholder}
                        alt={member.name}
                        fill
                        className="object-cover"
                        unoptimized={!!member.image}
                        onError={(e) => {
                          e.currentTarget.src = placeholder;
                        }}
                      />
                    </div>
                    <h3 className="font-display font-semibold text-foreground">{member.name}</h3>
                    <p className="text-sm text-cyan-600 dark:text-cyan-400/90">{member.role}</p>
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="mt-3 flex items-center gap-1 text-xs text-muted hover:text-cyan-600 dark:hover:text-cyan-400"
                      >
                        <Mail size={12} /> {member.email}
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 text-muted hover:text-blue-500 dark:hover:text-blue-400"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <Linkedin size={16} />
                      </a>
                    )}
                  </GlassCard>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16 space-y-6">
        <h2 className="font-display text-2xl font-bold text-foreground">
          Governance &amp; Committees
        </h2>
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
