import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Flame, Clock, ScrollText } from "lucide-react";

import emblemCompassMap from "../assets/images/emblem_compass_map.png";
import emblemSkullAnchor from "../assets/images/emblem_skull_anchor.png";
import emblemTreasureChest from "../assets/images/emblem_treasure_chest.png";
import emblemPirateShip from "../assets/images/emblem_pirate_ship.png";
import femalePirateNavigator from "../assets/images/female_pirate_navigator.png";

const TRACKS = [
  { title: "Web & Mobile Dev", badge: "Track 01", emblem: emblemCompassMap },
  { title: "AI & Machine Learning", badge: "Track 02", emblem: emblemSkullAnchor },
  { title: "Web3 & Blockchain", badge: "Track 03", emblem: emblemTreasureChest },
  { title: "Open Innovation", badge: "Track 04", emblem: emblemPirateShip },
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
            Challenges Locked &amp; Sealed
          </span>
        </motion.div>

        {/* Title */}
        <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-black text-amber-950 mb-4 tracking-wide">
          Problem <span className="text-amber-800">Statements</span>
        </h2>
        <p className="font-cinzel text-amber-900 font-bold text-base sm:text-lg max-w-xl mx-auto mb-16">
          The secret pirate challenges will be unveiled live at the opening ceremony!
        </p>

        {/* Main Announcement Banner with Top Vintage Emblem Logo & Female Pirate Navigator Overlay */}
        <div className="relative rounded-3xl border-2 border-amber-700/40 bg-white/95 backdrop-blur-xl p-8 sm:p-12 shadow-2xl mb-20 max-w-3xl mx-auto text-amber-950">
          {/* Female Pirate Navigator Standing Cutout Overlay (Empty Right Space) */}
          <div className="absolute -bottom-4 -right-16 sm:-right-24 z-20 pointer-events-none hidden md:block">
            <img
              src={femalePirateNavigator}
              alt="Female Pirate Navigator"
              className="w-44 sm:w-52 h-auto object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)] transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          {/* Top Middle Vintage Emblem Badge Logo */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex justify-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 transition-transform duration-500 hover:scale-110">
              <img
                src={emblemTreasureChest}
                alt="Vintage Pirate Treasure Emblem"
                className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(120,70,10,0.35)]"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 relative z-10 pt-8">
            
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

        {/* Tracks Grid Preview with Top Vintage Emblems (No Inner Duplicate Logos) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
          {TRACKS.map((t) => (
            <div
              key={t.badge}
              className="relative p-6 pt-10 rounded-2xl border border-amber-900/20 bg-white/90 backdrop-blur-md flex flex-col items-center gap-3 hover:border-amber-700 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Top Middle Vintage Emblem Logo */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none w-16 h-16">
                <img
                  src={t.emblem}
                  alt={t.title}
                  className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <span className="text-[11px] font-black tracking-widest text-amber-800 uppercase mt-2">
                {t.badge}
              </span>
              <h4 className="font-cinzel text-sm sm:text-base font-extrabold text-amber-950">
                {t.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatements;
