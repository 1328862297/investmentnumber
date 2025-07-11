import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Calculator, 
  ArrowLeft, 
  Target,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Shield,
  AlertTriangle,
  BarChart3
} from 'lucide-react';

const EmergencyFund: React.FC = () => {
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
              Emergency Fund Guide
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Build Your Financial Safety Net
              <span className="block text-2xl sm:text-3xl text-indigo-600 mt-2">
                Sleep Better Knowing You're Protected
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              An emergency fund isn't optional – it's the foundation of financial security. Learn how much you need, where to keep it, and how to build it without derailing your other financial goals.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is an Emergency Fund?</h2>
              
              <p>
                An emergency fund is money set aside specifically for unexpected expenses or financial emergencies. Think job loss, medical bills, major car repairs, or home maintenance. It's not vacation money or a new gadget fund – it's your financial insurance policy.
              </p>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-200 my-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Hard Truth</h3>
                    <p className="text-gray-700">
                      Studies show that 40% of Americans can't cover a $400 emergency expense without borrowing money. Without an emergency fund, even small setbacks can spiral into massive debt problems.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">How Much Do You Need?</h2>

              <p>
                The standard advice is 3-6 months of expenses, but your situation determines the exact amount. If you have stable employment and good health insurance, 3 months might be enough. If you're self-employed or work in a volatile industry, aim for 6 months or more.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Calculate Your Number</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Step 1:</strong> Add up monthly essentials (rent, food, utilities, minimums)</p>
                    <p><strong>Step 2:</strong> Multiply by 3-6 months</p>
                    <p><strong>Example:</strong> $3,000 monthly expenses × 4 months = $12,000 emergency fund</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Dave Ramsey's Approach</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Baby Step 1:</strong> Save $1,000 starter emergency fund first</p>
                    <p><strong>Baby Step 3:</strong> Build 3-6 months of expenses after paying off debt</p>
                    <p><strong>Key:</strong> Don't invest until your emergency fund is complete</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Where to Keep Your Emergency Fund</h2>

              <p>
                Your emergency fund needs to be accessible quickly, which means keeping it separate from your investments. The goal isn't growth – it's security and liquidity.
              </p>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">High-Yield Savings Account ⭐ Best Option</h3>
                  <p className="text-gray-700 mb-3">
                    Online banks offer 4-5% interest with FDIC protection. Your money grows modestly while staying completely accessible. Examples: Marcus, Ally, Capital One 360.
                  </p>
                  <div className="text-sm text-gray-600">
                    <strong>Pros:</strong> FDIC insured, good interest, instant access | <strong>Cons:</strong> Returns barely beat inflation
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Money Market Account</h3>
                  <p className="text-gray-700 mb-3">
                    Similar to high-yield savings but may offer check-writing privileges. Often requires higher minimum balances but provides slightly better rates.
                  </p>
                  <div className="text-sm text-gray-600">
                    <strong>Pros:</strong> Higher rates, check access | <strong>Cons:</strong> Higher minimums, limited transactions
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Regular Checking Account ❌ Avoid</h3>
                  <p className="text-gray-700 mb-3">
                    While convenient, most checking accounts pay almost zero interest. Your emergency fund loses purchasing power to inflation over time.
                  </p>
                  <div className="text-sm text-gray-600">
                    <strong>Pros:</strong> Maximum convenience | <strong>Cons:</strong> No growth, inflation eats your money
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Build Your Emergency Fund</h2>

              <p>
                Building an emergency fund feels overwhelming when you're living paycheck to paycheck. The secret is starting small and being consistent. Even $25 per week adds up to $1,300 in a year.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-indigo-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Start with Dave's $1,000</h3>
                    <p>
                      Before paying off debt or investing, save $1,000 as a starter emergency fund. This prevents you from adding to your debt when small emergencies hit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-indigo-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Make It Automatic</h3>
                    <p>
                      Set up automatic transfers from checking to your emergency fund savings account. Even $50 per paycheck adds up quickly and you won't miss what you don't see.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-indigo-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Use Windfalls Wisely</h3>
                    <p>
                      Tax refunds, bonuses, gift money, or garage sale proceeds go straight to your emergency fund until it's fully funded. Resist the urge to splurge.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-indigo-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Cut Expenses Temporarily</h3>
                    <p>
                      Cancel subscriptions, eat out less, or pick up a side gig until your emergency fund is complete. The sacrifice is temporary, but the security lasts forever.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Counts as a Real Emergency?</h2>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">✅ Real Emergencies</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Job loss or income reduction</li>
                    <li>• Major medical expenses</li>
                    <li>• Essential home repairs (roof, HVAC, plumbing)</li>
                    <li>• Car repairs for transportation to work</li>
                    <li>• Family emergencies requiring travel</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">❌ Not Emergencies</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Christmas gifts</li>
                    <li>• Vacation expenses</li>
                    <li>• Wedding costs</li>
                    <li>• New furniture or electronics</li>
                    <li>• Investment opportunities</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Emergency Fund Mistakes to Avoid</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Investing Your Emergency Fund</h3>
                    <p>
                      The stock market can drop 20-30% right when you need the money most. Emergency funds belong in boring, safe accounts – not investments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Using Credit Cards as Your Emergency Fund</h3>
                    <p>
                      Credit cards aren't emergency funds – they're emergency debt. You'll pay interest and potentially damage your credit score during already stressful times.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Making It Too Accessible</h3>
                    <p>
                      Don't keep your emergency fund in your everyday checking account or you'll spend it on non-emergencies. Separate but accessible is the goal.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200 my-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Peace of Mind Factor</h3>
                    <p className="text-gray-700">
                      An emergency fund isn't just about money – it's about reducing stress and anxiety. When you know you can handle whatever life throws at you, you sleep better and make better financial decisions.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">After You Use Your Emergency Fund</h2>

              <p>
                If you have to use your emergency fund, don't panic. That's exactly what it's for! But make replenishing it your top priority. Stop all other financial goals temporarily and rebuild your safety net first.
              </p>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Fund Replenishment Plan</h3>
                <ol className="space-y-3 text-gray-700">
                  <li><strong>1. Pause investing</strong> until your emergency fund is restored</li>
                  <li><strong>2. Cut all non-essential spending</strong> temporarily</li>
                  <li><strong>3. Use any extra income</strong> (overtime, side gigs, bonuses)</li>
                  <li><strong>4. Set aggressive but realistic timeline</strong> (aim for 3-6 months)</li>
                  <li><strong>5. Resume normal financial plan</strong> once fund is rebuilt</li>
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
              <h3 className="text-2xl font-bold mb-4">Plan Your Investment Future</h3>
              <p className="text-indigo-100 mb-6">
                Once your emergency fund is built, calculate exactly how much to invest monthly for your long-term goals.
              </p>
              <button 
                onClick={() => navigate('/tool')}
                className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-200"
              >
                Calculate Investment Number
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Learn Dave's Baby Steps</h3>
              <p className="text-gray-600 mb-6">
                See how emergency funds fit into the complete financial plan that's helped millions achieve financial peace.
              </p>
              <button 
                onClick={() => navigate('/dave-ramsey/baby-steps')}
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transform hover:scale-105 transition-all duration-200"
              >
                Explore Baby Steps
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Build Your Complete Financial Plan</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <button 
                onClick={() => navigate('/guide/investment-basics')}
                className="text-left p-4 bg-white rounded-xl hover:shadow-md transition-shadow border border-gray-100"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Investment Basics</h4>
                <p className="text-sm text-gray-600">Learn to invest after your emergency fund is complete</p>
              </button>
              
              <button 
                onClick={() => navigate('/guide/retirement-planning')}
                className="text-left p-4 bg-white rounded-xl hover:shadow-md transition-shadow border border-gray-100"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Retirement Planning</h4>
                <p className="text-sm text-gray-600">Plan for long-term financial security</p>
              </button>
              
              <button 
                onClick={() => navigate('/guide/compound-interest-calculator')}
                className="text-left p-4 bg-white rounded-xl hover:shadow-md transition-shadow border border-gray-100"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Compound Interest</h4>
                <p className="text-sm text-gray-600">Understand how your investments will grow</p>
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

export default EmergencyFund;