'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Coffee, Award, BookOpen, Globe, Users, Target, TrendingUp, Phone, Mail } from 'lucide-react';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <main className="min-h-screen">
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
                    <div className="text-2xl font-semibold text-slate-900 mb-2">November 15, 2025 - March 31, 2026</div>
                    <p className="text-slate-900 font-semibold">Campaign Duration</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

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

      {/* Two-Brand Strategy */}
      <section className="py-24 bg-gradient-to-br from-amber-50/50 to-red-50/30">
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
                    Coffee barrel-finished bourbon that bridges two cultures: specialty coffee enthusiasts discovering bourbon, bourbon drinkers exploring new flavor territories, bartenders seeking innovative cocktail ingredients, gift-buyers looking for something genuinely unique.
                  </p>
                  <p className="text-slate-800 font-medium leading-relaxed">
                    Gold Roast isn't just another bourbon expression—it's a category crossover that creates genuine curiosity and drives earned media attention. This is the hook that draws consumers into the Hub, where they discover the complete Bibb & Tucker portfolio.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-amber-50/30 rounded-lg p-4">
                    <h6 className="font-semibold text-slate-900 mb-2">DOUBLE CHAR</h6>
                    <p className="text-slate-800 font-medium text-sm">Bold intensity for the grilling enthusiast. Charred oak meets charred protein.</p>
                  </div>
                  <div className="bg-amber-50/30 rounded-lg p-4">
                    <h6 className="font-semibold text-slate-900 mb-2">CLASSIC 6</h6>
                    <p className="text-slate-800 font-medium text-sm">Sophisticated complexity for everyday perfection. The refined sipper.</p>
                  </div>
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
                  <p className="text-slate-800 font-semibold">
                    Redemption represents bourbon authenticity—the counterbalance to Gold Roast's innovation. Together, they tell the complete story: heritage AND evolution.
                  </p>
                </div>

                <div className="bg-red-50/30 rounded-lg p-4">
                  <h5 className="font-semibold text-slate-900 mb-2">The Strategic Complement</h5>
                  <p className="text-slate-800 font-medium text-sm">
                    Redemption doesn't compete with Bibb & Tucker. It completes the story. Innovation needs authenticity. Experimentation needs foundation. Coffee barrels need traditional oak.
                  </p>
                </div>
              </div>
            </motion.div>
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

      {/* The Bourbon Hub Experience */}
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
              Your Bourbon Destination on America's Most Trusted Whiskey Platform
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-200/50 mb-12"
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">What Is The Bourbon Hub?</h3>
              <p className="text-lg text-slate-800 mb-6 font-medium leading-relaxed">
                Not a microsite lost in the digital wilderness. Not banner ads competing for attention. Not a social campaign that disappears in 24 hours.
              </p>
              <p className="text-lg text-slate-800 font-semibold">
                The Bourbon Hub is a dedicated, branded SECTION within Whisky Advocate and Wine Enthusiast—an integrated experience on the publications bourbon enthusiasts already trust and visit.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-200/50"
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
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-200/50"
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
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-200/50"
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
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-200/50"
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

      {/* Campaign Components & Deliverables */}
      <section className="py-24 bg-gradient-to-br from-amber-50/50 to-red-50/30">
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
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-200/50"
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
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-200/50"
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
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-200/50"
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
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-200/50"
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
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-200/50"
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
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-200/50"
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

      {/* Investment Breakdown - MOVED TO BOTTOM */}
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

      {/* Contact Section - Sales Reps at Bottom */}
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