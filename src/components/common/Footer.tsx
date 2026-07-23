import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert('Thank you for subscribing to our newsletter!');
      setEmail('');
    }
  };

  return (
    <footer className="relative w-full bg-[#01142b] text-white overflow-hidden select-none border-t border-emerald-900/30">
      
      {/* ================= BACKGROUND GRADIENT SPLIT ================= */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#012b13] via-[#021f1d] via-60% to-[#01122a] opacity-95 pointer-events-none" />

      {/* ================= FAR RIGHT SKYLINE GRAPHIC ================= */}
      {/* <div className="absolute right-0 bottom-0 top-0 w-full sm:w-[45%] pointer-events-none z-0 flex items-end justify-end opacity-30 mix-blend-screen">
        <img 
          src="/flags/karachi.png" 
          alt="Pakistan Landmark" 
          className="h-[85%] object-contain object-bottom -mr-10 filter drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]" 
        />
        <img 
          src="/flags/australia.png" 
          alt="Sydney Opera House" 
          className="h-[85%] object-contain object-bottom filter drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]" 
        />
      </div> */}

      {/* ================= MAIN FOOTER CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* BRAND COLUMN (Left - 4 Cols) */}
          <div className="md:col-span-4 flex items-center gap-3.5">
            <img 
              src="/images/federalLogo.png" 
              alt="Federation of Pakistan Australia Logo" 
              className="h-16 w-16 sm:h-30 sm:w-30 rounded-full object-contain shrink-0" 
            />
            <div className="flex flex-col text-left">
              <span className="text-[11px] sm:text-xs tracking-wide text-[#e2a82b] font-medium plus uppercase leading-tight">
                FEDERATION OF
              </span>
              <span className="text-base sm:text-lg font-bold life tracking-wide text-white uppercase leading-tight mt-0.5">
                PAKISTAN AUSTRALIA
              </span>

              {/* Tagline */}
              <p className="life italic text-amber-100/90 text-xs sm:text-sm mt-2 tracking-wide">
                Together We Celebrate Freedom
              </p>
              <p className="text-[10px] sm:text-xs font-medium plus text-gray-300 tracking-wide uppercase mt-0.5">
                Unity • Diversity • Friendship
              </p>
            </div>
          </div>

          {/* QUICK LINKS COLUMN (Center - 4 Cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs sm:text-sm font-bold life uppercase tracking-wide text-white mb-3">
              QUICK LINKS
            </h4>
            
            <div className="grid grid-cols-2 plus gap-x-4 gap-y-1.5 text-sm text-gray-300 font-medium">
              {/* Left Sub-Column */}
              <div className="flex flex-col space-y-1.5">
                <a href="#home" className="hover:text-amber-300 transition-colors">Home</a>
                <a href="#highlights" className="hover:text-amber-300 transition-colors">Highlights</a>
                <a href="#about" className="hover:text-amber-300 transition-colors">Events</a>
                <a href="#schedule" className="hover:text-amber-300 transition-colors">Event Schedule</a>
              </div>

              {/* Right Sub-Column */}
              <div className="flex flex-col space-y-1.5">
                <a href="#sponsorship" className="hover:text-amber-300 transition-colors">Sponsors</a>
                <a href="#presented" className="hover:text-amber-300 transition-colors">Presented By</a>
                <a href="#contact" className="hover:text-amber-300 transition-colors">Contact</a>
              </div>
            </div>
          </div>

          {/* FOLLOW US & NEWSLETTER COLUMN (Right - 4 Cols) */}
          <div className="md:col-span-4 flex flex-col justify-center">
            
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wide life text-white mb-2.5">
              FOLLOW US
            </h4>

            {/* Social Icons Row */}
            <div className="flex items-center gap-2.5 mb-4">
              {/* Facebook */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-transform shadow"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white hover:scale-110 transition-transform shadow"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>

            {/* Newsletter Subscription */}
            <p className="text-xs text-gray-200 font-medium plus mb-1.5">
              Pre-register for Federation Of Pakistan Australia Event
            </p>

            <form onSubmit={handleSubscribe} className="flex items-center max-w-sm">
              <input 
                type="email" 
                required
                placeholder="Your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white text-slate-800 placeholder-slate-700 text-xs px-3.5 py-2 rounded-l-md focus:outline-none plus"
              />
              <button 
                type="submit" 
                aria-label="Subscribe"
                className="bg-[#023319] hover:bg-[#034d26] border border-amber-300/30 px-3.5 py-2 rounded-r-md text-white transition-colors flex items-center justify-center cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 text-white" />
              </button>
            </form>

          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;