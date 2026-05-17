const STORAGE_KEY = "eict_portal_role";

export type PortalRole = "student" | "staff" | "admin";

export function getPortalRole(): PortalRole | null {
  if (typeof window === "undefined") return null;
  const value = sessionStorage.getItem(STORAGE_KEY);
  if (value === "student" || value === "staff" || value === "admin") {
    return value;
  }
  return null;
}

export function setPortalRole(role: PortalRole): void {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(STORAGE_KEY, role);
  }
}

export function clearPortalRole(): void {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(STORAGE_KEY);
  }
}

export const ADMIN_HOME = "/portal/admin/enquiries";

export const adminNavHrefs = ["/portal/admin/cms", "/portal/admin/enquiries"] as const;

export function isAdminRoute(pathname: string): boolean {
  return pathname.startsWith("/portal/admin");
}
