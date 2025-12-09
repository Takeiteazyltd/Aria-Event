import { useEffect, useRef } from 'react'

export const useScrollAnimation = (callback, options = {}) => {
  const ref = useRef(null)
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px' } = options

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback?.(entry)
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(ref.current)

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [callback, threshold, rootMargin])

  return ref
}
