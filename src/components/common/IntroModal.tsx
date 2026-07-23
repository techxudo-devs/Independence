import { useState, useEffect } from 'react';
import { X, ArrowRight, Calendar, MapPin } from 'lucide-react';
import { useRegisterModal } from './RegisterModalContext';

const IntroModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { openModal } = useRegisterModal();

  // Live Countdown State
  const [timeLeft, setTimeLeft] = useState({
    days: 56,
    hours: 14,
    minutes: 20,
    seconds: 45
  });

  // 1. Lock/Unlock Page Scroll when Modal is Open/Closed
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // 2. Live Countdown Logic
  useEffect(() => {
    const targetDate = new Date('2026-08-14T10:00:00').getTime();

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

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleRegisterNow = () => {
    setIsOpen(false);
    setTimeout(() => {
      openModal();
    }, 100);
  };

  if (!isOpen) return null;

  return (
    /* CHANGED z-50 TO z-[999] HERE BELOW */
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-[#020b14]/85 backdrop-blur-md transition-all duration-300 select-none">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-gradient-to-b from-[#021d12] via-[#020b14] to-[#01132e] border border-amber-400/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-white">
        
        {/* Background Ambient Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-48 bg-[#f1c252]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-[#003818]/40 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-gray-300 hover:text-white transition-all cursor-pointer z-20"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="relative z-10 flex flex-col items-center text-center gap-5">
          
          {/* Top Tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-[#f1c252] text-[10px] sm:text-xs font-semibold tracking-wider uppercase plus">
            {/* <Sparkles className="w-3.5 h-3.5 animate-pulse" /> */}
            Limited Slots • Free Entry
          </div>

          {/* Title */}
          <div>
            <p className="text-xs sm:text-sm font-medium uppercase tracking-wide text-[#f1c252]/90 plus">
              Countdown To The Federation Of Pakistan Australia Event
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold life uppercase tracking-wide text-white mt-1 drop-shadow-md">
              PAKISTAN INDEPENDENCE CELEBRATION <span className="text-[#f1c252]">2026</span>
            </h2>
          </div>

          {/* Countdown Boxes */}
          <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full my-1">
            {[
              { value: timeLeft.days, label: 'DAYS' },
              { value: timeLeft.hours, label: 'HOURS' },
              { value: timeLeft.minutes, label: 'MINS' },
              { value: timeLeft.seconds, label: 'SECS' },
            ].map((unit, index) => (
              <div 
                key={index}
                className="flex flex-col items-center justify-center py-3 px-1 rounded-xl bg-slate-950/70 border border-amber-400/20 shadow-inner"
              >
                <span className="text-2xl sm:text-3xl font-bold life text-[#f1c252] tabular-nums leading-none">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[10px] font-medium tracking-widr plus text-gray-300 mt-1.5">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          {/* Subtext info */}
          <div className="w-full py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs sm:text-sm text-gray-300">
            <span className="font-medium plus flex items-center gap-2"><Calendar className="w-4 h-4" /> 14 August 2026</span>
            <span className="font-medium plus text-[#f1c252] uppercase text-xs tracking-wide flex items-center gap-1" ><MapPin className="w-4 h-4" /> Sydney, Australia</span>
          </div>

            <p className='life text-xl'>I'm Coming</p>
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
            {/* Register Button */}
            <button
              onClick={handleRegisterNow}
              className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-[#f1c252] via-[#e5b23d] to-[#c7921e] hover:brightness-110 text-[#020b14] font-medium plus text-sm uppercase tracking-wide flex items-center justify-center gap-2 shadow-[#f1c252]/10 transition-all cursor-pointer active:scale-98"
            >
              Register Now
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default IntroModal;