/**
 * Prepend the configured base path to an absolute public-asset path.
 *
 * `next/image` with `unoptimized: true` (required for static export) does NOT
 * automatically prepend `basePath` to image src URLs, so any string we hand
 * into <Image src=...> must already include the prefix. This helper is the
 * single place that joins `NEXT_PUBLIC_BASE_PATH` with a `/`-rooted path.
 *
 * - Empty / missing base path -> returns the path unchanged.
 * - Non-rooted paths and absolute URLs (http(s)://, data:, etc.) pass through.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  if (!basePath) return path;
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
