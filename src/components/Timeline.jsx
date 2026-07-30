import { useRef, useEffect, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Anchor, Skull, Compass, Flag, Crown, Swords, Code, Presentation, Coffee, Sun, Moon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ─── MILESTONE DATA (2 Days) ─── */
const MILESTONES = [
  // Day 1
  { id: "d1-checkin", emoji: "⚓", title: "Check-in & Swag", subtitle: "Day 1 - 09:00 AM", desc: "Arrive at the harbor, collect your gear, and meet the crew.", icon: Anchor, day: 1 },
  { id: "d1-kickoff", emoji: "📜", title: "Opening Ceremony", subtitle: "Day 1 - 10:30 AM", desc: "The Captain unveils the grand challenge and rules of engagement.", icon: Flag, day: 1 },
  { id: "d1-hacking", emoji: "💻", title: "Hacking Begins", subtitle: "Day 1 - 11:30 AM", desc: "Set sail! Start building your projects.", icon: Code, day: 1 },
  { id: "d1-lunch", emoji: "🍖", title: "Pirate Feast", subtitle: "Day 1 - 01:30 PM", desc: "Recharge your energy with a hearty lunch.", icon: Swords, day: 1 },
  { id: "d1-midnight", emoji: "🌙", title: "Midnight Checkpoint", subtitle: "Day 1 - 11:59 PM", desc: "Coffee, games, and late-night debugging sessions.", icon: Moon, day: 1 },
  // Day 2
  { id: "d2-sunrise", emoji: "☀️", title: "Sunrise Hustle", subtitle: "Day 2 - 06:00 AM", desc: "The final push before the deadline. Keep coding!", icon: Sun, day: 2 },
  { id: "d2-submit", emoji: "⏳", title: "Submissions Close", subtitle: "Day 2 - 11:30 AM", desc: "Drop your anchors. Hacking time is over.", icon: Compass, day: 2 },
  { id: "d2-present", emoji: "⚔️", title: "Pitch to Judges", subtitle: "Day 2 - 12:30 PM", desc: "Defend your treasure in front of the judging panel.", icon: Presentation, day: 2 },
  { id: "d2-closing", emoji: "👑", title: "Closing & Awards", subtitle: "Day 2 - 03:00 PM", desc: "Celebrate the victors and claim the ultimate bounty.", icon: Crown, isFinal: true, day: 2 },
];

/* ─── Pirate Ship SVG ─── */
const PirateShipSVG = () => (
  <svg viewBox="0 0 60 50" className="w-full h-full drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
    <path d="M8,34 Q12,40 30,42 Q48,40 52,34 L48,30 Q30,32 12,30 Z" fill="#8B4513" stroke="#5C3A21" strokeWidth="1" />
    <rect x="16" y="28" width="28" height="3" rx="1" fill="#A0522D" stroke="#5C3A21" strokeWidth="0.5" />
    <line x1="30" y1="28" x2="30" y2="6" stroke="#4A2E1B" strokeWidth="2" />
    <path d="M31,8 Q42,14 31,24" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
    <path d="M29,8 Q18,14 29,24" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1" />
    <path d="M30,5 L30,2 L38,3.5 L30,5" fill="#EF4444" stroke="#B91C1C" strokeWidth="0.5" />
  </svg>
);

/* ─── Island Card ─── */
const IslandCard = ({ milestone, index, side }) => {
  const IconComp = milestone.icon;
  const isFinal = milestone.isFinal;

  return (
    <motion.div
      className={`relative flex w-full ${side === "left" ? "md:justify-end" : "md:justify-start"}`}
      initial={{ opacity: 0, x: side === "left" ? -40 : 40, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
    >
      <div className="group relative w-full max-w-[380px] bg-white rounded-2xl p-6 shadow-xl border border-sky-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-2xl shadow-sm border border-amber-200">
          {milestone.emoji}
        </div>
        
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-sky-100 rounded-lg text-sky-600">
            <IconComp size={20} />
          </div>
          <span className="text-sm font-bold text-sky-600 bg-sky-50 px-3 py-1 rounded-full uppercase tracking-wider">
            {milestone.subtitle}
          </span>
        </div>

        <h3 className="font-['Cinzel'] text-xl font-bold text-slate-800 mb-2">
          {milestone.title}
        </h3>
        
        <p className="text-slate-600 text-sm leading-relaxed">
          {milestone.desc}
        </p>

        {isFinal && (
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-2xl -z-10 blur opacity-30 animate-pulse"></div>
        )}
      </div>
    </motion.div>
  );
};

/* ─── MAIN TIMELINE ─── */
const Timeline = () => {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (pathRef.current) {
        const length = pathRef.current.getTotalLength();
        gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(pathRef.current, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 1,
          },
        });
      }

      gsap.to(".pirate-ship", {
        top: "95%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 relative bg-sky-50 overflow-hidden">
      {/* Decorative compass bg */}
      <div className="absolute top-20 right-10 opacity-5 pointer-events-none">
        <Compass size={400} className="text-sky-900 animate-[spin_60s_linear_infinite]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-['Trade_Winds'] text-slate-800 mb-4"
          >
            The 48-Hour Voyage
          </motion.h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Chart your course through two days of intense hacking, mentoring, and pirate shenanigans.
          </p>
        </div>

        <div className="relative">
          {/* Path Line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[4px]">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 4 1000">
              <line x1="2" y1="0" x2="2" y2="1000" stroke="#E2E8F0" strokeWidth="4" strokeLinecap="round" />
              <line ref={pathRef} x1="2" y1="0" x2="2" y2="1000" stroke="#0284C7" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>

          {/* Ship */}
          <div className="pirate-ship absolute z-30 pointer-events-none left-6 md:left-1/2 -translate-x-1/2 w-[40px] h-[34px] md:w-[60px] md:h-[50px]">
            <PirateShipSVG />
          </div>

          {/* Milestones */}
          <div className="flex flex-col gap-12 md:gap-24 relative pt-10 pb-20">
            {MILESTONES.map((ms, i) => {
              const side = i % 2 === 0 ? "left" : "right";
              return (
                <div key={ms.id} className="relative flex items-center w-full">
                  
                  {/* Nodes */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-6 h-6 bg-white border-4 border-sky-500 rounded-full shadow-md"></div>

                  {/* Cards */}
                  <div className="w-full flex md:hidden pl-16">
                    <IslandCard milestone={ms} index={i} side="right" />
                  </div>

                  <div className="hidden md:flex w-full">
                    {side === "left" ? (
                      <>
                        <div className="w-1/2 pr-12 lg:pr-16 flex justify-end">
                          <IslandCard milestone={ms} index={i} side="left" />
                        </div>
                        <div className="w-1/2" />
                      </>
                    ) : (
                      <>
                        <div className="w-1/2" />
                        <div className="w-1/2 pl-12 lg:pl-16 flex justify-start">
                          <IslandCard milestone={ms} index={i} side="right" />
                        </div>
                      </>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
