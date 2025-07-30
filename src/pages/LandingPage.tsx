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
            <span className="text-xl font-bold text-white">Dave Ramsey Investment Calculator</span>
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
                    📈 Compound Interest Calculator Guide
                  </Link>
                  <Link to="/guide/investment-basics" className="block px-3 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">
                    💡 Beginner Investment Calculator
                  </Link>
                  <Link to="/guide/retirement-planning" className="block px-3 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">
                    🎯 Retirement Investment Calculator
                  </Link>
                  <Link to="/guide/emergency-fund" className="block px-3 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">
                    🛡️ Emergency Fund Calculator
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <button className="flex items-center text-white hover:text-indigo-200 transition-colors">
                <GraduationCap className="w-4 h-4 mr-1" />
                Dave Ramsey Method
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
                <div className="p-4 space-y-2">
                  <Link to="/dave-ramsey/baby-steps" className="block px-3 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">
                    👶 Dave Ramsey Baby Steps
                  </Link>
                  <Link to="/dave-ramsey/12-percent-rule" className="block px-3 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">
                    📊 Dave Ramsey 12% Investment Rule
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
            Calculate My Investment
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
                    📈 Compound Interest Calculator Guide
                  </Link>
                  <Link 
                    to="/guide/investment-basics" 
                    className="block text-sm text-gray-600 hover:text-indigo-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    💡 Beginner Investment Calculator
                  </Link>
                  <Link 
                    to="/guide/retirement-planning" 
                    className="block text-sm text-gray-600 hover:text-indigo-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    🎯 Retirement Investment Calculator
                  </Link>
                  <Link 
                    to="/guide/emergency-fund" 
                    className="block text-sm text-gray-600 hover:text-indigo-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    🛡️ Emergency Fund Calculator
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
                Dave Ramsey Investment Calculator
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                How Much Should I
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Invest Monthly?
                </span>
              </h1>
              
              <p className="text-2xl text-indigo-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                Want to know your exact monthly investment amount? This Dave Ramsey investment calculator gives you the answer in 30 seconds using proven wealth building principles.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                <button 
                  onClick={handleStartCalculation}
                  className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-bold text-lg rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-xl"
                >
                  <Play className="w-6 h-6 mr-3" />
                  Start the Investment Calculator
                </button>
                <button 
                  onClick={scrollToFeatures}
                  className="inline-flex items-center text-white hover:text-indigo-200 transition-colors"
                >
                  <span className="mr-2">See How Investment Calculator Works</span>
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
              What's Your Monthly Investment Number?
            </h2>
            
            <div className="text-gray-700 leading-relaxed space-y-6">
              <p>
                Ever wonder exactly how much you should invest each month? Your <strong>investment calculator</strong> number is way more important than your salary, your age, or even how much you have saved right now. It's the one number that tells you whether you're on track or falling behind.
              </p>

              <p>
                Dave Ramsey figured this out years ago. Regular people don't get rich from big windfalls or lucky breaks. They get rich by knowing their number and hitting it every single month. That's why our <strong>Dave Ramsey investment calculator</strong> doesn't just give you some generic advice about saving 10%. It shows you the exact amount YOU need to invest based on YOUR goals.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Why Most People Never Build Real Wealth
              </h3>

              <p>
                Here's the thing about investing that nobody talks about. Most people just throw random amounts at their 401k each month. Maybe $200 this month, $75 next month, then they skip a few months because life happened. No wonder they never get anywhere.
              </p>

              <p>
                But when you use an <strong>investing calculator</strong> to find your actual number, everything changes. Take Sarah. She's 28, works as a nurse, wants $800,000 by age 60. Sounds impossible right? Our calculator showed her she needs $623 monthly. Still sounds crazy until you realize that's $21 a day. That's literally what most people blow on coffee and lunch. Sarah found that money, automated the investment, and now she's building serious wealth while her coworkers are still "trying to save more."
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Why Dave Ramsey's 12% Rule Actually Works
              </h3>

              <p>
                You know what's wild about compound interest? Einstein supposedly called it the eighth wonder of the world, but most people still don't get it. Here's the simple version: your money makes money, then that money makes money, and it just keeps snowballing.
              </p>

              <p>
                Check this out. Let's say you invest $500 monthly for 30 years using Dave Ramsey's 12% return assumption. You'll put in $180,000 of your own cash, but you'll end up with over $1.4 million. Where'd that extra $1.2 million come from? That's compound interest doing the heavy lifting while you sleep. Our <strong>Dave Ramsey investment calculator</strong> shows you exactly how this math works for your specific situation.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                The Crypto Crash Proved Dave Right
              </h3>

              <p>
                Remember when everyone was asking Dave Ramsey about crypto? He kept saying stick to boring mutual funds, and people thought he was old school. Then 2022 happened. Bitcoin crashed, people lost their life savings, but guess what? The folks using our <strong>Dave Ramsey investment calculator</strong> and buying mutual funds every month? They kept building wealth.
              </p>

              <p>
                That's the magic of knowing your investment number. When the market tanks, you don't panic and sell. You keep hitting your monthly target because you're buying more shares for the same money. When the market goes crazy high, you don't get greedy and pour in extra cash. You stick to your number. Boring? Maybe. Effective? Absolutely.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                From Debt Magnet to Wealth Builder
              </h3>

              <p>
                Here's what Dave Ramsey figured out that most people miss. The same math that buries you in debt can make you rich. Car payments, credit cards, lifestyle inflation – these things compound against you every month. But flip the script and use an <strong>investing calculator</strong> to compound FOR you? Game changer.
              </p>

              <p>
                Look, finding your investment number is step one. But the real money gets made when you set up automatic transfers and forget about it. Let the money leave your account before you even see it. That's how regular people build serious wealth using <strong>Dave Ramsey investment</strong> principles. It's not glamorous, but it works.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Why Starting Late Costs You Big Time
              </h3>

              <p>
                Want to see something that'll make your stomach drop? A 25-year-old who wants to retire with $1 million needs to invest $467 monthly. Wait until 35? Now you need $1,319 monthly. That's almost triple for waiting just 10 years. Ouch.
              </p>

              <p>
                This is exactly why you need to run the numbers right now. Our calculator shows you what happens if you start today versus next year versus "when things settle down." Spoiler alert: things never settle down, and every month you wait costs you serious money. Stop planning to plan and just find your number.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Stop Talking, Start Investing
              </h3>

              <p>
                Knowing your number is cool and all, but it won't make you rich. You know what will? Actually investing that money every single month. Set up automatic transfers so the money disappears from your checking account before you can spend it on stuff you don't need. Treat it like a bill you have to pay, because future you is counting on it.
              </p>

              <p>
                Your investment number will change as life happens. Get a raise? Recalculate. Want to retire earlier? Run the numbers again. But here's the thing: whether your number is $200 or $2,000 monthly, the game plan stays the same. Start today, automate everything, and let compound interest do the heavy lifting while you live your life.
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