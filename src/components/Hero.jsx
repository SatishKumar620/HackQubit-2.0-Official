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
          rotate: 4,
          y: -15,
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
      <div className="absolute inset-0 z-0 opacity-45 mix-blend-multiply pointer-events-none">
        <img
          src={animeOceanIslandImg}
          alt="Anime Ocean Island Background"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* Soft Sky Gradient Overlay to maintain sky theme */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-pirate-bg/60 via-transparent to-pirate-bg/80 pointer-events-none" />

      {/* ── 2. MIDDLE LAYER: Pirate Ship with Crew sailing on Ocean ── */}
      <div className="absolute bottom-10 right-4 sm:right-16 md:right-24 z-10 w-[280px] sm:w-[420px] md:w-[520px] pointer-events-none filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)]">
        <img
          src={pirateShipCrewImg}
          alt="Pirate Ship with Crew"
          className="w-full h-auto object-contain animate-float"
        />
      </div>

      {/* ── 3. TOP FOREGROUND: Diagonal Rigging Rope stretched from Corner to Corner ── */}
      <svg
        className="absolute inset-0 w-full h-full z-20 pointer-events-none"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        {/* Thick Main Diagonal Rigging Rope */}
        <path
          d="M 0 0 C 350 250, 650 750, 1000 1000"
          fill="none"
          stroke="#451a03"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M 0 0 C 350 250, 650 750, 1000 1000"
          fill="none"
          stroke="#92400e"
          strokeWidth="5"
          strokeDasharray="16 8"
          strokeLinecap="round"
        />
      </svg>

      {/* ── 4. TOP FOREGROUND: Handsome Pirate Hero Swinging on Rope ── */}
      <div
        ref={pirateHeroRef}
        className="absolute top-16 sm:top-20 right-6 sm:right-28 md:right-44 z-30 w-[240px] sm:w-[380px] md:w-[460px] pointer-events-none filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)]"
      >
        <img
          src={handsomePirateRopeImg}
          alt="Handsome Pirate Hero Holding Rope"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Navbar */}
      <Navbar ref={navbarRef} />

      {/* Hero Main Content (Left Aligned) */}
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
