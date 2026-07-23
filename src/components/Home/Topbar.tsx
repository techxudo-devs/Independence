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

const Topbar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#003818] via-[#012d26] to-[#011a3b] border-b border-amber-300/30 py-2.5 text-white font-sans select-none overflow-hidden">
      
      {/* Marquee track on mobile (< md), static & centered on desktop (>= md) */}
      <div className="marquee-track md:!animate-none md:!transform-none md:w-full md:flex md:items-center md:justify-center">
        
        {/* Copy 1: Rendered on both Mobile & Desktop */}
        <div className="flex items-center gap-8 shrink-0 pr-8 md:pr-0 md:gap-12 lg:gap-16 md:w-full md:justify-center">
          {stats.map((stat, idx) => {
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

        {/* Copy 2: Rendered ONLY on Mobile (< md) for seamless marquee loop */}
        <div className="flex items-center gap-8 shrink-0 pr-8 md:hidden">
          {stats.map((stat, idx) => {
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

      </div>
    </div>
  );
};

export default Topbar;