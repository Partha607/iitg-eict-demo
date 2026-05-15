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
          <h1 className="font-display text-2xl font-bold text-white md:text-3xl">
            Content Management
          </h1>
          <p className="text-slate-400">Manage pages, courses, and news</p>
        </div>
        <GlowButton onClick={() => setModalOpen(true)}>
          <Plus size={18} /> Create Content
        </GlowButton>
      </header>

      <GlassCard className="overflow-x-auto p-0">
        <table ref={tableRef} className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-slate-500">
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Author</th>
              <th className="px-6 py-4">Updated</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.id}
                data-id={row.id}
                className="border-b border-white/5 transition-colors"
              >
                <td className="px-6 py-4 font-medium text-white">{row.title}</td>
                <td className="px-6 py-4 text-slate-400">{row.type}</td>
                <td className="px-6 py-4 text-slate-400">{row.author}</td>
                <td className="px-6 py-4 text-slate-500">{row.updated}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={row.status} />
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="rounded p-1.5 text-slate-400 hover:bg-white/5 hover:text-white"
                      aria-label="Edit"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      type="button"
                      className="rounded p-1.5 text-slate-400 hover:bg-white/5 hover:text-white"
                      aria-label="Preview"
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => togglePublish(row.id)}
                      className="rounded px-2 py-1 text-xs text-cyan-400 hover:bg-cyan-500/10"
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
            <h2 className="font-display text-lg text-white">Create Content</h2>
            <div className="mt-4 space-y-3">
              <input
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white"
                placeholder="Title"
              />
              <select className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white">
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
