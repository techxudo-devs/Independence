import { useState, useEffect } from 'react';

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

        {/* ================= COUNTDOWN BLOCK ================= */}
        <div className="relative bg-slate-950/50 border border-amber-400/20 rounded-2xl p-4 sm:p-5 shadow-xl backdrop-blur-md overflow-hidden">
          
          {/* Ambient glow */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-40 bg-[#f1c252]/8 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-3 sm:gap-4">
            
            {/* Title */}
            <div className="text-center">
              <p className="text-[10px] sm:text-xs font-medium uppercase tracking-wide plus text-[#f1c252]/80">
                COUNTDOWN TO
              </p>
              <h3 className="text-base sm:text-lg md:text-xl font-bold life uppercase tracking-wider text-white mt-0.5 drop-shadow-lg">
                THE BIG DAY
              </h3>
            </div>

            {/* Timer Row */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 w-full max-w-lg mx-auto">
              
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Mins' },
                { value: timeLeft.seconds, label: 'Secs' },
              ].map((unit, i) => (
                <div key={unit.label} className="flex items-center gap-2 sm:gap-3">
                  {/* Number box */}
                  <div className="relative flex flex-col items-center justify-center py-4 min-w-[58px] sm:min-w-[72px] md:min-w-[84px]">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold life text-white leading-none tabular-nums">
                      {String(unit.value).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] plus text-[#f1c252] mt-1.5">
                      {unit.label}
                    </span>
                  </div>

                  {/* Colon separator (not after last) */}
                  {i < 3 && (
                    <div className="flex flex-col items-center gap-1.5 -mx-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f1c252]/70 animate-pulse" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f1c252]/70 animate-pulse" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Date pill */}
            <p className="text-[10px] sm:text-xs font-medium plus uppercase tracking-wide text-white/40">
              14 — 16 August 2026
            </p>

          </div>
        </div>

      </div>

    </section>
  );
};

export default HeroBottom;