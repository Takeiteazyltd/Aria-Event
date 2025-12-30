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
    <motion.div
      className="bg-white rounded-[2rem] overflow-hidden shadow-md border border-gray-50 flex flex-col group transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="w-full aspect-square overflow-hidden relative">
        <img 
          src={attraction.images?.[0] || attraction.image || 'https://picsum.photos/seed/attraction-placeholder/800/600'} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          alt={attraction.title}
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
      <div className="p-6 flex flex-col items-center text-center">
        <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">{attraction.title}</h3>
        <Link to={`/attraction/${attraction.slug}`} className="w-full">
          <Button variant="outline" className="w-full !rounded-full">לפרטים נוספים</Button>
        </Link>
      </div>
    </motion.div>
  )
}

export default AttractionCard
