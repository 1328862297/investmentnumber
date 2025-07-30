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
  Clock,
  Shield,
  Award,
  Users,
  AlertCircle,
  BarChart3
} from 'lucide-react';
import SEO from '../../components/SEO';
import { seoConfig } from '../../config/seoConfig';

const RetirementPlanning: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <SEO data={seoConfig.retirementPlanning} />
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
              Retirement Investment Calculator Guide
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Retirement Investment Calculator
              <span className="block text-2xl sm:text-3xl text-indigo-600 mt-2">
                How Much Do I Need to Invest Monthly?
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Want to retire with enough money? Use our <strong>retirement investment calculator</strong> to find your exact monthly investment amount. We'll show you how Dave Ramsey's method makes retirement planning actually simple.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Retirement Planning Matters</h2>
              
              <p>
                Most people spend more time planning their vacation than their retirement. That's a mistake that costs millions of Americans their financial security. The truth is, Social Security alone won't cover your living expenses, and employer pensions are becoming extinct. Your retirement is your responsibility.
              </p>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-200 my-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Reality Check</h3>
                    <p className="text-gray-700">
                      The average American has saved less than $65,000 for retirement. Meanwhile, financial experts estimate you'll need 10-12 times your annual income to maintain your lifestyle in retirement. The gap is massive, but it's not too late to fix it.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">How Much Do You Really Need?</h2>

              <p>
                Here's the simple math: if you want to maintain your current lifestyle in retirement, you'll need about 80% of your pre-retirement income every year. So if you make $60,000 now, you'll need $48,000 annually in retirement. If you want that income for 25 years, you're looking at $1.2 million total.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">The 4% Rule</h3>
                  <p className="text-gray-700">
                    Financial planners often use the 4% rule: you can safely withdraw 4% of your retirement savings annually. To get $48,000 per year, you'd need $1.2 million saved.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">The 10x Rule</h3>
                  <p className="text-gray-700">
                    A simpler approach: save 10-12 times your annual salary. If you make $60,000, aim for $600,000-$720,000 in retirement savings.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Dave Ramsey's Retirement Strategy</h2>

              <p>
                Dave Ramsey keeps retirement planning simple: once you're debt-free with an emergency fund, invest 15% of your income in retirement accounts. He recommends growth stock mutual funds with good track records, and he's right – this approach has created more millionaires than any other strategy.
              </p>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 my-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The 15% Rule</h3>
                    <p className="text-gray-700">
                      If you invest 15% of your income from age 25 to 65, you'll likely have enough for a comfortable retirement. Start later? You'll need to invest more. Start at 35? You might need 20-25% of your income.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Retirement Account Types</h2>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">401(k) - Your First Priority</h3>
                  <p className="text-gray-700 mb-3">
                    If your employer offers a 401(k) match, contribute enough to get the full match first. It's free money. Then contribute up to 15% of your income between your 401(k) and other retirement accounts.
                  </p>
                  <div className="text-sm text-gray-600">
                    <strong>2024 Limit:</strong> $23,000 (plus $7,500 catch-up if 50+) | <strong>Tax Advantage:</strong> Reduces current taxable income
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Roth IRA - Tax-Free Growth</h3>
                  <p className="text-gray-700 mb-3">
                    Pay taxes now, withdraw tax-free in retirement. Perfect for younger workers who expect to be in higher tax brackets later. Dave Ramsey's favorite for most people.
                  </p>
                  <div className="text-sm text-gray-600">
                    <strong>2024 Limit:</strong> $7,000 ($8,000 if 50+) | <strong>Tax Advantage:</strong> Tax-free withdrawals in retirement
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Traditional IRA - Tax Deduction Now</h3>
                  <p className="text-gray-700 mb-3">
                    Deduct contributions from current taxes, pay taxes on withdrawals in retirement. Good if you expect to be in a lower tax bracket when you retire.
                  </p>
                  <div className="text-sm text-gray-600">
                    <strong>2024 Limit:</strong> $7,000 ($8,000 if 50+) | <strong>Tax Advantage:</strong> Reduces current taxable income
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Age-Based Retirement Milestones</h2>

              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">By Age 30</h3>
                  <p className="text-gray-700">
                    Have 1x your annual salary saved. If you make $50,000, aim for $50,000 in retirement accounts.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">By Age 40</h3>
                  <p className="text-gray-700">
                    Have 3x your annual salary saved. This is when compound interest really starts working in your favor.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-200">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">By Age 50</h3>
                  <p className="text-gray-700">
                    Have 5x your annual salary saved. You can also start making catch-up contributions to retirement accounts.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Retirement Planning Mistakes</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Starting Too Late</h3>
                    <p>
                      Every year you delay costs you exponentially. A 25-year-old who invests $200/month until age 65 will have more than a 35-year-old who invests $400/month for the same period.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Cashing Out Early</h3>
                    <p>
                      Raiding your 401(k) for emergencies, house down payments, or other expenses destroys your retirement security. That's why you need an emergency fund first.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Not Maximizing Employer Match</h3>
                    <p>
                      If your employer matches 3% and you only contribute 2%, you're literally throwing away free money. Always contribute enough to get the full match.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Playing It Too Safe</h3>
                    <p>
                      Keeping retirement money in savings accounts or CDs won't beat inflation. You need growth investments for long-term retirement planning.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Retirement Action Plan</h2>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Step-by-Step Retirement Planning</h3>
                <ol className="space-y-3 text-gray-700">
                  <li><strong>1. Calculate your retirement income needs</strong> (aim for 80% of current income)</li>
                  <li><strong>2. Determine your retirement savings goal</strong> (10-12x annual income)</li>
                  <li><strong>3. Find your monthly investment number</strong> using our calculator</li>
                  <li><strong>4. Maximize employer 401(k) match</strong> (free money first)</li>
                  <li><strong>5. Choose growth stock mutual funds</strong> with good track records</li>
                  <li><strong>6. Automate your contributions</strong> (pay yourself first)</li>
                  <li><strong>7. Increase contributions annually</strong> (with raises and bonuses)</li>
                  <li><strong>8. Review and adjust yearly</strong> (stay on track)</li>
                </ol>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200 my-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Bottom Line</h3>
                    <p className="text-gray-700">
                      Retirement planning is simple: start early, invest consistently, and let compound interest do the heavy lifting. The hardest part is getting started. Once you do, building wealth becomes automatic.
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
              <h3 className="text-2xl font-bold mb-4">Calculate Your Retirement Number</h3>
              <p className="text-indigo-100 mb-6">
                Find out exactly how much you need to save monthly to reach your retirement goals.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dave Ramsey's Baby Steps</h3>
              <p className="text-gray-600 mb-6">
                Learn the proven 7-step plan for financial peace, including when and how to start investing for retirement.
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Essential Reading</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <button 
                onClick={() => navigate('/guide/investment-basics')}
                className="text-left p-4 bg-white rounded-xl hover:shadow-md transition-shadow border border-gray-100"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Investment Basics</h4>
                <p className="text-sm text-gray-600">Learn the fundamentals before you start investing</p>
              </button>
              
              <button 
                onClick={() => navigate('/guide/compound-interest-calculator')}
                className="text-left p-4 bg-white rounded-xl hover:shadow-md transition-shadow border border-gray-100"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Compound Interest Guide</h4>
                <p className="text-sm text-gray-600">Understand how your money grows over time</p>
              </button>
              
              <button 
                onClick={() => navigate('/guide/emergency-fund')}
                className="text-left p-4 bg-white rounded-xl hover:shadow-md transition-shadow border border-gray-100"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Emergency Fund</h4>
                <p className="text-sm text-gray-600">Build your financial foundation first</p>
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

export default RetirementPlanning;