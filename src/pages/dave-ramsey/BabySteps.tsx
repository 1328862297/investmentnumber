import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Calculator, 
  ArrowLeft, 
  TrendingUp, 
  Target,
  ArrowRight,
  BookOpen,
  Award
} from 'lucide-react';

const BabySteps: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
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
              Dave Ramsey's Financial Plan
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              The 7 Baby Steps to Financial Peace
              <span className="block text-2xl sm:text-3xl text-indigo-600 mt-2">
                The Proven Plan That's Helped Millions
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dave Ramsey's Baby Steps aren't just a plan – they're a roadmap to financial freedom that's been tested by millions of people. Each step builds on the last, creating unstoppable momentum toward wealth.
            </p>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Baby Step 1 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Save $1,000 for Your Starter Emergency Fund</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Before you do anything else, you need a small emergency fund. This isn't your full emergency fund – that comes later. This $1,000 is just enough to keep small emergencies from derailing your debt payoff plan.
                  </p>
                  <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                    <p className="text-red-700 font-medium">
                      <strong>Why this works:</strong> Without this buffer, you'll go back into debt every time something unexpected happens. The $1,000 keeps you moving forward instead of sliding backward.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Baby Step 2 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Pay Off All Debt (Except the House)</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    List all your debts from smallest to largest balance – ignore interest rates. Pay minimums on everything, then attack the smallest debt with every extra dollar you have. This is the "debt snowball" method.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-yellow-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Include These Debts:</h3>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Credit cards</li>
                        <li>• Car loans</li>
                        <li>• Student loans</li>
                        <li>• Personal loans</li>
                        <li>• Money owed to family/friends</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Why Smallest First:</h3>
                      <p className="text-sm text-gray-700">
                        Quick wins build momentum and motivation. Math says pay highest interest first, but behavior says you need victories to stay motivated.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Baby Step 3 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-green-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Save 3-6 Months of Expenses (Full Emergency Fund)</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Now that you're debt-free, it's time to build your real emergency fund. Save 3-6 months of expenses in a high-yield savings account. This protects you from major life events like job loss or medical emergencies.
                  </p>
                  <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                    <p className="text-green-700 font-medium">
                      <strong>How much exactly?</strong> Calculate your monthly expenses (rent, food, utilities, minimums) and multiply by 3-6. If you spend $3,000/month, save $9,000-$18,000.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Baby Step 4 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-2xl">4</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Invest 15% of Income in Retirement</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    This is where wealth building begins! Invest 15% of your household income in retirement accounts. Start with employer 401(k) match, then Roth IRAs, then back to 401(k). Focus on growth stock mutual funds with good track records.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Investment Priority:</h3>
                      <ol className="text-sm text-gray-700 space-y-1">
                        <li>1. 401(k) match (free money)</li>
                        <li>2. Roth IRA (tax-free growth)</li>
                        <li>3. Traditional 401(k) (tax deduction)</li>
                      </ol>
                    </div>
                    <div className="bg-indigo-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Dave's Recommendation:</h3>
                      <p className="text-sm text-gray-700">
                        Growth stock mutual funds with 10+ year track records. Spread across large cap, mid cap, small cap, and international.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Baby Step 5 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-2xl">5</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Save for Children's College Fund</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Only after you're saving for your own retirement should you save for kids' college. Use 529 Education Savings Plans or Coverdell ESAs. Remember: they can get loans for college, but you can't get loans for retirement.
                  </p>
                  <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                    <p className="text-purple-700 font-medium">
                      <strong>Important principle:</strong> Secure your own financial future first. A financially stable parent is the best gift you can give your children.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Baby Step 6 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-2xl">6</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Pay Off Your Home Early</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Throw every extra dollar at your mortgage. A paid-off house means ultimate financial security and freedom. Most people following this plan pay off their homes in 8-12 years instead of 30.
                  </p>
                  <div className="bg-pink-50 rounded-xl p-4 border border-pink-200">
                    <p className="text-pink-700 font-medium">
                      <strong>The math vs. behavior debate:</strong> Yes, you might earn more investing, but a paid-off house provides security and peace of mind that can't be calculated.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Baby Step 7 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-2xl">7</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Build Wealth and Give Generously</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Congratulations! You're now debt-free with a paid-off house and well-funded retirement accounts. Continue investing, but also live generously. Give to causes you care about and enjoy the fruits of your discipline.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Wealth Building Options:</h3>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Max out all retirement accounts</li>
                        <li>• Invest in taxable accounts</li>
                        <li>• Real estate investments</li>
                        <li>• Start a business</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Generous Living:</h3>
                      <p className="text-sm text-gray-700">
                        Money is a tool for good. Support charities, help family members, and make a positive impact with your wealth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Principles */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why the Baby Steps Work</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sequential Order</h3>
                  <p className="text-gray-700">
                    Each step builds on the previous one. Don't skip ahead – the order is crucial for building momentum and financial stability.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Behavior Focus</h3>
                  <p className="text-gray-700">
                    The steps prioritize changing your behavior and building good habits over mathematical optimization. Behavior beats math every time.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
                  <p className="text-gray-700">
                    Millions of people have followed these exact steps to achieve financial peace. The plan works if you work the plan.
                  </p>
                </div>
              </div>
            </div>

            {/* Common Questions */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Questions About the Baby Steps</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Q: Should I invest while paying off debt?</h3>
                  <p className="text-gray-700">
                    <strong>A:</strong> No! Focus has power. While paying off debt (Step 2), pause all investing except employer 401(k) match. The guaranteed return of paying off debt usually beats market returns anyway.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Q: What if I have low-interest debt?</h3>
                  <p className="text-gray-700">
                    <strong>A:</strong> Pay it off anyway. Debt is risk, and it changes your behavior. The peace of mind from being debt-free is worth more than the small math advantage of keeping cheap debt.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Q: Should I pay off my house instead of investing more?</h3>
                  <p className="text-gray-700">
                    <strong>A:</strong> After you're investing 15% for retirement (Step 4), yes. A paid-off house provides security and eliminates your largest monthly payment, giving you incredible financial flexibility.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Q: How long does this take?</h3>
                  <p className="text-gray-700">
                    <strong>A:</strong> The average person takes 18-24 months to complete Steps 1-3. Steps 4-6 typically take 10-15 years. Step 7 is the rest of your life – and it's the best part!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Sections */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-6 mt-12"
          >
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mb-6">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Ready for Baby Step 4?</h3>
              <p className="text-indigo-100 mb-6">
                Calculate exactly how much you need to invest monthly to reach your retirement goals using the 15% rule.
              </p>
              <button 
                onClick={() => navigate('/tool')}
                className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-200"
              >
                Calculate My Investment Number
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Learn About Dave's 12% Rule</h3>
              <p className="text-gray-600 mb-6">
                Understand why Dave recommends expecting 12% returns and how this fits into your long-term investment strategy.
              </p>
              <button 
                onClick={() => navigate('/dave-ramsey/12-percent-rule')}
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transform hover:scale-105 transition-all duration-200"
              >
                Learn the 12% Rule
                <ArrowRight className="ml-2 w-5 h-5" />
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

export default BabySteps;