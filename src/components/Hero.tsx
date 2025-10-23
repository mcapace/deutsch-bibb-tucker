'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              The Bourbon Hub
            </h1>
            <p className="text-lg md:text-xl text-amber-300 mb-8">
              November 15, 2025 - March 31, 2026
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-amber-600/30">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-amber-400">
                Bibb & Tucker
              </h2>
              <p className="text-gray-300 mb-4">
                Three expressions, one powerful narrative. Innovation meets tradition.
              </p>
              <div className="text-sm text-amber-300">
                Gold Roast • Double Char • Classic 6
              </div>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-amber-600/30">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-amber-400">
                Redemption
              </h2>
              <p className="text-gray-300 mb-4">
                Pre-Prohibition craftsmanship meets modern palates.
              </p>
              <div className="text-sm text-amber-300">
                Heritage • Craft • Authenticity
              </div>
            </div>
          </div>

          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-gray-200 mb-8">
            Experience the full spectrum of American bourbon excellence. 
            From innovative flavor profiles to time-honored traditions, 
            discover your next favorite pour.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#hub"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200"
            >
              Explore the Hub
            </a>
            <a
              href="#where-to-buy"
              className="border-2 border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-full font-medium transition-colors duration-200"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
