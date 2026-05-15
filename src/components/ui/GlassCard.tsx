import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
};

export function GlassCard({ children, className, glow }: GlassCardProps) {
  return (
    <div className={cn("glass-panel p-6", glow && "glow-cyan", className)}>
      {children}
    </div>
  );
}
