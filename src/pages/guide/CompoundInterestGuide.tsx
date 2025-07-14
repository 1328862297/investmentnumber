import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Calculator, 
  ArrowLeft, 
  TrendingUp, 
  DollarSign, 
  Target,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Clock
} from 'lucide-react';
import SEO from '../../components/SEO';
import { seoConfig } from '../../config/seoConfig';

const CompoundInterestGuide: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <SEO data={seoConfig.compoundInterest} />
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
              Complete Compound Interest Guide
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              The Complete Compound Interest Guide
              <span className="block text-2xl sm:text-3xl text-indigo-600 mt-2">
                Master the Secret to Wealth Building
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn how compound interest became known as the "eighth wonder of the world" and discover how to use a compound interest calculator to plan your financial goals and build long-term wealth.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is a Compound Interest Calculator?</h2>
              
              <p>
                A <strong>compound interest calculator</strong> is a powerful financial tool that helps you calculate the future value of your investments under the compound interest effect. Unlike simple interest, compound interest calculates interest not only on the principal amount but also on the accumulated interest, creating a "snowball effect" of wealth growth.
              </p>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200 my-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Power of Compound Interest</h3>
                    <p className="text-gray-700">
                      Albert Einstein reportedly said: "Compound interest is the eighth wonder of the world. He who understands it, earns it. He who doesn't, pays it."
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Basic Compound Interest Formula</h2>
              
              <p>The fundamental compound interest formula is:</p>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 my-6">
                <div className="text-center">
                  <div className="text-2xl font-mono text-indigo-600 mb-4">
                    FV = PV × (1 + r)^n
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>FV</strong> = Future Value (target amount)</p>
                    <p><strong>PV</strong> = Present Value (initial investment)</p>
                    <p><strong>r</strong> = Annual interest rate</p>
                    <p><strong>n</strong> = Number of investment years</p>
                  </div>
                </div>
              </div>

              <p>
                However, when dealing with regular investments (like monthly contributions), the formula becomes more complex. Our compound interest calculator automatically handles these complex calculations, allowing you to focus on developing your investment strategy.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use a Compound Interest Calculator</h2>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Step 1: Set Your Goal</h3>
                  <p className="text-gray-700">
                    Determine your financial target amount. This could be retirement savings, college fund, or any other long-term goal.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Step 2: Set Your Timeline</h3>
                  <p className="text-gray-700">
                    Define the timeframe to reach your goal. Time is one of the most important factors in compound interest.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <DollarSign className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Step 3: Estimate Returns</h3>
                  <p className="text-gray-700">
                    Estimate annual return rate based on your investment type. Stock mutual funds have historically averaged around 10-12%.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <Calculator className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Step 4: Calculate</h3>
                  <p className="text-gray-700">
                    Get the exact monthly investment amount needed – this is your "investment number."
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Real-World Example of Compound Interest</h2>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 border border-yellow-200 my-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Case Study: Starting at 25 vs 35</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="text-lg font-bold text-green-600 mb-3">Sarah (starts at 25)</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Goal: $1 million by age 65</li>
                      <li>• Investment period: 40 years</li>
                      <li>• Annual return: 10%</li>
                      <li>• <strong>Monthly investment: Only $442</strong></li>
                      <li>• Total invested: $212,160</li>
                      <li>• Compound growth: $787,840</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="text-lg font-bold text-red-600 mb-3">Mike (starts at 35)</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Goal: $1 million by age 65</li>
                      <li>• Investment period: 30 years</li>
                      <li>• Annual return: 10%</li>
                      <li>• <strong>Monthly investment: $1,316</strong></li>
                      <li>• Total invested: $473,760</li>
                      <li>• Compound growth: $526,240</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-indigo-100 rounded-lg">
                  <p className="text-indigo-800 font-semibold text-center">
                    <strong>Key Insight:</strong> By starting 10 years later, Mike needs to invest nearly 3 times as much! This demonstrates the incredible power of time in compound interest.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Practices for Using Compound Interest Calculators</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">1. Use Conservative Return Estimates</h3>
                    <p>
                      While the stock market has historically averaged 10-12%, consider using 8-10% for calculations to account for market volatility.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">2. Consider Inflation</h3>
                    <p>
                      When calculating future purchasing power, factor in inflation. If your goal is "today's $1 million purchasing power," adjust your target amount accordingly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">3. Recalculate Regularly</h3>
                    <p>
                      As your income grows and goals adjust, regularly reassess your investment strategy using the compound interest calculator.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">4. Automate Your Investments</h3>
                    <p>
                      Once you determine your monthly investment amount, immediately set up automatic transfers to ensure consistent investing without interruption.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Compound Interest Calculator Mistakes</h2>

              <div className="bg-red-50 rounded-xl p-6 border border-red-200 my-8">
                <h3 className="text-xl font-bold text-red-800 mb-4">Avoid These Pitfalls:</h3>
                <ul className="space-y-3 text-red-700">
                  <li>• <strong>Overly optimistic return expectations</strong>: Using unrealistic high return rates for calculations</li>
                  <li>• <strong>Ignoring market volatility</strong>: Assuming investment returns are linear growth</li>
                  <li>• <strong>Frequent strategy changes</strong>: Altering long-term investment plans due to short-term market fluctuations</li>
                  <li>• <strong>Calculation without action</strong>: Failing to take actual investment action after running the numbers</li>
                </ul>
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
                Use our compound interest calculator to find your personalized investment number in minutes.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Learn More About Investing</h3>
              <p className="text-gray-600 mb-6">
                Dive deeper into investment fundamentals, retirement planning, and Dave Ramsey's proven financial methods.
              </p>
              <button 
                onClick={() => navigate('/guide/investment-basics')}
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transform hover:scale-105 transition-all duration-200"
              >
                Investment Basics Guide
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Related Reading</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <button 
                onClick={() => navigate('/guide/investment-basics')}
                className="text-left p-4 bg-white rounded-xl hover:shadow-md transition-shadow border border-gray-100"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Investment Basics</h4>
                <p className="text-sm text-gray-600">Learn fundamental investment concepts and strategies from scratch</p>
              </button>
              
              <button 
                onClick={() => navigate('/dave-ramsey/baby-steps')}
                className="text-left p-4 bg-white rounded-xl hover:shadow-md transition-shadow border border-gray-100"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Dave Ramsey's 7 Baby Steps</h4>
                <p className="text-sm text-gray-600">Master the classic financial planning methodology</p>
              </button>
              
              <button 
                onClick={() => navigate('/guide/retirement-planning')}
                className="text-left p-4 bg-white rounded-xl hover:shadow-md transition-shadow border border-gray-100"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Retirement Planning Guide</h4>
                <p className="text-sm text-gray-600">Create a comprehensive retirement financial plan</p>
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

export default CompoundInterestGuide;