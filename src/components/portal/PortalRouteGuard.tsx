"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { isAdminRoute } from "@/lib/portal-auth";
import { usePortalAuth } from "@/components/portal/PortalAuthProvider";
import { normalizePath } from "@/lib/utils";

export function PortalRouteGuard({ children }: { children: React.ReactNode }) {
  const pathname = normalizePath(usePathname());
  const router = useRouter();
  const { role, mounted } = usePortalAuth();

  useEffect(() => {
    if (!mounted) return;
    if (isAdminRoute(pathname) && role !== "admin") {
      router.replace("/portal/login");
    }
  }, [mounted, pathname, role, router]);

  if (!mounted && isAdminRoute(pathname)) {
    return null;
  }

  if (isAdminRoute(pathname) && role !== "admin") {
    return null;
  }

  return <>{children}</>;
}
