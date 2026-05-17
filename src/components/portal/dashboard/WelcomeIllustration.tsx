/** Lightweight desk illustration for staff welcome - no raster screenshot */
export function WelcomeIllustration() {
  return (
    <svg
      viewBox="0 0 200 120"
      className="h-28 w-48 text-blue-300/80 dark:text-blue-400/50"
      aria-hidden
    >
      <rect x="20" y="70" width="160" height="8" rx="2" fill="currentColor" opacity="0.35" />
      <rect x="50" y="45" width="100" height="28" rx="3" fill="currentColor" opacity="0.5" />
      <rect x="58" y="52" width="84" height="14" rx="1" fill="white" opacity="0.25" />
      <rect x="130" y="55" width="28" height="4" rx="1" fill="#f5d547" opacity="0.8" />
      <rect x="35" y="58" width="12" height="18" rx="1" fill="currentColor" opacity="0.4" />
      <rect x="38" y="52" width="6" height="8" fill="currentColor" opacity="0.3" />
      <circle cx="165" cy="62" r="10" fill="currentColor" opacity="0.35" />
      <path
        d="M160 62 Q165 50 170 62"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
      <rect x="10" y="35" width="8" height="40" fill="currentColor" opacity="0.2" />
      <rect x="182" y="40" width="8" height="35" fill="currentColor" opacity="0.2" />
    </svg>
  );
}
