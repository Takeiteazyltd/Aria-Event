import React from 'react'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Button from '../ui/Button'

const BundleCard = ({ bundle }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={bundle.recommended ? 'ring-2 ring-secondary-500' : ''}
    >
      <Card hoverable className={`h-full flex flex-col p-6 ${bundle.recommended ? 'bg-secondary-50' : ''}`}>
        {/* Recommended Badge */}
        {bundle.recommended && (
          <Badge variant="secondary" size="sm" className="w-fit mb-3">
            מומלץ!
          </Badge>
        )}

        {/* Title */}
        <h3 className="text-2xl font-bold mb-2 text-gray-900">{bundle.title}</h3>

        {/* Description */}
        <p className="text-gray-600 mb-4">{bundle.description}</p>

        {/* Event Type */}
        <Badge variant="primary" size="sm" className="w-fit mb-4">
          {bundle.eventType}
        </Badge>

        {/* Price */}
        <div className="mb-4">
          <p className="text-sm text-gray-500 line-through">{bundle.originalPrice}</p>
          <p className="text-3xl font-bold text-secondary-600">{bundle.price}</p>
          <p className="text-xs text-gray-500 mt-1">{bundle.guests}</p>
        </div>

        {/* Attractions */}
        <div className="mb-6">
          <p className="text-sm font-semibold mb-2">כלול באטרקציות:</p>
          <ul className="space-y-2">
            {bundle.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                <Check size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <Button variant="secondary" size="lg" className="w-full">
          בקש הצעת מחיר
        </Button>
      </Card>
    </motion.div>
  )
}

export default BundleCard
