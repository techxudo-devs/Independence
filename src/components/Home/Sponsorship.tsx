import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } as const,
};

const Sponsorship = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Base deep gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#031a0b] via-[#040d06] to-[#031a0b]" />

      {/* Ambient emerald glow — top center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(16,185,129,0.10),transparent_70%)] pointer-events-none" />

      {/* Secondary warm glow — left side */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_10%_30%,rgba(5,150,105,0.06),transparent_70%)] pointer-events-none" />

      {/* Tertiary cool glow — right side */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_90%_60%,rgba(16,185,129,0.04),transparent_60%)] pointer-events-none" />

      {/* Bottom ambient wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_30%_at_50%_100%,rgba(5,150,105,0.07),transparent_70%)] pointer-events-none" />

      {/* Top fade line from previous section */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent" />

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/15 to-transparent" />

      {/* Subtle grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat', backgroundSize: '128px 128px' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-5 py-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="flex flex-col items-center text-center"
        >

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-black leading-[1.05] text-white life"
          >
            <span className="block">Presented &amp; Secured By</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-md text-base text-white/30 font-light leading-relaxed plus"
          >
            Ensuring a safe, seamless, and world-class experience for every
            guest, performer, and participant at the event.
          </motion.p>

          {/* Logo Card */}
          <motion.div
            variants={fadeUp}
            className="mt-10 relative group"
          >
            {/* <div className="absolute -inset-8 rounded-3xl bg-emerald-500/[0.03] blur-2xl group-hover:bg-emerald-500/[0.06] transition-colors duration-700 pointer-events-none" /> */}
            <div className="relative">
              <img
                src="/logos/mbk.png"
                alt="Security Partner Logo"
                className="h-28 md:h-40 w-auto object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsorship;
