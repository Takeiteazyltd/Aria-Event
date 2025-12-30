import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Users, Award, Heart } from 'lucide-react'
import FeatureCard from '@components/cards/FeatureCard'

const About = () => {
  return (
    <>
      <Helmet>
        <title>אודות Photo Style</title>
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center justify-center pt-36 bg-brand-beige text-[#1a1a1a]">
        <div className="container-max text-center">
          <h1 className="text-5xl font-bold mb-4">הסיפור שלנו</h1>
          <p className="text-xl opacity-80 font-bold">
            15 שנים של יצירת זיכרונות בלתי נשכחים
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="pt-8 pb-20">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">ההתחלה שלנו</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Photo Style התחילה כרעיון פשוט: להפוך כל אירוע לזיכרון בלתי נשכח. על פני 15 שנים, אנחנו בנינו מוניטין של אמינות, יצירתיות ודחיקות כוללת.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              היום, אנחנו גם 20 עובדים חדשים שמוקדשים ויצירתיים שמתחייבים לעשות את כל אירוע מיוחד.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              מחתונות טבעות וחגיגות בר/בת מצווה, ועד אירועי חברה בעלי קנה מידה גדול, אנחנו עשינו הכל ודאים שכל אחד הולך עם חיוך.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <h2 className="text-4xl font-bold mb-12 text-center">הערכים שלנו</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Award}
              title="מצוינות"
              description="אנו מחפשים מצוינות בכל מה שאנו עושים"
            />
            <FeatureCard
              icon={Users}
              title="צוות"
              description="צוות חזק ויצירתי הוא ליבנו"
            />
            <FeatureCard
              icon={Heart}
              title="כלל"
              description="אנו כולנו מוקדשים לעשות כל אירוע מיוחד"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: '2000+', label: 'אירועים מוצלחים' },
              { value: '50+', label: 'אטרקציות ייחודיות' },
              { value: '100%', label: 'שביעות רצון' },
              { value: '15', label: 'שנות ניסיון' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center p-8 bg-gray-50 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</p>
                <p className="text-gray-700">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
