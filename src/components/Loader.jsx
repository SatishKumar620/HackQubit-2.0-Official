import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import shipWheelImg from "../assets/images/captain_ship_wheel.png";
import islandBgImg from "../assets/images/wheel_island_bg.png";
import hackqubitLogo from "../assets/images/hackqubit_jewel_title.png";

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const duration = 2500; // 2.5 seconds
    const intervalTime = 50;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(100, Math.floor((currentStep / steps) * 100));
      setProgress(currentProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          onLoadingComplete();
        }, 400);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-pirate-bg text-amber-950 px-6 overflow-hidden select-none"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative flex flex-col items-center z-10 max-w-sm w-full">
        
        {/* ── ROTATING SHIP WHEEL WITH TROPICAL ISLAND IN THE CENTER BG ── */}
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 mb-8 flex items-center justify-center">
          
          {/* Island background image centered specifically inside the wheel's hole */}
          <div className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-inner z-0">
            <img
              src={islandBgImg}
              alt="Pirate Island Center"
              className="w-full h-full object-cover transform scale-110"
            />
          </div>

          {/* Smoothly Rotating Captain Ship Steering Wheel */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="absolute inset-0 z-10 flex items-center justify-center"
          >
            <img
              src={shipWheelImg}
              alt="Captain's Ship Steering Wheel"
              className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.4)]"
            />
          </motion.div>

        </div>

        {/* ── HACKQUBIT 2.0 JEWEL TITLE LOGO ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 flex justify-center"
        >
          <img
            src={hackqubitLogo}
            alt="HackQubit 2.0 Title Logo"
            className="h-14 sm:h-16 w-auto object-contain filter drop-shadow-[0_6px_12px_rgba(120,70,10,0.35)]"
          />
        </motion.div>

        {/* ── PROGRESS BAR CONTAINER ── */}
        <div className="w-full max-w-xs h-3 bg-amber-950/20 rounded-full p-0.5 border border-amber-900/30 shadow-inner relative overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-amber-700 via-amber-500 to-amber-800 shadow-md"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.05 }}
          />
        </div>

        {/* ── PERCENTAGE & STATUS TEXT ── */}
        <div className="mt-3 flex items-center justify-between w-full max-w-xs font-cinzel text-xs font-black text-amber-950">
          <span className="uppercase tracking-widest text-amber-900">Setting Sail...</span>
          <span className="tracking-wider">{progress}%</span>
        </div>

      </div>
    </motion.div>
  );
};

export default Loader;
