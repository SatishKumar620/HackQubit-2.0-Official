import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, ArrowUpRight, Compass, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ── Left Side Realistic Anime Forest (Branches, Leaves, Trees) ──
const LeftAnimeForest = () => (
  <svg
    className="left-forest-svg absolute left-0 top-0 h-full w-56 sm:w-72 lg:w-96 pointer-events-none z-10"
    viewBox="0 0 400 1000"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="leafGrad1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <linearGradient id="leafGrad2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
      <linearGradient id="barkGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#451a03" />
        <stop offset="100%" stopColor="#78350f" />
      </linearGradient>
    </defs>

    {/* Tree Trunks & Main Branches Push-in Layer */}
    <g className="left-trees-push">
      {/* Background Tree Silhouettes */}
      <path d="M 0 100 Q 120 150 160 220 Q 80 280 0 310 Z" fill="#065f46" opacity="0.4" />
      <path d="M 0 400 Q 180 430 220 500 Q 90 560 0 600 Z" fill="#047857" opacity="0.5" />
      <path d="M 0 700 Q 190 730 240 820 Q 100 880 0 920 Z" fill="#065f46" opacity="0.4" />

      {/* Realistic Thick Tree Trunks & Extending Branches */}
      <path d="M -30 150 C 80 250, 100 350, 140 450 C 40 500, -20 600, -30 750" stroke="url(#barkGrad)" strokeWidth="22" strokeLinecap="round" />
      {/* Branch 1 */}
      <path d="M 60 280 Q 160 240 220 280" stroke="url(#barkGrad)" strokeWidth="10" strokeLinecap="round" />
      {/* Branch 2 */}
      <path d="M 110 400 Q 220 380 270 430" stroke="url(#barkGrad)" strokeWidth="12" strokeLinecap="round" />
      {/* Branch 3 */}
      <path d="M 90 620 Q 200 600 250 670" stroke="url(#barkGrad)" strokeWidth="10" strokeLinecap="round" />
    </g>

    {/* Vines & Climbing tendrils */}
    <path className="anime-vine-left-1" d="M 0 50 Q 140 200 60 420 T 200 780 T 0 980" stroke="#059669" strokeWidth="4" strokeLinecap="round" />

    {/* Leaves Clusters on Branches */}
    <g className="anime-leaves-left">
      <path d="M 180 240 C 230 200 270 240 240 280 C 190 290 170 260 180 240 Z" fill="url(#leafGrad1)" />
      <path d="M 230 400 C 280 350 320 400 290 440 C 240 460 210 430 230 400 Z" fill="url(#leafGrad2)" />
      <path d="M 210 640 C 260 600 290 640 270 680 C 220 700 190 670 210 640 Z" fill="url(#leafGrad1)" />
    </g>
  </svg>
);

// ── Right Side Realistic Anime Forest (Branches, Leaves, Trees) ──
const RightAnimeForest = () => (
  <svg
    className="right-forest-svg absolute right-0 top-0 h-full w-56 sm:w-72 lg:w-96 pointer-events-none z-10"
    viewBox="0 0 400 1000"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="leafRightGrad1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#065f46" />
      </linearGradient>
      <linearGradient id="leafRightGrad2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#6ee7b7" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
    </defs>

    {/* Tree Trunks & Main Branches Push-in Layer */}
    <g className="right-trees-push">
      {/* Background Tree Silhouettes */}
      <path d="M 400 120 Q 280 160 240 230 Q 320 280 400 300 Z" fill="#047857" opacity="0.45" />
      <path d="M 400 420 Q 220 460 170 540 Q 300 600 400 630 Z" fill="#065f46" opacity="0.5" />
      <path d="M 400 720 Q 240 760 190 830 Q 310 880 400 910 Z" fill="#047857" opacity="0.45" />

      {/* Realistic Thick Tree Trunks & Extending Branches */}
      <path d="M 430 150 C 320 250, 300 350, 260 450 C 360 500, 420 600, 430 750" stroke="#78350f" strokeWidth="22" strokeLinecap="round" />
      {/* Branch 1 */}
      <path d="M 340 280 Q 240 240 180 280" stroke="#78350f" strokeWidth="10" strokeLinecap="round" />
      {/* Branch 2 */}
      <path d="M 290 400 Q 180 380 130 430" stroke="#78350f" strokeWidth="12" strokeLinecap="round" />
      {/* Branch 3 */}
      <path d="M 310 620 Q 200 600 150 670" stroke="#78350f" strokeWidth="10" strokeLinecap="round" />
    </g>

    {/* Vines Right */}
    <path className="anime-vine-right-1" d="M 400 80 Q 260 250 340 480 T 200 800 T 400 980" stroke="#047857" strokeWidth="4" strokeLinecap="round" />

    {/* Leaves Clusters Right */}
    <g className="anime-leaves-right">
      <path d="M 220 240 C 170 200 130 240 160 280 C 210 290 230 260 220 240 Z" fill="url(#leafRightGrad1)" />
      <path d="M 170 400 C 120 350 80 400 110 440 C 160 460 190 430 170 400 Z" fill="url(#leafRightGrad2)" />
      <path d="M 190 640 C 140 600 110 640 130 680 C 180 700 210 670 190 640 Z" fill="url(#leafRightGrad1)" />
    </g>
  </svg>
);

const About = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const mainCardRef = useRef(null);
  const mapCardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Anime Forest Trees & Branches Push-in on Scroll
      gsap.fromTo(
        ".left-trees-push",
        { x: -70, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "bottom 25%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        ".right-trees-push",
        { x: 70, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "bottom 25%",
            scrub: 1,
          },
        }
      );

      // 2. Animated Vine Growth
      const vinePaths = gsap.utils.toArray(".anime-vine-left-1, .anime-vine-right-1");
      vinePaths.forEach((path) => {
        const length = path.getTotalLength ? path.getTotalLength() : 900;
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 25%",
            scrub: 1.2,
          },
        });
      });

      // 3. Leaf Pop Animation
      gsap.fromTo(
        ".anime-leaves-left path, .anime-leaves-right path",
        { scale: 0, transformOrigin: "center center" },
        {
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );

      // 4. Content Elements Fade In
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
        mainCardRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: mainCardRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        mapCardRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: mapCardRef.current, start: "top 85%" },
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
      {/* Realistic Anime Forest Trees (Push in from Left & Right) */}
      <LeftAnimeForest />
      <RightAnimeForest />

      {/* Subtle Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-[850px] mx-auto relative z-20">
        {/* Section Header with Golden Compass Icon */}
        <div ref={headerRef} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/40 bg-amber-50/90 mb-4 shadow-sm">
            <Compass className="w-4 h-4 text-amber-700" />
            <span className="font-cinzel text-xs tracking-[0.25em] text-amber-900 uppercase font-bold">
              The Grand Expedition
            </span>
          </div>

          {/* Clean Slate Header with Amber Highlight (No Green Text) */}
          <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-950 leading-tight">
            About <span className="text-amber-700">HackQubit 2.0</span>
          </h2>
          <p className="mt-4 font-cinzel text-slate-650 text-base max-w-[580px] mx-auto leading-relaxed">
            Hosted at <strong className="text-slate-950 font-bold">RVSCET, Jamshedpur</strong>. 
            A 24-hour national challenge empowering developers to Code, Create & Conquer.
          </p>
        </div>

        {/* Glassmorphism Main Overview Card */}
        <div
          ref={mainCardRef}
          className="relative p-8 sm:p-10 rounded-3xl mb-10 border border-amber-600/30 bg-white/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(139,107,63,0.08)]"
        >
          {/* Custom Elegant Gold/Amber Divider Top Highlight */}
          <div className="absolute top-0 left-10 right-10 h-[2.5px] bg-gradient-to-r from-transparent via-amber-600/60 to-transparent" />

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-800 flex-shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-cinzel text-xl font-bold text-slate-950 mb-2">
                24-Hour Live Innovation Challenge
              </h3>
              <p className="font-cinzel text-slate-750 text-base leading-relaxed">
                HackQubit 2.0 is a 24-hour national hackathon hosted at RVSCET, Jamshedpur. Problem statements are revealed live on spot — no pre-built slides or prior code. Test your real-time problem solving under pressure and conquer!
              </p>
            </div>
          </div>
        </div>

        {/* 2D Visible Embedded Google Map Glassmorphism Card with White Boarder & White Flags */}
        <div
          ref={mapCardRef}
          className="relative rounded-3xl overflow-hidden border-2 border-white bg-white/90 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
        >
          {/* Header Strip with White Theme & White Flag Badges */}
          <div className="flex items-center justify-between gap-4 p-5 sm:p-6 border-b border-slate-200 bg-white">
            <div className="flex items-center gap-3">
              {/* White Pin / Flag Icon Container */}
              <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center bg-slate-950 text-white font-bold shadow-md">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-cinzel text-base font-bold text-slate-950">
                    RVSCET, Jamshedpur
                  </h4>
                  {/* White Board Flag Badge */}
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-slate-300 bg-white text-[10px] font-bold text-slate-800 shadow-xs uppercase tracking-wider">
                    🏳️ Official Venue
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
              className="group flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-amber-700 text-white font-cinzel font-bold text-xs tracking-wider transition-all duration-300 shadow-md flex-shrink-0"
            >
              <span>Open Map</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Compact 2D Visible Map Frame */}
          <div className="relative w-full h-[220px] bg-slate-100">
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
    </section>
  );
};

export default About;
