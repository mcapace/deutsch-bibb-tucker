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
    <main className="bg-gradient-to-b from-stone-50 via-amber-50/30 to-orange-50/20 text-slate-800 overflow-x-hidden">
      
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
                  <div className="w-40 h-40 bg-gradient-to-br from-amber-600 to-orange-700 rounded-2xl flex items-center justify-center shadow-2xl">
                    <span className="text-white font-bold text-2xl">B&T</span>
                  </div>
                  <div className="text-4xl font-light text-slate-600">×</div>
                  <div className="w-40 h-40 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center shadow-2xl">
                    <span className="text-white font-bold text-2xl">R</span>
                  </div>
            </div>
          </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="inline-block bg-gradient-to-r from-amber-600 to-orange-700 text-white px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg"
              >
                ✨ 2025-2026 Premium Marketing Program
              </motion.div>
              
              <h1 className="text-5xl lg:text-7xl font-extralight text-slate-800 mb-6 leading-tight">
                <span className="block text-2xl lg:text-3xl text-slate-500 font-extralight">
                  4.5 Months | 2025-2026
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 max-w-2xl font-light leading-relaxed">
                An integrated marketing program that positions Bibb & Tucker and Redemption as leading bourbon brands through strategic digital dominance and sophisticated storytelling.
              </p>
              
            </motion.div>

          <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-200/30">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-amber-600 to-orange-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Calendar className="text-white" size={28} />
              </div>
                    <h3 className="text-2xl font-light text-slate-800 mb-2">4.5</h3>
                    <p className="text-slate-500 font-light">Months</p>
            </div>
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-amber-600 to-orange-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Target className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-light text-slate-800 mb-2">5</h3>
                    <p className="text-slate-500 font-light">Articles</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-amber-600 to-orange-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Globe className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-light text-slate-800 mb-2">1</h3>
                    <p className="text-slate-500 font-light">Digital Hub</p>
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
            <h2 className="text-4xl lg:text-5xl font-light text-slate-800 mb-6">
              Strategic Vision
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              One unified story across all touchpoints, creating an immersive brand experience that elevates Bibb & Tucker and Redemption to the pinnacle of luxury bourbon marketing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
        <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-200/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <BookOpen className="text-white" size={32} />
        </div>
              <h3 className="text-2xl font-light text-slate-800 mb-4">Digital Hub</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Central storytelling platform that amplifies the brand message and creates deeper engagement with both bourbon brands.
              </p>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-200/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-light text-slate-800 mb-4">Editorial Content</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Five sponsored articles across Wine Enthusiast & Whisky Advocate, ensuring maximum visibility and strategic positioning.
            </p>
          </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-200/30 hover:shadow-xl transition-all duration-300"
          >
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Zap className="text-white" size={32} />
          </div>
              <h3 className="text-2xl font-light text-slate-800 mb-4">Amplification</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Strategic digital amplification that extends reach and creates measurable impact across all channels.
              </p>
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
                  A celebration of coffee culture, featuring innovative coffee-infused bourbon with rich, complex flavors.
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
                  Our most powerful blend, featuring bold grilling flavors with exceptional strength and character.
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
                  The refined expression that showcases traditional bourbon craftsmanship with modern sophistication.
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
                  A heritage blend that captures the passion and intensity of Pre-Prohibition bourbon craftsmanship.
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
                  A small batch expression that represents the ethereal qualities of hand-crafted bourbon excellence.
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
                  The original expression that started it all, featuring classic bourbon flavors and traditional craftsmanship.
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
            <h2 className="text-4xl lg:text-5xl font-light text-slate-800 mb-6">
              Let's Build Your Story
              </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed mb-12">
              Ready to create the most sophisticated bourbon marketing program in the industry? Let's discuss how we can elevate Bibb & Tucker and Redemption's brand story.
            </p>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-200/30 max-w-2xl mx-auto">
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-slate-800">Deutsch Family Brands</div>
                <div className="text-lg text-amber-700 font-medium">Marketing Team</div>
              </div>
              
              <div className="space-y-3 text-slate-600 font-light">
                <div className="flex items-center justify-center">
                  <Mail className="mr-3 text-amber-600" size={18} />
                  <span>Deutsch Family Wine & Spirits</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="mr-3 text-amber-600" size={18} />
                  <span>Premium Bourbon Marketing Division</span>
              </div>
                <div className="flex items-center justify-center">
                  <Phone className="mr-3 text-amber-600" size={18} />
                  <span className="font-medium">Contact: Marketing Team</span>
            </div>
            </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
