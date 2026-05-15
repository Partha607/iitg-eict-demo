import { cn } from "@/lib/utils";

type StatusBadgeProps = {
  status: "Draft" | "Published" | "Upcoming" | "Archived" | string;
  className?: string;
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const colors: Record<string, string> = {
    Draft: "bg-amber-500/20 text-amber-700 border-amber-400/30 dark:text-amber-300 status-glow-draft",
    Published:
      "bg-emerald-500/15 text-emerald-700 border-emerald-400/30 dark:text-cyan-300 dark:border-cyan-400/30 status-glow-published",
    Upcoming: "bg-blue-500/20 text-blue-700 border-blue-400/30 dark:text-blue-300 status-glow-info",
    Archived: "bg-slate-500/20 text-slate-600 border-slate-400/30 dark:text-slate-400",
    Graded: "bg-emerald-500/20 text-emerald-700 border-emerald-400/30 dark:text-emerald-300 status-glow-published",
    Pending: "bg-amber-500/20 text-amber-700 border-amber-400/30 dark:text-amber-300 status-glow-draft",
  };

  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium",
        colors[status] ?? "bg-slate-500/20 text-slate-600 border-slate-400/30 dark:text-slate-300",
        className
      )}
    >
      {status}
    </span>
  );
}
