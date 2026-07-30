import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, ArrowUpRight, Compass, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header & Container Animations
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full py-24 px-6 sm:px-10 lg:px-16 overflow-hidden bg-slate-50 text-slate-900"
    >
      {/* Subtle Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-[1150px] mx-auto relative z-20">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/40 bg-amber-50/90 mb-4 shadow-sm">
            <Compass className="w-4 h-4 text-amber-700" />
            <span className="font-cinzel text-xs tracking-[0.25em] text-amber-900 uppercase font-bold">
              The Grand Expedition
            </span>
          </div>

          <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-950 leading-tight">
            About <span className="text-amber-700">HackQubit 2.0</span>
          </h2>
          <p className="mt-4 font-cinzel text-slate-650 text-base max-w-[620px] mx-auto leading-relaxed">
            Hosted at <strong className="text-slate-950 font-bold">RVSCET, Jamshedpur</strong>. 
            A 24-hour national challenge empowering developers to Code, Create & Conquer.
          </p>
        </div>

        {/* ── 2 HORIZONTAL CARDS SIDE-BY-SIDE GRID ── */}
        <div ref={cardsContainerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: 24-Hour Live Challenge */}
          <div className="relative p-8 rounded-3xl border border-amber-600/30 bg-white/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(139,107,63,0.08)] flex flex-col justify-between">
            {/* Top Amber Highlight Line */}
            <div className="absolute top-0 left-8 right-8 h-[2.5px] bg-gradient-to-r from-transparent via-amber-600/60 to-transparent" />

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-800 flex-shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-cinzel text-[10px] uppercase tracking-widest text-amber-800 font-bold block">
                    National Hackathon
                  </span>
                  <h3 className="font-cinzel text-xl font-bold text-slate-950">
                    24-Hour Live Challenge
                  </h3>
                </div>
              </div>

              <p className="font-cinzel text-slate-700 text-sm sm:text-base leading-relaxed">
                HackQubit 2.0 is a 24-hour non-stop hackathon hosted live at RVSCET, Jamshedpur. Problem statements are revealed live on spot — no pre-built slides or prior code. Test your real-time problem solving under pressure and conquer!
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-amber-500/15 flex items-center justify-between text-xs font-cinzel text-amber-900 font-bold">
              <span>⚡ Non-Stop Innovation</span>
              <span>✦ Live On-Spot</span>
            </div>
          </div>

          {/* Card 2: 2D Embedded Google Map & Location */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-white bg-white/90 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] flex flex-col justify-between">
            {/* Header Strip with White Theme & Flag Badge */}
            <div className="flex items-center justify-between gap-4 p-5 border-b border-slate-200 bg-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center bg-slate-950 text-white font-bold shadow-md">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-cinzel text-base font-bold text-slate-950">
                      RVSCET, Jamshedpur
                    </h4>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-slate-300 bg-white text-[10px] font-bold text-slate-800 uppercase tracking-wider">
                      🏳️ Venue
                    </span>
                  </div>
                  <p className="font-cinzel text-xs text-slate-600 mt-0.5">
                    Edalbera, Jamshedpur, Jharkhand 831012
                  </p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=RVSCET+Jamshedpur"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-950 hover:bg-amber-700 text-white font-cinzel font-bold text-xs tracking-wider transition-all duration-300 shadow-md flex-shrink-0"
              >
                <span>Open Map</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Embedded 2D Google Map Frame */}
            <div className="relative w-full h-[220px] bg-slate-100 flex-grow">
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
      </div>
    </section>
  );
};

export default About;
