import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Strip a trailing slash from a pathname (except for the root `/`).
 *
 * Required because `next.config.ts` sets `trailingSlash: true` for the static
 * export, which makes `usePathname()` return `"/academy/"` rather than
 * `"/academy"`. Every pathname-equality check in the app should pass the value
 * through this normalizer first.
 */
export function normalizePath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}
