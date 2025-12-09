import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AppProvider } from '@context/AppContext'
import MainLayout from '@layouts/MainLayout'

// Pages (lazy loaded)
const Home = lazy(() => import('@pages/Home/Home'))
const AllAttractions = lazy(() => import('@pages/Attractions/AllAttractions'))
const AttractionPage = lazy(() => import('@pages/Attractions/AttractionPage'))
const Bundles = lazy(() => import('@pages/Bundles/Bundles'))
const BusinessEvents = lazy(() => import('@pages/BusinessEvents/BusinessEvents'))
const About = lazy(() => import('@pages/About/About'))
const FAQ = lazy(() => import('@pages/FAQ/FAQ'))
const Contact = lazy(() => import('@pages/Contact/Contact'))
const Testimonials = lazy(() => import('@pages/Testimonials/Testimonials'))
const Blog = lazy(() => import('@pages/Blog/Blog'))
const BlogPost = lazy(() => import('@pages/Blog/BlogPost'))

// Loading Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="animate-spin mb-4">
        <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full"></div>
      </div>
      <p className="text-gray-600">טוען...</p>
    </div>
  </div>
)

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/attractions"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <AllAttractions />
              </Suspense>
            }
          />
          <Route
            path="/attraction/:slug"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <AttractionPage />
              </Suspense>
            }
          />
          <Route
            path="/bundles"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Bundles />
              </Suspense>
            }
          />
          <Route
            path="/business-events"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <BusinessEvents />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/faq"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <FAQ />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/testimonials"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Testimonials />
              </Suspense>
            }
          />
          <Route
            path="/blog"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Blog />
              </Suspense>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <BlogPost />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </AppProvider>
  )
}

export default App
