import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Button from '@components/ui/Button'
import { Link } from 'react-router-dom'

const BusinessEvents = () => {
  return (
    <>
      <Helmet>
        <title>אירועים עסקיים | Aria Event</title>
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center justify-center pt-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container-max text-center">
          <h1 className="text-5xl font-bold mb-4">אירועים עסקיים</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            פתרונות אטרקציות מיוחדות לחברות - בנייה של צוויות, אירועי משקיעים, והשקות מוצרים
          </p>
          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/contact">
              <Button variant="outline" size="lg" className="!text-white !border-white hover:!bg-white hover:!text-blue-600">
                קבלת הצעה
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container-max">
          <h2 className="text-4xl font-bold mb-12 text-center">מה אנו מציעים לחברות</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                className="bg-gray-50 p-8 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-4">בואו נדברים על אירוע שלכם</h2>
          <p className="text-lg mb-8 opacity-90">
            צוות המומחים שלנו כאן לשעזור בתכנון האירוע השלם
          </p>
          <Link to="/contact">
            <Button variant="ghost" size="lg" className="!text-white !bg-white bg-opacity-20 hover:!bg-opacity-30">
              צור קשר עכשיו
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default BusinessEvents
