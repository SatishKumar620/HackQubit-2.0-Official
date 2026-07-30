import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Users, Eye, FileCheck, ShieldCheck, Sparkles, Award } from "lucide-react";

import cloudLeftImg from "../assets/images/cloud_left.png";
import cloudRightImg from "../assets/images/cloud_right.png";

gsap.registerPlugin(ScrollTrigger);

const PERKS = [
  {
    category: "Engagements & Interaction",
    icon: Users,
    color: "from-amber-500 to-orange-500",
    badge: "Community Direct Access",
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
    color: "from-amber-500 to-yellow-500",
    badge: "Maximum Reach",
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
    color: "from-yellow-500 to-amber-600",
    badge: "Long-Term Value",
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
  const cloudLeftRef = useRef(null);
  const cloudRightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll-triggered clouds parting animation (Left cloud moves left, Right cloud moves right)
      if (cloudLeftRef.current && cloudRightRef.current) {
        gsap.fromTo(
          cloudLeftRef.current,
          { x: "0%" },
          {
            x: "-100%",
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 90%",
              end: "bottom 30%",
              scrub: 1.2,
            },
          }
        );

        gsap.fromTo(
          cloudRightRef.current,
          { x: "0%" },
          {
            x: "100%",
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 90%",
              end: "bottom 30%",
              scrub: 1.2,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="sponsorship-perks"
      className="relative py-28 px-6 bg-slate-900 text-slate-900 overflow-hidden"
    >
      {/* ── PARALLEL SCROLLING CLOUDS (POSITIONS AT THE MIDDLE & PARTS AWAY ON SCROLL) ── */}
      <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
        {/* Left White Cloud - Centered at Middle (top-1/2) */}
        <div
          ref={cloudLeftRef}
          className="absolute top-1/2 -left-32 -translate-y-1/2 w-[65vw] md:w-[50vw] max-w-[700px] opacity-95 filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
        >
          <img
            src={cloudLeftImg}
            alt="Left White Cloud"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right White Cloud - Centered at Middle (top-1/2) */}
        <div
          ref={cloudRightRef}
          className="absolute top-1/2 -right-32 -translate-y-1/2 w-[65vw] md:w-[50vw] max-w-[700px] opacity-95 filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
        >
          <img
            src={cloudRightImg}
            alt="Right White Cloud"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-600/40 bg-amber-500/10 mb-4 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="font-cinzel text-xs tracking-widest text-amber-800 uppercase font-bold">
              Exclusive Partner Privileges
            </span>
          </motion.div>

          <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-wide">
            Sponsorship <span className="text-amber-500">Perks</span>
          </h2>
          <p className="mt-4 font-cinzel text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Partner with HackQubit 2.0 to unlock unparalleled developer engagement, brand prominence, and post-event talent access.
          </p>
        </div>

        {/* Perks Grid (High-Contrast Clean Readable White Cards) */}
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
                className="rounded-3xl border border-slate-700/60 bg-white/95 backdrop-blur-xl p-8 flex flex-col justify-between hover:border-amber-500 transition-all duration-300 shadow-2xl group text-slate-900"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${perk.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-300">
                      {perk.badge}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-xl font-bold text-slate-950 mb-4 group-hover:text-amber-600 transition-colors">
                    {perk.category}
                  </h3>

                  {/* List of Perks with High Readability */}
                  <ul className="space-y-3 font-cinzel text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {perk.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-amber-800 font-bold font-cinzel">
                  <span>Included in Gold & Platinum</span>
                  <Award className="w-4 h-4 text-amber-600" />
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
