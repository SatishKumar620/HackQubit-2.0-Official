import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useMouseParallax } from "../hooks";
import { animateHeroEntrance } from "../animations";
import Navbar from "./Navbar";
import HeroContent from "./HeroContent";
import Stats from "./Stats";
import SocialIcons from "./SocialIcons";
import ScrollIndicator from "./ScrollIndicator";

const Hero = () => {
  const parallax = useMouseParallax(0.015);

  // Refs for animations
  const navbarRef = useRef(null);
  const subtitleRef = useRef(null);
  const headingLine1Ref = useRef(null);
  const headingLine2Ref = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const socialRef = useRef(null);
  const statsRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      animateHeroEntrance({
        navbar: navbarRef.current,
        subtitle: subtitleRef.current,
        headingLine1: headingLine1Ref.current,
        headingLine2: headingLine2Ref.current,
        description: descriptionRef.current,
        buttons: buttonsRef.current,
        social: socialRef.current,
        stats: statsRef.current,
        scrollIndicator: scrollIndicatorRef.current,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[700px] overflow-hidden bg-[#001f3f]"
    >
      {/* Night Pirate Ship SVG */}
      <div
        className="absolute inset-0 w-full h-full flex items-center justify-center"
      >
        <img
          src={require('../assets/svg/pirate_ship_night.svg').default}
          alt="Night pirate ship"
          className="w-full h-full object-contain"
          loading="eager"
        />
      </div>

      {/* Cinematic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#002b5c] via-transparent to-[#dc143c]/30" />

      {/* Navbar */}
      <Navbar ref={navbarRef} />

      {/* Hero Content */}
      <HeroContent
        refs={{
          subtitle: subtitleRef,
          headingLine1: headingLine1Ref,
          headingLine2: headingLine2Ref,
          description: descriptionRef,
          buttons: buttonsRef,
        }}
      />

      {/* Social Icons */}
      <SocialIcons ref={socialRef} />

      {/* Scroll Indicator */}
      <ScrollIndicator ref={scrollIndicatorRef} />

      {/* Stats Bar */}
      <Stats ref={statsRef} />
    </section>
  );
};

export default Hero;
