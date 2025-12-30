import React from 'react'
import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'
import { useFavorites } from '@hooks/useFavorites'

const AttractionCard = ({ attraction }) => {
  const { isFavorite, toggleFavorite } = useFavorites()
  const favorite = isFavorite(attraction.id)

  return (
    <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
      <div className="h-full flex flex-col overflow-hidden bg-white rounded-[2rem] shadow-md border border-gray-50 group">
        {/* Image Section - Square aspect like featured products */}
        <div className="relative p-6 pb-0">
          <div className="w-full aspect-square rounded-2xl overflow-hidden relative">
            <motion.img
              src={attraction.images?.[0] || attraction.image || 'https://picsum.photos/seed/attraction-placeholder/800/600'}
              alt={attraction.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                e.target.src = 'https://picsum.photos/seed/attraction-placeholder/800/600'
              }}
            />
            <div className="absolute inset-0 bg-brand-navy opacity-0 group-hover:opacity-10 transition-opacity" />

            {/* Favorite Button */}
            <button
              onClick={() => toggleFavorite(attraction.id)}
              className="absolute top-4 left-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all z-10"
            >
              <Heart
                size={18}
                className={favorite ? 'fill-brand-pink text-brand-pink' : 'text-brand-navy/30'}
              />
            </button>
          </div>
        </div>

        {/* Content Section - Centered like featured products */}
        <div className="p-6 flex flex-col items-center text-center flex-grow">
          <h3 className="text-xl font-bold mb-4 text-[#1a1a1a]">{attraction.title}</h3>

          <Link to={`/attraction/${attraction.slug}`} className="w-full">
            <Button variant="outline" className="w-full !rounded-full">
              לפרטים נוספים
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default AttractionCard
