import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Instagram, Facebook, Phone, Mail } from 'lucide-react'
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
      {/* Top Bar: Social | Logo | Utility */}
      <div className={`container-max flex items-center justify-between py-4 px-4 transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden py-0' : ''}`}>
        {/* Left: Social & Contact */}
        <div className="hidden lg:flex items-center gap-4 text-brand-navy">
          <a href="#" className="hover:scale-110 transition-transform"><Instagram size={20} /></a>
          <a href="#" className="hover:scale-110 transition-transform"><Facebook size={20} /></a>
          <div className="flex items-center gap-1 text-sm font-bold border-r pr-4 border-gray-200">
            <Phone size={16} />
            <a href="tel:050-0000000">050-0000000</a>
          </div>
        </div>

        {/* Center: Logo */}
        <div className="flex-1 flex justify-center">
          <Link to="/" onClick={closeMobileMenu}>
            <img src="/logo.png" alt="Aria Event Logo" className="h-16 md:h-20 w-auto object-contain" />
          </Link>
        </div>

        {/* Right: Secondary Links */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-bold text-brand-navy">
          {secondaryLinks.map((link, idx) => (
            <Link key={idx} to={link.href} className="hover:text-brand-pink transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle (visible when scrolled or on small screens) */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 text-brand-navy"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Navigation Bar: Full-width Pink */}
      <div className={`w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-brand-pink'}`}>
        <nav className="container-max hidden lg:flex items-center justify-center h-12">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`px-6 h-full flex items-center font-bold text-sm transition-all relative group ${isScrolled ? 'text-brand-navy hover:text-brand-pink' : 'text-brand-navy hover:bg-white/10'
                }`}
            >
              {item.label}
              {isScrolled && (
                <span className="absolute bottom-0 left-6 right-6 h-0.5 bg-brand-pink scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              )}
            </Link>
          ))}
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
                className="py-3 px-4 text-brand-navy font-bold hover:bg-brand-beige rounded-xl transition-all"
              >
                {item.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-4 mt-4 p-4 border-t border-gray-50">
              <a href="tel:050-0000000" className="flex items-center justify-center gap-2 py-3 bg-brand-beige text-brand-navy rounded-full font-bold">
                <Phone size={18} /> התקשרו
              </a>
              <a href="#" className="flex items-center justify-center gap-2 py-3 bg-brand-pink text-brand-navy rounded-full font-bold">
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
