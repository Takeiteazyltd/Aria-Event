import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'
import { useApp } from '@context/AppContext'

const Header = () => {
  const { mobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useApp()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'בית', href: '/' },
    { label: 'אטרקציות', href: '/attractions' },
    { label: 'חבילות', href: '/bundles' },
    { label: 'אירועים עסקיים', href: '/business-events' },
    { label: 'בלוג', href: '/blog' },
    { label: 'אודות', href: '/about' },
    { label: 'צור קשר', href: '/contact' },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gradient-to-b from-white to-gray-50 shadow-glow-lg border-b-2 border-primary-100' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-max flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 hover:scale-105 transition-transform">
          <h1 className="text-2xl font-bold text-gradient-enhanced">Photostyle</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="px-4 py-2 text-gray-700 hover:text-primary-600 font-semibold transition-all hover:bg-primary-50 rounded-md relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex-shrink-0 hidden sm:block">
          <Link to="/contact">
            <Button variant="primary" size="md">
              בואו נדברים
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gradient-to-b from-white to-gray-50 border-t-4 border-gradient-to-r from-primary-500 via-secondary-500 to-accent-500"
        >
          <div className="container-max flex flex-col gap-3 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={closeMobileMenu}
                className="px-4 py-2.5 text-gray-700 font-semibold hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-all shadow-sm hover:shadow-md"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={closeMobileMenu} className="w-full">
              <Button variant="primary" size="md" className="w-full">
                בואו נדברים
              </Button>
            </Link>
          </div>
        </motion.nav>
      )}
    </motion.header>
  )
}

export default Header
