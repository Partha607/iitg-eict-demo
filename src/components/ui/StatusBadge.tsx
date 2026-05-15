import { cn } from "@/lib/utils";

type StatusBadgeProps = {
  status: "Draft" | "Published" | "Upcoming" | "Archived" | string;
  className?: string;
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const colors: Record<string, string> = {
    Draft: "bg-amber-500/20 text-amber-300 border-amber-400/30",
    Published: "bg-cyan-500/20 text-cyan-300 border-cyan-400/30",
    Upcoming: "bg-blue-500/20 text-blue-300 border-blue-400/30",
    Archived: "bg-slate-500/20 text-slate-400 border-slate-500/30",
    Graded: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
    Pending: "bg-amber-500/20 text-amber-300 border-amber-400/30",
  };

  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium",
        colors[status] ?? "bg-slate-500/20 text-slate-300 border-slate-500/30",
        className
      )}
    >
      {status}
    </span>
  );
}
