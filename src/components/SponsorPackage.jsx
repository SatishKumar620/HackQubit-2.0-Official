import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

import pirateCaptainImg from "../assets/images/pirate_captain.png";
import pirateFemaleImg from "../assets/images/pirate_female.png";
import pirateSwashbucklerImg from "../assets/images/pirate_swashbuckler.png";

const packages = [
  {
    name: "Bronze Buccaneer",
    price: "₹20,000+",
    features: ["Logo on website & banners", "Social media shoutouts", "Swag distribution", "Access to participant resumes"],
    color: "from-amber-600 to-amber-900",
    textColor: "text-amber-800",
    borderColor: "border-amber-600/30",
    characterImg: pirateSwashbucklerImg,
    characterAlt: "Buccaneer"
  },
  {
    name: "Silver Sailor",
    price: "₹30,000+",
    features: ["Everything in Bronze", "Exhibitor booth at venue", "Opening ceremony speaking slot", "Dedicated channel in Discord"],
    color: "from-slate-600 to-slate-800",
    textColor: "text-slate-800",
    borderColor: "border-slate-400",
    popular: true,
    characterImg: pirateFemaleImg,
    characterAlt: "Captain Female"
  },
  {
    name: "Golden Captain",
    price: "₹40,000+",
    features: ["Everything in Silver", "Title sponsorship branding", "Keynote address slot", "Judge at final pitches", "Custom branded hackathon track"],
    color: "from-amber-400 to-amber-600",
    textColor: "text-amber-700",
    borderColor: "border-amber-500",
    characterImg: pirateCaptainImg,
    characterAlt: "Golden Captain"
  }
];

/* ─── Thick Side Ropes Component (Left & Right Sides with Drop Shadow) ─── */
const SideThickRopes = () => (
  <>
    {/* Left Side Heavy Rigging Rope */}
    <div className="absolute left-0 top-0 bottom-0 w-24 pointer-events-none z-20 overflow-hidden">
      <svg viewBox="0 0 100 1000" preserveAspectRatio="none" className="w-full h-full filter drop-shadow-[6px_10px_15px_rgba(0,0,0,0.4)]">
        <path d="M 0 0 C 80 200, 20 400, 70 600 C 10 800, 60 900, 0 1000" fill="none" stroke="#78350f" strokeWidth="16" strokeLinecap="round" />
        <path d="M 0 0 C 80 200, 20 400, 70 600 C 10 800, 60 900, 0 1000" fill="none" stroke="#b45309" strokeWidth="6" strokeDasharray="12 6" strokeLinecap="round" />
        {/* Heavy Rope Knots */}
        <circle cx="50" cy="300" r="14" fill="#451a03" stroke="#92400e" strokeWidth="3" />
        <circle cx="45" cy="700" r="14" fill="#451a03" stroke="#92400e" strokeWidth="3" />
      </svg>
    </div>

    {/* Right Side Heavy Rigging Rope */}
    <div className="absolute right-0 top-0 bottom-0 w-24 pointer-events-none z-20 overflow-hidden">
      <svg viewBox="0 0 100 1000" preserveAspectRatio="none" className="w-full h-full filter drop-shadow-[-6px_10px_15px_rgba(0,0,0,0.4)]">
        <path d="M 100 0 C 20 200, 80 400, 30 600 C 90 800, 40 900, 100 1000" fill="none" stroke="#78350f" strokeWidth="16" strokeLinecap="round" />
        <path d="M 100 0 C 20 200, 80 400, 30 600 C 90 800, 40 900, 100 1000" fill="none" stroke="#b45309" strokeWidth="6" strokeDasharray="12 6" strokeLinecap="round" />
        {/* Heavy Rope Knots */}
        <circle cx="50" cy="250" r="14" fill="#451a03" stroke="#92400e" strokeWidth="3" />
        <circle cx="55" cy="650" r="14" fill="#451a03" stroke="#92400e" strokeWidth="3" />
      </svg>
    </div>
  </>
);

/* ─── 1. Interactive Freely Roaming Parrot (Click/Touch Spin & Squawk) ─── */
const InteractiveFreelyRoamingParrot = () => {
  const parrotRef = useRef(null);
  const wingLeftRef = useRef(null);
  const wingRightRef = useRef(null);

  useEffect(() => {
    // Wing flap
    const wingTl = gsap.timeline({ repeat: -1, yoyo: true });
    wingTl.to([wingLeftRef.current, wingRightRef.current], {
      scaleY: 0.2,
      duration: 0.18,
      ease: "power1.inOut",
    });

    // Free roaming flight motion
    const parrot = parrotRef.current;
    if (parrot) {
      const animateParrot = () => {
        gsap.to(parrot, {
          x: gsap.utils.random(-200, 200),
          y: gsap.utils.random(-40, 120),
          rotate: gsap.utils.random(-12, 12),
          duration: 3.2,
          ease: "sine.easeInOut",
          onComplete: animateParrot,
        });
      };
      animateParrot();
    }

    return () => wingTl.kill();
  }, []);

  return (
    <div
      ref={parrotRef}
      className="absolute top-12 left-1/2 -translate-x-1/2 z-30 pointer-events-auto cursor-pointer select-none"
      title="Click or Touch me to spin!"
      onClick={() => {
        if (parrotRef.current) {
          gsap.to(parrotRef.current, {
            scale: 1.4,
            rotate: "+=360",
            duration: 0.6,
            ease: "back.out(2)",
            onComplete: () => gsap.to(parrotRef.current, { scale: 1, duration: 0.3 }),
          });
        }
      }}
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 filter drop-shadow-[0_12px_24px_rgba(22,163,74,0.5)]">
        <svg viewBox="0 0 120 80" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="emeraldBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="50%" stopColor="#16a34a" />
              <stop offset="100%" stopColor="#15803d" />
            </linearGradient>
            <linearGradient id="macawWingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="35%" stopColor="#eab308" />
              <stop offset="70%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
            <radialGradient id="parrotEyeGrad" cx="35%" cy="35%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#94a3b8" />
            </radialGradient>
          </defs>

          {/* Airplane Horizontal Flying Macaw Parrot */}
          {/* Layered Tail Feathers */}
          <path d="M 20 40 L 0 25 L 8 40 L 0 55 Z" fill="#3b82f6" />
          <path d="M 22 40 L 4 32 L 10 40 L 4 48 Z" fill="#ef4444" />

          {/* Under Wing */}
          <path ref={wingRightRef} d="M 55 40 Q 25 75 10 50 Q 35 32 55 40 Z" fill="#15803d" />

          {/* Main Aerodynamic Body Fuselage */}
          <ellipse cx="60" cy="40" rx="32" ry="16" fill="url(#emeraldBodyGrad)" />

          {/* Top Layered Multi-colored Feather Wing */}
          <g ref={wingLeftRef}>
            <path d="M 55 40 Q 25 5 8 28 Q 32 46 55 40 Z" fill="url(#macawWingGrad)" />
            {/* Feather texture lines */}
            <path d="M 45 35 Q 25 15 15 28" stroke="#facc15" strokeWidth="1.5" fill="none" opacity="0.8" />
            <path d="M 48 37 Q 32 20 22 32" stroke="#60a5fa" strokeWidth="1.5" fill="none" opacity="0.8" />
          </g>

          {/* Parrot Head & Crown Crest */}
          <circle cx="88" cy="40" r="15" fill="#16a34a" />
          <path d="M 82 25 Q 92 18 95 24 Z" fill="#ef4444" /> {/* Red Crown Crest */}

          {/* Eye Patch & Eye */}
          <circle cx="92" cy="34" r="5" fill="url(#parrotEyeGrad)" stroke="#cbd5e1" strokeWidth="0.5" />
          <circle cx="93" cy="34" r="2.2" fill="#0f172a" />
          <circle cx="94" cy="33" r="0.8" fill="#ffffff" />

          {/* Curved Hooked Bright Red Beak */}
          <path d="M 96 32 C 118 32 120 48 102 48 C 100 48 98 44 98 40 Z" fill="#dc2626" />
          <path d="M 98 40 Q 112 43 100 47 Z" fill="#991b1b" opacity="0.4" />
        </svg>
      </div>
    </div>
  );
};

/* ─── 2. Airplane-Style Flying Parrots (Horizontal Green Body & Bright Red Beak Left-to-Right) ─── */
const AirplaneStyleFlyingParrots = () => {
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);

  useEffect(() => {
    const flyLeftToRight = (ref, duration, baseTop, delayY) => {
      if (!ref.current) return;
      const startFlight = () => {
        gsap.set(ref.current, { x: "-15vw", y: baseTop, opacity: 0.95 });
        gsap.to(ref.current, {
          x: "115vw",
          y: baseTop + delayY,
          duration,
          ease: "none",
          onComplete: startFlight,
        });
      };
      startFlight();
    };

    flyLeftToRight(p1Ref, 11, 80, -30);
    flyLeftToRight(p2Ref, 15, 240, 40);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden select-none">
      {/* Flying Green Parrot 1 */}
      <div ref={p1Ref} className="absolute left-0 w-20 h-12 filter drop-shadow-md">
        <svg viewBox="0 0 120 70" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Wings Horizontal Airplane Pitch */}
          <path d="M 50 35 Q 20 5 10 25 Q 30 40 50 35 Z" fill="#16a34a" className="animate-pulse" />
          <path d="M 50 35 Q 20 65 10 45 Q 30 30 50 35 Z" fill="#15803d" className="animate-pulse" />
          <path d="M 15 35 L 0 25 L 5 35 L 0 45 Z" fill="#22c55e" />
          <ellipse cx="55" cy="35" rx="30" ry="14" fill="#22c55e" />
          <circle cx="80" cy="35" r="14" fill="#16a34a" />
          <circle cx="85" cy="30" r="3" fill="white" />
          <circle cx="86" cy="30" r="1.5" fill="black" />
          {/* Red Beak */}
          <path d="M 90 28 Q 115 35 90 44 Z" fill="#ef4444" />
        </svg>
      </div>

      {/* Flying Green Parrot 2 */}
      <div ref={p2Ref} className="absolute left-0 w-16 h-10 filter drop-shadow-md opacity-90">
        <svg viewBox="0 0 120 70" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M 50 35 Q 20 5 10 25 Q 30 40 50 35 Z" fill="#15803d" />
          <path d="M 50 35 Q 20 65 10 45 Q 30 30 50 35 Z" fill="#16a34a" />
          <path d="M 15 35 L 0 25 L 5 35 L 0 45 Z" fill="#4ade80" />
          <ellipse cx="55" cy="35" rx="30" ry="14" fill="#16a34a" />
          <circle cx="80" cy="35" r="14" fill="#15803d" />
          <circle cx="85" cy="30" r="3" fill="white" />
          {/* Red Beak */}
          <path d="M 90 28 Q 115 35 90 44 Z" fill="#dc2626" />
        </svg>
      </div>
    </div>
  );
};

const SponsorPackage = () => {
  return (
    <section id="sponsorship" className="py-24 relative px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Thick Side Ropes with Shadow */}
      <SideThickRopes />

      {/* Section Header */}
      <div className="text-center mb-20 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-['Trade_Winds'] text-slate-800 mb-4"
        >
          Sponsor The Voyage
        </motion.h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-['Cinzel']">
          Join our crew and help make HackQubit 2.0 an unforgettable adventure. Choose your sponsorship package below.
        </p>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-8 pt-12 relative z-10">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`relative bg-white rounded-3xl p-8 pt-16 shadow-xl border-2 ${pkg.borderColor} ${pkg.popular ? 'shadow-amber-200/60 ring-2 ring-amber-500/50' : ''} flex flex-col`}
          >
            {/* ── TOP MIDDLE HANDSOME PIRATE CHARACTER (CLEAN CUTOUT, NO BACKGROUND) ── */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex justify-center">
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 transition-transform duration-500 hover:scale-110">
                <img
                  src={pkg.characterImg}
                  alt={pkg.characterAlt}
                  className="w-full h-full object-contain filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.35)]"
                />
              </div>
            </div>

            {pkg.popular && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-xs font-bold font-['Cinzel'] tracking-wider shadow-md uppercase">
                Most Popular
              </div>
            )}

            <h3 className={`text-2xl font-bold font-['Cinzel'] mb-2 text-center ${pkg.textColor}`}>{pkg.name}</h3>
            <div className="text-4xl font-extrabold text-slate-900 mb-6 text-center">{pkg.price}</div>

            <ul className="flex-grow space-y-3 mb-8">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-center text-slate-700 font-['Cinzel'] text-sm sm:text-base">
                  <svg className="w-5 h-5 mr-3 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r ${pkg.color} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 font-['Cinzel'] tracking-wider uppercase text-sm`}>
              Become a Sponsor
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SponsorPackage;
