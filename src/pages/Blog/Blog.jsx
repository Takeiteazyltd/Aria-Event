import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { blog } from '@data/blog'
import BlogCard from '@components/cards/BlogCard'
import Input from '@components/ui/Input'
import { Search } from 'lucide-react'

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('הכל')

  const categories = ['הכל', ...new Set(blog.map((b) => b.category))]
  const filtered = blog.filter(
    (b) =>
      (selectedCategory === 'הכל' || b.category === selectedCategory) &&
      b.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <Helmet>
        <title>בלוג | Aria Event</title>
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center justify-center pt-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-max text-center">
          <h1 className="text-5xl font-bold mb-4">הבלוג של Aria Event</h1>
          <p className="text-xl opacity-90">
            טיפים, השראה ורעיונות לאירוע המושלם
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-10 bg-gray-50 border-b-2 border-gray-200">
        <div className="container-max space-y-4">
          <div className="relative">
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="חפש מאמר..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-4 pr-12"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="container-max">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl font-bold text-gray-700 mb-4">לא נמצאו מאמרים</p>
              <p className="text-gray-600">נסה לחפש מחדש או לבחור קטגוריה אחרת</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Blog
