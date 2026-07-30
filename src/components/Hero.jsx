import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Navbar from "./Navbar";
import HeroContent from "./HeroContent";
import Stats from "./Stats";
import SocialIcons from "./SocialIcons";
import ScrollIndicator from "./ScrollIndicator";

const Hero = () => {
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
      // Smooth entrance sequence
      gsap.fromTo(
        [subtitleRef.current, headingLine1Ref.current, headingLine2Ref.current, descriptionRef.current, buttonsRef.current],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden bg-pirate-bg flex flex-col justify-between"
    >
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
      <div className="relative z-20 flex items-center justify-between px-6 sm:px-12 pb-8">
        <SocialIcons ref={socialRef} />
        <ScrollIndicator ref={scrollIndicatorRef} />
      </div>

      {/* Stats Bar */}
      <Stats ref={statsRef} />
    </section>
  );
};

export default Hero;
