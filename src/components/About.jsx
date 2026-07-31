import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, ArrowUpRight, Compass, Zap, Anchor, Calendar, ShieldCheck } from "lucide-react";
import youngPiratesCrewImg from "../assets/images/young_anime_pirates_crew_transparent.png";

gsap.registerPlugin(ScrollTrigger);

/* ── PURE SVG ANTIQUE WOOD & COPPER PIRATE COMPASS CLOCK (NO YELLOW) ── */
const SVGDarkPirateClock = () => (
  <svg
    viewBox="0 0 200 200"
    className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="parchmentFace" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fdfbf7" />
        <stop offset="60%" stopColor="#f5efe6" />
        <stop offset="100%" stopColor="#e6d5c3" />
      </linearGradient>
      <linearGradient id="darkWoodRing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#784421" />
        <stop offset="40%" stopColor="#45220c" />
        <stop offset="100%" stopColor="#281105" />
      </linearGradient>
      <linearGradient id="copperRim" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d97706" />
        <stop offset="50%" stopColor="#b45309" />
        <stop offset="100%" stopColor="#78350f" />
      </linearGradient>
    </defs>

    {/* Ship Wheel Outer Rim */}
    <circle cx="100" cy="100" r="92" fill="url(#darkWoodRing)" stroke="#78350f" strokeWidth="2.5" />
    <circle cx="100" cy="100" r="80" fill="none" stroke="#b45309" strokeWidth="2" />

    {/* Ship Wheel Wooden Spoke Handles */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <g key={angle} transform={`rotate(${angle} 100 100)`}>
        <line x1="100" y1="100" x2="100" y2="4" stroke="#45220c" strokeWidth="5" strokeLinecap="round" />
        <circle cx="100" cy="4" r="5" fill="#784421" stroke="#b45309" strokeWidth="1" />
      </g>
    ))}

    {/* Clock Face Dial */}
    <circle cx="100" cy="100" r="68" fill="url(#parchmentFace)" stroke="#45220c" strokeWidth="2.5" />
    <circle cx="100" cy="100" r="64" fill="none" stroke="#78350f" strokeWidth="1" strokeDasharray="3 3" />

    {/* Compass Points */}
    <path d="M 100 38 L 104 94 L 100 100 L 96 94 Z" fill="#78350f" />
    <path d="M 100 162 L 104 106 L 100 100 L 96 106 Z" fill="#b45309" />
    <path d="M 38 100 L 94 96 L 100 100 L 94 104 Z" fill="#78350f" />
    <path d="M 162 100 L 106 96 L 100 100 L 106 104 Z" fill="#b45309" />

    {/* Roman Numerals in Deep Brown */}
    <text x="100" y="52" textAnchor="middle" fontSize="10" fontWeight="900" fill="#281105" fontFamily="serif">XII</text>
    <text x="150" y="104" textAnchor="middle" fontSize="10" fontWeight="900" fill="#281105" fontFamily="serif">III</text>
    <text x="100" y="156" textAnchor="middle" fontSize="10" fontWeight="900" fill="#281105" fontFamily="serif">VI</text>
    <text x="50" y="104" textAnchor="middle" fontSize="10" fontWeight="900" fill="#281105" fontFamily="serif">IX</text>

    {/* Hour Hand (Rotating) */}
    <g className="origin-center animate-[spin_60s_linear_infinite]">
      <path d="M 100 100 L 100 58" stroke="#281105" strokeWidth="3.5" strokeLinecap="round" />
      <polygon points="100,53 96,61 104,61" fill="#281105" />
    </g>

    {/* Minute Hand (Faster Rotating) */}
    <g className="origin-center animate-[spin_12s_linear_infinite]">
      <path d="M 100 100 L 100 46" stroke="#78350f" strokeWidth="2" strokeLinecap="round" />
      <polygon points="100,40 97,48 103,48" fill="#78350f" />
    </g>

    {/* Center Copper Pin */}
    <circle cx="100" cy="100" r="5" fill="#b45309" stroke="#281105" strokeWidth="1.5" />
  </svg>
);

/* ── LIVE COUNTDOWN HOOK TO OCTOBER 7, 2026 ── */
const useCountdown = (targetDate) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
};

/* ── WOODEN ADDRESS / DIRECTION SIGN BOARD WITH LIVE COUNTDOWN (NO YELLOW) ── */
const WoodenAddressSignboard = () => {
  const { days, hours, minutes, seconds } = useCountdown("2026-10-07T09:00:00");

  const units = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Mins", value: minutes },
    { label: "Secs", value: seconds },
  ];

  return (
    <div className="relative w-full max-w-md mx-auto flex flex-col items-center select-none">
      {/* Hanging Ropes from Top */}
      <div className="flex justify-between w-48 mb-[-6px] relative z-10">
        <div className="w-2.5 h-8 bg-amber-900/60 rounded-t border-x border-amber-950/40 shadow-inner" />
        <div className="w-2.5 h-8 bg-amber-900/60 rounded-t border-x border-amber-950/40 shadow-inner" />
      </div>

      {/* Main Wooden Plank Sign Board */}
      <div
        className="w-full rounded-2xl p-6 sm:p-7 relative z-20 shadow-[0_20px_35px_rgba(0,0,0,0.4)] border-4 border-[#3e2312]"
        style={{
          background: "linear-gradient(180deg, #6e3d1b 0%, #522d13 50%, #3e2312 100%)",
          boxShadow: "inset 0 2px 4px rgba(255,255,255,0.15), inset 0 -4px 8px rgba(0,0,0,0.6), 0 16px 30px rgba(0,0,0,0.35)",
        }}
      >
        {/* Brass Corner Bolts */}
        <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-amber-700 to-amber-950 border border-amber-900/80 shadow-sm" />
        <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-amber-700 to-amber-950 border border-amber-900/80 shadow-sm" />
        <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-amber-700 to-amber-950 border border-amber-900/80 shadow-sm" />
        <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-amber-700 to-amber-950 border border-amber-900/80 shadow-sm" />

        {/* Inner Engraved Border */}
        <div className="border-2 border-dashed border-amber-800/40 rounded-xl p-4 bg-amber-950/30 backdrop-blur-xs text-center flex flex-col items-center">
          
          {/* Header Row: Clock + Address Title */}
          <div className="flex items-center gap-3 mb-4">
            <SVGDarkPirateClock />
            <div className="text-left">
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-900/60 border border-amber-700/50 text-amber-100 font-cinzel text-[9px] font-black uppercase tracking-widest">
                <Calendar className="w-2.5 h-2.5 text-amber-300" />
                <span>Voyage Date</span>
              </div>
              <h4 className="font-cinzel text-lg sm:text-xl font-black text-amber-100 tracking-wider mt-1 drop-shadow-md">
                OCTOBER 7 – 8
              </h4>
              <p className="font-cinzel text-[10px] text-amber-200/80 font-extrabold uppercase tracking-wider">
                RVSCET • JAMSHEDPUR
              </p>
            </div>
          </div>

          {/* Subtitle */}
          <p className="font-cinzel text-xs font-bold text-amber-200/90 mb-4 tracking-wide">
            🏴‍☠️ Set Sail In:
          </p>

          {/* Wooden Countdown Digit Cards (No Yellow) */}
          <div className="grid grid-cols-4 gap-2 w-full">
            {units.map((unit) => (
              <div
                key={unit.label}
                className="flex flex-col items-center justify-center p-2 sm:p-2.5 rounded-xl border border-amber-800/60 shadow-inner"
                style={{ background: "linear-gradient(180deg, #381b0a 0%, #220e04 100%)" }}
              >
                <span className="font-cinzel text-xl sm:text-2xl font-black text-amber-100 drop-shadow">
                  {String(unit.value).padStart(2, "0")}
                </span>
                <span className="font-cinzel text-[8px] sm:text-[9px] font-extrabold text-amber-300/80 uppercase tracking-widest mt-0.5">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-amber-900/40 w-full flex items-center justify-center gap-1.5 text-[10px] font-cinzel font-black text-amber-200">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>24-Hour Live On-Spot Hackathon</span>
          </div>

        </div>
      </div>

      {/* Supporting Wooden Posts into Ground */}
      <div className="flex justify-between w-64 mt-[-6px] relative z-10">
        <div className="w-4 h-10 bg-gradient-to-b from-[#3e2312] to-[#281105] rounded-b border-x border-[#1c0b03]" />
        <div className="w-4 h-10 bg-gradient-to-b from-[#3e2312] to-[#281105] rounded-b border-x border-[#1c0b03]" />
      </div>
    </div>
  );
};

/* ── SVG LUSH GREEN LAND & BUSHES / HERBS DECORATION ── */
const GreenLandAndHerbsDecoration = () => (
  <div className="relative w-full overflow-hidden pointer-events-none select-none mt-6">
    
    {/* 🌿 BOTTOM LEFT HERBS & TROPICAL BUSHES */}
    <div className="absolute bottom-0 left-0 z-30 w-36 sm:w-48 h-32 sm:h-40 pointer-events-none">
      <svg viewBox="0 0 200 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Deep Green Foliage */}
        <path d="M 0 160 Q 30 100 70 120 Q 110 80 140 160 Z" fill="#15803d" opacity="0.9" />
        <path d="M 0 160 Q 20 70 50 110 Q 90 60 120 160 Z" fill="#16a34a" />
        {/* Palm-like Herb Fronds */}
        <path d="M 10 160 Q 40 40 90 90 Q 50 120 10 160 Z" fill="#22c55e" />
        <path d="M 0 160 Q 60 50 130 110 Q 70 140 0 160 Z" fill="#4ade80" opacity="0.8" />
        {/* Tufted Grass Blades */}
        <path d="M 60 160 L 70 110 L 80 160 L 95 100 L 110 160 Z" fill="#166534" />
      </svg>
    </div>

    {/* 🌿 BOTTOM RIGHT HERBS & TROPICAL BUSHES */}
    <div className="absolute bottom-0 right-0 z-30 w-36 sm:w-48 h-32 sm:h-40 pointer-events-none transform scale-x-[-1]">
      <svg viewBox="0 0 200 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 160 Q 30 100 70 120 Q 110 80 140 160 Z" fill="#15803d" opacity="0.9" />
        <path d="M 0 160 Q 20 70 50 110 Q 90 60 120 160 Z" fill="#16a34a" />
        <path d="M 10 160 Q 40 40 90 90 Q 50 120 10 160 Z" fill="#22c55e" />
        <path d="M 0 160 Q 60 50 130 110 Q 70 140 0 160 Z" fill="#4ade80" opacity="0.8" />
        <path d="M 60 160 L 70 110 L 80 160 L 95 100 L 110 160 Z" fill="#166534" />
      </svg>
    </div>

    {/* 🌱 GREEN LAND HILL GROUND UNDER BOTH YOUNG PIRATES & WOODEN BOARD */}
    <div className="relative w-full h-24 sm:h-28 z-20">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="40%" stopColor="#16a34a" />
            <stop offset="80%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#166534" />
          </linearGradient>
        </defs>

        {/* Back Grass Hill Layer */}
        <path
          d="M 0 40 Q 300 10 600 35 Q 900 60 1200 25 L 1200 100 L 0 100 Z"
          fill="#15803d"
          opacity="0.85"
        />

        {/* Front Vibrant Green Grass Ground */}
        <path
          d="M 0 25 Q 300 55 600 20 Q 900 45 1200 15 L 1200 100 L 0 100 Z"
          fill="url(#grassGrad)"
        />

        {/* Scattered Grass Blades Details along the edge */}
        {[50, 150, 280, 420, 560, 700, 840, 980, 1100].map((x, i) => (
          <path
            key={i}
            d={`M ${x} 25 L ${x + 6} 8 L ${x + 12} 27 M ${x + 10} 27 L ${x + 16} 12 L ${x + 22} 30`}
            stroke="#4ade80"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        ))}
      </svg>
    </div>

  </div>
);

const About = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const crewImgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      // Side-by-side cards Animation
      gsap.fromTo(
        cardsContainerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: cardsContainerRef.current, start: "top 85%" },
        }
      );

      // Young Pirates Cutout Animation (float + slide up)
      if (crewImgRef.current) {
        gsap.fromTo(
          crewImgRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: { trigger: crewImgRef.current, start: "top 85%" },
          }
        );

        // Continuous gentle bobbing float effect for the pirates cutout
        gsap.to(crewImgRef.current, {
          y: -10,
          duration: 2.8,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 1.1,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full py-24 px-6 sm:px-10 lg:px-16 overflow-hidden bg-pirate-bg text-amber-950"
    >
      <div className="max-w-[1150px] mx-auto relative z-20">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-900/40 bg-amber-500/20 mb-4 shadow-sm">
            <Compass className="w-4 h-4 text-amber-900" />
            <span className="font-cinzel text-xs tracking-[0.25em] text-amber-950 uppercase font-extrabold">
              The Grand Expedition
            </span>
          </div>

          <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-black text-amber-950 leading-tight">
            About <span className="text-amber-800">HackQubit 2.0</span>
          </h2>
          <p className="mt-4 font-cinzel text-amber-900 font-bold text-base max-w-[620px] mx-auto leading-relaxed">
            Hosted at <strong className="text-amber-950 font-extrabold">RVSCET, Jamshedpur</strong>.{" "}
            A 24-hour national challenge empowering developers to Code, Create &amp; Conquer.
          </p>
        </div>

        {/* ── 2 CARDS IN THE SAME ROW ── */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-20"
        >
          {/* Card 1: 24-Hour Live Challenge */}
          <div className="relative p-8 rounded-3xl border border-amber-900/20 bg-white/95 backdrop-blur-xl shadow-2xl flex flex-col justify-between hover:border-amber-700/50 transition-all duration-300">
            <div className="absolute top-0 left-8 right-8 h-[2.5px] bg-gradient-to-r from-transparent via-amber-700/60 to-transparent" />

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-800 flex-shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-cinzel text-[10px] uppercase tracking-widest text-amber-800 font-extrabold block">
                    National Hackathon
                  </span>
                  <h3 className="font-cinzel text-xl font-extrabold text-amber-950">
                    24-Hour Live Challenge
                  </h3>
                </div>
              </div>

              <p className="font-cinzel text-amber-900 font-bold text-sm sm:text-base leading-relaxed">
                HackQubit 2.0 is a 24-hour non-stop hackathon hosted live at RVSCET, Jamshedpur.
                Problem statements are revealed live on spot — no pre-built slides or prior code.
                Test your real-time problem solving under pressure and conquer!
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-amber-500/15 flex items-center justify-between text-xs font-cinzel text-amber-900 font-extrabold">
              <span>⚡ Non-Stop Innovation</span>
              <span>✦ Live On-Spot</span>
            </div>
          </div>

          {/* Card 2: Venue + Map */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-amber-900/20 bg-white/95 backdrop-blur-2xl shadow-2xl flex flex-col justify-between">
            <div className="flex items-center justify-between gap-4 p-5 border-b border-amber-200 bg-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center bg-amber-800 text-amber-50 shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-cinzel text-base font-extrabold text-amber-950">
                      RVSCET, Jamshedpur
                    </h4>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-amber-300 bg-amber-50 text-[10px] font-bold text-amber-900 uppercase tracking-wider">
                      🏳️ Venue
                    </span>
                  </div>
                  <p className="font-cinzel text-xs text-amber-800 font-bold mt-0.5">
                    Edalbera, Jamshedpur, Jharkhand 831012
                  </p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=RVSCET+Jamshedpur"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-800 hover:bg-amber-950 text-amber-50 font-cinzel font-extrabold text-xs tracking-wider transition-all duration-300 shadow-md flex-shrink-0"
              >
                <span>Open Map</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div className="relative w-full h-[220px] bg-amber-50 flex-grow">
              <iframe
                title="RVSCET Jamshedpur 2D Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.234!2d86.1833!3d22.8046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e31ff5ef8221%3A0x9b9b1f1f1f1f1f1f!2sRVSCET%20Jamshedpur!5e0!3m2!1sen!2sin!4v1000000000000"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* ── BOTTOM FEATURE: YOUNG ANIME PIRATES (LEFT) + WOODEN ADDRESS COUNTDOWN SIGNBOARD (RIGHT) ── */}
        <div className="relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">

            {/* Left: Young Anime Pirates Cutout */}
            <div ref={crewImgRef} className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/15 border border-amber-800/30 text-amber-950 font-cinzel font-extrabold text-xs mb-3">
                <Anchor className="w-3.5 h-3.5 text-amber-800" />
                <span>Meet The Pirate Hacker Crew</span>
              </div>

              <h3 className="font-cinzel text-2xl sm:text-3xl font-black text-amber-950 tracking-wide mb-4">
                500+ Developers Sailing Together!
              </h3>

              <div className="relative w-full max-w-lg">
                <img
                  src={youngPiratesCrewImg}
                  alt="Young Anime Pirate Hackers Cutout"
                  className="w-full h-auto max-h-[420px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.35)]"
                />
              </div>
            </div>

            {/* Right: Wooden Address Signboard with Live Countdown & SVG Dark Clock */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end pb-2">
              <WoodenAddressSignboard />
            </div>

          </div>

          {/* Green Land, Herbs & Bushes at Bottom Corners */}
          <GreenLandAndHerbsDecoration />
        </div>

      </div>
    </section>
  );
};

export default About;
