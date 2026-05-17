import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  style?: React.CSSProperties;
};

export function GlassCard({ children, className, glow, style }: GlassCardProps) {
  return (
    <Card
      className={cn("glass-panel border-theme-border p-6 shadow-sm", glow && "glow-cyan", className)}
      style={style}
    >
      {children}
    </Card>
  );
}
