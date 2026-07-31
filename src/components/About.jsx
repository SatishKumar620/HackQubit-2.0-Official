import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, ArrowUpRight, Compass, Zap, Anchor } from "lucide-react";
import youngPiratesCrewImg from "../assets/images/young_anime_pirates_crew_transparent.png";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const crewImgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      // Side-by-side cards Animation
      gsap.fromTo(
        cardsContainerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: cardsContainerRef.current, start: "top 85%" },
        }
      );

      // Young Pirates Cutout Animation (float + slide up)
      gsap.fromTo(
        crewImgRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: crewImgRef.current, start: "top 85%" },
        }
      );

      // Continuous gentle bobbing float effect for the pirates cutout
      gsap.to(crewImgRef.current, {
        y: -12,
        duration: 2.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full py-24 px-6 sm:px-10 lg:px-16 overflow-hidden bg-pirate-bg text-amber-950"
    >
      <div className="max-w-[1150px] mx-auto relative z-20">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-900/40 bg-amber-500/20 mb-4 shadow-sm">
            <Compass className="w-4 h-4 text-amber-900" />
            <span className="font-cinzel text-xs tracking-[0.25em] text-amber-950 uppercase font-extrabold">
              The Grand Expedition
            </span>
          </div>

          <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-black text-amber-950 leading-tight">
            About <span className="text-amber-800">HackQubit 2.0</span>
          </h2>
          <p className="mt-4 font-cinzel text-amber-900 font-bold text-base max-w-[620px] mx-auto leading-relaxed">
            Hosted at <strong className="text-amber-950 font-extrabold">RVSCET, Jamshedpur</strong>.{" "}
            A 24-hour national challenge empowering developers to Code, Create &amp; Conquer.
          </p>
        </div>

        {/* ── 2 CARDS IN THE SAME ROW ── */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-20"
        >
          {/* Card 1: 24-Hour Live Challenge */}
          <div className="relative p-8 rounded-3xl border border-amber-900/20 bg-white/95 backdrop-blur-xl shadow-2xl flex flex-col justify-between hover:border-amber-700/50 transition-all duration-300">
            <div className="absolute top-0 left-8 right-8 h-[2.5px] bg-gradient-to-r from-transparent via-amber-700/60 to-transparent" />

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-800 flex-shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-cinzel text-[10px] uppercase tracking-widest text-amber-800 font-extrabold block">
                    National Hackathon
                  </span>
                  <h3 className="font-cinzel text-xl font-extrabold text-amber-950">
                    24-Hour Live Challenge
                  </h3>
                </div>
              </div>

              <p className="font-cinzel text-amber-900 font-bold text-sm sm:text-base leading-relaxed">
                HackQubit 2.0 is a 24-hour non-stop hackathon hosted live at RVSCET, Jamshedpur.
                Problem statements are revealed live on spot — no pre-built slides or prior code.
                Test your real-time problem solving under pressure and conquer!
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-amber-500/15 flex items-center justify-between text-xs font-cinzel text-amber-900 font-extrabold">
              <span>⚡ Non-Stop Innovation</span>
              <span>✦ Live On-Spot</span>
            </div>
          </div>

          {/* Card 2: Venue + Map */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-amber-900/20 bg-white/95 backdrop-blur-2xl shadow-2xl flex flex-col justify-between">
            <div className="flex items-center justify-between gap-4 p-5 border-b border-amber-200 bg-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center bg-amber-800 text-amber-50 shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-cinzel text-base font-extrabold text-amber-950">
                      RVSCET, Jamshedpur
                    </h4>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-amber-300 bg-amber-50 text-[10px] font-bold text-amber-900 uppercase tracking-wider">
                      🏳️ Venue
                    </span>
                  </div>
                  <p className="font-cinzel text-xs text-amber-800 font-bold mt-0.5">
                    Edalbera, Jamshedpur, Jharkhand 831012
                  </p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=RVSCET+Jamshedpur"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-800 hover:bg-amber-950 text-amber-50 font-cinzel font-extrabold text-xs tracking-wider transition-all duration-300 shadow-md flex-shrink-0"
              >
                <span>Open Map</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div className="relative w-full h-[220px] bg-amber-50 flex-grow">
              <iframe
                title="RVSCET Jamshedpur 2D Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.234!2d86.1833!3d22.8046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e31ff5ef8221%3A0x9b9b1f1f1f1f1f1f!2sRVSCET%20Jamshedpur!5e0!3m2!1sen!2sin!4v1000000000000"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* ── YOUNG HANDSOME ANIME PIRATES CUTOUT (NO BACKGROUND) ── */}
        <div ref={crewImgRef} className="flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/15 border border-amber-800/30 text-amber-950 font-cinzel font-extrabold text-xs mb-4">
            <Anchor className="w-3.5 h-3.5 text-amber-800" />
            <span>Meet The Pirate Hacker Crew</span>
          </div>

          <p className="font-cinzel text-xl sm:text-2xl font-black text-amber-950 max-w-xl mx-auto tracking-wide mb-6">
            Join 500+ developers sailing the digital ocean together!
          </p>

          <div className="relative max-w-3xl w-full flex items-center justify-center">
            <img
              src={youngPiratesCrewImg}
              alt="Young Handsome Anime Pirate Hackers Cutout"
              className="w-full h-auto max-h-[500px] object-contain drop-shadow-[0_20px_35px_rgba(120,70,10,0.3)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
