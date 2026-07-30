import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, ExternalLink, Compass, Clock, Trophy, ShieldCheck, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const venueCardRef = useRef(null);
  const statsBarRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      // Feature Cards Animation
      gsap.fromTo(
        [card1Ref.current, card2Ref.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: { trigger: card1Ref.current, start: "top 80%" },
        }
      );

      // Venue Card Animation
      gsap.fromTo(
        venueCardRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: venueCardRef.current, start: "top 80%" },
        }
      );

      // Stats Bar Animation
      gsap.fromTo(
        statsBarRef.current,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.5)",
          scrollTrigger: { trigger: statsBarRef.current, start: "top 85%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full py-24 px-6 sm:px-10 lg:px-16 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #020b18 0%, #030e1f 50%, #020b18 100%)" }}
    >
      {/* Background Glow & Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(220,20,60,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(220,20,60,0.5) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(220,20,60,0.12) 0%, transparent 70%)" }}
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#dc143c]/30 bg-[#dc143c]/10 mb-4">
            <Compass className="w-3.5 h-3.5 text-[#dc143c]" />
            <span className="font-cinzel text-xs tracking-[0.3em] text-[#dc143c] uppercase font-semibold">
              The Grand Voyage
            </span>
          </div>
          <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            About <span className="text-[#dc143c]">HackQubit 2.0</span>
          </h2>
          <p className="mt-4 font-cinzel text-white/60 text-sm sm:text-base max-w-[600px] mx-auto leading-relaxed">
            The premier national-level hackathon hosted by <strong className="text-white">RVSCET, Jamshedpur</strong>. 
            Gathering India's boldest innovators for a non-stop coding expedition.
          </p>
        </div>

        {/* Feature Cards Grid (Compact & Modern) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Card 1: The Initiative */}
          <div
            ref={card1Ref}
            className="group relative p-8 rounded-2xl transition-all duration-400 hover:-translate-y-1.5"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
              border: "1px solid rgba(220,20,60,0.25)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
            }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[#dc143c]/15 border border-[#dc143c]/30 text-[#dc143c]">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-cinzel text-xl font-bold text-white mb-3">
              Pirates of the Sea
            </h3>
            <p className="font-cinzel text-sm text-white/65 leading-relaxed">
              A student-led movement at RVSCET driving technical excellence. We empower developers through competitive coding, workshops, and real-world innovation challenges.
            </p>
          </div>

          {/* Card 2: The Hackathon */}
          <div
            ref={card2Ref}
            className="group relative p-8 rounded-2xl transition-all duration-400 hover:-translate-y-1.5"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
              border: "1px solid rgba(59,130,246,0.25)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
            }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-blue-500/15 border border-blue-500/30 text-blue-400">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="font-cinzel text-xl font-bold text-white mb-3">
              Pure Innovation. On the Spot.
            </h3>
            <p className="font-cinzel text-sm text-white/65 leading-relaxed">
              No pre-submitted PPTs or prior builds. Problem statements are revealed live on the spot. Test your real-time problem solving, code under pressure, and conquer!
            </p>
          </div>
        </div>

        {/* Venue & Location Highlight Card (Embedded Map Link) */}
        <div
          ref={venueCardRef}
          className="relative rounded-2xl p-6 sm:p-8 overflow-hidden mb-12 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: "linear-gradient(135deg, rgba(220,20,60,0.12) 0%, rgba(10,20,40,0.8) 100%)",
            border: "1px solid rgba(220,20,60,0.35)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 15px 40px rgba(0,0,0,0.5)",
          }}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center bg-[#dc143c] text-white shadow-[0_0_20px_rgba(220,20,60,0.5)]">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="font-cinzel text-xs text-[#dc143c] tracking-[0.25em] uppercase font-bold">
                Official Venue & Location
              </span>
              <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-white mt-1">
                RVSCET, Jamshedpur
              </h4>
              <p className="font-cinzel text-sm text-white/60 mt-1">
                RVS College of Engineering and Technology, Edalbera, Jamshedpur, Jharkhand 831012
              </p>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=RVSCET+Jamshedpur"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-cinzel text-sm text-white font-semibold tracking-wider transition-all duration-300 hover:shadow-[0_0_25px_rgba(220,20,60,0.6)] flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, #dc143c 0%, #a00c2a 100%)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Quick Highlights Bar (Corrected to 24 Hours) */}
        <div
          ref={statsBarRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl text-center"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div>
            <span className="block font-cinzel text-2xl sm:text-3xl font-bold text-[#dc143c]">24 HR</span>
            <span className="font-cinzel text-[10px] text-white/50 uppercase tracking-widest mt-1 block">Non-Stop Hackathon</span>
          </div>
          <div>
            <span className="block font-cinzel text-2xl sm:text-3xl font-bold text-blue-400">OCT 7–8</span>
            <span className="font-cinzel text-[10px] text-white/50 uppercase tracking-widest mt-1 block">2025 Event Dates</span>
          </div>
          <div>
            <span className="block font-cinzel text-2xl sm:text-3xl font-bold text-amber-400">NATIONAL</span>
            <span className="font-cinzel text-[10px] text-white/50 uppercase tracking-widest mt-1 block">Level Open for All</span>
          </div>
          <div>
            <span className="block font-cinzel text-2xl sm:text-3xl font-bold text-emerald-400">ON-SPOT</span>
            <span className="font-cinzel text-[10px] text-white/50 uppercase tracking-widest mt-1 block">Problem Statements</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
