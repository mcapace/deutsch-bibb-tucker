'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  heroVariants, 
  staggerContainer, 
  staggerItem, 
  fadeInUp, 
  scaleIn, 
  floating, 
  glow 
} from '@/lib/animations/framer-motion';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-deep-black via-oak-brown/20 to-deep-black">
      {/* Premium Background with Rich Textures */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-transparent to-brown-900/40" />
        <div className="absolute inset-0 bg-[url('/assets/images/wood-texture.jpg')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={floating}
        className="absolute top-20 left-10 w-32 h-32 bg-amber-600/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          ...floating,
          transition: { ...floating.transition, delay: 1 }
        }}
        className="absolute bottom-20 right-10 w-48 h-48 bg-brown-600/10 rounded-full blur-2xl"
      />

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-4 max-w-7xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Main Headline */}
        <motion.div className="mb-16" variants={staggerItem}>
          <motion.div 
            className="inline-block mb-6"
            variants={fadeInUp}
          >
            <span className="text-bourbon-amber text-sm font-medium tracking-widest uppercase">
              November 15, 2025 - March 31, 2026
            </span>
          </motion.div>
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight"
            variants={scaleIn}
          >
            <span className="bg-gradient-to-r from-amber-100 via-amber-200 to-amber-300 bg-clip-text text-transparent">
              The Bourbon Hub
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-amber-100/90 font-light"
            variants={fadeInUp}
          >
            Where innovation meets heritage. Where craft meets culture. 
            Discover the complete bourbon story.
          </motion.p>
        </motion.div>
          
        {/* Premium Brand Cards */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto"
          variants={staggerItem}
        >
          <motion.div 
            className="premium-card p-8 group"
            variants={fadeInUp}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              boxShadow: '0 25px 50px -12px rgba(217, 119, 6, 0.3)'
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">B&T</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-amber-200">
                  Bibb & Tucker
                </h2>
              </div>
              <p className="text-amber-100/80 mb-6 text-lg leading-relaxed">
                Three expressions, one powerful narrative. Innovation meets tradition.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-amber-300">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3" />
                  <span className="font-medium">Gold Roast</span>
                  <span className="ml-auto text-amber-400/70">Coffee Culture Crossover</span>
                </div>
                <div className="flex items-center text-amber-300">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3" />
                  <span className="font-medium">Double Char</span>
                  <span className="ml-auto text-amber-400/70">Bold Grilling Flavors</span>
                </div>
                <div className="flex items-center text-amber-300">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3" />
                  <span className="font-medium">Classic 6</span>
                  <span className="ml-auto text-amber-400/70">Refined Sophistication</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="premium-card p-8 group"
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: '0 25px 50px -12px rgba(217, 119, 6, 0.3)'
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-amber-200">
                  Redemption
                </h2>
              </div>
              <p className="text-amber-100/80 mb-6 text-lg leading-relaxed">
                Pre-Prohibition craftsmanship meets modern palates.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-amber-300">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                  <span className="font-medium">Heritage</span>
                  <span className="ml-auto text-amber-400/70">Pre-Prohibition Craft</span>
                </div>
                <div className="flex items-center text-amber-300">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                  <span className="font-medium">Authenticity</span>
                  <span className="ml-auto text-amber-400/70">Small Batch Integrity</span>
                </div>
                <div className="flex items-center text-amber-300">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                  <span className="font-medium">Craft</span>
                  <span className="ml-auto text-amber-400/70">Made Right</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={staggerItem}
          >
            <motion.a
              href="#hub"
              className="premium-button text-lg px-12 py-4 inline-flex items-center group"
              variants={scaleIn}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px -10px rgba(217, 119, 6, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Discover Your Pour</span>
              <motion.svg 
                className="w-5 h-5 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.a>
            <motion.a
              href="#where-to-buy"
              className="border-2 border-amber-600/60 text-amber-300 hover:bg-amber-600/10 hover:border-amber-500 px-12 py-4 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm"
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(217, 119, 6, 0.1)',
                borderColor: 'rgba(217, 119, 6, 0.8)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Shop the Collection
            </motion.a>
          </motion.div>
        </motion.div>

      {/* Premium Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div 
          className="flex flex-col items-center text-amber-300/70"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-sm font-medium mb-2 tracking-widest uppercase">Explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
