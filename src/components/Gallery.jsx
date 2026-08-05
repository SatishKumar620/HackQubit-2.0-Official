import React, { useState } from 'react';
import { motion } from 'framer-motion';
import femalePirateLookout from "../assets/images/female_pirate_lookout.webp";
import bgStoryGallery from "../assets/images/bg_story_gallery.webp";
import GoldRainParticles from "./GoldRainParticles";

const Gallery = () => {
  const images = [
    { id: 1, src: '/memory-1.jpeg', top: '2%',  size: 'w-40 sm:w-56', dir: 1, duration: 14 },
    { id: 2, src: '/memory-2.jpeg', top: '18%', size: 'w-28 sm:w-40', dir: -1, duration: 11 },
    { id: 3, src: '/memory-3.jpeg', top: '34%', size: 'w-32 sm:w-44', dir: 1, duration: 16 },
    { id: 4, src: '/memory-4.jpeg', top: '50%', size: 'w-36 sm:w-48', dir: -1, duration: 13 },
    { id: 5, src: '/memory-5.jpeg', top: '64%', size: 'w-28 sm:w-40', dir: 1, duration: 12 },
    { id: 6, src: '/memory-6.jpeg', top: '78%', size: 'w-40 sm:w-56', dir: -1, duration: 15 },
    { id: 7, src: '/memory-7.jpg',  top: '90%', size: 'w-32 sm:w-44', dir: 1, duration: 10 },
  ];

  const [activeId, setActiveId] = useState(null);

  return (
    <section className="relative py-20 px-6 max-w-7xl mx-auto overflow-hidden">
      <GoldRainParticles />

      <div className="absolute inset-x-0 bottom-0 h-[450px] sm:h-[550px] pointer-events-none z-0 overflow-hidden">
        <img
          src={bgStoryGallery}
          alt="Pirate Beach Campfire Story"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-bottom opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-pirate-bg/40 to-pirate-bg" />
      </div>

      <div className="absolute top-2 right-2 sm:right-6 z-30 pointer-events-none block">
        <img
          src={femalePirateLookout}
          alt="Female Pirate Lookout with Spyglass"
          loading="lazy"
          decoding="async"
          className="w-36 sm:w-48 lg:w-56 h-auto object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.4)] transform hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="text-center mb-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-['Trade_Winds'] text-slate-800 mb-4"
        >
          Memories of the Sea
        </motion.h2>
        <p className="text-lg text-slate-600">Glimpses from our previous adventures.</p>
      </div>

      {/* Full-width traveling photo lane */}
      <div className="relative w-full h-[1400px] sm:h-[1000px] overflow-hidden z-10">
        {images.map((img) => {
          const isActive = activeId === img.id;
          const startX = img.dir === 1 ? '-30vw' : '130vw';
          const endX = img.dir === 1 ? '130vw' : '-30vw';
          return (
            <motion.div
              key={img.id}
              className={`absolute ${img.size} rounded-xl overflow-hidden shadow-xl cursor-pointer`}
              style={{ top: img.top }}
              animate={{ x: isActive ? undefined : [startX, endX] }}
              transition={{ duration: img.duration, repeat: Infinity, ease: 'linear' }}
              onMouseEnter={() => setActiveId(img.id)}
              onMouseLeave={() => setActiveId(null)}
              onTouchStart={() => setActiveId(img.id)}
              onTouchEnd={() => setActiveId(null)}
            >
              <img
                src={img.src}
                alt=""
                loading="lazy"
                decoding="async"
                className={`w-full h-full object-cover transition-all duration-500 ${
                  isActive ? 'grayscale-0' : 'grayscale'
                }`}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
