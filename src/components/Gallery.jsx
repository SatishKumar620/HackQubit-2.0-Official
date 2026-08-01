import React from 'react';
import { motion } from 'framer-motion';
import femalePirateLookout from "../assets/images/female_pirate_lookout.webp";
import bgStoryGallery from "../assets/images/bg_story_gallery.webp";
import GoldRainParticles from "./GoldRainParticles";

const Gallery = () => {
  const images = [
    { id: 1, title: 'Hacking Begins', span: 'col-span-2 row-span-2' },
    { id: 2, title: 'Mentorship', span: 'col-span-1 row-span-1' },
    { id: 3, title: 'Midnight Snacks', span: 'col-span-1 row-span-1' },
    { id: 4, title: 'Presentations', span: 'col-span-1 row-span-2' },
    { id: 5, title: 'Winners', span: 'col-span-1 row-span-1' },
    { id: 6, title: 'Swag Distribution', span: 'col-span-2 row-span-1' },
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

      <div className="text-center mb-12">
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

      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-4 h-[600px]">
        {images.map((img, i) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`${img.span} bg-slate-200 rounded-xl overflow-hidden relative group`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white font-bold text-lg">{img.title}</span>
            </div>
            {/* Placeholder for actual images */}
            <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold bg-sky-100 border border-sky-200">
              Image {img.id}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
