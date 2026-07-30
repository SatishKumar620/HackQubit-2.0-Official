import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

// Custom Generated 3D Cutout Assets
import prize1stImg from "../assets/images/prize_1st_gold.png";
import prize2ndImg from "../assets/images/prize_2nd_silver.png";
import prize3rdImg from "../assets/images/prize_3rd_bronze.png";

gsap.registerPlugin(ScrollTrigger);

const PRIZES = [
  {
    rank: "1ST PRIZE",
    title: "The Grand Bounty",
    amount: "₹15,000",
    img: prize1stImg,
    glow: "rgba(255, 215, 0, 0.4)",
    borderColor: "border-amber-400/50",
    badgeBg: "bg-amber-500",
    textColor: "text-amber-700",
    desc: "The supreme winner who conquers all challenges claims the golden bounty.",
    isCenter: true,
  },
  {
    rank: "2ND PRIZE",
    title: "Captain's Chest",
    amount: "₹10,000",
    img: prize2ndImg,
    glow: "rgba(192, 192, 192, 0.4)",
    borderColor: "border-slate-300",
    badgeBg: "bg-slate-600",
    textColor: "text-slate-800",
    desc: "Awarded to the valiant runner-up who braved the storm with outstanding code.",
    isCenter: false,
  },
  {
    rank: "3RD PRIZE",
    title: "First Mate's Pouch",
    amount: "₹5,000",
    img: prize3rdImg,
    glow: "rgba(205, 127, 50, 0.4)",
    borderColor: "border-amber-700/40",
    badgeBg: "bg-amber-800",
    textColor: "text-amber-900",
    desc: "For the steadfast crew whose relentless innovation earned a spot on the podium.",
    isCenter: false,
  },
];

/* ─── Animated SVG Ocean Water Waves (Integrated at Bottom of Cards & Section) ─── */
const OceanWaterSVG = () => (
  <svg
    className="w-full h-20 pointer-events-none select-none"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
        <stop offset="50%" stopColor="#0284c7" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#0369a1" stopOpacity="1" />
      </linearGradient>
    </defs>
    {/* Background Wave */}
    <path
      d="M 0 40 Q 300 80 600 40 Q 900 0 1200 40 L 1200 120 L 0 120 Z"
      fill="#38bdf8"
      opacity="0.3"
    >
      <animate attributeName="d" dur="6s" repeatCount="indefinite" values="
        M 0 40 Q 300 80 600 40 Q 900 0 1200 40 L 1200 120 L 0 120 Z;
        M 0 20 Q 300 60 600 20 Q 900 80 1200 20 L 1200 120 L 0 120 Z;
        M 0 40 Q 300 80 600 40 Q 900 0 1200 40 L 1200 120 L 0 120 Z" />
    </path>
    {/* Foreground Wave */}
    <path
      d="M 0 30 Q 300 0 600 30 Q 900 60 1200 30 L 1200 120 L 0 120 Z"
      fill="url(#oceanGrad)"
    >
      <animate attributeName="d" dur="4s" repeatCount="indefinite" values="
        M 0 30 Q 300 0 600 30 Q 900 60 1200 30 L 1200 120 L 0 120 Z;
        M 0 50 Q 300 90 600 50 Q 900 10 1200 50 L 1200 120 L 0 120 Z;
        M 0 30 Q 300 0 600 30 Q 900 60 1200 30 L 1200 120 L 0 120 Z" />
    </path>
  </svg>
);

const PrizePool = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="prizes"
      className="relative py-24 px-6 overflow-hidden bg-slate-50 text-slate-900"
    >
      <div className="max-w-6xl mx-auto relative z-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-600/30 bg-amber-50 mb-3 shadow-sm"
          >
            <span className="font-cinzel text-xs tracking-widest text-amber-800 uppercase font-bold">
              🏆 The Bounty Pool
            </span>
          </motion.div>

          <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-950">
            Prize <span className="text-amber-600">Treasures</span>
          </h2>
          <p className="mt-3 font-cinzel text-slate-600 text-base max-w-xl mx-auto">
            Claim your share of the bounty. Only the fiercest pirates will conquer the podium!
          </p>
        </div>

        {/* ── PRIZE CARDS GRID (1ST PRIZE CENTERED AT TOP/MIDDLE) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-end">
          {PRIZES.map((prize, index) => (
            <div
              key={prize.rank}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`relative rounded-3xl overflow-hidden border-2 bg-white/90 backdrop-blur-xl shadow-xl flex flex-col justify-between transition-transform duration-500 hover:-translate-y-2 ${prize.borderColor} ${prize.isCenter ? 'md:-translate-y-6 shadow-2xl ring-2 ring-amber-400/40' : ''}`}
            >
              {/* Badge Header */}
              <div className="pt-8 px-6 text-center relative z-10">
                <span className={`inline-block px-4 py-1 rounded-full text-xs font-bold text-white uppercase tracking-widest ${prize.badgeBg} shadow-md mb-2`}>
                  {prize.rank}
                </span>
                <h3 className={`font-cinzel text-2xl font-bold ${prize.textColor}`}>
                  {prize.title}
                </h3>
                <div className="text-4xl font-extrabold text-slate-950 font-['Pirata_One'] my-2">
                  {prize.amount}
                </div>
                <p className="font-cinzel text-xs text-slate-600 leading-relaxed mb-4">
                  {prize.desc}
                </p>
              </div>

              {/* 3D Cutout Generated Image (Clean Transparent Background) */}
              <div className="relative w-full h-44 flex items-center justify-center p-2 z-10">
                <img
                  src={prize.img}
                  alt={prize.title}
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.25)] transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Bottom Animated Ocean Water SVG Effect inside Card */}
              <div className="relative w-full overflow-hidden leading-none mt-4 rounded-b-3xl">
                <OceanWaterSVG />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrizePool;
