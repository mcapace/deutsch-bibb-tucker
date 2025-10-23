'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, scaleIn } from '@/lib/animations/framer-motion';

export default function InvestmentSection() {
  return (
    <section id="investment" className="section-padding bg-gradient-to-br from-deep-black via-oak-brown/10 to-deep-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/assets/images/wood-texture.jpg')] opacity-5 bg-cover bg-center" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-block mb-6"
            variants={fadeInUp}
          >
            <span className="text-bourbon-amber text-sm font-medium tracking-widest uppercase">
              Investment Breakdown
            </span>
          </motion.div>
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-8"
            variants={scaleIn}
          >
            <span className="bg-gradient-to-r from-amber-100 via-amber-200 to-amber-300 bg-clip-text text-transparent">
              $309,000
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-amber-100/90 max-w-4xl mx-auto leading-relaxed font-light"
            variants={fadeInUp}
          >
            A comprehensive investment that delivers maximum impact across all marketing channels.
          </motion.p>
        </motion.div>

        {/* Investment Breakdown */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12 mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Bibb & Tucker Investment */}
          <motion.div 
            className="premium-card p-8"
            variants={staggerItem}
            whileHover={{ 
              scale: 1.02, 
              y: -5,
              boxShadow: '0 25px 50px -12px rgba(217, 119, 6, 0.3)'
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">B&T</span>
              </div>
              <h3 className="text-3xl font-bold text-amber-200">Bibb & Tucker</h3>
            </div>
            <div className="text-4xl font-bold text-bourbon-amber mb-4">$202,000</div>
            <p className="text-amber-100/80 mb-6 leading-relaxed">
              Innovation meets tradition. Three expressions, one powerful narrative that bridges coffee culture with whiskey appreciation.
            </p>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-amber-600/20">
                <span className="text-amber-300">Q4 2025 (Nov-Dec)</span>
                <span className="text-bourbon-amber font-semibold">$102,500</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-amber-600/20">
                <span className="text-amber-300">Q1 2026 (Jan-Mar)</span>
                <span className="text-bourbon-amber font-semibold">$99,500</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-amber-300">Total Investment</span>
                <span className="text-bourbon-amber font-bold text-lg">$202,000</span>
              </div>
            </div>
          </motion.div>

          {/* Redemption Investment */}
          <motion.div 
            className="premium-card p-8"
            variants={staggerItem}
            whileHover={{ 
              scale: 1.02, 
              y: -5,
              boxShadow: '0 25px 50px -12px rgba(217, 119, 6, 0.3)'
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <h3 className="text-3xl font-bold text-amber-200">Redemption</h3>
            </div>
            <div className="text-4xl font-bold text-bourbon-amber mb-4">$107,000</div>
            <p className="text-amber-100/80 mb-6 leading-relaxed">
              Pre-Prohibition craftsmanship meets modern palates. Small batch authenticity with heritage you can taste.
            </p>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-amber-600/20">
                <span className="text-amber-300">Q4 2025 (Nov-Dec)</span>
                <span className="text-bourbon-amber font-semibold">$48,500</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-amber-600/20">
                <span className="text-amber-300">Q1 2026 (Jan-Mar)</span>
                <span className="text-bourbon-amber font-semibold">$58,500</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-amber-300">Total Investment</span>
                <span className="text-bourbon-amber font-bold text-lg">$107,000</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* What's Included */}
        <motion.div 
          className="premium-card p-12"
          variants={staggerItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-3xl font-bold text-amber-200 mb-8 text-center"
            variants={fadeInUp}
          >
            What This Investment Includes
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">🌐</span>
              </div>
              <h4 className="text-xl font-semibold text-amber-200 mb-3">Digital Hub</h4>
              <p className="text-amber-100/80 text-sm leading-relaxed">
                Central storytelling platform with interactive experiences, brand stories, and product showcases.
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">📰</span>
              </div>
              <h4 className="text-xl font-semibold text-amber-200 mb-3">5 Sponsored Articles</h4>
              <p className="text-amber-100/80 text-sm leading-relaxed">
                Editorial content across Wine Enthusiast & Whisky Advocate with full amplification.
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">🛒</span>
              </div>
              <h4 className="text-xl font-semibold text-amber-200 mb-3">4 Store Promotions</h4>
              <p className="text-amber-100/80 text-sm leading-relaxed">
                WA Store promotional campaigns with custom storefronts and exclusive offers.
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">📧</span>
              </div>
              <h4 className="text-xl font-semibold text-amber-200 mb-3">Email Marketing</h4>
              <p className="text-amber-100/80 text-sm leading-relaxed">
                Newsletter sponsorships and dedicated email blasts to 250K+ subscribers.
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">📱</span>
              </div>
              <h4 className="text-xl font-semibold text-amber-200 mb-3">Social Campaigns</h4>
              <p className="text-amber-100/80 text-sm leading-relaxed">
                Multi-platform paid social campaigns across Instagram, Facebook, and Meta.
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">📊</span>
              </div>
              <h4 className="text-xl font-semibold text-amber-200 mb-3">Analytics & Reporting</h4>
              <p className="text-amber-100/80 text-sm leading-relaxed">
                Complete performance tracking, KPIs, and ROI measurement across all channels.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
