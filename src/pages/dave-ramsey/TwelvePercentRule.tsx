import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Calculator, 
  ArrowLeft, 
  CheckCircle,
  ArrowRight,
  BarChart3,
  AlertTriangle,
  BookOpen
} from 'lucide-react';
import SEO from '../../components/SEO';
import { seoConfig } from '../../config/seoConfig';

const TwelvePercentRule: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <SEO data={seoConfig.twelvePercentRule} />
      {/* Header */}
      <header className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Investment Number Calculator</span>
          </div>
        </div>
      </header>

      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Dave Ramsey's Investment Philosophy
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              The 12% Rule Explained
              <span className="block text-2xl sm:text-3xl text-indigo-600 mt-2">
                Why Dave Expects 12% Annual Returns
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dave Ramsey consistently talks about earning 12% annual returns on investments. Critics call it unrealistic, but the numbers tell a different story. Here's why this assumption makes sense for long-term investors.
            </p>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100 mb-12"
          >
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Where the 12% Number Comes From</h2>
              
              <p>
                Dave Ramsey's 12% assumption isn't pulled from thin air. It's based on the historical average annual return of the S&P 500 stock index from 1926 to today. While individual years vary wildly, the long-term average has consistently hovered around 10-12%.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 my-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Historical Market Performance</h3>
                    <p className="text-gray-700">
                      From 1926-2023, the S&P 500 has averaged approximately 10.5% annually. When you factor in dividend reinvestment and growth stock mutual funds (Dave's preference), 12% becomes reasonable for planning purposes.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Market Volatility</h2>

              <p>
                Here's what critics miss: Dave isn't saying you'll earn exactly 12% every year. Some years you'll lose 20%, others you'll gain 30%. The 12% is a long-term average over decades of investing, not a year-by-year prediction.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Example: Bad Years</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• 2008: -37% (Financial Crisis)</li>
                    <li>• 2002: -22% (Dot-com Crash)</li>
                    <li>• 1974: -26% (Oil Crisis)</li>
                    <li>• 2020: -6% (COVID start, recovered quickly)</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Example: Good Years</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• 1995: +37%</li>
                    <li>• 2013: +32%</li>
                    <li>• 2019: +31%</li>
                    <li>• 2021: +27%</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Dave Uses 12% for Planning</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-indigo-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Conservative Estimate</h3>
                    <p>
                      Believe it or not, 12% is actually conservative. Many growth stock mutual funds have exceeded this over long periods. Dave uses 12% as a reasonable expectation, not a best-case scenario.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-indigo-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Planning Purposes Only</h3>
                    <p>
                      The 12% figure helps people understand how much they need to save. It's better to plan for 12% and get 10% than to plan for 7% and miss your retirement goals entirely.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-indigo-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Long-Term Focus</h3>
                    <p>
                      Dave's audience isn't day trading or trying to time the market. They're investing for 20-40 years. Over these timeframes, market volatility smooths out and historical averages become more reliable.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-indigo-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Growth Stock Focus</h3>
                    <p>
                      Dave specifically recommends growth stock mutual funds, not the total market. Growth stocks have historically outperformed the broader market, making 12% more achievable.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Real-World Example: The Power of 12%</h2>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 border border-yellow-200 my-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sarah's Investment Journey</h3>
                
                <p className="text-gray-700 mb-4">
                  Sarah starts investing $500 per month at age 25. She consistently puts money into growth stock mutual funds averaging 12% annually until she retires at 65.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Sarah's Investment:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Monthly contribution: $500</li>
                      <li>• Years investing: 40 years</li>
                      <li>• Total contributed: $240,000</li>
                      <li>• Annual return: 12%</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Final Result:</h4>
                    <ul className="text-green-700 space-y-1">
                      <li>• Final balance: <strong>$2.65 million</strong></li>
                      <li>• Compound growth: $2.41 million</li>
                      <li>• Monthly retirement income: $10,600</li>
                      <li>• She's financially independent!</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-indigo-100 rounded-lg p-4">
                  <p className="text-indigo-800 font-medium text-center">
                    <strong>Key insight:</strong> Even if Sarah only averaged 10% instead of 12%, she'd still have over $1.9 million. The exact percentage matters less than consistent, long-term investing.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Criticisms and Responses</h2>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Criticism: "12% is unrealistic in today's market"</h3>
                  <p className="text-gray-700">
                    <strong>Response:</strong> This criticism comes up every decade, yet the long-term averages persist. Yes, some periods underperform, but others exceed expectations. The key is staying invested through all market cycles.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Criticism: "You should use more conservative estimates"</h3>
                  <p className="text-gray-700">
                    <strong>Response:</strong> Conservative estimates lead to inadequate saving. If you plan for 6% and get 6%, you might not have enough for retirement. Plan for 12%, save aggressively, and you'll likely exceed your goals.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Criticism: "Past performance doesn't guarantee future results"</h3>
                  <p className="text-gray-700">
                    <strong>Response:</strong> True, but it's the best data we have. American capitalism and innovation have driven market growth for nearly a century. While nothing is guaranteed, betting against America's long-term growth has historically been a losing strategy.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Achieve Dave's 12%</h2>

              <p>
                Getting 12% returns isn't about picking individual stocks or timing the market. It's about choosing the right types of mutual funds and staying invested for the long haul.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Dave's Recommended Mix:</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• 25% Large Cap Growth</li>
                    <li>• 25% Mid Cap Growth</li>
                    <li>• 25% Small Cap Growth</li>
                    <li>• 25% International Growth</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Fund Selection Criteria:</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• 10+ year track record</li>
                    <li>• Consistent management team</li>
                    <li>• Low expense ratios (under 1.5%)</li>
                    <li>• Focus on growth companies</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Bottom Line on 12%</h2>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200 my-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">What Really Matters</h3>
                    <p className="text-gray-700">
                      Whether you get 10%, 12%, or 14% matters far less than starting early and investing consistently. The difference between someone who invests nothing and someone who invests regularly is massive. The difference between 10% and 12% returns is minor by comparison.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border border-red-200 my-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Important Disclaimer</h3>
                    <p className="text-gray-700">
                      Past performance doesn't guarantee future results. Market downturns will happen. Some years will be terrible. But for long-term investors with 20+ year horizons, historical data suggests 12% is a reasonable planning assumption.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Using 12% in Your Planning</h2>

              <p>
                Use the 12% assumption as a starting point for your retirement calculations. If you're conservative by nature, plan for 10%. If you're optimistic about long-term market growth, 12% is defensible. The key is picking a number and sticking with a consistent investment plan.
              </p>

              <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Your Action Steps:</h3>
                <ol className="space-y-3 text-gray-700">
                  <li><strong>1. Calculate your investment number</strong> using our calculator with 12% returns</li>
                  <li><strong>2. Also calculate with 10%</strong> to see the difference in required savings</li>
                  <li><strong>3. Choose growth stock mutual funds</strong> with good track records</li>
                  <li><strong>4. Invest consistently</strong> regardless of market conditions</li>
                  <li><strong>5. Stay the course</strong> for decades, not years</li>
                </ol>
              </div>
            </div>
          </motion.div>

          {/* CTA Sections */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mb-6">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Calculate Using 12% Returns</h3>
              <p className="text-indigo-100 mb-6">
                See exactly how much you need to invest monthly to reach your financial goals using Dave's 12% assumption.
              </p>
              <button 
                onClick={() => navigate('/tool')}
                className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-200"
              >
                Calculate My Number
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Master the Baby Steps</h3>
              <p className="text-gray-600 mb-6">
                Learn Dave's complete financial plan and see how the 12% rule fits into Baby Step 4 (investing 15% for retirement).
              </p>
              <button 
                onClick={() => navigate('/dave-ramsey/baby-steps')}
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transform hover:scale-105 transition-all duration-200"
              >
                Learn the Baby Steps
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Related Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Complete Your Financial Education</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <button 
                onClick={() => navigate('/guide/compound-interest-calculator')}
                className="text-left p-4 bg-white rounded-xl hover:shadow-md transition-shadow border border-gray-100"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Compound Interest Guide</h4>
                <p className="text-sm text-gray-600">Understand how 12% returns compound over time</p>
              </button>
              
              <button 
                onClick={() => navigate('/guide/retirement-planning')}
                className="text-left p-4 bg-white rounded-xl hover:shadow-md transition-shadow border border-gray-100"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Retirement Planning</h4>
                <p className="text-sm text-gray-600">Build your complete retirement strategy</p>
              </button>
              
              <button 
                onClick={() => navigate('/guide/investment-basics')}
                className="text-left p-4 bg-white rounded-xl hover:shadow-md transition-shadow border border-gray-100"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Investment Basics</h4>
                <p className="text-sm text-gray-600">Learn fundamental investment principles</p>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-4 py-12 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Investment Number Calculator</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 Investment Number Calculator. Built for your financial freedom.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TwelvePercentRule;