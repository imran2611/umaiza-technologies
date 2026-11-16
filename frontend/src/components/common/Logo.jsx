import { useId } from "react";
import { SITE } from "../../utils/siteConfig";

function Logo({ variant = SITE.logoVariant }) {
  const gid = `logo-${useId().replace(/:/g, "")}`;
  const fill = `url(#${gid})`;
  const white = { fill: "none", stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round" };

  const defs = (
    <defs>
      <linearGradient id={gid} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#315EFB" />
        <stop offset="1" stopColor="#8057E8" />
      </linearGradient>
    </defs>
  );

  const box = <rect width="64" height="64" rx="16" fill={fill} />;

  switch (variant) {
    case "hex":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          {defs}
          <polygon points="32,3 58,18 58,46 32,61 6,46 6,18" fill={fill} stroke={fill} strokeWidth="4" strokeLinejoin="round" />
          <path d="M23 22v14a9 9 0 0 0 18 0V22" {...white} strokeWidth="5.5" />
        </svg>
      );

    case "pixel": {
      const cells = [[0, 0], [2, 0], [0, 1], [2, 1], [0, 2], [1, 2], [2, 2]];
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          {defs}
          {box}
          {cells.map(([c, r]) => (
            <rect key={`${c}${r}`} x={10 + c * 16} y={10 + r * 16} width="12" height="12" rx="3" fill="#fff" opacity={c === 2 && r === 0 ? 1 : 0.8} />
          ))}
        </svg>
      );
    }

    case "shield":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          {defs}
          <path d="M32 4 55 12v18c0 15-10 25-23 31C19 55 9 45 9 30V12z" fill={fill} />
          <path d="M23 22v12a9 9 0 0 0 18 0V22" {...white} strokeWidth="5.5" />
        </svg>
      );

    case "bracket":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          {defs}
          {box}
          <path d="M22 20 12 32l10 12" {...white} strokeWidth="5" />
          <path d="M42 20l10 12-10 12" {...white} strokeWidth="5" />
          <path d="M27 24v8a5 5 0 0 0 10 0v-8" {...white} strokeWidth="4.5" />
        </svg>
      );

    case "layers":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          {defs}
          {box}
          <path d="M32 12 52 23 32 34 12 23z" fill="#fff" />
          <path d="M12 32l20 11 20-11" {...white} strokeWidth="4" />
          <path d="M12 41l20 11 20-11" {...white} strokeWidth="4" opacity="0.6" />
        </svg>
      );

    case "orbit":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          {defs}
          <circle cx="32" cy="32" r="30" fill={fill} />
          <ellipse cx="32" cy="32" rx="29" ry="11" transform="rotate(-25 32 32)" fill="none" stroke="#fff" strokeWidth="2" opacity="0.5" />
          <path d="M23 21v14a9 9 0 0 0 18 0V21" {...white} strokeWidth="6" />
        </svg>
      );

    case "monogram":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          {defs}
          {box}
          <text x="32" y="43" textAnchor="middle" fontFamily="'Plus Jakarta Sans', Inter, sans-serif" fontSize="29" fontWeight="800" fill="#fff" letterSpacing="-1">
            UT
          </text>
        </svg>
      );
    case "ut":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          {defs}
          {box}
          <path d="M16 18V36a10 10 0 0 0 20 0V18" {...white} strokeWidth="6" />
          <path d="M24 18H48" {...white} strokeWidth="6" />
        </svg>
      ); 

    default: // spark
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          {defs}
          {box}
          <path d="M20 18v16a12 12 0 0 0 24 0V27" {...white} strokeWidth="6" />
          <circle cx="44" cy="16" r="4" fill="#fff" />
        </svg>
      );
  }
}

export default Logo;