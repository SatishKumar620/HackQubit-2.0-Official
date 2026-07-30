import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, ArrowUpRight, Compass, Scroll, Zap, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ── Left Side Anime Forest & Foliage (Natural Green & Earth Tones) ──
const LeftAnimeForest = () => (
  <svg
    className="left-forest-svg absolute left-0 top-0 h-full w-48 sm:w-64 lg:w-80 pointer-events-none z-10"
    viewBox="0 0 350 1000"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="animeLeafGrad1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <linearGradient id="animeLeafGrad2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
      <linearGradient id="trunkGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#451a03" />
        <stop offset="100%" stopColor="#78350f" />
      </linearGradient>
    </defs>

    {/* Background Anime Pine & Broadleaf Trees Push-in Layer */}
    <g className="left-trees-push">
      {/* Background Tree 1 */}
      <path d="M 0 150 Q 80 180 120 220 Q 50 260 0 280 Z" fill="#065f46" opacity="0.4" />
      <path d="M 0 380 Q 140 400 180 460 Q 60 520 0 550 Z" fill="#047857" opacity="0.5" />
      <path d="M 0 680 Q 160 700 200 780 Q 70 840 0 880 Z" fill="#065f46" opacity="0.4" />

      {/* Anime Tree Trunks */}
      <path d="M -20 200 Q 60 350 -20 500" stroke="url(#trunkGrad)" strokeWidth="16" strokeLinecap="round" />
      <path d="M -10 600 Q 80 750 -10 900" stroke="url(#trunkGrad)" strokeWidth="18" strokeLinecap="round" />
    </g>

    {/* Dynamic Anime Vines & Wild Grasses */}
    <path className="anime-vine-left-1" d="M 0 50 Q 120 200 40 400 T 160 750 T 0 950" stroke="#059669" strokeWidth="4.5" strokeLinecap="round" />
    <path className="anime-vine-left-2" d="M 0 120 Q 160 300 60 550 T 180 850" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />

    {/* Vibrant Anime Leaves & Shrubs */}
    <g className="anime-leaves-left">
      <path d="M 120 220 C 160 190 190 220 170 250 C 130 260 110 240 120 220 Z" fill="url(#animeLeafGrad1)" />
      <path d="M 180 460 C 220 420 250 460 230 490 C 190 510 170 480 180 460 Z" fill="url(#animeLeafGrad2)" />
      <path d="M 160 750 C 200 710 230 750 210 780 C 170 800 150 770 160 750 Z" fill="url(#animeLeafGrad1)" />
    </g>
  </svg>
);

// ── Right Side Anime Forest & Foliage (Different Trees & Grasses) ──
const RightAnimeForest = () => (
  <svg
    className="right-forest-svg absolute right-0 top-0 h-full w-48 sm:w-64 lg:w-80 pointer-events-none z-10"
    viewBox="0 0 350 1000"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="animeRightLeafGrad1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#065f46" />
      </linearGradient>
      <linearGradient id="animeRightLeafGrad2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#6ee7b7" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
    </defs>

    {/* Background Anime Trees (Different Heights & Shapes) */}
    <g className="right-trees-push">
      <path d="M 350 100 Q 250 140 200 200 Q 280 250 350 270 Z" fill="#047857" opacity="0.45" />
      <path d="M 350 450 Q 210 490 150 560 Q 260 620 350 650 Z" fill="#065f46" opacity="0.5" />
      <path d="M 350 750 Q 230 780 180 840 Q 270 900 350 930 Z" fill="#047857" opacity="0.45" />

      {/* Curved Anime Tree Trunk Right */}
      <path d="M 360 300 Q 260 480 360 650" stroke="#78350f" strokeWidth="18" strokeLinecap="round" />
    </g>

    {/* Dynamic Anime Vines Right */}
    <path className="anime-vine-right-1" d="M 350 80 Q 220 250 300 480 T 160 800 T 350 980" stroke="#047857" strokeWidth="4" strokeLinecap="round" />
    <path className="anime-vine-right-2" d="M 350 180 Q 180 380 280 620 T 140 900" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />

    {/* Anime Foliage Clusters */}
    <g className="anime-leaves-right">
      <path d="M 200 200 C 160 170 130 200 150 230 C 180 240 210 220 200 200 Z" fill="url(#animeRightLeafGrad1)" />
      <path d="M 150 560 C 110 530 80 560 100 590 C 140 600 170 580 150 560 Z" fill="url(#animeRightLeafGrad2)" />
      <path d="M 180 840 C 140 810 110 840 130 870 C 160 880 190 860 180 840 Z" fill="url(#animeRightLeafGrad1)" />
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
      // 1. Anime Forest Left & Right Push-in on Scroll
      gsap.fromTo(
        ".left-trees-push",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        ".right-trees-push",
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            scrub: 1,
          },
        }
      );

      // 2. Animated Vine Growth (Stroke Dash Offset Scrub)
      const vinePaths = gsap.utils.toArray(
        ".anime-vine-left-1, .anime-vine-left-2, .anime-vine-right-1, .anime-vine-right-2"
      );
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

      // 3. Anime Leaf Pop / Scale Animation
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

      // 4. Header & Cards Fade In
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
      {/* Anime Forest & Plants (Left & Right Push-in on Scroll) */}
      <LeftAnimeForest />
      <RightAnimeForest />

      {/* Subtle Warm Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-[850px] mx-auto relative z-20">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-600/30 bg-emerald-50/80 mb-4 shadow-sm">
            <Compass className="w-4 h-4 text-emerald-700" />
            <span className="font-cinzel text-xs tracking-[0.25em] text-emerald-800 uppercase font-bold">
              The Grand Expedition
            </span>
          </div>

          <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-950 leading-tight">
            About <span className="text-emerald-600">HackQubit 2.0</span>
          </h2>
          <p className="mt-4 font-cinzel text-slate-600 text-base max-w-[580px] mx-auto leading-relaxed">
            Hosted at <strong className="text-slate-950 font-bold">RVSCET, Jamshedpur</strong>. 
            A 24-hour national challenge empowering developers to Code, Create & Conquer.
          </p>
        </div>

        {/* Clean Glassmorphism Overview Card (Single Focused Card - Removed Pirates of the Sea Card) */}
        <div
          ref={mainCardRef}
          className="relative p-8 sm:p-10 rounded-3xl mb-10 border border-emerald-500/25 bg-white/70 backdrop-blur-xl shadow-[0_20px_50px_rgba(5,150,105,0.08)]"
        >
          {/* Top Glow Accent Line */}
          <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-700 flex-shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-cinzel text-xl font-bold text-slate-950 mb-2">
                24-Hour Live Innovation Challenge
              </h3>
              <p className="font-cinzel text-slate-700 text-base leading-relaxed">
                HackQubit 2.0 is a 24-hour national hackathon hosted at RVSCET, Jamshedpur. Problem statements are revealed live on spot — no pre-built slides or prior code. Test your real-time problem solving under pressure and conquer!
              </p>
            </div>
          </div>
        </div>

        {/* Compact & Sleek 2D Visible Embedded Google Map Glassmorphism Card */}
        <div
          ref={mapCardRef}
          className="relative rounded-3xl overflow-hidden border border-emerald-500/30 bg-white/75 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
        >
          {/* Header Strip */}
          <div className="flex items-center justify-between gap-4 p-5 sm:p-6 border-b border-emerald-500/15 bg-emerald-50/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center bg-emerald-600 text-white font-bold shadow-md">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-cinzel text-base font-bold text-slate-950">
                  RVSCET, Jamshedpur
                </h4>
                <p className="font-cinzel text-xs text-slate-600">
                  Edalbera, Jamshedpur, Jharkhand 831012
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=RVSCET+Jamshedpur"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-emerald-600 text-white font-cinzel font-bold text-xs tracking-wider transition-all duration-300 shadow-md flex-shrink-0"
            >
              <span>Open Map</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Compact 2D Visible Map (Height 200px) */}
          <div className="relative w-full h-[200px] bg-slate-200">
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
