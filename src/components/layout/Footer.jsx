import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10">
      <div className="container-max px-4">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo & Social */}
          <div className="flex flex-col items-center lg:items-start">
            <Link to="/" className="mb-6">
              <img src="/logo.png" alt="Aria Event" className="h-20 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-gray-400 mb-8 text-center lg:text-right font-bold opacity-80 leading-relaxed">
              הופכים כל אירוע לחוויה בלתי נשכחת עם הצילום המקצועי והאטרקציות הכי חדישות בשוק.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/10 hover:bg-brand-pink transition-all rounded-full text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-3 bg-white/10 hover:bg-brand-pink transition-all rounded-full text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-white/10 hover:bg-brand-pink transition-all rounded-full text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-10 after:h-0.5 after:bg-brand-pink">קטלוג אטרקציות</h4>
            <ul className="space-y-4 text-center lg:text-right">
              <li><Link to="/attractions" className="text-gray-400 hover:text-brand-pink transition-colors font-bold">אטרקציות לאירועים</Link></li>
              <li><Link to="/bundles" className="text-gray-400 hover:text-brand-pink transition-colors font-bold">חבילות אירוח</Link></li>
              <li><Link to="/business-events" className="text-gray-400 hover:text-brand-pink transition-colors font-bold">אירועי חברה</Link></li>
              <li><Link to="/attractions?cat=photo" className="text-gray-400 hover:text-brand-pink transition-colors font-bold">צילום אירועים</Link></li>
            </ul>
          </div>

          {/* Column 3: More Links */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-10 after:h-0.5 after:bg-brand-pink">מידע נוסף</h4>
            <ul className="space-y-4 text-center lg:text-right">
              <li><Link to="/about" className="text-gray-400 hover:text-brand-pink transition-colors font-bold">הסיפור שלנו</Link></li>
              <li><Link to="/testimonials" className="text-gray-400 hover:text-brand-pink transition-colors font-bold">המלצות לקוחות</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-brand-pink transition-colors font-bold">בלוג וטיפים</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-brand-pink transition-colors font-bold">צרו קשר</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-10 after:h-0.5 after:bg-brand-pink">דברו איתנו</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 font-bold group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-brand-pink transition-colors"><Phone size={18} /></div>
                <a href="tel:050-0000000" className="group-hover:text-white transition-colors tracking-wider">050-0000000</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 font-bold group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-brand-pink transition-colors"><Mail size={18} /></div>
                <a href="mailto:info@aria-event.co.il" className="group-hover:text-white transition-colors lowercase">info@aria-event.co.il</a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 font-bold group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-brand-pink transition-colors mt-0.5"><MapPin size={18} /></div>
                <span className="group-hover:text-white transition-colors">תל אביב, ישראל</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 font-bold text-sm">
            &copy; {currentYear} Aria Event. כל הזכויות שמורות. נבנה על ידי <span className="text-brand-pink">Antigravity</span>
          </p>
          <div className="flex gap-6 text-sm font-bold opacity-60">
            <Link to="/privacy" className="hover:text-white transition-colors">מדיניות פרטיות</Link>
            <Link to="/terms" className="hover:text-white transition-colors">תנאי שימוש</Link>
            <Link to="/accessibility" className="hover:text-white transition-colors">נגישות</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
