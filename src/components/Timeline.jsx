import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

/* ── Milestone Data ── */
const MILESTONES = [
  {
    id: "checkin", day: "Day 1", time: "09:00 AM",
    title: "Set Sail!", subtitle: "Check-in & Swag",
    desc: "Arrive at port, collect your treasure chest swag bag and meet your crewmates.",
    emoji: "⚓", color: "#8B5E3C",
  },
  {
    id: "opening", day: "Day 1", time: "10:30 AM",
    title: "Captain's Orders", subtitle: "Opening Ceremony",
    desc: "The Grand Admiral reveals the challenge scroll. The voyage officially begins!",
    emoji: "📜", color: "#6B7F3C",
  },
  {
    id: "hacking", day: "Day 1", time: "11:30 AM",
    title: "Raise The Sails!", subtitle: "Hacking Begins",
    desc: "All hands on deck! 48 hours of intense building, creating and innovating starts now.",
    emoji: "💻", color: "#3C5F8B",
  },
  {
    id: "lunch", day: "Day 1", time: "01:30 PM",
    title: "Pirate's Feast", subtitle: "Lunch Break",
    desc: "Even the fiercest pirates need to eat. Refuel before the storm hits!",
    emoji: "🍖", color: "#8B3C3C",
  },
  {
    id: "midnight", day: "Day 1", time: "11:59 PM",
    title: "Midnight Watch", subtitle: "Late Night Checkpoint",
    desc: "Coffee, sea shanties and late-night debugging. The treasure is within reach!",
    emoji: "🌙", color: "#3C3C8B",
  },
  {
    id: "sunrise", day: "Day 2", time: "06:00 AM",
    title: "Dawn's Light", subtitle: "Sunrise Hustle",
    desc: "Land ho! The end is near. Final push before the storm calms.",
    emoji: "🌅", color: "#8B6B3C",
  },
  {
    id: "submit", day: "Day 2", time: "11:30 AM",
    title: "Drop Anchor!", subtitle: "Submissions Close",
    desc: "Put down your weapons — hacking time is over. Present what you have built!",
    emoji: "⏳", color: "#5C8B3C",
  },
  {
    id: "pitch", day: "Day 2", time: "12:30 PM",
    title: "Battle of Wits", subtitle: "Pitches to Judges",
    desc: "Face the tribunal. Defend your treasure in front of the fearsome judging panel.",
    emoji: "⚔️", color: "#8B3C6B",
  },
  {
    id: "awards", day: "Day 2", time: "03:00 PM",
    title: "Claim Your Bounty", subtitle: "Closing & Awards",
    desc: "The ultimate pirate claims the greatest treasure. Legends are born today!",
    emoji: "👑", color: "#8B7A1A",
    isFinal: true,
  },
];

/* ── Winding SVG Path ──
   A jalebi/serpentine path going from top to bottom
   The ship will travel along this exact path */
const PATH_D = "M 300,60 C 500,60 600,160 400,200 C 200,240 100,320 300,360 C 500,400 620,480 420,520 C 220,560 80,640 280,680 C 480,720 600,800 400,840 C 200,880 100,960 320,1000 C 500,1040 560,1100 400,1140";

/* ── Compass Rose SVG ── */
const CompassRose = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="none" stroke="#8B6B3F" strokeWidth="1.5" opacity="0.6"/>
    <circle cx="50" cy="50" r="35" fill="none" stroke="#8B6B3F" strokeWidth="0.8" opacity="0.4"/>
    <polygon points="50,8 54,46 50,50 46,46" fill="#8B3C3C" opacity="0.9"/>
    <polygon points="50,92 54,54 50,50 46,54" fill="#5C3A1E" opacity="0.7"/>
    <polygon points="8,50 46,46 50,50 46,54" fill="#5C3A1E" opacity="0.7"/>
    <polygon points="92,50 54,54 50,50 54,46" fill="#5C3A1E" opacity="0.7"/>
    <text x="50" y="5" textAnchor="middle" fontSize="8" fill="#8B3C3C" fontWeight="bold">N</text>
    <text x="50" y="99" textAnchor="middle" fontSize="7" fill="#5C3A1E">S</text>
    <text x="4" y="53" textAnchor="middle" fontSize="7" fill="#5C3A1E">W</text>
    <text x="97" y="53" textAnchor="middle" fontSize="7" fill="#5C3A1E">E</text>
    <circle cx="50" cy="50" r="5" fill="#D4AF37" opacity="0.8"/>
    <circle cx="50" cy="50" r="2.5" fill="#8B6B3F"/>
  </svg>
);

/* ── Pirate Ship SVG ── */
const ShipSVG = () => (
  <svg viewBox="0 0 80 60" className="w-full h-full drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
    {/* Hull */}
    <path d="M10,40 Q15,50 40,52 Q65,50 70,40 L65,36 Q40,38 15,36 Z" fill="#5C3A1E" stroke="#3D2510" strokeWidth="1"/>
    {/* Deck */}
    <rect x="18" y="33" width="44" height="4" rx="1" fill="#7A4E2D" stroke="#3D2510" strokeWidth="0.5"/>
    {/* Main mast */}
    <line x1="40" y1="33" x2="40" y2="5" stroke="#4A2E1B" strokeWidth="2"/>
    {/* Main sail */}
    <path d="M41,7 Q55,14 41,28" fill="#F5E6C8" stroke="#D4AF37" strokeWidth="0.8" opacity="0.95"/>
    <path d="M39,7 Q25,14 39,28" fill="#EDD9B5" stroke="#D4AF37" strokeWidth="0.8" opacity="0.9"/>
    {/* Skull flag */}
    <rect x="38" y="2" width="10" height="7" fill="#1a1a1a" rx="1"/>
    <circle cx="41" cy="5" r="1.5" fill="white"/>
    <circle cx="45" cy="5" r="1.5" fill="white"/>
    <text x="43" y="7.5" fontSize="3" fill="white" textAnchor="middle">✕</text>
    {/* Bowsprit */}
    <line x1="12" y1="36" x2="2" y2="30" stroke="#4A2E1B" strokeWidth="1.5"/>
    {/* Cannon */}
    <rect x="22" y="34" width="8" height="3" rx="1" fill="#333" opacity="0.8"/>
  </svg>
);

/* ── Island Node SVG ── */
const IslandNode = ({ emoji, isFinal, color }) => (
  <div className="relative group cursor-pointer">
    {/* Pulsing ring for final */}
    {isFinal && <div className="absolute inset-0 rounded-full bg-yellow-400 animate-ping opacity-30 scale-150" />}
    {/* Island circle */}
    <div
      className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-xl border-4 transition-transform duration-300 group-hover:scale-125 relative z-10"
      style={{
        background: `radial-gradient(circle at 30% 30%, ${color}33, ${color}88)`,
        borderColor: color,
        boxShadow: `0 0 20px ${color}44, 0 4px 12px rgba(0,0,0,0.3)`
      }}
    >
      {emoji}
    </div>
    {/* X marks the spot */}
    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-amber-700 rounded-full border-2 border-amber-400 flex items-center justify-center text-white text-[9px] font-bold z-20">
      ✕
    </div>
  </div>
);

/* ── Decorative Seagulls ── */
const Seagulls = () => (
  <svg className="absolute top-10 right-10 opacity-20 w-32 h-16" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,40 Q20,30 30,40 Q40,30 50,40" fill="none" stroke="#5C3A1E" strokeWidth="2"/>
    <path d="M60,20 Q70,10 80,20 Q90,10 100,20" fill="none" stroke="#5C3A1E" strokeWidth="1.5"/>
    <path d="M120,50 Q130,40 140,50 Q150,40 160,50" fill="none" stroke="#5C3A1E" strokeWidth="1.5"/>
  </svg>
);

/* ── Decorative Waves ── */
const WavesDeco = () => (
  <svg className="absolute bottom-10 left-0 w-full opacity-10 h-16" viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,30 C150,10 300,50 450,30 C600,10 750,50 900,30 C1050,10 1150,40 1200,30" fill="none" stroke="#1A6B8B" strokeWidth="3"/>
    <path d="M0,45 C150,25 300,65 450,45 C600,25 750,65 900,45 C1050,25 1150,55 1200,45" fill="none" stroke="#1A6B8B" strokeWidth="2" opacity="0.6"/>
  </svg>
);

/* ── MAIN COMPONENT ── */
const TreasureMapTimeline = () => {
  const sectionRef = useRef(null);
  const shipRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate ship along the winding path
      if (shipRef.current && pathRef.current) {
        gsap.to(shipRef.current, {
          motionPath: {
            path: pathRef.current,
            align: pathRef.current,
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
            start: 0,
            end: 1,
          },
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 10%",
            end: "bottom 90%",
            scrub: 1.5,
          },
        });
      }

      // Draw the path progressively
      if (pathRef.current) {
        const length = pathRef.current.getTotalLength?.() || 2000;
        gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(pathRef.current, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 10%",
            end: "bottom 90%",
            scrub: 1,
          },
        });
      }

      // Animate milestone cards
      gsap.utils.toArray(".milestone-card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          scale: 0.8,
          y: 20,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="timeline"
      className="relative overflow-hidden py-16"
      style={{
        background: "linear-gradient(180deg, #f5e6c8 0%, #edd9b5 30%, #e8d0a0 60%, #dfc090 100%)",
      }}
    >
      {/* ── Parchment Texture Overlays ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")
        `,
        mixBlendMode: "multiply",
        opacity: 0.5,
      }} />

      {/* ── Burnt/vignette edges ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          radial-gradient(ellipse at center, transparent 50%, rgba(101,67,33,0.35) 100%),
          linear-gradient(to bottom, rgba(101,67,33,0.2) 0%, transparent 8%, transparent 92%, rgba(101,67,33,0.25) 100%)
        `,
      }} />

      {/* ── Decorative map border ── */}
      <div className="absolute inset-4 border-4 border-dashed border-amber-800/25 rounded-none pointer-events-none" />
      <div className="absolute inset-6 border border-amber-700/15 pointer-events-none" />

      {/* ── Decorations ── */}
      <Seagulls />
      <WavesDeco />

      {/* ── Compass Rose (top-left) ── */}
      <div className="absolute top-8 left-8 w-24 h-24 opacity-40 pointer-events-none">
        <CompassRose />
      </div>

      {/* ── Skull & Crossbones watermark (background) ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[280px] opacity-[0.03] pointer-events-none select-none">
        ☠️
      </div>

      {/* ── Section Header ── */}
      <div className="text-center mb-8 relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block mb-3"
        >
          <span className="text-4xl">🗺️</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-['Pirata_One'] text-5xl md:text-7xl text-amber-900 mb-3"
          style={{ textShadow: "3px 3px 0px rgba(101,67,33,0.3), 0 0 40px rgba(212,175,55,0.2)" }}
        >
          The Voyage Map
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-amber-800 text-lg font-['Cormorant_Garamond'] italic max-w-xl mx-auto"
        >
          "Follow the winding path, brave the stormy seas, and claim the ultimate treasure."
        </motion.p>
        <div className="flex items-center justify-center gap-4 mt-3">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-amber-700/50" />
          <span className="text-amber-700 text-xl">⚓</span>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-amber-700/50" />
        </div>
      </div>

      {/* ── MAP AREA ── */}
      <div className="relative z-10 mx-auto" style={{ maxWidth: 700, minHeight: 1240 }}>

        {/* SVG layer for path and ship motion */}
        <svg
          className="absolute inset-0 w-full"
          viewBox="0 0 700 1200"
          preserveAspectRatio="xMidYMid meet"
          style={{ height: "100%" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer glow on path */}
          <path
            d="M 300,60 C 500,60 600,160 400,200 C 200,240 100,320 300,360 C 500,400 620,480 420,520 C 220,560 80,640 280,680 C 480,720 600,800 400,840 C 200,880 100,960 320,1000 C 500,1040 560,1100 400,1140"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="12"
            strokeLinecap="round"
            opacity="0.15"
          />
          {/* Dashed path base */}
          <path
            d="M 300,60 C 500,60 600,160 400,200 C 200,240 100,320 300,360 C 500,400 620,480 420,520 C 220,560 80,640 280,680 C 480,720 600,800 400,840 C 200,880 100,960 320,1000 C 500,1040 560,1100 400,1140"
            fill="none"
            stroke="#8B6B3F"
            strokeWidth="3"
            strokeDasharray="14 8"
            strokeLinecap="round"
            opacity="0.5"
          />
          {/* Animated progress path */}
          <path
            ref={pathRef}
            id="voyage-path"
            d="M 300,60 C 500,60 600,160 400,200 C 200,240 100,320 300,360 C 500,400 620,480 420,520 C 220,560 80,640 280,680 C 480,720 600,800 400,840 C 200,880 100,960 320,1000 C 500,1040 560,1100 400,1140"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.9"
          />

          {/* Small waves decorations along the path */}
          {[120, 280, 440, 600, 760, 920, 1080].map((y, i) => (
            <g key={i} opacity="0.15">
              <path d={`M ${80 + i * 30},${y} Q ${95 + i * 30},${y - 6} ${110 + i * 30},${y}`} fill="none" stroke="#1A6B8B" strokeWidth="2"/>
              <path d={`M ${500 - i * 20},${y + 20} Q ${515 - i * 20},${y + 14} ${530 - i * 20},${y + 20}`} fill="none" stroke="#1A6B8B" strokeWidth="1.5"/>
            </g>
          ))}
        </svg>

        {/* ── PIRATE SHIP (animated along path) ── */}
        <div
          ref={shipRef}
          className="absolute z-30 pointer-events-none"
          style={{ width: 70, height: 52, marginLeft: -35, marginTop: -26, top: 0, left: 0 }}
        >
          {/* Ship glow */}
          <div className="absolute -inset-3 rounded-full bg-amber-400/20 blur-md" />
          <ShipSVG />
        </div>

        {/* ── MILESTONE CARDS ── */}
        {/* 
          These are absolutely positioned to match the SVG path curve points.
          Left/right alternates, with cards placed near each curve peak/trough.
          SVG viewBox is 700x1200, but container scales, so we use percentage.
        */}
        {MILESTONES.map((ms, i) => {
          // SVG coordinates of node positions on the path
          // Matching the bezier curve waypoints
          const nodes = [
            { x: 300, y: 60 },   // 0 start
            { x: 400, y: 200 },  // 1
            { x: 300, y: 360 },  // 2
            { x: 420, y: 520 },  // 3
            { x: 280, y: 680 },  // 4
            { x: 400, y: 840 },  // 5
            { x: 320, y: 1000 }, // 6
            { x: 400, y: 1100 }, // 7 approx
            { x: 400, y: 1140 }, // 8 end
          ];
          const node = nodes[i] || nodes[nodes.length - 1];
          // Decide if card goes left or right of the path
          const goesLeft = node.x > 350;

          return (
            <div
              key={ms.id}
              className="milestone-card absolute"
              style={{
                // Convert SVG coords to % of container
                left: `${(node.x / 700) * 100}%`,
                top: `${(node.y / 1200) * 100}%`,
                transform: "translate(-50%, -50%)",
                zIndex: 20,
              }}
            >
              {/* Island node marker */}
              <div className="flex flex-col items-center">
                <IslandNode emoji={ms.emoji} isFinal={ms.isFinal} color={ms.color} />

                {/* Info card — pops to left or right */}
                <div
                  className={`absolute top-1/2 -translate-y-1/2 w-52 md:w-64
                    ${goesLeft ? "right-[110%]" : "left-[110%]"}
                  `}
                >
                  <div
                    className="rounded-lg p-4 shadow-2xl border relative overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, rgba(245,230,195,0.97) 0%, rgba(237,217,181,0.97) 100%)",
                      borderColor: ms.color + "66",
                      boxShadow: `0 8px 32px rgba(0,0,0,0.2), 0 0 0 1px ${ms.color}33`,
                    }}
                  >
                    {/* Aged paper texture on card */}
                    <div className="absolute inset-0 opacity-30" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                    }} />
                    {/* Corner flourish */}
                    <div className="absolute top-1 left-1 text-amber-700/30 text-lg leading-none">✦</div>
                    <div className="absolute top-1 right-1 text-amber-700/30 text-lg leading-none">✦</div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest"
                          style={{ background: ms.color + "22", color: ms.color, border: `1px solid ${ms.color}44` }}
                        >
                          {ms.day}
                        </span>
                        <span className="text-[10px] text-amber-700/70 font-['Cinzel']">{ms.time}</span>
                      </div>
                      <h3 className="font-['Pirata_One'] text-lg text-amber-900 leading-tight mb-0.5">
                        {ms.title}
                      </h3>
                      <p className="text-[11px] font-bold text-amber-700/80 uppercase tracking-wider mb-1.5 font-['Cinzel']">
                        {ms.subtitle}
                      </p>
                      <p className="text-[12px] text-amber-800/80 leading-relaxed font-['Cormorant_Garamond'] italic">
                        {ms.desc}
                      </p>
                      {ms.isFinal && (
                        <div className="mt-2 text-center">
                          <span className="text-amber-600 font-bold text-xs font-['Cinzel'] uppercase tracking-widest">
                            ✦ X Marks The Spot ✦
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Connector arrow pointing to node */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 w-0 h-0
                        ${goesLeft
                          ? "right-0 translate-x-full border-t-[8px] border-b-[8px] border-t-transparent border-b-transparent border-l-[10px]"
                          : "left-0 -translate-x-full border-t-[8px] border-b-[8px] border-t-transparent border-b-transparent border-r-[10px]"
                        }
                      `}
                      style={{
                        borderLeftColor: goesLeft ? "rgba(237,217,181,0.97)" : "transparent",
                        borderRightColor: !goesLeft ? "rgba(237,217,181,0.97)" : "transparent",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* ── Treasure chest at end ── */}
        <div
          className="absolute z-20"
          style={{ left: `${(400 / 700) * 100}%`, top: `${(1145 / 1200) * 100}%`, transform: "translate(-50%, -50%)" }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-5xl drop-shadow-2xl cursor-pointer"
            title="The Ultimate Treasure!"
          >
            💰
          </motion.div>
        </div>
      </div>

      {/* ── Day labels legend ── */}
      <div className="relative z-10 flex justify-center gap-8 mt-8 px-4">
        {["Day 1", "Day 2"].map((day, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`w-4 h-4 rounded-full border-2 ${i === 0 ? "bg-amber-400 border-amber-700" : "bg-sky-400 border-sky-700"}`} />
            <span className="text-amber-800 font-['Cinzel'] text-sm font-bold">{day}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TreasureMapTimeline;
