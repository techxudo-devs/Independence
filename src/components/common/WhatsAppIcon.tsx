import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/61400000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8 text-[#25D366]" />
    </a>
  )
}

export default WhatsAppIcon
