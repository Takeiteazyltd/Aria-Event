import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Building2,
  Briefcase,
  PartyPopper,
  Coffee,
  CheckCircle2,
  Truck,
  ShieldCheck,
  Zap,
  ChevronRight,
  ChevronLeft
} from 'lucide-react'
import Button from '@components/ui/Button'
import { Link } from 'react-router-dom'
import { attractions } from '@data/attractions'
import { testimonials } from '@data/testimonials'
import { blog } from '@data/blog'
import AttractionCard from '@components/cards/AttractionCard'
import TestimonialCard from '@components/cards/TestimonialCard'
import BlogCard from '@components/cards/BlogCard'
import FeatureCard from '@components/cards/FeatureCard'
import LeadForm from '@components/forms/LeadForm'
import Divider from '@components/ui/Divider'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

const Home = () => {
  const topAttractions = attractions.slice(0, 8)
  const bundleData = attractions.filter(a => a.category === 'חבילות').slice(0, 6)
  const testimonialData = testimonials.slice(0, 5)
  const blogData = blog.slice(0, 3)

  // Hero Slider
  const [heroRef] = useKeenSlider({
    loop: true,
    duration: 1000,
    drag: true,
  }, [
    (slider) => {
      let timeout
      let mouseOver = false
      function clearNextTimeout() { clearTimeout(timeout) }
      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => { slider.next() }, 4000)
      }
      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => { mouseOver = true; clearNextTimeout() })
        slider.container.addEventListener("mouseout", () => { mouseOver = false; nextTimeout() })
        nextTimeout()
      })
      slider.on("dragStarted", clearNextTimeout)
      slider.on("animationEnded", nextTimeout)
      slider.on("updated", nextTimeout)
    },
  ])

  // Categories Slider
  const [categoriesRef, categoriesSlider] = useKeenSlider({
    slides: { perView: 1.2, spacing: 16 },
    breakpoints: {
      '(min-width: 640px)': { slides: { perView: 2.2, spacing: 16 } },
      '(min-width: 1024px)': { slides: { perView: 4.2, spacing: 20 } },
    },
  })

  // Packages Slider
  const [packagesRef, packagesSlider] = useKeenSlider({
    slides: { perView: 1.2, spacing: 16 },
    breakpoints: {
      '(min-width: 640px)': { slides: { perView: 2.2, spacing: 16 } },
      '(min-width: 1024px)': { slides: { perView: 3.2, spacing: 20 } },
    },
  })

  const values = [
    { icon: Truck, title: 'משלוח מהיר', desc: 'עד פתח האירוע שלכם' },
    { icon: Zap, title: 'שירות אקספרס', desc: 'מענה מהיר לכל בקשה' },
    { icon: ShieldCheck, title: 'אחריות מלאה', desc: 'אנחנו כאן לכל תקלה' },
    { icon: CheckCircle2, title: 'איכות ללא פשרות', desc: 'הציוד הכי חדיש שיש' },
  ]

  return (
    <div className="bg-white">
      <Helmet>
        <title>Photo Style - יצירת רגעים מאושרים</title>
        <meta name="description" content="שירותי צילום, אטרקציות והפקה לאירועי חברה ואירועים פרטיים" />
      </Helmet>

      {/* 1. Hero Section with Arch Mask */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        <div ref={heroRef} className="keen-slider h-full">
          {[
            'https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&h=900&fit=crop',
            'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062&auto=format&fit=crop'
          ].map((src, idx) => (
            <div key={idx} className="keen-slider__slide relative h-full">
              <img src={src} className="w-full h-full object-cover" alt={`Slide ${idx}`} />
              <div className="absolute inset-0 bg-brand-navy/20" />
            </div>
          ))}
        </div>

        {/* Arch Mask SVG Overlay */}
        <div className="absolute bottom-[-1px] left-0 right-0 w-full z-10 pointer-events-none">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120H1440V40C1440 40 1100 0 720 0C340 0 0 40 0 40V120Z" fill="#F2F0EB" />
          </svg>
        </div>
      </section>

      {/* 2. Lead Form Section (Beige) */}
      <section className="bg-brand-beige py-16 px-4">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-4">יש לכם אירוע?</h2>
            <p className="text-lg text-[#1a1a1a99] font-bold opacity-80 italic">בואו נתחיל לתכנן אותו יחד</p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-6 md:p-8 rounded-[2rem] shadow-md max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input type="text" placeholder="שם מלא" className="bg-gray-50 border-2 border-gray-200 rounded-full px-6 py-3 font-bold focus:outline-none focus:border-brand-pink focus:border-2" />
              <input type="tel" placeholder="טלפון" className="bg-gray-50 border-2 border-gray-200 rounded-full px-6 py-3 font-bold focus:outline-none focus:border-brand-pink focus:border-2" />
              <select className="bg-gray-50 border-2 border-gray-200 rounded-full px-6 py-3 font-bold focus:outline-none focus:border-brand-pink focus:border-2 appearance-none">
                <option>סוג אירוע</option>
                <option>אירוע חברה</option>
                <option>חתונה</option>
                <option>בר/בת מצווה</option>
              </select>
              <Button variant="primary" size="lg" className="w-full">בואו נדבר!</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Categories Carousel */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-max px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a]">הקטגוריות שלנו</h2>
              <div className="h-1 w-20 bg-brand-pink mt-4 rounded-full"></div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => categoriesSlider.current?.prev()} className="p-3 bg-brand-beige rounded-full text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-brand-cream transition-colors"><ChevronRight size={20} /></button>
              <button onClick={() => categoriesSlider.current?.next()} className="p-3 bg-brand-beige rounded-full text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-brand-cream transition-colors"><ChevronLeft size={20} /></button>
            </div>
          </div>

          <div ref={categoriesRef} className="keen-slider">
            {topAttractions.map((item) => (
              <div key={item.id} className="keen-slider__slide group cursor-pointer">
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-lg">
                  <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-[1.10]">
                    <img 
                      src={item.image || item.images?.[0] || 'https://picsum.photos/seed/home-placeholder/800/600'} 
                      className="w-full h-full object-cover" 
                      alt={item.title}
                      onError={(e) => {
                        e.target.src = 'https://picsum.photos/seed/home-placeholder/800/600'
                      }}
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-white/50 backdrop-blur-md m-4 rounded-[1.5rem] flex items-center justify-between shadow-md z-10">
                    <span className="font-bold text-[#1a1a1a]">{item.title}</span>
                    <div className="bg-[#1a1a1a] p-2 rounded-full"><ChevronLeft size={16} className="text-brand-cream" /></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Divider */}
      <div className="container-max px-4">
        <Divider />
      </div>

      {/* 5. Packages Carousel */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-max px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a]">החבילות שלנו</h2>
              <div className="h-1 w-20 bg-brand-pink mt-4 rounded-full"></div>
            </div>
          </div>

          <div ref={packagesRef} className="keen-slider">
            {bundleData.map((item) => (
              <div key={item.id} className="keen-slider__slide">
                <AttractionCard attraction={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. featured Products / Grid Section */}
      <section className="py-24 bg-brand-beige">
        <div className="container-max px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-16">הכי נמכרים אצלנו</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {topAttractions.slice(0, 4).map((item) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-[2rem] overflow-hidden shadow-md border border-gray-50 flex flex-col group transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="w-full aspect-square overflow-hidden relative">
                  <img 
                    src={item.image || item.images?.[0] || 'https://picsum.photos/seed/home-placeholder/800/600'} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    alt={item.title}
                    onError={(e) => {
                      e.target.src = 'https://picsum.photos/seed/home-placeholder/800/600'
                    }}
                  />
                  <div className="absolute inset-0 bg-brand-navy opacity-0 group-hover:opacity-10 transition-opacity" />
                </div>
                <div className="p-6 flex flex-col items-center text-center">
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">{item.title}</h3>
                  <Link to={`/attractions/${item.id}`} className="w-full">
                    <Button variant="outline" className="w-full !rounded-full">לפרטים נוספים</Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Value Bar (Pink) */}
      <section className="bg-brand-pink py-12">
        <div className="container-max px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="bg-white p-4 rounded-full mb-4">
                  <v.icon size={28} className="text-brand-pink" />
                </div>
                <h4 className="font-extrabold text-white text-lg mb-1">{v.title}</h4>
                <p className="text-sm text-white/50 font-bold">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container-max px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto py-16 px-8 rounded-[3rem] bg-brand-navy text-[#1a1a1a] relative shadow-lg">
            <Sparkles className="absolute top-8 left-8 text-[#1a1a1a] animate-pulse" />
            <Sparkles className="absolute bottom-8 right-8 text-[#1a1a1a] animate-pulse" />

            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#1a1a1a]">מחכים לכם!</h2>
            <p className="text-xl mb-10 font-bold leading-relaxed text-[#1a1a1a] opacity-80">
              הצוות שלנו מוכן להפוך את האירוע שלכם להצלחה מסחררת.
              צרו קשר עכשיו וקבלו הצעת מחיר מותאמת אישית.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="primary" size="lg" className="px-12 !h-14 font-extrabold !text-xl shadow-glow-md">להצעת מחיר</Button>
              </Link>
              <a href="tel:050-0000000">
                <Button variant="outline" size="lg" className="px-12 !h-14 font-extrabold !text-xl">חייגו עכשיו</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
