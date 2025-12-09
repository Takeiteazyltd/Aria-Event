export const formatPrice = (price) => {
  if (typeof price === 'string') {
    return price
  }
  return `₪${price.toLocaleString('he-IL')}`
}

export const formatDate = (date) => {
  if (typeof date === 'string') {
    return date
  }
  return new Date(date).toLocaleDateString('he-IL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
}

export const truncate = (text, length) => {
  if (text.length <= length) return text
  return text.slice(0, length) + '...'
}

export const getReadTime = (text) => {
  const wordsPerMinute = 200
  const wordCount = text.split(/\s+/).length
  const readTime = Math.ceil(wordCount / wordsPerMinute)
  return `${readTime} דק קריאה`
}

export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export const openWhatsApp = (message = '', phone = '+972-xx-xxxx-xxx') => {
  const encodedMessage = encodeURIComponent(message)
  const phoneWithoutDash = phone.replace(/[^0-9]/g, '')
  window.open(
    `https://wa.me/${phoneWithoutDash}?text=${encodedMessage}`,
    '_blank'
  )
}

export const shareOnSocial = (platform, url, text) => {
  const encodedUrl = encodeURIComponent(url)
  const encodedText = encodeURIComponent(text)

  const urls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
  }

  if (urls[platform]) {
    window.open(urls[platform], '_blank', 'width=600,height=400')
  }
}

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export const validatePhone = (phone) => {
  const re = /^(\+972|\+1|0)[0-9]{9,10}$/
  return re.test(phone)
}
