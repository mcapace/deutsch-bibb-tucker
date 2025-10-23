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
              ✨ 2025-2026 Premium Marketing Program
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
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-amber-100/90 font-light mb-8"
            variants={fadeInUp}
          >
            An integrated marketing program that positions Bibb & Tucker and Redemption as leading bourbon brands through strategic digital dominance and sophisticated storytelling.
          </motion.p>
          
          {/* Key Metrics */}
          <motion.div 
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12"
            variants={staggerItem}
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-bourbon-amber mb-2">4.5</div>
              <div className="text-amber-200/80 text-sm font-medium tracking-widest uppercase">Months</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-bourbon-amber mb-2">5</div>
              <div className="text-amber-200/80 text-sm font-medium tracking-widest uppercase">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-bourbon-amber mb-2">1</div>
              <div className="text-amber-200/80 text-sm font-medium tracking-widest uppercase">Digital Hub</div>
            </div>
          </motion.div>
        </motion.div>
          
        {/* Strategic Vision */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16"
          variants={staggerItem}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-amber-200 mb-6"
            variants={fadeInUp}
          >
            Strategic Vision
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-amber-100/90 leading-relaxed"
            variants={fadeInUp}
          >
            One unified story across all touchpoints, creating an immersive brand experience that elevates Bibb & Tucker and Redemption to the pinnacle of luxury bourbon marketing.
          </motion.p>
        </motion.div>

        {/* Three Pillars */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerItem}
        >
          <motion.div 
            className="premium-card p-8 text-center"
            variants={fadeInUp}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              boxShadow: '0 25px 50px -12px rgba(217, 119, 6, 0.3)'
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-2xl">📱</span>
            </div>
            <h3 className="text-2xl font-bold text-amber-200 mb-4">Digital Hub</h3>
            <p className="text-amber-100/80 leading-relaxed">
              Central storytelling platform that amplifies the brand message and creates deeper engagement with both bourbon brands.
            </p>
          </motion.div>

          <motion.div 
            className="premium-card p-8 text-center"
            variants={fadeInUp}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              boxShadow: '0 25px 50px -12px rgba(217, 119, 6, 0.3)'
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-2xl">📰</span>
            </div>
            <h3 className="text-2xl font-bold text-amber-200 mb-4">Editorial Content</h3>
            <p className="text-amber-100/80 leading-relaxed">
              Five sponsored articles across Wine Enthusiast & Whisky Advocate, ensuring maximum visibility and strategic positioning.
            </p>
          </motion.div>

          <motion.div 
            className="premium-card p-8 text-center"
            variants={fadeInUp}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              boxShadow: '0 25px 50px -12px rgba(217, 119, 6, 0.3)'
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-2xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold text-amber-200 mb-4">Amplification</h3>
            <p className="text-amber-100/80 leading-relaxed">
              Strategic digital amplification that extends reach and creates measurable impact across all channels.
            </p>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16"
          variants={staggerItem}
        >
          <motion.a
            href="#investment"
            className="premium-button text-lg px-12 py-4 inline-flex items-center group"
            variants={scaleIn}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px -10px rgba(217, 119, 6, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Investment</span>
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
            href="#strategy"
            className="border-2 border-amber-600/60 text-amber-300 hover:bg-amber-600/10 hover:border-amber-500 px-12 py-4 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm"
            variants={fadeInUp}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'rgba(217, 119, 6, 0.1)',
              borderColor: 'rgba(217, 119, 6, 0.8)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Strategy
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
