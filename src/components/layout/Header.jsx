import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Instagram, Phone, Mail, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'
import { useApp } from '@context/AppContext'

const Header = () => {
  const { mobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useApp()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'בית', href: '/' },
    { label: 'אטרקציות', href: '/attractions' },
    { label: 'חבילות', href: '/bundles' },
    { label: 'אירועי חברה', href: '/business-events' },
    { label: 'בלוג', href: '/blog' },
    { label: 'אודות', href: '/about' },
    { label: 'צור קשר', href: '/contact' },
  ]

  const secondaryLinks = [
    { label: 'הסיפור שלנו', href: '/about' },
    { label: 'נגישות', href: '#' },
    { label: 'צור קשר', href: '/contact' },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top Bar: Social | Logo | Utility - Always visible on mobile, hidden on desktop when scrolled */}
      <div className={`container-max relative flex items-center transition-all duration-300 ${isScrolled ? 'py-8 px-4 lg:h-0 lg:py-0 lg:overflow-hidden' : 'py-16 px-4 lg:py-16 lg:px-4'}`}>
        {/* Right: Secondary Links - Desktop only (RTL: on the left) */}
        <div className={`hidden lg:flex items-center justify-start gap-6 text-sm font-bold text-brand-navy transition-all duration-300 flex-1 ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : ''}`}>
          {secondaryLinks.map((link, idx) => (
            <Link key={idx} to={link.href} className="hover:text-brand-pink transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle - Always visible on mobile (RTL: on the right) */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden absolute right-4 p-2 text-[#1a1a1a] z-10 transition-all duration-300"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Center: Logo - Smaller on mobile when scrolled, large when not scrolled */}
        <div className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 ${isScrolled ? 'py-2 lg:py-0' : ''}`}>
          <Link to="/" onClick={closeMobileMenu}>
            <img 
              src="src/public/logos/photostyle-black.png" 
              alt="Photo Style Logo" 
              className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-14 lg:opacity-0 lg:h-0' : 'h-24 lg:h-32'}`}
            />
          </Link>
        </div>

        {/* Left: Social & Contact - Desktop only (RTL: on the right) */}
        <div className={`hidden lg:flex items-center gap-4 text-brand-navy transition-all duration-300 flex-1 justify-end ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : ''}`}>
          <a href="https://www.instagram.com/photostyle.il?igsh=d3JlbWZldnl3dWN3" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:text-brand-pink transition-all"><Instagram size={20} /></a>
          <a href="mailto:morks420@gmail.com" className="hover:scale-110 hover:text-brand-pink transition-all"><Mail size={20} /></a>
          <a href="https://wa.me/972504258458" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:text-brand-pink transition-all"><MessageCircle size={20} /></a>
          <a href="tel:0504258458" className="hover:text-brand-pink transition-colors">
            <Phone size={20} />
          </a>
        </div>
      </div>

      {/* Navigation Bar: Full-width Pink - Hidden on mobile, visible on desktop */}
      <div className={`hidden lg:block w-full transition-all duration-300 ${!isScrolled ? 'bg-brand-pink' : 'bg-white shadow-sm'}`}>
        <nav className={`container-max flex items-center justify-center relative ${isScrolled ? 'py-4 h-auto min-h-[4rem] lg:py-4 lg:h-16' : 'h-16 py-2'}`}>
          {/* Desktop Logo on the right - Only visible when scrolled */}
          <div className={`hidden lg:block absolute right-0 pr-4 transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
            <Link to="/" onClick={closeMobileMenu}>
              <img 
                src="src/public/logos/photostyle-black.png" 
                alt="Photo Style Logo" 
                className="w-auto object-contain h-12 transition-all duration-300" 
              />
            </Link>
          </div>

          {/* Desktop Menu Items - Centered */}
          <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 h-full">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="px-6 h-full flex items-center font-bold text-sm text-[#1a1a1a] hover:text-[#1a1a1a] transition-all relative group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Logo - Centered */}
          <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2 py-1">
            <Link to="/" onClick={closeMobileMenu}>
              <img 
                src="src/public/logos/photostyle-black.png" 
                alt="Photo Style Logo" 
                className="w-auto object-contain h-12 transition-all duration-300" 
              />
            </Link>
          </div>

          {/* Mobile Menu Toggle (RTL: on the right) */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden absolute right-4 p-2 text-[#1a1a1a] z-10"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
        >
          <div className="flex flex-col p-4 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={closeMobileMenu}
                className="py-3 px-4 text-[#1a1a1a] font-bold hover:bg-brand-beige rounded-xl transition-all"
              >
                {item.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-4 mt-4 p-4 border-t border-gray-50">
              <a href="tel:0504258458" className="flex items-center justify-center gap-2 py-3 bg-brand-beige text-brand-navy rounded-full font-bold">
                <Phone size={18} /> התקשרו
              </a>
              <a href="https://wa.me/972504258458" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 bg-green-500 text-white rounded-full font-bold">
                <MessageCircle size={18} /> וואטסאפ
              </a>
              <a href="mailto:morks420@gmail.com" className="flex items-center justify-center gap-2 py-3 bg-brand-beige text-brand-navy rounded-full font-bold">
                <Mail size={18} /> אימייל
              </a>
              <a href="https://www.instagram.com/photostyle.il?igsh=d3JlbWZldnl3dWN3" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 bg-brand-pink text-brand-navy rounded-full font-bold">
                <Instagram size={18} /> אינסטגרם
              </a>
            </div>
          </div>
        </motion.nav>
      )}
    </motion.header>
  )
}

export default Header
