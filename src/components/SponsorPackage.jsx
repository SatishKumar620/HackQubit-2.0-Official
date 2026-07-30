import React from 'react';
import { motion } from 'framer-motion';

const packages = [
  {
    name: "Bronze Buccaneer",
    price: "$500",
    features: ["Logo on website", "Social media shoutout", "Swag distribution", "Access to resumes"],
    color: "from-amber-600 to-amber-900",
    textColor: "text-amber-800"
  },
  {
    name: "Silver Sailor",
    price: "$1,500",
    features: ["Everything in Bronze", "Booth at event", "Speaking slot", "Dedicated channel in Discord"],
    color: "from-gray-300 to-gray-500",
    textColor: "text-gray-700",
    popular: true
  },
  {
    name: "Golden Captain",
    price: "$3,000",
    features: ["Everything in Silver", "Title sponsorship", "Keynote address", "Judge at final pitches", "Custom branded hackathon challenge"],
    color: "from-yellow-400 to-yellow-600",
    textColor: "text-yellow-700"
  }
];

const SponsorPackage = () => {
  return (
    <section className="py-20 relative px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-['Trade_Winds'] text-slate-800 mb-4"
        >
          Sponsor The Voyage
        </motion.h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Join our crew and help make HackQubit 2.0 an unforgettable adventure. We offer various sponsorship tiers to suit your booty.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`relative bg-white rounded-2xl p-8 shadow-xl border-2 ${pkg.popular ? 'border-amber-500 shadow-amber-200' : 'border-slate-200'} flex flex-col`}
          >
            {pkg.popular && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                Most Popular
              </div>
            )}
            <h3 className={`text-2xl font-bold font-['Cinzel'] mb-2 ${pkg.textColor}`}>{pkg.name}</h3>
            <div className="text-4xl font-extrabold text-slate-900 mb-6">{pkg.price}</div>
            <ul className="flex-grow space-y-3 mb-8">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-lg font-bold text-white bg-gradient-to-r ${pkg.color} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
              Become a Sponsor
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SponsorPackage;
