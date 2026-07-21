import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } as const,
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const CARDS = [
  { src: '/images/card1.jpeg', alt: 'Event highlight 1' },
  { src: '/images/card2.jpeg', alt: 'Event highlight 2' },
  { src: '/images/card3.jpeg', alt: 'Event highlight 3' },
  { src: '/images/card4.jpeg', alt: 'Event highlight 4' },
  { src: '/images/card5.jpeg', alt: 'Event highlight 5' },
  { src: '/images/card6.jpeg', alt: 'Event highlight 6' },
  { src: '/images/card7.jpeg', alt: 'Event highlight 7' },
  { src: '/images/card8.jpeg', alt: 'Event highlight 8' },
];

function Card({ card }: { card: typeof CARDS[number] }) {
  return (
    <motion.div
      variants={fadeUp}
      className="relative group overflow-hidden rounded-2xl"
    >
      {/* <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 z-10 pointer-events-none" /> */}
      <div className="absolute inset-0 rounded-2xl z-20 pointer-events-none" />
      <img
      loading='lazy'
        src={card.src}
        alt={card.alt}
        className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
      />
      <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none" />
    </motion.div>
  );
}

const About = () => {
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

      <div className="relative z-10 max-w-6xl mx-auto px-5 py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 md:mb-16"
        >

          <h2 className="text-4xl md:text-6xl font-black tracking-[-0.03em] leading-[1.05] text-white life">
            <span className="block">The Night</span>
            <span className="block mt-1 bg-gradient-to-r from-emerald-300 via-emerald-400 to-green-300 bg-clip-text text-transparent">
              In Frames
            </span>
          </h2>

          <p className="mt-5 max-w-xl mx-auto text-sm md:text-base text-white/40 font-light leading-relaxed plus">
            Every moment curated to leave an impression. From the grand entrance
            to the final curtain call — this is what celebrating Pakistan looks like.
          </p>
        </motion.div>

        {/* Card Grid — 3 + 2 + 3 */}
        <div className="space-y-3 md:space-y-4">
          {/* Row 1 — 3 cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4"
          >
            {CARDS.slice(0, 3).map((card) => (
              <Card key={card.src} card={card} />
            ))}
          </motion.div>

          {/* Row 2 — 2 cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4"
          >
            {CARDS.slice(3, 5).map((card) => (
              <Card key={card.src} card={card} />
            ))}
          </motion.div>

          {/* Row 3 — 3 cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4"
          >
            {CARDS.slice(5, 8).map((card) => (
              <Card key={card.src} card={card} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
