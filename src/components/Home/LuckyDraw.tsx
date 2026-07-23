import { motion } from 'framer-motion';

const DETAILS = [
  {
    number: '50',
    label: 'Premium Suits',
    description: 'Every winner takes home a tailored premium suit — no compromise on quality.',
  },
  {
    number: '1',
    label: 'Winner Per Minute',
    description: 'One name drawn every 60 seconds. Pure anticipation, pure thrill.',
  },
  {
    number: '4',
    label: 'Hours Non-Stop',
    description: 'Four uninterrupted hours of live draws streamed for everyone to witness.',
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } as const,
};

const LuckyDraw = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Base deep gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020904] via-[#040d06] to-[#031a0b]" />

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

      <div className="relative z-10 max-w-6xl mx-auto px-5 pt-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 md:mb-10"
        >

          <h1 className="text-4xl md:text-6xl font-black leading-[1.05] text-white life">
            <span className="block">240 Lucky Winners</span>
            <span className="block mt-1 bg-gradient-to-r from-emerald-300 via-emerald-400 to-green-300 bg-clip-text text-transparent">
              One Suit Each
            </span>
          </h1>

          <p className="mt-5 max-w-lg mx-auto text-sm md:text-base text-white/40 font-light leading-relaxed plus">
            A history-making draw — every single minute for four hours straight.
            240 premium suits, 240 winners. No tricks, just pure celebration.
          </p>
        </motion.div>

        {/* Key Numbers */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 md:mb-10"
        >
          {DETAILS.map((detail) => (
            <motion.div
              key={detail.label}
              variants={fadeUp}
              className="relative rounded-2xl border border-white/[0.04] bg-white/[0.015] backdrop-blur-sm px-6 py-7 text-center group hover:border-emerald-500/15 transition-colors duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <p className="text-4xl md:text-5xl font-black text-white life relative">{detail.number}</p>
              <p className="text-xs uppercase tracking-wider text-emerald-400/70 font-semibold mt-2 plus relative">
                {detail.label}
              </p>
              <p className="mt-3 text-[13px] text-white/30 leading-normal plus relative">
                {detail.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* How It Works + Fair & Transparent */}
        {/* <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {RULES.map((section) => (
            <motion.div
              key={section.title}
              variants={fadeUp}
              className="rounded-2xl border border-white/[0.04] bg-white/[0.015] px-6 py-7"
            >
              <h3 className="text-base font-bold text-white/70 tracking-wide life mb-4 plus">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-500/60 shrink-0" />
                    <span className="text-[13px] text-white/30 leading-normal plus">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default LuckyDraw;
