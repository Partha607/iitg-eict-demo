"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Shield, UserCircle } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { Logo } from "@/components/ui/Logo";
import { RolePortalPreview } from "@/components/ui/RoleAvatar";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { usePortalAuth } from "@/components/portal/PortalAuthProvider";
import { ADMIN_HOME } from "@/lib/portal-auth";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PortalLoginPage() {
  const router = useRouter();
  const { signIn } = usePortalAuth();

  const handleLogin = (role: "student" | "staff" | "admin") => {
    signIn(role);
    if (role === "admin") {
      router.push(ADMIN_HOME);
    } else if (role === "staff") {
      router.push("/portal/staff");
    } else {
      router.push("/portal/lms");
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="absolute right-4 top-4 z-10 sm:right-6 sm:top-6">
        <ThemeToggle />
      </div>
      <div className="flex flex-col items-center px-4 pt-10 sm:pt-14">
        <Logo
          href="/"
          imageClassName="h-[7.8rem] w-auto max-w-[min(100%,32rem)] object-contain object-center sm:h-[9rem] md:h-[10.4rem] lg:h-[11.7rem]"
        />
      </div>
      <div className="flex flex-1 items-center justify-center p-4 pt-8">
        <GlassCard glow className="w-full max-w-md">
          <div className="mb-6">
            <h1 className="font-display text-3xl font-bold text-foreground">Portal Login</h1>
            <p className="mt-1 text-base text-muted-foreground">
              Demo sign-in - choose your role below
            </p>
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
            <div className="space-y-2">
              <Label htmlFor="portal-email">Email or ID</Label>
              <Input id="portal-email" defaultValue="student@demo.iitg.ac.in" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="portal-password">Password</Label>
              <Input id="portal-password" type="password" defaultValue="demo" />
            </div>
          </div>

          <GlowButton className="mt-6 w-full" onClick={() => handleLogin("student")}>
            <UserCircle size={18} aria-hidden />
            Sign in as Student
          </GlowButton>
          <GlowButton
            variant="secondary"
            className="mt-3 w-full"
            onClick={() => handleLogin("staff")}
          >
            Sign in as Staff
          </GlowButton>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-theme-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-card px-2 text-muted-foreground">Administration</span>
            </div>
          </div>

          <GlowButton
            variant="ghost"
            className="w-full border border-accent/30 bg-accent/5 hover:bg-accent/10"
            onClick={() => handleLogin("admin")}
          >
            <Shield size={18} aria-hidden />
            Sign in as Admin
          </GlowButton>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Admins access CMS and enquiry management only.
          </p>

          <p className="mt-6 text-center text-base text-muted-foreground">
            New applicant?{" "}
            <Link
              href="/portal/register"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Register for a course
            </Link>
          </p>
          <p className="mt-2 text-center text-base">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              ← Back to split entry
            </Link>
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
