"use client";

import { usePathname } from "next/navigation";
import { PortalSidebar } from "@/components/layouts/PortalSidebar";
import { PortalAuthProvider } from "@/components/portal/PortalAuthProvider";
import { PortalRouteGuard } from "@/components/portal/PortalRouteGuard";
import { isAdminRoute } from "@/lib/portal-auth";
import { normalizePath } from "@/lib/utils";

const minimalRoutes = ["/portal/login", "/portal/register"];
const dashboardRoutes = ["/portal/lms", "/portal/staff"];

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PortalAuthProvider>
      <PortalLayoutInner>{children}</PortalLayoutInner>
    </PortalAuthProvider>
  );
}

function PortalLayoutInner({ children }: { children: React.ReactNode }) {
  const pathname = normalizePath(usePathname());
  const minimal = minimalRoutes.includes(pathname);
  const isDashboard = dashboardRoutes.includes(pathname);
  const adminSection = isAdminRoute(pathname);

  if (minimal || isDashboard) {
    return <main className="min-h-screen">{children}</main>;
  }

  if (adminSection) {
    return (
      <PortalRouteGuard>
        <div className="flex min-h-screen">
          <PortalSidebar />
          <main className="flex-1 overflow-auto pb-20 md:pb-0">{children}</main>
        </div>
      </PortalRouteGuard>
    );
  }

  return (
    <div className="flex min-h-screen">
      <PortalSidebar />
      <main className="flex-1 overflow-auto pb-20 md:pb-0">{children}</main>
    </div>
  );
}
