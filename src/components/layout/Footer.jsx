import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="container-max">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary-500">Aria Event</h3>
            <p className="text-gray-400 mb-4">
              אטרקציות מובילות לאירועים בישראל - זיכרונות בלתי נשכחים עבור חתונות, בר מצווה ואירועים עסקיים.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-primary-600 hover:bg-primary-500 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-primary-600 hover:bg-primary-500 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-primary-600 hover:bg-primary-500 rounded-full transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">קישורים מהירים</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  בית
                </Link>
              </li>
              <li>
                <Link to="/attractions" className="text-gray-400 hover:text-white transition-colors">
                  אטרקציות
                </Link>
              </li>
              <li>
                <Link to="/bundles" className="text-gray-400 hover:text-white transition-colors">
                  חבילות
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  בלוג
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">עוד</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  אודות
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                  שאלות נפוצות
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-400 hover:text-white transition-colors">
                  המלצות
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  צור קשר
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">צור קשר</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={18} />
                <a href="tel:+972123456789" className="hover:text-white transition-colors">
                  +972-2-123-4567
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={18} />
                <a href="mailto:info@aria-event.co.il" className="hover:text-white transition-colors">
                  info@aria-event.co.il
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>תל אביב, ישראל</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400">
              &copy; {currentYear} Aria Event. כל הזכויות שמורות.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                תנאי שימוש
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                מדיניות פרטיות
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
