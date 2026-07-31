import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Users, Eye, FileCheck, ShieldCheck, Sparkles, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ── Three cloud shapes ── */
const CloudA = ({ style }) => (
  <svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style={style}>
    <g fill="white">
      <ellipse cx="300" cy="150" rx="240" ry="75" />
      <ellipse cx="180" cy="130" rx="130" ry="80" />
      <ellipse cx="420" cy="120" rx="145" ry="88" />
      <ellipse cx="300" cy="105" rx="165" ry="92" />
      <ellipse cx="75"  cy="155" rx="90"  ry="58" />
      <ellipse cx="525" cy="148" rx="100" ry="62" />
      <ellipse cx="300" cy="78"  rx="105" ry="68" />
    </g>
  </svg>
);

const CloudB = ({ style }) => (
  <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" style={style}>
    <g fill="white">
      <ellipse cx="250" cy="140" rx="200" ry="68" />
      <ellipse cx="145" cy="118" rx="115" ry="72" />
      <ellipse cx="350" cy="112" rx="125" ry="78" />
      <ellipse cx="250" cy="94"  rx="145" ry="82" />
      <ellipse cx="55"  cy="142" rx="78"  ry="52" />
      <ellipse cx="445" cy="136" rx="88"  ry="58" />
    </g>
  </svg>
);

const CloudC = ({ style }) => (
  <svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" style={style}>
    <g fill="white">
      <ellipse cx="350" cy="160" rx="280" ry="82" />
      <ellipse cx="200" cy="138" rx="155" ry="90" />
      <ellipse cx="500" cy="130" rx="165" ry="96" />
      <ellipse cx="350" cy="112" rx="190" ry="100" />
      <ellipse cx="80"  cy="165" rx="105" ry="65" />
      <ellipse cx="620" cy="158" rx="118" ry="70" />
      <ellipse cx="350" cy="82"  rx="120" ry="75" />
    </g>
  </svg>
);

/*
  Cloud config:
  - Each cloud starts covering the section (x: 0, fully visible from its position)
  - On scroll it moves off to left (negative) or right (positive) by a large amount
  - dir: 'L' = moves left, 'R' = moves right
  - Clouds are large enough (60-80vw) so they cover the section fully when centred
*/
const CLOUDS = [
  // TOP band — covers full width with left+right pair
  { id: 0, shape: "C", top: "-6%",  startX: "-5%",   endX: "-120%", w: "70vw", opacity: 0.95, scrub: 1.2 },
  { id: 1, shape: "A", top: "-4%",  startX: "38%",   endX: "120%",  w: "72vw", opacity: 0.90, scrub: 1.0 },

  // UPPER-MID band
  { id: 2, shape: "B", top: "16%",  startX: "-8%",   endX: "-130%", w: "65vw", opacity: 0.88, scrub: 1.4 },
  { id: 3, shape: "A", top: "18%",  startX: "42%",   endX: "125%",  w: "68vw", opacity: 0.85, scrub: 1.1 },

  // MID band
  { id: 4, shape: "C", top: "36%",  startX: "-5%",   endX: "-115%", w: "75vw", opacity: 0.92, scrub: 1.3 },
  { id: 5, shape: "B", top: "38%",  startX: "36%",   endX: "118%",  w: "70vw", opacity: 0.88, scrub: 0.9 },

  // LOWER-MID band
  { id: 6, shape: "A", top: "58%",  startX: "-10%",  endX: "-120%", w: "68vw", opacity: 0.90, scrub: 1.5 },
  { id: 7, shape: "C", top: "56%",  startX: "40%",   endX: "122%",  w: "72vw", opacity: 0.86, scrub: 1.0 },

  // BOTTOM band
  { id: 8, shape: "B", top: "78%",  startX: "-6%",   endX: "-118%", w: "66vw", opacity: 0.93, scrub: 1.2 },
  { id: 9, shape: "A", top: "80%",  startX: "44%",   endX: "120%",  w: "70vw", opacity: 0.88, scrub: 1.1 },
];

const PERKS = [
  {
    category: "Engagements & Interaction",
    icon: Users,
    color: "from-amber-600 to-orange-600",
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
  const cloudRefs  = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cloudRefs.current.forEach((el, i) => {
        if (!el) return;
        const cloud = CLOUDS[i];
        // Start at startX (covering section), animate to endX (moved off screen)
        gsap.fromTo(
          el,
          { x: cloud.startX },
          {
            x: cloud.endX,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",   // start parting early
              end:   "center center", // fully gone by mid-section
              scrub: cloud.scrub,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderCloud = (cloud, idx) => {
    const sharedStyle = { width: "100%", height: "auto" };
    if (cloud.shape === "A") return <CloudA style={{ ...sharedStyle, opacity: cloud.opacity }} />;
    if (cloud.shape === "B") return <CloudB style={{ ...sharedStyle, opacity: cloud.opacity }} />;
    return <CloudC style={{ ...sharedStyle, opacity: cloud.opacity }} />;
  };

  return (
    <section
      ref={sectionRef}
      id="sponsorship-perks"
      className="relative py-28 px-6 bg-pirate-bg text-amber-950 overflow-hidden"
    >
      {/* ── CLOUD LAYER — starts covering, parts on scroll ── */}
      <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
        {CLOUDS.map((cloud, i) => (
          <div
            key={cloud.id}
            ref={(el) => (cloudRefs.current[i] = el)}
            className="absolute"
            style={{
              top:   cloud.top,
              left:  "0",
              width: cloud.w,
              // initial x set by GSAP
            }}
          >
            {renderCloud(cloud, i)}
          </div>
        ))}
      </div>

      {/* ── CONTENT (behind clouds until they part) ── */}
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
                className="rounded-3xl border border-amber-900/20 bg-white/95 backdrop-blur-xl p-8 flex flex-col justify-between hover:border-amber-700 transition-all duration-300 shadow-2xl group text-amber-950"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${perk.color} text-amber-50 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
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
