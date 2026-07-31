import React from "react";
import { motion } from "framer-motion";

// Import 3 Pirate Character Assets
import pirateCaptainImg from "../assets/images/pirate_captain.png";
import pirateFemaleImg from "../assets/images/pirate_female.png";
import pirateSwashbucklerImg from "../assets/images/pirate_swashbuckler.png";

/* ─── Thick Side Ropes ─── */
const SideThickRopes = () => (
  <>
    {/* Left Vertical Hanging Rope */}
    <div
      className="absolute top-0 left-2 sm:left-6 w-3 sm:w-4 bottom-0 z-20 pointer-events-none opacity-80"
      style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          #92400e 0px,
          #92400e 8px,
          #78350f 8px,
          #78350f 16px,
          #b45309 16px,
          #b45309 24px
        )`,
        boxShadow: "inset 2px 0 4px rgba(0,0,0,0.6), 4px 0 12px rgba(0,0,0,0.4)",
      }}
    />
    {/* Right Vertical Hanging Rope */}
    <div
      className="absolute top-0 right-2 sm:right-6 w-3 sm:w-4 bottom-0 z-20 pointer-events-none opacity-80"
      style={{
        backgroundImage: `repeating-linear-gradient(
          -45deg,
          #92400e 0px,
          #92400e 8px,
          #78350f 8px,
          #78350f 16px,
          #b45309 16px,
          #b45309 24px
        )`,
        boxShadow: "inset -2px 0 4px rgba(0,0,0,0.6), -4px 0 12px rgba(0,0,0,0.4)",
      }}
    />
  </>
);

const packages = [
  {
    name: "Silver Package",
    price: "₹15,000+",
    borderColor: "border-slate-300",
    textColor: "text-slate-700",
    color: "from-slate-600 to-slate-800",
    characterImg: pirateFemaleImg,
    characterAlt: "Young Pirate Female Officer",
    features: [
      "Logo on official website & event banners",
      "Distribution of digital swag & promo codes",
      "Access to participant resume database",
      "Social media shoutout across platforms",
    ],
  },
  {
    name: "Gold Package",
    price: "₹30,000+",
    borderColor: "border-amber-400 font-extrabold",
    textColor: "text-amber-700 font-bold",
    color: "from-amber-600 to-yellow-600",
    characterImg: pirateCaptainImg,
    characterAlt: "Handsome Pirate Captain",
    features: [
      "Everything in Silver Tier",
      "Keynote speaking opportunity (10 mins)",
      "Dedicated booth / recruitment desk at venue",
      "Custom track / prize category sponsorship",
      "Prominent logo on main stage backdrop",
    ],
  },
  {
    name: "Title Sponsor",
    price: "₹50,000+",
    borderColor: "border-amber-600 font-extrabold",
    textColor: "text-amber-800 font-bold",
    color: "from-amber-700 to-amber-900",
    characterImg: pirateSwashbucklerImg,
    characterAlt: "Pirate Swashbuckler Hero",
    features: [
      "Exclusive 'Presented By [Your Brand]' branding",
      "Prime keynote slot at Opening & Grand Finale",
      "VIP judging panel seat & awards presentation",
      "Custom branded hackathon track & API challenge",
      "First access to top hacker talent & recruitment",
      "Full post-event analytics & media coverage feature",
    ],
  },
];

const SponsorPackage = () => {
  return (
    <section id="sponsorship" className="py-28 relative px-6 max-w-7xl mx-auto overflow-hidden text-amber-950">
      {/* Thick Side Ropes with Shadow */}
      <SideThickRopes />

      {/* Section Header */}
      <div className="text-center mb-28 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black font-cinzel text-amber-950 mb-4 tracking-wide"
        >
          Sponsor <span className="text-amber-800">The Voyage</span>
        </motion.h2>
        <p className="text-base sm:text-lg text-amber-900 font-bold max-w-2xl mx-auto font-cinzel leading-relaxed">
          Join our crew and help make HackQubit 2.0 an unforgettable adventure. Choose your sponsorship package below.
        </p>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-8 pt-16 relative z-10">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 pt-20 shadow-2xl border-2 ${pkg.borderColor} flex flex-col justify-between hover:border-amber-600 transition-all duration-300`}
          >
            {/* ── TOP MIDDLE BIGGER PIRATE CHARACTER (CLEAN CUTOUT, NO BACKGROUND) ── */}
            <div className="absolute -top-24 sm:-top-28 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex justify-center">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 transition-transform duration-500 hover:scale-110">
                <img
                  src={pkg.characterImg}
                  alt={pkg.characterAlt}
                  className="w-full h-full object-contain filter drop-shadow-[0_14px_24px_rgba(120,70,10,0.35)]"
                />
              </div>
            </div>

            <div>
              <h3 className={`text-2xl font-black font-cinzel mb-2 text-center ${pkg.textColor}`}>
                {pkg.name}
              </h3>
              <div className="text-3xl sm:text-4xl font-black text-amber-950 mb-6 text-center font-cinzel">
                {pkg.price}
              </div>

              <ul className="flex-grow space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-amber-900 font-bold font-cinzel text-xs sm:text-sm leading-relaxed">
                    <span className="text-amber-700 font-bold mr-2 shrink-0">✦</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button className={`w-full py-3.5 rounded-xl font-black text-amber-50 bg-gradient-to-r ${pkg.color} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 font-cinzel tracking-wider uppercase text-xs sm:text-sm`}>
              Become a Sponsor
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SponsorPackage;
