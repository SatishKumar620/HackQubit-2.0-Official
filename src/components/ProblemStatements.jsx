import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Flame, Clock, ScrollText, Code2, Cpu, Globe, Rocket } from "lucide-react";

const TRACKS = [
  { icon: Code2, title: "Web & Mobile Dev", badge: "Track 01" },
  { icon: Cpu, title: "AI & Machine Learning", badge: "Track 02" },
  { icon: Globe, title: "Web3 & Blockchain", badge: "Track 03" },
  { icon: Rocket, title: "Open Innovation", badge: "Track 04" },
];

const ProblemStatements = () => {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      id="problem-statements"
      className="relative py-24 px-6 bg-pirate-bg text-slate-900 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-900/40 bg-amber-500/20 mb-6 shadow-sm"
        >
          <Flame className="w-4 h-4 text-amber-900 animate-pulse" />
          <span className="font-cinzel text-xs tracking-widest text-amber-950 uppercase font-extrabold">
            Challenges Locked & Sealed
          </span>
        </motion.div>

        {/* Title: Deep Brown/Slate for Sky BG */}
        <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-black text-amber-950 mb-4 tracking-wide">
          Problem <span className="text-amber-800">Statements</span>
        </h2>
        <p className="font-cinzel text-amber-900 font-bold text-base sm:text-lg max-w-xl mx-auto mb-12">
          The secret pirate challenges will be unveiled live at the opening ceremony!
        </p>

        {/* Main Announcement Banner (Pure White Card with Dark Brown Text) */}
        <div className="relative rounded-3xl border-2 border-amber-700/40 bg-white/95 backdrop-blur-xl p-8 sm:p-12 shadow-2xl mb-16 max-w-3xl mx-auto overflow-hidden text-amber-950">
          <div className="flex flex-col items-center justify-center gap-4 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center shadow-lg text-amber-50 mb-2">
              <ScrollText className="w-8 h-8 stroke-[2.2]" />
            </div>
            
            <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-amber-950">
              To Be Announced Live
            </h3>
            
            <p className="font-cinzel text-sm sm:text-base text-amber-900 font-bold max-w-md leading-relaxed">
              Prepare your crew and sharpen your tools. Official problem statements and track challenges will be released on site during the Hackathon Kickoff!
            </p>

            <div className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-100 border border-amber-300 text-amber-950 font-cinzel text-xs font-black shadow-sm">
              <Clock className="w-4 h-4 text-amber-800" />
              <span>Unlocking On Hackathon Day</span>
            </div>
          </div>
        </div>

        {/* Tracks Grid Preview (White Cards with Dark Brown Text) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {TRACKS.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.badge}
                className="p-6 rounded-2xl border border-amber-900/20 bg-white/90 backdrop-blur-md flex flex-col items-center gap-3 hover:border-amber-700 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-amber-500/20 text-amber-900 group-hover:scale-110 group-hover:bg-amber-800 group-hover:text-amber-50 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-black tracking-widest text-amber-800 uppercase">
                  {t.badge}
                </span>
                <h4 className="font-cinzel text-sm sm:text-base font-extrabold text-amber-950">
                  {t.title}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatements;
