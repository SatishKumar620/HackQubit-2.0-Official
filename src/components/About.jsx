import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, ExternalLink, Compass, ArrowUpRight, Sparkles, Leaf } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

gsap.registerPlugin(ScrollTrigger);

// ── Left Side Growing Vines & Foliage SVG Component ────────────────────
const LeftGrowingVines = () => (
  <svg
    className="absolute left-0 top-0 h-full w-40 sm:w-56 lg:w-72 pointer-events-none z-10 opacity-80"
    viewBox="0 0 300 1000"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    {/* Main Stem 1 */}
    <path
      className="vine-path-1"
      d="M0 0 C 80 150, 150 250, 60 400 C -10 520, 140 680, 40 850 C 0 920, 30 1000, 0 1000"
      stroke="#059669"
      strokeWidth="4"
      strokeLinecap="round"
    />
    {/* Main Stem 2 (Lighter Green) */}
    <path
      className="vine-path-2"
      d="M0 50 C 120 180, 40 320, 130 500 C 180 620, 30 780, 0 900"
      stroke="#10b981"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Branching Tendrils */}
    <path
      className="vine-path-3"
      d="M60 400 Q 180 380, 220 440"
      stroke="#047857"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      className="vine-path-3"
      d="M130 500 Q 220 520, 250 580"
      stroke="#10b981"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Leaves (Left Side) */}
    <g className="leaf-group">
      <path d="M60 400 C 90 370, 130 380, 140 410 C 110 430, 80 420, 60 400 Z" fill="#059669" />
      <path d="M220 440 C 250 420, 270 440, 260 465 C 235 470, 215 455, 220 440 Z" fill="#10b981" />
      <path d="M130 500 C 170 470, 190 490, 185 520 C 150 530, 135 515, 130 500 Z" fill="#047857" />
      <path d="M250 580 C 280 560, 295 585, 280 605 C 255 610, 240 595, 250 580 Z" fill="#10b981" />
      <path d="M40 850 C 70 820, 110 830, 120 860 C 90 880, 60 870, 40 850 Z" fill="#059669" />
    </g>
  </svg>
);

// ── Right Side Growing Vines & Foliage SVG Component ───────────────────
const RightGrowingVines = () => (
  <svg
    className="absolute right-0 top-0 h-full w-40 sm:w-56 lg:w-72 pointer-events-none z-10 opacity-80"
    viewBox="0 0 300 1000"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    {/* Main Stem 1 */}
    <path
      className="vine-path-1"
      d="M300 0 C 220 150, 150 250, 240 400 C 310 520, 160 680, 260 850 C 300 920, 270 1000, 300 1000"
      stroke="#059669"
      strokeWidth="4"
      strokeLinecap="round"
    />
    {/* Main Stem 2 */}
    <path
      className="vine-path-2"
      d="M300 50 C 180 180, 260 320, 170 500 C 120 620, 270 780, 300 900"
      stroke="#10b981"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Branching Tendrils */}
    <path
      className="vine-path-3"
      d="M240 400 Q 120 380, 80 440"
      stroke="#047857"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      className="vine-path-3"
      d="M170 500 Q 80 520, 50 580"
      stroke="#10b981"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Leaves (Right Side) */}
    <g className="leaf-group">
      <path d="M240 400 C 210 370, 170 380, 160 410 C 190 430, 220 420, 240 400 Z" fill="#059669" />
      <path d="M80 440 C 50 420, 30 440, 40 465 C 65 470, 85 455, 80 440 Z" fill="#10b981" />
      <path d="M170 500 C 130 470, 110 490, 115 520 C 150 530, 165 515, 170 500 Z" fill="#047857" />
      <path d="M50 580 C 20 560, 5 585, 20 605 C 45 610, 60 595, 50 580 Z" fill="#10b981" />
      <path d="M260 850 C 230 820, 190 830, 180 860 C 210 880, 240 870, 260 850 Z" fill="#059669" />
    </g>
  </svg>
);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRef = useRef(null);
  const venueRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Vine Growth Animation on Scroll
      const vinePaths = gsap.utils.toArray(".vine-path-1, .vine-path-2, .vine-path-3");
      vinePaths.forEach((path) => {
        const length = path.getTotalLength ? path.getTotalLength() : 800;
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 40%",
            scrub: 1.2,
          },
        });
      });

      // 2. Leaf Unfurling / Scaling Animation
      gsap.fromTo(
        ".leaf-group path",
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

      // 3. Header & Card Animations
      gsap.fromTo(
        titleRef.current,
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
        cardRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: cardRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        venueRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: venueRef.current, start: "top 85%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full py-24 px-6 sm:px-10 lg:px-16 overflow-hidden bg-white text-slate-900"
    >
      {/* Growing Vines & Botanical Foliage (Left & Right Sides) */}
      <LeftGrowingVines />
      <RightGrowingVines />

      {/* Soft Canopy Sunlight / Forest Aura Background Effect */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1000px] mx-auto relative z-20">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-50/80 mb-4">
            <Leaf className="w-4 h-4 text-emerald-600" />
            <span className="font-cinzel text-xs tracking-[0.25em] text-emerald-700 uppercase font-bold">
              The Botanical Voyage
            </span>
          </div>

          <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            About <span className="text-emerald-600">HackQubit 2.0</span>
          </h2>
          <p className="mt-4 font-cinzel text-slate-600 text-base max-w-[580px] mx-auto leading-relaxed">
            Hosted by <strong className="text-slate-900 font-bold">RVSCET, Jamshedpur</strong>. 
            Empowering India's finest minds to Code, Create & Conquer.
          </p>
        </div>

        {/* Streamlined Main Overview Card */}
        <div
          ref={cardRef}
          className="relative p-8 sm:p-12 rounded-3xl mb-12 bg-white/90 border border-slate-200/80 shadow-[0_20px_50px_rgba(5,150,105,0.08)] backdrop-blur-xl"
        >
          {/* Subtle Accent Corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none" />

          <div className="space-y-6 text-slate-700 font-cinzel text-base leading-relaxed">
            <p>
              <strong className="text-emerald-700 font-bold text-lg block mb-1">
                🏴‍☠️ Driven by Pirates of the Sea
              </strong>
              A student-led initiative at RVSCET dedicated to fostering technical excellence. We cultivate an environment of continuous learning, competitive programming, and practical innovation.
            </p>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <p>
              <strong className="text-slate-900 font-bold text-lg block mb-1">
                ⚡ 24-Hour Non-Stop Hackathon
              </strong>
              HackQubit 2.0 is a 24-hour national competition where problem statements are revealed live on the spot. No pre-submitted slides or prior code — just raw innovation and real-time execution.
            </p>
          </div>
        </div>

        {/* Venue & Location Highlight Card with Direct Maps Link */}
        <div
          ref={venueRef}
          className="p-8 rounded-3xl bg-gradient-to-br from-emerald-900 to-slate-900 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center bg-emerald-500 text-slate-950 font-bold shadow-lg">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="font-cinzel text-xs text-emerald-400 tracking-widest uppercase font-bold">
                Official Venue
              </span>
              <h3 className="font-cinzel text-2xl font-bold text-white mt-1">
                RVSCET, Jamshedpur
              </h3>
              <p className="font-cinzel text-sm text-slate-300 mt-1">
                RVS College of Engineering and Technology, Edalbera, Jamshedpur, Jharkhand 831012
              </p>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=RVSCET+Jamshedpur"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-cinzel font-bold text-sm tracking-wider transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 flex-shrink-0"
          >
            <span>Open Google Maps</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
