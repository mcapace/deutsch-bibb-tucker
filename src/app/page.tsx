'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import { 
  TrendingUp, 
  Users, 
  Target, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Star,
  Globe,
  Smartphone,
  Monitor,
  Zap,
  Award,
  DollarSign,
  Calendar,
  Clock,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  Leaf,
  Cigarette,
  Flame,
  Sparkles,
  Crown,
  Gem,
  BookOpen,
  PenTool,
  Camera,
  Palette,
  Lightbulb,
  Shield,
  Heart,
  Coffee,
  Cloud
} from 'lucide-react'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const { scrollYProgress } = useScroll()
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  return (
    <main className="bg-gradient-to-b from-neutral-50 via-amber-50/30 to-red-50/20 text-slate-900 overflow-x-hidden">
      
      {/* Navigation Header */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-amber-200/30"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-red-700 rounded-lg flex items-center justify-center">
                <Crown className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold text-slate-900">Bourbon Hub</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-slate-700 hover:text-amber-600 font-medium transition-colors"
              >
                Overview
              </button>
              <button 
                onClick={() => scrollToSection('strategy')}
                className="text-slate-700 hover:text-amber-600 font-medium transition-colors"
              >
                Strategy
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-slate-700 hover:text-amber-600 font-medium transition-colors"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('investment')}
                className="text-slate-700 hover:text-amber-600 font-medium transition-colors"
              >
                Investment
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-slate-700 hover:text-amber-600 font-medium transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-red-700 to-amber-800 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <motion.section 
        id="hero"
        style={{ opacity, scale }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-20"
      >
        {/* Bourbon Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 via-amber-50/20 to-orange-50/10"></div>
          {/* Bourbon Barrel/Field Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-gradient-to-br from-amber-200/20 to-orange-200/20"></div>
          </div>
          <div className="absolute top-20 left-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-stone-200/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              {/* Bibb & Tucker & Redemption Logos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-8"
              >
                <div className="flex justify-center lg:justify-start items-center space-x-8">
                  <div className="w-40 h-40 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center shadow-2xl p-4">
                  <img 
                    src="/images/bib-tucker-logo.png" 
                    alt="Bibb & Tucker Logo" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) {
                        nextElement.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="text-white font-bold text-2xl flex items-center justify-center w-full h-full" style={{display: 'none'}}>
                    <div className="text-center">
                      <div className="text-4xl mb-2">🥃</div>
                      <div className="text-lg">B&T</div>
                    </div>
                  </div>
                  </div>
                  <div className="text-4xl font-light text-slate-800">×</div>
                  <div className="w-40 h-40 bg-gradient-to-br from-red-700 to-red-900 rounded-2xl flex items-center justify-center shadow-2xl p-4">
                    <img 
                      src="/images/redemption-logo.png" 
                      alt="Redemption Logo" 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                        if (nextElement) {
                          nextElement.style.display = 'block';
                        }
                      }}
                    />
                      <div className="text-white font-bold text-2xl flex items-center justify-center w-full h-full" style={{display: 'none'}}>
                        <div className="text-center">
                          <div className="text-4xl mb-2">🍷</div>
                          <div className="text-lg">R</div>
                        </div>
                      </div>
                  </div>
            </div>
          </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="inline-block bg-gradient-to-r from-amber-600 to-red-700 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg"
              >
                🥃 M Shanken Communications | Whisky Advocate Platform
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                <span className="block text-4xl lg:text-5xl text-amber-700 font-semibold mb-4">
                  The Bourbon Hub
                </span>
                <span className="block text-2xl lg:text-3xl text-slate-700 font-medium mb-6">
                  Where Authority Meets Innovation
                </span>
          </h1>

              <p className="text-xl text-slate-900 mb-8 max-w-3xl font-medium leading-relaxed">
                <strong>Establishing Deutsch Family Wine & Spirits as THE bourbon voice during the industry's most critical sales period.</strong>
              </p>

              <div className="text-lg text-slate-800 mb-8">
                <div className="font-semibold text-amber-700 mb-2">Bibb & Tucker + Redemption</div>
                <div className="font-medium">November 15, 2025 - March 31, 2026</div>
              </div>

              {/* Key Stats Visual Treatment */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-amber-700">$309,000</div>
                  <div className="text-sm font-medium text-slate-800">Total Investment</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-amber-700">4.5 Months</div>
                  <div className="text-sm font-medium text-slate-800">Sustained Presence</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-amber-700">2 Brands</div>
                  <div className="text-sm font-medium text-slate-800">1 Unified Story</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-amber-700">Peak Season</div>
                  <div className="text-sm font-medium text-slate-800">Bourbon Capture</div>
                </div>
              </div>
              
            </motion.div>

          <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-200/30">
                <h3 className="text-2xl font-semibold text-slate-900 mb-6 text-center">The Bourbon Portfolio</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-amber-600 to-red-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Coffee className="text-white" size={32} />
                    </div>
                    <h4 className="text-2xl font-semibold text-amber-700 mb-2">Bibb & Tucker</h4>
                    <p className="text-slate-900 font-semibold">Innovation meets tradition</p>
                    <p className="text-slate-800 text-sm mt-2">Three expressions, endless possibilities</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-red-700 to-red-900 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Award className="text-white" size={32} />
                    </div>
                    <h4 className="text-2xl font-semibold text-red-700 mb-2">Redemption</h4>
                    <p className="text-slate-900 font-semibold">Pre-Prohibition craft</p>
                    <p className="text-slate-800 text-sm mt-2">Heritage you can taste</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-amber-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 mb-2">November 15, 2025 - March 31, 2026</div>
                    <p className="text-slate-900 font-semibold">Campaign Duration</p>
                  </div>
                </div>
            </div>
          </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Strategic Vision Section */}
      <section className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
              THE STRATEGIC VISION
            </h2>
            <p className="text-xl text-slate-900 max-w-4xl mx-auto font-semibold leading-relaxed mb-8">
              <strong>Establishing Deutsch Family Wine & Spirits as the Authority in Premium American Bourbon</strong>
            </p>
            <p className="text-lg text-slate-800 max-w-4xl mx-auto font-medium leading-relaxed">
              This integrated digital campaign creates a unified bourbon destination across Whisky Advocate platforms, positioning Bibb & Tucker and Redemption as the essential voices in American whiskey during the critical holiday season and New Year bourbon exploration period.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
        <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <BookOpen className="text-white" size={32} />
        </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">The Bourbon Hub</h3>
              <p className="text-slate-900 font-semibold leading-relaxed mb-4">
                <strong>Central storytelling platform where craft meets culture, heritage meets innovation, and connoisseurs discover their next favorite pour.</strong>
              </p>
              <ul className="text-slate-800 font-medium space-y-2">
                <li>• Interactive flavor profile matcher</li>
                <li>• Cocktail recipe library with filters</li>
                <li>• Bourbon 101 educational content</li>
                <li>• Direct Whisky Advocate Store integration</li>
              </ul>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Editorial Authority</h3>
              <p className="text-slate-900 font-semibold leading-relaxed mb-4">
                <strong>Five sponsored articles across Whisky Advocate that establish editorial credibility and drive qualified traffic to the Hub.</strong>
              </p>
              <ul className="text-slate-800 font-medium space-y-2">
                <li>• 3 Bibb & Tucker articles (Gold Roast focus)</li>
                <li>• 2 Redemption heritage stories</li>
                <li>• 800-1,200 words each</li>
                <li>• Permanent SEO assets</li>
              </ul>
          </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
          >
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Zap className="text-white" size={32} />
          </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Integrated Amplification</h3>
              <p className="text-slate-900 font-semibold leading-relaxed mb-4">
                <strong>Multi-channel digital amplification that drives traffic back to the central Hub story.</strong>
              </p>
              <ul className="text-slate-800 font-medium space-y-2">
                <li>• Dedicated E-blasts and Whisky Notes newsletter (250K+ subscribers)</li>
                <li>• Paid social (Instagram, Facebook)</li>
                <li>• Native advertising extensions</li>
                <li>• Display banners and retargeting</li>
              </ul>
        </motion.div>
          </div>
        </div>
      </section>

      {/* The Gold Roast Opportunity Section */}
      <section className="py-24 bg-gradient-to-br from-amber-100/50 to-orange-100/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
              THE GOLD ROAST OPPORTUNITY
            </h2>
            <p className="text-xl text-slate-900 max-w-4xl mx-auto font-semibold leading-relaxed mb-8">
              <strong>Why Gold Roast Deserves Special Emphasis - It's a Genuine Innovation</strong>
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-200/50"
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">The Coffee-Bourbon Bridge</h3>
              <div className="space-y-4">
                <div className="bg-amber-50/50 rounded-xl p-4">
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Market Opportunity</h4>
                  <ul className="text-slate-900 font-medium space-y-1">
                    <li>• 68% of Americans drink coffee daily</li>
                    <li>• 30% are bourbon drinkers</li>
                    <li>• Gold Roast converts coffee connoisseurs to bourbon consumers</li>
                    <li>• Creates a NEW entry point into the category</li>
                  </ul>
                </div>
                <div className="bg-amber-50/50 rounded-xl p-4">
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Strategic Value</h4>
                  <ul className="text-slate-900 font-medium space-y-1">
                    <li>• Differentiates from EVERY competitor</li>
                    <li>• Creates conversation beyond bourbon connoisseurs</li>
                    <li>• Attracts younger, diverse consumers</li>
                    <li>• Gives retailers a story to tell</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/50">
                <h4 className="text-xl font-semibold text-slate-900 mb-4">The Story Writes Itself</h4>
                <ul className="text-slate-900 font-medium space-y-2">
                  <li>• "For the coffee lover who thought they didn't like bourbon"</li>
                  <li>• "Your morning ritual meets your evening pour"</li>
                  <li>• "Espresso by day, Gold Roast by night"</li>
                  <li>• Brunch entertaining angle</li>
                  <li>• Bourbon-spiked coffee recipes</li>
                </ul>
              </div>


              <div className="bg-gradient-to-r from-amber-600 to-red-700 rounded-2xl p-6 shadow-lg text-white">
                <h4 className="text-xl font-semibold mb-4">Campaign Strategy</h4>
                <p className="font-semibold">
                  <strong>Gold Roast LEADS the narrative as your innovation flagship.</strong> This strategic approach positions Gold Roast as the breakthrough product that captures attention, then seamlessly introduces consumers to your complete Bibb & Tucker portfolio, maximizing cross-selling opportunities and brand loyalty.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-24 bg-gradient-to-br from-stone-50/50 to-amber-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
              THE BOURBON PORTFOLIO
            </h2>
            <p className="text-xl text-slate-900 max-w-4xl mx-auto font-semibold leading-relaxed">
              <strong>Two complementary brands representing the complete spectrum of American bourbon excellence.</strong>
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-200/50"
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-6 text-center">Bibb & Tucker Collection</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="w-24 h-32 bg-gradient-to-b from-amber-100 to-amber-200 rounded-lg flex items-center justify-center mb-2 shadow-lg">
                    <img 
                      src="/images/gold-roast-bottle.jpg" 
                      alt="Bibb & Tucker Gold Roast" 
                      className="w-full h-full object-contain rounded-lg"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                        if (nextElement) {
                          nextElement.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="text-amber-600 font-bold text-xs" style={{display: 'none'}}>Gold Roast</div>
                  </div>
                  <p className="text-xs font-semibold text-slate-900">Gold Roast</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-32 bg-gradient-to-b from-amber-100 to-amber-200 rounded-lg flex items-center justify-center mb-2 shadow-lg">
                    <img 
                      src="/images/double-char-bottle.jpg" 
                      alt="Bibb & Tucker Double Char" 
                      className="w-full h-full object-contain rounded-lg"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                        if (nextElement) {
                          nextElement.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="text-amber-600 font-bold text-xs" style={{display: 'none'}}>Double Char</div>
                  </div>
                  <p className="text-xs font-semibold text-slate-900">Double Char</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-32 bg-gradient-to-b from-amber-100 to-amber-200 rounded-lg flex items-center justify-center mb-2 shadow-lg">
                    <img 
                      src="/images/classic-six-bottle.jpg" 
                      alt="Bibb & Tucker Classic 6" 
                      className="w-full h-full object-contain rounded-lg"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                        if (nextElement) {
                          nextElement.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="text-amber-600 font-bold text-xs" style={{display: 'none'}}>Classic 6</div>
                  </div>
                  <p className="text-xs font-semibold text-slate-900">Classic 6</p>
                </div>
              </div>
              <div className="bg-amber-50/50 rounded-xl p-4">
                <h4 className="product-title">Innovation Meets Tradition</h4>
                <p className="product-description">
                  Three expressions, endless possibilities. The bourbon with an expression for every moment, every palate, every occasion.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-red-200/50"
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-6 text-center">Redemption Collection</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="w-24 h-32 bg-gradient-to-b from-red-100 to-red-200 rounded-lg flex items-center justify-center mb-2 shadow-lg">
                    <img 
                      src="/images/placeholder-bottle.jpg" 
                      alt="Redemption Rye" 
                      className="w-full h-full object-contain rounded-lg"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                        if (nextElement) {
                          nextElement.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="text-red-600 font-bold text-xs" style={{display: 'none'}}>Rye</div>
                  </div>
                  <p className="text-xs font-semibold text-slate-900">Rye</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-32 bg-gradient-to-b from-red-100 to-red-200 rounded-lg flex items-center justify-center mb-2 shadow-lg">
                    <img 
                      src="/images/placeholder-bottle.jpg" 
                      alt="Redemption Bourbon" 
                      className="w-full h-full object-contain rounded-lg"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                        if (nextElement) {
                          nextElement.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="text-red-600 font-bold text-xs" style={{display: 'none'}}>Bourbon</div>
                  </div>
                  <p className="text-xs font-semibold text-slate-900">Bourbon</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-32 bg-gradient-to-b from-red-100 to-red-200 rounded-lg flex items-center justify-center mb-2 shadow-lg">
                    <img 
                      src="/images/placeholder-bottle.jpg" 
                      alt="Redemption Single Barrel" 
                      className="w-full h-full object-contain rounded-lg"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                        if (nextElement) {
                          nextElement.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="text-red-600 font-bold text-xs" style={{display: 'none'}}>Single Barrel</div>
                  </div>
                  <p className="text-xs font-semibold text-slate-900">Single Barrel</p>
                </div>
              </div>
              <div className="bg-red-50/50 rounded-xl p-4">
                <h4 className="product-title">Pre-Prohibition Craft</h4>
                <p className="product-description">
                  Heritage bourbon authority that anchors the category while Bibb & Tucker innovates. Made right since the beginning.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Opportunity */}
      <section id="strategic-opportunity" className="py-24 bg-gradient-to-br from-slate-50 to-amber-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
              Beyond Advertising: Building Bourbon Authority
            </h2>
            <p className="text-xl text-slate-900 max-w-4xl mx-auto font-medium leading-relaxed">
              <strong>The bourbon category is crowded. Every brand is shouting. Every distillery claims heritage. Every expression promises craft.</strong>
            </p>
            <p className="text-xl text-slate-900 max-w-4xl mx-auto font-medium leading-relaxed mt-4">
              <strong>How does Deutsch Family Wine & Spirits rise above the noise?</strong>
            </p>
            <p className="text-2xl text-amber-700 font-semibold mt-6">
              Not by shouting louder. By becoming the authority.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-200/50 mb-12"
            >
              <h3 className="text-3xl font-semibold text-slate-900 mb-6 text-center">THE BOURBON HUB</h3>
              <p className="text-lg text-slate-800 mb-6 font-medium leading-relaxed">
                A dedicated digital destination on Whisky Advocate and Wine Enthusiast where two complementary bourbon brands—Bibb & Tucker and Redemption—tell one unified story about American bourbon excellence.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-amber-50/50 rounded-xl p-6">
                  <div className="text-2xl font-semibold text-amber-700 mb-2">This isn't a campaign.</div>
                  <div className="text-slate-800 font-medium">It's a platform.</div>
                </div>
                <div className="bg-amber-50/50 rounded-xl p-6">
                  <div className="text-2xl font-semibold text-amber-700 mb-2">This isn't advertising.</div>
                  <div className="text-slate-800 font-medium">It's authority-building.</div>
                </div>
                <div className="bg-amber-50/50 rounded-xl p-6">
                  <div className="text-2xl font-semibold text-amber-700 mb-2">This isn't a microsite.</div>
                  <div className="text-slate-800 font-medium">It's your permanent address.</div>
                </div>
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-200/50"
              >
                <h4 className="text-xl font-semibold text-amber-700 mb-4">ONE UNIFIED STORY</h4>
                <p className="text-slate-800 font-medium leading-relaxed">
                  Instead of two separate campaigns competing for attention, Bibb & Tucker and Redemption share one powerful platform.
                </p>
                <p className="text-slate-800 font-semibold mt-4">
                  The result? Double the brand presence. Half the noise. One authoritative voice.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-200/50"
              >
                <h4 className="text-xl font-semibold text-amber-700 mb-4">STRATEGIC TIMING</h4>
                <p className="text-slate-800 font-medium leading-relaxed">
                  November through March isn't random—it's the bourbon sweet spot covering three distinct buying cycles:
                </p>
                <ul className="text-slate-800 font-medium mt-4 space-y-1">
                  <li>• Holiday Gifting Season (Nov-Dec)</li>
                  <li>• New Year Momentum (Jan-Feb)</li>
                  <li>• Spring Festival Season (Feb-Mar)</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-200/50"
              >
                <h4 className="text-xl font-semibold text-amber-700 mb-4">THE RIGHT AUDIENCE</h4>
                <p className="text-slate-800 font-medium leading-relaxed">
                  Whisky Advocate and Wine Enthusiast readers aren't casual drinkers:
                </p>
                <ul className="text-slate-800 font-medium mt-4 space-y-1">
                  <li>• HHI $150K+ (60% of readership)</li>
                  <li>• Age 35-65 (peak bourbon spending years)</li>
                  <li>• Active enthusiasts seeking knowledge</li>
                  <li>• Brand advocates who influence networks</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience & Brand Positioning Section */}
      <section id="strategy" className="py-24 bg-gradient-to-br from-amber-50/50 to-red-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
              TARGET AUDIENCE & BRAND POSITIONING
            </h2>
            <p className="text-xl text-slate-900 max-w-4xl mx-auto font-medium leading-relaxed mb-8">
              <strong>Reaching the right bourbon connoisseurs at the perfect moment in their discovery journey.</strong>
            </p>
            <p className="text-lg text-slate-800 max-w-4xl mx-auto font-normal leading-relaxed">
              We're hitting consumers at THREE peak intent moments: Holiday Gifting (Nov-Dec), New Year Reset (January), and Valentine's & Spring (Feb-March).
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-200/50"
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Primary: The Curious Enthusiast</h3>
              <div className="space-y-6">
                <div className="bg-amber-50/50 rounded-xl p-4">
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">Demographics</h4>
                  <p className="text-slate-900 font-medium">Ages 30-55, HHI $75K+, 60% male / 40% female</p>
                </div>
                <div className="bg-amber-50/50 rounded-xl p-4">
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">Psychographics</h4>
                  <ul className="text-slate-900 font-medium space-y-2">
                    <li>• Appreciates quality over quantity</li>
                    <li>• Seeks authentic stories and craftsmanship</li>
                    <li>• Entertains at home regularly</li>
                    <li>• Values education and discovery</li>
                    <li>• Active on social media (Instagram primary)</li>
                  </ul>
                </div>
                <div className="bg-amber-50/50 rounded-xl p-4">
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">Bourbon Relationship</h4>
                  <ul className="text-slate-900 font-semibold space-y-2">
                    <li>• Owns 3-8 bottles at home</li>
                    <li>• Willing to experiment with new brands</li>
                    <li>• Reads reviews before purchasing</li>
                    <li>• Influenced by peer recommendations</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-200/50">
                <h4 className="text-xl font-semibold text-slate-900 mb-4">Secondary: The Gift Seeker</h4>
                <div className="bg-amber-50/50 rounded-xl p-4 mb-4">
                  <p className="text-slate-900 font-medium leading-relaxed mb-3">
                    <strong>Ages 25-60, HHI $60K+, all genders.</strong> Wants to give thoughtful, impressive gifts and seeks guidance on quality purchases.
                  </p>
                </div>
                <p className="text-slate-900 font-medium">
                  May not be a bourbon drinker themselves but knows recipients appreciate bourbon and needs education on what makes one bourbon different from another.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-200/50">
                <h4 className="text-xl font-semibold text-slate-900 mb-4">Tertiary: The Coffee Crossover</h4>
                <div className="bg-amber-50/50 rounded-xl p-4 mb-4">
                  <p className="text-slate-900 font-medium leading-relaxed mb-3">
                    <strong>Ages 25-45, HHI $50K+, urban/suburban.</strong> Coffee connoisseur with foodie sensibility who may think "I don't like whiskey."
                  </p>
                </div>
                <p className="text-slate-900 font-medium">
                  Bourbon-curious but intimidated, needs a familiar entry point (coffee) and could become loyal bourbon consumer with right introduction.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-200/50"
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Bibb & Tucker: Innovation Meets Tradition</h3>
              <div className="space-y-6">
                <div className="bg-amber-50/50 rounded-xl p-4">
                  <h4 className="product-title">Brand Voice</h4>
                  <p className="product-description">Confident but approachable, innovative but grounded, sophisticated but not pretentious</p>
                </div>
                <div className="bg-amber-50/50 rounded-xl p-4">
                  <h4 className="product-title">Key Themes</h4>
                  <ul className="product-description space-y-2">
                    <li>• Three expressions, endless possibilities</li>
                    <li>• The bourbon that bridges worlds</li>
                    <li>• Innovation rooted in craft</li>
                    <li>• Something for every moment</li>
                  </ul>
                </div>
                <div className="bg-amber-50/50 rounded-xl p-4">
                  <h4 className="product-title">Tone</h4>
                  <p className="product-description">Bold, friendly, educational, aspirational</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-red-200/50"
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Redemption: Pre-Prohibition Craft</h3>
              <div className="space-y-6">
                <div className="bg-red-50/50 rounded-xl p-4">
                  <h4 className="product-title">Brand Voice</h4>
                  <p className="product-description">Authoritative but accessible, heritage-focused but not old-fashioned</p>
                </div>
                <div className="bg-red-50/50 rounded-xl p-4">
                  <h4 className="product-title">Key Themes</h4>
                  <ul className="product-description space-y-2">
                    <li>• Pre-Prohibition authenticity</li>
                    <li>• Small batch integrity</li>
                    <li>• Made right, not just made fast</li>
                    <li>• Heritage you can taste</li>
                  </ul>
                </div>
                <div className="bg-red-50/50 rounded-xl p-4">
                  <h4 className="product-title">Tone</h4>
                  <p className="product-description">Authoritative, warm, craft-focused, timeless</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Brand Heritage Section */}
      <section className="py-24 bg-gradient-to-br from-green-50/30 to-amber-50/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
              Our Brand Understanding
            </h2>
            <p className="text-xl text-slate-900 max-w-3xl mx-auto font-medium leading-relaxed">
              <strong>We understand the Deutsch family's commitment to excellence in American whiskey.</strong> Our campaign strategy leverages this heritage to position Bibb & Tucker and Redemption as the premium choice for discerning bourbon connoisseurs.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-green-200/30">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">Campaign Positioning Strategy</h3>
                  <p className="text-slate-900 font-medium leading-relaxed">
                    <strong>We position your brands as the pinnacle of American whiskey craftsmanship.</strong> Our campaign emphasizes the distillery-to-bottle excellence that sets Bibb & Tucker and Redemption apart in the premium bourbon market.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Leaf className="text-white" size={24} />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">Heritage Storytelling</h4>
                    <p className="text-slate-700 font-medium text-sm">Premium positioning</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Award className="text-white" size={24} />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">Brand Differentiation</h4>
                    <p className="text-slate-700 font-medium text-sm">Market leadership</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Heart className="text-white" size={24} />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">Emotional Connection</h4>
                    <p className="text-slate-700 font-medium text-sm">Brand loyalty</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Crown className="text-white" size={24} />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">Premium Positioning</h4>
                    <p className="text-slate-700 font-medium text-sm">Market dominance</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-200/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-red-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Leaf className="text-white" size={20} />
                  </div>
                  <h4 className="text-xl font-light text-slate-800">Bourbon Production</h4>
                </div>
                <p className="text-slate-800 font-light leading-relaxed">
                  Our team works directly in the distillery, ensuring every barrel meets our exacting standards for premium bourbon production.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-200/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-red-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Crown className="text-white" size={20} />
                  </div>
                  <h4 className="text-xl font-light text-slate-800">Hand-Crafted Excellence</h4>
                </div>
                <p className="text-slate-800 font-light leading-relaxed">
                  From grain to finished bourbon, every step is overseen by our experienced team to ensure the highest quality standards.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-200/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-red-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Heart className="text-white" size={20} />
                  </div>
                  <h4 className="text-xl font-light text-slate-800">Family Heritage</h4>
                </div>
                <p className="text-slate-800 font-light leading-relaxed">
                  Multi-generational expertise passed down through the Deutsch family, creating bourbons that honor tradition while embracing innovation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium Products Section */}
      <section id="products" className="py-24 bg-gradient-to-br from-amber-50/30 to-red-50/20">
        <div className="container mx-auto px-6">
                  <motion.div
            initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-slate-800 mb-6">
              Complete Bourbon Portfolio
            </h2>
            <p className="text-xl text-slate-800 max-w-3xl mx-auto font-light leading-relaxed">
              The full Bibb & Tucker and Redemption collection - from innovative blends to heritage expressions, each representing generations of bourbon expertise.
            </p>
                  </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-red-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Coffee className="text-white" size={20} />
              </div>
                  <h4 className="text-xl font-light text-slate-800">Bibb & Tucker Gold Roast</h4>
                </div>
                <p className="text-slate-800 font-light leading-relaxed">
                  The bourbon that bridges coffee culture with whiskey appreciation. Small batch bourbon with bold innovation for the coffee lover who thought they didn't like bourbon.
                </p>
          </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-red-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Crown className="text-white" size={20} />
                  </div>
                  <h4 className="text-xl font-light text-slate-800">Bibb & Tucker Double Char</h4>
                </div>
                <p className="text-slate-800 font-light leading-relaxed">
                  Intense refined flavor for those who demand more. The perfect pairing for bold moments and grilling season meets bourbon season.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-red-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Gem className="text-white" size={20} />
                  </div>
                  <h4 className="text-xl font-light text-slate-800">Bibb & Tucker Classic 6</h4>
                </div>
                <p className="text-slate-800 font-light leading-relaxed">
                  Sophisticated complex and smooth for low and slow perfection. Six years of patience in every pour, the bourbon that earns its place in your collection.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-red-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Flame className="text-white" size={20} />
                  </div>
                  <h4 className="text-xl font-light text-slate-800">Redemption Heritage</h4>
                </div>
                <p className="text-slate-800 font-light leading-relaxed">
                  Pre-Prohibition craft meets modern palates. Made right since the beginning, the bourbon connoisseur's bourbon with small batch integrity.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-red-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Cloud className="text-white" size={20} />
                  </div>
                  <h4 className="text-xl font-light text-slate-800">Redemption Small Batch</h4>
                </div>
                <p className="text-slate-800 font-light leading-relaxed">
                  Small batch. Big heritage. Crafted for cocktails, perfect neat. The bourbon that represents the ethereal qualities of hand-crafted excellence.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-red-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Star className="text-white" size={20} />
                  </div>
                  <h4 className="text-xl font-light text-slate-800">Redemption Made Right</h4>
                </div>
                <p className="text-slate-800 font-light leading-relaxed">
                  The original expression that started it all. Made right, not just made fast. Heritage you can taste with classic bourbon flavors and traditional craftsmanship.
                </p>
              </div>
            </motion.div>

          <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-200/30">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-light text-slate-800 mb-4">The Bourbon Collection</h3>
                  <p className="text-slate-800 font-light leading-relaxed">
                    Each bourbon represents generations of expertise, from grain selection to the final barrel-aged masterpiece.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Leaf className="text-white" size={24} />
                    </div>
                    <h4 className="text-lg font-light text-slate-800 mb-1">Premium Grains</h4>
                    <p className="text-slate-500 font-light text-sm">Finest American corn</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Award className="text-white" size={24} />
                    </div>
                    <h4 className="text-lg font-light text-slate-800 mb-1">Award Winning</h4>
                    <p className="text-slate-500 font-light text-sm">Industry recognition</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Heart className="text-white" size={24} />
                    </div>
                    <h4 className="text-lg font-light text-slate-800 mb-1">Hand Crafted</h4>
                    <p className="text-slate-500 font-light text-sm">Artisanal excellence</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Crown className="text-white" size={24} />
                    </div>
                    <h4 className="text-lg font-light text-slate-800 mb-1">Heritage</h4>
                    <p className="text-slate-500 font-light text-sm">Multi-generational</p>
                  </div>
                </div>
              </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Digital Hub Section */}
      <section className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-slate-800 mb-6">
              Digital Hub
            </h2>
            <p className="text-xl text-slate-800 max-w-3xl mx-auto font-light leading-relaxed">
              Central storytelling platform that amplifies the brand message and creates deeper engagement with both bourbon brands.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-red-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Monitor className="text-white" size={20} />
                  </div>
                  <h4 className="text-xl font-light text-slate-800">Interactive Experience</h4>
                </div>
                <p className="text-slate-800 font-light leading-relaxed">
                  Immersive digital experiences that bring the bourbon story to life through rich media and interactive content.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-red-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Heart className="text-white" size={20} />
              </div>
                  <h4 className="text-xl font-light text-slate-800">Brand Storytelling</h4>
                </div>
                <p className="text-slate-800 font-light leading-relaxed">
                  Deep dive into the bourbon heritage, craftsmanship, and the passion that goes into every bottle.
                </p>
            </div>
          </motion.div>

                <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-200/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-red-700 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <Globe className="text-white" size={24} />
                    </div>
                  <h3 className="text-2xl font-light text-slate-800">Campaign Strategy</h3>
                    </div>
                
                <div className="space-y-4">
                  <div className="bg-amber-50/50 rounded-xl p-4">
                    <h4 className="font-medium text-slate-800 mb-2">Central Storytelling Hub</h4>
                    <p className="text-slate-800 font-light text-sm leading-relaxed">
                      Your complete brand narrative platform where heritage, products, and events come together in one cohesive experience.
                    </p>
                  </div>
                  
                  <div className="bg-amber-50/50 rounded-xl p-4">
                    <h4 className="font-medium text-slate-800 mb-2">Sponsored Content Integration</h4>
                    <p className="text-slate-800 font-light text-sm leading-relaxed">
                      Editorial articles that validate your brand story with Wine Enthusiast & Whisky Advocate's trusted voice and credibility.
                    </p>
                  </div>
                  
                  <div className="bg-amber-50/50 rounded-xl p-4">
                    <h4 className="font-medium text-slate-800 mb-2">Multi-Channel Amplification</h4>
                    <p className="text-slate-800 font-light text-sm leading-relaxed">
                      Email, social, and display campaigns that drive traffic back to your central hub story.
                    </p>
                  </div>
                </div>
              </div>
                </motion.div>
          </div>
        </div>
      </section>

      {/* The Flywheel Section */}
      <section className="py-24 bg-gradient-to-br from-stone-50/50 to-amber-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-slate-800 mb-6">
              The Flywheel
            </h2>
            <p className="text-xl text-slate-800 max-w-3xl mx-auto font-light leading-relaxed">
              How all elements work together to create a powerful, self-reinforcing marketing ecosystem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Digital Impact", desc: "Hub creates immediate brand awareness" },
              { step: "2", title: "Content Discovery", desc: "Readers seek more information online" },
              { step: "3", title: "Hub Engagement", desc: "Deep brand storytelling and interaction" },
              { step: "4", title: "Social Amplification", desc: "Shared content extends reach" },
              { step: "5", title: "Community Building", desc: "Loyal fan base develops" },
              { step: "6", title: "Word of Mouth", desc: "Organic recommendations grow" },
              { step: "7", title: "Premium Positioning", desc: "Brand perception elevates" },
              { step: "8", title: "Sales Growth", desc: "Revenue increases measurably" }
            ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/30 hover:shadow-xl transition-all duration-300"
                >
                <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-red-700 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                <h3 className="text-lg font-light text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-800 font-light text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Roast Differentiator */}
      <section className="py-24 bg-gradient-to-br from-amber-50/50 to-orange-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
              Coffee Culture Meets Bourbon Heritage
            </h2>
            <p className="text-xl text-slate-900 max-w-4xl mx-auto font-semibold leading-relaxed">
              <strong>The Innovation That Drives Discovery</strong>
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-200/50 mb-12"
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Why Gold Roast Changes Everything</h3>
              <p className="text-lg text-slate-800 mb-6 font-medium leading-relaxed">
                Bourbon marketing faces a fundamental challenge: How do you stand out when every brand claims heritage, craft, and quality?
              </p>
              <p className="text-lg text-slate-800 mb-6 font-semibold">
                Gold Roast solves this with genuine innovation that creates CONVERSATION.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-amber-700 mb-4">The Partnership Story</h4>
                  <p className="text-slate-800 font-medium leading-relaxed mb-4">
                    Muletown Coffee's exclusive roast → Bibb & Tucker barrels
                  </p>
                  <p className="text-slate-800 font-medium leading-relaxed">
                    This isn't just a flavor innovation. It's a PARTNERSHIP STORY that bridges two premium beverage cultures. It creates content opportunities, cross-promotional possibilities, and dual-category appeal.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-amber-700 mb-4">Content Opportunities</h4>
                  <ul className="text-slate-800 font-medium space-y-2">
                    <li>• "From Bean to Barrel" production story</li>
                    <li>• Coffee-bourbon pairing guides</li>
                    <li>• Barista and bartender collaborations</li>
                    <li>• Morning-to-evening consumption narratives</li>
                    <li>• Cross-category consumer education</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-200/50"
              >
                <h4 className="text-xl font-semibold text-amber-700 mb-4">Coffee Enthusiasts</h4>
                <p className="text-slate-800 font-medium leading-relaxed">
                  Curious about bourbon, seeking new flavor territories, and open to premium beverage exploration.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-200/50"
              >
                <h4 className="text-xl font-semibold text-amber-700 mb-4">Bourbon Drinkers</h4>
                <p className="text-slate-800 font-medium leading-relaxed">
                  Exploring new territories, seeking cocktail differentiation, and looking for conversation-starting expressions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-200/50"
              >
                <h4 className="text-xl font-semibold text-amber-700 mb-4">Gift Buyers</h4>
                <p className="text-slate-800 font-medium leading-relaxed">
                  Wanting something memorable, seeking unique gifts, and looking for genuinely new bourbon stories.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Summary Section */}
      <section id="investment" className="py-24 bg-gradient-to-br from-slate-50 to-amber-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
              $309K TOTAL DIGITAL BUDGET
            </h2>
            <p className="text-xl text-slate-900 max-w-3xl mx-auto font-medium leading-relaxed">
              <strong>Comprehensive Whisky Advocate partnership with detailed content strategy, store promotions, and multi-channel amplification.</strong>
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-amber-600 to-red-700 rounded-3xl p-12 shadow-2xl text-white text-center"
            >
              <h3 className="text-3xl font-semibold mb-8">Total Digital Package</h3>
              <div className="text-6xl font-bold mb-4">$309,000</div>
              <p className="text-xl font-semibold mb-8">November 15, 2025 - March 31, 2026</p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <h4 className="text-xl font-semibold mb-2">Total Media</h4>
                  <div className="text-2xl font-bold mb-2">$263,225</div>
                  <p className="text-amber-100 font-medium">Whisky Advocate content & store</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <h4 className="text-xl font-semibold mb-2">Production</h4>
                  <div className="text-2xl font-bold mb-2">$45,775</div>
                  <p className="text-amber-100 font-medium">Creative & content creation</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <h4 className="text-xl font-semibold mb-2">Campaign Duration</h4>
                  <div className="text-2xl font-bold mb-2">4.5 Months</div>
                  <p className="text-amber-100 font-medium">Q4 2025 - Q1 2026</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Campaign Breakdown */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-amber-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
              DETAILED CAMPAIGN BREAKDOWN
            </h2>
            <p className="text-xl text-slate-900 max-w-3xl mx-auto font-medium leading-relaxed">
              <strong>Comprehensive Whisky Advocate partnership with specific content pieces, store promotions, and multi-channel amplification.</strong>
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Bibb & Tucker - $202K */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-200/50"
            >
              <h3 className="text-2xl font-semibold text-amber-700 mb-6">BIBB & TUCKER - $202K</h3>
              
              <div className="space-y-6">
                <div className="bg-amber-50/50 rounded-xl p-4">
                  <h4 className="product-title">Q4 2025 - $102.5K</h4>
                  <ul className="product-description space-y-2">
                    <li>• Landing Page Hub (both brands) - $1K production</li>
                    <li>• 1x Content Piece November 2025 - $36K</li>
                    <li>• Article + Homepage Placement - $1K production</li>
                    <li>• 2x Newsletters - $10K</li>
                    <li>• Paid Social - $15K ($10.5K media + $4.5K production)</li>
                    <li>• Native Extension - $10K ($8.3K media + $1.7K production)</li>
                    <li>• 1x Content Piece December 2025 - $36K</li>
                    <li>• WA Store Promotion Nov/Dec - $29.5K</li>
                  </ul>
                </div>

                <div className="bg-amber-50/50 rounded-xl p-4">
                  <h4 className="product-title">Q1 2026 - $99.5K</h4>
                  <ul className="product-description space-y-2">
                    <li>• WA Store Promotion Feb/March - $29.5K</li>
                    <li>• 1x Content Piece February 2026 - $36K</li>
                    <li>• Branding Promotions Jan-March - $34K</li>
                    <li>• Monthly Dedicated Emails (3x) - $15K</li>
                    <li>• Monthly Instagram Posts/Reels - $10K</li>
                    <li>• WA.com Banners + PMP Extension - $9K</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Redemption - $107K */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-red-200/50"
            >
              <h3 className="text-2xl font-semibold text-red-700 mb-6">REDEMPTION - $107K</h3>
              
              <div className="space-y-6">
                <div className="bg-red-50/50 rounded-xl p-4">
                  <h4 className="product-title">Q4 2025 - $48.5K</h4>
                  <ul className="product-description space-y-2">
                    <li>• 1x Content Piece December 2026 - $28.5K</li>
                    <li>• Article + Homepage Placement - $1K production</li>
                    <li>• 1x Newsletter - $5K</li>
                    <li>• Paid Social - $12.5K ($8.75K media + $3.75K production)</li>
                    <li>• Native Extension - $10K ($8.3K media + $1.7K production)</li>
                    <li>• WA Store Promotion Nov/Dec - $20K</li>
                  </ul>
                </div>

                <div className="bg-red-50/50 rounded-xl p-4">
                  <h4 className="product-title">Q1 2026 - $58.5K</h4>
                  <ul className="product-description space-y-2">
                    <li>• 1x Content Piece March 2026 - $28.5K</li>
                    <li>• Branding Promotions Jan-March - $30K</li>
                    <li>• Monthly Dedicated Emails (3x) - $15K</li>
                    <li>• Monthly Instagram Posts/Reels - $10K</li>
                    <li>• WA.com Banners + PMP Extension - $5K</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Whisky Advocate Store Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-amber-600 to-red-700 rounded-3xl p-8 shadow-2xl text-white"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">WHISKY ADVOCATE STORE PROMOTIONS</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">Store Assets Include:</h4>
                <ul className="space-y-2">
                  <li>• Hero Image + Banners ($5K each period)</li>
                  <li>• Custom Storefront ($2.5K each period)</li>
                  <li>• Dedicated Emails (2x for Bibb & Tucker, 1x for Redemption)</li>
                  <li>• Paid Social Integration ($12K Bibb & Tucker, $7.5K Redemption)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Content Strategy:</h4>
                <ul className="space-y-2">
                  <li>• 3x Bibb & Tucker Articles (Nov, Dec, Feb)</li>
                  <li>• 2x Redemption Articles (Dec, March)</li>
                  <li>• Homepage Placements for all content</li>
                  <li>• Native Extensions across Whisky Advocate network</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 to-amber-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
              M SHANKEN COMMUNICATIONS
              </h2>
            <p className="text-xl text-slate-900 max-w-4xl mx-auto font-medium leading-relaxed mb-12">
              <strong>Ready to create the most sophisticated bourbon marketing program in the industry?</strong> Let's discuss how we can elevate Bibb & Tucker and Redemption's brand story through strategic Whisky Advocate partnerships.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-200/50"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-amber-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white font-bold text-2xl">MM</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">MIRIAM MORGENSTERN</div>
                  <div className="text-lg text-amber-700 font-semibold">SVP, Senior Marketing Director</div>
                </div>

                <div className="space-y-4 text-slate-900 font-semibold">
                  <div className="flex items-center justify-center">
                    <Phone className="mr-3 text-amber-600" size={20} />
                    <span className="font-bold">P 917-355-4660</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="mr-3 text-amber-600" size={20} />
                    <span className="font-bold">mmorgenstern@mshanken.com</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-200/50"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-amber-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white font-bold text-2xl">AW</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">ALYSSA WEISS</div>
                  <div className="text-lg text-amber-700 font-semibold">Head of Luxury Advertising</div>
                </div>

                <div className="space-y-4 text-slate-900 font-semibold">
                  <div className="flex items-center justify-center">
                    <Phone className="mr-3 text-amber-600" size={20} />
                    <span className="font-bold">P 917-363-4930</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="mr-3 text-amber-600" size={20} />
                    <span className="font-bold">aweiss@mshanken.com</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-amber-600 to-red-700 rounded-3xl p-8 shadow-2xl text-white max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Campaign Investment: $309,000</h3>
              <p className="text-lg font-semibold mb-6">
                <strong>November 15, 2025 - March 31, 2026</strong> | Whisky Advocate Platform
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">$202,000</div>
                  <div className="text-amber-100 font-semibold">Bibb & Tucker</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">$107,000</div>
                  <div className="text-amber-100 font-semibold">Redemption</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      </main>
  )
}
