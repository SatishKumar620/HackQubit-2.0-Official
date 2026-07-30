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
    color: "from-amber-500 to-orange-600",
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
    color: "from-amber-600 to-yellow-600",
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
    color: "from-yellow-600 to-amber-700",
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
            x: "-90%",
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "top 20%",
              scrub: 1.2,
            },
          }
        );

        gsap.fromTo(
          cloudRightRef.current,
          { x: "0%" },
          {
            x: "90%",
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "top 20%",
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
      className="relative py-28 px-6 bg-slate-900 text-slate-100 overflow-hidden"
    >
      {/* ── PARALLEL SCROLLING CLOUDS (PARTS AWAY ON SCROLL) ── */}
      <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
        {/* Left White Cloud */}
        <div
          ref={cloudLeftRef}
          className="absolute -top-10 -left-20 w-[60vw] md:w-[45vw] max-w-[650px] opacity-90 filter drop-shadow-2xl"
        >
          <img
            src={cloudLeftImg}
            alt="Left Cloud"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right White Cloud */}
        <div
          ref={cloudRightRef}
          className="absolute -top-10 -right-20 w-[60vw] md:w-[45vw] max-w-[650px] opacity-90 filter drop-shadow-2xl"
        >
          <img
            src={cloudRightImg}
            alt="Right Cloud"
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 mb-4"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="font-cinzel text-xs tracking-widest text-amber-300 uppercase font-semibold">
              Exclusive Partner Privileges
            </span>
          </motion.div>

          <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-wide">
            Sponsorship <span className="text-amber-400">Perks</span>
          </h2>
          <p className="mt-4 font-cinzel text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Partner with HackQubit 2.0 to unlock unparalleled developer engagement, brand prominence, and post-event talent access.
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
                className="rounded-3xl border border-slate-800 bg-slate-800/60 backdrop-blur-xl p-8 flex flex-col justify-between hover:border-amber-500/50 transition-all duration-300 shadow-xl group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${perk.color} text-slate-950 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-slate-700/60 text-amber-300 border border-slate-600">
                      {perk.badge}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                    {perk.category}
                  </h3>

                  {/* List of Perks */}
                  <ul className="space-y-3 font-cinzel text-xs text-slate-300 leading-relaxed">
                    {perk.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-700/50 flex items-center justify-between text-xs text-amber-400 font-semibold font-cinzel">
                  <span>Included in Gold & Platinum</span>
                  <Award className="w-4 h-4" />
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
