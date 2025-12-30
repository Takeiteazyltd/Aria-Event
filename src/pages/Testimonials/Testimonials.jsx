import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { testimonials } from '@data/testimonials'
import TestimonialCard from '@components/cards/TestimonialCard'

const Testimonials = () => {
  const [selectedType, setSelectedType] = useState('הכל')
  const types = ['הכל', ...new Set(testimonials.map((t) => t.eventType))]
  const filtered =
    selectedType === 'הכל'
      ? testimonials
      : testimonials.filter((t) => t.eventType === selectedType)

  return (
    <>
      <Helmet>
        <title>המלצות מלקוחות | Photo Style</title>
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[300px] flex items-center justify-center pt-20 bg-gradient-to-r from-secondary-600 to-primary-600 text-white">
        <div className="container-max text-center">
          <h1 className="text-5xl font-bold mb-4">מה הלקוחות שלנו אומרים</h1>
          <p className="text-xl opacity-90">
            המלצות מחוזקות מאנשים שחוו את הקסם של Photo Style
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-10 bg-gray-50 border-b-2 border-gray-200">
        <div className="container-max">
          <div className="flex flex-wrap gap-2 justify-center">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  selectedType === type
                    ? 'bg-secondary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials
