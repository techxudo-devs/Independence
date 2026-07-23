import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Events', href: '#about' },
  { label: 'Event Schedule', href: '#schedule' },
  { label: 'Sponsors', href: '#sponsorship' },
  { label: 'Presented By', href: '#presented' },
  { label: 'Contact', href: '#contact' },
];

function NavItem({ label, href }: { label: string; href: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative px-3.5 py-2 group"
    >
      {/* Background glow pill */}
      <motion.span
        className="absolute inset-0 rounded-md bg-emerald-500/[0.07] border border-emerald-500/10"
        initial={false}
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.92 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Text with letter stagger */}
      <span className="relative flex overflow-hidden">
        {label.split('').map((char, i) => (
          <motion.span
            key={i}
            className="inline-block plus text-[13px] tracking-wide translate-y-0.5"
            initial={false}
            animate={{
              y: hovered ? -2 : 0,
              color: hovered ? '#f0c252' : 'rgba(255, 255, 255, 0.8)',
            }}
            transition={{
              duration: 0.25,
              delay: hovered ? i * 0.02 : 0,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </span>
    </a>
  );
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // FIX 1: Set Dark Background on Body & HTML to eliminate white scroll flicker
  useEffect(() => {
    document.documentElement.style.backgroundColor = '#020b14';
    document.body.style.backgroundColor = '#020b14';
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY ? -parseInt(scrollY) : 0);
    }
  }, [mobileOpen]);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 inset-x-0 z-50 bg-[#020b14] transition-colors duration-300 ${
        scrolled
          ? 'bg-[#020904]/95 border-b border-white/[0.06] shadow-sm'
          : 'bg-gradient-to-r from-[#003320] via-[#02182b] to-[#0c1e3a]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Styled Texts */}
        <a href="#home" className="flex items-center gap-2 shrink-0 group">
          <img
            loading="lazy"
            src="/images/federalLogo.png"
            alt="Federation of Pakistan Australia Logo"
            className="h-16 w-16 md:h-18 md:w-18 rounded-full object-contain"
          />
          <div className="flex flex-col text-left">
            <span className="text-[10px] md:text-xs tracking-wide text-[#dfb142] uppercase leading-none plus">
              Federation Of
            </span>
            <span className="text-sm md:text-base font-bold tracking-wide text-white uppercase mt-0.5 leading-tight life">
              Pakistan Australia
            </span>
          </div>
        </a>

        {/* Nav Items — Desktop */}
        <div className="hidden lg:flex items-center gap-0.5 relative">
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </div>

        {/* CTA Register Button — Gold Capsule Pill */}
        <a
          href="#register"
          className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#edd382] via-[#f0c252] to-[#e1ad31] hover:brightness-105 transition-all duration-300 shadow-md shadow-yellow-500/10 plus hover:scale-98"
        >
          <span className="text-xs tracking-wide plus font-medium text-neutral-900 uppercase">
            Register Free
          </span>
          <ArrowRight className="w-4 h-4 text-neutral-900 stroke-[2.5]" />
        </a>

        {/* Mobile menu button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 relative z-[60]"
          aria-label="Menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <motion.span
            className="w-5 h-[1.5px] bg-white/60 rounded-full block"
            animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.span
            className="w-4 h-[1.5px] bg-white/40 rounded-full block"
            animate={mobileOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="w-5 h-[1.5px] bg-white/60 rounded-full block"
            animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
        </button>
      </div>

      {/* Backdrop */}
      <motion.div
        className="lg:hidden fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm"
        initial={false}
        animate={mobileOpen ? { opacity: 1, pointerEvents: 'auto' as const } : { opacity: 0, pointerEvents: 'none' as const }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => setMobileOpen(false)}
      />

      {/* Sidebar panel — slides from right */}
      <motion.div
        className="lg:hidden fixed top-0 right-0 z-[56] h-full w-[80%] max-w-sm bg-[#030e06]/95 backdrop-blur-2xl border-l border-white/[0.06] shadow-[-8px_0_40px_rgba(0,0,0,0.5)] flex flex-col"
        initial={false}
        animate={mobileOpen ? { x: 0 } : { x: '100%' }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <img
              src="/images/federalLogo.png"
              alt="Logo"
              className="h-9 w-9 rounded-full object-contain"
            />
            <span className="text-xs font-extrabold tracking-wide text-white uppercase life">
              Pakistan Australia
            </span>
          </div>
          {/* <button
            onClick={() => setMobileOpen(false)}
            className="p-2 -mr-2 rounded-lg text-white/50 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button> */}
        </div>

        {/* Nav links */}
        <div className="flex flex-col gap-1 px-4 py-6 flex-1 overflow-y-auto">
          {NAV_ITEMS.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="plus text-[15px] font-medium text-white/60 hover:text-[#dfb142] hover:bg-white/[0.04] rounded-lg px-4 py-3 tracking-wide transition-all duration-200"
              initial={false}
              animate={mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.35, delay: mobileOpen ? i * 0.05 + 0.15 : 0, ease: [0.16, 1, 0.3, 1] }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Sidebar Register CTA */}
        <div className="px-4 pb-8">
          <motion.a
          href="#contact"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-xs font-black tracking-wide text-neutral-900 bg-gradient-to-r from-[#edd382] via-[#f0c252] to-[#e1ad31] hover:brightness-105 transition-all duration-300 plus"
            initial={false}
            animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.35, delay: mobileOpen ? NAV_ITEMS.length * 0.05 + 0.2 : 0, ease: [0.16, 1, 0.3, 1] }}
          >
            REGISTER FREE
            <ArrowRight className="w-4 h-4 text-neutral-900" />
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;