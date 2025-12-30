import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { attractions } from '@data/attractions'
import AttractionCard from '@components/cards/AttractionCard'
import Input from '@components/ui/Input'
import { Search } from 'lucide-react'

const AllAttractions = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('הכל')

  const categories = ['הכל', ...new Set(attractions.map((a) => a.category))]
  const filtered = attractions.filter(
    (a) =>
      (selectedCategory === 'הכל' || a.category === selectedCategory) &&
      a.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <Helmet>
        <title>כל האטרקציות | Photo Style</title>
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center justify-center pt-36 bg-brand-beige text-[#1a1a1a]">
        <div className="container-max text-center">
          <h1 className="text-5xl font-bold mb-4">כל האטרקציות שלנו</h1>
          <p className="text-xl opacity-80 font-bold">
            בחר מתוך {attractions.length} אטרקציות מדהימות
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="pt-6 pb-10 bg-gray-50 border-b-2 border-gray-200">
        <div className="container-max">
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="חפש אטרקציה..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-4 pr-12 shadow-none"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors duration-0 shadow-none hover:shadow-none ${
                    selectedCategory === cat
                      ? 'bg-[#1a1a1a] text-brand-cream'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#1a1a1a]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="container-max">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((attraction, idx) => (
                <motion.div
                  key={attraction.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                >
                  <AttractionCard attraction={attraction} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl font-bold text-gray-700 mb-4">לא נמצאו אטרקציות</p>
              <p className="text-gray-600">נסה לחפש מחדש או לבחור קטגוריה אחרת</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default AllAttractions
