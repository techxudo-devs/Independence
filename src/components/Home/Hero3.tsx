import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Ticket,
  Users,
  Heart,
  UserCheck,
} from 'lucide-react';
import { useRegisterModal } from '../common/RegisterModalContext';

const Hero3 = () => {
  const { openModal } = useRegisterModal();
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden select-none bg-[#021810] pb-8 sm:pb-10 md:pb-10 px-4 sm:px-6 lg:px-8">
      
      {/* 1. BACKGROUND IMAGE - SCALES NATURALLY WITH CONTENT */}
      <img
        src="/images/hero2.jpg"
        alt="Pakistan Independence Day Celebration Background"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />

      {/* Subtle Dark Overlay For Legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />

      {/* 2. HERO CONTENT WRAPPER */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center my-auto">
        
        {/* --- TOP EMBLEM LOGO --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <img
            src="/images/federalLogo.png"
            alt="Federation of Pakistan Australia"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-60 md:h-40 object-contain"
            onError={(e) => {
              const target = e.target as HTMLElement;
              target.style.display = 'none';
            }}
          />
        </motion.div>

        {/* --- SUB-HEADING ITALIC --- */}
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif italic text-white/95 text-lg sm:text-xl md:text-2xl mb-1 tracking-wide drop-shadow-md life"
        >
          Together We Celebrate Freedom
        </motion.p>

        {/* --- MAIN TITLE (GOLD GRADIENT & WHITE) --- */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center uppercase plus font-black tracking-tight leading-[1.03] mb-3 sm:mb-4"
        >
          {/* PAKISTAN */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5CE] via-[#E8CD7A] to-[#B38728] drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
            PAKISTAN
          </h1>

          {/* INDEPENDENCE DAY */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5CE] via-[#E8CD7A] to-[#B38728] drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
            INDEPENDENCE DAY
          </h2>

          {/* CELEBRATION 2027 */}
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            CELEBRATION 2026
          </h3>
        </motion.div>

        {/* --- EXACT REPLICATED RIBBON BADGE --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative my-2 sm:my-3 inline-flex items-center justify-center filter drop-shadow-[0_6px_16px_rgba(0,0,0,0.6)]"
        >
          {/* Left Ribbon Tail */}
          <div className="absolute -left-3 top-0 bottom-0 w-4 bg-[#084227] [clip-path:polygon(100%_0,0_50%,100%_100%)]" />

          {/* Center Ribbon Banner */}
          <div className="relative px-5 sm:px-10 py-1.5 sm:py-2 bg-gradient-to-r from-[#0C5832] via-[#0E4B55] to-[#123E7B] border-y border-[#34B382]/40 text-white font-bold text-[11px] sm:text-xs md:text-sm life uppercase tracking-wider">
            UNITY • DIVERSITY • FRIENDSHIP
          </div>

          {/* Right Ribbon Tail */}
          <div className="absolute -right-3 top-0 bottom-0 w-4 bg-[#0D2F5E] [clip-path:polygon(0_0,100%_50%,0_100%)]" />
        </motion.div>

        {/* --- DESCRIPTION PARAGRAPH --- */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl text-white/95 text-sm md:text-base leading-relaxed font-normal mb-6 sm:mb-8 drop-shadow-md plus px-2"
        >
          A grand family festival celebrating Pakistan&apos;s Independence
          together with Australian authorities and the community.
        </motion.p>

        {/* --- EVENT INFO BAR (DATE, TIME, LOCATION) --- */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full max-w-3xl flex flex-col md:flex-row items-start md:pl-0 pl-14 md:items-center justify-center gap-3 md:gap-0 mb-6 sm:mb-8"
        >
          {/* Item 1: Date */}
          <div className="flex items-center justify-center gap-2.5 px-3 py-1">
            <Calendar className="w-5 md:w-10 h-5 md:h-10 text-[#E8CD7A] shrink-0 stroke-[2.2]" />
            <div className="text-left">
              <p className="text-white font-medium plus text-sm sm:text-base tracking-wide uppercase">
                SUNDAY
              </p>
              <p className="text-white font-medium plus text-sm sm:text-base tracking-wide uppercase">
                15 AUGUST 2027
              </p>
            </div>
          </div>

          {/* Divider Line */}
          <div className="hidden md:block w-[1px] h-15 bg-white/30 mx-5" />
          <div className="block md:hidden w-24 h-[1px] bg-white/15 my-0.5" />

          {/* Item 2: Time */}
          <div className="flex items-center justify-center gap-2.5 px-3 py-1">
            <Clock className="w-5 md:w-10 h-5 md:h-10 text-[#E8CD7A] shrink-0 stroke-[2.2]" />
            <div className="text-left">
              <p className="text-white font-medium plus text-sm sm:text-base tracking-wide uppercase">
                10:00 AM
              </p>
              <p className="text-white font-medium plus text-sm sm:text-base tracking-wide uppercase">
                TO 5:30 PM
              </p>
            </div>
          </div>

          {/* Divider Line */}
          <div className="hidden md:block w-[1px] h-15 bg-white/30 mx-5" />
          <div className="block md:hidden w-24 h-[1px] bg-white/15 my-0.5" />

          {/* Item 3: Location */}
          <div className="flex items-center justify-center gap-2.5 px-3 py-1">
            <MapPin className="w-5 md:w-10 h-5 md:h-10 text-[#E8CD7A] shrink-0 stroke-[2.2]" />
            <div className="text-left">
              <p className="text-white/80 font-medium plus text-sm sm:text-base tracking-wide uppercase">
                FAIRFIELD SHOWGROUND
              </p>
              <p className="text-white font-medium plus text-sm sm:text-base tracking-wide uppercase">
                SYDNEY, AUSTRALIA
              </p>
            </div>
          </div>
        </motion.div>

        {/* --- BUTTONS SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 mb-6 sm:mb-8 w-full max-w-xs sm:max-w-none"
        >
          {/* Register Free Button */}
          <button
            onClick={openModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E3BF64] via-[#F8E399] to-[#CFA140] text-[#122416] font-medium text-xs tracking-wide plus uppercase px-6 py-4 rounded-full shadow-[0_4px_20px_rgba(232,205,122,0.4)] hover:brightness-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <UserCheck className="w-4 h-4 stroke-[2.5]" />
            <span>REGISTER FREE</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          {/* Explore Activities Button */}
          <a
            href="#about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black/30 backdrop-blur-md border border-[#E8CD7A]/90 text-white hover:bg-[#E8CD7A]/15 font-medium text-xs tracking-wide cursor-pointer plus uppercase px-6 py-[15px] rounded-full active:scale-95 transition-all duration-300"
          >
            <span>EXPLORE ACTIVITIES</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </motion.div>

        {/* --- FOOTER PERKS (FREE ENTRY | FAMILY EVENT | EVERYONE WELCOME) --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-white/95 text-xs sm:text-sm font-medium tracking-wide plus uppercase"
        >
          {/* Perk 1 */}
          <div className="flex items-center gap-1.5">
            <Ticket className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#E8CD7A]" />
            <span>FREE ENTRY</span>
          </div>

          {/* Separator Line */}
          <div className="w-[1px] h-8 bg-white/30" />

          {/* Perk 2 */}
          <div className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#E8CD7A]" />
            <span>FAMILY EVENT</span>
          </div>

          {/* Separator Line */}
          <div className="w-[1px] h-8 bg-white/30" />

          {/* Perk 3 */}
          <div className="flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#E8CD7A] fill-[#E8CD7A]/30" />
            <span>EVERYONE WELCOME</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero3;