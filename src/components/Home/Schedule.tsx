import { 
  Scissors, 
  Drama, 
  Smile, 
  UtensilsCrossed, 
  Gift, 
  Sparkles, 
  Flag, 
  Star,
  User
} from 'lucide-react';

const SCHEDULE_ITEMS = [
  {
    time: '10:00 AM',
    title: 'Opening Ceremony',
    description: 'Welcome & Official Opening',
    icon: Scissors,
    iconColor: 'text-amber-500',
  },
  {
    time: '11:00 AM',
    title: 'Stage Performances',
    description: 'Cultural & Community Performances',
    icon: Drama,
    iconColor: 'text-amber-500',
  },
  {
    time: '12:00 PM',
    title: 'Kids Activities',
    description: 'Rides, Games & Fun Zone',
    icon: Smile,
    iconColor: 'text-emerald-700',
  },
  {
    time: '01:00 PM',
    title: 'BBQ & Food Festival',
    description: 'Enjoy Delicious Pakistani Cuisine',
    icon: UtensilsCrossed,
    iconColor: 'text-emerald-700',
  },
  {
    time: '02:00 PM',
    title: 'Lucky Draw Starts',
    description: 'Every Minute a Draw for 4 Hours!',
    icon: Gift,
    iconColor: 'text-emerald-700',
  },
  {
    time: '05:00 PM',
    title: 'Fireworks Show',
    description: 'Grand Fireworks Spectacular',
    icon: Sparkles,
    iconColor: 'text-rose-500',
  },
  {
    time: '05:30 PM',
    title: 'Closing Ceremony',
    description: 'Thank You & Closing Remarks',
    icon: Flag,
    iconColor: 'text-emerald-800',
  },
];

const SPEAKERS = [
  {
    id: 1,
    name: 'David Saliba',
    role: 'MP',
    org: 'Federation of Pakistan Australia',
    image: '/images/speaker1.jpg',
    isSpecial: false,
  },
  {
    id: 2,
    name: 'Nathan Hagarty',
    role: 'MP',
    org: '',
    image: '/images/speaker2.jpg',
    isSpecial: false,
  },
  {
    id: 3,
    name: 'Margabet Beazley',
    role: 'Governer Of NSW',
    org: 'Pakistan Community',
    image: '/images/speaker3.jpg',
    isSpecial: false,
  },
  {
    id: 4,
    name: 'Charishma Kaliyanda',
    role: 'MP',
    org: 'Stay Tuned!',
    image: '/images/speaker4.jpg',
    isSpecial: false,
  },
  {
    id: 5,
    name: 'Mark Buttigieg',
    role: 'Parliamentary Secretary',
    org: '',
    image: '/images/speaker5.jpg',
    isSpecial: false,
  },
];

const Schedule = () => {
  return (
    <section className="w-full bg-[#f8f9fa] py-10 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

        {/* ================= LEFT PANEL: EVENT SCHEDULE ================= */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col">
          <h2 className="text-base sm:text-lg life font-bold uppercase tracking-wide text-[#0F3A22] mb-8">
            EVENT SCHEDULE
          </h2>

          {/* Timeline */}
          <div className="relative pl-6 space-y-6 flex-1">
            {/* Continuous Vertical Golden Line */}
            <div className="absolute left-[9px] top-2 bottom-3 w-[1.5px] bg-[#d4a017]" />

            {SCHEDULE_ITEMS.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="relative flex items-start gap-4 group">
                  
                  {/* Golden Node Dot */}
                  <div className="absolute -left-[19px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#d4a017] ring-4 ring-white shrink-0" />

                  {/* Time */}
                  <span className="text-xs font-bold life text-slate-800 w-16 shrink-0 pt-0.5">
                    {item.time}
                  </span>

                  {/* Icon & Description */}
                  <div className="flex items-start gap-3 flex-1">
                    <IconComponent className={`w-5 h-5 shrink-0 ${item.iconColor}`} />
                    <div className="text-left leading-tight">
                      <h3 className="text-sm font-bold life text-slate-900 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 plus mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* ================= RIGHT PANEL: OUR ESTEEMED SPEAKERS ================= */}
        <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-base sm:text-lg life font-bold uppercase tracking-wide text-[#0F3A22] mb-1">
              OUR ESTEEMED SPEAKERS
            </h2>
            <p className="text-xs sm:text-sm plus text-slate-500">
              Meet our distinguished speakers and special guests
            </p>

            {/* Star Divider */}
            <div className="flex items-center justify-center gap-3 mt-3">
              <div className="w-12 h-[1px] bg-amber-300" />
              <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
              <div className="w-12 h-[1px] bg-amber-300" />
            </div>
          </div>

          {/* 4 Speaker Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 -translate-y-8">
            {SPEAKERS.map((speaker) => (
              <div
                key={speaker.id}
                className=" flex flex-col items-center text-center"
              >
                {/* Photo / Silhouette Container */}
                <div className="w-full aspect-[2/3] rounded-xl overflow-hidden bg-slate-100 mb-4 flex items-center justify-center">
                  {!speaker.isSpecial ? (
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-200/70 flex items-center justify-center text-slate-400">
                      <User className="w-24 h-24 stroke-[1.2]" />
                    </div>
                  )}
                </div>

                {/* Info */}
                <h3 className="text-sm font-bold plus text-slate-900 leading-snug">
                  {speaker.name}
                </h3>
                <p className="text-xs font-normal plus text-slate-600 mt-1">
                  {speaker.role}
                </p>
                {/* {speaker.org && (
                  <p className="text-xs font-normal plus text-slate-500 mt-0.5">
                    {speaker.org}
                  </p>
                )} */}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Schedule;