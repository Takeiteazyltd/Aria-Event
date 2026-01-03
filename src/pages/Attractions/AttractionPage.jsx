import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Star, MapPin, Users, Clock, Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { attractions } from '@data/attractions'
import Button from '@components/ui/Button'
import Card from '@components/ui/Card'
import Badge from '@components/ui/Badge'
import Accordion from '@components/ui/Accordion'

const AttractionPage = () => {
  const { slug } = useParams()
  const attraction = attractions.find((a) => a.slug === slug)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const images = attraction?.images && attraction.images.length > 0
    ? attraction.images
    : [attraction?.image || 'https://picsum.photos/seed/placeholder/800/600']

  // Auto-play slideshow
  useEffect(() => {
    if (!autoPlay || images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [autoPlay, images.length])

  const goToImage = (index) => {
    setCurrentImageIndex(index)
    setAutoPlay(false)
    // Resume auto-play after 10 seconds of user interaction
    setTimeout(() => setAutoPlay(true), 10000)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
    setAutoPlay(false)
    setTimeout(() => setAutoPlay(true), 10000)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
    setAutoPlay(false)
    setTimeout(() => setAutoPlay(true), 10000)
  }

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
        {/* Main Image Carousel */}
        <div className="w-full relative bg-gray-200 overflow-hidden group">
          <div className="w-full h-96 relative">
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt={`${attraction.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              onError={(e) => {
                e.target.src = 'https://picsum.photos/seed/placeholder/800/600'
              }}
            />

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-all z-10 opacity-0 group-hover:opacity-100"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-all z-10 opacity-0 group-hover:opacity-100"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>

        {/* Thumbnail Gallery */}
        {images.length > 1 && (
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
            {images.map((image, idx) => (
              <motion.button
                key={idx}
                onClick={() => goToImage(idx)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  idx === currentImageIndex
                    ? 'border-primary-600 ring-2 ring-primary-400'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://picsum.photos/seed/placeholder/100/100'
                  }}
                />
              </motion.button>
            ))}
          </div>
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
