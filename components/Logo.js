export default function Logo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hover:scale-110 transition-transform"
    >
      {/* Gradient background circle */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>

      {/* Main circle */}
      <circle cx="20" cy="20" r="19" fill="url(#logoGradient)" opacity="0.1" stroke="url(#logoGradient)" strokeWidth="2" />

      {/* Checkmark - quality/testing symbol */}
      <path
        d="M12 20L17 25L28 14"
        stroke="url(#logoGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Accent dots */}
      <circle cx="10" cy="12" r="2" fill="url(#logoGradient)" opacity="0.6" />
      <circle cx="30" cy="28" r="2" fill="url(#logoGradient)" opacity="0.6" />
    </svg>
  );
}
