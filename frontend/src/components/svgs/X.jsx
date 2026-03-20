import { useId } from "react";

const ConnectSvg = (props) => {
  const uid = useId().replace(/:/g, ""); // React 18 — colons aren't valid in SVG IDs

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" {...props}>
      <defs>
        <linearGradient id={`csv1-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#818cf8" />
          <stop offset="50%"  stopColor="#6366f1" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>

        <radialGradient id={`csv2-${uid}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#e0e7ff" />
          <stop offset="50%"  stopColor="#6366f1" />
          <stop offset="100%" stopColor="#06b6d4" />
        </radialGradient>

        <filter
          id={`csv3-${uid}`}
          x="-30%" y="-30%" width="160%" height="160%"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Outer arc R=9 */}
      <path
        d="M21 12 A9 9 0 1 0 12 21"
        stroke={`url(#csv1-${uid})`}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="1"
      />

      {/* Middle arc R=6 */}
      <path
        d="M18 12 A6 6 0 1 0 12 18"
        stroke={`url(#csv1-${uid})`}
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.75"
      />

      {/* Inner arc R=3 */}
      <path
        d="M15 12 A3 3 0 1 0 12 15"
        stroke={`url(#csv1-${uid})`}
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Center dot */}
      <circle cx="12" cy="12" r="2.4" fill={`url(#csv2-${uid})`} />

      {/* Highlight */}
      <circle cx="11.2" cy="11.2" r="0.7" fill="white" opacity="0.7" />
    </svg>
  );
};

export default ConnectSvg;
