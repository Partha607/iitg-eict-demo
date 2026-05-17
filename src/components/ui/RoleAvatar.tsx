import { cn } from "@/lib/utils";
import { GraduationCap, Presentation } from "lucide-react";

export type PortalRole = "student" | "staff";

const sizeMap = {
  sm: { box: "h-8 w-8", icon: 14, ring: "ring-2" },
  md: { box: "h-10 w-10", icon: 18, ring: "ring-2" },
  lg: { box: "h-16 w-16", icon: 28, ring: "ring-[3px]" },
  xl: { box: "h-24 w-24", icon: 40, ring: "ring-[3px]" },
};

type RoleAvatarProps = {
  role: PortalRole;
  size?: keyof typeof sizeMap;
  className?: string;
  showRing?: boolean;
};

/** Stylized profile badge - not a photo placeholder */
export function RoleAvatar({
  role,
  size = "md",
  className,
  showRing = true,
}: RoleAvatarProps) {
  const s = sizeMap[size];
  const isStudent = role === "student";

  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center overflow-hidden rounded-full",
        s.box,
        showRing && s.ring,
        isStudent
          ? "bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 ring-cyan-300/50 dark:ring-cyan-400/30"
          : "bg-gradient-to-br from-slate-700 via-[#1a4d8c] to-indigo-900 ring-amber-300/40 dark:ring-amber-400/20",
        className
      )}
      aria-hidden={!className?.includes("aria-label")}
    >
      {/* Decorative orbit rings */}
      <svg
        className="absolute inset-0 h-full w-full opacity-30"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden
      >
        <circle cx="24" cy="24" r="20" stroke="white" strokeWidth="0.5" strokeDasharray="3 4" />
        <circle cx="24" cy="24" r="14" stroke="white" strokeWidth="0.5" opacity="0.6" />
      </svg>

      {isStudent ? (
        <>
          <GraduationCap
            className="relative z-10 text-white drop-shadow-sm"
            size={s.icon}
            strokeWidth={2}
          />
          <span className="absolute bottom-1 right-1 z-10 flex h-3 w-3 items-center justify-center rounded-full bg-[#f5d547] text-[6px] font-bold text-[#0b1f3f] sm:h-3.5 sm:w-3.5 sm:text-[7px]">
            S
          </span>
        </>
      ) : (
        <>
          <Presentation
            className="relative z-10 text-amber-100 drop-shadow-sm"
            size={s.icon}
            strokeWidth={2}
          />
          <span className="absolute bottom-1 right-1 z-10 flex h-3 w-3 items-center justify-center rounded-full bg-amber-400 text-[6px] font-bold text-[#0b1f3f] sm:h-3.5 sm:w-3.5 sm:text-[7px]">
            ★
          </span>
        </>
      )}
    </div>
  );
}

/** Login / marketing preview card for each portal role */
export function RolePortalPreview({
  role,
  label,
  description,
}: {
  role: PortalRole;
  label: string;
  description: string;
}) {
  const isStudent = role === "student";

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden rounded-xl border p-4 text-center",
        isStudent
          ? "border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent dark:from-cyan-500/15"
          : "border-indigo-400/30 bg-gradient-to-br from-indigo-500/10 via-slate-500/5 to-transparent dark:from-indigo-500/15"
      )}
    >
      <div
        className={cn(
          "absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-20 blur-2xl",
          isStudent ? "bg-cyan-400" : "bg-indigo-500"
        )}
      />
      <RoleAvatar role={role} size="xl" showRing />
      <p className="relative mt-3 text-sm font-semibold text-foreground">{label}</p>
      <p className="relative mt-1 text-[10px] leading-snug text-muted">{description}</p>
      {isStudent ? (
        <div className="relative mt-3 flex gap-1">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-1 w-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-60"
              style={{ opacity: 0.4 + i * 0.2 }}
            />
          ))}
        </div>
      ) : (
        <div className="relative mt-3 flex items-center gap-1 text-[10px] font-medium text-amber-600 dark:text-amber-400">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
          Faculty &amp; admin tools
        </div>
      )}
    </div>
  );
}
