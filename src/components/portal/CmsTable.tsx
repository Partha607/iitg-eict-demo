"use client";

import { useRef, useState } from "react";
import { Plus, Eye, Pencil } from "lucide-react";
import { gsap, registerGsap } from "@/lib/gsap";
import { cmsEntries, type CmsStatus } from "@/data/cms-pages";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function CmsTable() {
  const [rows, setRows] = useState(cmsEntries);
  const [modalOpen, setModalOpen] = useState(false);
  const tableRef = useRef<HTMLTableElement>(null);

  const togglePublish = (id: string) => {
    setRows((prev) =>
      prev.map((r) => {
        if (r.id !== id) return r;
        const next: CmsStatus = r.status === "Draft" ? "Published" : "Draft";
        return { ...r, status: next };
      })
    );
    registerGsap();
    if (tableRef.current) {
      const row = tableRef.current.querySelector(`[data-id="${id}"]`);
      if (row) {
        gsap.fromTo(row, { backgroundColor: "rgba(34,211,238,0.2)" }, {
          backgroundColor: "transparent",
          duration: 0.8,
        });
      }
    }
  };

  return (
    <div className="p-4 md:p-8">
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground md:text-3xl">
            Content Management
          </h1>
          <p className="text-base text-muted-foreground">Manage pages, courses, and news</p>
        </div>
        <GlowButton onClick={() => setModalOpen(true)}>
          <Plus size={18} /> Create Content
        </GlowButton>
      </header>

      <GlassCard className="overflow-x-auto p-0">
        <table ref={tableRef} className="w-full min-w-[640px] text-left text-base">
          <thead>
            <tr className="border-b border-theme-border text-muted-foreground">
              <th className="px-6 py-4 font-semibold">Title</th>
              <th className="px-6 py-4 font-semibold">Type</th>
              <th className="px-6 py-4 font-semibold">Author</th>
              <th className="px-6 py-4 font-semibold">Updated</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.id}
                data-id={row.id}
                className="border-b border-theme-border/60 transition-colors"
              >
                <td className="px-6 py-4 font-medium text-foreground">{row.title}</td>
                <td className="px-6 py-4 text-foreground/85">{row.type}</td>
                <td className="px-6 py-4 text-foreground/85">{row.author}</td>
                <td className="px-6 py-4 text-muted-foreground">{row.updated}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={row.status} />
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="rounded p-1.5 text-muted-foreground hover:bg-accent/10 hover:text-foreground"
                      aria-label="Edit"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      type="button"
                      className="rounded p-1.5 text-muted-foreground hover:bg-accent/10 hover:text-foreground"
                      aria-label="Preview"
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => togglePublish(row.id)}
                      className="rounded px-2 py-1 text-sm font-medium text-cyan-700 hover:bg-cyan-500/10 dark:text-cyan-400"
                    >
                      {row.status === "Draft" ? "Publish" : "Unpublish"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </GlassCard>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <GlassCard className="w-full max-w-md">
            <h2 className="font-display text-lg font-semibold text-foreground">Create Content</h2>
            <div className="mt-4 space-y-3">
              <input
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground"
                placeholder="Title"
              />
              <select className="w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground">
                <option>Page</option>
                <option>Course</option>
                <option>News</option>
              </select>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <GlowButton variant="ghost" onClick={() => setModalOpen(false)}>
                Cancel
              </GlowButton>
              <GlowButton onClick={() => setModalOpen(false)}>Save Draft</GlowButton>
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  );
}
