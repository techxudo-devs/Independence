import { motion } from 'framer-motion';
import { Star, Send } from 'lucide-react';
import { useRegisterModal } from '../common/RegisterModalContext';

// ==========================================
// MODERN, BEAUTIFUL & VIBRANT SVG ICONS
// ==========================================

// 1. Exhibition Stalls (Modern Pavilion Storefront)
const StallIcon = () => (
  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-teal-500/20 flex items-center justify-center shrink-0 border border-emerald-500/10 group-hover:scale-110 transition-transform duration-300">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="stall-roof" x1="6" y1="10" x2="34" y2="10" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981" />
          <stop offset="1" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="stall-accent" x1="8" y1="18" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34D399" />
          <stop offset="1" stopColor="#047857" />
        </linearGradient>
        <filter id="shadow-stall" x="2" y="2" width="36" height="36" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#059669" floodOpacity="0.25" />
        </filter>
      </defs>
      <g filter="url(#shadow-stall)">
        {/* Roof / Awning */}
        <path d="M7 15C7 12.2386 9.23858 10 12 10H28C30.7614 10 33 12.2386 33 15V17H7V15Z" fill="url(#stall-roof)" />
        <path d="M7 17C7 18.6569 8.34315 20 10 20C11.6569 20 13 18.6569 13 17C13 18.6569 14.3431 20 16 20C17.6569 20 19 18.6569 19 17C19 18.6569 20.3431 20 22 20C23.6569 20 25 18.6569 25 17C25 18.6569 26.3431 20 28 20C29.6569 20 31 18.6569 31 17H33V18C33 19.1046 32.1046 20 31 20V30C31 31.1046 30.1046 32 29 32H11C9.89543 32 9 31.1046 9 30V20C7.89543 20 7 19.1046 7 18V17Z" fill="url(#stall-accent)" />
        {/* Door / Display Window */}
        <rect x="15" y="23" width="10" height="9" rx="2" fill="#ECFDF5" />
        <path d="M18 26H22" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
        {/* Sparkle */}
        <circle cx="31" cy="9" r="2" fill="#F59E0B" />
      </g>
    </svg>
  </div>
);

// 2. Lucky Draw (Modern Glossy Gift Box with Glowing Bow)
const DrawIcon = () => (
  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500/10 via-rose-500/5 to-rose-500/20 flex items-center justify-center shrink-0 border border-rose-500/10 group-hover:scale-110 transition-transform duration-300">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="box-grad" x1="8" y1="16" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F43F5E" />
          <stop offset="1" stopColor="#BE123C" />
        </linearGradient>
        <linearGradient id="ribbon-grad" x1="12" y1="8" x2="28" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBBF24" />
          <stop offset="1" stopColor="#D97706" />
        </linearGradient>
        <filter id="shadow-draw" x="2" y="2" width="36" height="36" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#F43F5E" floodOpacity="0.3" />
        </filter>
      </defs>
      <g filter="url(#shadow-draw)">
        {/* Box Base */}
        <rect x="9" y="17" width="22" height="15" rx="3" fill="url(#box-grad)" />
        {/* Box Cap */}
        <rect x="7" y="14" width="26" height="5" rx="2" fill="#FB7185" />
        {/* Vertical Gold Ribbon */}
        <rect x="17.5" y="14" width="5" height="18" fill="url(#ribbon-grad)" />
        {/* Bow */}
        <path d="M20 13.5C18 10 12 9 12 11.5C12 14 20 14 20 14Z" fill="url(#ribbon-grad)" />
        <path d="M20 13.5C22 10 28 9 28 11.5C28 14 20 14 20 14Z" fill="url(#ribbon-grad)" />
        <circle cx="20" cy="13.5" r="2" fill="#FEF08A" />
        {/* Floating Stars */}
        <path d="M31 9L31.7 10.3L33 11L31.7 11.7L31 13L30.3 11.7L29 11L30.3 10.3L31 9Z" fill="#F59E0B" />
      </g>
    </svg>
  </div>
);

// 3. Every Minute a Draw (Dynamic Speed Timer Clock)
const ClockIcon = () => (
  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-cyan-500/20 flex items-center justify-center shrink-0 border border-blue-500/10 group-hover:scale-110 transition-transform duration-300">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="clock-rim" x1="8" y1="8" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#1D4ED8" />
        </linearGradient>
        <filter id="shadow-clock" x="2" y="2" width="36" height="36" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#2563EB" floodOpacity="0.3" />
        </filter>
      </defs>
      <g filter="url(#shadow-clock)">
        {/* Outer Ring */}
        <circle cx="20" cy="20" r="12" stroke="url(#clock-rim)" strokeWidth="3.5" fill="#EFF6FF" />
        {/* Inner ticks */}
        <circle cx="20" cy="11" r="1" fill="#3B82F6" />
        <circle cx="29" cy="20" r="1" fill="#3B82F6" />
        <circle cx="20" cy="29" r="1" fill="#3B82F6" />
        <circle cx="11" cy="20" r="1" fill="#3B82F6" />
        {/* Clock Hands */}
        <path d="M20 12V20L25 23" stroke="#1D4ED8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="20" r="2" fill="#60A5FA" />
        {/* Motion Speed Lines */}
        <path d="M7 13C6 15 6 17 6 17" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 9C7.5 10.5 7.5 10.5 7.5 10.5" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  </div>
);

// 4. Desi Pakistani BBQ (Glowing Charcoal Grill & Fiery Flames)
const BbqIcon = () => (
  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-red-500/20 flex items-center justify-center shrink-0 border border-orange-500/10 group-hover:scale-110 transition-transform duration-300">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="flame-grad" x1="20" y1="6" x2="20" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EF4444" />
          <stop offset="0.5" stopColor="#F97316" />
          <stop offset="1" stopColor="#FBBF24" />
        </linearGradient>
        <filter id="shadow-bbq" x="2" y="2" width="36" height="36" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#EA580C" floodOpacity="0.3" />
        </filter>
      </defs>
      <g filter="url(#shadow-bbq)">
        {/* Fiery Flames */}
        <path d="M20 7C20 7 24 11 24 15C24 17.2091 22.2091 19 20 19C17.7909 19 16 17.2091 16 15C16 11 20 7 20 7Z" fill="url(#flame-grad)" />
        <path d="M20 11C20 11 22 13.5 22 15.5C22 16.6 21.1 17.5 20 17.5C18.9 17.5 18 16.6 18 15.5C18 13.5 20 11 20 11Z" fill="#FEF08A" />
        {/* Grill Bowl */}
        <path d="M10 20C10 20 11.5 27 20 27C28.5 27 30 20 30 20H10Z" fill="#27272A" />
        <rect x="9" y="19" width="22" height="2" rx="1" fill="#52525B" />
        {/* Stand Legs */}
        <line x1="14" y1="27" x2="11" y2="33" stroke="#27272A" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="20" y1="27" x2="20" y2="34" stroke="#27272A" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="26" y1="27" x2="29" y2="33" stroke="#27272A" strokeWidth="2.5" strokeLinecap="round" />
        {/* Sparkles */}
        <circle cx="13" cy="11" r="1" fill="#F97316" />
        <circle cx="27" cy="10" r="1.5" fill="#FBBF24" />
      </g>
    </svg>
  </div>
);

// 5. Kids Fun Zone (Playful Carnival Balloons & Star)
const KidsIcon = () => (
  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/10 via-yellow-500/5 to-emerald-500/20 flex items-center justify-center shrink-0 border border-amber-500/10 group-hover:scale-110 transition-transform duration-300">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="balloon-1" x1="11" y1="8" x2="21" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E0B" />
          <stop offset="1" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id="balloon-2" x1="19" y1="6" x2="31" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981" />
          <stop offset="1" stopColor="#059669" />
        </linearGradient>
        <filter id="shadow-kids" x="2" y="2" width="36" height="36" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#D97706" floodOpacity="0.25" />
        </filter>
      </defs>
      <g filter="url(#shadow-kids)">
        {/* Balloon Strings */}
        <path d="M16 22C16 25 18 28 17 33" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M25 20C25 24 22 27 23 33" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
        {/* Left Balloon */}
        <ellipse cx="16" cy="15" rx="6" ry="7" fill="url(#balloon-1)" />
        <path d="M14 11C14.5 10.2 15.5 10 16 10" stroke="#FEF3C7" strokeWidth="1.5" strokeLinecap="round" />
        {/* Right Balloon */}
        <ellipse cx="25" cy="13" rx="6" ry="7" fill="url(#balloon-2)" />
        <path d="M23 9C23.5 8.2 24.5 8 25 8" stroke="#D1FAE5" strokeWidth="1.5" strokeLinecap="round" />
        {/* Playful Joy Sparkle */}
        <path d="M8 12L8.5 13L10 13.5L8.5 14L8 15.5L7.5 14L6 13.5L7.5 13L8 12Z" fill="#EC4899" />
      </g>
    </svg>
  </div>
);

// 6. Face Painting (Artist Palette & Golden Brush)
const PaletteIcon = () => (
  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/10 via-violet-500/5 to-fuchsia-500/20 flex items-center justify-center shrink-0 border border-purple-500/10 group-hover:scale-110 transition-transform duration-300">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="palette-bg" x1="7" y1="9" x2="31" y2="31" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A855F7" />
          <stop offset="1" stopColor="#7E22CE" />
        </linearGradient>
        <filter id="shadow-palette" x="2" y="2" width="36" height="36" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#7E22CE" floodOpacity="0.3" />
        </filter>
      </defs>
      <g filter="url(#shadow-palette)">
        {/* Smooth Palette */}
        <path d="M20 9C12.8203 9 7 14.8203 7 22C7 26.5 10 30 15 30C17.2 30 18 28.5 18 27C18 25.8 17.5 24.8 17.5 23.5C17.5 21.8 19 20 21 20H24C27.866 20 31 16.866 31 13C31 10 26 9 20 9Z" fill="url(#palette-bg)" />
        {/* Paint Color Drops */}
        <circle cx="13" cy="16" r="2" fill="#EF4444" />
        <circle cx="18" cy="13" r="2" fill="#F59E0B" />
        <circle cx="24" cy="13" r="2" fill="#10B981" />
        <circle cx="27" cy="17" r="2" fill="#3B82F6" />
        {/* Thumb Hole */}
        <circle cx="13" cy="25" r="2.5" fill="#FAF5FF" />
      </g>
    </svg>
  </div>
);

// 7. Music & Performances (Dynamic Dual Notes with Sound Waves)
const MusicIcon = () => (
  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-purple-500/20 flex items-center justify-center shrink-0 border border-indigo-500/10 group-hover:scale-110 transition-transform duration-300">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="note-grad" x1="10" y1="8" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366F1" />
          <stop offset="1" stopColor="#4338CA" />
        </linearGradient>
        <filter id="shadow-music" x="2" y="2" width="36" height="36" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#4338CA" floodOpacity="0.3" />
        </filter>
      </defs>
      <g filter="url(#shadow-music)">
        {/* Double Music Note */}
        <path d="M15 23.5C15 25.433 13.433 27 11.5 27C9.567 27 8 25.433 8 23.5C8 21.567 9.567 20 11.5 20C12.4 20 13.22 20.35 13.83 20.92V11L26 8V18.5C26 20.433 24.433 22 22.5 22C20.567 22 19 20.433 19 18.5C19 16.567 20.567 15 22.5 15C23.4 15 24.22 15.35 24.83 15.92V11L15 13.25V23.5Z" fill="url(#note-grad)" />
        {/* Sound Waves */}
        <path d="M28 13C30 15 30 18 28 20" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" />
        <path d="M31 10C34 14 34 19 31 23" stroke="#C7D2FE" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  </div>
);

// 8. Fireworks Show (Radiant Explosion & Sparkling Stars)
const FireworksIcon = () => (
  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/10 via-sky-500/5 to-blue-500/20 flex items-center justify-center shrink-0 border border-cyan-500/10 group-hover:scale-110 transition-transform duration-300">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fire-center" x1="16" y1="16" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#06B6D4" />
          <stop offset="1" stopColor="#0284C7" />
        </linearGradient>
        <filter id="shadow-fireworks" x="2" y="2" width="36" height="36" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#0284C7" floodOpacity="0.3" />
        </filter>
      </defs>
      <g filter="url(#shadow-fireworks)">
        {/* Central Glowing Spark */}
        <circle cx="20" cy="20" r="3" fill="url(#fire-center)" />
        
        {/* Multi-Colored Radiating Rays */}
        <line x1="20" y1="12" x2="20" y2="7" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="20" y1="28" x2="20" y2="33" stroke="#F43F5E" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="12" y1="20" x2="7" y2="20" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="28" y1="20" x2="33" y2="20" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        
        <line x1="14.3" y1="14.3" x2="10.8" y2="10.8" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
        <line x1="25.7" y1="25.7" x2="29.2" y2="29.2" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" />
        <line x1="25.7" y1="14.3" x2="29.2" y2="10.8" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
        <line x1="14.3" y1="25.7" x2="10.8" y2="29.2" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />

        {/* Outer Diamonds */}
        <circle cx="20" cy="4" r="1.5" fill="#06B6D4" />
        <circle cx="36" cy="20" r="1.5" fill="#F59E0B" />
        <circle cx="20" cy="36" r="1.5" fill="#F43F5E" />
        <circle cx="4" cy="20" r="1.5" fill="#10B981" />
      </g>
    </svg>
  </div>
);

// ==========================================
// HIGHLIGHT DATA
// ==========================================

const HIGHLIGHTS = [
  {
    id: 1,
    title: '50+\nExhibition Stalls',
    description: 'Explore amazing products & services',
    icon: StallIcon,
  },
  {
    id: 2,
    title: 'History Making\nLucky Draw',
    description: 'One lucky winner every minute!',
    icon: DrawIcon,
  },
  {
    id: 3,
    title: 'Every Minute\na Draw',
    description: 'For 4 continuous exciting hours',
    icon: ClockIcon,
  },
  {
    id: 4,
    title: 'Desi Pakistani\nBBQ',
    description: 'Delicious food & traditional flavors',
    icon: BbqIcon,
  },
  {
    id: 5,
    title: 'Kids Fun Zone',
    description: 'Fun rides, games, bouncy castle &\nactivities',
    icon: KidsIcon,
  },
  {
    id: 6,
    title: 'Face Painting',
    description: 'Creative face painting for\nkids & adults',
    icon: PaletteIcon,
  },
  {
    id: 7,
    title: 'Music &\nPerformances',
    description: 'Live music &\ncultural shows',
    icon: MusicIcon,
  },
  {
    id: 8,
    title: 'Fireworks\nShow',
    description: 'Grand fireworks\nto end the day',
    icon: FireworksIcon,
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================

const EventHighlights = () => {
  const { openModal } = useRegisterModal();
  return (
    <section className="w-full bg-[#FCFCFD] py-10 px-4 sm:px-6 lg:px-8 select-none overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-12">
          <p className="text-[13px] sm:text-[14px] font-medium plus tracking-wide text-[#C4881A] uppercase mb-2">
            EVENT HIGHLIGHTS
          </p>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl life font-bold text-[#0B2518] tracking-tight">
            Something Exciting for Everyone!
          </h2>

          {/* Star Divider Line */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C4881A]/50 to-[#C4881A]" />
            <span className="text-green-700 text-xs"><Star/></span>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent via-[#C4881A]/50 to-[#C4881A]" />
          </div>
        </div>

        {/* --- 8 CARDS IN 1 ROW --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 items-stretch">
          {HIGHLIGHTS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-xl p-5 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100/80 hover:border-gray-200 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
              >
                {/* SVG Icon Container */}
                <div className="mb-4">
                  <IconComponent />
                </div>

                {/* Card Title */}
                <h3 className="text-[#0B2518] life font-bold text-[14px] sm:text-[15px] leading-snug mb-2 whitespace-pre-line min-h-[40px] flex items-center justify-center group-hover:text-[#10B981] transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-gray-400 plus text-[11px] sm:text-[12px] leading-relaxed whitespace-pre-line">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={openModal}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#024021] to-[#012613] hover:from-[#03522b] hover:to-[#023319] text-white text-xs font-medium uppercase tracking-wide shadow-md hover:scale-105 active:scale-95 transition-all duration-200 plus cursor-pointer"
          >
            REGISTER NOW
            <Send className="w-4 h-4 text-white" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default EventHighlights;