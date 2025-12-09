import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Accordion = ({ items, allowMultiple = false, className = '' }) => {
  const [openItems, setOpenItems] = useState([])

  const toggleItem = (id) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      )
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]))
    }
  }

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <div key={item.id} className="border-2 border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-right text-gray-900">{item.question}</span>
            <ChevronDown
              size={20}
              className={`transition-transform duration-300 ${
                openItems.includes(item.id) ? 'rotate-180' : ''
              }`}
              style={{ marginRight: '0', marginLeft: '1rem' }}
            />
          </button>
          <AnimatePresence>
            {openItems.includes(item.id) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t-2 border-gray-200 bg-gray-50"
              >
                <p className="px-6 py-4 text-gray-700">{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

export default Accordion
