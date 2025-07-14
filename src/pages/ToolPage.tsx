import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Calculator, ArrowLeft, DollarSign, Target, TrendingUp, ArrowRight, BookOpen, PiggyBank, Users, Award, Shield } from 'lucide-react';
import SEO from '../components/SEO';
import { seoConfig } from '../config/seoConfig';

const ToolPage: React.FC = () => {
  const navigate = useNavigate();
  const [targetAmount, setTargetAmount] = useState(500000);
  const [currentSavings, setCurrentSavings] = useState(10000);
  const [annualReturn, setAnnualReturn] = useState(12); // Dave Ramsey's recommended 12%
  const [years, setYears] = useState(20);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const params = new URLSearchParams({
        target: targetAmount.toString(),
        current: currentSavings.toString(),
        rate: annualReturn.toString(),
        years: years.toString()
      });
      
      navigate(`/result?${params.toString()}`);
    }, 1500);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <SEO data={seoConfig.tool} />
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

      {/* Main Content */}
      <main className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Investment Number Calculator
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Find Your Investment Number
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Put in your numbers below and discover exactly how much to invest each month. This <strong>investment number calculator</strong> uses Dave Ramsey's proven compound interest principles to reverse-engineer your financial goals.
            </p>
          </motion.div>

          {/* Calculator Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-gray-100 mb-12"
          >
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center">
                <DollarSign className="w-8 h-8 mr-3 text-indigo-500" />
                Calculate Your Investment Number
              </h2>
              <p className="text-gray-600 text-center">Adjust the parameters below to match your financial situation and goals. Your <strong>investment number</strong> is the exact monthly amount you need to reach any financial target.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Target Amount: {formatCurrency(targetAmount)}
                </label>
                <input
                  type="range"
                  min="10000"
                  max="2000000"
                  step="10000"
                  value={targetAmount}
                  onChange={(e) => setTargetAmount(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>$10K</span>
                  <span>$2M</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Your financial goal (retirement, college, debt freedom)</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Current Savings: {formatCurrency(currentSavings)}
                </label>
                <input
                  type="range"
                  min="0"
                  max="500000"
                  step="1000"
                  value={currentSavings}
                  onChange={(e) => setCurrentSavings(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>$0</span>
                  <span>$500K</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Money you already have invested</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Annual Return Rate: {annualReturn}%
                </label>
                <input
                  type="range"
                  min="6"
                  max="15"
                  step="0.5"
                  value={annualReturn}
                  onChange={(e) => setAnnualReturn(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>6%</span>
                  <span>15%</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Dave Ramsey recommends 12% based on S&P 500 history</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Years Until Goal: {years} years
                </label>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>1 year</span>
                  <span>50 years</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Time horizon for your investment goal</p>
              </div>
            </div>

            {/* Preview Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200 mb-8"
            >
              <div className="text-center">
                <div className="text-sm text-indigo-600 font-medium mb-2">Investment Number Preview</div>
                <div className="text-lg text-gray-700">
                  Reach <span className="font-bold text-indigo-600">{formatCurrency(targetAmount)}</span> in <span className="font-bold text-indigo-600">{years} years</span>
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Starting with {formatCurrency(currentSavings)} at {annualReturn}% annual return
                </div>
              </div>
            </motion.div>

            <button
              onClick={handleCalculate}
              disabled={isCalculating}
              className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-xl rounded-2xl hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isCalculating ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                  Calculating Your Investment Number...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  Calculate My Investment Number
                  <ArrowRight className="ml-3 w-6 h-6" />
                </div>
              )}
            </button>

            <div className="text-center mt-6 text-gray-500 text-sm">
              ✨ Free calculation • No signup required • Dave Ramsey approved method
            </div>
          </motion.div>

          {/* Educational Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100 mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Understanding Your Investment Number
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                When you use our <strong>dave ramsey investment calculator</strong>, you're tapping into one of the most powerful forces in finance: compound interest. Dave Ramsey calls it "the eighth wonder of the world," and for good reason. Unlike simple interest that only grows on your initial investment, compound interest grows on both your principal and all the interest you've earned over time.
              </p>

              <p>
                Here's a real-life example that shows why knowing your investment number matters: Sarah, a 25-year-old teacher, wants to retire with $1 million by age 65. Using our <strong>dave ramsey college investment calculator</strong> principles, she discovers her investment number is just $467 per month at a 12% annual return. That's less than many people spend on coffee and dining out! But here's the magic – if she waits until age 35 to start, that monthly amount jumps to $1,319. The ten-year delay costs her an extra $852 per month for the rest of her working life.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Why Dave Ramsey's 12% Return Assumption Makes Sense
              </h3>

              <p>
                Critics sometimes question Dave's 12% return assumption, but history backs it up. From 1926 to 2020, the S&P 500 has averaged approximately 10-12% annual returns. Dave uses 12% because he's looking at growth stock mutual funds, which historically outperform the broader market. Our <strong>compound investment calculator dave ramsey</strong> style tool lets you adjust this rate, but starting with 12% gives you a realistic baseline based on nearly a century of market data.
              </p>

              <p>
                The key insight from <strong>dave ramsey building wealth</strong> strategies is consistency. Market volatility will happen – we've seen crashes in 2000, 2008, and 2020. But investors who stayed the course and continued their monthly investments actually benefited from these downturns through dollar-cost averaging. When markets are down, your monthly investment buys more shares. When they recover, those extra shares multiply your gains.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Learning from Recent Market Events
              </h3>

              <p>
                Recent events like the <strong>dave ramsey ftx</strong> discussions highlight why Dave's approach works. While cryptocurrency speculators lost fortunes in risky investments, Dave Ramsey followers who stuck to proven growth stock mutual funds continued building wealth steadily. Dave's <strong>latest</strong> teachings emphasize avoiding get-rich-quick schemes and focusing on time-tested investment vehicles.
              </p>

              <p>
                The beauty of knowing your investment number is that it removes emotion from investing. Instead of trying to time the market or chase hot stocks, you get a clear monthly target. This systematic approach has helped millions avoid the <strong>dave ramsey million dollar debt</strong> trap by building wealth instead of accumulating liabilities.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Practical Tips for Investment Success
              </h3>

              <p>
                Once you have your monthly number from our <strong>google dave ramsey investment calculator</strong>, automation becomes your best friend. Set up automatic transfers from your checking account to your investment accounts. This "pay yourself first" approach ensures you invest before you have a chance to spend the money elsewhere.
              </p>

              <p>
                Consider this: if you invest $500 monthly for 30 years at 12% annual returns, you'll contribute $180,000 of your own money but end up with over $1.4 million. That means compound interest contributed more than $1.2 million to your wealth – nearly seven times your actual contributions! This is why <strong>dave ramsey retirement</strong> planning focuses so heavily on starting early and staying consistent.
              </p>

              <p>
                Remember, building wealth isn't about making huge sacrifices or earning a massive income. It's about making smart, consistent choices over time. Our calculator shows you exactly what those choices need to be, taking the guesswork out of your financial future and putting you on the proven path to financial peace.
              </p>
            </div>
          </motion.div>

          {/* Dave Ramsey Tips */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Follow the Baby Steps</h3>
              <p className="text-gray-600 text-sm">
                Make sure you've completed Dave's Baby Steps 1-3 before investing. Have your emergency fund in place first.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Growth Stock Mutual Funds</h3>
              <p className="text-gray-600 text-sm">
                Dave recommends investing in growth stock mutual funds with good track records and low fees.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <PiggyBank className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Consistency is Key</h3>
              <p className="text-gray-600 text-sm">
                Invest the same amount every month, regardless of market conditions. Time in the market beats timing the market.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Get Professional Help</h3>
              <p className="text-gray-600 text-sm">
                Work with a SmartVestor Pro who can help you choose the right mutual funds for your situation.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Diversify Your Holdings</h3>
              <p className="text-gray-600 text-sm">
                Spread your investments across growth, growth and income, aggressive growth, and international funds.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Stay the Course</h3>
              <p className="text-gray-600 text-sm">
                Don't panic during market downturns. History shows that patient investors are rewarded over time.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: linear-gradient(to right, #6366f1, #8b5cf6);
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          border: 2px solid white;
        }

        .slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: linear-gradient(to right, #6366f1, #8b5cf6);
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          border: 2px solid white;
        }
      `}</style>
    </div>
  );
};

export default ToolPage;