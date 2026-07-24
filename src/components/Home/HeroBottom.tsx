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
        <div className="relative overflow-hidden">
          
          {/* Ambient glow */}
          {/* <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-40 bg-[#f1c252]/8 rounded-full blur-3xl pointer-events-none" /> */}

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
            <div className="flex items-center justify-center gap-3 sm:gap-4 w-full max-w-xl mx-auto">
              
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Mins' },
                { value: timeLeft.seconds, label: 'Secs' },
              ].map((unit, i) => (
                <div key={unit.label} className="flex items-center gap-3 sm:gap-4">
                  {/* Number box */}
                  <div className="relative flex flex-col items-center justify-center rounded-xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/[0.1] backdrop-blur-sm px-3 sm:px-4 py-3 sm:py-4 min-w-[64px] sm:min-w-[80px] md:min-w-[96px] shadow-[0_0_20px_rgba(241,194,82,0.06)]">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#f1c252]/[0.08] to-transparent pointer-events-none" />
                    <span className="relative text-2xl sm:text-3xl md:text-4xl font-bold life text-white leading-none tabular-nums drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]">
                      {String(unit.value).padStart(2, '0')}
                    </span>
                    <span className="relative text-[8px] sm:text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.25em] plus text-[#f1c252]/70 mt-2">
                      {unit.label}
                    </span>
                  </div>

                  {/* Colon separator (not after last) */}
                  {i < 3 && (
                    <div className="flex flex-col items-center gap-2 -mx-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f1c252]/50 animate-pulse" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f1c252]/50 animate-pulse" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Date pill */}
            <p className="text-[10px] sm:text-xs font-medium plus uppercase tracking-wide text-white/40">
              16 August 2026 - SUNDAY
            </p>

          </div>
        </div>

      </div>

    </section>
  );
};

export default HeroBottom;