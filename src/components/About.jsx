import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, ArrowUpRight, Compass, Sparkles, Scroll, Anchor, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ── Left Side Growing Vines & Trees (Parchment Gold/Bronze Tones matching Timeline) ──
const LeftForestSide = () => (
  <svg
    className="absolute left-0 top-0 h-full w-44 sm:w-60 lg:w-80 pointer-events-none z-10 opacity-75"
    viewBox="0 0 320 1200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    {/* Pine/Spire Trees Silhouette (Background Layer) */}
    <g className="tree-bg-group" opacity="0.35">
      <path d="M 40 300 L 0 450 L 25 450 L 0 550 L 35 550 L 10 650 L 60 650 L 40 300 Z" fill="#8B6B3F" />
      <path d="M 90 600 L 40 730 L 65 730 L 45 830 L 75 830 L 50 930 L 110 930 L 90 600 Z" fill="#7A4E2D" />
    </g>

    {/* Main Vines & Tendrils (Warm Gold & Bronze Stroke) */}
    <path
      className="forest-vine-1"
      d="M 0 0 C 90 200, 180 320, 80 500 C 0 650, 160 820, 50 1020 C 10 1100, 40 1200, 0 1200"
      stroke="#8B6B3F"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      className="forest-vine-2"
      d="M 0 80 C 140 220, 50 380, 150 600 C 210 750, 40 920, 0 1100"
      stroke="#D4AF37"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      className="forest-vine-3"
      d="M 80 500 Q 210 480, 250 540"
      stroke="#B89228"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Leaves & Oak Foliage */}
    <g className="forest-leaf-group">
      <path d="M 80 500 C 110 470, 150 480, 160 510 C 130 530, 100 520, 80 500 Z" fill="#8B6B3F" />
      <path d="M 250 540 C 280 520, 300 540, 290 565 C 265 570, 245 555, 250 540 Z" fill="#D4AF37" />
      <path d="M 150 600 C 190 570, 210 590, 205 620 C 170 630, 155 615, 150 600 Z" fill="#A67C00" />
      <path d="M 50 1020 C 80 990, 120 1000, 130 1030 C 100 1050, 70 1040, 50 1020 Z" fill="#D4AF37" />
    </g>
  </svg>
);

// ── Right Side Growing Vines & Trees (Parchment Gold/Bronze Tones) ──
const RightForestSide = () => (
  <svg
    className="absolute right-0 top-0 h-full w-44 sm:w-60 lg:w-80 pointer-events-none z-10 opacity-75"
    viewBox="0 0 320 1200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    {/* Pine/Spire Trees Silhouette (Background Layer) */}
    <g className="tree-bg-group" opacity="0.35">
      <path d="M 280 250 L 320 400 L 295 400 L 320 500 L 285 500 L 310 600 L 260 600 L 280 250 Z" fill="#8B6B3F" />
      <path d="M 230 550 L 280 680 L 255 680 L 275 780 L 245 780 L 270 880 L 210 880 L 230 550 Z" fill="#7A4E2D" />
    </g>

    {/* Main Vines & Tendrils */}
    <path
      className="forest-vine-1"
      d="M 320 0 C 230 200, 140 320, 240 500 C 320 650, 160 820, 270 1020 C 310 1100, 280 1200, 320 1200"
      stroke="#8B6B3F"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      className="forest-vine-2"
      d="M 320 80 C 180 220, 270 380, 170 600 C 110 750, 280 920, 320 1100"
      stroke="#D4AF37"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      className="forest-vine-3"
      d="M 240 500 Q 110 480, 70 540"
      stroke="#B89228"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Leaves & Oak Foliage */}
    <g className="forest-leaf-group">
      <path d="M 240 500 C 210 470, 170 480, 160 510 C 190 530, 220 520, 240 500 Z" fill="#8B6B3F" />
      <path d="M 70 540 C 40 520, 20 540, 30 565 C 55 570, 75 555, 70 540 Z" fill="#D4AF37" />
      <path d="M 170 600 C 130 570, 110 590, 115 620 C 150 630, 165 615, 170 600 Z" fill="#A67C00" />
      <path d="M 270 1020 C 240 990, 200 1000, 190 1030 C 220 1050, 250 1040, 270 1020 Z" fill="#D4AF37" />
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
      // 1. Forest Vines Growth Animation (Scrubbed with Scroll)
      const vinePaths = gsap.utils.toArray(".forest-vine-1, .forest-vine-2, .forest-vine-3");
      vinePaths.forEach((path) => {
        const length = path.getTotalLength ? path.getTotalLength() : 900;
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 30%",
            scrub: 1.2,
          },
        });
      });

      // 2. Leaf Growth Scaling Animation
      gsap.fromTo(
        ".forest-leaf-group path",
        { scale: 0, transformOrigin: "center center" },
        {
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 55%",
          },
        }
      );

      // 3. Tree Silhouettes Push-in Animation
      gsap.fromTo(
        ".tree-bg-group",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 0.35,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );

      // 4. Content Elements Fade-in
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
      {/* Growing Forest & Vines SVG (Left & Right Sides) */}
      <LeftForestSide />
      <RightForestSide />

      {/* Subtle Warm Parchment Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-[1000px] mx-auto relative z-20">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-600/30 bg-amber-50/80 mb-4 shadow-sm">
            <Compass className="w-4 h-4 text-amber-700" />
            <span className="font-cinzel text-xs tracking-[0.25em] text-amber-800 uppercase font-bold">
              The Grand Expedition
            </span>
          </div>

          <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-950 leading-tight">
            About <span className="text-amber-600">HackQubit 2.0</span>
          </h2>
          <p className="mt-4 font-cinzel text-slate-600 text-base max-w-[580px] mx-auto leading-relaxed">
            Hosted at <strong className="text-slate-950 font-bold">RVSCET, Jamshedpur</strong>. 
            A 24-hour national challenge empowering developers to Code, Create & Conquer.
          </p>
        </div>

        {/* Glassmorphism Main Overview Card */}
        <div
          ref={mainCardRef}
          className="relative p-8 sm:p-12 rounded-3xl mb-12 border border-amber-600/20 bg-white/75 backdrop-blur-xl shadow-[0_20px_50px_rgba(139,107,63,0.08)]"
        >
          {/* Top Decorative Border Highlight */}
          <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-800 font-cinzel text-sm sm:text-base leading-relaxed">
            {/* Column 1: Pirates of the Sea */}
            <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-500/20 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-700 mb-4">
                <Anchor className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-950 mb-2">
                Pirates of the Sea
              </h3>
              <p className="text-slate-650">
                A student-led technical movement at RVSCET. We foster competitive coding, collaborative learning workshops, and hands-on software development.
              </p>
            </div>

            {/* Column 2: 24-Hour Format */}
            <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-500/20 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-700 mb-4">
                <Scroll className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-950 mb-2">
                24-Hour On-Spot Hack
              </h3>
              <p className="text-slate-650">
                No pre-built templates or pre-submitted PPTs. Problem statements are unlocked live on spot — testing pure innovation under time pressure.
              </p>
            </div>
          </div>
        </div>

        {/* 2D Visible Embedded Google Map Venue Glassmorphism Card */}
        <div
          ref={mapCardRef}
          className="relative rounded-3xl overflow-hidden border border-amber-600/30 bg-white/80 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
        >
          {/* Header Strip */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 sm:p-8 border-b border-amber-600/15 bg-amber-50/60">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center bg-amber-500 text-slate-950 font-bold shadow-md">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="font-cinzel text-xs text-amber-700 tracking-widest uppercase font-bold">
                  Official Event Location
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-slate-950 mt-0.5">
                  RVSCET, Jamshedpur
                </h3>
                <p className="font-cinzel text-xs text-slate-600 mt-1">
                  RVS College of Engineering & Technology, Edalbera, Jamshedpur, Jharkhand 831012
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=RVSCET+Jamshedpur"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-950 hover:bg-amber-600 text-white font-cinzel font-bold text-xs tracking-wider transition-all duration-300 shadow-md flex-shrink-0"
            >
              <span>Open Map App</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* 2D Interactive Visible Map Frame */}
          <div className="relative w-full h-[320px] bg-slate-200">
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
