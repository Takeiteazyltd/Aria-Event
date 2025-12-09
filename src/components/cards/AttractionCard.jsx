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
    <motion.div whileHover={{ y: -12 }} transition={{ duration: 0.4, type: 'spring' }}>
      <Card hoverable className="h-full flex flex-col overflow-hidden card-enhanced shadow-lg hover:shadow-glow-lg">
        {/* Image Section */}
        <div className="relative overflow-hidden h-48 bg-gradient-to-br from-gray-300 to-gray-400">
          <motion.img
            src={attraction.images?.[0] || ''}
            alt={attraction.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-25 transition-all" />

          {/* Favorite Button */}
          <motion.button
            onClick={() => toggleFavorite(attraction.id)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-3 left-3 p-2 bg-white rounded-full shadow-glow-md hover:shadow-glow-lg transition-all border-2 border-red-100"
          >
            <Heart
              size={20}
              className={favorite ? 'fill-red-500 text-red-500 animate-bounce-slow' : 'text-gray-300 hover:text-red-400'}
            />
          </motion.button>

          {/* Category Badge */}
          <Badge variant="primary" size="sm" className="absolute bottom-3 left-3 badge-glow font-bold text-white">
            {attraction.category}
          </Badge>
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col flex-grow bg-gradient-to-b from-white to-gray-50">
          <h3 className="text-lg font-bold mb-2 text-primary-700">{attraction.title}</h3>

          <p className="text-sm text-gray-600 mb-3 flex-grow">{attraction.shortDescription}</p>

          {/* Rating */}
          {attraction.rating && (
            <div className="flex items-center gap-1 mb-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < Math.round(attraction.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                ({attraction.reviewCount})
              </span>
            </div>
          )}

          {/* Price and Duration */}
          <div className="flex items-center justify-between mb-4 py-3 border-t-2 border-primary-100">
            <span className="font-bold text-lg text-gradient-enhanced">{attraction.price}</span>
            <span className="text-xs font-semibold text-primary-500 bg-primary-50 px-2 py-1 rounded-full">{attraction.duration}</span>
          </div>

          {/* Button */}
          <Link to={`/attraction/${attraction.slug}`} className="w-full">
            <Button variant="primary" size="md" className="w-full font-bold">
              צפה בפרטים ⭐
            </Button>
          </Link>
        </div>
      </Card>
    </motion.div>
  )
}

export default AttractionCard
