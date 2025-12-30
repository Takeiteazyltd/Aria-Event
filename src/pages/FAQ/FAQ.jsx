import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { faq } from '@data/faq'
import Accordion from '@components/ui/Accordion'
import Input from '@components/ui/Input'
import { Search } from 'lucide-react'

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('הכל')

  const categories = ['הכל', ...new Set(faq.map((f) => f.category))]
  const filtered = faq.filter(
    (f) =>
      (selectedCategory === 'הכל' || f.category === selectedCategory) &&
      f.question.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const faqItems = filtered.map((f) => ({
    id: f.id,
    question: f.question,
    answer: f.answer,
  }))

  return (
    <>
      <Helmet>
        <title>שאלות נפוצות | Photo Style</title>
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[300px] flex items-center justify-center pt-36 bg-brand-beige text-[#1a1a1a]">
        <div className="container-max text-center">
          <h1 className="text-5xl font-bold mb-4">שאלות נפוצות</h1>
          <p className="text-xl opacity-80 font-bold">
            הנה תשובות לשאלות הנפוצות שלנו
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="pt-6 pb-10 bg-gray-50 border-b-2 border-gray-200">
        <div className="container-max space-y-4">
          <div className="relative">
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="חפש שאלה..."
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

      {/* FAQ */}
      <section className="py-20">
        <div className="container-max max-w-3xl">
          {faqItems.length > 0 ? (
            <Accordion items={faqItems} />
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl font-bold text-gray-700 mb-4">לא נמצאו שאלות</p>
              <p className="text-gray-600">נסה לחפש מחדש או לבחור קטגוריה אחרת</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">עדיין יש שאלה?</h2>
          <p className="text-gray-600 mb-8">צור קשר איתנו ונענה בשמחה</p>
        </div>
      </section>
    </>
  )
}

export default FAQ
