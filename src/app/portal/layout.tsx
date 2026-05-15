"use client";

import { usePathname } from "next/navigation";
import { PortalSidebar } from "@/components/layouts/PortalSidebar";

const minimalRoutes = ["/portal/login", "/portal/register"];
const dashboardRoutes = ["/portal/lms", "/portal/staff"];

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const minimal = minimalRoutes.includes(pathname);
  const isDashboard = dashboardRoutes.includes(pathname);

  if (minimal || isDashboard) {
    return <main className="min-h-screen">{children}</main>;
  }

  return (
    <div className="flex min-h-screen">
      <PortalSidebar />
      <main className="flex-1 overflow-auto pb-20 md:pb-0">{children}</main>
    </div>
  );
}
