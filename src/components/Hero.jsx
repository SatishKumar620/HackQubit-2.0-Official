import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Navbar from "./Navbar";
import HeroContent from "./HeroContent";
import SocialIcons from "./SocialIcons";
import ScrollIndicator from "./ScrollIndicator";

import animeOceanIslandImg from "../assets/images/anime_ocean_island.png";
import pirateShipCrewImg from "../assets/images/pirate_ship_crew.png";
import handsomePirateRopeImg from "../assets/images/handsome_pirate_rope.png";

const Hero = () => {
  const navbarRef = useRef(null);
  const subtitleRef = useRef(null);
  const headingLine1Ref = useRef(null);
  const headingLine2Ref = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const socialRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const pirateHeroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth entrance sequence
      gsap.fromTo(
        [subtitleRef.current, headingLine1Ref.current, headingLine2Ref.current, descriptionRef.current, buttonsRef.current],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" }
      );

      // Swaying swinging motion for pirate hero on rope across diagonal
      if (pirateHeroRef.current) {
        gsap.to(pirateHeroRef.current, {
          rotate: 3,
          y: -12,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
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

      {/* ── 2. MIDDLE LAYER: Pirate Ship with Crew (Full Details Preserved) ── */}
      <div className="absolute bottom-8 right-2 sm:right-12 md:right-20 z-10 w-[300px] sm:w-[460px] md:w-[580px] pointer-events-none filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)]">
        <img
          src={pirateShipCrewImg}
          alt="Pirate Ship with Crew"
          className="w-full h-auto object-contain animate-float"
        />
      </div>

      {/* ── 3. TOP FOREGROUND: Corner-to-Corner Diagonal Rigging Rope (Touches Top-Left & Bottom-Right Corners on All Screen Sizes) ── */}
      <svg
        className="absolute inset-0 w-full h-full z-20 pointer-events-none overflow-visible"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        {/* Main Thick Braided Rigging Rope stretching exactly from (0,0) to (1000,1000) */}
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

      {/* ── 4. TOP FOREGROUND: Large Handsome Pirate Hero Swinging directly on the Diagonal Rope ── */}
      <div
        ref={pirateHeroRef}
        className="absolute top-10 sm:top-14 right-2 sm:right-12 md:right-28 z-40 w-[320px] sm:w-[480px] md:w-[600px] pointer-events-none filter drop-shadow-[0_25px_40px_rgba(0,0,0,0.5)]"
      >
        <img
          src={handsomePirateRopeImg}
          alt="Handsome Pirate Hero Swinging on Rope"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Navbar */}
      <Navbar ref={navbarRef} />

      {/* ── 5. HERO MAIN CONTENT: Positioned BELOW the Swinging Pirate Rope (z-30) ── */}
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
    </section>
  );
};

export default Hero;
