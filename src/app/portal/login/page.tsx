"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Shield } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { Logo } from "@/components/ui/Logo";
import { RolePortalPreview } from "@/components/ui/RoleAvatar";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export default function PortalLoginPage() {
  const router = useRouter();

  const handleLogin = (role: "student" | "admin") => {
    if (role === "admin") {
      router.push("/portal/staff");
    } else {
      router.push("/portal/lms");
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between px-6 py-4">
        <Logo href="/" />
        <ThemeToggle />
      </header>
      <div className="flex flex-1 items-center justify-center p-4">
        <GlassCard glow className="w-full max-w-md">
          <div className="mb-6">
            <h1 className="font-display text-2xl font-bold text-foreground">Portal Login</h1>
            <p className="text-sm text-muted">Mock authentication — demo only</p>
          </div>

          <div className="mb-6 grid grid-cols-2 gap-3">
            <RolePortalPreview
              role="student"
              label="Student LMS"
              description="Courses, assignments, live classes & grades"
            />
            <RolePortalPreview
              role="staff"
              label="Staff Portal"
              description="Teaching tools, grading & course management"
            />
          </div>

          <div className="space-y-4">
            <input
              className="w-full rounded-lg border border-theme-border bg-theme-card px-4 py-3 text-foreground"
              placeholder="Email or ID"
              defaultValue="student@demo.iitg.ac.in"
            />
            <input
              className="w-full rounded-lg border border-theme-border bg-theme-card px-4 py-3 text-foreground"
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

          <p className="mt-6 text-center text-sm text-muted">
            New applicant?{" "}
            <Link href="/portal/register" className="text-cyan-600 hover:underline dark:text-cyan-400">
              Register for a course
            </Link>
          </p>
          <p className="mt-2 text-center text-sm">
            <Link href="/" className="text-muted hover:text-foreground">
              ← Back to split entry
            </Link>
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
