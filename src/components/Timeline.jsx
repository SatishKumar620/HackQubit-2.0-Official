import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { motion } from "framer-motion";
import { 
  Anchor, 
  Scroll, 
  Code, 
  Utensils, 
  Moon, 
  Sun, 
  Hourglass, 
  Swords, 
  Crown, 
  Map, 
  Trophy,
  Compass,
  Sparkles
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

/* ── Milestone Data with Lucide Icons ── */
const MILESTONES = [
  {
    id: "checkin", day: "Day 1", time: "09:00 AM",
    title: "Set Sail!", subtitle: "Check-in & Swag",
    desc: "Arrive at port, collect your treasure chest swag bag and meet your crewmates.",
    Icon: Anchor, color: "#8B5E3C",
  },
  {
    id: "opening", day: "Day 1", time: "10:30 AM",
    title: "Captain's Orders", subtitle: "Opening Ceremony",
    desc: "The Grand Admiral reveals the challenge scroll. The voyage officially begins!",
    Icon: Scroll, color: "#6B7F3C",
  },
  {
    id: "hacking", day: "Day 1", time: "11:30 AM",
    title: "Raise The Sails!", subtitle: "Hacking Begins",
    desc: "All hands on deck! 24 hours of intense building, creating and innovating starts now.",
    Icon: Code, color: "#3C5F8B",
  },
  {
    id: "lunch", day: "Day 1", time: "01:30 PM",
    title: "Pirate's Feast", subtitle: "Lunch Break",
    desc: "Even the fiercest pirates need to eat. Refuel before the storm hits!",
    Icon: Utensils, color: "#8B3C3C",
  },
  {
    id: "midnight", day: "Day 1", time: "11:59 PM",
    title: "Midnight Watch", subtitle: "Late Night Checkpoint",
    desc: "Coffee, sea shanties and late-night debugging. The treasure is within reach!",
    Icon: Moon, color: "#3C3C8B",
  },
  {
    id: "sunrise", day: "Day 2", time: "06:00 AM",
    title: "Dawn's Light", subtitle: "Sunrise Hustle",
    desc: "Land ho! The end is near. Final push before the storm calms.",
    Icon: Sun, color: "#8B6B3C",
  },
  {
    id: "submit", day: "Day 2", time: "11:30 AM",
    title: "Drop Anchor!", subtitle: "Submissions Close",
    desc: "Put down your weapons — hacking time is over. Present what you have built!",
    Icon: Hourglass, color: "#5C8B3C",
  },
  {
    id: "pitch", day: "Day 2", time: "12:30 PM",
    title: "Battle of Wits", subtitle: "Pitches to Judges",
    desc: "Face the tribunal. Defend your treasure in front of the fearsome judging panel.",
    Icon: Swords, color: "#8B3C6B",
  },
  {
    id: "awards", day: "Day 2", time: "03:00 PM",
    title: "Claim Your Bounty", subtitle: "Closing & Awards",
    desc: "The ultimate pirate claims the greatest treasure. Legends are born today!",
    Icon: Crown, color: "#8B7A1A",
    isFinal: true,
  },
];

/* ── Smooth Winding SVG Path (Height 1600 for Proper Card Spacing) ── */
const PATH_D = "M 350,80 C 550,80 620,200 420,260 C 220,320 100,420 320,480 C 540,540 620,660 400,720 C 180,780 100,900 320,960 C 540,1020 620,1140 400,1200 C 180,1260 100,1380 350,1440 C 520,1490 550,1540 350,1580";

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

/* ── Pirate Ship SVG (Corrected Orientation: Bow Points Downward Along Path) ── */
const ShipSVG = () => (
  <svg viewBox="0 0 80 60" className="w-full h-full filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)] transform rotate-90" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,40 Q15,50 40,52 Q65,50 70,40 L65,36 Q40,38 15,36 Z" fill="#5C3A1E" stroke="#3D2510" strokeWidth="1"/>
    <rect x="18" y="33" width="44" height="4" rx="1" fill="#7A4E2D" stroke="#3D2510" strokeWidth="0.5"/>
    <line x1="40" y1="33" x2="40" y2="5" stroke="#4A2E1B" strokeWidth="2"/>
    <path d="M41,7 Q55,14 41,28" fill="#F5E6C8" stroke="#D4AF37" strokeWidth="0.8" opacity="0.95"/>
    <path d="M39,7 Q25,14 39,28" fill="#EDD9B5" stroke="#D4AF37" strokeWidth="0.8" opacity="0.9"/>
    <rect x="38" y="2" width="10" height="7" fill="#1a1a1a" rx="1"/>
    <circle cx="41" cy="5" r="1.5" fill="white"/>
    <circle cx="45" cy="5" r="1.5" fill="white"/>
    <text x="43" y="7.5" fontSize="3" fill="white" textAnchor="middle">✕</text>
    <line x1="12" y1="36" x2="2" y2="30" stroke="#4A2E1B" strokeWidth="1.5"/>
    <rect x="22" y="34" width="8" height="3" rx="1" fill="#333" opacity="0.8"/>
  </svg>
);

/* ── Island Node SVG with Icon ── */
const IslandNode = ({ Icon, isFinal, color }) => (
  <div className="relative group cursor-pointer">
    {isFinal && <div className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-40 scale-150" />}
    <div
      className="w-14 h-14 rounded-full flex items-center justify-center border-4 transition-all duration-300 group-hover:scale-125 relative z-10 shadow-[0_10px_25px_rgba(0,0,0,0.3)] group-hover:shadow-[0_15px_35px_rgba(212,175,55,0.4)]"
      style={{
        background: `radial-gradient(circle at 30% 30%, ${color}44, ${color}cc)`,
        borderColor: color,
        boxShadow: `0 8px 24px ${color}55, inset 0 2px 4px rgba(255,255,255,0.4)`
      }}
    >
      <Icon className="w-6 h-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]" strokeWidth={2.2} />
    </div>
    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-amber-800 rounded-full border-2 border-amber-300 flex items-center justify-center text-amber-200 text-[10px] font-bold z-20 shadow-md">
      ✦
    </div>
  </div>
);

/* ── MAIN COMPONENT ── */
const TreasureMapTimeline = () => {
  const sectionRef = useRef(null);
  const shipRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
            start: "top 20%",
            end: "bottom 80%",
            scrub: 1.2,
          },
        });
      }

      if (pathRef.current) {
        const length = pathRef.current.getTotalLength?.() || 2400;
        gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(pathRef.current, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 20%",
            end: "bottom 80%",
            scrub: 1,
          },
        });
      }

      gsap.utils.toArray(".milestone-card").forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          scale: 0.85,
          y: 25,
          duration: 0.6,
          ease: "back.out(1.5)",
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
      className="relative overflow-hidden py-20"
      style={{
        background: "linear-gradient(180deg, #f5e6c8 0%, #edd9b5 30%, #e8d0a0 60%, #dfc090 100%)",
      }}
    >
      {/* ── Parchment Texture ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")
        `,
        mixBlendMode: "multiply",
        opacity: 0.5,
      }} />

      {/* ── Burnt Vignette ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          radial-gradient(ellipse at center, transparent 40%, rgba(101,67,33,0.4) 100%),
          linear-gradient(to bottom, rgba(101,67,33,0.25) 0%, transparent 8%, transparent 92%, rgba(101,67,33,0.3) 100%)
        `,
      }} />

      {/* ── Border Frame ── */}
      <div className="absolute inset-4 border-4 border-dashed border-amber-900/30 rounded-none pointer-events-none" />
      <div className="absolute inset-6 border border-amber-800/20 pointer-events-none" />

      {/* ── Compass Rose (top-left) ── */}
      <div className="absolute top-8 left-8 w-24 h-24 opacity-40 pointer-events-none">
        <CompassRose />
      </div>

      {/* ── Section Header ── */}
      <div className="text-center mb-12 relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center p-3 rounded-full bg-amber-900/10 border border-amber-800/30 mb-3 shadow-md"
        >
          <Map className="w-8 h-8 text-amber-900" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-['Pirata_One'] text-5xl md:text-7xl text-amber-950 mb-3"
          style={{ textShadow: "3px 3px 0px rgba(101,67,33,0.3), 0 0 30px rgba(212,175,55,0.3)" }}
        >
          The Voyage Map
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-amber-900 text-lg font-['Cormorant_Garamond'] italic max-w-xl mx-auto font-medium"
        >
          "Follow the winding path, brave the stormy seas, and claim the ultimate treasure."
        </motion.p>
        <div className="flex items-center justify-center gap-4 mt-3">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-amber-800/50" />
          <Compass className="w-5 h-5 text-amber-800" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-amber-800/50" />
        </div>
      </div>

      {/* ── MAP AREA ── */}
      <div className="relative z-10 mx-auto" style={{ maxWidth: 750, minHeight: 1650 }}>
        <svg
          className="absolute inset-0 w-full"
          viewBox="0 0 750 1650"
          preserveAspectRatio="xMidYMid meet"
          style={{ height: "100%" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={PATH_D}
            fill="none"
            stroke="#D4AF37"
            strokeWidth="14"
            strokeLinecap="round"
            opacity="0.2"
          />
          <path
            d={PATH_D}
            fill="none"
            stroke="#8B6B3F"
            strokeWidth="3"
            strokeDasharray="14 8"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            ref={pathRef}
            id="voyage-path"
            d={PATH_D}
            fill="none"
            stroke="#D4AF37"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.95"
          />
        </svg>

        {/* ── PIRATE SHIP ── */}
        <div
          ref={shipRef}
          className="absolute z-30 pointer-events-none"
          style={{ width: 70, height: 52, marginLeft: -35, marginTop: -26, top: 0, left: 0 }}
        >
          <div className="absolute -inset-3 rounded-full bg-amber-400/30 blur-md" />
          <ShipSVG />
        </div>

        {/* ── MILESTONE CARDS (Properly Spaced & Alternating Sides) ── */}
        {MILESTONES.map((ms, i) => {
          // Precisely spaced coordinates along height=1650
          const nodes = [
            { x: 350, y: 80 },
            { x: 420, y: 260 },
            { x: 320, y: 480 },
            { x: 400, y: 720 },
            { x: 320, y: 960 },
            { x: 400, y: 1200 },
            { x: 350, y: 1440 },
            { x: 350, y: 1540 },
            { x: 350, y: 1580 },
          ];
          const node = nodes[i] || nodes[nodes.length - 1];
          const goesLeft = i % 2 === 1; // Alternating sides to avoid overlap

          return (
            <div
              key={ms.id}
              className="milestone-card absolute"
              style={{
                left: `${(node.x / 750) * 100}%`,
                top: `${(node.y / 1650) * 100}%`,
                transform: "translate(-50%, -50%)",
                zIndex: 20,
              }}
            >
              <div className="flex flex-col items-center">
                <IslandNode Icon={ms.Icon} isFinal={ms.isFinal} color={ms.color} />

                <div
                  className={`absolute top-1/2 -translate-y-1/2 w-52 sm:w-64 md:w-72
                    ${goesLeft ? "right-[115%]" : "left-[115%]"}
                  `}
                >
                  <div
                    className="rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
                    style={{
                      background: "linear-gradient(135deg, rgba(248,238,216,0.98) 0%, rgba(238,220,188,0.98) 100%)",
                      border: `1px solid ${ms.color}66`,
                      boxShadow: `0 15px 35px -5px rgba(80,50,20,0.35), 0 0 20px ${ms.color}22, inset 0 1px 0 rgba(255,255,255,0.6)`,
                    }}
                  >
                    {/* Decorative ambient shadow glow on hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
                      style={{
                        boxShadow: `0 0 30px ${ms.color}55`,
                      }}
                    />

                    {/* Corner Flourishes */}
                    <div className="absolute top-1.5 left-2 text-amber-800/40 text-xs select-none">✦</div>
                    <div className="absolute top-1.5 right-2 text-amber-800/40 text-xs select-none">✦</div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span
                          className="text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider shadow-sm"
                          style={{ background: ms.color + "22", color: ms.color, border: `1px solid ${ms.color}44` }}
                        >
                          {ms.day}
                        </span>
                        <span className="text-[11px] text-amber-900/80 font-['Cinzel'] font-semibold">{ms.time}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-['Pirata_One'] text-xl text-amber-950 leading-tight">
                          {ms.title}
                        </h3>
                      </div>

                      <p className="text-[11px] font-bold text-amber-800/90 uppercase tracking-wider mb-1.5 font-['Cinzel']">
                        {ms.subtitle}
                      </p>

                      <p className="text-[12.5px] text-amber-950/80 leading-relaxed font-['Cormorant_Garamond'] italic">
                        {ms.desc}
                      </p>

                      {ms.isFinal && (
                        <div className="mt-2.5 pt-2 border-t border-amber-700/20 text-center flex items-center justify-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-spin" style={{ animationDuration: '6s' }} />
                          <span className="text-amber-700 font-bold text-[11px] font-['Cinzel'] uppercase tracking-widest">
                            X Marks The Spot
                          </span>
                          <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-spin" style={{ animationDuration: '6s' }} />
                        </div>
                      )}
                    </div>

                    {/* Arrow */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 w-0 h-0
                        ${goesLeft
                          ? "right-0 translate-x-full border-t-[8px] border-b-[8px] border-t-transparent border-b-transparent border-l-[10px]"
                          : "left-0 -translate-x-full border-t-[8px] border-b-[8px] border-t-transparent border-b-transparent border-r-[10px]"
                        }
                      `}
                      style={{
                        borderLeftColor: goesLeft ? "rgba(238,220,188,0.98)" : "transparent",
                        borderRightColor: !goesLeft ? "rgba(238,220,188,0.98)" : "transparent",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* ── Ultimate Bounty Trophy ── */}
        <div
          className="absolute z-20"
          style={{ left: `${(350 / 750) * 100}%`, top: `${(1580 / 1650) * 100}%`, transform: "translate(-50%, -50%)" }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="p-3 rounded-full bg-amber-400 border-2 border-amber-600 shadow-[0_15px_35px_rgba(212,175,55,0.6)] cursor-pointer"
            title="The Ultimate Treasure!"
          >
            <Trophy className="w-8 h-8 text-amber-950" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TreasureMapTimeline;
