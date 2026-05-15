import Link from "next/link";
import { cn } from "@/lib/utils";

type GlowButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function GlowButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
  disabled,
}: GlowButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all",
    variant === "primary" &&
      "border border-cyan-400/40 bg-gradient-to-r from-cyan-500/25 to-blue-500/25 text-cyan-800 hover:shadow-[0_0_24px_rgba(34,211,238,0.25)] dark:text-cyan-300 dark:hover:from-cyan-500/30 dark:hover:to-blue-500/30",
    variant === "secondary" &&
      "bg-blue-500/15 text-blue-300 border border-blue-400/30 hover:bg-blue-500/25",
    variant === "ghost" &&
      "text-slate-300 border border-white/10 hover:border-cyan-400/30 hover:text-cyan-300",
    disabled && "opacity-50 pointer-events-none",
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={styles}>
      {children}
    </button>
  );
}
