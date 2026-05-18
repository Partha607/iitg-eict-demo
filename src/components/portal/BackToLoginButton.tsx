"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToLoginButton({ className }: { className?: string }) {
  return (
    <Link
      href="/portal/login"
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border border-theme-border bg-card/60 px-4 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-cyan-500/10 hover:text-cyan-700 sm:text-lg dark:hover:text-cyan-400",
        className
      )}
    >
      <ArrowLeft size={20} aria-hidden />
      Back to Login
    </Link>
  );
}
