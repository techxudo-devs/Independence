import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  User,
  Mail,
  MessageSquare,
  Check,
  Calendar,
  Clock,
  MapPin,
} from "lucide-react";

const INQUIRY_OPTIONS = [
  "General Inquiry",
  "Lucky Draw Registration",
  "Event Participation",
  "Sponsorship Opportunity",
  "Press & Media",
  "Vendor Booth",
  "VIP Access",
  "Other",
];

type FormState = "idle" | "submitting" | "success";

const Contact = () => {
  const [formState, setFormState] = useState<FormState>("idle");
  const [inquiry, setInquiry] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formState !== "success") return;
    const timer = setTimeout(() => setFormState("idle"), 3000);
    return () => clearTimeout(timer);
  }, [formState]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => setFormState("success"), 1800);
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#031a0b] via-[#040d06] to-[#020904]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_50%,rgba(16,185,129,0.06),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_20%_70%,rgba(5,150,105,0.04),transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent" />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl md:text-5xl font-black leading-[1.05] text-white life">
              <span className="block">Let&apos;s Make</span>
              <span className="block mt-1 bg-gradient-to-r from-emerald-300 via-emerald-400 to-green-300 bg-clip-text text-transparent">
                This Happen
              </span>
            </h1>

            <p className="mt-5 max-w-md text-sm md:text-base text-white/40 font-light leading-relaxed plus">
              Questions about the lucky draw, sponsorship, or event
              participation? Reach out and our team will get back to you within
              24 hours.
            </p>

            {/* Event Details */}
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl border border-white/[0.06] bg-white/[0.02] flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-emerald-400/70" />
                </div>
                <div>
                  <p className="text-xs text-white/25 uppercase tracking-wider font-medium plus">
                    Date
                  </p>
                  <p className="text-sm text-white/70 font-medium plus">
                    August 14, 2025 — Thursday
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl border border-white/[0.06] bg-white/[0.02] flex items-center justify-center">
                  <Clock className="w-4 h-4 text-emerald-400/70" />
                </div>
                <div>
                  <p className="text-xs text-white/25 uppercase tracking-wider font-medium plus">
                    Time
                  </p>
                  <p className="text-sm text-white/70 font-medium plus">
                    6:00 PM — 10:00 PM (4 Hours)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl border border-white/[0.06] bg-white/[0.02] flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-emerald-400/70" />
                </div>
                <div>
                  <p className="text-xs text-white/25 uppercase tracking-wider font-medium plus">
                    Venue
                  </p>
                  <p className="text-sm text-white/70 font-medium plus">
                    Fairfield Showgrounds - Smithfield Road, Prairiewood NSW 2176
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative rounded-2xl border border-white/[0.05] bg-white/[0.015] backdrop-blur-sm p-4 md:p-6">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-emerald-500/[0.03] to-transparent pointer-events-none" />

              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
                      <Check className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white life">
                      Inquiry Submitted
                    </h3>
                    <p className="mt-2 text-sm text-white/35 max-w-xs plus">
                      Thank you for reaching out. Our team will review your
                      message and respond within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    className="relative space-y-4"
                  >
                    {/* Full Name */}
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-white/25 font-medium mb-2 plus">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-sm text-white/80 placeholder:text-white/15 focus:outline-none focus:border-emerald-500/30 focus:bg-white/[0.04] transition-all duration-300 plus"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-white/25 font-medium mb-2 plus">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                        <input
                          type="email"
                          required
                          placeholder="john@example.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-sm text-white/80 placeholder:text-white/15 focus:outline-none focus:border-emerald-500/30 focus:bg-white/[0.04] transition-all duration-300 plus"
                        />
                      </div>
                    </div>

                    {/* Inquiry Type */}
                    <div ref={dropdownRef}>
                      <label className="block text-[10px] uppercase tracking-wider text-white/25 font-medium mb-2 plus">
                        Inquiry Type
                      </label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.03] border text-sm transition-all duration-300 plus ${
                            dropdownOpen
                              ? "border-emerald-500/30 bg-white/[0.04]"
                              : "border-white/[0.06]"
                          } ${inquiry ? "text-white/80" : "text-white/15"}`}
                        >
                          <span>{inquiry || "Select inquiry type"}</span>
                          <svg
                            className={`w-4 h-4 text-white/20 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {dropdownOpen && (
                            <motion.ul
                              initial={{ opacity: 0, y: -8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              transition={{ duration: 0.2 }}
                              className="absolute z-30 mt-2 w-full rounded-xl border border-white/[0.06] bg-[#0a1a0e] backdrop-blur-xl shadow-2xl overflow-hidden"
                            >
                              {INQUIRY_OPTIONS.map((opt) => (
                                <li key={opt}>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setInquiry(opt);
                                      setDropdownOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-2.5 text-sm plus transition-colors duration-150 ${
                                      inquiry === opt
                                        ? "text-emerald-300 bg-emerald-500/10"
                                        : "text-white/50 hover:text-white/70 hover:bg-white/[0.03]"
                                    }`}
                                  >
                                    {opt}
                                  </button>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-white/25 font-medium mb-2 plus">
                        Message
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-white/20" />
                        <textarea
                          required
                          rows={4}
                          placeholder="Tell us about your inquiry..."
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-sm text-white/80 placeholder:text-white/15 focus:outline-none focus:border-emerald-500/30 focus:bg-white/[0.04] transition-all duration-300 resize-none plus"
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={formState === "submitting"}
                      className="relative w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white text-sm font-bold tracking-wide plus transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden group cursor-pointer"
                    >
                      <span
                        className={`inline-flex items-center gap-2 transition-opacity duration-200 ${formState === "submitting" ? "opacity-0" : "opacity-100"}`}
                      >
                        Submit Inquiry
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                      </span>
                      {formState === "submitting" && (
                        <span className="absolute inset-0 flex items-center justify-center gap-2">
                          <svg
                            className="animate-spin w-4 h-4 text-white/80"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Submitting...
                        </span>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
