import { 
  Calendar, 
  Clock, 
  MapPin, 
  Ticket, 
  Heart, 
  ArrowRight, 
  Users
} from 'lucide-react';
import { useRegisterModal } from '../common/RegisterModalContext';

const Hero2 = () => {
  const { openModal } = useRegisterModal();
  return (
    <section className="relative min-h-[90vh] md:min-h-screen w-full overflow-hidden bg-[#020b14] text-white flex flex-col justify-between items-center py-6 px-4 sm:px-8 selection:bg-amber-400 selection:text-black">
      
      {/* ================= BACKGROUND GRADIENT SPLIT ================= */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#042914] via-[#033221] to-[#04142a] opacity-95 pointer-events-none" />

      {/* ================= LANDMARKS BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none z-0 flex justify-between items-end">
        <div className="relative w-1/2 h-[60%] sm:h-[75%]">
          <img 
            src="/flags/karachi.png" 
            alt="Pakistan Landmarks" 
            className="w-full h-full object-contain object-left-bottom mix-blend-screen opacity-45 filter drop-shadow-[0_0_20px_rgba(16,185,129,0.4)]" 
          />
        </div>
        <div className="relative w-1/2 h-[60%] sm:h-[75%]">
          <img 
            src="/flags/australia.png" 
            alt="Australia Landmarks" 
            className="w-full h-full object-contain object-right-bottom mix-blend-screen opacity-45 filter drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]" 
          />
        </div>
      </div>

      {/* ================= WAVING FLAGS (TOP CORNERS) ================= */}
      <div className="absolute top-10 -left-25 w-44 sm:w-64 md:w-[500px] pointer-events-none z-10">
        <img 
          src="/flags/pakistanFlag.png" 
          alt="Pakistan Flag" 
          className="w-full h-auto object-contain transform -translate-y-1 -translate-x-1" 
        />
      </div>
      <div className="absolute top-14 -right-10 w-44 sm:w-64 md:w-[420px] pointer-events-none z-10">
        <img 
          src="/flags/australiaFlag.png" 
          alt="Australia Flag" 
          className="w-full h-auto object-contain transform -translate-y-1 translate-x-1" 
        />
      </div>

      {/* ================= SIDE FIREWORKS & RIBBONS ================= */}
      {/* Left Fireworks & Ribbons */}
      <div className="absolute top-[5%] left-2 sm:left-8 md:left-60 w-20 sm:w-28 md:w-80 pointer-events-none z-10 mix-blend-screen">
        <img 
          src="/flags/fireworks.png" 
          alt="Fireworks Left" 
          className="w-full h-auto object-contain rounded-full" 
        />
      </div>
      <div className="absolute top-[45%] left-2 sm:left-6 md:-left-16 -rotate-45 w-16 sm:w-24 md:w-60 pointer-events-none z-10">
        <img 
          src="/flags/ribbons.png" 
          alt="Ribbons Left" 
          className="w-full h-auto object-contain filter drop-shadow-md" 
        />
      </div>

      {/* Right Fireworks & Ribbons */}
      <div className="absolute top-[5%] right-2 sm:right-8 md:right-60 w-20 sm:w-28 md:w-80 pointer-events-none z-10 mix-blend-screen">
        <img 
          src="/flags/fireworks.png" 
          alt="Fireworks Right" 
          className="w-full h-auto object-contain rounded-full" 
        />
      </div>
      <div className="absolute top-[40%] right-2 sm:right-6 md:-right-16 rotate-45 w-16 sm:w-24 md:w-60 pointer-events-none z-10">
        <img 
          src="/flags/ribbons.png" 
          alt="Ribbons Right" 
          className="w-full h-auto object-contain filter drop-shadow-md" 
        />
      </div>

      {/* ================= CENTER HERO CONTENT ================= */}
      <div className="relative z-20 max-w-5xl mx-auto w-full flex flex-col items-center text-center mt-2 sm:mt-10">
        
        {/* Federation Logo */}
        <div>
          <img 
            src="/images/federalLogo.png" 
            alt="Federation of Pakistan Australia Logo" 
            className="h-20 sm:h-28 md:h-50 w-auto object-contain" 
          />
        </div>

        {/* Script Subheading */}
        <p className="life italic text-amber-100/90 text-lg sm:text-2xl font-normal tracking-wide drop-shadow-md mb-1">
          Together We Celebrate Freedom
        </p>

        {/* Main Golden Metallic Title */}
        <div className="flex flex-col items-center justify-center plus font-medium tracking-tighter leading-none my-1 uppercase">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-b from-[#FFFEE0] via-[#E2A82B] via-65% to-[#7A4E08] bg-clip-text text-transparent drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
            PAKISTAN
          </h1>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-b from-[#FFFEE0] via-[#E2A82B] via-65% to-[#7A4E08] bg-clip-text text-transparent drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] mt-1">
            INDEPENDENCE DAY
          </h2>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-b from-[#FFFEE0] via-[#E2A82B] via-65% to-[#7A4E08] bg-clip-text text-transparent drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] mt-1">
            CELEBRATION 2026
          </h2>
        </div>

        {/* ================= THREE-WORD SPLIT RIBBON ================= */}
        <div className="relative my-6 flex items-center justify-center w-full max-w-2xl px-6 select-none">
          
          {/* Left Ribbon Tail (Green Folded Ribbon End) */}
          <div 
            className="absolute left-1 top-1/2 -translate-y-[45%] w-10 sm:w-14 h-8 sm:h-10 bg-[#00421c] z-0 border-y border-l border-amber-300/30 shadow-md"
            style={{ clipPath: 'polygon(0% 0%, 100% 12%, 100% 88%, 0% 100%, 20% 50%)' }}
          />
          
          {/* Right Ribbon Tail (Blue Folded Ribbon End) */}
          <div 
            className="absolute right-1 top-1/2 -translate-y-[45%] w-10 sm:w-14 h-8 sm:h-10 bg-[#002660] z-0 border-y border-r border-amber-300/30 shadow-md"
            style={{ clipPath: 'polygon(100% 0%, 80% 50%, 100% 100%, 0% 88%, 0% 12%)' }}
          />

          {/* Center Main Banner Bar */}
          <div className="relative z-10 flex items-center justify-center w-full h-9 sm:h-11 rounded-sm shadow-2xl border-y border-amber-200/50 bg-gradient-to-r from-[#005e27] via-[#007032] via-50% to-[#0040a0] overflow-hidden">
            
            {/* Subtle Inner Highlight Line */}
            <div className="absolute inset-x-0 top-0.5 h-[1px] bg-white/20 pointer-events-none z-10" />
            <div className="absolute inset-x-0 bottom-0.5 h-[1px] bg-black/30 pointer-events-none z-10" />

            {/* Split Gradients Overlay */}
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#005c26] to-[#007837] z-0" />
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-[#0048aa] to-[#003482] z-0" />

            {/* Ribbon Text */}
            <div className="relative z-20 flex items-center justify-center gap-2 sm:gap-4 px-2 life font-bold text-xs sm:text-base md:text-lg tracking-wide text-[#fff4ad] drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
              <span>UNITY</span>
              <span className="text-amber-300 text-xs sm:text-sm font-normal">•</span>
              <span>DIVERSITY</span>
              <span className="text-amber-300 text-xs sm:text-sm font-normal">•</span>
              <span>FRIENDSHIP</span>
            </div>

          </div>

        </div>

        {/* Description Paragraph */}
        <p className="text-gray-100 text-xs sm:text-base md:text-lg max-w-2xl mx-auto plus leading-snug drop-shadow-md mb-8">
          A grand family festival celebrating Pakistan's Independence together with Australian authorities and the community.
        </p>

        {/* ================= EVENT DETAILS STRIP (EXACT MATCH) ================= */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 w-full max-w-5xl my-2">
          
          {/* Column 1: Date */}
          <div className="flex items-center gap-3">
            <Calendar className="w-8 h-8 text-[#f1c252] stroke-[1.8] shrink-0" />
            <div className="text-left leading-snug">
              <p className="plus text-xs sm:text-sm font-medium uppercase tracking-wide text-white">SUNDAY</p>
              <p className="plus text-sm sm:text-base font-medium text-white">16 AUGUST 2026</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block h-9 w-[1px] bg-white/30" />

          {/* Column 2: Time */}
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-[#f1c252] stroke-[1.8] shrink-0" />
            <div className="text-left leading-snug">
              <p className="plus text-xs sm:text-sm font-medium uppercase tracking-wide text-white">10:00 AM</p>
              <p className="plus text-sm sm:text-base font-medium text-white">TO 5:30 PM</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block h-9 w-[1px] bg-white/30" />

          {/* Column 3: Location */}
          <div className="flex items-center gap-3">
            <MapPin className="w-8 h-8 text-[#f1c252] stroke-[1.8] shrink-0" />
            <div className="text-left leading-snug">
              <p className="plus text-xs sm:text-sm font-medium uppercase tracking-wide text-white">FAIRFIELD SHOWGROUND</p>
              <p className="plus text-sm sm:text-base font-medium text-white">SYDNEY, AUSTRALIA</p>
            </div>
          </div>

        </div>

        {/* ================= ACTION BUTTONS (EXACT MATCH) ================= */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xl mx-auto my-8">
          
          {/* Register Free Button */}
          <button onClick={openModal} className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-[#F7D272] via-[#E5A831] to-[#C48618] text-[#120e03] px-8 py-3.5 rounded-full shadow-[0_4px_20px_rgba(229,168,49,0.35)] hover:scale-105 active:scale-95 transition-all duration-200 uppercase tracking-wide cursor-pointer">
            <Ticket className="w-5 h-5 fill-[#120e03] text-[#120e03]" />
            <span className="plus font-medium text-sm sm:text-base">REGISTER FREE</span>
            <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Explore Activities Button */}
          <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-black/40 hover:bg-black/60 text-white border border-amber-300/80 px-8 py-3.5 cursor-pointer rounded-full backdrop-blur-sm transition-all duration-200 uppercase tracking-wide group">
            <span className="plus font-medium text-sm sm:text-base">EXPLORE ACTIVITIES</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </button>

        </div>

        {/* ================= BOTTOM STRIP (EXACT MATCH) ================= */}
        <div className="relative z-20 w-full max-w-3xl pt-2 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-bold tracking-wider text-white uppercase">
          
          <div className="flex items-center gap-2.5">
            <Ticket className="w-6 h-6 text-[#f1c252] fill-[#f1c252]/20" />
            <span className="plus font-medium">FREE ENTRY</span>
          </div>

          <span className="hidden sm:inline-block h-4 w-[1px] bg-white/20" />

          <div className="flex items-center gap-2.5">
            <Users className="w-6 h-6 text-[#f1c252] fill-[#f1c252]" />
            <span className="plus font-medium">FAMILY EVENT</span>
          </div>

          <span className="hidden sm:inline-block h-4 w-[1px] bg-white/20" />

          <div className="flex items-center gap-2.5">
            <Heart className="w-6 h-6 text-[#f1c252] fill-[#f1c252]" />
            <span className="plus font-medium">EVERYONE WELCOME</span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero2;