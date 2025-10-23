'use client';

import { useEffect, useState } from 'react';

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
      <div className="absolute top-20 left-10 w-32 h-32 bg-amber-600/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-brown-600/10 rounded-full blur-2xl animate-pulse delay-1000" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        <div className={`transition-all duration-1500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Headline */}
          <div className="mb-16">
            <div className="inline-block mb-6">
              <span className="text-bourbon-amber text-sm font-medium tracking-widest uppercase">
                November 15, 2025 - March 31, 2026
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-amber-100 via-amber-200 to-amber-300 bg-clip-text text-transparent">
                The Bourbon Hub
              </span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-amber-100/90 font-light">
              Where innovation meets heritage. Where craft meets culture. 
              Discover the complete bourbon story.
            </p>
          </div>
          
          {/* Premium Brand Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            <div className="premium-card p-8 group hover:scale-105 transition-all duration-500">
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
            </div>
            
            <div className="premium-card p-8 group hover:scale-105 transition-all duration-500">
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
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#hub"
              className="premium-button text-lg px-12 py-4 inline-flex items-center group"
            >
              <span>Discover Your Pour</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#where-to-buy"
              className="border-2 border-amber-600/60 text-amber-300 hover:bg-amber-600/10 hover:border-amber-500 px-12 py-4 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              Shop the Collection
            </a>
          </div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-amber-300/70">
          <span className="text-sm font-medium mb-2 tracking-widest uppercase">Explore</span>
          <div className="animate-bounce">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
