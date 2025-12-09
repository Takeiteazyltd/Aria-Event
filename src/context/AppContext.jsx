import React, { createContext, useContext, useState, useCallback } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])
  const [selectedBundles, setSelectedBundles] = useState([])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleFavorite = useCallback((attractionId) => {
    setFavorites((prev) =>
      prev.includes(attractionId)
        ? prev.filter((id) => id !== attractionId)
        : [...prev, attractionId]
    )
  }, [])

  const isFavorite = useCallback((attractionId) => {
    return favorites.includes(attractionId)
  }, [favorites])

  const addToBundle = useCallback((bundleId) => {
    setSelectedBundles((prev) =>
      prev.includes(bundleId)
        ? prev.filter((id) => id !== bundleId)
        : [...prev, bundleId]
    )
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])

  const value = {
    favorites,
    toggleFavorite,
    isFavorite,
    selectedBundles,
    addToBundle,
    mobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}
