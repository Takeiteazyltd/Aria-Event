import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-navy text-[#1a1a1a] pt-20 pb-10">
      <div className="container-max px-4">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo & Social */}
          <div className="flex flex-col items-center lg:items-start">
            <Link to="/" className="mb-6">
              <img src="src/public/logos/photostyle-black.png" alt="Photo Style" className="h-20 w-auto object-contain" />
            </Link>
            <p className="text-[#1a1a1a] mb-8 text-center lg:text-right font-bold opacity-90 leading-relaxed">
              הופכים כל אירוע לחוויה בלתי נשכחת עם הצילום המקצועי והאטרקציות הכי חדישות בשוק.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-[#1a1a1a]/10 hover:bg-[#1a1a1a] transition-all duration-0 hover:text-brand-cream rounded-full text-[#1a1a1a]">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-3 bg-[#1a1a1a]/10 hover:bg-[#1a1a1a] transition-all duration-0 hover:text-brand-cream rounded-full text-[#1a1a1a]">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-[#1a1a1a]/10 hover:bg-[#1a1a1a] transition-all duration-0 hover:text-brand-cream rounded-full text-[#1a1a1a]">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-xl font-bold mb-6 text-[#1a1a1a] relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-10 after:h-0.5 after:bg-brand-pink">קטלוג אטרקציות</h4>
            <ul className="space-y-4 text-center lg:text-right">
              <li><Link to="/attractions" className="text-[#1a1a1a] hover:opacity-70 transition-colors font-bold">אטרקציות לאירועים</Link></li>
              <li><Link to="/bundles" className="text-[#1a1a1a] hover:opacity-70 transition-colors font-bold">חבילות אירוח</Link></li>
              <li><Link to="/business-events" className="text-[#1a1a1a] hover:opacity-70 transition-colors font-bold">אירועי חברה</Link></li>
              <li><Link to="/attractions?cat=photo" className="text-[#1a1a1a] hover:opacity-70 transition-colors font-bold">צילום אירועים</Link></li>
            </ul>
          </div>

          {/* Column 3: More Links */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-xl font-bold mb-6 text-[#1a1a1a] relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-10 after:h-0.5 after:bg-brand-pink">מידע נוסף</h4>
            <ul className="space-y-4 text-center lg:text-right">
              <li><Link to="/about" className="text-[#1a1a1a] hover:opacity-70 transition-colors font-bold">הסיפור שלנו</Link></li>
              <li><Link to="/testimonials" className="text-[#1a1a1a] hover:opacity-70 transition-colors font-bold">המלצות לקוחות</Link></li>
              <li><Link to="/blog" className="text-[#1a1a1a] hover:opacity-70 transition-colors font-bold">בלוג וטיפים</Link></li>
              <li><Link to="/contact" className="text-[#1a1a1a] hover:opacity-70 transition-colors font-bold">צרו קשר</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-xl font-bold mb-6 text-[#1a1a1a] relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-10 after:h-0.5 after:bg-brand-pink">דברו איתנו</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[#1a1a1a] font-bold group">
                <div className="p-2 bg-[#1a1a1a]/10 rounded-lg group-hover:bg-brand-pink transition-colors"><Phone size={18} /></div>
                <a href="tel:050-0000000" className="group-hover:opacity-70 transition-colors tracking-wider">050-0000000</a>
              </li>
              <li className="flex items-center gap-3 text-[#1a1a1a] font-bold group">
                <div className="p-2 bg-[#1a1a1a]/10 rounded-lg group-hover:bg-brand-pink transition-colors"><Mail size={18} /></div>
                <a href="mailto:info@photo-style.co.il" className="group-hover:opacity-70 transition-colors lowercase">info@photo-style.co.il</a>
              </li>
              <li className="flex items-start gap-3 text-[#1a1a1a] font-bold group">
                <div className="p-2 bg-[#1a1a1a]/10 rounded-lg group-hover:bg-brand-pink transition-colors mt-0.5"><MapPin size={18} /></div>
                <span className="group-hover:opacity-70 transition-colors">תל אביב, ישראל</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1a1a1a]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#1a1a1a] font-bold text-sm opacity-90">
            &copy; {currentYear} Photo Style. כל הזכויות שמורות. נבנה על ידי <span className="text-brand-pink">Antigravity</span>
          </p>
          <div className="flex gap-6 text-sm font-bold">
            <Link to="/privacy" className="text-[#1a1a1a] hover:opacity-70 transition-colors">מדיניות פרטיות</Link>
            <Link to="/terms" className="text-[#1a1a1a] hover:opacity-70 transition-colors">תנאי שימוש</Link>
            <Link to="/accessibility" className="text-[#1a1a1a] hover:opacity-70 transition-colors">נגישות</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
