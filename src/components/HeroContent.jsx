import React from "react";
import pirateJewelryImg from "../assets/images/pirate_jewelry.png";

const HeroContent = ({ refs }) => {
  return (
    <div className="relative z-20 flex flex-col items-start justify-center max-w-4xl px-6 sm:px-12 lg:px-20 pt-28 pb-16 text-left">
      {/* Small Badge / Tagline */}
      <div
        ref={refs.subtitle}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-600/40 bg-amber-500/15 mb-6 shadow-sm"
      >
        <span className="w-2 h-2 rounded-full bg-amber-600 animate-ping" />
        <span className="font-cinzel text-xs sm:text-sm tracking-widest text-amber-900 font-extrabold uppercase">
          Annual Flagship Pirate Hackathon
        </span>
      </div>

      {/* Main Heading: "HackQubit 2.0" in Golden-Brown with Pirate Jewelry Overlay */}
      <div className="relative mb-6 group select-none">
        {/* Pirate Jewelry Accent Graphic directly wearing/decorating the text */}
        <div className="absolute -top-12 -left-8 sm:-top-16 sm:-left-12 w-28 sm:w-40 pointer-events-none z-30 drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)] animate-float">
          <img
            src={pirateJewelryImg}
            alt="Pirate Gold Jewelry & Crown"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Text line 1: HackQubit */}
        <h1
          ref={refs.headingLine1}
          className="font-cinzel text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-800 to-amber-950 drop-shadow-sm"
        >
          HackQubit
        </h1>

        {/* Text line 2: 2.0 with Golden-Brown Gradient & Glow */}
        <div className="flex items-baseline gap-4 mt-1">
          <h1
            ref={refs.headingLine2}
            className="font-cinzel text-6xl sm:text-8xl md:text-9xl xl:text-[140px] font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-800 to-amber-950"
          >
            2.0
          </h1>

          <span className="font-cinzel text-lg sm:text-2xl font-bold text-amber-900/80 tracking-wider">
            Edition
          </span>
        </div>
      </div>

      {/* Slogan Below Heading */}
      <p
        ref={refs.description}
        className="font-cinzel text-base sm:text-xl lg:text-2xl text-amber-950 font-extrabold max-w-2xl leading-relaxed mb-10 text-left"
      >
        “Sail the High Seas of Innovation, Unearth Rare Code Treasures & Conquer the Digital Ocean.”
      </p>

      {/* Two Clean Action Buttons: Registration & Learn More */}
      <div ref={refs.buttons} className="flex flex-wrap items-center gap-4 sm:gap-6">
        {/* Registration Button */}
        <a
          href="#register"
          className="px-8 sm:px-10 py-4 rounded-xl font-cinzel text-sm sm:text-base font-extrabold text-amber-50 bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 hover:from-amber-800 hover:to-amber-950 shadow-xl hover:shadow-amber-900/30 hover:scale-105 transition-all duration-300 uppercase tracking-widest border border-amber-600/40"
        >
          Registration
        </a>

        {/* Learn More Button */}
        <a
          href="#about"
          className="px-8 sm:px-10 py-4 rounded-xl font-cinzel text-sm sm:text-base font-extrabold text-amber-950 bg-amber-500/15 hover:bg-amber-500/25 border-2 border-amber-800/40 hover:border-amber-900 hover:scale-105 transition-all duration-300 uppercase tracking-widest shadow-md"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
