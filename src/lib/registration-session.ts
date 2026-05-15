const SESSION_KEY = "eict_registration_session";
const TTL_MS = 45 * 60 * 1000;

export type RegistrationSession = {
  expiresAt: number;
  step: number;
  startedAt: number;
};

export function startRegistrationSession(): RegistrationSession {
  const session: RegistrationSession = {
    startedAt: Date.now(),
    expiresAt: Date.now() + TTL_MS,
    step: 1,
  };
  if (typeof window !== "undefined") {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }
  return session;
}

export function getRegistrationSession(): RegistrationSession | null {
  if (typeof window === "undefined") return null;
  const raw = sessionStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as RegistrationSession;
  } catch {
    return null;
  }
}

export function updateRegistrationStep(step: number): void {
  const session = getRegistrationSession();
  if (!session) return;
  session.step = step;
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function clearRegistrationSession(): void {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(SESSION_KEY);
  }
}

export function getRemainingMs(session: RegistrationSession): number {
  return Math.max(0, session.expiresAt - Date.now());
}

export function formatCountdown(ms: number): string {
  const totalSec = Math.floor(ms / 1000);
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

export const REGISTRATION_TTL_MINUTES = 45;
