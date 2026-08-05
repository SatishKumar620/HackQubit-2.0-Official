import React, { useState } from 'react';
import { motion } from 'framer-motion';
import femalePirateLookout from "../assets/images/female_pirate_lookout.webp";
import bgStoryGallery from "../assets/images/bg_story_gallery.webp";
import GoldRainParticles from "./GoldRainParticles";

const Gallery = () => {
  const images = [
    { id: 1, src: '/memory-1.jpeg', span: 'col-span-2 row-span-2', dir: 1 },
    { id: 2, src: '/memory-2.jpeg', span: 'col-span-1 row-span-1', dir: -1 },
    { id: 3, src: '/memory-3.jpeg', span: 'col-span-1 row-span-1', dir: 1 },
    { id: 4, src: '/memory-4.jpeg', span: 'col-span-1 row-span-2', dir: -1 },
    { id: 5, src: '/memory-5.jpeg', span: 'col-span-1 row-span-1', dir: 1 },
    { id: 6, src: '/memory-6.jpeg', span: 'col-span-2 row-span-1', dir: -1 },
    { id: 7, src: '/memory-7.jpg', span: 'col-span-1 row-span-1', dir: 1 },
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

      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-3 gap-4 h-[900px] md:h-[600px] relative z-10">
        {images.map((img, i) => {
          const isActive = activeId === img.id;
          return (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setActiveId(img.id)}
              onMouseLeave={() => setActiveId(null)}
              onTouchStart={() => setActiveId(img.id)}
              onTouchEnd={() => setActiveId(null)}
              className={`${img.span} bg-slate-200 rounded-xl overflow-hidden relative shadow-xl`}
            >
              <motion.img
                src={img.src}
                alt=""
                loading="lazy"
                decoding="async"
                animate={{ x: [0, img.dir * 60, 0] }}
                transition={{ duration: 6 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                className={`w-[130%] h-full object-cover transition-all duration-500 ${
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
