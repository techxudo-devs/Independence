import { useState, useEffect } from 'react';
import { 
  Store, 
  Users, 
  Gift, 
  Ticket, 
  Baby
} from 'lucide-react';

const HeroBottom = () => {
  // Live Countdown State
  const [timeLeft, setTimeLeft] = useState({
    days: 56,
    hours: 14,
    minutes: 20,
    seconds: 45
  });

  useEffect(() => {
    const targetDate = new Date('2026-08-16T10:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-[#020b14] text-white py-6 px-4 sm:px-8 overflow-hidden font-sans select-none">
      
      {/* Background Gradient Split */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#032312] via-[#021f2d] to-[#02132e] opacity-95 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-5">
        
        {/* ================= TOP ROW: 3 CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
          
          {/* CARD 1: Countdown Title + Skyline Line Art (Left - 3 Cols) */}
          {/* <div className="md:col-span-3 relative bg-gradient-to-b from-[#013518]/80 to-[#002410]/90 border border-amber-400/30 rounded-2xl p-4 flex flex-col items-center justify-center text-center overflow-hidden shadow-lg backdrop-blur-md min-h-[110px]">
            <div className="absolute inset-x-0 bottom-0 h-14 pointer-events-none opacity-20 bg-contain bg-bottom bg-no-repeat" style={{ backgroundImage: 'url("/flags/karachi.png")' }} />
            
            <p className="text-xs sm:text-xs font-medium uppercase tracking-wide text-[#f1c252]">
              COUNTDOWN TO
            </p>
            <h3 className="text-base sm:text-xl font-bold life uppercase tracking-wide text-white mt-0.5 drop-shadow">
              THE BIG DAY
            </h3>
          </div> */}

          {/* CARD 2: Active Countdown Timer Boxes (Center - 6 Cols) */}
          <div className="md:col-span-8 md:col-start-3 bg-slate-950/40 border border-amber-400/30 rounded-2xl p-2 sm:p-2.5 flex items-center justify-center gap-2 shadow-md backdrop-blur-sm">
            
            {/* Days Box */}
            <div className="flex-1 bg-gradient-to-b from-[#012d15]/90 to-[#011a0c]/90 border border-amber-300/20 rounded-xl py-3 px-1 flex flex-col items-center justify-center shadow-inner">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold life text-white leading-none">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wide plus text-[#f1c252] mt-1">
                DAYS
              </span>
            </div>

            {/* Hours Box */}
            <div className="flex-1 bg-gradient-to-b from-[#012d15]/90 to-[#011a0c]/90 border border-amber-300/20 rounded-xl py-3 px-1 flex flex-col items-center justify-center shadow-inner">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold life text-white leading-none">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-medium plus uppercase tracking-wide text-[#f1c252] mt-1">
                HOURS
              </span>
            </div>

            {/* Minutes Box */}
            <div className="flex-1 bg-gradient-to-b from-[#012d15]/90 to-[#011a0c]/90 border border-amber-300/20 rounded-xl py-3 px-1 flex flex-col items-center justify-center shadow-inner">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold life text-white leading-none">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-medium plus uppercase tracking-wide text-[#f1c252] mt-1">
                MINUTES
              </span>
            </div>

            {/* Seconds Box */}
            <div className="flex-1 bg-gradient-to-b from-[#012d15]/90 to-[#011a0c]/90 border border-amber-300/20 rounded-xl py-3 px-1 flex flex-col items-center justify-center shadow-inner">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold life text-white leading-none">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-medium plus uppercase tracking-wide text-[#f1c252] mt-1">
                SECONDS
              </span>
            </div>

          </div>

          {/* CARD 3: Celebrating Together (Right - 3 Cols) */}
          {/* <div className="md:col-span-3 bg-gradient-to-b from-[#021d42]/80 to-[#01122b]/90 border border-amber-400/30 rounded-2xl p-3 flex flex-col items-center justify-center text-center shadow-lg backdrop-blur-md min-h-[110px]">
            <p className="text-xs sm:text-xs font-medium uppercase tracking-wide plus text-white">
              CELEBRATING TOGETHER
            </p>
            <p className="text-xs sm:text-lg font-bold life uppercase tracking-wide bg-gradient-to-r from-[#FFFEE0] via-[#E2A82B] to-[#976208] bg-clip-text text-transparent mt-0.5">
              PAKISTAN & AUSTRALIA
            </p>

            <div className="flex items-center justify-center gap-1 mt-2">
              <img 
                src="/flags/pakistanFlag.png" 
                alt="Pakistan" 
                className="h-6 w-auto object-contain transform -rotate-12 filter drop-shadow" 
              />
              <img 
                src="/flags/australiaFlag.png" 
                alt="Australia" 
                className="h-6 w-auto object-contain transform rotate-12 filter drop-shadow" 
              />
            </div>
          </div> */}

        </div>

        {/* ================= BOTTOM ROW: STATS STRIP ================= */}
        <div className="w-full bg-gradient-to-r from-[#003818] via-[#012d26] to-[#011a3b] border border-amber-300/30 rounded-2xl py-4 px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Stat 1: Exhibition Stalls */}
          <div className="flex items-center gap-3.5 w-full md:w-auto justify-center">
            <Store className="w-8 h-8 text-[#f1c252] shrink-0 stroke-[1.8]" />
            <div className="text-left leading-tight">
              <p className="text-base sm:text-lg font-bold life text-white">240+</p>
              <p className="text-[10px] sm:text-xs font-medium plus uppercase tracking-wide text-gray-200">EXHIBITION STALLS</p>
            </div>
          </div>

          <div className="hidden md:block h-8 w-[1px] bg-white/20" />

          {/* Stat 2: Visitors Expected */}
          <div className="flex items-center gap-3.5 w-full md:w-auto justify-center">
            <Users className="w-8 h-8 text-[#f1c252] shrink-0 stroke-[1.8]" />
            <div className="text-left leading-tight">
              <p className="text-base sm:text-lg font-bold life text-white">5,000+</p>
              <p className="text-[10px] sm:text-xs font-medium plus uppercase tracking-wide text-gray-200">VISITORS EXPECTED</p>
            </div>
          </div>

          <div className="hidden md:block h-8 w-[1px] bg-white/20" />

          {/* Stat 3: Lucky Draw */}
          <div className="flex items-center gap-3.5 w-full md:w-auto justify-center">
            <Gift className="w-8 h-8 text-[#f1c252] shrink-0 stroke-[1.8]" />
            <div className="text-left leading-tight">
              <p className="text-sm sm:text-base font-bold life text-white">4 HOURS</p>
              <p className="text-[10px] sm:text-xs font-medium plus uppercase tracking-wide text-gray-200">LUCKY DRAW</p>
            </div>
          </div>

          <div className="hidden md:block h-8 w-[1px] bg-white/20" />

          {/* Stat 4: Free Entry */}
          <div className="flex items-center gap-3.5 w-full md:w-auto justify-center">
            <Ticket className="w-8 h-8 text-[#f1c252] shrink-0 stroke-[1.8] rotate-45" />
            <div className="text-left leading-tight">
              <p className="text-sm sm:text-base font-bold life text-white">FREE</p>
              <p className="text-[10px] sm:text-xs font-medium plus uppercase tracking-wide text-gray-200">ENTRY</p>
            </div>
          </div>

          <div className="hidden md:block h-8 w-[1px] bg-white/20" />

          {/* Stat 5: Family Festival */}
          <div className="flex items-center gap-3.5 w-full md:w-auto justify-center">
            <Baby className="w-8 h-8 text-[#f1c252] shrink-0 stroke-[1.8]" />
            <div className="text-left leading-tight">
              <p className="text-sm sm:text-base font-bold life text-white">FAMILY</p>
              <p className="text-[10px] sm:text-xs font-medium plus uppercase tracking-wide text-gray-200">FESTIVAL</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroBottom;