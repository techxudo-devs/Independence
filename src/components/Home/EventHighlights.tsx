import { motion } from 'framer-motion';
import {
  Gift,
  Clock,
  Flame,
  Smile,
  Palette,
  Music,
  Sparkles,
  Star,
  Store,
} from 'lucide-react';

const HIGHLIGHTS = [
  {
    id: 1,
    title: '240+ Exhibition Stalls',
    description: 'Explore amazing products & services',
    icon: Store,
    accent: '#34d399',
    cardBg: 'from-[#021a0e]/90 to-[#012d18]/80',
    borderHover: 'hover:border-emerald-400/30',
  },
  {
    id: 2,
    title: 'History Making Lucky Draw',
    description: 'One lucky winner every minute!',
    icon: Gift,
    accent: '#f472b6',
    cardBg: 'from-[#1a0212]/90 to-[#2d0120]/80',
    borderHover: 'hover:border-pink-400/30',
  },
  {
    id: 3,
    title: 'Every Minute a Draw',
    description: 'For 4 continuous exciting hours',
    icon: Clock,
    accent: '#60a5fa',
    cardBg: 'from-[#020d1a]/90 to-[#011a30]/80',
    borderHover: 'hover:border-blue-400/30',
  },
  {
    id: 4,
    title: 'Desi Pakistani BBQ',
    description: 'Delicious food & traditional flavors',
    icon: Flame,
    accent: '#fb923c',
    cardBg: 'from-[#1a0d02]/90 to-[#2d1501]/80',
    borderHover: 'hover:border-orange-400/30',
  },
  {
    id: 5,
    title: 'Kids Fun Zone',
    description: 'Fun rides, games & activities',
    icon: Smile,
    accent: '#fbbf24',
    cardBg: 'from-[#1a1602]/90 to-[#2d2201]/80',
    borderHover: 'hover:border-amber-400/30',
  },
  {
    id: 6,
    title: 'Face Painting',
    description: 'Creative face painting for kids & adults',
    icon: Palette,
    accent: '#a78bfa',
    cardBg: 'from-[#0d021a]/90 to-[#1a0130]/80',
    borderHover: 'hover:border-violet-400/30',
  },
  {
    id: 7,
    title: 'Music & Performances',
    description: 'Live music & cultural shows',
    icon: Music,
    accent: '#818cf8',
    cardBg: 'from-[#06021a]/90 to-[#0d0130]/80',
    borderHover: 'hover:border-indigo-400/30',
  },
  {
    id: 8,
    title: 'Fireworks Show',
    description: 'Grand fireworks to end the day',
    icon: Sparkles,
    accent: '#22d3ee',
    cardBg: 'from-[#02161a]/90 to-[#012830]/80',
    borderHover: 'hover:border-cyan-400/30',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] } as const,
  }),
};

const EventHighlights = () => {
  return (
    <section className="w-full bg-[#fcfcfd] py-10 px-4 sm:px-6 lg:px-8 select-none">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <p className="text-xs sm:text-sm font-medium uppercase tracking-wide text-[#C4881A] mb-3 plus">
          EVENT HIGHLIGHTS
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl life font-bold text-[#0B2518] tracking-tight leading-tight">
          Something Exciting for Everyone!
        </h2>
        <div className="flex items-center justify-center gap-3 mt-5">
          <div className="w-14 h-[1px] bg-gradient-to-r from-transparent to-[#C4881A]/60" />
          <Star className="w-3.5 h-3.5 text-[#C4881A] fill-[#C4881A]" />
          <div className="w-14 h-[1px] bg-gradient-to-l from-transparent to-[#C4881A]/60" />
        </div>
      </div>

      {/* Cards — 4 per row */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {HIGHLIGHTS.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className={`group relative rounded-xl p-6 flex flex-col items-center text-center border border-white/[0.06] bg-gradient-to-br ${item.cardBg} backdrop-blur-sm shadow-[0_4px_24px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)] hover:-translate-y-1.5 transition-all duration-500 cursor-default overflow-hidden ${item.borderHover}`}
            >
              {/* Top glow spot */}
              <div
                className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                style={{ backgroundColor: item.accent }}
              />

              {/* Icon */}
              <div
                className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                style={{ backgroundColor: `${item.accent}18`, border: `1px solid ${item.accent}30` }}
              >
                <Icon className="w-7 h-7 stroke-[1.8]" style={{ color: item.accent }} />
              </div>

              {/* Title */}
              <h3 className="relative text-white/90 life font-bold text-lg leading-snug mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="relative text-white/40 text-sm leading-relaxed plus">
                {item.description}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-12 h-[2px] rounded-full transition-all duration-500"
                style={{ backgroundColor: item.accent }}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default EventHighlights;