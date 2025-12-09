import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'
import WhatsAppButton from '@components/interactions/WhatsAppButton'
import ScrollToTop from '@components/interactions/ScrollToTop'

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}

export default MainLayout
