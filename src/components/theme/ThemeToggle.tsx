"use client";

import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();
  const isDark = theme === "dark";

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className={cn(
        "border-theme-border bg-card/80 text-muted hover:border-accent/40 hover:bg-accent/10 hover:text-accent",
        className
      )}
      aria-label={
        isDark ? "Switch to Old Money light theme" : "Switch to dark theme"
      }
      title={isDark ? "Old Money (light)" : "Dark mode"}
    >
      {mounted ? (
        isDark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />
      ) : (
        <span className="h-[18px] w-[18px]" />
      )}
    </Button>
  );
}
