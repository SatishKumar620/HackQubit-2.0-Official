import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Sparkles, Anchor } from "lucide-react";
import emblemPirateShip from "../assets/images/emblem_pirate_ship.png";
import femalePirateQuartermaster from "../assets/images/female_pirate_quartermaster.png";
import bgStoryOurSponsors from "../assets/images/bg_story_our_sponsors.png";
import GoldRainParticles from "./GoldRainParticles";

const OurSponsors = () => {
  return (
    <section
      id="our-sponsors"
      className="relative py-24 px-6 bg-pirate-bg text-amber-950 overflow-hidden"
    >
      <GoldRainParticles />

      {/* ── LANDSCAPE ANIME STORY BACKGROUND AT BOTTOM WITH TOP GRADIENT BLEND ── */}
      <div className="absolute inset-x-0 bottom-0 h-[380px] sm:h-[460px] pointer-events-none z-0 overflow-hidden">
        <img
          src={bgStoryOurSponsors}
          alt="Pirate Sponsors Armada Story"
          className="w-full h-full object-cover object-bottom opacity-40 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-pirate-bg/60 to-pirate-bg" />
      </div>
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-900/40 bg-amber-500/20 mb-6 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-amber-900" />
          <span className="font-cinzel text-xs tracking-widest text-amber-950 uppercase font-extrabold">
            Voyage Alliance
          </span>
        </motion.div>

        {/* Title */}
        <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-black text-amber-950 mb-4 tracking-wide">
          Our <span className="text-amber-800">Sponsors</span>
        </h2>
        <p className="font-cinzel text-amber-900 font-bold text-base sm:text-lg max-w-xl mx-auto mb-16">
          The esteemed industry leaders and visionaries backing HackQubit 2.0.
        </p>

        {/* Announcement Card with Top Vintage Emblem Logo & Female Pirate Quartermaster */}
        <div className="relative rounded-3xl border-2 border-dashed border-amber-700/40 bg-white/95 backdrop-blur-xl p-10 sm:p-14 shadow-2xl max-w-3xl mx-auto text-amber-950">
          {/* Female Pirate Quartermaster Overlay (Empty Left Space) */}
          <div className="absolute -bottom-4 -left-16 sm:-left-24 z-20 pointer-events-none hidden md:block">
            <img
              src={femalePirateQuartermaster}
              alt="Female Pirate Quartermaster"
              className="w-44 sm:w-52 h-auto object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)] transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          {/* Top Middle Vintage Pirate Emblem Logo */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex justify-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 transition-transform duration-500 hover:scale-110">
              <img
                src={emblemPirateShip}
                alt="Vintage Pirate Ship Emblem"
                className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(120,70,10,0.35)]"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 relative z-10 pt-4">
            <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-amber-950">
              Sponsors To Be Announced
            </h3>

            <p className="font-cinzel text-sm sm:text-base text-amber-900 font-bold max-w-lg leading-relaxed">
              We are finalizing strategic partnerships with world-class technology companies and sponsors. Full sponsor lineup will be revealed soon!
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <div className="px-5 py-3 rounded-xl border border-amber-300 bg-amber-50 font-cinzel text-xs text-amber-950 font-black flex items-center gap-2 shadow-sm">
                <Anchor className="w-4 h-4 text-amber-800" />
                <span>Title Sponsor Reveal Coming Soon</span>
              </div>
              <div className="px-5 py-3 rounded-xl border border-amber-300 bg-amber-50 font-cinzel text-xs text-amber-950 font-black flex items-center gap-2 shadow-sm">
                <ShieldAlert className="w-4 h-4 text-amber-800" />
                <span>Track Partners Reveal Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSponsors;
