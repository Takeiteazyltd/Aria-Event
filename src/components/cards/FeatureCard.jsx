import React from 'react'
import { motion } from 'framer-motion'
import Card from '../ui/Card'

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card hoverable className="h-full p-6 flex flex-col items-center text-center">
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ duration: 0.3 }}
          className="mb-4"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center">
            <Icon size={32} className="text-primary-600" />
          </div>
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>

        {/* Description */}
        <p className="text-gray-600">{description}</p>
      </Card>
    </motion.div>
  )
}

export default FeatureCard
