import React from "react";
import { motion } from "framer-motion";
import { Coins, Crown, Shield, Anchor, Award } from "lucide-react";

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

const TIERS = [
  {
    name: "Silver Tier",
    bounty: "₹15,000+",
    color: "from-slate-300 via-slate-100 to-slate-400",
    border: "border-slate-300",
    badgeBg: "bg-slate-200 text-slate-900 border-slate-400",
    icon: Shield,
    benefits: [
      "Logo on official website & event banners",
      "Distribution of digital swag & promo codes",
      "Access to participant resume database",
      "Social media shoutout across platforms",
    ],
  },
  {
    name: "Gold Tier",
    bounty: "₹30,000+",
    color: "from-amber-400 via-amber-200 to-yellow-500",
    border: "border-amber-400",
    badgeBg: "bg-amber-100 text-amber-950 border-amber-400",
    icon: Coins,
    popular: true,
    benefits: [
      "Everything in Silver Tier",
      "Keynote speaking opportunity (10 mins)",
      "Dedicated booth / recruitment desk at venue",
      "Custom track / prize category sponsorship",
      "Prominent logo on main stage backdrop",
    ],
  },
  {
    name: "Title Sponsor",
    bounty: "₹50,000+",
    color: "from-amber-600 via-yellow-300 to-amber-700",
    border: "border-amber-500",
    badgeBg: "bg-amber-500 text-amber-950 border-amber-600 font-black",
    icon: Crown,
    benefits: [
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
    <section id="sponsorship" className="py-24 relative px-6 max-w-7xl mx-auto overflow-hidden text-amber-950">
      {/* Thick Side Ropes with Shadow */}
      <SideThickRopes />

      {/* Section Header */}
      <div className="text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-900/40 bg-amber-500/20 mb-4 shadow-sm"
        >
          <Anchor className="w-4 h-4 text-amber-900" />
          <span className="font-cinzel text-xs tracking-widest text-amber-950 uppercase font-extrabold">
            Partnership Tiers
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-black text-amber-950 tracking-wide"
        >
          Sponsor <span className="text-amber-800">The Voyage</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 font-cinzel text-amber-900 font-bold text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Choose a sponsorship tier to empower 500+ developer pirates at HackQubit 2.0.
        </motion.p>
      </div>

      {/* Tier Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {TIERS.map((tier, index) => {
          const IconComp = tier.icon;
          return (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative rounded-3xl border-2 ${tier.border} bg-white/95 backdrop-blur-xl p-8 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:scale-[1.02] ${
                tier.popular ? "ring-4 ring-amber-500/40" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-600 to-yellow-600 text-amber-50 font-cinzel text-xs font-black tracking-widest uppercase shadow-md flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" /> Most Popular
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-900">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <span
                    className={`text-xs font-extrabold uppercase px-3 py-1 rounded-full border ${tier.badgeBg}`}
                  >
                    {tier.bounty}
                  </span>
                </div>

                <h3 className="font-cinzel text-2xl font-black text-amber-950 mb-2">
                  {tier.name}
                </h3>

                <ul className="mt-6 space-y-3 font-cinzel text-xs sm:text-sm text-amber-900 font-bold leading-relaxed">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-amber-700 font-bold shrink-0">✦</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-amber-200">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-600 hover:to-amber-800 text-amber-50 rounded-xl font-cinzel font-black text-xs sm:text-sm tracking-wider uppercase shadow-lg transition-all duration-300"
                >
                  Become a Sponsor
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SponsorPackage;
