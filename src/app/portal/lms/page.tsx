import { StudentDashboard } from "@/components/portal/dashboard/StudentDashboard";
import { BackToLoginButton } from "@/components/portal/BackToLoginButton";

export default function LmsPage() {
  return (
    <div className="text-base sm:text-lg">
      <div className="sticky top-0 z-40 flex items-center justify-between gap-3 border-b border-theme-border bg-card/85 px-4 py-3 backdrop-blur-md sm:px-6">
        <BackToLoginButton />
        <span className="hidden text-sm font-medium text-muted sm:inline sm:text-base">
          Student LMS
        </span>
      </div>
      <StudentDashboard />
    </div>
  );
}
