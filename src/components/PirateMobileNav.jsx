import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Compass, Home, Info, Clock, DollarSign, Users, Image as ImageIcon, HelpCircle, PhoneCall, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home',       href: '#home',     icon: Home },
  { label: 'About',      href: '#about',    icon: Info },
  { label: 'Timeline',   href: '#timeline', icon: Clock },
  { label: 'Prize Pool', href: '#prizes',   icon: DollarSign },
  { label: 'Sponsors',   href: '#sponsors', icon: Users },
  { label: 'Gallery',    href: '#gallery',  icon: ImageIcon },
  { label: 'FAQ',        href: '#faq',      icon: HelpCircle },
  { label: 'Contact',    href: '#contact',  icon: PhoneCall },
];

/* ── Clean hamburger / X toggle ── */
export const HamburgerToggle = ({ isOpen, toggle }) => {
  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(line1.current, { y: 7,  rotate: 45,  duration: 0.35, ease: 'back.out(1.5)' });
      gsap.to(line2.current, { opacity: 0, scaleX: 0, duration: 0.2 });
      gsap.to(line3.current, { y: -7, rotate: -45, duration: 0.35, ease: 'back.out(1.5)' });
    } else {
      gsap.to([line1.current, line3.current], { y: 0, rotate: 0, duration: 0.35, ease: 'back.out(1.5)' });
      gsap.to(line2.current, { opacity: 1, scaleX: 1, duration: 0.3, delay: 0.1 });
    }
  }, [isOpen]);

  return (
    <button
      onClick={toggle}
      className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-0 rounded-md border border-white/10 bg-white/5 hover:bg-amber-400/20 hover:border-amber-400/40 transition-all duration-300"
      aria-label="Toggle menu"
    >
      <span ref={line1} className="block w-5 h-[1.5px] bg-white rounded-full origin-center" />
      <span ref={line2} className="block w-5 h-[1.5px] bg-white rounded-full origin-center mt-[5px]" />
      <span ref={line3} className="block w-5 h-[1.5px] bg-white rounded-full origin-center mt-[5px]" />
    </button>
  );
};

/* ── Mobile slide-in drawer ── */
export const PirateMobileMenu = ({ isOpen, close }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 lg:hidden bg-black/70 backdrop-blur-sm"
        style={{
          zIndex: 30,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.4s ease',
        }}
        onClick={close}
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 w-4/5 max-w-sm h-full lg:hidden flex flex-col pt-6 px-6 pb-10 overflow-y-auto"
        style={{
          zIndex: 40,
          background: 'linear-gradient(160deg, #060d18 0%, #0a1628 60%, #0d1220 100%)',
          borderLeft: '1px solid rgba(212,175,55,0.2)',
          boxShadow: '-20px 0 60px rgba(0,0,0,0.8)',
          transform: isOpen ? 'translateX(0)' : 'translateX(110%)',
          visibility: isOpen ? 'visible' : 'hidden',
          transition: 'transform 0.45s cubic-bezier(0.4,0,0.2,1), visibility 0.45s',
        }}
      >
        {/* Header row */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-white/8">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full border border-amber-400/50 bg-amber-400/15 flex items-center justify-center">
              <Compass className="w-4 h-4 text-amber-400" />
            </div>
            <span className="font-cinzel text-sm font-bold text-white tracking-wider">Navigation</span>
          </div>
          <button
            onClick={close}
            className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:border-amber-400/50 hover:bg-amber-400/10 transition-all duration-300"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Nav items */}
        <div className="flex flex-col gap-2 flex-1">
          {NAV_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={close}
                style={{ transitionDelay: isOpen ? `${0.05 * i}s` : '0s' }}
                className={`group relative flex items-center gap-4 px-4 py-3.5 rounded-lg border border-white/5 bg-white/3 hover:bg-amber-400/10 hover:border-amber-400/30 transition-all duration-300 ${
                  isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
                }`}
              >
                <div className="w-8 h-8 rounded-md flex items-center justify-center bg-white/5 group-hover:bg-amber-400/20 transition-colors duration-300">
                  <Icon className="w-4 h-4 text-white/50 group-hover:text-amber-400 transition-colors duration-300" />
                </div>
                <span className="font-cinzel text-sm text-white/70 tracking-widest group-hover:text-white transition-colors duration-300">
                  {item.label}
                </span>
                {/* right arrow indicator */}
                <span className="ml-auto text-white/20 group-hover:text-amber-400 transition-colors duration-300 text-xs">›</span>
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-white/8">
          <a
            href="#register"
            onClick={close}
            className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg font-cinzel text-sm text-slate-950 font-bold tracking-wider transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
          >
            <Compass className="w-4 h-4" />
            Register Now
          </a>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <Compass className="w-4 h-4 text-amber-400/40" />
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </div>
      </div>
    </>
  );
};
