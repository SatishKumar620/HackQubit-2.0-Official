import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Sparkles, Anchor, Compass } from "lucide-react";

const OurSponsors = () => {
  return (
    <section
      id="our-sponsors"
      className="relative py-24 px-6 bg-pirate-bg text-amber-950 overflow-hidden"
    >
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
        <p className="font-cinzel text-amber-900 font-bold text-base sm:text-lg max-w-xl mx-auto mb-12">
          The esteemed industry leaders and visionaries backing HackQubit 2.0.
        </p>

        {/* Announcement Card (White Card with Dark Brown Text) */}
        <div className="relative rounded-3xl border-2 border-dashed border-amber-700/40 bg-white/95 backdrop-blur-xl p-10 sm:p-14 shadow-2xl max-w-3xl mx-auto overflow-hidden text-amber-950">
          <div className="flex flex-col items-center justify-center gap-4 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-600/40 flex items-center justify-center text-amber-900 mb-2">
              <Compass className="w-8 h-8 animate-[spin_25s_linear_infinite]" />
            </div>

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
