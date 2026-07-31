import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, ArrowUpRight, Compass, Zap } from "lucide-react";
import pirateHackerCrewImg from "../assets/images/pirate_hacker_crew.png";
import youngPirateImg from "../assets/images/young_pirate_about.png";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const pirateRef = useRef(null);
  const crewImgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.fromTo(
        crewImgRef.current,
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: crewImgRef.current, start: "top 90%" },
        }
      );

      // Young pirate slide-in from right + float loop
      if (pirateRef.current) {
        gsap.fromTo(
          pirateRef.current,
          { x: 80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.0,
            ease: "power3.out",
            scrollTrigger: { trigger: pirateRef.current, start: "top 90%" },
          }
        );
        // Continuous gentle float
        gsap.to(pirateRef.current, {
          y: -18,
          duration: 2.6,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 0.8,
        });
      }
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

        {/* Young Pirate + Info Cards Row */}
        <div ref={cardsContainerRef} className="grid grid-cols-1 lg:grid-cols-[auto_1fr_1fr] gap-8 items-center">

          {/* Young Anime Pirate — no background */}
          <div
            ref={pirateRef}
            className="hidden lg:flex items-end justify-center"
            style={{ minWidth: "180px", maxWidth: "220px" }}
          >
            <img
              src={youngPirateImg}
              alt="Young Anime Pirate"
              className="w-full h-auto object-contain drop-shadow-2xl"
              style={{ filter: "drop-shadow(0 8px 24px rgba(139,90,43,0.35))" }}
            />
          </div>

          {/* Card 1: 24-Hour Live Challenge */}
          <div className="relative p-8 rounded-3xl border border-amber-900/20 bg-white/95 backdrop-blur-xl shadow-2xl flex flex-col justify-between">
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

        {/* ── CREW PHOTO: Anime-Style Pirate Hacker Team on Island at the Bottom ── */}
        <div
          ref={crewImgRef}
          className="mt-20 relative rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-900/20"
        >
          {/* Gradient overlay so it blends into sky above */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-pirate-bg to-transparent z-10 pointer-events-none" />

          {/* Caption Banner */}
          <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-amber-950/90 via-amber-950/50 to-transparent px-8 py-6">
            <p className="font-cinzel text-amber-100 font-extrabold text-lg sm:text-2xl tracking-wide">
              🏴‍☠️ Our Crew Awaits You
            </p>
            <p className="font-cinzel text-amber-300 font-bold text-sm mt-1">
              Join 500+ pirate hackers sailing the high seas of innovation together.
            </p>
          </div>

          <img
            src={pirateHackerCrewImg}
            alt="Anime-style Pirate Hacker Crew on Island"
            className="w-full h-auto object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
