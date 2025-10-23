'use client';

import { useState } from 'react';

export default function WhereToBuy() {
  const [selectedBrand, setSelectedBrand] = useState('bibb-tucker');

  const bibbTuckerProducts = [
    {
      name: 'Bibb & Tucker Gold Roast',
      price: '$45',
      description: 'The Small Batch Bourbon That Bridges Coffee Culture with Whiskey Appreciation',
      image: '/assets/images/gold-roast.jpg',
      availability: 'In Stock',
      rating: 4.8,
      reviews: 127
    },
    {
      name: 'Bibb & Tucker Double Char',
      price: '$55',
      description: 'Intense Refined Flavor for the Grilling Enthusiast Who Demands More',
      image: '/assets/images/double-char.jpg',
      availability: 'In Stock',
      rating: 4.9,
      reviews: 89
    },
    {
      name: 'Bibb & Tucker Classic 6',
      price: '$65',
      description: 'Sophisticated Complex and Smooth for Low and Slow Perfection',
      image: '/assets/images/classic-6.jpg',
      availability: 'In Stock',
      rating: 4.7,
      reviews: 156
    }
  ];

  const redemptionProducts = [
    {
      name: 'Redemption Bourbon',
      price: '$35',
      description: 'Pre-Prohibition craftsmanship meets modern palates',
      image: '/assets/images/redemption-bourbon.jpg',
      availability: 'In Stock',
      rating: 4.6,
      reviews: 203
    },
    {
      name: 'Redemption Rye',
      price: '$40',
      description: 'Traditional rye whiskey with contemporary appeal',
      image: '/assets/images/redemption-rye.jpg',
      availability: 'In Stock',
      rating: 4.5,
      reviews: 78
    }
  ];

  const retailers = [
    {
      name: 'Wine Enthusiast Store',
      type: 'Online',
      link: 'https://store.wineenthusiast.com',
      description: 'Premium spirits and wine accessories',
      featured: true
    },
    {
      name: 'Whisky Advocate Store',
      type: 'Online',
      link: 'https://store.whiskyadvocate.com',
      description: 'Curated selection of premium whiskeys',
      featured: true
    },
    {
      name: 'Total Wine & More',
      type: 'Retail Chain',
      link: 'https://totalwine.com',
      description: 'Nationwide retail locations',
      featured: false
    },
    {
      name: 'BevMo',
      type: 'Retail Chain',
      link: 'https://bevmo.com',
      description: 'West Coast specialty retailer',
      featured: false
    }
  ];

  const currentProducts = selectedBrand === 'bibb-tucker' ? bibbTuckerProducts : redemptionProducts;

  return (
    <section id="where-to-buy" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Where to Buy
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find your perfect bourbon from our premium collection. 
            Available at select retailers and online stores.
          </p>
        </div>

        {/* Brand Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 rounded-lg p-2 flex">
            <button
              onClick={() => setSelectedBrand('bibb-tucker')}
              className={`px-6 py-3 rounded-md font-medium transition-colors duration-200 ${
                selectedBrand === 'bibb-tucker'
                  ? 'bg-amber-600 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Bibb & Tucker
            </button>
            <button
              onClick={() => setSelectedBrand('redemption')}
              className={`px-6 py-3 rounded-md font-medium transition-colors duration-200 ${
                selectedBrand === 'redemption'
                  ? 'bg-amber-600 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Redemption
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentProducts.map((product, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-amber-600/30 hover:border-amber-600/60 transition-colors duration-200">
              <div className="aspect-w-3 aspect-h-4 mb-4 bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Product Image</span>
              </div>
              
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-300 text-sm mb-3">{product.description}</p>
                
                <div className="flex items-center mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm ml-2">({product.reviews} reviews)</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-400">{product.price}</span>
                  <span className="text-green-400 text-sm font-medium">{product.availability}</span>
                </div>
              </div>
              
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-medium transition-colors duration-200">
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Retailers Section */}
        <div className="bg-gray-800/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Available at These Retailers</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {retailers.map((retailer, index) => (
              <div key={index} className={`bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border transition-colors duration-200 ${
                retailer.featured 
                  ? 'border-amber-600/60 bg-amber-600/10' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}>
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-white mb-2">{retailer.name}</h4>
                  <p className="text-gray-400 text-sm mb-3">{retailer.type}</p>
                  <p className="text-gray-300 text-sm mb-4">{retailer.description}</p>
                  
                  {retailer.featured && (
                    <span className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-medium mb-4">
                      Featured Partner
                    </span>
                  )}
                  
                  <a
                    href={retailer.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    Visit Store
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Store Locator */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Find a Store Near You</h3>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="text"
                placeholder="Enter your ZIP code"
                className="flex-1 px-4 py-3 rounded-l-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-amber-600 focus:outline-none"
              />
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-r-lg font-medium transition-colors duration-200">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
