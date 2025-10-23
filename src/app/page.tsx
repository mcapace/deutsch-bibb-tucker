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

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  return (
    <main className="bg-gradient-to-b from-neutral-50 via-amber-50/30 to-orange-50/20 text-slate-900 overflow-x-hidden">
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-orange-700 to-amber-800 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <motion.section 
        style={{ opacity, scale }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
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
                      src="/images/bibb-tucker-logo.png" 
                      alt="Bibb & Tucker Logo" 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                        if (nextElement) {
                          nextElement.style.display = 'block';
                        }
                      }}
                    />
                    <span className="text-white font-bold text-2xl" style={{display: 'none'}}>B&T</span>
                  </div>
                  <div className="text-4xl font-light text-slate-600">×</div>
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
                    <span className="text-white font-bold text-2xl" style={{display: 'none'}}>R</span>
                  </div>
            </div>
          </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="inline-block bg-gradient-to-r from-amber-600 to-orange-700 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg"
              >
                🥃 M Shanken Communications | Whisky Advocate Platform
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                <span className="block text-2xl lg:text-3xl text-amber-700 font-semibold mb-4">
                  BOURBON HUB CAMPAIGN 2025-2026
                </span>
                <span className="block text-3xl lg:text-4xl text-slate-700 font-medium">
                  Bibb & Tucker + Redemption
                </span>
          </h1>

              <p className="text-xl text-slate-700 mb-8 max-w-3xl font-medium leading-relaxed">
                <strong>Establishing Deutsch Family Wine & Spirits as the bourbon authority during the industry's most critical sales period.</strong> An integrated digital campaign that positions Bibb & Tucker and Redemption as the essential voices in American whiskey through strategic storytelling on Whisky Advocate.
              </p>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-200/50 mb-8">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-amber-700 mb-2">$309,000</div>
                    <div className="text-slate-700 font-semibold">Total Investment</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-amber-700 mb-2">4.5</div>
                    <div className="text-slate-700 font-semibold">Months</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-amber-700 mb-2">5</div>
                    <div className="text-slate-700 font-semibold">Sponsored Articles</div>
                  </div>
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
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Campaign Investment Breakdown</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-amber-600 to-orange-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <DollarSign className="text-white" size={32} />
                    </div>
                    <h4 className="text-2xl font-bold text-amber-700 mb-2">$202,000</h4>
                    <p className="text-slate-700 font-semibold">Bibb & Tucker</p>
                    <p className="text-slate-600 text-sm mt-2">Innovation meets tradition</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-red-700 to-red-900 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Award className="text-white" size={32} />
                    </div>
                    <h4 className="text-2xl font-bold text-red-700 mb-2">$107,000</h4>
                    <p className="text-slate-700 font-semibold">Redemption</p>
                    <p className="text-slate-600 text-sm mt-2">Pre-Prohibition craft</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-amber-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-900 mb-2">November 15, 2025 - March 31, 2026</div>
                    <p className="text-slate-700 font-semibold">Campaign Duration</p>
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
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              THE STRATEGIC VISION
            </h2>
            <p className="text-xl text-slate-700 max-w-4xl mx-auto font-semibold leading-relaxed mb-8">
              <strong>Establishing Deutsch Family Wine & Spirits as the Authority in Premium American Bourbon</strong>
            </p>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto font-medium leading-relaxed">
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
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <BookOpen className="text-white" size={32} />
        </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">The Bourbon Hub</h3>
              <p className="text-slate-700 font-semibold leading-relaxed mb-4">
                <strong>Central storytelling platform where craft meets culture, heritage meets innovation, and enthusiasts discover their next favorite pour.</strong>
              </p>
              <ul className="text-slate-600 font-medium space-y-2">
                <li>• Interactive flavor profile matcher</li>
                <li>• Cocktail recipe library with filters</li>
                <li>• Bourbon 101 educational content</li>
                <li>• Direct WA Store integration</li>
              </ul>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Editorial Authority</h3>
              <p className="text-slate-700 font-semibold leading-relaxed mb-4">
                <strong>Five sponsored articles across Whisky Advocate that establish editorial credibility and drive qualified traffic to the Hub.</strong>
              </p>
              <ul className="text-slate-600 font-medium space-y-2">
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
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Zap className="text-white" size={32} />
          </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Integrated Amplification</h3>
              <p className="text-slate-700 font-semibold leading-relaxed mb-4">
                <strong>Multi-channel digital amplification that drives traffic back to the central Hub story.</strong>
              </p>
              <ul className="text-slate-600 font-medium space-y-2">
                <li>• Email marketing (250K+ subscribers)</li>
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
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              THE GOLD ROAST OPPORTUNITY
            </h2>
            <p className="text-xl text-slate-700 max-w-4xl mx-auto font-semibold leading-relaxed mb-8">
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
              <h3 className="text-2xl font-bold text-slate-900 mb-6">The Coffee-Bourbon Bridge</h3>
              <div className="space-y-4">
                <div className="bg-amber-50/50 rounded-xl p-4">
                  <h4 className="text-lg font-bold text-slate-800 mb-2">Market Opportunity</h4>
                  <ul className="text-slate-700 font-medium space-y-1">
                    <li>• 68% of Americans drink coffee daily</li>
                    <li>• 30% are bourbon drinkers</li>
                    <li>• Gold Roast converts coffee enthusiasts to bourbon consumers</li>
                    <li>• Creates a NEW entry point into the category</li>
                  </ul>
                </div>
                <div className="bg-amber-50/50 rounded-xl p-4">
                  <h4 className="text-lg font-bold text-slate-800 mb-2">Strategic Value</h4>
                  <ul className="text-slate-700 font-medium space-y-1">
                    <li>• Differentiates from EVERY competitor</li>
                    <li>• Creates conversation beyond bourbon enthusiasts</li>
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
                <h4 className="text-xl font-bold text-slate-900 mb-4">The Story Writes Itself</h4>
                <ul className="text-slate-700 font-medium space-y-2">
                  <li>• "For the coffee lover who thought they didn't like bourbon"</li>
                  <li>• "Your morning ritual meets your evening pour"</li>
                  <li>• "Espresso by day, Gold Roast by night"</li>
                  <li>• Brunch entertaining angle</li>
                  <li>• Bourbon-spiked coffee recipes</li>
                </ul>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/50">
                <h4 className="text-xl font-bold text-slate-900 mb-4">Media & PR Appeal</h4>
                <ul className="text-slate-700 font-medium space-y-2">
                  <li>• Food and lifestyle media will cover this</li>
                  <li>• Influencer goldmine (coffee + spirits influencers)</li>
                  <li>• Social media shareability</li>
                  <li>• Retail shelf differentiation</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-amber-600 to-orange-700 rounded-2xl p-6 shadow-lg text-white">
                <h4 className="text-xl font-bold mb-4">Campaign Strategy</h4>
                <p className="font-semibold">
                  <strong>While we showcase all three expressions, Gold Roast LEADS the narrative.</strong> We're not hiding the other expressions - we're leading with innovation, then revealing the full portfolio depth.
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
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              THE BOURBON PORTFOLIO
            </h2>
            <p className="text-xl text-slate-700 max-w-4xl mx-auto font-semibold leading-relaxed">
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
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Bibb & Tucker Collection</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="w-24 h-32 bg-gradient-to-b from-amber-100 to-amber-200 rounded-lg flex items-center justify-center mb-2 shadow-lg">
                    <img 
                      src="/images/bibb-tucker-gold-roast.png" 
                      alt="Bibb & Tucker Gold Roast" 
                      className="w-full h-full object-contain rounded-lg"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="text-amber-600 font-bold text-xs" style={{display: 'none'}}>Gold Roast</div>
                  </div>
                  <p className="text-xs font-semibold text-slate-700">Gold Roast</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-32 bg-gradient-to-b from-amber-100 to-amber-200 rounded-lg flex items-center justify-center mb-2 shadow-lg">
                    <img 
                      src="/images/bibb-tucker-double-char.png" 
                      alt="Bibb & Tucker Double Char" 
                      className="w-full h-full object-contain rounded-lg"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="text-amber-600 font-bold text-xs" style={{display: 'none'}}>Double Char</div>
                  </div>
                  <p className="text-xs font-semibold text-slate-700">Double Char</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-32 bg-gradient-to-b from-amber-100 to-amber-200 rounded-lg flex items-center justify-center mb-2 shadow-lg">
                    <img 
                      src="/images/bibb-tucker-classic-6.png" 
                      alt="Bibb & Tucker Classic 6" 
                      className="w-full h-full object-contain rounded-lg"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="text-amber-600 font-bold text-xs" style={{display: 'none'}}>Classic 6</div>
                  </div>
                  <p className="text-xs font-semibold text-slate-700">Classic 6</p>
                </div>
              </div>
              <div className="bg-amber-50/50 rounded-xl p-4">
                <h4 className="text-lg font-bold text-slate-800 mb-3">Innovation Meets Tradition</h4>
                <p className="text-slate-700 font-semibold">
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
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Redemption Collection</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="w-24 h-32 bg-gradient-to-b from-red-100 to-red-200 rounded-lg flex items-center justify-center mb-2 shadow-lg">
                    <img 
                      src="/images/redemption-rye.png" 
                      alt="Redemption Rye" 
                      className="w-full h-full object-contain rounded-lg"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="text-red-600 font-bold text-xs" style={{display: 'none'}}>Rye</div>
                  </div>
                  <p className="text-xs font-semibold text-slate-700">Rye</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-32 bg-gradient-to-b from-red-100 to-red-200 rounded-lg flex items-center justify-center mb-2 shadow-lg">
                    <img 
                      src="/images/redemption-bourbon.png" 
                      alt="Redemption Bourbon" 
                      className="w-full h-full object-contain rounded-lg"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="text-red-600 font-bold text-xs" style={{display: 'none'}}>Bourbon</div>
                  </div>
                  <p className="text-xs font-semibold text-slate-700">Bourbon</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-32 bg-gradient-to-b from-red-100 to-red-200 rounded-lg flex items-center justify-center mb-2 shadow-lg">
                    <img 
                      src="/images/redemption-single-barrel.png" 
                      alt="Redemption Single Barrel" 
                      className="w-full h-full object-contain rounded-lg"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="text-red-600 font-bold text-xs" style={{display: 'none'}}>Single Barrel</div>
                  </div>
                  <p className="text-xs font-semibold text-slate-700">Single Barrel</p>
                </div>
              </div>
              <div className="bg-red-50/50 rounded-xl p-4">
                <h4 className="text-lg font-bold text-slate-800 mb-3">Pre-Prohibition Craft</h4>
                <p className="text-slate-700 font-semibold">
                  Heritage bourbon authority that anchors the category while Bibb & Tucker innovates. Made right since the beginning.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Audience & Brand Positioning Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50/50 to-orange-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              TARGET AUDIENCE & BRAND POSITIONING
            </h2>
            <p className="text-xl text-slate-700 max-w-4xl mx-auto font-semibold leading-relaxed mb-8">
              <strong>Reaching the right bourbon enthusiasts at the perfect moment in their discovery journey.</strong>
            </p>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto font-medium leading-relaxed">
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
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Primary: The Curious Enthusiast</h3>
              <div className="space-y-6">
                <div className="bg-amber-50/50 rounded-xl p-4">
                  <h4 className="text-lg font-bold text-slate-800 mb-3">Demographics</h4>
                  <p className="text-slate-700 font-semibold">Ages 30-55, HHI $75K+, 60% male / 40% female</p>
                </div>
                <div className="bg-amber-50/50 rounded-xl p-4">
                  <h4 className="text-lg font-bold text-slate-800 mb-3">Psychographics</h4>
                  <ul className="text-slate-700 font-semibold space-y-2">
                    <li>• Appreciates quality over quantity</li>
                    <li>• Seeks authentic stories and craftsmanship</li>
                    <li>• Entertains at home regularly</li>
                    <li>• Values education and discovery</li>
                    <li>• Active on social media (Instagram primary)</li>
                  </ul>
                </div>
                <div className="bg-amber-50/50 rounded-xl p-4">
                  <h4 className="text-lg font-bold text-slate-800 mb-3">Bourbon Relationship</h4>
                  <ul className="text-slate-700 font-semibold space-y-2">
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
                <h4 className="text-xl font-bold text-slate-900 mb-4">Secondary: The Gift Seeker</h4>
                <div className="bg-amber-50/50 rounded-xl p-4 mb-4">
                  <p className="text-slate-700 font-semibold leading-relaxed mb-3">
                    <strong>Ages 25-60, HHI $60K+, all genders.</strong> Wants to give thoughtful, impressive gifts and seeks guidance on quality purchases.
                  </p>
                </div>
                <p className="text-slate-700 font-semibold">
                  May not be a bourbon drinker themselves but knows recipients appreciate bourbon and needs education on what makes one bourbon different from another.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-200/50">
                <h4 className="text-xl font-bold text-slate-900 mb-4">Tertiary: The Coffee Crossover</h4>
                <div className="bg-amber-50/50 rounded-xl p-4 mb-4">
                  <p className="text-slate-700 font-semibold leading-relaxed mb-3">
                    <strong>Ages 25-45, HHI $50K+, urban/suburban.</strong> Coffee enthusiast with foodie sensibility who may think "I don't like whiskey."
                  </p>
                </div>
                <p className="text-slate-700 font-semibold">
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
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Bibb & Tucker: Innovation Meets Tradition</h3>
              <div className="space-y-6">
                <div className="bg-amber-50/50 rounded-xl p-4">
                  <h4 className="text-lg font-bold text-slate-800 mb-3">Brand Voice</h4>
                  <p className="text-slate-700 font-semibold">Confident but approachable, innovative but grounded, sophisticated but not pretentious</p>
                </div>
                <div className="bg-amber-50/50 rounded-xl p-4">
                  <h4 className="text-lg font-bold text-slate-800 mb-3">Key Themes</h4>
                  <ul className="text-slate-700 font-semibold space-y-2">
                    <li>• Three expressions, endless possibilities</li>
                    <li>• The bourbon that bridges worlds</li>
                    <li>• Innovation rooted in craft</li>
                    <li>• Something for every moment</li>
                  </ul>
                </div>
                <div className="bg-amber-50/50 rounded-xl p-4">
                  <h4 className="text-lg font-bold text-slate-800 mb-3">Tone</h4>
                  <p className="text-slate-700 font-semibold">Bold, friendly, educational, aspirational</p>
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
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Redemption: Pre-Prohibition Craft</h3>
              <div className="space-y-6">
                <div className="bg-red-50/50 rounded-xl p-4">
                  <h4 className="text-lg font-bold text-slate-800 mb-3">Brand Voice</h4>
                  <p className="text-slate-700 font-semibold">Authoritative but accessible, heritage-focused but not old-fashioned</p>
                </div>
                <div className="bg-red-50/50 rounded-xl p-4">
                  <h4 className="text-lg font-bold text-slate-800 mb-3">Key Themes</h4>
                  <ul className="text-slate-700 font-semibold space-y-2">
                    <li>• Pre-Prohibition authenticity</li>
                    <li>• Small batch integrity</li>
                    <li>• Made right, not just made fast</li>
                    <li>• Heritage you can taste</li>
                  </ul>
                </div>
                <div className="bg-red-50/50 rounded-xl p-4">
                  <h4 className="text-lg font-bold text-slate-800 mb-3">Tone</h4>
                  <p className="text-slate-700 font-semibold">Authoritative, warm, craft-focused, timeless</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Summary Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50/50 to-orange-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-slate-800 mb-6">
              Investment Summary
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              A comprehensive investment that delivers maximum impact across all marketing channels.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-200/30 text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-amber-600 to-orange-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <PenTool className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-light text-slate-800 mb-4">Bibb & Tucker</h3>
              <div className="text-4xl font-light text-slate-800 mb-2">$202,000</div>
              <p className="text-slate-600 font-light">Innovation meets tradition</p>
            </motion.div>

                <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-200/30 text-center"
                >
              <div className="w-20 h-20 bg-gradient-to-r from-amber-600 to-orange-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Globe className="text-white" size={36} />
                  </div>
              <h3 className="text-2xl font-light text-slate-800 mb-4">Redemption</h3>
              <div className="text-4xl font-light text-slate-800 mb-2">$107,000</div>
              <p className="text-slate-600 font-light">Pre-Prohibition craft</p>
                </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-amber-600 to-orange-700 rounded-3xl p-8 shadow-2xl text-center"
            >
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <DollarSign className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-light text-white mb-4">Total Investment</h3>
              <div className="text-4xl font-light text-white mb-2">$309,000</div>
              <p className="text-amber-100 font-light">4.5-month program</p>
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
            <h2 className="text-4xl lg:text-5xl font-light text-slate-800 mb-6">
              Brand Heritage
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              From distillery to finished bourbon - the Deutsch family's commitment to excellence in American whiskey.
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
                  <h3 className="text-2xl font-light text-slate-800 mb-4">Bourbon Craft Excellence</h3>
                  <p className="text-slate-600 font-light leading-relaxed">
                    Our team works directly in the distillery, ensuring every barrel meets our exacting standards for premium bourbon production.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Leaf className="text-white" size={24} />
                    </div>
                    <h4 className="text-lg font-light text-slate-800 mb-1">Grain to Glass</h4>
                    <p className="text-slate-500 font-light text-sm">Direct oversight</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Award className="text-white" size={24} />
                    </div>
                    <h4 className="text-lg font-light text-slate-800 mb-1">Quality Control</h4>
                    <p className="text-slate-500 font-light text-sm">Hand-selected grains</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Heart className="text-white" size={24} />
                    </div>
                    <h4 className="text-lg font-light text-slate-800 mb-1">Family Tradition</h4>
                    <p className="text-slate-500 font-light text-sm">Generations of expertise</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Crown className="text-white" size={24} />
                    </div>
                    <h4 className="text-lg font-light text-slate-800 mb-1">Premium Standards</h4>
                    <p className="text-slate-500 font-light text-sm">Luxury craftsmanship</p>
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
                  <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-amber-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Leaf className="text-white" size={20} />
                  </div>
                  <h4 className="text-xl font-light text-slate-800">Bourbon Production</h4>
                </div>
                <p className="text-slate-600 font-light leading-relaxed">
                  Our team works directly in the distillery, ensuring every barrel meets our exacting standards for premium bourbon production.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-200/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-amber-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Crown className="text-white" size={20} />
                  </div>
                  <h4 className="text-xl font-light text-slate-800">Hand-Crafted Excellence</h4>
                </div>
                <p className="text-slate-600 font-light leading-relaxed">
                  From grain to finished bourbon, every step is overseen by our experienced team to ensure the highest quality standards.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-200/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-amber-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Heart className="text-white" size={20} />
                  </div>
                  <h4 className="text-xl font-light text-slate-800">Family Heritage</h4>
                </div>
                <p className="text-slate-600 font-light leading-relaxed">
                  Multi-generational expertise passed down through the Deutsch family, creating bourbons that honor tradition while embracing innovation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium Products Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50/30 to-orange-50/20">
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
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
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
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-orange-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Coffee className="text-white" size={20} />
              </div>
                  <h4 className="text-xl font-light text-slate-800">Bibb & Tucker Gold Roast</h4>
                </div>
                <p className="text-slate-600 font-light leading-relaxed">
                  The bourbon that bridges coffee culture with whiskey appreciation. Small batch bourbon with bold innovation for the coffee lover who thought they didn't like bourbon.
                </p>
          </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-orange-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Crown className="text-white" size={20} />
                  </div>
                  <h4 className="text-xl font-light text-slate-800">Bibb & Tucker Double Char</h4>
                </div>
                <p className="text-slate-600 font-light leading-relaxed">
                  Intense refined flavor for those who demand more. The perfect pairing for bold moments and grilling season meets bourbon season.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-orange-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Gem className="text-white" size={20} />
                  </div>
                  <h4 className="text-xl font-light text-slate-800">Bibb & Tucker Classic 6</h4>
                </div>
                <p className="text-slate-600 font-light leading-relaxed">
                  Sophisticated complex and smooth for low and slow perfection. Six years of patience in every pour, the bourbon that earns its place in your collection.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-orange-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Flame className="text-white" size={20} />
                  </div>
                  <h4 className="text-xl font-light text-slate-800">Redemption Heritage</h4>
                </div>
                <p className="text-slate-600 font-light leading-relaxed">
                  Pre-Prohibition craft meets modern palates. Made right since the beginning, the bourbon enthusiast's bourbon with small batch integrity.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-orange-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Cloud className="text-white" size={20} />
                  </div>
                  <h4 className="text-xl font-light text-slate-800">Redemption Small Batch</h4>
                </div>
                <p className="text-slate-600 font-light leading-relaxed">
                  Small batch. Big heritage. Crafted for cocktails, perfect neat. The bourbon that represents the ethereal qualities of hand-crafted excellence.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-orange-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Star className="text-white" size={20} />
                  </div>
                  <h4 className="text-xl font-light text-slate-800">Redemption Made Right</h4>
                </div>
                <p className="text-slate-600 font-light leading-relaxed">
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
                  <p className="text-slate-600 font-light leading-relaxed">
                    Each bourbon represents generations of expertise, from grain selection to the final barrel-aged masterpiece.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-700 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Leaf className="text-white" size={24} />
                    </div>
                    <h4 className="text-lg font-light text-slate-800 mb-1">Premium Grains</h4>
                    <p className="text-slate-500 font-light text-sm">Finest American corn</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-700 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Award className="text-white" size={24} />
                    </div>
                    <h4 className="text-lg font-light text-slate-800 mb-1">Award Winning</h4>
                    <p className="text-slate-500 font-light text-sm">Industry recognition</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-700 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Heart className="text-white" size={24} />
                    </div>
                    <h4 className="text-lg font-light text-slate-800 mb-1">Hand Crafted</h4>
                    <p className="text-slate-500 font-light text-sm">Artisanal excellence</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-700 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
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
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
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
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-orange-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Monitor className="text-white" size={20} />
                  </div>
                  <h4 className="text-xl font-light text-slate-800">Interactive Experience</h4>
                </div>
                <p className="text-slate-600 font-light leading-relaxed">
                  Immersive digital experiences that bring the bourbon story to life through rich media and interactive content.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-orange-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Heart className="text-white" size={20} />
              </div>
                  <h4 className="text-xl font-light text-slate-800">Brand Storytelling</h4>
                </div>
                <p className="text-slate-600 font-light leading-relaxed">
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
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-700 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <Globe className="text-white" size={24} />
                    </div>
                  <h3 className="text-2xl font-light text-slate-800">Campaign Strategy</h3>
                    </div>
                
                <div className="space-y-4">
                  <div className="bg-amber-50/50 rounded-xl p-4">
                    <h4 className="font-medium text-slate-800 mb-2">Central Storytelling Hub</h4>
                    <p className="text-slate-600 font-light text-sm leading-relaxed">
                      Your complete brand narrative platform where heritage, products, and events come together in one cohesive experience.
                    </p>
                  </div>
                  
                  <div className="bg-amber-50/50 rounded-xl p-4">
                    <h4 className="font-medium text-slate-800 mb-2">Sponsored Content Integration</h4>
                    <p className="text-slate-600 font-light text-sm leading-relaxed">
                      Editorial articles that validate your brand story with Wine Enthusiast & Whisky Advocate's trusted voice and credibility.
                    </p>
                  </div>
                  
                  <div className="bg-amber-50/50 rounded-xl p-4">
                    <h4 className="font-medium text-slate-800 mb-2">Multi-Channel Amplification</h4>
                    <p className="text-slate-600 font-light text-sm leading-relaxed">
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
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
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
                <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-700 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                <h3 className="text-lg font-light text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 font-light text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-amber-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              M SHANKEN COMMUNICATIONS
              </h2>
            <p className="text-xl text-slate-700 max-w-4xl mx-auto font-semibold leading-relaxed mb-12">
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
                  <div className="w-20 h-20 bg-gradient-to-r from-amber-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white font-bold text-2xl">MM</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">MIRIAM MORGENSTERN</div>
                  <div className="text-lg text-amber-700 font-semibold">SVP, Senior Marketing Director</div>
                </div>

                <div className="space-y-4 text-slate-700 font-semibold">
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
                  <div className="w-20 h-20 bg-gradient-to-r from-amber-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white font-bold text-2xl">AW</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">ALYSSA WEISS</div>
                  <div className="text-lg text-amber-700 font-semibold">Head of Luxury Advertising</div>
                </div>

                <div className="space-y-4 text-slate-700 font-semibold">
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

            <div className="mt-12 bg-gradient-to-r from-amber-600 to-orange-700 rounded-3xl p-8 shadow-2xl text-white max-w-4xl mx-auto">
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
