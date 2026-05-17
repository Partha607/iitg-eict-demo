"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 320;

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
      className={cn(
        "fixed bottom-6 right-6 z-[60] h-11 w-11 rounded-full border-theme-border bg-card/95 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-accent/50 hover:bg-accent/10",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <ArrowUp className="h-5 w-5" aria-hidden />
    </Button>
  );
}
