import { useApp } from '@context/AppContext'

export const useFavorites = () => {
  const { favorites, toggleFavorite, isFavorite } = useApp()

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  }
}
