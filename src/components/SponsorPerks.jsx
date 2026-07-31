import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Users, Eye, FileCheck, ShieldCheck, Sparkles, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Pure inline SVG cloud shapes — no external file needed
const CloudSVG = ({ className, opacity = 0.9 }) => (
  <svg
    className={className}
    viewBox="0 0 500 200"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity }}
  >
    <g fill="white">
      <ellipse cx="250" cy="130" rx="200" ry="70" />
      <ellipse cx="150" cy="110" rx="110" ry="70" />
      <ellipse cx="340" cy="105" rx="120" ry="75" />
      <ellipse cx="250" cy="90" rx="140" ry="80" />
      <ellipse cx="100" cy="130" rx="80" ry="55" />
      <ellipse cx="400" cy="125" rx="90" ry="60" />
    </g>
  </svg>
);

const CloudSVG2 = ({ className, opacity = 0.85 }) => (
  <svg
    className={className}
    viewBox="0 0 600 220"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity }}
  >
    <g fill="white">
      <ellipse cx="300" cy="140" rx="240" ry="80" />
      <ellipse cx="180" cy="120" rx="130" ry="80" />
      <ellipse cx="420" cy="115" rx="140" ry="85" />
      <ellipse cx="300" cy="100" rx="160" ry="90" />
      <ellipse cx="80"  cy="145" rx="90"  ry="60" />
      <ellipse cx="520" cy="140" rx="100" ry="65" />
      <ellipse cx="300" cy="75"  rx="100" ry="65" />
    </g>
  </svg>
);

const CloudSVG3 = ({ className, opacity = 0.8 }) => (
  <svg
    className={className}
    viewBox="0 0 400 180"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity }}
  >
    <g fill="white">
      <ellipse cx="200" cy="120" rx="170" ry="60" />
      <ellipse cx="110" cy="100" rx="100" ry="65" />
      <ellipse cx="290" cy="95"  rx="110" ry="68" />
      <ellipse cx="200" cy="80"  rx="130" ry="70" />
      <ellipse cx="50"  cy="120" rx="70"  ry="48" />
      <ellipse cx="350" cy="115" rx="80"  ry="50" />
    </g>
  </svg>
);

// Cloud configuration: position, size, shape, scroll speed & direction
const CLOUDS = [
  // ── TOP ROW ──
  { id: 0, top: "2%",  left: "-10%",  w: "38vw", shape: 1, speed: -60,  dir: "x", opacity: 0.92 },
  { id: 1, top: "1%",  left: "30%",   w: "30vw", shape: 3, speed: 40,   dir: "x", opacity: 0.85 },
  { id: 2, top: "0%",  left: "65%",   w: "42vw", shape: 2, speed: -50,  dir: "x", opacity: 0.90 },

  // ── UPPER-MID ROW ──
  { id: 3, top: "18%", left: "-15%",  w: "45vw", shape: 2, speed: 55,   dir: "x", opacity: 0.80 },
  { id: 4, top: "22%", left: "45%",   w: "36vw", shape: 1, speed: -45,  dir: "x", opacity: 0.75 },
  { id: 5, top: "15%", left: "72%",   w: "35vw", shape: 3, speed: 35,   dir: "x", opacity: 0.82 },

  // ── MIDDLE ROW ──
  { id: 6, top: "42%", left: "-8%",   w: "40vw", shape: 3, speed: -70,  dir: "x", opacity: 0.78 },
  { id: 7, top: "45%", left: "38%",   w: "50vw", shape: 2, speed: 60,   dir: "x", opacity: 0.72 },
  { id: 8, top: "40%", left: "70%",   w: "38vw", shape: 1, speed: -40,  dir: "x", opacity: 0.80 },

  // ── LOWER ROW ──
  { id: 9,  top: "65%", left: "-12%", w: "44vw", shape: 1, speed: 65,   dir: "x", opacity: 0.85 },
  { id: 10, top: "68%", left: "42%",  w: "34vw", shape: 3, speed: -55,  dir: "x", opacity: 0.80 },
  { id: 11, top: "63%", left: "68%",  w: "46vw", shape: 2, speed: 45,   dir: "x", opacity: 0.88 },

  // ── BOTTOM ROW ──
  { id: 12, top: "85%", left: "-5%",  w: "36vw", shape: 2, speed: -50,  dir: "x", opacity: 0.90 },
  { id: 13, top: "88%", left: "35%",  w: "42vw", shape: 1, speed: 40,   dir: "x", opacity: 0.82 },
  { id: 14, top: "83%", left: "70%",  w: "40vw", shape: 3, speed: -60,  dir: "x", opacity: 0.87 },
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
  const cloudRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cloudRefs.current.forEach((el, i) => {
        if (!el) return;
        const cloud = CLOUDS[i];
        gsap.fromTo(
          el,
          { x: 0 },
          {
            x: cloud.speed,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5 + (i % 4) * 0.3,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getShape = (shape, className, opacity) => {
    if (shape === 1) return <CloudSVG className={className} opacity={opacity} />;
    if (shape === 2) return <CloudSVG2 className={className} opacity={opacity} />;
    return <CloudSVG3 className={className} opacity={opacity} />;
  };

  return (
    <section
      ref={sectionRef}
      id="sponsorship-perks"
      className="relative py-28 px-6 bg-pirate-bg text-amber-950 overflow-hidden"
    >
      {/* ── FULL-SECTION PARALLAX CLOUD LAYER ── */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {CLOUDS.map((cloud, i) => (
          <div
            key={cloud.id}
            ref={(el) => (cloudRefs.current[i] = el)}
            className="absolute"
            style={{
              top: cloud.top,
              left: cloud.left,
              width: cloud.w,
            }}
          >
            {getShape(cloud.shape, "w-full h-auto drop-shadow-lg", cloud.opacity)}
          </div>
        ))}
      </div>

      {/* ── CONTENT ── */}
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
                  {/* Category Header */}
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
