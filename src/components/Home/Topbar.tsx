import { 
  Store, 
  Users, 
  Gift, 
  Ticket, 
  Baby
} from 'lucide-react';

const stats = [
  { icon: Store, value: '50+', label: 'Stalls' },
  { icon: Users, value: '5,000+', label: 'Visitors' },
  { icon: Gift, value: '4 Hours', label: 'Lucky Draw' },
  { icon: Ticket, value: 'Free', label: 'Entry', rotate: true },
  { icon: Baby, value: 'Family', label: 'Festival' },
];

// Repeat stats so 1 set is wide enough for large desktop screens
const setOfStats = [...stats, ...stats];

const Topbar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#003818] via-[#012d26] to-[#011a3b] border-b border-amber-300/30 py-2.5 text-white font-sans select-none overflow-hidden">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center gap-12 md:gap-16 shrink-0 pr-12 md:pr-16">
            {setOfStats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <div key={idx} className="flex items-center gap-2.5 shrink-0">
                  <IconComponent className={`w-5 h-5 text-[#f1c252] shrink-0 stroke-[1.8] ${stat.rotate ? 'rotate-45' : ''}`} />
                  <span className="text-sm sm:text-base font-bold life text-white">{stat.value}</span>
                  <span className="text-[10px] sm:text-xs font-medium plus uppercase tracking-wide text-gray-200">{stat.label}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topbar;