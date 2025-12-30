export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Photo Style',
    url: 'https://photo-style.co.il',
    logo: 'https://photo-style.co.il/logo.png',
    description: 'אטרקציות מובילות לאירועים בישראל - חתונות, בר מצווה, אירועי חברה',
    contact: {
      '@type': 'ContactPoint',
      telephone: '+972-xx-xxxx-xxx',
      contactType: 'Customer Support',
      availableLanguage: 'he',
    },
    sameAs: [
      'https://www.facebook.com/photostyle',
      'https://www.instagram.com/photostyle',
      'https://www.youtube.com/photostyle',
    ],
  }
}

export const generateProductSchema = (attraction) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: attraction.title,
    description: attraction.shortDescription,
    image: attraction.images?.[0] || '',
    offers: {
      '@type': 'Offer',
      price: attraction.price?.replace('₪', ''),
      priceCurrency: 'ILS',
      url: `https://photo-style.co.il/attraction/${attraction.slug}`,
    },
    aggregateRating: attraction.rating ? {
      '@type': 'AggregateRating',
      ratingValue: attraction.rating,
      reviewCount: attraction.reviewCount || 0,
    } : undefined,
  }
}

export const generateArticleSchema = (post) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.modified || post.date,
    author: {
      '@type': 'Person',
      name: post.author || 'Photo Style',
    },
  }
}

export const generateFAQSchema = (faqs) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Photo Style',
    image: 'https://photo-style.co.il/logo.png',
    telephone: '+972-xx-xxxx-xxx',
    email: 'info@photo-style.co.il',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'כתובת',
      addressLocality: 'תל אביב',
      addressRegion: 'תל אביב',
      postalCode: '12345',
      addressCountry: 'IL',
    },
    areaServed: 'IL',
    availableLanguage: 'he',
  }
}

export const generateReviewSchema = (testimonials) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: (
      testimonials.reduce((sum, t) => sum + (t.rating || 5), 0) / testimonials.length
    ).toFixed(1),
    reviewCount: testimonials.length,
    bestRating: '5',
    worstRating: '1',
  }
}
