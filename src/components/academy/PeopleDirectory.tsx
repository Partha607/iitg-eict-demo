"use client";

import Image from "next/image";
import { Crown, Linkedin, Mail, ShieldCheck, Users } from "lucide-react";
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

const ROLE_KEYWORDS = [
  "Chairperson",
  "Co-Chairperson",
  "Chairman",
  "Co-Chairman",
  "Member Secretary",
  "Member",
];

function parseCommitteeMember(raw: string): { role?: string; name: string; isLead: boolean } {
  const idx = raw.indexOf(":");
  if (idx > -1) {
    const head = raw.slice(0, idx).trim();
    const tail = raw.slice(idx + 1).trim();
    if (ROLE_KEYWORDS.some((k) => head.toLowerCase().startsWith(k.toLowerCase()))) {
      const isLead = /chair|secretary/i.test(head);
      return { role: head, name: tail, isLead };
    }
  }
  return { name: raw, isLead: false };
}

function committeeIcon(title: string) {
  if (/council/i.test(title)) return Crown;
  if (/advisory/i.test(title)) return ShieldCheck;
  return Users;
}

export function PeopleDirectory() {
  const groups = groupByDesignation(faculty);

  return (
    <div className="academy-container py-8 md:py-12">
        <h1 className="text-on-watermark font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
          People
        </h1>
        <p className="text-on-watermark mt-2 max-w-2xl text-base text-foreground/85 sm:text-lg">
          Team members grouped by designation - administrative leadership, project staff, and
          support personnel at E&amp;ICT Academy IIT Guwahati.
        </p>

        <div className="mt-10 space-y-12">
          {groups.map(({ designation, members }) => (
            <section key={designation}>
              <h2 className="text-on-watermark mb-4 border-b border-theme-border pb-2 font-display text-xl font-semibold text-foreground sm:text-2xl">
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
                      <h3 className="font-display text-base font-semibold text-foreground sm:text-lg">
                        {member.name}
                      </h3>
                      <p className="text-sm text-cyan-600 sm:text-base dark:text-cyan-400/90">
                        {member.role}
                      </p>
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="mt-3 flex items-center gap-1 text-sm text-muted hover:text-cyan-600 dark:hover:text-cyan-400"
                        >
                          <Mail size={14} /> {member.email}
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
                          <Linkedin size={18} />
                        </a>
                      )}
                    </GlassCard>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-20">
          <h2 className="text-on-watermark font-display text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            Governance &amp; Committees
          </h2>
          <p className="text-on-watermark mt-2 max-w-3xl text-base text-foreground/85 sm:text-lg">
            Strategic oversight from MeitY, IIT Guwahati, industry and academia partners.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {committees.map((c) => {
              const Icon = committeeIcon(c.title);
              return (
                <GlassCard key={c.title} className="h-full">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300">
                      <Icon size={22} aria-hidden />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground sm:text-xl">
                        {c.title}
                      </h3>
                      <p className="text-sm text-muted sm:text-base">
                        {c.members.length} member{c.members.length === 1 ? "" : "s"}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {c.members.map((raw) => {
                      const { role, name, isLead } = parseCommitteeMember(raw);
                      return (
                        <li
                          key={raw}
                          className={`rounded-lg border px-3 py-2.5 transition-colors ${
                            isLead
                              ? "border-cyan-400/40 bg-cyan-500/8"
                              : "border-theme-border/60 bg-card/40"
                          }`}
                        >
                          {role && (
                            <span
                              className={`mr-2 inline-block rounded-full px-2 py-0.5 text-xs font-semibold uppercase tracking-wide sm:text-sm ${
                                isLead
                                  ? "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300"
                                  : "bg-secondary text-foreground/80"
                              }`}
                            >
                              {role}
                            </span>
                          )}
                          <span className="text-base text-foreground/90 sm:text-lg">{name}</span>
                        </li>
                      );
                    })}
                  </ul>
                </GlassCard>
              );
            })}
          </div>

          <GlassCard className="mt-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-500/10 text-amber-700 dark:text-amber-300">
                <Users size={22} aria-hidden />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground sm:text-xl">
                  Associated Faculty
                </h3>
                <p className="text-sm text-muted sm:text-base">
                  {associatedFaculty.length} affiliated faculty members
                </p>
              </div>
            </div>
            <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {associatedFaculty.map((m) => (
                <li
                  key={m}
                  className="rounded-lg border border-theme-border/60 bg-card/40 px-3 py-2 text-base text-foreground/90 sm:text-lg"
                >
                  {m}
                </li>
              ))}
            </ul>
          </GlassCard>
        </section>
    </div>
  );
}
