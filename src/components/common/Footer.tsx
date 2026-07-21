import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } as const,
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Lucky Draw', href: '#events' },
  { label: 'Contact', href: '#contact' },
];

const INFO_LINKS = [
  { label: 'About the Event', href: '#about', soon: false },
  { label: 'Sponsorship', href: '#sponsorship', soon: false },
  { label: 'Presented By', href: '#presented', soon: false },
];

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#020904]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_100%,rgba(16,185,129,0.04),transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 pt-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-10"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="md:col-span-4">
            <h3 className="text-3xl font-black text-white life tracking-tight">
              Youm-e-Azadi
            </h3>
            <p className="text-xs uppercase tracking-wider text-emerald-400/50 font-semibold mt-1 plus">
              August 14, 2025
            </p>
            <p className="mt-4 text-sm text-white/25 leading-relaxed max-w-sm plus">
              Celebrating 79 years of sovereignty. A night of unity, music, and
              history-making moments under one roof.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp} className="md:col-span-3 md:col-start-6">
            <h4 className="text-xs uppercase tracking-wider text-emerald-600 font-bold mb-4 plus">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/35 hover:text-emerald-300/80 transition-colors duration-300 plus"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Info */}
          <motion.div variants={fadeUp} className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-wider text-emerald-600 font-bold mb-4 plus">
              Information
            </h4>
            <ul className="space-y-2.5">
              {INFO_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/35 hover:text-emerald-300/80 transition-colors duration-300 plus inline-flex items-center gap-2"
                  >
                    {link.label}
                    {link.soon && (
                      <span className="text-[9px] uppercase tracking-wider text-emerald-400/40 border border-emerald-500/10 rounded-full px-1.5 py-0.5 leading-none">
                        Soon
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
