import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { bundles } from '@data/bundles'
import BundleCard from '@components/cards/BundleCard'

const Bundles = () => {
  return (
    <>
      <Helmet>
        <title>חבילות אטרקציות | Photo Style</title>
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center justify-center pt-36 bg-brand-beige text-[#1a1a1a]">
        <div className="container-max text-center">
          <h1 className="text-5xl font-bold mb-4">חבילות אטרקציות</h1>
          <p className="text-xl opacity-80 font-bold">
            חבילות מיוחדות המוזלות למטרה אירועים שונים
          </p>
        </div>
      </section>

      {/* Bundles Grid */}
      <section className="pt-8 pb-20">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bundles.map((bundle, idx) => (
              <motion.div
                key={bundle.id}
                className="h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <BundleCard bundle={bundle} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Bundles
