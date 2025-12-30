import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Button from '@components/ui/Button'
import { Link } from 'react-router-dom'

const BusinessEvents = () => {
  return (
    <>
      <Helmet>
        <title>אירועי חברה | Photo Style</title>
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center justify-center pt-20 bg-primary-500 text-brand-navy">
        <div className="container-max text-center">
          <h1 className="text-5xl font-bold mb-4">אירועי חברה</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-bold">
            פתרונות אטרקציות מיוחדות לחברות - בנייה של צוויות, אירועי משקיעים, והשקות מוצרים
          </p>
          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/contact">
              <Button variant="primary" size="lg" className="!rounded-full">
                קבלת הצעה
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-brand-beige">
        <div className="container-max">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#1a1a1a]">מה אנו מציעים לחברות</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {[
              {
                title: 'בנייה צוואות',
                description: 'אטרקציות שתחברו את הצוות ותחזקו קשרים',
              },
              {
                title: 'הערכת עובדים',
                description: 'פעילויות מהנות שמחזקות מוטיבציה',
              },
              {
                title: 'אירועים גדולים',
                description: 'מנהלת מלאה של אירועים בעלי עד 500 משתתפים',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-8 rounded-[2rem] shadow-md border border-primary-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-3 text-[#1a1a1a]">{item.title}</h3>
                <p className="text-gray-600 font-semibold">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-500 text-brand-navy">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-4 italic">בואו נדבר על האירוע שלכם</h2>
          <p className="text-lg mb-8 opacity-95 font-bold">
            צוות המומחים שלנו כאן לשעזור בתכנון האירוע השלם
          </p>
          <Link to="/contact">
            <Button variant="primary" size="lg" className="!rounded-full shadow-glow-md">
              צור קשר עכשיו
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default BusinessEvents
