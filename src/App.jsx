import { BrowserRouter as Router } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from './components/common/AnimatedSection'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from './utils/animations'
import Navbar from './components/Navbar'
import AnnouncementBar from './components/AnnouncementBar'
import Hero from './components/Hero'
import FeaturedCollection from './components/FeaturedCollection'
import Categories from './components/Categories'
import FeaturedProducts from './components/FeaturedProducts'
import LuxuryServices from './components/LuxuryServices'
import BrandValues from './components/BrandValues'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import SearchOverlay from './components/SearchOverlay'
import DiscountPopup from './components/DiscountPopup'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  if (loading) {
    return (
      <motion.div 
        className="fixed inset-0 bg-black flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="text-center">
          <motion.h1 
            className="text-6xl font-bold text-white playfair mb-4"
            animate={{ 
              opacity: [0.5, 1, 0.5],
              scale: [0.98, 1, 0.98]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            LUXE
          </motion.h1>
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </motion.div>
    )
  }

  return (
    <Router>
      <AnimatePresence>
        <div className="bg-gray-50">
          <DiscountPopup />
          <AnnouncementBar />
          <Navbar />
          <SearchOverlay />
          
          <AnimatedSection variants={fadeInUp}>
            <Hero />
          </AnimatedSection>

          <AnimatedSection variants={fadeInLeft}>
            <FeaturedCollection />
          </AnimatedSection>

          <AnimatedSection variants={staggerContainer}>
            <Categories />
          </AnimatedSection>

          <AnimatedSection variants={fadeInRight}>
            <FeaturedProducts />
          </AnimatedSection>

          <AnimatedSection variants={fadeInUp}>
            <LuxuryServices />
          </AnimatedSection>

          <AnimatedSection variants={fadeInLeft}>
            <BrandValues />
          </AnimatedSection>

          <AnimatedSection variants={fadeInRight}>
            <Testimonials />
          </AnimatedSection>

          <AnimatedSection variants={fadeInUp}>
            <Footer />
          </AnimatedSection>
        </div>
      </AnimatePresence>
    </Router>
  )
}

export default App