type CasalyIconProps = {
  className?: string;
};

/** Door frame + threshold + knob — same locked geometry as the app icon. */
export function CasalyIcon({ className }: CasalyIconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <path
        d="M32,74 L32,44 A18,18 0 0 1 68,44 L68,74"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="32" y1="74" x2="68" y2="74" stroke="currentColor" strokeWidth="9" strokeLinecap="butt" />
      <circle cx="53" cy="52" r="6" fill="currentColor" />
    </svg>
  );
}
