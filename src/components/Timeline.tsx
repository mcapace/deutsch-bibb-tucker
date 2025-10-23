'use client';

export default function Timeline() {
  const phases = [
    {
      period: 'November 15-30, 2025',
      title: 'Holiday Discovery Launch',
      theme: 'The Season of Bold Pours',
      activities: [
        'Hub launches with both brands',
        'Bibb & Tucker Article #1 (Gold Roast focus)',
        'Both brands in WA Store',
        'Heavy social and native push',
        'Holiday email campaigns begin'
      ],
      focus: 'Bibb & Tucker Gold Roast: The unexpected gift for coffee lovers',
      investment: '$102,500'
    },
    {
      period: 'December 1-31, 2025',
      title: 'Peak Holiday Season',
      theme: 'Gift Guide Integration',
      activities: [
        'Bibb & Tucker Article #2 (all expressions)',
        'Redemption Article #1 (heritage)',
        'Peak holiday promotion',
        'Gift guide integration',
        'Maximum digital presence'
      ],
      focus: 'All three Bibb & Tucker expressions as gifting options + Redemption heritage',
      investment: '$48,500'
    },
    {
      period: 'January 1-31, 2026',
      title: 'New Year Momentum',
      theme: 'The Year of Bourbon Exploration',
      activities: [
        'Sustained branding begins',
        'Monthly emails and social',
        'Hub content refreshed for New Year',
        'Banner campaigns maintain visibility'
      ],
      focus: 'Start the year with better bourbon - building foundation',
      investment: '$0 (sustained branding)'
    },
    {
      period: 'February 1-28, 2026',
      title: 'Valentine\'s & Culinary Focus',
      theme: 'Beyond the Pour',
      activities: [
        'Bibb & Tucker Article #3 (culinary/Valentine\'s)',
        'WA Store returns (both brands)',
        'Valentine\'s Day tie-in',
        'Continued branding presence'
      ],
      focus: 'Bold flavors for winter grilling + Valentine\'s Day entertaining',
      investment: '$99,500'
    },
    {
      period: 'March 1-31, 2026',
      title: 'Craft Cocktail Mastery',
      theme: 'Mixology Excellence',
      activities: [
        'Redemption Article #2 (mixology)',
        'Spring entertaining content',
        'Campaign crescendo',
        'Performance analysis and learnings'
      ],
      focus: 'Mastering craft cocktails with Redemption bourbon',
      investment: '$58,500'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Campaign Timeline
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A strategic 4.5-month journey from holiday discovery to bourbon mastery
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-amber-600"></div>

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-amber-600 rounded-full border-4 border-gray-900 z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'}`}>
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-amber-600/30">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <span className="text-amber-400 font-semibold text-sm">{phase.period}</span>
                        <h3 className="text-2xl font-bold text-white mt-1">{phase.title}</h3>
                        <p className="text-amber-300 font-medium">{phase.theme}</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {phase.investment}
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-amber-400 mb-2">Key Focus:</h4>
                      <p className="text-gray-300">{phase.focus}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-amber-400 mb-3">Activities:</h4>
                      <ul className="space-y-2">
                        {phase.activities.map((activity, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start">
                            <span className="text-amber-400 mr-2 mt-1">•</span>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Campaign Summary */}
        <div className="mt-16 bg-gradient-to-r from-amber-600/20 to-amber-800/20 rounded-lg p-8 border border-amber-600/30">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Campaign Summary</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-amber-400 mb-2">$309,000</div>
                <div className="text-gray-300">Total Investment</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400 mb-2">4.5</div>
                <div className="text-gray-300">Months Duration</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400 mb-2">5</div>
                <div className="text-gray-300">Sponsored Articles</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
