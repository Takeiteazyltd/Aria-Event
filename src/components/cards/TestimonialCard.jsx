import React from 'react'
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'
import Card from '../ui/Card'
import Badge from '../ui/Badge'

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
      <Card className="h-full flex flex-col p-6">
        {/* Quote */}
        <p className="text-gray-700 italic mb-4 flex-grow">"{testimonial.text}"</p>

        {/* Author Section */}
        <div className="border-t-2 border-gray-100 pt-4">
          <div className="flex items-center gap-4 mb-3">
            <img
              src={testimonial.image}
              alt={testimonial.author}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-gray-900">{testimonial.author}</p>
              <Badge variant="secondary" size="sm">
                {testimonial.eventType}
              </Badge>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < testimonial.rating
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }
              />
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default TestimonialCard
