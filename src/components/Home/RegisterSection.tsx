import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Check, User, Mail } from 'lucide-react'

type FormState = 'idle' | 'submitting' | 'success'

const RegisterSection = () => {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [formState, setFormState] = useState<FormState>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !contact.trim()) return
    setFormState('submitting')
    setTimeout(() => {
      setFormState('success')
      setTimeout(() => {
        setFormState('idle')
        setName('')
        setContact('')
      }, 3000)
    }, 1800)
  }

  return (
    <section className="w-full bg-[#f8f9fa] py-10 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-3xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-slate-100"
        >
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-base sm:text-lg life font-bold uppercase tracking-wide text-[#0F3A22] mb-1">
              REGISTER NOW
            </h2>
            <p className="text-xs sm:text-sm plus text-slate-500">
              Secure your free spot at the celebration
            </p>

            {/* Star Divider */}
            <div className="flex items-center justify-center gap-3 mt-3">
              <div className="w-12 h-[1px] bg-amber-300" />
              <svg className="w-3 h-3 text-amber-500 fill-amber-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <div className="w-12 h-[1px] bg-amber-300" />
            </div>
          </div>

          {formState === 'success' ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-base font-bold text-slate-900 life">
                Registration Successful!
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 plus max-w-[240px]">
                We&apos;ll send you all the event details soon. See you there!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Name */}
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all plus"
                  />
                </div>

                {/* Email / Phone */}
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Email or Phone"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                    className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all plus"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="flex justify-center pt-1">
                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#024021] to-[#012613] hover:from-[#03522b] hover:to-[#023319] text-white text-xs font-medium uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer plus disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span className={`inline-flex items-center gap-2 transition-opacity duration-200 ${formState === 'submitting' ? 'opacity-0' : 'opacity-100'}`}>
                    REGISTER FREE
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
        </motion.div>

      </div>
    </section>
  )
}

export default RegisterSection
