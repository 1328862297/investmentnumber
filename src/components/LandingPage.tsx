import React from 'react';
import { Calculator, Target, FileText, TrendingUp, Star, ArrowRight, Play } from 'lucide-react';

interface LandingPageProps {
  onStartCalculation: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStartCalculation }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      {/* Header */}
      <header className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">WealthCalc</span>
          </div>
          <button 
            onClick={onStartCalculation}
            className="hidden sm:inline-flex items-center px-6 py-3 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Try Free Calculator
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-sky-100 text-sky-800 rounded-full text-sm font-medium mb-8 shadow-sm">
              <Calculator className="w-4 h-4 mr-2" />
              Free Financial Calculator
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              How Rich Will
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent"> You Be?</span>
            </h1>
            
            <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Find out in seconds. Calculate your future wealth with our compound interest calculator.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <button 
                onClick={onStartCalculation}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-lg rounded-xl hover:from-sky-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-xl"
              >
                <Play className="w-6 h-6 mr-3" />
                Try It Now - Free
              </button>
              <div className="flex items-center text-gray-600">
                <span className="text-sm">✨ No signup required</span>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-1">Monthly Investment</div>
                      <div className="text-2xl font-bold text-gray-900">$500</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-1">Time Period</div>
                      <div className="text-2xl font-bold text-gray-900">25 years</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-2">Your Future Wealth</div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                      $857,234
                    </div>
                    <div className="text-sm text-green-600 font-medium mt-2">
                      +$707,234 in compound interest
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Plan Your Future
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our powerful calculator helps you visualize your financial future and make informed investment decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-100">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Interactive Calculator</h3>
              <p className="text-gray-600 leading-relaxed">
                Real-time calculations with beautiful charts. See your money grow as you adjust your investment strategy.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Plan for Retirement or College</h3>
              <p className="text-gray-600 leading-relaxed">
                Set specific financial goals and see exactly how much you need to invest to reach them.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Download PDF Plan</h3>
              <p className="text-gray-600 leading-relaxed">
                Get a personalized investment plan you can save, print, and share with your financial advisor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-3xl font-bold text-gray-900 mb-6 leading-relaxed">
              "I hit $1M at 40 thanks to this tool. It showed me exactly how much I needed to invest each month."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">JS</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Jessica Smith</div>
                <div className="text-gray-600">Software Engineer, San Francisco</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-sky-600 mb-2">50K+</div>
              <div className="text-gray-600">Calculations Made</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sky-600 mb-2">$2.1B</div>
              <div className="text-gray-600">Future Wealth Calculated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sky-600 mb-2">4.9★</div>
              <div className="text-gray-600">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your Free Calculation
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Join thousands of smart investors who use our calculator to plan their financial future.
          </p>
          <button 
            onClick={onStartCalculation}
            className="inline-flex items-center px-8 py-4 bg-white text-sky-600 font-bold text-lg rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-xl"
          >
            Calculate My Wealth
            <ArrowRight className="ml-3 w-6 h-6" />
          </button>
          <div className="mt-4 text-sky-100 text-sm">
            ✨ Free forever • No credit card required • Results in seconds
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">WealthCalc</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 WealthCalc. Built for your financial future.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;