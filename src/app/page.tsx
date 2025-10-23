'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Coffee, Award, BookOpen, Globe, Users, Target, TrendingUp, Phone, Mail, CheckCircle, XCircle, Calendar, BarChart3, Clock, FileText } from 'lucide-react';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <main className="min-h-screen scroll-smooth">
      {/* Hero Section */}
      <motion.section
        id="hero"
        style={{ opacity, scale }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-20"
      >
        {/* Bourbon Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 via-amber-50/20 to-orange-50/10"></div>
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
                          nextElement.style.display = 'flex';
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

              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
                <span className="block text-4xl lg:text-5xl text-amber-700 font-semibold mb-6">
                  The Bourbon Hub
                </span>
                <span className="block text-2xl lg:text-3xl text-slate-700 font-medium mb-8">
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
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-amber-700">4.5 Months</div>
                  <div className="text-sm font-medium text-slate-800">Sustained Presence</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-amber-700">2 Brands</div>
                  <div className="text-sm font-medium text-slate-800">1 Unified Story</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
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
                    <div className="text-2xl font-semibold text-slate-900 mb-2">November 15, 2025 - March 31, 2026</div>
                    <p className="text-slate-900 font-semibold">Campaign Duration</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 2: THE STRATEGIC OPPORTUNITY */}
      <section id="strategic-opportunity" className="section-spacing bg-gradient-to-br from-slate-50 to-amber-50/30">
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
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* The Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl card-spacing shadow-2xl border border-amber-200/50 mb-16 hover:shadow-3xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">The Challenge</h3>
              <p className="text-lg text-slate-800 mb-4 font-medium leading-relaxed">
                The bourbon category is crowded. Every brand is shouting. Every distillery claims heritage. Every expression promises craft.
              </p>
              <p className="text-lg text-slate-800 mb-4 font-medium leading-relaxed">
                How does Deutsch Family Wine & Spirits rise above the noise?
              </p>
              <p className="text-2xl text-amber-700 font-semibold">
                Not by shouting louder. By becoming the authority.
              </p>
            </motion.div>

            {/* The Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl card-spacing shadow-2xl border border-amber-200/50 mb-16 hover:shadow-3xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">The Solution</h3>
              <h4 className="text-3xl font-semibold text-amber-700 mb-6">THE BOURBON HUB</h4>
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

            {/* Why This Works */}
            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-amber-700 mb-4">ONE UNIFIED STORY</h4>
                <p className="text-slate-800 font-medium leading-relaxed mb-4">
                  Instead of two separate campaigns competing for attention, Bibb & Tucker and Redemption share one powerful platform.
                </p>
                <p className="text-slate-800 font-semibold">
                  The result? Double the brand presence. Half the noise. One authoritative voice.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-amber-700 mb-4">STRATEGIC TIMING</h4>
                <p className="text-slate-800 font-medium leading-relaxed mb-4">
                  November through March isn't random—it's the bourbon sweet spot:
                </p>
                <ul className="text-slate-800 font-medium space-y-1">
                  <li>• Holiday Gifting Season (Nov-Dec): Discovery and purchase</li>
                  <li>• New Year Momentum (Jan-Feb): Resolution-driven exploration</li>
                  <li>• Spring Festival Season (Feb-Mar): Events and tastings</li>
                </ul>
                <p className="text-slate-800 font-semibold mt-4">
                  Five months that capture THREE distinct bourbon buying cycles.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-amber-700 mb-4">THE RIGHT AUDIENCE</h4>
                <p className="text-slate-800 font-medium leading-relaxed mb-4">
                  Whisky Advocate and Wine Enthusiast readers aren't casual drinkers:
                </p>
                <ul className="text-slate-800 font-medium space-y-1">
                  <li>• HHI $150K+ (60% of readership)</li>
                  <li>• Age 35-65 (peak bourbon spending years)</li>
                  <li>• Active enthusiasts seeking knowledge and discovery</li>
                  <li>• Brand advocates who influence their networks</li>
                  <li>• Premium spirit buyers with high category spend</li>
                </ul>
                <p className="text-slate-800 font-semibold mt-4">
                  These are the bourbon consumers who drive trends and build long-term brand loyalty.
                </p>
              </motion.div>
        </div>
    </div>
        </div>
      </section>

      {/* SECTION 3: THE TWO-BRAND STRATEGY */}
      <section className="section-spacing bg-gradient-to-br from-amber-50/50 to-red-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
              Innovation + Heritage = Complete Category Leadership
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Bibb & Tucker */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-200/50"
            >
              <h3 className="text-3xl font-semibold text-amber-700 mb-6">BIBB & TUCKER ($202,000)</h3>
              <h4 className="text-2xl font-semibold text-slate-900 mb-4">The Innovation Story</h4>
              <p className="text-lg text-slate-800 font-semibold mb-6">
                Three Expressions. One Powerful Narrative. Complete Bourbon Versatility.
              </p>
              
              <div className="space-y-6">
                <div className="bg-amber-50/50 rounded-xl p-6">
                  <h5 className="text-xl font-semibold text-amber-700 mb-3">GOLD ROAST (Primary Focus)</h5>
                  <p className="text-slate-800 font-semibold mb-3">THE BOURBON CONVERSATION STARTER</p>
                  <p className="text-slate-800 font-medium leading-relaxed mb-4">
                    Coffee barrel-finished bourbon that bridges two cultures:
                  </p>
                  <ul className="text-slate-800 font-medium space-y-1 mb-4">
                    <li>• Specialty coffee enthusiasts discovering bourbon</li>
                    <li>• Bourbon drinkers exploring new flavor territories</li>
                    <li>• Bartenders seeking innovative cocktail ingredients</li>
                    <li>• Gift-buyers looking for something genuinely unique</li>
                  </ul>
                  <p className="text-slate-800 font-medium leading-relaxed mb-4">
                    Gold Roast isn't just another bourbon expression—it's a category crossover that creates genuine curiosity and drives earned media attention.
                  </p>
                  <p className="text-slate-800 font-semibold">
                    This is the hook that draws consumers into the Hub, where they discover the complete Bibb & Tucker portfolio.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-amber-50/30 rounded-lg p-4">
                    <h6 className="font-semibold text-slate-900 mb-2">DOUBLE CHAR</h6>
                    <p className="text-slate-800 font-medium text-sm mb-2">BOLD INTENSITY FOR THE GRILLING ENTHUSIAST</p>
                    <p className="text-slate-800 font-medium text-sm">Charred oak meets charred protein. The bourbon for those who understand that fire transforms flavor. Positioned alongside Big Green Egg partnerships and BBQ culture.</p>
                  </div>
                  <div className="bg-amber-50/30 rounded-lg p-4">
                    <h6 className="font-semibold text-slate-900 mb-2">CLASSIC 6</h6>
                    <p className="text-slate-800 font-medium text-sm mb-2">SOPHISTICATED COMPLEXITY FOR EVERYDAY PERFECTION</p>
                    <p className="text-slate-800 font-medium text-sm">The refined sipper. The reliable host. The bourbon that proves Bibb & Tucker does traditional excellence as well as innovation.</p>
                  </div>
                </div>

                <div className="bg-amber-50/30 rounded-lg p-4">
                  <h5 className="font-semibold text-slate-900 mb-2">The Bibb & Tucker Positioning:</h5>
                  <p className="text-slate-800 font-medium text-sm italic">
                    "The bourbon with an expression for every moment, every palate, every occasion. Where innovation meets tradition. Where coffee culture meets whiskey heritage. Where bold experimentation never sacrifices bourbon fundamentals."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Redemption */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-red-200/50"
            >
              <h3 className="text-3xl font-semibold text-red-700 mb-6">REDEMPTION ($107,000)</h3>
              <h4 className="text-2xl font-semibold text-slate-900 mb-4">The Heritage Authority</h4>
              <p className="text-lg text-slate-800 font-semibold mb-6">
                Pre-Prohibition Craft for Modern Palates
              </p>
              
              <div className="space-y-6">
                <div className="bg-red-50/50 rounded-xl p-6">
                  <p className="text-slate-800 font-medium leading-relaxed mb-4">
                    While Bibb & Tucker innovates, Redemption anchors. High-rye mash bills. Traditional techniques. Pre-Prohibition recipes brought forward with modern precision.
                  </p>
                  <p className="text-slate-800 font-semibold mb-4">
                    Redemption represents bourbon authenticity—the counterbalance to Gold Roast's innovation. Together, they tell the complete story: heritage AND evolution.
                  </p>
                  <p className="text-slate-800 font-semibold">
                    Where Bibb & Tucker asks "What if?", Redemption answers "This is how it's done."
                  </p>
                </div>

                <div className="bg-red-50/30 rounded-lg p-4">
                  <h5 className="font-semibold text-slate-900 mb-2">The Strategic Complement</h5>
                  <p className="text-slate-800 font-medium text-sm mb-2">
                    Redemption doesn't compete with Bibb & Tucker. It completes the story.
                  </p>
                  <ul className="text-slate-800 font-medium text-sm space-y-1">
                    <li>• Innovation needs authenticity</li>
                    <li>• Experimentation needs foundation</li>
                    <li>• Coffee barrels need traditional oak</li>
                  </ul>
                  <p className="text-slate-800 font-semibold text-sm mt-3">
                    Together, these brands represent the full spectrum of American bourbon excellence under one Deutsch portfolio.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE BOURBON HUB EXPERIENCE */}
      <section className="section-spacing bg-gradient-to-br from-slate-50 to-amber-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
              Your Bourbon Destination on America's Most Trusted Whiskey Platform
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl card-spacing shadow-2xl border border-amber-200/50 mb-16 hover:shadow-3xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">What Is The Bourbon Hub?</h3>
              <p className="text-lg text-slate-800 mb-4 font-medium leading-relaxed">
                Not a microsite lost in the digital wilderness. Not banner ads competing for attention. Not a social campaign that disappears in 24 hours.
              </p>
              <p className="text-lg text-slate-800 font-semibold mb-4">
                The Bourbon Hub is a dedicated, branded SECTION within Whisky Advocate and Wine Enthusiast—an integrated experience on the publications bourbon enthusiasts already trust and visit.
              </p>
              <p className="text-lg text-slate-800 font-medium leading-relaxed">
                Think of it as your bourbon headquarters on the most authoritative whiskey platforms in America. A permanent address. A destination readers bookmark and return to.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-amber-700 mb-4">BRAND STORYTELLING</h4>
                <ul className="text-slate-800 font-medium space-y-2">
                  <li>• Deep-dive editorial on distilling philosophy</li>
                  <li>• Behind-the-scenes master distiller content</li>
                  <li>• Innovation spotlights (Gold Roast development story)</li>
                  <li>• Heritage narratives (Redemption's pre-Prohibition roots)</li>
                  <li>• Production insights and craftsmanship details</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-amber-700 mb-4">PRODUCT EDUCATION</h4>
                <ul className="text-slate-800 font-medium space-y-2">
                  <li>• Comprehensive tasting notes and flavor profiles</li>
                  <li>• Food pairing guides (grilling, dining, entertaining)</li>
                  <li>• Cocktail recipes from leading bartenders</li>
                  <li>• Buying guides and expression comparisons</li>
                  <li>• When to drink what: occasion-based recommendations</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-amber-700 mb-4">CONSUMER ENGAGEMENT</h4>
                <ul className="text-slate-800 font-medium space-y-2">
                  <li>• Interactive product explorers</li>
                  <li>• Email capture for ongoing brand communication</li>
                  <li>• Direct retail and e-commerce pathways</li>
                  <li>• Social sharing integration</li>
                  <li>• User-generated content opportunities</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-amber-700 mb-4">VISUAL EXCELLENCE</h4>
                <ul className="text-slate-800 font-medium space-y-2">
                  <li>• Professional bourbon photography</li>
                  <li>• Production and distillery videography</li>
                  <li>• Immersive brand experiences</li>
                  <li>• Mobile-optimized for on-the-go discovery</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: THE GOLD ROAST DIFFERENTIATOR */}
      <section className="section-spacing bg-gradient-to-br from-amber-50/50 to-orange-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
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
              className="bg-white/95 backdrop-blur-sm rounded-3xl card-spacing shadow-2xl border border-amber-200/50 mb-16 hover:shadow-3xl transition-all duration-300"
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
                  <h4 className="text-xl font-semibold text-amber-700 mb-4">The Partnership Angle</h4>
                  <p className="text-slate-800 font-medium leading-relaxed mb-4">
                    Muletown Coffee's exclusive roast → Bibb & Tucker barrels
                  </p>
                  <p className="text-slate-800 font-medium leading-relaxed mb-4">
                    This isn't just a flavor innovation. It's a PARTNERSHIP STORY that bridges two premium beverage cultures. It creates content opportunities, cross-promotional possibilities, and dual-category appeal.
                  </p>
                  <p className="text-slate-800 font-semibold">
                    Gold Roast becomes the gateway that introduces new consumers to the complete Deutsch bourbon portfolio.
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
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
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
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
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
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
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

      {/* SECTION 6: CAMPAIGN COMPONENTS & DELIVERABLES */}
      <section className="section-spacing bg-gradient-to-br from-amber-50/50 to-red-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
              Integrated, Multi-Channel, Sustained Presence
            </h2>
            <p className="text-xl text-slate-900 max-w-4xl mx-auto font-semibold leading-relaxed">
              <strong>What's Included in the $309,000 Investment</strong>
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-4">THE BOURBON HUB (Shared Platform)</h3>
                <ul className="text-slate-800 font-medium space-y-2">
                  <li>• Dedicated branded section on WhiskyAdvocate.com and WineEnthusiast.com</li>
                  <li>• Custom design and architecture</li>
                  <li>• Mobile-responsive experience</li>
                  <li>• Content management system</li>
                  <li>• Hosting and technical support</li>
                  <li>• Regular updates throughout campaign</li>
                  <li>• Permanent brand asset (lives beyond campaign)</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-4">EDITORIAL CONTENT (5 Sponsored Articles)</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-slate-900">Bibb & Tucker (3 articles):</h4>
                    <ul className="text-slate-800 font-medium text-sm space-y-1 ml-4">
                      <li>• "Gold Roast: The Bourbon Bridging Coffee and Whiskey Culture"</li>
                      <li>• "Three Expressions, Infinite Moments: The Bibb & Tucker Portfolio"</li>
                      <li>• "Innovation Without Compromise: The Bibb & Tucker Distilling Philosophy"</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Redemption (2 articles):</h4>
                    <ul className="text-slate-800 font-medium text-sm space-y-1 ml-4">
                      <li>• "Pre-Prohibition Craft: Redemption's High-Rye Heritage"</li>
                      <li>• "Classic Bourbon, Modern Precision: The Redemption Story"</li>
                    </ul>
                  </div>
                  <p className="text-slate-800 font-medium text-sm mt-3">
                    All written by Whisky Advocate's editorial team. All integrated into Hub experience. All optimized for SEO and discovery.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-4">WHISKY ADVOCATE STORE PROMOTIONS (4 Campaigns)</h3>
                <ul className="text-slate-800 font-medium space-y-2">
                  <li>• Q4 Holiday Gift Guide feature (Nov-Dec)</li>
                  <li>• New Year Discovery promotion (Jan)</li>
                  <li>• Spring Festival preview (Feb)</li>
                  <li>• Bourbon Month celebration (Mar)</li>
                </ul>
                <p className="text-slate-800 font-medium text-sm mt-3">
                  Each includes: Featured product placement, promotional pricing or bundling, direct e-commerce integration, email marketing support
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-4">EMAIL MARKETING</h3>
                <ul className="text-slate-800 font-medium space-y-2">
                  <li>• 6 dedicated newsletter placements</li>
                  <li>• 12 secondary mentions in editorial roundups</li>
                  <li>• Targeted to subscribers most engaged with bourbon content</li>
                  <li>• Direct Hub traffic drivers</li>
                  <li>• Measurable click-through and conversion tracking</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-4">PAID SOCIAL MEDIA</h3>
                <ul className="text-slate-800 font-medium space-y-2">
                  <li>• Multi-platform campaigns (Facebook, Instagram, X)</li>
                  <li>• Targeted to bourbon enthusiasts and adjacent audiences</li>
                  <li>• Creative featuring Gold Roast innovation story</li>
                  <li>• Retargeting to Hub visitors</li>
                  <li>• A/B testing and optimization</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-4">ANALYTICS & REPORTING</h3>
                <ul className="text-slate-800 font-medium space-y-2">
                  <li>• Monthly performance dashboards</li>
                  <li>• Traffic and engagement metrics</li>
                  <li>• Conversion tracking and attribution</li>
                  <li>• Audience insights and behavior analysis</li>
                  <li>• Ongoing optimization recommendations</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: INVESTMENT BREAKDOWN */}
      <section id="investment" className="section-spacing bg-gradient-to-br from-slate-50 to-amber-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
              Total Campaign Investment: $309,000
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl card-spacing shadow-2xl border border-amber-200/50 mb-16 hover:shadow-3xl transition-all duration-300"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-center">
                  <thead>
                    <tr className="border-b-2 border-amber-200">
                      <th className="text-lg font-semibold text-slate-900 py-4">Component</th>
                      <th className="text-lg font-semibold text-amber-700 py-4">Bibb & Tucker</th>
                      <th className="text-lg font-semibold text-red-700 py-4">Redemption</th>
                      <th className="text-lg font-semibold text-slate-900 py-4">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-amber-100">
                      <td className="font-semibold text-slate-900 py-4">Q4 2025 (Nov-Dec)</td>
                      <td className="text-amber-700 font-semibold py-4">$102,500</td>
                      <td className="text-red-700 font-semibold py-4">$48,500</td>
                      <td className="text-slate-900 font-bold py-4">$151,000</td>
                    </tr>
                    <tr className="border-b border-amber-100">
                      <td className="font-semibold text-slate-900 py-4">Q1 2026 (Jan-Mar)</td>
                      <td className="text-amber-700 font-semibold py-4">$99,500</td>
                      <td className="text-red-700 font-semibold py-4">$58,500</td>
                      <td className="text-slate-900 font-bold py-4">$158,000</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="font-bold text-slate-900 py-4">CAMPAIGN TOTAL</td>
                      <td className="text-amber-700 font-bold py-4">$202,000</td>
                      <td className="text-red-700 font-bold py-4">$107,000</td>
                      <td className="text-slate-900 font-bold text-2xl py-4">$309,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-4">What This Includes:</h3>
                <ul className="text-slate-800 font-medium space-y-2">
                  <li>✓ Bourbon Hub development, design, and hosting</li>
                  <li>✓ 5 professional sponsored articles</li>
                  <li>✓ 4 Whisky Advocate Store promotional campaigns</li>
                  <li>✓ Comprehensive email marketing program</li>
                  <li>✓ Multi-platform paid social campaigns</li>
                  <li>✓ Native advertising extensions</li>
                  <li>✓ Display advertising and retargeting</li>
                  <li>✓ 4.5 months of sustained brand presence</li>
                  <li>✓ Complete analytics, reporting, and optimization</li>
                  <li>✓ Account management and campaign oversight</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-4">Not Included (Client Responsibilities):</h3>
                <ul className="text-slate-800 font-medium space-y-2">
                  <li>• Product photography and brand assets</li>
                  <li>• Approval of creative and messaging</li>
                  <li>• WA Store inventory coordination</li>
                  <li>• Retail partnership logistics</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: WHY THIS ISN'T TRADITIONAL ADVERTISING */}
      <section className="section-spacing bg-gradient-to-br from-amber-50/50 to-red-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
              Authority vs. Advertising: Understanding the Difference
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-red-200/50"
              >
                <h3 className="text-xl font-semibold text-red-700 mb-4">Traditional Bourbon Campaign:</h3>
                <ul className="text-slate-800 font-medium space-y-2">
                  <li className="flex items-start">
                    <XCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    Banner ads that rotate with dozens of competitors
                  </li>
                  <li className="flex items-start">
                    <XCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    Short-term visibility with no lasting presence
                  </li>
                  <li className="flex items-start">
                    <XCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    Impressions that disappear the moment budget stops
                  </li>
                  <li className="flex items-start">
                    <XCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    No editorial integration or third-party credibility
                  </li>
                  <li className="flex items-start">
                    <XCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    Competing for attention in cluttered environments
                  </li>
                  <li className="flex items-start">
                    <XCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    Measured in vanity metrics (impressions, reach)
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-4">The Bourbon Hub Approach:</h3>
                <ul className="text-slate-800 font-medium space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    Permanent destination on trusted whiskey platforms
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    4.5 months of sustained, evolving presence
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    Content that lives on as evergreen resource
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    Editorial integration with Whisky Advocate authority
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    Featured partnership, not inventory rotation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    Measured in engagement, qualified traffic, and sales impact
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-200/50"
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">The Authority Advantage</h3>
              <p className="text-lg text-slate-800 font-medium leading-relaxed mb-4">
                When consumers read about Bibb & Tucker Gold Roast in a Whisky Advocate article, they're not seeing an ad.
              </p>
              <p className="text-lg text-slate-800 font-semibold mb-4">
                They're reading EDITORIAL CONTENT from America's most trusted whiskey publication.
              </p>
              <p className="text-lg text-slate-800 font-medium leading-relaxed">
                That's not advertising. That's authority transfer. That's the Whisky Advocate credibility working for your brand. That's the difference between being seen and being believed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 9: TIMING & SEASONALITY */}
      <section className="section-spacing bg-gradient-to-br from-amber-50/50 to-orange-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
              Five Months. Three Buying Cycles. Peak Bourbon Season.
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-4">November - December 2025: Holiday Discovery</h3>
                <h4 className="text-lg font-semibold text-slate-900 mb-3">THE GIFTING SEASON</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-2">Consumer Behavior:</h5>
                    <ul className="text-slate-800 font-medium text-sm space-y-1">
                      <li>• Searching for unique bourbon gifts</li>
                      <li>• Exploring premium spirits for entertaining</li>
                      <li>• Buying for hard-to-shop-for recipients</li>
                      <li>• Willing to spend more during holidays</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-2">Bourbon Hub Positioning:</h5>
                    <ul className="text-slate-800 font-medium text-sm space-y-1">
                      <li>• Gold Roast as the unforgettable gift</li>
                      <li>• Gift guides and pairing recommendations</li>
                      <li>• Holiday cocktail recipes</li>
                      <li>• "What to bring" entertaining advice</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-4">January - February 2026: New Year Momentum</h3>
                <h4 className="text-lg font-semibold text-slate-900 mb-3">THE EXPLORATION SEASON</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-2">Consumer Behavior:</h5>
                    <ul className="text-slate-800 font-medium text-sm space-y-1">
                      <li>• New Year's resolution to explore quality spirits</li>
                      <li>• Trade-up mindset from well brands</li>
                      <li>• Seeking bourbon education and discovery</li>
                      <li>• Building home bar collections</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-2">Bourbon Hub Positioning:</h5>
                    <ul className="text-slate-800 font-medium text-sm space-y-1">
                      <li>• "Start 2026 with better bourbon" messaging</li>
                      <li>• Educational content for bourbon newcomers</li>
                      <li>• Portfolio exploration (Classic 6 → Gold Roast)</li>
                      <li>• Winter cocktail innovation</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-4">March 2026: Spring Festival Preparation</h3>
                <h4 className="text-lg font-semibold text-slate-900 mb-3">THE ANTICIPATION SEASON</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-2">Consumer Behavior:</h5>
                    <ul className="text-slate-800 font-medium text-sm space-y-1">
                      <li>• Preparing for spring bourbon festivals</li>
                      <li>• Outdoor entertaining season begins</li>
                      <li>• BBQ and grilling season kickoff</li>
                      <li>• Whiskey tourism planning</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-2">Bourbon Hub Positioning:</h5>
                    <ul className="text-slate-800 font-medium text-sm space-y-1">
                      <li>• Festival preview and prep guides</li>
                      <li>• Double Char + grilling content surge</li>
                      <li>• Outdoor cocktail recipes</li>
                      <li>• Travel and distillery visit content</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-200/50"
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Campaign Duration: November 15, 2025 - March 31, 2026</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-amber-700 mb-3">Why These Dates?</h4>
                  <p className="text-slate-800 font-medium text-sm">
                    Start: Mid-November captures early holiday shoppers and Thanksgiving entertaining
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-amber-700 mb-3">End Strategy</h4>
                  <p className="text-slate-800 font-medium text-sm">
                    End: March 31 concludes with spring festival season and Q1 2026, delivering complete value across two fiscal quarters
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-amber-700 mb-3">Duration Benefits</h4>
                  <p className="text-slate-800 font-medium text-sm">
                    Duration: 4.5 months provides sustained presence without campaign fatigue—long enough to build authority, short enough to maintain urgency
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 10: SUCCESS METRICS */}
      <section className="section-spacing bg-gradient-to-br from-slate-50 to-amber-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
              Measuring What Matters: Beyond Vanity Metrics
            </h2>
            <p className="text-xl text-slate-900 max-w-4xl mx-auto font-semibold leading-relaxed">
              <strong>We Don't Just Count Impressions. We Track Impact.</strong>
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-4">AWARENESS METRICS</h3>
                <ul className="text-slate-800 font-medium space-y-2">
                  <li>• Bourbon Hub unique visitors</li>
                  <li>• Page views and time on site</li>
                  <li>• Social media reach and engagement</li>
                  <li>• Brand search lift (Google Trends)</li>
                  <li>• Share of voice vs. competitors</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-4">ENGAGEMENT METRICS</h3>
                <ul className="text-slate-800 font-medium space-y-2">
                  <li>• Article read completion rates</li>
                  <li>• Video view-through rates</li>
                  <li>• Content shares and saves</li>
                  <li>• Email click-through rates</li>
                  <li>• Return visitor percentage</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-4">CONSIDERATION METRICS</h3>
                <ul className="text-slate-800 font-medium space-y-2">
                  <li>• Product page visits (specific expressions)</li>
                  <li>• Retail locator tool usage</li>
                  <li>• "Where to buy" click-throughs</li>
                  <li>• WA Store product page visits</li>
                  <li>• Email list growth (brand opt-ins)</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-4">CONVERSION METRICS</h3>
                <ul className="text-slate-800 font-medium space-y-2">
                  <li>• WA Store purchase attribution</li>
                  <li>• Promo code redemptions</li>
                  <li>• Retail partner referral traffic</li>
                  <li>• E-commerce conversion rates</li>
                  <li>• Multi-touch attribution analysis</li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-200/50"
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Reporting Cadence</h3>
              <ul className="text-slate-800 font-medium space-y-2">
                <li>• Weekly campaign optimization checks</li>
                <li>• Monthly performance dashboards</li>
                <li>• Mid-campaign comprehensive review</li>
                <li>• Post-campaign final analysis</li>
                <li>• Ongoing Hub performance tracking (post-March)</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 11: THE BOURBON HUB DIFFERENCE */}
      <section className="section-spacing bg-gradient-to-br from-amber-50/50 to-red-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
              What Makes This Campaign Different From Everything Else
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-4">It's Not Just Digital Advertising</h3>
                <div className="space-y-3">
                  <p className="text-slate-800 font-semibold">ADVERTISING says: "Buy our bourbon."</p>
                  <p className="text-slate-800 font-medium text-sm">
                    THE BOURBON HUB says: "Let us show you why bourbon enthusiasts are choosing these expressions, and help you discover which one matches your palate, your occasion, your curiosity."
                  </p>
                  <p className="text-slate-800 font-semibold">One is a transaction. The other is a relationship.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-4">It's Not Just Brand Awareness</h3>
                <div className="space-y-3">
                  <p className="text-slate-800 font-semibold">AWARENESS CAMPAIGNS create impressions that fade.</p>
                  <p className="text-slate-800 font-medium text-sm">
                    THE BOURBON HUB creates a RESOURCE that consumers bookmark, return to, and share.
                  </p>
                  <p className="text-slate-800 font-semibold">It's not about being seen once. It's about being found repeatedly.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-4">It's Not Just Content Marketing</h3>
                <div className="space-y-3">
                  <p className="text-slate-800 font-semibold">CONTENT MARKETING lives on your owned channels where consumers must seek you out.</p>
                  <p className="text-slate-800 font-medium text-sm">
                    THE BOURBON HUB lives on WHISKY ADVOCATE—where bourbon enthusiasts are already spending time, already trusting editorial recommendations, already making purchase decisions.
                  </p>
                  <p className="text-slate-800 font-semibold">It's the difference between hoping consumers find you and being where they already are.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-4">It's Category Authority</h3>
                <div className="space-y-3">
                  <p className="text-slate-800 font-medium text-sm mb-3">
                    This campaign positions Deutsch Family Wine & Spirits not as one more bourbon brand, but as THE bourbon portfolio that represents the full spectrum:
                  </p>
                  <ul className="text-slate-800 font-medium text-sm space-y-1">
                    <li>• Innovation (Gold Roast)</li>
                    <li>• Tradition (Classic 6)</li>
                    <li>• Intensity (Double Char)</li>
                    <li>• Heritage (Redemption)</li>
                  </ul>
                  <p className="text-slate-800 font-semibold">Two brands. Four expressions. One authoritative voice.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: THE BOTTOM LINE */}
      <section className="section-spacing bg-gradient-to-br from-slate-50 to-amber-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
              What You're Really Buying
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-4">This $309,000 Investment Delivers:</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">✓ A Category Authority Play</h4>
                    <p className="text-slate-800 font-medium text-sm">Not just ads, but editorial integration that transfers Whisky Advocate's credibility to your brands</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">✓ A Seasonal Sales Driver</h4>
                    <p className="text-slate-800 font-medium text-sm">Five months covering three distinct bourbon buying cycles from holiday gifting through spring festivals</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">✓ A Long-Term Brand Asset</h4>
                    <p className="text-slate-800 font-medium text-sm">The Bourbon Hub doesn't disappear when budget stops—it becomes a permanent resource consumers return to</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">✓ A Storytelling Platform</h4>
                    <p className="text-slate-800 font-medium text-sm">Gold Roast's innovation story gets the stage it deserves, creating genuine consumer curiosity and earned media</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">✓ A Commerce Engine</h4>
                    <p className="text-slate-800 font-medium text-sm">Every touchpoint drives to conversion: WA Store integration, retail locators, direct purchase pathways</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">✓ A Consumer Education Resource</h4>
                    <p className="text-slate-800 font-medium text-sm">Not just selling bourbon, but teaching consumers WHY these expressions matter and WHEN to drink them</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">✓ An Efficient Dual-Brand Strategy</h4>
                    <p className="text-slate-800 font-medium text-sm">Two brands share one platform = greater impact per dollar than separate campaigns</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">✓ Measurable, Optimizable Performance</h4>
                    <p className="text-slate-800 font-medium text-sm">Monthly analytics reveal what's working, allowing real-time optimization throughout the campaign</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: IMPLEMENTATION TIMELINE */}
      <section className="section-spacing bg-gradient-to-br from-amber-50/50 to-red-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
              Implementation Timeline
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl card-spacing shadow-2xl border border-amber-200/50 mb-16 hover:shadow-3xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Pre-Launch (October - Early November 2025)</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-amber-700 mb-3">Week 1-2:</h4>
                  <ul className="text-slate-800 font-medium text-sm space-y-1">
                    <li>• Contract execution and kickoff meeting</li>
                    <li>• Hub architecture and design review</li>
                    <li>• Editorial calendar development</li>
                    <li>• Asset collection (photography, brand guidelines)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-amber-700 mb-3">Week 3-4:</h4>
                  <ul className="text-slate-800 font-medium text-sm space-y-1">
                    <li>• Hub development begins</li>
                    <li>• First sponsored articles assigned to editorial</li>
                    <li>• Email marketing schedule finalized</li>
                    <li>• Paid social creative development</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-amber-700 mb-3">Week 5-6:</h4>
                  <ul className="text-slate-800 font-medium text-sm space-y-1">
                    <li>• Hub beta testing and quality assurance</li>
                    <li>• Article drafts for client review</li>
                    <li>• WA Store promotion planning</li>
                    <li>• Analytics tracking setup</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-amber-700 mb-3">Week 7-8:</h4>
                  <ul className="text-slate-800 font-medium text-sm space-y-1">
                    <li>• Final Hub approvals and pre-launch testing</li>
                    <li>• Content population and publishing schedule</li>
                    <li>• Campaign asset finalization</li>
                    <li>• Pre-launch marketing preparation</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-4">Launch & Active Campaign</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">November 15: BOURBON HUB GOES LIVE</h4>
                    <ul className="text-slate-800 font-medium text-sm space-y-1">
                      <li>• Hub launches with full content library</li>
                      <li>• First sponsored article publishes</li>
                      <li>• Email campaign 1 deploys</li>
                      <li>• Paid social campaigns activate</li>
                      <li>• WA Store holiday promotion begins</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">November-December: HOLIDAY ACTIVATION PEAK</h4>
                    <ul className="text-slate-800 font-medium text-sm space-y-1">
                      <li>• Weekly content updates</li>
                      <li>• Email marketing surge (gift guides, entertaining)</li>
                      <li>• Social media amplification</li>
                      <li>• Display advertising + retargeting</li>
                      <li>• Holiday WA Store promotions</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">January-February: NEW YEAR MOMENTUM</h4>
                    <ul className="text-slate-800 font-medium text-sm space-y-1">
                      <li>• New sponsored articles publish</li>
                      <li>• "Start 2026 with better bourbon" messaging</li>
                      <li>• Educational content focus</li>
                      <li>• Email campaigns to engaged subscribers</li>
                      <li>• Q1 WA Store promotions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">March 1-31: SPRING FESTIVAL BUILD</h4>
                    <ul className="text-slate-800 font-medium text-sm space-y-1">
                      <li>• Final sponsored articles</li>
                      <li>• Festival prep content</li>
                      <li>• Grilling season kickoff (Double Char)</li>
                      <li>• Campaign optimization and wrap-up</li>
                      <li>• Final WA Store promotion</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14: WHAT WE NEED FROM YOU */}
      <section className="section-spacing bg-gradient-to-br from-slate-50 to-amber-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
              Client Deliverables & Partnership Requirements
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-4">Creative Assets</h3>
                <ul className="text-slate-800 font-medium space-y-2">
                  <li>• High-resolution product photography (all expressions)</li>
                  <li>• Bottle shots, lifestyle imagery, distillery photos</li>
                  <li>• Brand logos (various formats)</li>
                  <li>• Brand guidelines and messaging documents</li>
                  <li>• Any existing video content</li>
                  <li>• Master distiller bios and headshots</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-4">Strategic Input</h3>
                <ul className="text-slate-800 font-medium space-y-2">
                  <li>• Key messaging priorities for each brand</li>
                  <li>• Product availability and distribution details</li>
                  <li>• Any off-limits topics or competitive sensitivities</li>
                  <li>• Approval contacts and process timeline</li>
                  <li>• Promotional pricing/offers for WA Store</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-4">Operational Coordination</h3>
                <ul className="text-slate-800 font-medium space-y-2">
                  <li>• WA Store inventory management</li>
                  <li>• Retail partner integration (if applicable)</li>
                  <li>• Legal approval on all marketing claims</li>
                  <li>• Trademark usage guidelines</li>
                  <li>• Campaign exclusivity parameters</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-4">What We Provide</h3>
                <ul className="text-slate-800 font-medium space-y-2">
                  <li>• Comprehensive project management</li>
                  <li>• Creative development and execution</li>
                  <li>• Editorial content creation (by WA team)</li>
                  <li>• Technical implementation and hosting</li>
                  <li>• Campaign activation and monitoring</li>
                  <li>• Regular performance reporting</li>
                  <li>• Ongoing optimization and recommendations</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 15: CALL TO ACTION */}
      <section className="section-spacing bg-gradient-to-br from-amber-50/50 to-red-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
              Ready to Establish Bourbon Authority?
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl card-spacing shadow-2xl border border-amber-200/50 mb-16 hover:shadow-3xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">The Opportunity</h3>
              <p className="text-lg text-slate-800 font-medium leading-relaxed mb-4">
                Bourbon season begins November 15.
              </p>
              <p className="text-lg text-slate-800 font-medium leading-relaxed mb-4">
                The consumers who will define bourbon trends in 2026 are reading Whisky Advocate RIGHT NOW.
              </p>
              <p className="text-lg text-slate-800 font-semibold mb-6">
                The Bourbon Hub positions Deutsch Family Wine & Spirits—Bibb & Tucker and Redemption—as THE bourbon portfolio during the industry's most critical sales period.
              </p>
              <p className="text-lg text-slate-800 font-semibold">
                Five months. Two brands. One unified platform. $309,000 investment. Immeasurable brand impact.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-4">Next Steps</h3>
                <ol className="text-slate-800 font-medium space-y-2">
                  <li>1. Review this proposal and investment breakdown</li>
                  <li>2. Schedule strategy discussion with our team</li>
                  <li>3. Approve campaign approach and timeline</li>
                  <li>4. Execute contract and kickoff planning</li>
                  <li>5. Launch The Bourbon Hub on November 15, 2025</li>
                </ol>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl card-spacing shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-4">Contact</h3>
                <div className="space-y-3">
                  <p className="text-slate-800 font-semibold">[Your Name]</p>
                  <p className="text-slate-800 font-semibold">[Your Title]</p>
                  <p className="text-slate-800 font-semibold">M. Shanken Communications, Inc.</p>
                  <p className="text-slate-800 font-semibold">Whisky Advocate | Wine Enthusiast</p>
                  <p className="text-slate-800 font-semibold">[Email] | [Phone]</p>
                  <p className="text-slate-800 font-semibold">Let's make bourbon history together.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* APPENDIX: COMPETITIVE CONTEXT */}
      <section className="section-spacing bg-gradient-to-br from-slate-50 to-amber-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
              Why This Matters Now
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl card-spacing shadow-2xl border border-amber-200/50 mb-16 hover:shadow-3xl transition-all duration-300"
            >
              <p className="text-lg text-slate-800 font-medium leading-relaxed mb-6">
                The bourbon category is at an inflection point:
              </p>
              <ul className="text-slate-800 font-medium space-y-2 mb-6">
                <li>• Premium bourbon sales continue growing YoY</li>
                <li>• Consumers trading up from well brands to premium</li>
                <li>• Innovation driving category interest (flavored, finished)</li>
                <li>• Heritage brands being challenged by craft upstarts</li>
                <li>• Digital discovery replacing traditional retail browsing</li>
              </ul>
              <p className="text-lg text-slate-800 font-semibold mb-4">
                Deutsch needs to establish authority NOW—before competitors claim this territory, before Gold Roast's innovation window closes, before bourbon season passes without maximum impact.
              </p>
              <p className="text-lg text-slate-800 font-semibold">
                The Bourbon Hub isn't just a good idea. It's the right strategy at the right time with the right brands.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-amber-600 to-red-700 rounded-3xl p-8 shadow-2xl text-white text-center"
            >
              <h3 className="text-3xl font-semibold mb-6">THE FINAL WORD</h3>
              <div className="space-y-4 text-lg">
                <p className="font-semibold">Two bourbon brands.</p>
                <p className="font-semibold">One authoritative Hub.</p>
                <p className="font-semibold">Five months of integrated storytelling.</p>
                <p className="font-semibold">Establishing Deutsch Family Wine & Spirits as THE bourbon portfolio during peak season.</p>
                <p className="font-semibold">Where innovation meets heritage.</p>
                <p className="font-semibold">Where coffee culture meets whiskey tradition.</p>
                <p className="font-semibold">Where advertising becomes authority.</p>
                <p className="font-semibold">The bourbon conversation changes November 15, 2025.</p>
                <p className="text-2xl font-bold mt-6">Let's make it happen. 🥃</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section - Sales Reps at Bottom */}
      <section id="contact" className="section-spacing bg-gradient-to-br from-slate-50 to-amber-50/30">
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

            <div className="mt-16 bg-gradient-to-r from-amber-600 to-red-700 rounded-3xl p-10 shadow-2xl text-white max-w-5xl mx-auto">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-6">Campaign Investment: $309,000</h3>
                <p className="text-xl font-semibold mb-8">
                  <strong>November 15, 2025 - March 31, 2026</strong> | Whisky Advocate Platform
                </p>
                <p className="text-lg font-medium text-amber-100 leading-relaxed max-w-3xl mx-auto">
                  Complete integrated marketing program with editorial authority, sustained presence, and measurable impact across the industry's most critical bourbon sales period.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}