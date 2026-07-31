import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Users, Eye, FileCheck, ShieldCheck, Sparkles, Award } from "lucide-react";

import emblemSkullAnchor from "../assets/images/emblem_skull_anchor.png";
import emblemPirateShip from "../assets/images/emblem_pirate_ship.png";
import emblemTreasureChest from "../assets/images/emblem_treasure_chest.png";

gsap.registerPlugin(ScrollTrigger);

/* ── 3 HIGH-QUALITY FLUFFY SVG CUMULUS CLOUDS WITH CSS GRADIENTS & FILTERS ── */

// Cloud 1: Fluffy Top Cumulus Cloud
const FluffyCloud1 = ({ className, style }) => (
  <svg
    viewBox="0 0 1000 450"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <defs>
      <linearGradient id="cloudGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
        <stop offset="70%" stopColor="#F8FAFC" stopOpacity="0.98" />
        <stop offset="100%" stopColor="#E2E8F0" stopOpacity="0.95" />
      </linearGradient>
      <filter id="cloudShadow1" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="18" stdDeviation="25" floodColor="#0F172A" floodOpacity="0.12" />
      </filter>
    </defs>
    <g filter="url(#cloudShadow1)" fill="url(#cloudGrad1)">
      <ellipse cx="500" cy="300" rx="420" ry="120" />
      <ellipse cx="320" cy="260" rx="220" ry="140" />
      <ellipse cx="680" cy="250" rx="240" ry="145" />
      <ellipse cx="500" cy="200" rx="270" ry="160" />
      <ellipse cx="160" cy="300" rx="140" ry="100" />
      <ellipse cx="840" cy="290" rx="150" ry="105" />
      <ellipse cx="500" cy="140" rx="180" ry="110" />
    </g>
  </svg>
);

// Cloud 2: Fluffy Middle Cumulus Cloud
const FluffyCloud2 = ({ className, style }) => (
  <svg
    viewBox="0 0 1000 450"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <defs>
      <linearGradient id="cloudGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
        <stop offset="65%" stopColor="#F1F5F9" stopOpacity="0.98" />
        <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.92" />
      </linearGradient>
      <filter id="cloudShadow2" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="20" stdDeviation="28" floodColor="#0F172A" floodOpacity="0.14" />
      </filter>
    </defs>
    <g filter="url(#cloudShadow2)" fill="url(#cloudGrad2)">
      <ellipse cx="500" cy="310" rx="440" ry="125" />
      <ellipse cx="280" cy="270" rx="240" ry="150" />
      <ellipse cx="720" cy="260" rx="230" ry="140" />
      <ellipse cx="500" cy="190" rx="280" ry="165" />
      <ellipse cx="140" cy="320" rx="130" ry="95" />
      <ellipse cx="860" cy="310" rx="140" ry="100" />
      <ellipse cx="380" cy="150" rx="170" ry="115" />
      <ellipse cx="620" cy="160" rx="160" ry="110" />
    </g>
  </svg>
);

// Cloud 3: Fluffy Bottom Cumulus Cloud
const FluffyCloud3 = ({ className, style }) => (
  <svg
    viewBox="0 0 1000 450"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <defs>
      <linearGradient id="cloudGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
        <stop offset="70%" stopColor="#F8FAFC" stopOpacity="0.97" />
        <stop offset="100%" stopColor="#E2E8F0" stopOpacity="0.94" />
      </linearGradient>
      <filter id="cloudShadow3" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="16" stdDeviation="24" floodColor="#0F172A" floodOpacity="0.12" />
      </filter>
    </defs>
    <g filter="url(#cloudShadow3)" fill="url(#cloudGrad3)">
      <ellipse cx="500" cy="290" rx="430" ry="120" />
      <ellipse cx="340" cy="250" rx="230" ry="145" />
      <ellipse cx="660" cy="240" rx="250" ry="150" />
      <ellipse cx="500" cy="180" rx="260" ry="155" />
      <ellipse cx="150" cy="290" rx="135" ry="98" />
      <ellipse cx="850" cy="280" rx="145" ry="102" />
      <ellipse cx="500" cy="130" rx="175" ry="105" />
    </g>
  </svg>
);

/*
  EXACTLY 3 EXTRA-LARGE CLOUDS COVERING THE SECTION
  On scroll, Cloud 1 exits left, Cloud 2 exits right, Cloud 3 exits left
*/
const CLOUDS_CONFIG = [
  // Cloud 1: Top (Starts covering top half, moves left on scroll)
  { id: 1, top: "-10%", left: "-15%", w: "105vw", startX: "0%", endX: "-120%", scrub: 1.2 },
  // Cloud 2: Middle (Starts covering center half, moves right on scroll)
  { id: 2, top: "28%",  left: "10%",  w: "105vw", startX: "0%", endX: "120%",  scrub: 1.4 },
  // Cloud 3: Bottom (Starts covering lower half, moves left on scroll)
  { id: 3, top: "65%",  left: "-15%", w: "105vw", startX: "0%", endX: "-120%", scrub: 1.3 },
];

const PERKS = [
  {
    category: "Engagements & Interaction",
    icon: Users,
    color: "from-amber-600 to-orange-600",
    badge: "Community Direct Access",
    emblem: emblemSkullAnchor,
    items: [
      "Direct live interactions with 500+ passionate developers & tech pioneers.",
      "Dedicated recruitment desk & speed-networking rounds with top hacker talent.",
      "Keynote speaking opportunity during the Opening & Grand Finale ceremony.",
      "Custom branded hackathon challenge / track creation for your product SDKs.",
    ],
  },
  {
    category: "Brand Visibility & Exposure",
    icon: Eye,
    color: "from-amber-600 to-yellow-600",
    badge: "Maximum Reach",
    emblem: emblemPirateShip,
    items: [
      "Prime logo placement on main stage backdrops, banners, & official website.",
      "Prominent features in official press releases, social media shoutouts & newsletters.",
      "Exclusive brand merch distribution inside every pirate hacker welcome kit.",
      "Digital banner placements across all live streams & leaderboards.",
    ],
  },
  {
    category: "Post Event Management & Perks",
    icon: FileCheck,
    color: "from-yellow-600 to-amber-700",
    badge: "Long-Term Value",
    emblem: emblemTreasureChest,
    items: [
      "Full access to opt-in participant resume database & project repositories.",
      "Post-event highlight video inclusion & winner showcase endorsement.",
      "Priority invitation to all future HackQubit chapters & partner summits.",
      "Detailed post-event analytics report on attendee engagement & brand impressions.",
    ],
  },
];

const SponsorPerks = () => {
  const sectionRef = useRef(null);
  const cloudRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cloudRefs.current.forEach((el, i) => {
        if (!el) return;
        const config = CLOUDS_CONFIG[i];
        gsap.fromTo(
          el,
          { x: config.startX },
          {
            x: config.endX,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "center center",
              scrub: config.scrub,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="sponsorship-perks"
      className="relative py-28 px-6 bg-pirate-bg text-amber-950 overflow-hidden"
    >
      {/* ── 3 HUGE FLUFFY PARALLAX SVG CLOUDS COVERING SECTION ── */}
      <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
        {/* Cloud 1 */}
        <div
          ref={(el) => (cloudRefs.current[0] = el)}
          className="absolute"
          style={{
            top: CLOUDS_CONFIG[0].top,
            left: CLOUDS_CONFIG[0].left,
            width: CLOUDS_CONFIG[0].w,
          }}
        >
          <FluffyCloud1 className="w-full h-auto" />
        </div>

        {/* Cloud 2 */}
        <div
          ref={(el) => (cloudRefs.current[1] = el)}
          className="absolute"
          style={{
            top: CLOUDS_CONFIG[1].top,
            left: CLOUDS_CONFIG[1].left,
            width: CLOUDS_CONFIG[1].w,
          }}
        >
          <FluffyCloud2 className="w-full h-auto" />
        </div>

        {/* Cloud 3 */}
        <div
          ref={(el) => (cloudRefs.current[2] = el)}
          className="absolute"
          style={{
            top: CLOUDS_CONFIG[2].top,
            left: CLOUDS_CONFIG[2].left,
            width: CLOUDS_CONFIG[2].w,
          }}
        >
          <FluffyCloud3 className="w-full h-auto" />
        </div>
      </div>

      {/* ── SECTION CONTENT (behind clouds until they part) ── */}
      <div className="max-w-6xl mx-auto relative z-20">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-900/40 bg-amber-500/20 mb-4 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-amber-900" />
            <span className="font-cinzel text-xs tracking-widest text-amber-950 uppercase font-extrabold">
              Exclusive Partner Privileges
            </span>
          </motion.div>

          <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-black text-amber-950 tracking-wide">
            Sponsorship <span className="text-amber-800">Perks</span>
          </h2>
          <p className="mt-4 font-cinzel text-amber-900 font-bold text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Partner with HackQubit 2.0 to unlock unparalleled developer engagement,
            brand prominence, and post-event talent access.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PERKS.map((perk, index) => {
            const IconComponent = perk.icon;
            return (
              <motion.div
                key={perk.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative rounded-3xl border border-amber-900/20 bg-white/95 backdrop-blur-xl p-8 pt-12 flex flex-col justify-between hover:border-amber-700 transition-all duration-300 shadow-2xl group text-amber-950"
              >
                {/* Top Middle Vintage Emblem Logo */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-30 pointer-events-none w-20 h-20">
                  <img
                    src={perk.emblem}
                    alt={perk.category}
                    className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(120,70,10,0.3)] group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${perk.color} text-amber-50 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-[11px] font-black tracking-wider uppercase px-3 py-1 rounded-full bg-amber-100 text-amber-950 border border-amber-300">
                      {perk.badge}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-xl font-extrabold text-amber-950 mb-4 group-hover:text-amber-800 transition-colors">
                    {perk.category}
                  </h3>

                  <ul className="space-y-3 font-cinzel text-xs sm:text-sm text-amber-900 font-bold leading-relaxed">
                    {perk.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-amber-200 flex items-center justify-between text-xs text-amber-950 font-black font-cinzel">
                  <span>Included in Gold &amp; Platinum</span>
                  <Award className="w-4 h-4 text-amber-700" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SponsorPerks;
