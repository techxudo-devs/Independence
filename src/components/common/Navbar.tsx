import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Sponsorship', href: '#sponsorship' },
  { label: 'Presented By', href: '#presented' },
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
            className="inline-block plus font-medium text-[13px] tracking-wide translate-y-0.5"
            initial={false}
            animate={{
              y: hovered ? -2 : 0,
              color: hovered ? 'rgba(167, 243, 208, 1)' : 'rgba(255, 255, 255, 0.5)',
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [mobileOpen]);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#020904]/80 backdrop-blur-xl border-b border-white/[0.04] shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#home" className="relative group shrink-0">
          <span className="text-xl font-black text-white life tracking-tight relative z-10">
            Youm-e-Azadi
          </span>
          {/* <span className="absolute -inset-x-3 -inset-y-1 rounded-lg bg-emerald-500/0 group-hover:bg-emerald-500/[0.06] transition-colors duration-500" /> */}
        </a>

        {/* Nav Items — desktop */}
        <div className="hidden md:flex items-center gap-0.5 relative">
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2.5 group relative px-5 py-2.5 rounded overflow-hidden plus"
        >
          {/* Gradient border */}
          <span className="absolute inset-0 rounded border border-transparent bg-gradient-to-r from-emerald-500/20 via-emerald-400/10 to-green-500/20 group-hover:from-emerald-500/40 group-hover:via-emerald-400/20 group-hover:to-green-500/40 transition-all duration-500 [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [webkit-mask-composite:xor] p-px" />

          {/* Fill */}
          <span className="absolute inset-0 rounded bg-gradient-to-r from-emerald-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Glow */}
          <span className="absolute -inset-1 rounded bg-emerald-500/0 group-hover:bg-emerald-500/[0.08] blur-xl transition-colors duration-500 pointer-events-none" />

          {/* Text */}
          <span className="relative text-xs font-medium text-white/70 group-hover:text-emerald-300 tracking-wide transition-colors duration-300">
            Contact
          </span>

          {/* Arrow */}
          <ArrowRight className="relative w-3.5 h-3.5 text-white/40 group-hover:text-emerald-300 group-hover:translate-x-0.5 transition-all duration-300" />
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 relative z-[60]"
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
        className="md:hidden fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm"
        initial={false}
        animate={mobileOpen ? { opacity: 1, pointerEvents: 'auto' as const } : { opacity: 0, pointerEvents: 'none' as const }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => setMobileOpen(false)}
      />

      {/* Sidebar panel — slides from right */}
      <motion.div
        className="md:hidden fixed top-0 right-0 z-[56] h-full w-[80%] max-w-sm bg-[#030e06]/95 backdrop-blur-2xl border-l border-white/[0.06] shadow-[-8px_0_40px_rgba(0,0,0,0.5)] flex flex-col"
        initial={false}
        animate={mobileOpen ? { x: 0 } : { x: '100%' }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-white/[0.06]">
          <span className="text-lg font-black text-white life tracking-tight">Youm-e-Azadi</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 -mr-2 rounded-lg text-white/50 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav links */}
        <div className="flex flex-col gap-1 px-4 py-6 flex-1">
          {NAV_ITEMS.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="plus text-[15px] font-medium text-white/60 hover:text-emerald-300 hover:bg-emerald-500/[0.06] rounded-lg px-4 py-3 tracking-wide transition-all duration-200"
              initial={false}
              animate={mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.35, delay: mobileOpen ? i * 0.05 + 0.15 : 0, ease: [0.16, 1, 0.3, 1] }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Sidebar footer CTA */}
        <div className="px-4 pb-8">
          <motion.a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg text-sm font-bold tracking-wide text-[#02180b] bg-white hover:bg-neutral-100 transition-all duration-300 plus"
            initial={false}
            animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.35, delay: mobileOpen ? NAV_ITEMS.length * 0.05 + 0.2 : 0, ease: [0.16, 1, 0.3, 1] }}
          >
            Contact
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
