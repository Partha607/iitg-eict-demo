"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { GraduationCap, Shield } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowButton } from "@/components/ui/GlowButton";

export default function PortalLoginPage() {
  const router = useRouter();

  const handleLogin = (role: "student" | "admin") => {
    if (role === "admin") {
      router.push("/portal/admin/cms");
    } else {
      router.push("/portal/lms");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <GlassCard glow className="w-full max-w-md">
        <div className="mb-6 flex items-center gap-3">
          <GraduationCap className="h-10 w-10 text-cyan-400" />
          <div>
            <h1 className="font-display text-2xl font-bold text-white">Portal Login</h1>
            <p className="text-sm text-slate-400">Mock authentication — demo only</p>
          </div>
        </div>

        <div className="space-y-4">
          <input
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white"
            placeholder="Email or ID"
            defaultValue="student@demo.iitg.ac.in"
          />
          <input
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white"
            type="password"
            placeholder="Password"
            defaultValue="demo"
          />
        </div>

        <GlowButton className="mt-6 w-full" onClick={() => handleLogin("student")}>
          Sign in as Student
        </GlowButton>
        <GlowButton
          variant="secondary"
          className="mt-3 w-full"
          onClick={() => handleLogin("admin")}
        >
          <Shield size={16} /> Sign in as Staff
        </GlowButton>

        <p className="mt-6 text-center text-sm text-slate-500">
          New applicant?{" "}
          <Link href="/portal/register" className="text-cyan-400 hover:underline">
            Register for a course
          </Link>
        </p>
        <p className="mt-2 text-center text-sm">
          <Link href="/" className="text-slate-500 hover:text-white">
            ← Back to split entry
          </Link>
        </p>
      </GlassCard>
    </div>
  );
}
