# Aria Event - Premium Hebrew RTL Website

> A production-grade, fully responsive Hebrew RTL website for Israel's leading event-attractions company.

## 🎯 Project Overview

Aria Event is a complete, enterprise-scale React website featuring:

✅ **11 Full Pages** - Home, Attractions, Bundles, Business Events, About, FAQ, Contact, Testimonials, Blog, and dynamic routing
✅ **Complete Component Library** - 30+ reusable, animated components
✅ **Hebrew RTL Support** - Full right-to-left layout throughout
✅ **Premium Animations** - Framer Motion throughout for smooth interactions
✅ **SEO Optimization** - Meta tags, JSON-LD schemas, structured data
✅ **Mobile-First Design** - Fully responsive across all devices
✅ **Modern Tech Stack** - Vite, React 18, Tailwind CSS, Framer Motion
✅ **Placeholder Content** - 20 attractions, 10 bundles, 20 testimonials, 20 FAQs, 12 blog posts

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm 8+
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/Aria-Event.git
cd Aria-Event

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                  # Base components (Button, Card, Input, etc.)
│   ├── layout/             # Layout components (Header, Footer)
│   ├── cards/              # Card components (Attraction, Blog, etc.)
│   ├── interactions/       # Interactive components (WhatsApp, ScrollToTop)
│   ├── sections/           # Page sections
│   └── carousels/          # Carousel components
├── pages/
│   ├── Home/
│   ├── Attractions/
│   ├── Bundles/
│   ├── BusinessEvents/
│   ├── About/
│   ├── FAQ/
│   ├── Contact/
│   ├── Testimonials/
│   └── Blog/
├── layouts/
│   └── MainLayout.jsx
├── context/
│   └── AppContext.jsx      # Global state management
├── hooks/
│   ├── useScrollAnimation.js
│   ├── useMediaQuery.js
│   └── useFavorites.js
├── utils/
│   ├── seo.js
│   ├── animations.js
│   └── helpers.js
├── data/
│   ├── attractions.js       # 20 attractions with full data
│   ├── bundles.js          # 10 bundle packages
│   ├── testimonials.js     # 20 testimonials
│   ├── faq.js              # 20 FAQ items
│   └── blog.js             # 12 blog posts
├── styles/
│   └── index.css
├── App.jsx
└── main.jsx
```

---

## 🎨 Design & Features

### Pages

| Page | Route | Features |
|------|-------|----------|
| Home | `/` | Hero, Features, Top Attractions, Testimonials, Blog Preview |
| All Attractions | `/attractions` | Search, Filters, Grid Layout |
| Attraction Detail | `/attraction/:slug` | Gallery, Details, FAQ, Reviews |
| Bundles | `/bundles` | 10 Package Cards, Pricing |
| Business Events | `/business-events` | B2B Focused, Corporate Testimonials |
| About | `/about` | Company Story, Values, Team, Stats |
| FAQ | `/faq` | Searchable Accordion, Categories |
| Contact | `/contact` | Contact Form, Info, Map |
| Testimonials | `/testimonials` | Filterable Cards, Reviews |
| Blog | `/blog` | Search, Categories, Grid |
| Blog Post | `/blog/:slug` | Full Article, Related Posts |

### Component Library

- **UI Components**: Button, Card, Badge, Input, Textarea, Select, Accordion, Modal
- **Card Components**: AttractionCard, TestimonialCard, BlogCard, BundleCard, FeatureCard
- **Layout**: Header, Footer, MainLayout
- **Interactions**: WhatsAppButton, ScrollToTop, LoadingSpinner

### Key Features

- 🌍 **Full RTL Support** - All text, icons, and layouts flow right-to-left
- 🎯 **Responsive Design** - Mobile, tablet, and desktop optimized
- ✨ **Smooth Animations** - Framer Motion for all interactions
- 🔍 **SEO Optimized** - Meta tags, JSON-LD, structured data
- 🌐 **Hebrew Localization** - All text in Hebrew
- 📱 **Mobile Menu** - Touch-friendly navigation
- 💾 **State Management** - Context API for global state
- ⚡ **Performance** - Code splitting, lazy loading

---

## 🛠️ Technology Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Routing
- **React Helmet** - SEO/Meta tags
- **Lucide React** - Icons
- **Swiper** - Carousels (ready to integrate)

---

## 🎯 Customization Guide

### Update Data

Replace placeholder content in `/src/data/`:

```javascript
// src/data/attractions.js
export const attractions = [
  {
    id: 1,
    title: 'Your Attraction',
    slug: 'your-slug',
    // ... update fields
  },
  // ...
]
```

### Update Colors

Edit theme in `tailwind.config.js`:

```javascript
colors: {
  primary: { /* your colors */ },
  secondary: { /* your colors */ },
}
```

### Update Typography

Global fonts defined in `index.html` and `src/styles/index.css`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet" />
```

### Add New Pages

1. Create component in `src/pages/YourPage/`
2. Import in `src/App.jsx`
3. Add route:

```jsx
<Route path="/your-page" element={<YourPage />} />
```

---

## 📊 Content Inventory

- **20 Attractions** - Fully detailed with images, prices, FAQs
- **10 Bundles** - Package deals with pricing
- **20 Testimonials** - Customer reviews with ratings
- **20 FAQ Items** - Q&A with categories
- **12 Blog Posts** - Articles with full content

All content is in Hebrew and ready to customize.

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy to GitHub Pages

```bash
npm run build
# Follow GitHub Pages setup for your repo
```

---

## 🔒 SEO & Meta Tags

Every page includes:
- Dynamic title tags
- Meta descriptions
- Open Graph tags
- JSON-LD structured data

Example from Home page:

```jsx
<Helmet>
  <title>Aria Event - אטרקציות מובילות לאירועים</title>
  <meta name="description" content="..." />
</Helmet>
```

---

## 📱 Responsive Breakpoints

- **Mobile**: 0 - 640px (sm)
- **Tablet**: 640px - 1024px (md/lg)
- **Desktop**: 1024px+ (xl/2xl)

---

## 🎯 Future Enhancements

- [ ] Payment integration (Stripe/PayPal)
- [ ] Admin dashboard
- [ ] User accounts & bookings
- [ ] Email notifications
- [ ] Analytics integration
- [ ] Live chat support
- [ ] Multi-language support
- [ ] API integration for dynamic content

---

## 📝 License

This project is proprietary. All rights reserved.

---

## 👨‍💻 Support & Questions

For questions or support, contact us at:
- 📧 Email: info@aria-event.co.il
- 📞 Phone: +972-2-123-4567
- 💬 WhatsApp: [Chat](https://wa.me/972212344567)

---

**Built with ❤️ for Aria Event**
