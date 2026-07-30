import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import shipNightImg from "../assets/images/about image left side.jpeg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef   = useRef(null);
  const tagRef       = useRef(null);
  const titleRef     = useRef(null);
  const dividerRef   = useRef(null);
  const imgRef       = useRef(null);
  const para1Ref     = useRef(null);
  const para2Ref     = useRef(null);
  const divLine2Ref  = useRef(null);
  const para3Ref     = useRef(null);
  const para4Ref     = useRef(null);
  const badgesRef    = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = { trigger: sectionRef.current, start: "top 75%" };

      // tag + title
      gsap.fromTo(tagRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", scrollTrigger: trigger }
      );
      gsap.fromTo(titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.1, scrollTrigger: trigger }
      );
      gsap.fromTo(dividerRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.3, scrollTrigger: trigger }
      );

      // image
      gsap.fromTo(imgRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.2, scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } }
      );

      // paragraphs stagger
      gsap.fromTo(
        [para1Ref.current, para2Ref.current, divLine2Ref.current, para3Ref.current, para4Ref.current],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.15, delay: 0.3,
          scrollTrigger: { trigger: sectionRef.current, start: "top 65%" } }
      );

      // badges
      gsap.fromTo(badgesRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.5)", delay: 0.6,
          scrollTrigger: { trigger: sectionRef.current, start: "top 60%" } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full py-24 px-6 sm:px-10 lg:px-16 overflow-hidden"
      style={{ background: "linear-gradient(180deg,#020b18 0%,#030e1f 50%,#020b18 100%)" }}
    >
      {/* ── background grid ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(220,20,60,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(220,20,60,0.4) 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />
      {/* ── radial glow ── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%,rgba(220,20,60,0.1) 0%,transparent 70%)" }}
      />

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* ── Section label + title ── */}
        <div className="mb-16 text-center">
          <p
            ref={tagRef}
            className="font-cinzel text-xs tracking-[0.4em] text-[#dc143c] uppercase mb-3"
          >
            ⚓ Our Story
          </p>
          <h2
            ref={titleRef}
            className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            About <span style={{ color: "#dc143c" }}>HackQubit</span>
          </h2>
          <div
            ref={dividerRef}
            className="mt-5 flex items-center justify-center gap-4"
            style={{ transformOrigin: "center" }}
          >
            <div className="flex-1 max-w-[140px] h-px bg-gradient-to-r from-transparent to-[#dc143c]/60" />
            <div className="w-2 h-2 rounded-full bg-[#dc143c]" />
            <div className="flex-1 max-w-[140px] h-px bg-gradient-to-l from-transparent to-[#dc143c]/60" />
          </div>
        </div>

        {/* ── Main layout ── */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left — image */}
          <div
            ref={imgRef}
            className="w-full lg:w-[42%] flex-shrink-0"
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(220,20,60,0.25)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04) inset",
              }}
            >
              <img
                src={shipNightImg}
                alt="About HackQubit"
                className="w-full h-full object-cover"
                style={{ minHeight: "320px", maxHeight: "520px" }}
              />
              {/* image overlay gradient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom,transparent 40%,rgba(2,11,24,0.7) 100%)",
                }}
              />
              {/* bottom label on image */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg"
                  style={{
                    background: "rgba(220,20,60,0.15)",
                    border: "1px solid rgba(220,20,60,0.3)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-[#dc143c] animate-pulse" />
                  <span className="font-cinzel text-xs text-white/80 tracking-widest uppercase">
                    National Level Hackathon
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div className="flex-1 flex flex-col gap-6">

            {/* Badges row */}
            <div ref={badgesRef} className="flex flex-wrap gap-3">
              {[
                { label: "48 Hours",        color: "#dc143c" },
                { label: "National Level",  color: "#3b82f6" },
                { label: "RVSCET, Jamshedpur", color: "#eab308" },
                { label: "Oct 7–8, 2025",  color: "#22c55e" },
              ].map(({ label, color }) => (
                <span
                  key={label}
                  className="font-cinzel text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
                  style={{
                    background: `${color}18`,
                    border: `1px solid ${color}40`,
                    color: color,
                  }}
                >
                  {label}
                </span>
              ))}
            </div>

            {/* Para 1 */}
            <p
              ref={para1Ref}
              className="font-cinzel text-sm sm:text-base text-white/65 leading-relaxed"
            >
              <strong className="text-[#dc143c] font-bold">Pirates of the Sea</strong> is a
              student-driven initiative dedicated to{" "}
              <strong className="text-white/90 font-semibold">fostering technical excellence and
              innovation</strong> within the college community. The club provides a structured
              platform for students to enhance their programming skills, engage in collaborative
              learning, and apply their knowledge through practical projects.
            </p>

            {/* Para 2 */}
            <p
              ref={para2Ref}
              className="font-cinzel text-sm sm:text-base text-white/65 leading-relaxed"
            >
              With a focus on coding challenges,{" "}
              <strong className="text-white/90 font-semibold">
                technical workshops, hackathons,
              </strong>{" "}
              and knowledge-sharing sessions, we nurture problem-solving abilities and encourage
              members to explore diverse areas of computer science — cultivating creativity,
              discipline, and continuous learning.
            </p>

            {/* divider */}
            <div
              ref={divLine2Ref}
              className="w-full h-px"
              style={{ background: "linear-gradient(90deg,transparent,rgba(220,20,60,0.4),transparent)" }}
            />

            {/* Para 3 */}
            <p
              ref={para3Ref}
              className="font-cinzel text-sm sm:text-base text-white/65 leading-relaxed"
            >
              <strong className="text-[#dc143c] font-bold">Hack Qubit 2.0</strong> is a{" "}
              <strong className="text-white/90 font-semibold">48-hour national-level hackathon</strong>{" "}
              hosted by RVSCET, Jamshedpur — designed to bring together the brightest minds in
              technology, innovation, and creativity. This competition challenges participants to{" "}
              <strong className="text-white/90 font-semibold">Code, Create, and Conquer</strong>.
            </p>

            {/* Para 4 */}
            <p
              ref={para4Ref}
              className="font-cinzel text-sm sm:text-base text-white/65 leading-relaxed"
            >
              This year, the event welcomes students from across{" "}
              <strong className="text-white/90 font-semibold">India</strong> — regardless of
              background or branch.{" "}
              <strong className="text-[#dc143c] font-bold">
                No pre-submissions, no PPTs — just pure innovation.
              </strong>{" "}
              Problem statements are revealed on the spot, testing real-time problem-solving under
              pressure. Teams collaborate, strategize, and push limits to claim the pirate's bounty.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <a
                href="#register"
                className="group relative flex items-center gap-2 px-6 py-3 rounded-lg font-cinzel text-sm text-white tracking-wider overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,20,60,0.5)]"
                style={{
                  background: "linear-gradient(135deg,#dc143c 0%,#9b0e2a 100%)",
                  border: "1px solid rgba(220,20,60,0.5)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10">Register Now</span>
              </a>
              <a
                href="#timeline"
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-cinzel text-sm text-white/70 tracking-wider transition-all duration-300 hover:text-white hover:border-white/30"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              >
                View Timeline →
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
