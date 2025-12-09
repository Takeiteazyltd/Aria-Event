import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Phone, Mail, MapPin } from 'lucide-react'
import Input from '@components/ui/Input'
import Textarea from '@components/ui/Textarea'
import Select from '@components/ui/Select'
import Button from '@components/ui/Button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    date: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    alert('תודה על פניותך! נחזור אליך בקרוב.')
    setFormData({ name: '', phone: '', email: '', eventType: '', date: '', message: '' })
  }

  return (
    <>
      <Helmet>
        <title>צור קשר | Aria Event</title>
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[300px] flex items-center justify-center pt-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-max text-center">
          <h1 className="text-5xl font-bold mb-4">צור קשר אתנו</h1>
          <p className="text-xl opacity-90">
            נשמח לשמוע עוד אודות הפרויקט שלך
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container-max grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Phone size={24} className="text-primary-600" />
                <h3 className="text-2xl font-bold">טלפון</h3>
              </div>
              <a href="tel:+972123456789" className="text-gray-700 hover:text-primary-600">
                +972-2-123-4567
              </a>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <Mail size={24} className="text-primary-600" />
                <h3 className="text-2xl font-bold">דוא"ל</h3>
              </div>
              <a href="mailto:info@aria-event.co.il" className="text-gray-700 hover:text-primary-600">
                info@aria-event.co.il
              </a>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <MapPin size={24} className="text-primary-600" />
                <h3 className="text-2xl font-bold">כתובת</h3>
              </div>
              <p className="text-gray-700">תל אביב, ישראל</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="שם מלא"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="שם מלא שלך"
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="טלפון"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="מספר טלפון"
                  required
                />
                <Input
                  label='דוא"ל'
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='דוא"ל שלך'
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select
                  label="סוג אירוע"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  options={[
                    { value: '', label: 'בחר סוג אירוע' },
                    { value: 'wedding', label: 'חתונה' },
                    { value: 'bar-mitzvah', label: 'בר/בת מצווה' },
                    { value: 'corporate', label: 'אירוע עסקי' },
                    { value: 'birthday', label: 'יום הולדת' },
                    { value: 'other', label: 'אחר' },
                  ]}
                  required
                />
                <Input
                  label="תאריך אירוע"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <Textarea
                label="הודעה"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="ספר לנו עוד על האירוע שלך..."
                rows={5}
              />

              <Button variant="primary" size="lg" className="w-full">
                שלח הודעה
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
