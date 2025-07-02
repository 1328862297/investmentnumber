import React, { useState } from 'react';
import { ArrowLeft, Share2, Twitter, Mail, Download, TrendingUp, Target, Calculator } from 'lucide-react';
import { CalculationResult } from '../App';

interface ResultPageProps {
  result: CalculationResult;
  onBackToCalculator: () => void;
  onBackToLanding: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ result, onBackToCalculator, onBackToLanding }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleTweetResult = () => {
    const tweetText = `I just calculated my future wealth! 💰 In ${result.years} years, I'll have ${formatCurrency(result.futureValue)} by investing ${formatCurrency(result.monthlyContribution)}/month. Calculate yours: ${window.location.origin}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(tweetUrl, '_blank');
  };

  const handleEmailSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription
    setIsSubscribed(true);
    setTimeout(() => {
      alert('Thank you for subscribing! Your personalized PDF plan will be sent to your email.');
    }, 500);
  };

  const calculateToReachMillion = () => {
    const targetAmount = 1000000;
    if (result.futureValue >= targetAmount) return null;
    
    const monthlyRate = result.annualReturn / 100 / 12;
    const months = result.years * 12;
    
    // Calculate required monthly contribution to reach $1M
    const futureInitial = result.initialInvestment * Math.pow(1 + monthlyRate, months);
    const remainingNeeded = targetAmount - futureInitial;
    const requiredMonthly = remainingNeeded / ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
    
    return Math.max(0, requiredMonthly - result.monthlyContribution);
  };

  const additionalNeeded = calculateToReachMillion();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      {/* Header */}
      <header className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBackToCalculator}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Calculator</span>
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">WealthCalc</span>
          </div>
        </div>
      </header>

      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Result */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              Your Wealth Calculation
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              You will have
              <span className="block bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent text-5xl sm:text-6xl lg:text-7xl mt-2">
                {formatCurrency(result.futureValue)}
              </span>
              <span className="block text-2xl sm:text-3xl text-gray-600 mt-2">
                in {result.years} years!
              </span>
            </h1>
          </div>

          {/* Result Breakdown */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-sm text-gray-600 mb-2">Total Invested</div>
                <div className="text-2xl font-bold text-gray-900">
                  {formatCurrency(result.totalInvested)}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-sm text-gray-600 mb-2">Interest Earned</div>
                <div className="text-2xl font-bold text-green-600">
                  {formatCurrency(result.interestEarned)}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-sm text-gray-600 mb-2">Return Rate</div>
                <div className="text-2xl font-bold text-purple-600">
                  {result.annualReturn}% annually
                </div>
              </div>
            </div>
          </div>

          {/* Millionaire Suggestion */}
          {additionalNeeded && additionalNeeded > 0 && (
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200 mb-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  💡 Want to reach $1 Million?
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Increase your monthly contribution by just <span className="font-bold text-orange-600">{formatCurrency(additionalNeeded)}</span> to reach the millionaire milestone!
                </p>
                <button 
                  onClick={onBackToCalculator}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Recalculate for $1M Goal
                </button>
              </div>
            </div>
          )}

          {/* Sharing Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                <Share2 className="w-6 h-6 mr-2 text-sky-500" />
                Share Your Results
              </h3>
              <p className="text-gray-600">
                Inspire others to start their wealth-building journey!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={handleTweetResult}
                className="inline-flex items-center px-6 py-3 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <Twitter className="w-5 h-5 mr-2" />
                Tweet This Result
              </button>
              
              <button 
                onClick={() => navigator.share?.({
                  title: 'My Wealth Calculation',
                  text: `I'll have ${formatCurrency(result.futureValue)} in ${result.years} years!`,
                  url: window.location.origin
                })}
                className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-xl hover:bg-gray-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Share Result
              </button>
            </div>
          </div>

          {/* Email Subscription */}
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl shadow-xl p-8 text-white">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">
                Get Your Personalized PDF Plan
              </h3>
              <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
                Receive a detailed investment plan with actionable steps, recommended brokers, and tips to maximize your returns.
              </p>

              {!isSubscribed ? (
                <form onSubmit={handleEmailSubscribe} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Get PDF Plan
                    </button>
                  </div>
                  <p className="text-purple-200 text-sm mt-4">
                    ✨ Free forever • No spam • Unsubscribe anytime
                  </p>
                </form>
              ) : (
                <div className="bg-white bg-opacity-20 rounded-xl p-6 max-w-md mx-auto">
                  <div className="text-2xl mb-2">🎉</div>
                  <div className="font-semibold mb-2">Thank you for subscribing!</div>
                  <div className="text-purple-100 text-sm">
                    Your personalized PDF plan will be sent to your email shortly.
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-12">
            <button 
              onClick={onBackToCalculator}
              className="inline-flex items-center px-6 py-3 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Try Different Scenarios
            </button>
            
            <button 
              onClick={onBackToLanding}
              className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-xl hover:bg-gray-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Back to Home
            </button>
          </div>

          {/* Affiliate Placeholder */}
          <div className="mt-16 p-6 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300">
            <div className="text-center text-gray-500">
              <p className="font-medium mb-2">Ready to start investing?</p>
              <p className="text-sm">
                [Affiliate link placeholder for U.S. stock brokers - Fidelity, Charles Schwab, etc.]
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;