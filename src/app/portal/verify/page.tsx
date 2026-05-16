"use client";

import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowButton } from "@/components/ui/GlowButton";

export default function VerifyCertificatePage() {
  const [certificateId, setCertificateId] = useState("");
  const [status, setStatus] = useState<"idle" | "checking" | "demo">("idle");

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certificateId.trim()) return;
    setStatus("checking");
    setTimeout(() => setStatus("demo"), 800);
  };

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col justify-center px-4 py-16">
        <GlassCard glow>
          <div className="mb-6 flex items-center gap-3">
            <ShieldCheck className="text-cyan-600 dark:text-cyan-400" size={28} />
            <div>
              <h1 className="font-display text-2xl font-bold text-foreground">
                Verify Certificate
              </h1>
              <p className="text-sm text-muted">
                Enter your certificate ID to confirm authenticity
              </p>
            </div>
          </div>

          <form onSubmit={handleVerify} className="space-y-4">
            <label className="block text-sm font-medium text-foreground">
              Certificate ID
              <input
                type="text"
                value={certificateId}
                onChange={(e) => {
                  setCertificateId(e.target.value);
                  setStatus("idle");
                }}
                placeholder="e.g. EICT-G-2026-XXXX"
                className="mt-1.5 w-full rounded-lg border border-theme-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
              />
            </label>
            <GlowButton type="submit" className="w-full">
              {status === "checking" ? "Verifying…" : "Verify"}
            </GlowButton>
          </form>

          {status === "demo" && (
            <p className="mt-4 rounded-lg border border-cyan-400/20 bg-cyan-500/5 p-3 text-sm text-foreground/90">
              Demo mode: connect this form to your certificate registry API. ID &quot;
              {certificateId}&quot; would be validated against E&ICT Academy records.
            </p>
          )}
        </GlassCard>
    </div>
  );
}
