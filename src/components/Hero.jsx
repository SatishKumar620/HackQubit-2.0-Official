import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Navbar from "./Navbar";
import HeroContent from "./HeroContent";
import SocialIcons from "./SocialIcons";
import ScrollIndicator from "./ScrollIndicator";

import animeOceanIslandImg from "../assets/images/anime_ocean_island.webp";
import flyingShipImg from "../assets/images/flying_ship_hero.webp";
import waterShipImg from "../assets/images/water_ship_hero.webp";
import flyingDragonImg from "../assets/images/flying_dragon_hero.webp";

const Hero = () => {
  const navbarRef = useRef(null);
  const subtitleRef = useRef(null);
  const headingLine1Ref = useRef(null);
  const headingLine2Ref = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const socialRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const flyingShipRef = useRef(null);
  const waterShipRef = useRef(null);
  const dragonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth entrance sequence
      gsap.fromTo(
        [subtitleRef.current, headingLine1Ref.current, headingLine2Ref.current, descriptionRef.current, buttonsRef.current],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" }
      );

      // Dragon entrance from far left
      gsap.fromTo(
        dragonRef.current,
        { opacity: 0, x: -120, y: -20 },
        { opacity: 1, x: 0, y: 0, duration: 1.4, ease: "power3.out", delay: 0.2 }
      );

      // Flying Ship floating entrance
      gsap.fromTo(
        flyingShipRef.current,
        { opacity: 0, x: -80, y: -40 },
        { opacity: 1, x: 0, y: 0, duration: 1.2, ease: "power3.out", delay: 0.4 }
      );

      // Water Ship entrance
      gsap.fromTo(
        waterShipRef.current,
        { opacity: 0, x: 80, y: 40 },
        { opacity: 1, x: 0, y: 0, duration: 1.2, ease: "power3.out", delay: 0.6 }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden bg-pirate-bg flex flex-col justify-between"
    >
      {/* ── 1. BACKGROUND: Anime Ocean Island Image ── */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none">
        <img
          src={animeOceanIslandImg}
          alt="Anime Ocean Island Background"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* Soft Sky Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-pirate-bg/60 via-transparent to-pirate-bg/80 pointer-events-none" />

      {/* ── 2. TOP FOREGROUND: Corner-to-Corner Diagonal Rigging Rope ── */}
      <svg
        className="absolute inset-0 w-full h-full z-20 pointer-events-none overflow-visible"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 0 C 350 250, 650 750, 1000 1000"
          fill="none"
          stroke="#381400"
          strokeWidth="16"
          strokeLinecap="square"
        />
        <path
          d="M 0 0 C 350 250, 650 750, 1000 1000"
          fill="none"
          stroke="#92400e"
          strokeWidth="7"
          strokeDasharray="20 10"
          strokeLinecap="square"
        />
      </svg>

      {/* ── 3. FLYING DRAGON (FAR LEFT SKY - LOOKING DOWN TOWARDS WATER SHIP) ── */}
      <div
        ref={dragonRef}
        className="absolute top-12 left-0 sm:left-2 lg:left-4 z-20 pointer-events-none w-48 sm:w-64 md:w-80 lg:w-[440px] max-w-[45vw] animate-[floatDragon_7s_ease-in-out_infinite]"
      >
        <img
          src={flyingDragonImg}
          alt="Flying Sea Dragon"
          className="w-full h-auto object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)]"
          loading="eager"
        />
      </div>

      {/* ── 4. FLYING PIRATE SHIP (LEFT SKY - LARGER & CLOSER TO CENTER) ── */}
      <div
        ref={flyingShipRef}
        className="absolute top-16 left-10 sm:left-20 lg:left-36 z-20 pointer-events-none w-64 sm:w-80 md:w-[450px] lg:w-[540px] max-w-[50vw] animate-[floatSky_6s_ease-in-out_infinite]"
      >
        <img
          src={flyingShipImg}
          alt="Flying Pirate Ship with Crew"
          className="w-full h-auto object-contain filter drop-shadow-[0_14px_28px_rgba(0,0,0,0.65)]"
          loading="eager"
        />
      </div>

      {/* ── 5. WATER ENEMY PIRATE SHIP (RIGHT SEA - LARGER & CLOSER TO CENTER) ── */}
      <div
        ref={waterShipRef}
        className="absolute bottom-12 right-4 sm:right-12 lg:right-28 z-20 pointer-events-none w-64 sm:w-80 md:w-[450px] lg:w-[540px] max-w-[50vw] animate-[bobSea_5s_ease-in-out_infinite]"
      >
        <img
          src={waterShipImg}
          alt="Enemy Pirate Ship on Water"
          className="w-full h-auto object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.55)]"
          loading="eager"
        />
      </div>

      {/* Navbar */}
      <Navbar ref={navbarRef} />

      {/* ── 6. HERO MAIN CONTENT ── */}
      <HeroContent
        refs={{
          subtitle: subtitleRef,
          headingLine1: headingLine1Ref,
          headingLine2: headingLine2Ref,
          description: descriptionRef,
          buttons: buttonsRef,
        }}
      />

      {/* Social Icons & Scroll Indicator */}
      <div className="relative z-30 flex items-center justify-between px-6 sm:px-12 pb-8">
        <SocialIcons ref={socialRef} />
        <ScrollIndicator ref={scrollIndicatorRef} />
      </div>

      {/* Floating Keyframe Styles */}
      <style>{`
        @keyframes floatDragon {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(2deg); }
        }
        @keyframes floatSky {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(1.5deg); }
        }
        @keyframes bobSea {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(12px) rotate(-1.5deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;

