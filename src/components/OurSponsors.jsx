import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Sparkles, Anchor, Compass } from "lucide-react";

const OurSponsors = () => {
  return (
    <section
      id="our-sponsors"
      className="relative py-24 px-6 bg-slate-900 text-slate-900 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.2),transparent_70%)]" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-600/40 bg-amber-500/10 mb-6 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span className="font-cinzel text-xs tracking-widest text-amber-800 uppercase font-bold">
            Voyage Alliance
          </span>
        </motion.div>

        {/* Title */}
        <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wide">
          Our <span className="text-amber-500">Sponsors</span>
        </h2>
        <p className="font-cinzel text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-12">
          The esteemed industry leaders and visionaries backing HackQubit 2.0.
        </p>

        {/* Announcement Card (Bright Light Card with High Contrast) */}
        <div className="relative rounded-3xl border-2 border-dashed border-amber-500/50 bg-white/95 backdrop-blur-xl p-10 sm:p-14 shadow-2xl max-w-3xl mx-auto overflow-hidden text-slate-900">
          <div className="flex flex-col items-center justify-center gap-4 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-700 mb-2">
              <Compass className="w-8 h-8 animate-[spin_25s_linear_infinite]" />
            </div>

            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-slate-900">
              Sponsors To Be Announced
            </h3>

            <p className="font-cinzel text-sm sm:text-base text-slate-700 max-w-lg leading-relaxed font-medium">
              We are finalizing strategic partnerships with world-class technology companies and sponsors. Full sponsor lineup will be revealed soon!
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <div className="px-5 py-3 rounded-xl border border-amber-300 bg-amber-50 font-cinzel text-xs text-amber-900 font-bold flex items-center gap-2 shadow-sm">
                <Anchor className="w-4 h-4 text-amber-700" />
                <span>Title Sponsor Reveal Coming Soon</span>
              </div>
              <div className="px-5 py-3 rounded-xl border border-amber-300 bg-amber-50 font-cinzel text-xs text-amber-900 font-bold flex items-center gap-2 shadow-sm">
                <ShieldAlert className="w-4 h-4 text-amber-700" />
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
