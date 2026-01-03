import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Star, MapPin, Users, Clock, Check, X } from 'lucide-react'
import { attractions } from '@data/attractions'
import Button from '@components/ui/Button'
import Card from '@components/ui/Card'
import Badge from '@components/ui/Badge'
import Accordion from '@components/ui/Accordion'

const AttractionPage = () => {
  const { slug } = useParams()
  const attraction = attractions.find((a) => a.slug === slug)
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)

  const images = attraction?.images && attraction.images.length > 0
    ? attraction.images
    : [attraction?.image || 'https://picsum.photos/seed/placeholder/800/600']

  if (!attraction) {
    return (
      <div className="container-max py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">האטרקציה לא נמצאה</h1>
      </div>
    )
  }

  const faqItems = attraction.faq.map((item, idx) => ({
    id: idx,
    question: item.question,
    answer: item.answer,
  }))

  return (
    <>
      <Helmet>
        <title>{attraction.title} | Photo Style</title>
        <meta name="description" content={attraction.shortDescription} />
      </Helmet>

      {/* Hero */}
      <section className="pt-36 pb-4">
        <div className="container-max">
          <h1 className="text-5xl font-bold mb-6">{attraction.title}</h1>
          <Badge variant="primary" size="lg">
            {attraction.category}
          </Badge>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="mb-10">
        <div className="container-max px-4">
          <div 
            className="columns-2 lg:columns-3 xl:columns-4"
            style={{ 
              columnGap: '1rem'
            }}
          >
            {images.map((image, idx) => (
              <motion.img
                key={idx}
                src={image}
                alt={`${attraction.title} - Image ${idx + 1}`}
                className="h-auto max-h-96 rounded-xl cursor-pointer mb-4 break-inside-avoid"
                style={{ 
                  display: 'block',
                  width: 'auto',
                  maxWidth: '100%',
                  borderRadius: '0.75rem'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedImageIndex(idx)}
                whileHover={{ scale: 1.02 }}
                onError={(e) => {
                  e.target.src = 'https://picsum.photos/seed/placeholder/800/600'
                }}
              />
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImageIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIndex(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              onClick={() => setSelectedImageIndex(null)}
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <motion.img
              src={images[selectedImageIndex]}
              alt={`${attraction.title} - Image ${selectedImageIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain rounded-xl"
              style={{ borderRadius: '0.75rem' }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                e.target.src = 'https://picsum.photos/seed/placeholder/800/600'
              }}
            />
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                {selectedImageIndex + 1} / {images.length}
              </div>
            )}
          </motion.div>
        )}
      </section>

      {/* Main Content */}
      <section className="py-10 pb-20">
        <div className="container-max grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div>
              <h2 className="text-3xl font-bold mb-4">תיאור</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {attraction.fullDescription}
              </p>
            </div>

            {/* What's Included */}
            <div>
              <h2 className="text-3xl font-bold mb-4">מה כלול</h2>
              <ul className="space-y-2">
                {attraction.included.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <Check size={20} className="text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ */}
            {faqItems.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-4">שאלות נפוצות</h2>
                <Accordion items={faqItems} />
              </div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div>
            <Card className="p-8 sticky top-24">
              {/* Price */}
              <div className="mb-6">
                <p className="text-gray-600 mb-2">מחיר:</p>
                <p className="text-4xl font-bold text-primary-600">{attraction.price}</p>
              </div>

              {/* Info */}
              <div className="space-y-4 mb-6 pb-6 border-b-2 border-gray-200">
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-primary-600" />
                  <span className="text-gray-700">{attraction.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={20} className="text-primary-600" />
                  <span className="text-gray-700">{attraction.groupSize}</span>
                </div>
                {attraction.rating && (
                  <div className="flex items-center gap-2">
                    <Star size={20} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-gray-700">
                      {attraction.rating} ({attraction.reviewCount} ביקורות)
                    </span>
                  </div>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Button variant="primary" size="lg" className="w-full">
                  בקש הצעת מחיר
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  הוסף למועדפים
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

export default AttractionPage
