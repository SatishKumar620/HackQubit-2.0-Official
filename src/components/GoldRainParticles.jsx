import React, { useMemo } from "react";

const GOLD_ITEMS = ["🪙", "💎", "👑", "✨", "🪙", "🏆", "💎", "🪙"];

const GoldRainParticles = () => {
  // Generate 24 floating/falling gold coin and jewelry items with deterministic random properties
  const particles = useMemo(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      symbol: GOLD_ITEMS[i % GOLD_ITEMS.length],
      left: `${(i * 4.2 + (i % 7) * 3) % 96}%`,
      size: `${14 + (i % 5) * 6}px`,
      duration: `${6 + (i % 4) * 3}s`,
      delay: `${(i % 5) * 1.2}s`,
      opacity: 0.3 + (i % 4) * 0.15,
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 select-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute animate-[floatDown_infinite_linear]"
          style={{
            left: p.left,
            top: "-5%",
            fontSize: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
            opacity: p.opacity,
            filter: "drop-shadow(0 4px 8px rgba(217, 119, 6, 0.4))",
          }}
        >
          {p.symbol}
        </div>
      ))}
      <style>{`
        @keyframes floatDown {
          0% {
            transform: translateY(-20px) rotate(0deg);
          }
          50% {
            transform: translateY(350px) rotate(180deg) translateX(15px);
          }
          100% {
            transform: translateY(700px) rotate(360deg) translateX(-15px);
          }
        }
      `}</style>
    </div>
  );
};

export default GoldRainParticles;
