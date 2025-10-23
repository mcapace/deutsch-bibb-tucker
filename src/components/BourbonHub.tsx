'use client';

import { useState } from 'react';

export default function BourbonHub() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Hub Overview' },
    { id: 'bibb-tucker', label: 'Bibb & Tucker' },
    { id: 'redemption', label: 'Redemption' },
    { id: 'education', label: 'Bourbon 101' },
    { id: 'recipes', label: 'Recipes' },
  ];

  const bibbTuckerExpressions = [
    {
      name: 'Gold Roast',
      description: 'The Small Batch Bourbon That Bridges Coffee Culture with Whiskey Appreciation',
      story: 'Gold Roast isn\'t just a flavor innovation - it\'s a cultural bridge. This is the bourbon that brings coffee enthusiasts into the whiskey world and gives bourbon lovers a morning-to-evening narrative.',
      angle: 'Coffee culture crossover content, morning espresso rituals meet evening bourbon rituals',
      price: '$45',
      image: '/assets/images/gold-roast.jpg'
    },
    {
      name: 'Double Char',
      description: 'Intense Refined Flavor for the Grilling Enthusiast Who Demands More',
      story: 'Double Char is about bold choices and unapologetic flavor. This is the bourbon for the person who char-grills their steak, who understands that intensity and refinement aren\'t opposites.',
      angle: 'Holiday grilling and entertaining, bourbon and BBQ pairing guides',
      price: '$55',
      image: '/assets/images/double-char.jpg'
    },
    {
      name: 'Classic 6',
      description: 'Sophisticated Complex and Smooth for Low and Slow Perfection',
      story: 'Classic 6 is about mastery through patience. Six years of aging creates the complexity that enthusiasts seek and the smoothness that invites exploration.',
      angle: 'Year-round excellence, the "go-to" bourbon for any occasion',
      price: '$65',
      image: '/assets/images/classic-6.jpg'
    }
  ];

  const redemptionStory = {
    title: 'The Bourbon Made Right',
    description: 'Redemption represents a different kind of bourbon authority - one rooted in pre-Prohibition recipes, traditional methods, and uncompromising quality.',
    positioning: [
      'Pre-Prohibition craftsmanship meets modern palates',
      'Small batch authenticity',
      'The bourbon enthusiast\'s bourbon',
      'Cocktail culture credibility',
      'Heritage with a contemporary edge'
    ]
  };

  const bourbon101Topics = [
    'Understanding Whiskey vs Bourbon',
    'How Bourbon is Made',
    'Tasting Terminology',
    'Building a Home Bar',
    'Proper Glassware',
    'Tasting Techniques'
  ];

  const recipes = [
    {
      name: 'Gold Roast Old Fashioned',
      ingredients: ['2 oz Bibb & Tucker Gold Roast', '1 sugar cube', '2 dashes Angostura bitters', 'Orange peel'],
      instructions: 'Muddle sugar and bitters, add bourbon, stir with ice, garnish with orange peel'
    },
    {
      name: 'Double Char Manhattan',
      ingredients: ['2 oz Bibb & Tucker Double Char', '1 oz sweet vermouth', '2 dashes Angostura bitters', 'Cherry'],
      instructions: 'Stir all ingredients with ice, strain into chilled glass, garnish with cherry'
    },
    {
      name: 'Redemption Sour',
      ingredients: ['2 oz Redemption Bourbon', '1 oz fresh lemon juice', '1 oz simple syrup', 'Egg white'],
      instructions: 'Shake all ingredients with ice, double strain, serve over ice'
    }
  ];

  return (
    <section id="hub" className="section-padding bg-gradient-to-br from-deep-black via-oak-brown/10 to-deep-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/assets/images/wood-texture.jpg')] opacity-5 bg-cover bg-center" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-bourbon-amber text-sm font-medium tracking-widest uppercase">
              Interactive Experience
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-amber-100 via-amber-200 to-amber-300 bg-clip-text text-transparent">
              The Bourbon Hub
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-amber-100/90 max-w-4xl mx-auto leading-relaxed font-light">
            Your comprehensive destination for discovering, learning, and purchasing 
            the finest American bourbons from Bibb & Tucker and Redemption.
          </p>
        </div>

        {/* Premium Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-16">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-2 border border-amber-600/20">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 m-1 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg'
                    : 'text-amber-200 hover:text-white hover:bg-amber-600/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {activeTab === 'overview' && (
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-amber-600/30">
                <h3 className="text-2xl font-bold text-amber-400 mb-4">Campaign Overview</h3>
                <div className="space-y-4 text-gray-300">
                  <p><strong>Duration:</strong> November 15, 2025 - March 31, 2026</p>
                  <p><strong>Total Investment:</strong> $309,000</p>
                  <p><strong>Bibb & Tucker:</strong> $202,000</p>
                  <p><strong>Redemption:</strong> $107,000</p>
                </div>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Interactive flavor profile matcher</li>
                    <li>• Cocktail recipe library</li>
                    <li>• Bourbon education center</li>
                    <li>• Store locator integration</li>
                    <li>• Seasonal content updates</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-amber-600/30">
                <h3 className="text-2xl font-bold text-amber-400 mb-4">Strategic Vision</h3>
                <p className="text-gray-300 mb-6">
                  Establishing Deutsch Family Wine & Spirits as the Authority in Premium American Bourbon. 
                  This integrated digital campaign creates a unified bourbon destination across Wine Enthusiast 
                  and Whisky Advocate platforms.
                </p>
                <div className="space-y-4">
                  <div className="bg-amber-600/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-white">Q4 2025 Focus</h4>
                    <p className="text-gray-300 text-sm">Holiday gifting and discovery season</p>
                  </div>
                  <div className="bg-amber-600/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-white">Q1 2026 Focus</h4>
                    <p className="text-gray-300 text-sm">New Year bourbon exploration period</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'bibb-tucker' && (
            <div className="space-y-12">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Bibb & Tucker</h3>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Three expressions, one powerful narrative. Innovation meets tradition.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {bibbTuckerExpressions.map((expression, index) => (
                  <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-amber-600/30">
                    <div className="aspect-w-3 aspect-h-4 mb-4 bg-gray-700 rounded-lg flex items-center justify-center">
                      <span className="text-gray-400">Image Placeholder</span>
                    </div>
                    <h4 className="text-xl font-bold text-amber-400 mb-2">{expression.name}</h4>
                    <p className="text-gray-300 text-sm mb-4">{expression.description}</p>
                    <p className="text-gray-400 text-xs mb-4">{expression.story}</p>
                    <div className="text-amber-300 text-sm mb-4">{expression.angle}</div>
                    <div className="text-white font-semibold">{expression.price}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'redemption' && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">{redemptionStory.title}</h3>
                <p className="text-xl text-gray-300">{redemptionStory.description}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-amber-600/30">
                  <h4 className="text-xl font-bold text-amber-400 mb-6">Campaign Positioning</h4>
                  <ul className="space-y-3">
                    {redemptionStory.positioning.map((item, index) => (
                      <li key={index} className="text-gray-300 flex items-start">
                        <span className="text-amber-400 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-amber-600/30">
                  <h4 className="text-xl font-bold text-amber-400 mb-6">How It Complements Bibb & Tucker</h4>
                  <div className="space-y-4 text-gray-300">
                    <p>Together, they represent the full spectrum of American bourbon</p>
                    <p><strong>B&T:</strong> Innovation & Exploration</p>
                    <p><strong>Redemption:</strong> Heritage & Craft</p>
                    <p>Combined presence = Category authority</p>
                    <p>Shared Hub = Unified brand ecosystem</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">Bourbon 101</h3>
                <p className="text-xl text-gray-300">
                  Master the fundamentals of American bourbon appreciation
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {bourbon101Topics.map((topic, index) => (
                  <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-amber-600/30">
                    <h4 className="text-lg font-semibold text-amber-400 mb-3">{topic}</h4>
                    <p className="text-gray-300 text-sm">
                      Learn the essential knowledge every bourbon enthusiast needs to know.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'recipes' && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">Featured Recipes</h3>
                <p className="text-xl text-gray-300">
                  Craft the perfect cocktails with our premium bourbons
                </p>
              </div>
              
              <div className="space-y-8">
                {recipes.map((recipe, index) => (
                  <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-amber-600/30">
                    <h4 className="text-2xl font-bold text-amber-400 mb-4">{recipe.name}</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-lg font-semibold text-white mb-3">Ingredients:</h5>
                        <ul className="space-y-1">
                          {recipe.ingredients.map((ingredient, idx) => (
                            <li key={idx} className="text-gray-300">• {ingredient}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-white mb-3">Instructions:</h5>
                        <p className="text-gray-300">{recipe.instructions}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
