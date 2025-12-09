import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { openWhatsApp } from '@utils/helpers'

const WhatsAppButton = () => {
  return (
    <motion.button
      onClick={() => openWhatsApp('שלום! אשמח לשמוע עוד על האטרקציות שלכם')}
      className="fixed bottom-6 left-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors z-40"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <MessageCircle size={28} />
    </motion.button>
  )
}

export default WhatsAppButton
