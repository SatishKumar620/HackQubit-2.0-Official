import React from 'react';
import { motion } from 'framer-motion';
import femalePirateLookout from "../assets/images/female_pirate_lookout.webp";
import bgStoryGallery from "../assets/images/bg_story_gallery.webp";
import GoldRainParticles from "./GoldRainParticles";

const Gallery = () => {
  const images = [
    { id: 1, src: '/memory-1.jpeg', title: 'Hacking Begins', span: 'col-span-2 row-span-2', offset: '-translate-y-3 md:-translate-y-6 rotate-[-1.5deg]' },
    { id: 2, src: '/memory-2.jpeg', title: 'Mentorship', span: 'col-span-1 row-span-1', offset: 'translate-y-4 md:translate-y-8 rotate-[2deg]' },
    { id: 3, src: '/memory-3.jpeg', title: 'Midnight Snacks', span: 'col-span-1 row-span-1', offset: '-translate-x-2 -translate-y-2 rotate-[1deg]' },
    { id: 4, src: '/memory-4.jpeg', title: 'Presentations', span: 'col-span-1 row-span-2', offset: 'translate-x-3 translate-y-2 rotate-[-2deg]' },
    { id: 5, src: '/memory-5.jpeg', title: 'Winners', span: 'col-span-1 row-span-1', offset: '-translate-y-4 md:-translate-y-8 rotate-[1.5deg]' },
    { id: 6, src: '/memory-6.jpeg', title: 'Swag Distribution', span: 'col-span-2 row-span-1', offset: 'translate-y-2 rotate-[-1deg]' },
    { id: 7, src: '/memory-7.jpg', title: 'Crew Moments', span: 'col-span-1 row-span-1', offset: '-translate-x-3 translate-y-3 rotate-[2.5deg]' },
  ];

  return (
    <section className="relative py-20 px-6 max-w-7xl mx-auto overflow-hidden">
      <GoldRainParticles />

      {/* ── LANDSCAPE ANIME STORY BACKGROUND AT BOTTOM WITH TOP GRADIENT BLEND ── */}
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

      {/* Female Pirate Lookout Cutout Overlay (Looking through Spyglass - Top Right) */}
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
        {images.map((img, i) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`${img.span} ${img.offset} bg-slate-200 rounded-xl overflow-hidden relative group shadow-xl transition-transform duration-500 hover:!translate-x-0 hover:!translate-y-0 hover:!rotate-0 hover:z-20`}
          >
            <motion.img
              src={img.src}
              alt={img.title}
              loading="lazy"
              decoding="async"
              initial={{ filter: 'grayscale(100%)' }}
              whileInView={{ filter: 'grayscale(0%)' }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white font-bold text-lg">{img.title}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
