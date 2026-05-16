import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  style?: React.CSSProperties;
};

export function GlassCard({ children, className, glow, style }: GlassCardProps) {
  return (
    <div className={cn("glass-panel p-6", glow && "glow-cyan", className)} style={style}>
      {children}
    </div>
  );
}
