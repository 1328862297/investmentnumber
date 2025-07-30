import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Calculator, 
  ArrowLeft, 
  TrendingUp, 
  Target,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Shield,
  BarChart3,
  Clock
} from 'lucide-react';
import SEO from '../../components/SEO';
import { seoConfig } from '../../config/seoConfig';

const InvestmentBasics: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <SEO data={seoConfig.investmentBasics} />
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
              Beginner Investment Calculator Guide
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Investment Calculator for Beginners
              <span className="block text-2xl sm:text-3xl text-indigo-600 mt-2">
                Learn Before You Calculate Your Numbers
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Never invested before? Perfect. Learn the basics here, then use our <strong>investment calculator</strong> to find your monthly number. We'll show you exactly what Dave Ramsey means when he talks about building wealth through consistent investing.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Investing?</h2>
              
              <p>
                <strong>Investing</strong> is putting money into assets with growth potential, expecting higher returns in the future. Unlike saving, investing accepts moderate risk in exchange for greater long-term gains, making it an essential tool for achieving financial goals and protecting against inflation.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 my-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Investing vs Saving</h3>
                    <p className="text-gray-700">
                      Saving preserves capital but offers minimal returns (1-3% annually), while investing may fluctuate but provides higher long-term average returns (8-12% annually) – essential for fighting inflation and building wealth.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Should You Invest?</h2>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Beat Inflation</h3>
                  <p className="text-gray-700">
                    With inflation averaging 3% annually, money in low-interest accounts loses purchasing power. Investing helps your money grow faster than inflation.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Achieve Financial Goals</h3>
                  <p className="text-gray-700">
                    Whether it's retirement, buying a home, or children's education, investing helps you reach major financial milestones.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Time Advantage</h3>
                  <p className="text-gray-700">
                    The earlier you start investing, the more time compound interest has to work its magic, turning small amounts into substantial wealth.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Build Wealth</h3>
                  <p className="text-gray-700">
                    Consistent investing in diversified assets has historically been the most reliable path to building long-term wealth.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Investments</h2>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">1. Stocks (Equities)</h3>
                  <p className="text-gray-700 mb-3">
                    Buying shares in companies means owning a piece of their business. Stocks offer high growth potential but come with higher volatility.
                  </p>
                  <div className="text-sm text-gray-600">
                    <strong>Risk Level:</strong> High | <strong>Expected Return:</strong> 8-12% annually | <strong>Best For:</strong> Long-term growth
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2. Bonds</h3>
                  <p className="text-gray-700 mb-3">
                    Lending money to governments or corporations in exchange for regular interest payments. Bonds are generally safer but offer lower returns.
                  </p>
                  <div className="text-sm text-gray-600">
                    <strong>Risk Level:</strong> Low-Medium | <strong>Expected Return:</strong> 3-6% annually | <strong>Best For:</strong> Stable income
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3. Mutual Funds</h3>
                  <p className="text-gray-700 mb-3">
                    Pooled investments managed by professionals, offering instant diversification. Great for beginners who want professional management.
                  </p>
                  <div className="text-sm text-gray-600">
                    <strong>Risk Level:</strong> Varies | <strong>Expected Return:</strong> 6-10% annually | <strong>Best For:</strong> Diversified exposure
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4. Index Funds</h3>
                  <p className="text-gray-700 mb-3">
                    Funds that track market indexes like the S&P 500. Low fees, broad diversification, and consistent with Dave Ramsey's recommendations.
                  </p>
                  <div className="text-sm text-gray-600">
                    <strong>Risk Level:</strong> Medium | <strong>Expected Return:</strong> 8-11% annually | <strong>Best For:</strong> Simple, low-cost investing
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started: Your First Steps</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-indigo-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Build Your Emergency Fund</h3>
                    <p>
                      Before investing, save 3-6 months of expenses in a high-yield savings account. This prevents you from selling investments during emergencies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-indigo-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Pay Off High-Interest Debt</h3>
                    <p>
                      Eliminate credit card debt and other high-interest loans before investing. It's impossible to consistently earn more than you're paying in interest.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-indigo-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Determine Your Investment Number</h3>
                    <p>
                      Use our calculator to find exactly how much you need to invest monthly to reach your financial goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-indigo-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Choose Your Investment Account</h3>
                    <p>
                      Open a 401(k) through your employer (especially if they match contributions), or an IRA for tax-advantaged investing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-indigo-600 font-bold text-sm">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Start Simple</h3>
                    <p>
                      Begin with broad market index funds or target-date funds. These provide instant diversification without requiring extensive research.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Investment Mistakes to Avoid</h2>

              <div className="bg-red-50 rounded-xl p-6 border border-red-200 my-8">
                <h3 className="text-xl font-bold text-red-800 mb-4">Watch Out For These Pitfalls:</h3>
                <ul className="space-y-3 text-red-700">
                  <li>• <strong>Trying to time the market</strong>: Nobody can consistently predict short-term market movements</li>
                  <li>• <strong>Putting all eggs in one basket</strong>: Diversification is key to managing risk</li>
                  <li>• <strong>Emotional investing</strong>: Don't buy high when markets are soaring or sell low during crashes</li>
                  <li>• <strong>Chasing hot tips</strong>: Stick to proven strategies rather than following investment fads</li>
                  <li>• <strong>Ignoring fees</strong>: High management fees can significantly erode your returns over time</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200 my-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Dave Ramsey Approach</h3>
                    <p className="text-gray-700">
                      Dave Ramsey recommends investing 15% of your income in retirement accounts after paying off debt and building an emergency fund. Focus on growth stock mutual funds with good track records and low fees.
                    </p>
                  </div>
                </div>
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
              <h3 className="text-2xl font-bold mb-4">Calculate Your Investment Number</h3>
              <p className="text-indigo-100 mb-6">
                Now that you understand the basics, find out exactly how much you need to invest monthly to reach your goals.
              </p>
              <button 
                onClick={() => navigate('/tool')}
                className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-200"
              >
                Calculate Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Learn About Compound Interest</h3>
              <p className="text-gray-600 mb-6">
                Discover how compound interest can turn your regular investments into substantial wealth over time.
              </p>
              <button 
                onClick={() => navigate('/guide/compound-interest-calculator')}
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transform hover:scale-105 transition-all duration-200"
              >
                Compound Interest Guide
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Continue Your Learning</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <button 
                onClick={() => navigate('/guide/retirement-planning')}
                className="text-left p-4 bg-white rounded-xl hover:shadow-md transition-shadow border border-gray-100"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Retirement Planning</h4>
                <p className="text-sm text-gray-600">Build a comprehensive retirement strategy</p>
              </button>
              
              <button 
                onClick={() => navigate('/guide/emergency-fund')}
                className="text-left p-4 bg-white rounded-xl hover:shadow-md transition-shadow border border-gray-100"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Emergency Fund</h4>
                <p className="text-sm text-gray-600">Learn how to build your financial safety net</p>
              </button>
              
              <button 
                onClick={() => navigate('/dave-ramsey/baby-steps')}
                className="text-left p-4 bg-white rounded-xl hover:shadow-md transition-shadow border border-gray-100"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Dave's Baby Steps</h4>
                <p className="text-sm text-gray-600">Follow the proven 7-step financial plan</p>
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

export default InvestmentBasics;