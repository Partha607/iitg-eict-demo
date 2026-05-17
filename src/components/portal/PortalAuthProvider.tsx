"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  clearPortalRole,
  getPortalRole,
  type PortalRole,
  setPortalRole as persistRole,
} from "@/lib/portal-auth";

type PortalAuthContextValue = {
  role: PortalRole | null;
  mounted: boolean;
  signIn: (role: PortalRole) => void;
  signOut: () => void;
};

const PortalAuthContext = createContext<PortalAuthContextValue | null>(null);

export function PortalAuthProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<PortalRole | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setRole(getPortalRole());
    setMounted(true);
  }, []);

  const signIn = useCallback((next: PortalRole) => {
    persistRole(next);
    setRole(next);
  }, []);

  const signOut = useCallback(() => {
    clearPortalRole();
    setRole(null);
  }, []);

  const value = useMemo(
    () => ({ role, mounted, signIn, signOut }),
    [role, mounted, signIn, signOut]
  );

  return (
    <PortalAuthContext.Provider value={value}>{children}</PortalAuthContext.Provider>
  );
}

export function usePortalAuth() {
  const ctx = useContext(PortalAuthContext);
  if (!ctx) {
    throw new Error("usePortalAuth must be used within PortalAuthProvider");
  }
  return ctx;
}
