import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Check, User, Mail, Phone, X, Sparkles } from 'lucide-react'
import { useRegisterModal } from './RegisterModalContext'

type FormState = 'idle' | 'submitting' | 'success'

const RegisterModal = () => {
  const { isOpen, closeModal } = useRegisterModal()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [formState, setFormState] = useState<FormState>('idle')

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !phone.trim()) return
    setFormState('submitting')
    setTimeout(() => {
      setFormState('success')
      setTimeout(() => {
        setFormState('idle')
        setName('')
        setEmail('')
        setPhone('')
        closeModal()
      }, 2200)
    }, 1800)
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) closeModal()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: 'spring', damping: 28, stiffness: 350 }}
            className="relative w-full max-w-md bg-gradient-to-b from-[#021d12] via-[#020b14] to-[#01132e] border border-amber-400/20 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Ambient glows */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-40 bg-[#f1c252]/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-[#003818]/30 rounded-full blur-2xl pointer-events-none" />

            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-gray-400 hover:text-white transition-all cursor-pointer z-20"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative z-10 p-6 sm:p-8">
              {formState === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center mb-4">
                    <Check className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white life">Registration Successful!</h3>
                  <p className="text-sm text-gray-400 mt-2 plus max-w-[260px]">
                    We'll send you all the event details soon. See you there!
                  </p>
                </motion.div>
              ) : (
                <>
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-[#f1c252] text-[10px] sm:text-xs font-semibold tracking-wider uppercase plus mb-3">
                      <Sparkles className="w-3 h-3" />
                      Limited Slots • Free Entry
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold life uppercase tracking-wide text-white">
                      Register Now
                    </h2>
                    <p className="text-xs plus text-gray-400 mt-1">
                      Secure your free spot at the celebration
                    </p>
                    {/* Star Divider */}
                    <div className="flex items-center justify-center gap-3 mt-3">
                      <div className="w-10 h-[1px] bg-amber-400/30" />
                      <svg className="w-2.5 h-2.5 text-amber-400 fill-amber-400" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <div className="w-10 h-[1px] bg-amber-400/30" />
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-3">
                    {/* Name */}
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full pl-10 pr-3.5 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#f1c252]/50 focus:bg-white/[0.06] transition-all plus"
                      />
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full pl-10 pr-3.5 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#f1c252]/50 focus:bg-white/[0.06] transition-all plus"
                      />
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full pl-10 pr-3.5 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#f1c252]/50 focus:bg-white/[0.06] transition-all plus"
                      />
                    </div>

                    {/* Submit */}
                    <div className="pt-1">
                      <button
                        type="submit"
                        disabled={formState === 'submitting'}
                        className="relative w-full py-3.5 rounded-xl bg-gradient-to-r from-[#f1c252] via-[#e5b23d] to-[#c7921e] hover:brightness-110 text-[#020b14] font-medium plus text-sm uppercase tracking-wide flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(241,194,82,0.2)] transition-all cursor-pointer active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        <span className={`inline-flex items-center gap-2 transition-opacity duration-200 ${formState === 'submitting' ? 'opacity-0' : 'opacity-100'}`}>
                          REGISTER FREE
                          <Send className="w-4 h-4" />
                        </span>
                        {formState === 'submitting' && (
                          <span className="absolute inset-0 flex items-center justify-center gap-2">
                            <svg className="animate-spin w-4 h-4 text-[#020b14]/70" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Submitting...
                          </span>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default RegisterModal
