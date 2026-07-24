import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowRight, 
  Car, 
  Train, 
  Bus, 
  Accessibility, 
  User, 
  Mail, 
  Phone, 
  FileText, 
  MessageSquare, 
  Send,
  Check,
  ChevronDown
} from 'lucide-react';
import { useRegisterModal } from '../common/RegisterModalContext';

const INQUIRY_OPTIONS = [
  'General Inquiry',
  'Lucky Draw Registration',
  'Event Participation',
  'Sponsorship Opportunity',
  'Press & Media',
  'Vendor Booth',
  'VIP Access',
  'Other',
];

type FormState = 'idle' | 'submitting' | 'success';

const ThreeCards = () => {
  const { openModal } = useRegisterModal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [subject, setSubject] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [formState, setFormState] = useState<FormState>('idle');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formState !== 'success') return;
    const timer = setTimeout(() => {
      setFormState('idle');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubject('');
    }, 3000);
    return () => clearTimeout(timer);
  }, [formState]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1800);
  };

  return (
    <section className="w-full bg-[#f8f9fa] py-10 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        
        {/* ================= CARD 1: ABOUT FEDERATION (LEFT - 4 COLS) ================= */}
        <div className="lg:col-span-4 h-full bg-gradient-to-br from-[#023319] via-[#022a15] to-[#011a0d] text-white rounded-2xl p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden shadow-sm">
          
          {/* Subtle Skyline Line Art Overlay in Background */}
          <div 
            className="absolute right-0 bottom-0 w-full h-[75%] pointer-events-none opacity-20 bg-contain bg-right-bottom bg-no-repeat"
            style={{ backgroundImage: 'url("/images/minar.png")' }}
          />

          <div className="relative z-10">
            <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wide life text-white mb-6 leading-snug">
              ABOUT FEDERATION OF<br />PAKISTAN AUSTRALIA
            </h2>

            <p className="text-gray-200 text-xs sm:text-sm leading-relaxed plus mb-8">
              We are committed to building strong ties between Pakistan and Australia through community engagement, cultural exchange, and support for the Pakistani diaspora.
            </p>
          </div>

          {/* Learn More Button */}
          <div className="relative z-10 pt-4 flex md:flex-row flex-col gap-2">
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-amber-300/40 bg-white/5 hover:bg-white/10 text-white text-xs font-medium uppercase tracking-wider transition-all duration-300 hover:border-amber-300 group cursor-pointer plus"
            >
              <span>LEARN MORE</span>
              <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={openModal}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-amber-300/40 bg-white/5 hover:bg-white/10 text-white text-xs font-medium uppercase tracking-wider transition-all duration-300 hover:border-amber-300 group cursor-pointer plus"
            >
              <span>REGISTER NOW</span>
              <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* ================= CARD 2: VENUE (MIDDLE - 4 COLS) ================= */}
        <div className="lg:col-span-4 h-full bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
          
          <div>
            <span className="text-xs font-medium uppercase tracking-wide plus text-[#0F3A22]">
              VENUE
            </span>
            
            <h3 className="text-base sm:text-lg life font-bold text-[#0F3A22] uppercase tracking-wide mt-1">
              FAIRFIELD SHOWGROUND
            </h3>

            <p className="text-xs text-slate-500 mt-1 plus leading-relaxed">
              Smithfield Rd, Prairiewood<br />
              NSW 2176, Australia
            </p>

            {/* Venue Image */}
            <div className="w-full h-40 sm:h-40 rounded-2xl overflow-hidden my-4 shadow-sm border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&q=100&w=2000"
                alt="Fairfield Showground Venue"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Amenities Row */}
          <div className="grid grid-cols-4 gap-2 pt-3 border-t border-slate-100 text-center">
            
            {/* Parking */}
            <div className="flex flex-col items-center">
              <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 mb-1">
                <Car className="w-5 h-5 stroke-[1.8]" />
              </div>
              <span className="text-[11px] font-bold life uppercase text-slate-900">PARKING</span>
              <span className="text-[10px] text-slate-700 plus">Available</span>
            </div>

            {/* Train */}
            <div className="flex flex-col items-center">
              <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 mb-1">
                <Train className="w-5 h-5 stroke-[1.8]" />
              </div>
              <span className="text-[11px] font-bold uppercase life text-slate-900">TRAIN</span>
              <span className="text-[10px] text-slate-700 plus">Station</span>
            </div>

            {/* Bus */}
            <div className="flex flex-col items-center">
              <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 mb-1">
                <Bus className="w-5 h-5 stroke-[1.8]" />
              </div>
              <span className="text-[11px] font-bold uppercase life text-slate-900">BUS</span>
              <span className="text-[10px] text-slate-700 plus">Easy Access</span>
            </div>

            {/* Accessible */}
            <div className="flex flex-col items-center">
              <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 mb-1">
                <Accessibility className="w-5 h-5 stroke-[1.8]" />
              </div>
              <span className="text-[11px] font-bold uppercase life text-slate-900">ACCESSIBLE</span>
              <span className="text-[10px] text-slate-700 plus">Wheelchair</span>
            </div>

          </div>

        </div>

        {/* ================= CARD 3: ENQUIRY FORM (RIGHT - 4 COLS) ================= */}
        <div className="lg:col-span-4 h-full bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
          
          <div className="flex flex-col h-full justify-between">
            <h2 className="text-base sm:text-lg font-bold uppercase tracking-wide life text-[#0F3A22] mb-4">
              ENQUIRY FORM
            </h2>

            {formState === 'success' ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center py-10">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-base font-bold text-slate-900 life">Inquiry Submitted</h3>
                <p className="text-xs text-slate-500 mt-1.5 plus max-w-[220px]">
                  Thank you for reaching out. Our team will respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 flex-1 flex flex-col justify-between">
                
                <div className="space-y-3">
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all plus"
                      />
                    </div>

                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all plus"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Subject Dropdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all plus"
                      />
                    </div>

                    {/* Subject Dropdown */}
                    <div ref={dropdownRef} className="relative">
                      <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 z-10" />
                      <button
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className={`w-full flex items-center justify-between pl-10 pr-3 py-2.5 bg-slate-50 border rounded-xl text-xs sm:text-sm transition-all duration-200 plus text-left ${
                          dropdownOpen ? 'border-emerald-600 bg-white' : 'border-slate-200'
                        } ${subject ? 'text-slate-800' : 'text-slate-400'}`}
                      >
                        <span className="truncate">{subject || 'Subject'}</span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {dropdownOpen && (
                        <ul className="absolute z-30 mt-1.5 w-full rounded-xl border border-slate-200 bg-white shadow-lg overflow-hidden max-h-48 overflow-y-auto">
                          {INQUIRY_OPTIONS.map((opt) => (
                            <li key={opt}>
                              <button
                                type="button"
                                onClick={() => { setSubject(opt); setDropdownOpen(false); }}
                                className={`w-full text-left px-4 py-2.5 text-xs plus transition-colors duration-150 ${
                                  subject === opt
                                    ? 'text-emerald-700 bg-emerald-50 font-medium'
                                    : 'text-slate-600 hover:bg-slate-50'
                                }`}
                              >
                                {opt}
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Message Textarea */}
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <textarea
                      name="message"
                      required
                      rows={7}
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all plus resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#024021] to-[#012613] hover:from-[#03522b] hover:to-[#023319] text-white text-xs font-medium uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer plus disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <span className={`inline-flex items-center gap-2 transition-opacity duration-200 ${formState === 'submitting' ? 'opacity-0' : 'opacity-100'}`}>
                      SEND MESSAGE
                      <Send className="w-4 h-4 text-white" />
                    </span>
                    {formState === 'submitting' && (
                      <span className="absolute inset-0 flex items-center justify-center gap-2">
                        <svg className="animate-spin w-4 h-4 text-white/80" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Submitting...
                      </span>
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ThreeCards;