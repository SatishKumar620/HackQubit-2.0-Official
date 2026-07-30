import { useState, useRef, forwardRef } from "react";
import { Anchor, Sun, Moon, Compass } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { NAV_LINKS, SITE_NAME } from "../constants";
import { useScrollPosition } from "../hooks";
import { gsap } from "gsap";
import { PirateMobileMenu, HamburgerToggle } from "./PirateMobileNav";

const Navbar = forwardRef((props, ref) => {
  const isScrolled = useScrollPosition(50);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const linkRefs = useRef([]);

  const handleLinkHover = (index) => {
    gsap.to(linkRefs.current[index], {
      y: -2,
      color: "#D4AF37",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLinkLeave = (index) => {
    gsap.to(linkRefs.current[index], {
      y: 0,
      color: "",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <>
      <nav
        ref={ref}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          isScrolled
            ? "backdrop-blur-2xl bg-[#0a0f1d]/90 shadow-[0_4px_40px_rgba(0,0,0,0.6)] border-b border-amber-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-20 lg:h-24">

            {/* ── Logo ── */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-amber-500/40 bg-amber-500/10 transition-all duration-500 group-hover:border-amber-400 group-hover:bg-amber-500/20 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                <Anchor
                  className="w-5 h-5 text-amber-400 transition-transform duration-500 group-hover:rotate-12"
                  strokeWidth={2}
                />
                {/* pulse ring */}
                <span className="absolute inset-0 rounded-full border border-amber-400/20 scale-100 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-cinzel text-lg font-bold text-white tracking-wider drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
                  {SITE_NAME.split(" ")[0]}
                </span>
                <span className="font-cinzel text-[9px] text-amber-400/80 tracking-[0.35em] uppercase">
                  {SITE_NAME.split(" ").slice(1).join(" ")}
                </span>
              </div>
            </a>

            {/* ── Center Nav Links (Desktop) ── */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link, i) => (
                <a
                  key={link.label}
                  ref={(el) => (linkRefs.current[i] = el)}
                  href={link.href}
                  onMouseEnter={() => handleLinkHover(i)}
                  onMouseLeave={() => handleLinkLeave(i)}
                  className="relative px-5 py-2 font-cinzel text-sm text-white/80 tracking-wide transition-colors duration-300 group"
                >
                  {link.label}
                  {/* underline glow */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] rounded-full bg-gradient-to-r from-transparent via-amber-400 to-transparent group-hover:w-4/5 transition-all duration-500" />
                </a>
              ))}
            </div>

            {/* ── Right Controls (Desktop) ── */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-full border border-white/10 hover:border-amber-400/50 hover:bg-amber-400/10 text-white/60 hover:text-white transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>

              {/* CTA — Register Now */}
              <a
                href="#register"
                className="relative group flex items-center gap-2.5 px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded font-cinzel text-sm text-slate-950 font-bold tracking-wider transition-all duration-400 hover:from-amber-400 hover:to-amber-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] overflow-hidden"
              >
                {/* shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Compass className="w-4 h-4 relative z-10 transition-transform duration-500 group-hover:rotate-45" />
                <span className="relative z-10">Register Now</span>
              </a>
            </div>

            {/* ── Mobile Hamburger ── */}
            <HamburgerToggle isOpen={isMobileOpen} toggle={() => setIsMobileOpen(!isMobileOpen)} />
          </div>
        </div>
      </nav>

      {/* Mobile Slide-in Menu */}
      <PirateMobileMenu isOpen={isMobileOpen} close={() => setIsMobileOpen(false)} />
    </>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
