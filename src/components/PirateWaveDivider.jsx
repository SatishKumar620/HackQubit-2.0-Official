import React from "react";

const PirateWaveDivider = ({ flip = false, variant = "default" }) => {
  return (
    <div className={`relative w-full overflow-hidden leading-none z-20 pointer-events-none select-none ${flip ? "transform rotate-180" : ""}`}>
      
      {/* ── OCEAN WAVE & PIRATE SHIP SAIL ANIMATED CONTAINER ── */}
      <div className="relative w-full h-20 sm:h-28 lg:h-32">
        
        {/* Layer 1: Back Deep Sea Wave */}
        <svg
          className="absolute bottom-0 w-full h-full text-amber-950/20 animate-[waveBack_12s_ease-in-out_infinite]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,40 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>

        {/* Layer 2: Middle Ocean Crest Wave */}
        <svg
          className="absolute bottom-0 w-full h-full text-amber-900/30 animate-[waveMid_8s_ease-in-out_infinite]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C200,100 450,10 650,70 C850,130 1050,30 1200,60 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>

        {/* Layer 3: Front Foam Wave (Matches pirate-bg theme) */}
        <svg
          className="absolute bottom-0 w-full h-full text-[#fef9c3] fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,45 C150,95 400,20 600,65 C800,110 1000,35 1200,55 L1200,120 L0,120 Z"
          />
        </svg>

        {/* ── MINI ANIMATED PIRATE SHIP SAILING ACROSS THE WAVE CREST ── */}
        <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 h-12 sm:h-16 overflow-hidden pointer-events-none">
          <div className="absolute animate-[shipSailing_24s_linear_infinite] bottom-1 flex items-end">
            <svg
              viewBox="0 0 100 80"
              className="w-10 h-10 sm:w-14 sm:h-14 filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] transform -scale-x-100"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Ship Hull */}
              <path d="M10,50 L90,50 L75,70 L25,70 Z" fill="#78350f" stroke="#451a03" strokeWidth="2" />
              {/* Mast */}
              <line x1="50" y1="10" x2="50" y2="50" stroke="#451a03" strokeWidth="3" />
              {/* Main Sail with Jolly Roger emblem */}
              <path d="M50,12 Q75,25 50,42 Q25,25 50,12 Z" fill="#1e293b" stroke="#090d16" strokeWidth="1.5" />
              {/* Skull & Bones Emblem on Sail */}
              <circle cx="50" cy="27" r="3.5" fill="#f8fafc" />
              <path d="M46,31 L54,31 M48,32 L52,32" stroke="#f8fafc" strokeWidth="1" />
              {/* Top Pirate Flag */}
              <polygon points="50,6 68,10 50,14" fill="#dc2626" />
            </svg>
          </div>
        </div>

        {/* ── CENTER VINTAGE DOUBLOON COMPASS EMBLEM ACCENT ── */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-800 p-0.5 shadow-lg flex items-center justify-center border border-amber-900/60 transform hover:rotate-45 transition-transform duration-500">
            <div className="w-full h-full rounded-full bg-amber-950 flex items-center justify-center text-amber-300 font-cinzel text-xs sm:text-sm font-black">
              ⚓
            </div>
          </div>
        </div>

      </div>

      {/* ── WAVE ANIMATION KEYFRAMES ── */}
      <style>{`
        @keyframes waveBack {
          0%, 100% { transform: translateX(0) scaleY(1); }
          50% { transform: translateX(-2%) scaleY(1.08); }
        }
        @keyframes waveMid {
          0%, 100% { transform: translateX(0) scaleY(1); }
          50% { transform: translateX(2%) scaleY(0.92); }
        }
        @keyframes shipSailing {
          0% { transform: translateX(-80px) translateY(0px) rotate(-2deg); }
          25% { transform: translateX(25vw) translateY(-4px) rotate(3deg); }
          50% { transform: translateX(50vw) translateY(2px) rotate(-3deg); }
          75% { transform: translateX(75vw) translateY(-5px) rotate(2deg); }
          100% { transform: translateX(105vw) translateY(0px) rotate(-2deg); }
        }
      `}</style>
    </div>
  );
};

export default PirateWaveDivider;
