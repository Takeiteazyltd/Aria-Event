import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import { useFavorites } from '@hooks/useFavorites'

const AttractionCard = ({ attraction }) => {
  const { isFavorite, toggleFavorite } = useFavorites()
  const favorite = isFavorite(attraction.id)

  return (
    <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
      <div className="h-full flex flex-col overflow-hidden bg-white rounded-[2rem] shadow-lg border border-gray-50 group">
        {/* Image Section */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <motion.img
            src={attraction.images?.[0] || attraction.image || ''}
            alt={attraction.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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

        {/* Content Section */}
        <div className="p-6 flex flex-col items-center text-center flex-grow">
          <Badge variant="ghost" size="sm" className="mb-3 !text-brand-pink font-extrabold uppercase tracking-widest text-[10px]">
            {attraction.category}
          </Badge>

          <h3 className="text-xl font-bold mb-3 text-brand-navy">{attraction.title}</h3>

          <p className="text-sm text-gray-500 mb-6 flex-grow font-semibold line-clamp-2">
            {attraction.shortDescription}
          </p>

          <div className="w-full pt-4 border-t border-gray-100 flex items-center justify-center gap-4 mb-6">
            <span className="font-extrabold text-brand-pink text-lg">{attraction.price} / </span>
            <span className="text-xs font-bold text-gray-400">{attraction.duration}</span>
          </div>

          <Link to={`/attraction/${attraction.slug}`} className="w-full">
            <Button variant="primary" size="md" className="w-full !rounded-full font-bold shadow-md hover:shadow-xl">
              קראו עוד
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default AttractionCard
