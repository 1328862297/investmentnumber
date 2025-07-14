import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Calculator, 
  GraduationCap, 
  Share2, 
  ArrowRight, 
  Play,
  CheckCircle,
  Star,
  ChevronDown,
  DollarSign,
  BookOpen,
  Menu,
  X
} from 'lucide-react';
import SEO from '../components/SEO';
import { seoConfig } from '../config/seoConfig';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStartCalculation = () => {
    navigate('/tool');
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Investment Number Calculator",
    "description": "Calculate your investment number using Dave Ramsey's proven wealth-building principles",
    "url": "https://investmentnumber.net",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "author": {
      "@type": "Organization",
      "name": "Investment Number Calculator"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700">
      <SEO data={seoConfig.home} structuredData={homeStructuredData} />
      {/* Header */}
      <header className="px-4 py-6 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Investment Number Calculator</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center text-white hover:text-indigo-200 transition-colors">
                <BookOpen className="w-4 h-4 mr-1" />
                Learning Guides
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
                <div className="p-4 space-y-2">
                  <Link to="/guide/compound-interest-calculator" className="block px-3 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">
                    📈 Compound Interest Guide
                  </Link>
                  <Link to="/guide/investment-basics" className="block px-3 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">
                    💡 Investment Basics
                  </Link>
                  <Link to="/guide/retirement-planning" className="block px-3 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">
                    🎯 Retirement Planning
                  </Link>
                  <Link to="/guide/emergency-fund" className="block px-3 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">
                    🛡️ Emergency Fund Guide
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <button className="flex items-center text-white hover:text-indigo-200 transition-colors">
                <GraduationCap className="w-4 h-4 mr-1" />
                Dave Ramsey
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
                <div className="p-4 space-y-2">
                  <Link to="/dave-ramsey/baby-steps" className="block px-3 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">
                    👶 Dave's 7 Baby Steps
                  </Link>
                  <Link to="/dave-ramsey/12-percent-rule" className="block px-3 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">
                    📊 The 12% Rule Explained
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <button 
            onClick={handleStartCalculation}
            className="hidden lg:inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Find My Number
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-indigo-200 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl rounded-b-2xl z-30"
          >
            <div className="p-6 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">📚 Learning Guides</h3>
                <div className="space-y-2 ml-4">
                  <Link 
                    to="/guide/compound-interest-calculator" 
                    className="block text-sm text-gray-600 hover:text-indigo-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    📈 Compound Interest Guide
                  </Link>
                  <Link 
                    to="/guide/investment-basics" 
                    className="block text-sm text-gray-600 hover:text-indigo-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    💡 Investment Basics
                  </Link>
                  <Link 
                    to="/guide/retirement-planning" 
                    className="block text-sm text-gray-600 hover:text-indigo-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    🎯 Retirement Planning
                  </Link>
                  <Link 
                    to="/guide/emergency-fund" 
                    className="block text-sm text-gray-600 hover:text-indigo-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    🛡️ Emergency Fund Guide
                  </Link>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">👨‍🏫 Dave Ramsey</h3>
                <div className="space-y-2 ml-4">
                  <Link 
                    to="/dave-ramsey/baby-steps" 
                    className="block text-sm text-gray-600 hover:text-indigo-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    👶 Dave's 7 Baby Steps
                  </Link>
                  <Link 
                    to="/dave-ramsey/12-percent-rule" 
                    className="block text-sm text-gray-600 hover:text-indigo-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    📊 The 12% Rule Explained
                  </Link>
                </div>
              </div>

              <button 
                onClick={() => {
                  handleStartCalculation();
                  setMobileMenuOpen(false);
                }}
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 shadow-lg"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calculate My Number
              </button>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 text-white rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
                <DollarSign className="w-4 h-4 mr-2" />
                Investment Number Calculator
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Find Your
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Investment Number
                </span>
              </h1>
              
              <p className="text-2xl text-indigo-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                Calculate exactly how much to invest each month using Dave Ramsey's proven compound interest principles.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                <button 
                  onClick={handleStartCalculation}
                  className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-bold text-lg rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-xl"
                >
                  <Play className="w-6 h-6 mr-3" />
                  Calculate My Investment Number
                </button>
                <button 
                  onClick={scrollToFeatures}
                  className="inline-flex items-center text-white hover:text-indigo-200 transition-colors"
                >
                  <span className="mr-2">Learn More</span>
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>

              {/* Hero Visual */}
              <div className="relative max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-100">
                        <div className="text-sm text-indigo-600 mb-1 font-medium">Retirement Goal</div>
                        <div className="text-2xl font-bold text-gray-900">$1,000,000</div>
                      </div>
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-100">
                        <div className="text-sm text-indigo-600 mb-1 font-medium">Time Period</div>
                        <div className="text-2xl font-bold text-gray-900">25 years</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-2">Your investment number is</div>
                      <div className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                        $467/month
                      </div>
                      <div className="text-sm text-green-600 font-medium mt-2 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Dave Ramsey approved method
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-300 bg-opacity-20 rounded-full blur-xl"></div>
      </section>

      {/* Long-form SEO Content Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Discover Your Personal Investment Number
            </h2>
            
            <div className="text-gray-700 leading-relaxed space-y-6">
              <p>
                Your <strong>investment number</strong> is the most important figure in your financial life – it's the exact monthly amount you need to invest to reach any money goal. Unlike vague advice to "save more," our <strong>investment number calculator</strong> gives you a precise target based on your specific situation and timeline.
              </p>

              <p>
                Dave Ramsey has taught millions of Americans that wealth building isn't about luck or high income – it's about knowing your numbers and sticking to a plan. When you use our <strong>dave ramsey investment calculator</strong>, you're applying the same compound interest math that has helped ordinary people become millionaires through consistent monthly investing.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Why Your Investment Number Changes Everything
              </h3>

              <p>
                Most people fail at building wealth because they don't have a clear target. They might save $200 one month, $50 the next, then skip a few months entirely. But when you know your investment number – whether it's $300, $500, or $1,200 per month – you have a concrete goal that removes all guesswork from your financial future.
              </p>

              <p>
                Consider Sarah, a 28-year-old nurse who wanted to retire with $800,000 by age 60. Using our <strong>dave ramsey investment and retirement calculator</strong>, she discovered her investment number was $623 per month. That seemed impossible at first, but breaking it down helped: $623 is about $21 per day, or roughly what many people spend on lunch and coffee. By making small lifestyle adjustments, Sarah found her number and is now on track for financial independence.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                The Science Behind Compound Interest Growth
              </h3>

              <p>
                Our <strong>dave ramsey college investment calculator</strong> uses the same mathematical principles that Einstein reportedly called "the eighth wonder of the world." Compound interest means your money earns returns, and then those returns earn returns, creating exponential growth over time. This is why starting early makes such a dramatic difference in your final results.
              </p>

              <p>
                Here's a real example: if you invest $500 monthly for 30 years at 12% annual returns (Dave's recommended rate based on historical S&P 500 performance), you'll contribute $180,000 of your own money but end up with over $1.4 million. That extra $1.2 million comes entirely from compound interest – money your money earned while you slept, worked, and lived your life.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Learning from Dave Ramsey's Market Wisdom
              </h3>

              <p>
                <strong>Dave ramsey's latest</strong> teachings emphasize staying focused on proven strategies rather than chasing market trends. Recent events like the <strong>dave ramsey ftx</strong> discussions highlight why his approach works – while cryptocurrency speculators lost fortunes, people following Dave's mutual fund strategy continued building wealth steadily through market volatility.
              </p>

              <p>
                The beauty of having your investment number is that it keeps you disciplined during both market highs and lows. When markets crash, you keep investing your monthly amount, buying more shares at lower prices. When markets soar, you resist the temptation to reduce contributions because "you're already ahead." This systematic approach has proven successful through decades of market cycles.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Breaking Free from Million Dollar Debt Cycles
              </h3>

              <p>
                Dave Ramsey often discusses how Americans accumulate <strong>dave ramsey million dollar debt</strong> through poor financial decisions – car loans, credit cards, and lifestyle inflation. Our calculator helps you flip this script by showing how the same mathematical principles that create debt can create wealth when applied correctly.
              </p>

              <p>
                When you search for a <strong>google dave ramsey investment calculator</strong>, you're taking the first step toward financial freedom. But finding your investment number is just the beginning. The real magic happens when you automate that monthly investment and let compound interest work for decades. This is the foundation of <strong>dave ramsey building wealth</strong> strategies that have helped millions achieve financial peace.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Your Investment Number for Retirement Success
              </h3>

              <p>
                <strong>Dave ramsey retirement</strong> planning centers on one key insight: the earlier you start, the less you need to invest monthly. A 25-year-old who wants $1 million by age 65 needs to invest about $467 monthly. But a 35-year-old with the same goal needs $1,319 monthly – nearly three times as much for waiting just ten years.
              </p>

              <p>
                Our <strong>compound investment calculator dave ramsey</strong> style tool shows you these trade-offs clearly. You can adjust your target amount, timeline, or expected returns to see how each change affects your monthly investment number. This flexibility helps you find a plan that fits your current situation while keeping you on track for your long-term goals.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Taking Action on Your Investment Number
              </h3>

              <p>
                Knowing your investment number is powerful, but acting on it is what creates wealth. Start by setting up automatic transfers from your checking account to your investment accounts. This "pay yourself first" approach ensures you invest before you have a chance to spend the money elsewhere. Many people find it helpful to schedule transfers right after payday, treating their investment number like any other essential bill.
              </p>

              <p>
                Remember, your investment number isn't set in stone. As your income grows or your goals change, you can recalculate and adjust. The important thing is having a clear target and working toward it consistently. Whether your number is $200 or $2,000 per month, the principles remain the same: start now, stay consistent, and let compound interest work its magic over time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Find Your Investment Number in Minutes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our calculator uses Dave Ramsey's proven principles to give you a clear monthly target for any financial goal.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-3xl bg-white shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reverse-Engineer Your Goal</h3>
              <p className="text-gray-600 leading-relaxed">
                Start with your target amount and timeline. Get the exact monthly investment number you need to reach any financial goal.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-3xl bg-white shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">College, Retirement, Any Goal</h3>
              <p className="text-gray-600 leading-relaxed">
                Whether saving for college, retirement, or debt freedom, find your investment number using Dave's proven principles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-3xl bg-white shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Share & Track Your Plan</h3>
              <p className="text-gray-600 leading-relaxed">
                Save your investment number, share with family, and get personalized PDF reports to stay on track.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Find Your Investment Number</h2>
            <p className="text-xl text-gray-600">Three simple steps to your personalized monthly investment amount</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
              <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Enter Your Financial Goal</h3>
              <p className="text-gray-600 text-sm">Tell us your target amount and when you want to reach it.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
              <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
              <h3 className="font-semibold text-gray-900 mb-2">Get Your Investment Number</h3>
              <p className="text-gray-600 text-sm">See exactly how much to invest each month to reach your goal.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
              <h3 className="font-semibold text-gray-900 mb-2">Start Building Wealth</h3>
              <p className="text-gray-600 text-sm">Automate your monthly investment and watch compound interest work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl font-bold text-gray-900 mb-6 leading-relaxed">
                "Finding my investment number changed everything. Instead of randomly saving whatever was left over, I had a clear monthly target. Three years later, I'm ahead of schedule and on track to hit my first $100,000 by age 30. Having that specific number kept me focused and motivated."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">MJ</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Michael Johnson</div>
                  <div className="text-gray-600">Software Engineer, Austin</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Investment Number Calculator FAQ</h2>
            <p className="text-xl text-gray-600">Common questions about finding your monthly investment amount</p>
          </motion.div>

          <div className="space-y-4">
            <details className="bg-gray-50 rounded-xl p-6 cursor-pointer hover:bg-gray-100 transition-colors">
              <summary className="font-semibold text-gray-900 text-lg">How does the investment number calculator work?</summary>
              <p className="text-gray-600 mt-3">Our calculator uses compound interest formulas to reverse-engineer the exact monthly investment needed to reach your financial goals, following Dave Ramsey's proven wealth-building principles from Financial Peace University.</p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 cursor-pointer hover:bg-gray-100 transition-colors">
              <summary className="font-semibold text-gray-900 text-lg">What is my investment number?</summary>
              <p className="text-gray-600 mt-3">Your investment number is the specific monthly amount you need to invest to reach your financial goal. It's calculated based on your target amount, timeline, current savings, and expected return rate using Dave Ramsey's compound interest principles.</p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 cursor-pointer hover:bg-gray-100 transition-colors">
              <summary className="font-semibold text-gray-900 text-lg">Can I use this for Dave Ramsey retirement planning?</summary>
              <p className="text-gray-600 mt-3">Absolutely! This investment number calculator helps you determine exactly how much to invest monthly for retirement using compound interest principles that align with Dave's Baby Step 4 guidance.</p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 cursor-pointer hover:bg-gray-100 transition-colors">
              <summary className="font-semibold text-gray-900 text-lg">Does this follow Dave Ramsey's latest investment advice?</summary>
              <p className="text-gray-600 mt-3">Yes, our calculator incorporates Dave's core investment principles including compound interest, consistent monthly investing, and long-term wealth building strategies that align with his current teachings.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Find Your Investment Number Today
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands who have discovered their monthly investment amount using Dave Ramsey's proven principles.
            </p>
            <button 
              onClick={handleStartCalculation}
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-bold text-lg rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              Calculate My Investment Number
              <ArrowRight className="ml-3 w-6 h-6" />
            </button>
            <div className="mt-6 text-indigo-200 text-sm">
              ✨ Free forever • No credit card required • Dave Ramsey approved method
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky CTA Bar */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ 
          y: showStickyBar ? 0 : 100, 
          opacity: showStickyBar ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t border-gray-200 px-4 py-4 z-50"
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Calculator className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Ready to find your investment number?</div>
              <div className="text-sm text-gray-600">Calculate your monthly investment amount</div>
            </div>
          </div>
          <button 
            onClick={handleStartCalculation}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Calculate Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="px-4 py-12 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Investment Number Calculator</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 Investment Number Calculator. Built for your financial peace.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;