import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Sparkles, Anchor, Compass } from "lucide-react";

const OurSponsors = () => {
  return (
    <section
      id="our-sponsors"
      className="relative py-24 px-6 bg-pirate-bg text-slate-100 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-500/40 bg-amber-500/10 mb-6 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="font-cinzel text-xs tracking-widest text-amber-300 uppercase font-bold">
            Voyage Alliance
          </span>
        </motion.div>

        {/* Title */}
        <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wide">
          Our <span className="text-amber-400">Sponsors</span>
        </h2>
        <p className="font-cinzel text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-12">
          The esteemed industry leaders and visionaries backing HackQubit 2.0.
        </p>

        {/* Announcement Card */}
        <div className="relative rounded-3xl border-2 border-dashed border-amber-500/40 bg-slate-900/80 backdrop-blur-2xl p-10 sm:p-14 shadow-2xl max-w-3xl mx-auto overflow-hidden">
          <div className="flex flex-col items-center justify-center gap-4 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-2">
              <Compass className="w-8 h-8 animate-[spin_25s_linear_infinite]" />
            </div>

            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-amber-300">
              Sponsors To Be Announced
            </h3>

            <p className="font-cinzel text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
              We are finalizing strategic partnerships with world-class technology companies and sponsors. Full sponsor lineup will be revealed soon!
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <div className="px-5 py-2.5 rounded-xl border border-slate-800 bg-slate-800/60 font-cinzel text-xs text-slate-400 font-semibold flex items-center gap-2">
                <Anchor className="w-4 h-4 text-amber-400" />
                <span>Title Sponsor Reveal Coming Soon</span>
              </div>
              <div className="px-5 py-2.5 rounded-xl border border-slate-800 bg-slate-800/60 font-cinzel text-xs text-slate-400 font-semibold flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-400" />
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
