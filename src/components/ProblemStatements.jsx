import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Flame, Clock, ScrollText, Code2, Cpu, Globe, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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
      className="relative py-24 px-6 bg-slate-900 text-slate-900 overflow-hidden"
    >
      {/* Soft warm gradient backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_50%_30%,rgba(251,191,36,0.15),transparent_70%)]" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-600/40 bg-amber-500/10 mb-6 shadow-sm"
        >
          <Flame className="w-4 h-4 text-amber-600 animate-pulse" />
          <span className="font-cinzel text-xs tracking-widest text-amber-800 uppercase font-bold">
            Challenges Locked & Sealed
          </span>
        </motion.div>

        {/* Title */}
        <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wide">
          Problem <span className="text-amber-500">Statements</span>
        </h2>
        <p className="font-cinzel text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-12">
          The secret pirate challenges will be unveiled live at the opening ceremony!
        </p>

        {/* Main Announcement Banner (Bright & Readable) */}
        <div className="relative rounded-3xl border-2 border-amber-400/50 bg-white/95 backdrop-blur-xl p-8 sm:p-12 shadow-2xl mb-16 max-w-3xl mx-auto overflow-hidden text-slate-900">
          <div className="flex flex-col items-center justify-center gap-4 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg text-white mb-2">
              <ScrollText className="w-8 h-8 stroke-[2.2]" />
            </div>
            
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-slate-900">
              To Be Announced Live
            </h3>
            
            <p className="font-cinzel text-sm sm:text-base text-slate-700 max-w-md leading-relaxed font-medium">
              Prepare your crew and sharpen your tools. Official problem statements and track challenges will be released on site during the Hackathon Kickoff!
            </p>

            <div className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 font-cinzel text-xs font-bold shadow-sm">
              <Clock className="w-4 h-4 text-amber-700 animate-spin-slow" />
              <span>Unlocking On Hackathon Day</span>
            </div>
          </div>
        </div>

        {/* Tracks Grid Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {TRACKS.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.badge}
                className="p-6 rounded-2xl border border-slate-700/80 bg-white/90 backdrop-blur-md flex flex-col items-center gap-3 hover:border-amber-500 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-700 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold tracking-widest text-amber-800 uppercase">
                  {t.badge}
                </span>
                <h4 className="font-cinzel text-sm sm:text-base font-bold text-slate-900">
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
