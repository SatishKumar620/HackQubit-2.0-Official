import React, { useMemo } from "react";

/* ── PURE HIGH-QUALITY VECTOR SVG JEWELRY & EXPENSIVE GEMS ── */

const SVGRubyGem = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="rubyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f87171" />
        <stop offset="40%" stopColor="#dc2626" />
        <stop offset="100%" stopColor="#991b1b" />
      </linearGradient>
    </defs>
    <polygon points="50,10 85,35 70,90 30,90 15,35" fill="url(#rubyGrad)" stroke="#7f1d1d" strokeWidth="2" />
    <polygon points="50,10 85,35 50,45" fill="#fca5a5" opacity="0.6" />
    <polygon points="50,10 15,35 50,45" fill="#fee2e2" opacity="0.8" />
    <polygon points="50,45 85,35 70,90" fill="#991b1b" opacity="0.5" />
    <polygon points="50,45 15,35 30,90" fill="#b91c1c" opacity="0.4" />
  </svg>
);

const SVGBrilliantDiamond = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="diamondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="50%" stopColor="#bae6fd" />
        <stop offset="100%" stopColor="#38bdf8" />
      </linearGradient>
    </defs>
    <polygon points="25,20 75,20 95,45 50,95 5,45" fill="url(#diamondGrad)" stroke="#0284c7" strokeWidth="2" />
    <polygon points="25,20 75,20 50,45" fill="#ffffff" opacity="0.9" />
    <polygon points="25,20 5,45 50,45" fill="#e0f2fe" opacity="0.7" />
    <polygon points="75,20 95,45 50,45" fill="#bae6fd" opacity="0.7" />
    <polygon points="5,45 50,45 50,95" fill="#38bdf8" opacity="0.5" />
    <polygon points="95,45 50,45 50,95" fill="#0284c7" opacity="0.6" />
  </svg>
);

const SVGEmeraldJewel = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4ade80" />
        <stop offset="50%" stopColor="#16a34a" />
        <stop offset="100%" stopColor="#14532d" />
      </linearGradient>
    </defs>
    <rect x="20" y="15" width="60" height="70" rx="6" fill="url(#emeraldGrad)" stroke="#14532d" strokeWidth="2" />
    <polygon points="20,15 80,15 70,28 30,28" fill="#86efac" opacity="0.7" />
    <polygon points="30,28 70,28 70,72 30,72" fill="#22c55e" opacity="0.5" />
    <polygon points="20,15 30,28 30,72 20,85" fill="#4ade80" opacity="0.6" />
    <polygon points="80,15 70,28 70,72 80,85" fill="#15803d" opacity="0.6" />
  </svg>
);

const SVGSapphireGem = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sapphireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="50%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#1e3a8a" />
      </linearGradient>
    </defs>
    <polygon points="50,5 90,30 90,70 50,95 10,70 10,30" fill="url(#sapphireGrad)" stroke="#1e3a8a" strokeWidth="2" />
    <polygon points="50,5 90,30 50,40" fill="#93c5fd" opacity="0.8" />
    <polygon points="50,5 10,30 50,40" fill="#bfdbfe" opacity="0.9" />
    <polygon points="10,30 10,70 50,40" fill="#3b82f6" opacity="0.5" />
    <polygon points="90,30 90,70 50,40" fill="#1d4ed8" opacity="0.6" />
    <polygon points="10,70 50,95 50,40" fill="#1e40af" opacity="0.7" />
    <polygon points="90,70 50,95 50,40" fill="#1e3a8a" opacity="0.8" />
  </svg>
);

const SVGGoldDoubloon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="doubloonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#eab308" />
        <stop offset="100%" stopColor="#854d0e" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#doubloonGrad)" stroke="#713f12" strokeWidth="3" />
    <circle cx="50" cy="50" r="38" fill="none" stroke="#ca8a04" strokeWidth="2" strokeDasharray="4 3" />
    {/* Embossed Anchor */}
    <path d="M 50 25 L 50 68 M 35 40 L 65 40 M 32 60 Q 50 78 68 60" fill="none" stroke="#713f12" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const JEWELRY_COMPONENTS = [
  SVGRubyGem,
  SVGBrilliantDiamond,
  SVGEmeraldJewel,
  SVGSapphireGem,
  SVGGoldDoubloon,
];

const GoldRainParticles = () => {
  // Generate 16 lightweight vector SVG jewelry gems with smooth CSS fall animation
  const particles = useMemo(() => {
    return Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      Component: JEWELRY_COMPONENTS[i % JEWELRY_COMPONENTS.length],
      left: `${(i * 6.2 + 3) % 94}%`,
      size: `${18 + (i % 4) * 6}px`,
      duration: `${4 + (i % 3) * 2.5}s`,
      delay: `${(i % 4) * 0.8}s`,
      opacity: 0.75 + (i % 3) * 0.1,
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 select-none">
      {particles.map((p) => {
        const JewelSvg = p.Component;
        return (
          <div
            key={p.id}
            className="absolute animate-[jewelFall_infinite_linear] filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
            style={{
              left: p.left,
              top: "-5%",
              animationDuration: p.duration,
              animationDelay: p.delay,
              opacity: p.opacity,
            }}
          >
            <JewelSvg style={{ width: p.size, height: p.size }} />
          </div>
        );
      })}
      <style>{`
        @keyframes jewelFall {
          0% {
            transform: translateY(-20px) rotate(0deg);
          }
          50% {
            transform: translateY(350px) rotate(180deg) translateX(12px);
          }
          100% {
            transform: translateY(700px) rotate(360deg) translateX(-12px);
          }
        }
      `}</style>
    </div>
  );
};

export default GoldRainParticles;
