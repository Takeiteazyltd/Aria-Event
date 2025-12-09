import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import Button from '@components/ui/Button'
import { Link } from 'react-router-dom'
import { attractions } from '@data/attractions'
import { testimonials } from '@data/testimonials'
import { blog } from '@data/blog'
import AttractionCard from '@components/cards/AttractionCard'
import TestimonialCard from '@components/cards/TestimonialCard'
import BlogCard from '@components/cards/BlogCard'
import FeatureCard from '@components/cards/FeatureCard'
import {
  Star,
  Users,
  Award,
  Heart,
} from 'lucide-react'

const Home = () => {
  const topAttractions = attractions.slice(0, 6)
  const testimonialData = testimonials.slice(0, 5)
  const blogData = blog.slice(0, 3)
  const features = [
    {
      icon: Star,
      title: 'אטרקציות ייחודיות',
      description: 'בחירה גדולה של אטרקציות מדהימות לכל סוג אירוע',
    },
    {
      icon: Users,
      title: 'צוות מקצועי',
      description: 'צוות מאומן וחוויתי שמקדיש את עצמו לשביעות רצונך',
    },
    {
      icon: Award,
      title: '15 שנות ניסיון',
      description: 'מיליוני אנשים מרוצים בעשור וחצי האחרון',
    },
    {
      icon: Heart,
      title: '100% מחויבות',
      description: 'אנו נעשה הכל כדי שהאירוע שלך יהיה בלתי נשכח',
    },
  ]

  return (
    <>
      <Helmet>
        <title>Photostyle - צילום וצילומי וידאו לאירועים בישראל</title>
        <meta name="description" content="שירותי צילום וצילומי וידאו מקצועיים לחתונות, בר מצווה ואירועים עסקיים בישראל" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=600&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>

        <motion.div
          className="relative z-10 container-max text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Sparkles className="text-yellow-400" />
            <span className="text-lg font-semibold">אטרקציות מובילות לאירועים בישראל</span>
            <Sparkles className="text-yellow-400" />
          </motion.div>

          <h1 className="hero-title mb-6 font-bold">
            האטרקציות המושלמות לאירוע שלך
          </h1>

          <p className="hero-subtitle mb-8 text-gray-100">
            זיכרונות בלתי נשכחים מחכים לך. בואו נעשה אתכם אפילו יותר מדהימים.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/attractions">
              <Button variant="primary" size="lg">
                גלה את האטרקציות שלנו
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="!text-white !border-white hover:!bg-white hover:!text-gray-900">
                בואו נדברים
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 section-header text-gradient-enhanced">למה לבחור ב-Aria Event?</h2>
            <p className="text-xl text-gray-600 font-semibold">
              אנו מתחייבים לתת לך את החוויה הטובה ביותר
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Attractions */}
      <section className="py-20 bg-gradient-to-br from-white via-primary-50 to-white">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 section-header text-gradient-enhanced">האטרקציות המובילות שלנו 🌟</h2>
            <p className="text-xl text-gray-600 font-semibold">
              בחר מתוך מגוון אטרקציות מדהימות
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topAttractions.map((attraction, idx) => (
              <motion.div
                key={attraction.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <AttractionCard attraction={attraction} />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/attractions">
              <Button variant="secondary" size="lg">
                ראה את כל האטרקציות
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 section-header text-gradient-enhanced">מה הלקוחות שלנו אומרים ⭐</h2>
            <p className="text-xl text-gray-600 font-semibold">
              המלצות מחוזקות מאנשים שחוו את הקסם של Aria Event
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {testimonialData.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/testimonials">
              <Button variant="outline" size="lg">
                קרא עוד המלצות
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-gradient-to-br from-white via-primary-50 to-accent-50">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 section-header text-gradient-enhanced">מהבלוג שלנו 📝</h2>
            <p className="text-xl text-gray-600 font-semibold">
              טיפים, משראות ורעיונות לאירוע המושלם
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/blog">
              <Button variant="primary" size="lg">
                לכל המאמרים
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600 text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="container-max text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">
              🎉 מוכנים לאירוע בלתי נשכח?
            </h2>
            <p className="text-xl mb-8 opacity-95 font-semibold drop-shadow-md">
              צרו קשר איתנו היום ובואו נתחיל בתכנון האירוע שלכם
            </p>
            <Link to="/contact">
              <Button variant="primary" size="lg" className="cta-glow !bg-white !text-primary-600 hover:!bg-gray-100 font-bold">
                צור קשר עכשיו ✨
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home
