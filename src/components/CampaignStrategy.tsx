'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, scaleIn } from '@/lib/animations/framer-motion';

export default function CampaignStrategy() {
  const phases = [
    {
      period: 'November 15-30, 2025',
      title: 'Holiday Discovery Launch',
      theme: 'The Season of Bold Pours',
      focus: 'Bibb & Tucker Gold Roast: The unexpected gift for coffee lovers',
      investment: '$102,500',
      activities: [
        'Hub launches with both brands',
        'Bibb & Tucker Article #1 (Gold Roast focus)',
        'Both brands in WA Store',
        'Heavy social and native push',
        'Holiday email campaigns begin'
      ]
    },
    {
      period: 'December 1-31, 2025',
      title: 'Peak Holiday Season',
      theme: 'Gift Guide Integration',
      focus: 'All three Bibb & Tucker expressions as gifting options + Redemption heritage',
      investment: '$48,500',
      activities: [
        'Bibb & Tucker Article #2 (all expressions)',
        'Redemption Article #1 (heritage)',
        'Peak holiday promotion',
        'Gift guide integration',
        'Maximum digital presence'
      ]
    },
    {
      period: 'January 1-31, 2026',
      title: 'New Year Momentum',
      theme: 'The Year of Bourbon Exploration',
      focus: 'Start the year with better bourbon - building foundation',
      investment: '$0 (sustained branding)',
      activities: [
        'Sustained branding begins',
        'Monthly emails and social',
        'Hub content refreshed for New Year',
        'Banner campaigns maintain visibility'
      ]
    },
    {
      period: 'February 1-28, 2026',
      title: 'Valentine\'s & Culinary Focus',
      theme: 'Beyond the Pour',
      focus: 'Bold flavors for winter grilling + Valentine\'s Day entertaining',
      investment: '$99,500',
      activities: [
        'Bibb & Tucker Article #3 (culinary/Valentine\'s)',
        'WA Store returns (both brands)',
        'Valentine\'s Day tie-in',
        'Continued branding presence'
      ]
    },
    {
      period: 'March 1-31, 2026',
      title: 'Craft Cocktail Mastery',
      theme: 'Mixology Excellence',
      focus: 'Mastering craft cocktails with Redemption bourbon',
      investment: '$58,500',
      activities: [
        'Redemption Article #2 (mixology)',
        'Spring entertaining content',
        'Campaign crescendo',
        'Performance analysis and learnings'
      ]
    }
  ];

  return (
    <section id="strategy" className="section-padding bg-gradient-to-br from-deep-black via-oak-brown/10 to-deep-black relative overflow-hidden">
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
              Campaign Strategy
            </span>
          </motion.div>
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-8"
            variants={scaleIn}
          >
            <span className="bg-gradient-to-r from-amber-100 via-amber-200 to-amber-300 bg-clip-text text-transparent">
              The Flywheel
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-amber-100/90 max-w-4xl mx-auto leading-relaxed font-light"
            variants={fadeInUp}
          >
            How all elements work together to create a powerful, self-reinforcing marketing ecosystem.
          </motion.p>
        </motion.div>

        {/* The Flywheel Steps */}
        <motion.div 
          className="grid md:grid-cols-4 gap-8 mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { step: 1, title: 'Print Impact', desc: 'Six spreads create immediate brand awareness' },
            { step: 2, title: 'Digital Discovery', desc: 'Readers seek more information online' },
            { step: 3, title: 'Hub Engagement', desc: 'Deep brand storytelling and interaction' },
            { step: 4, title: 'Social Amplification', desc: 'Shared content extends reach' },
            { step: 5, title: 'Community Building', desc: 'Loyal fan base develops' },
            { step: 6, title: 'Word of Mouth', desc: 'Organic recommendations grow' },
            { step: 7, title: 'Premium Positioning', desc: 'Brand perception elevates' },
            { step: 8, title: 'Sales Growth', desc: 'Revenue increases measurably' }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="premium-card p-6 text-center"
              variants={staggerItem}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: '0 25px 50px -12px rgba(217, 119, 6, 0.3)'
              }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">{item.step}</span>
              </div>
              <h3 className="text-lg font-bold text-amber-200 mb-3">{item.title}</h3>
              <p className="text-amber-100/80 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Campaign Timeline */}
        <motion.div 
          className="premium-card p-12"
          variants={staggerItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-3xl font-bold text-amber-200 mb-12 text-center"
            variants={fadeInUp}
          >
            Campaign Timeline
          </motion.h3>
          
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <motion.div 
                key={index}
                className="border-l-4 border-amber-600/30 pl-8 py-6"
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: 'rgba(217, 119, 6, 0.05)'
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <span className="text-bourbon-amber text-sm font-medium tracking-widest uppercase">
                      {phase.period}
                    </span>
                    <h4 className="text-2xl font-bold text-amber-200 mt-2">{phase.title}</h4>
                    <p className="text-amber-300 font-medium mt-1">{phase.theme}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {phase.investment}
                    </span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h5 className="text-lg font-semibold text-amber-400 mb-2">Key Focus:</h5>
                  <p className="text-amber-100/90">{phase.focus}</p>
                </div>
                
                <div>
                  <h5 className="text-lg font-semibold text-amber-400 mb-3">Activities:</h5>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx} className="text-amber-100/80 flex items-start">
                        <span className="text-amber-400 mr-2 mt-1">•</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
