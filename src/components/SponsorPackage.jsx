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

/* ─── Multiple Flying Parrots (Flock flying from Left to Right across section) ─── */
const FlyingParrotsFlock = () => {
  const parrot1Ref = useRef(null);
  const parrot2Ref = useRef(null);
  const parrot3Ref = useRef(null);

  useEffect(() => {
    // 1. Continuous Left to Right Flight Paths
    const animateParrotFlight = (ref, speed, delayY, baseTop) => {
      if (!ref.current) return;
      const fly = () => {
        gsap.set(ref.current, { x: "-15vw", y: baseTop, opacity: 0.9, scale: 0.85 });
        gsap.to(ref.current, {
          x: "115vw",
          y: baseTop + delayY,
          duration: speed,
          ease: "none",
          onComplete: fly,
        });
      };
      fly();
    };

    animateParrotFlight(parrot1Ref, 12, -40, 60);
    animateParrotFlight(parrot2Ref, 16, 50, 180);
    animateParrotFlight(parrot3Ref, 10, -20, 320);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden select-none">
      {/* Parrot 1 (Red / Yellow / Green) */}
      <div ref={parrot1Ref} className="absolute left-0 w-16 h-16 sm:w-20 sm:h-20 filter drop-shadow-md">
        <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M 35 45 C 10 20, 5 40, 20 60 Z" fill="#ef4444" className="animate-pulse" />
          <path d="M 65 45 C 90 20, 95 40, 80 60 Z" fill="#3b82f6" className="animate-pulse" />
          <path d="M 40 30 Q 50 15 60 30 Q 65 60 50 80 Q 35 60 40 30 Z" fill="#eab308" />
          <circle cx="50" cy="25" r="12" fill="#ef4444" />
          <path d="M 58 22 Q 72 26 62 34 Z" fill="#f97316" />
          <circle cx="54" cy="22" r="2.5" fill="white" />
        </svg>
      </div>

      {/* Parrot 2 (Cyan / Gold) */}
      <div ref={parrot2Ref} className="absolute left-0 w-14 h-14 sm:w-16 sm:h-16 filter drop-shadow-md">
        <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M 35 45 C 10 20, 5 40, 20 60 Z" fill="#06b6d4" />
          <path d="M 65 45 C 90 20, 95 40, 80 60 Z" fill="#eab308" />
          <path d="M 40 30 Q 50 15 60 30 Q 65 60 50 80 Q 35 60 40 30 Z" fill="#0284c7" />
          <circle cx="50" cy="25" r="12" fill="#06b6d4" />
          <path d="M 58 22 Q 72 26 62 34 Z" fill="#f97316" />
        </svg>
      </div>

      {/* Parrot 3 (Emerald / Crimson) */}
      <div ref={parrot3Ref} className="absolute left-0 w-18 h-18 sm:w-22 sm:h-22 filter drop-shadow-md">
        <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M 35 45 C 10 20, 5 40, 20 60 Z" fill="#10b981" />
          <path d="M 65 45 C 90 20, 95 40, 80 60 Z" fill="#ef4444" />
          <path d="M 40 30 Q 50 15 60 30 Q 65 60 50 80 Q 35 60 40 30 Z" fill="#059669" />
          <circle cx="50" cy="25" r="12" fill="#10b981" />
          <path d="M 58 22 Q 72 26 62 34 Z" fill="#f97316" />
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

      {/* Multiple Flying Parrots Flock (Left to Right) */}
      <FlyingParrotsFlock />

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
