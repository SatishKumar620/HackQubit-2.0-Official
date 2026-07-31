import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, ArrowUpRight, Compass, Zap, Clock, Calendar, Anchor } from "lucide-react";
import youngPiratesCrewImg from "../assets/images/young_anime_pirates_crew_transparent.png";

gsap.registerPlugin(ScrollTrigger);

/* ── PURE SVG ANIMATED PIRATE COMPASS CLOCK (NO IMAGE FILE) ── */
const SVGPirateClock = () => (
  <svg
    viewBox="0 0 200 200"
    className="w-24 h-24 sm:w-32 sm:h-32 drop-shadow-[0_10px_20px_rgba(180,120,20,0.35)]"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="goldDialGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef3c7" />
        <stop offset="50%" stopColor="#fde047" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
      <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#b45309" />
        <stop offset="50%" stopColor="#78350f" />
        <stop offset="100%" stopColor="#451a03" />
      </linearGradient>
    </defs>

    {/* Outer Pirate Wheel Ring */}
    <circle cx="100" cy="100" r="92" fill="url(#ringGrad)" stroke="#f59e0b" strokeWidth="3" />
    <circle cx="100" cy="100" r="82" fill="#fffbebe6" stroke="#b45309" strokeWidth="2" />

    {/* Wheel Handles */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <line
        key={angle}
        x1="100"
        y1="100"
        x2={100 + 96 * Math.cos((angle * Math.PI) / 180)}
        y2={100 + 96 * Math.sin((angle * Math.PI) / 180)}
        stroke="#78350f"
        strokeWidth="4"
        strokeLinecap="round"
      />
    ))}

    {/* Clock Dial Face */}
    <circle cx="100" cy="100" r="72" fill="url(#goldDialGrad)" stroke="#78350f" strokeWidth="2" />
    <circle cx="100" cy="100" r="68" fill="none" stroke="#b45309" strokeWidth="1" strokeDasharray="3 3" />

    {/* Compass Rose Star / Ticks */}
    <path d="M 100 35 L 104 94 L 100 100 L 96 94 Z" fill="#78350f" />
    <path d="M 100 165 L 104 106 L 100 100 L 96 106 Z" fill="#b45309" />
    <path d="M 35 100 L 94 96 L 100 100 L 94 104 Z" fill="#78350f" />
    <path d="M 165 100 L 106 96 L 100 100 L 106 104 Z" fill="#b45309" />

    {/* Roman Numerals */}
    <text x="100" y="48" textAnchor="middle" fontSize="11" fontWeight="900" fill="#451a03" fontFamily="serif">XII</text>
    <text x="156" y="104" textAnchor="middle" fontSize="11" fontWeight="900" fill="#451a03" fontFamily="serif">III</text>
    <text x="100" y="160" textAnchor="middle" fontSize="11" fontWeight="900" fill="#451a03" fontFamily="serif">VI</text>
    <text x="44" y="104" textAnchor="middle" fontSize="11" fontWeight="900" fill="#451a03" fontFamily="serif">IX</text>

    {/* Hour Hand (Slow rotation) */}
    <g className="origin-center animate-[spin_60s_linear_infinite]">
      <path d="M 100 100 L 100 55" stroke="#451a03" strokeWidth="4" strokeLinecap="round" />
      <polygon points="100,50 96,58 104,58" fill="#451a03" />
    </g>

    {/* Minute Hand (Faster rotation) */}
    <g className="origin-center animate-[spin_10s_linear_infinite]">
      <path d="M 100 100 L 100 42" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" />
      <polygon points="100,36 97,44 103,44" fill="#b45309" />
    </g>

    {/* Center Pin */}
    <circle cx="100" cy="100" r="5" fill="#78350f" stroke="#fef3c7" strokeWidth="1.5" />
  </svg>
);

/* ── LIVE COUNTDOWN HOOK TO OCTOBER 7, 2026 ── */
const useCountdown = (targetDate) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
};

/* ── COUNTDOWN BANNER COMPONENT ── */
const EventCountdownBanner = () => {
  // Target Date: October 7, 2026 09:00:00 IST
  const { days, hours, minutes, seconds } = useCountdown("2026-10-07T09:00:00");

  const units = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <div className="relative rounded-3xl border-2 border-amber-900/30 bg-white/95 backdrop-blur-xl p-6 sm:p-8 shadow-2xl mb-16 max-w-4xl mx-auto overflow-hidden text-amber-950">
      {/* Amber highlight bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
        
        {/* Left: Pure SVG Animated Clock */}
        <div className="flex flex-col items-center justify-center flex-shrink-0">
          <SVGPirateClock />
          <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 font-cinzel text-[10px] font-black uppercase tracking-wider">
            <Calendar className="w-3 h-3 text-amber-800" />
            <span>Oct 7 - 8, 2026</span>
          </div>
        </div>

        {/* Center & Right: Title + Live Countdown Cards */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-800/30 text-amber-950 font-cinzel font-black text-xs mb-2">
            <Clock className="w-3.5 h-3.5 text-amber-800 animate-pulse" />
            <span>Countdown To Kickoff</span>
          </div>

          <h3 className="font-cinzel text-2xl sm:text-3xl font-black text-amber-950 leading-snug">
            Hackathon Voyage Starts On <span className="text-amber-800">October 7th</span>
          </h3>
          <p className="font-cinzel text-xs sm:text-sm font-bold text-amber-900 mt-1 mb-5">
            RVSCET Jamshedpur • 24 Hours of Non-Stop Coding &amp; Innovation
          </p>

          {/* Countdown Digit Cards */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto md:mx-0">
            {units.map((unit) => (
              <div
                key={unit.label}
                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-gradient-to-b from-amber-50 to-amber-100/90 border border-amber-400/50 shadow-md"
              >
                <span className="font-cinzel text-2xl sm:text-3xl font-black text-amber-950 tracking-tight">
                  {String(unit.value).padStart(2, "0")}
                </span>
                <span className="font-cinzel text-[9px] sm:text-[10px] font-extrabold text-amber-800 uppercase tracking-widest mt-0.5">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

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
        <div ref={headerRef} className="text-center mb-12">
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

        {/* ── LIVE COUNTDOWN BANNER (OCTOBER 7-8) WITH PURE SVG CLOCK ── */}
        <EventCountdownBanner />

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
