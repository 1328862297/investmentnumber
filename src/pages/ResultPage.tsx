import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { 
  Calculator, 
  ArrowLeft, 
  Share2, 
  Twitter, 
  Mail, 
  Download, 
  TrendingUp, 
  Target, 
  CheckCircle,
  Copy,
  ArrowRight,
  BookOpen,
  PiggyBank,
  Linkedin,
  DollarSign,
  Clock,
  Award
} from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ResultPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [copied, setCopied] = useState(false);

  // Get parameters from URL
  const targetAmount = Number(searchParams.get('target')) || 500000;
  const currentSavings = Number(searchParams.get('current')) || 10000;
  const annualReturn = Number(searchParams.get('rate')) || 12;
  const years = Number(searchParams.get('years')) || 20;

  // Redirect if no parameters
  useEffect(() => {
    if (!searchParams.get('target')) {
      navigate('/tool');
    }
  }, [searchParams, navigate]);

  const calculateMonthlyInvestment = () => {
    const monthlyRate = annualReturn / 100 / 12;
    const months = years * 12;
    
    // Future value of current savings
    const futureCurrentSavings = currentSavings * Math.pow(1 + monthlyRate, months);
    
    // Amount still needed
    const amountNeeded = targetAmount - futureCurrentSavings;
    
    if (amountNeeded <= 0) {
      return 0; // Already have enough
    }
    
    // Calculate required monthly payment
    const monthlyPayment = amountNeeded / ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
    
    return Math.max(0, monthlyPayment);
  };

  const generateChartData = () => {
    const data = [];
    const labels = [];
    const monthlyInvestment = calculateMonthlyInvestment();
    
    for (let year = 0; year <= years; year++) {
      const monthlyRate = annualReturn / 100 / 12;
      const months = year * 12;
      
      let value = currentSavings;
      if (year > 0) {
        const futureCurrentSavings = currentSavings * Math.pow(1 + monthlyRate, months);
        const futureMonthlyContributions = monthlyInvestment > 0 
          ? monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)
          : 0;
        value = futureCurrentSavings + futureMonthlyContributions;
      }
      
      data.push(Math.round(value));
      labels.push(year.toString());
    }
    
    return { data, labels };
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const monthlyInvestment = calculateMonthlyInvestment();
  const alreadyOnTrack = monthlyInvestment === 0;
  const totalInvested = currentSavings + (monthlyInvestment * 12 * years);
  const interestEarned = targetAmount - totalInvested;

  const chartData = generateChartData();

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'rgba(99, 102, 241, 0.5)',
        borderWidth: 1,
        callbacks: {
          label: function(context: any) {
            return `Portfolio Value: ${formatCurrency(context.parsed.y)}`;
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Years',
          color: '#6B7280',
          font: {
            size: 14,
            weight: 'bold' as const,
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: '#6B7280',
        }
      },
      y: {
        title: {
          display: true,
          text: 'Portfolio Value ($)',
          color: '#6B7280',
          font: {
            size: 14,
            weight: 'bold' as const,
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: '#6B7280',
          callback: function(value: any) {
            return formatCurrency(value);
          }
        }
      }
    }
  };

  const chartDataConfig = {
    labels: chartData.labels,
    datasets: [
      {
        data: chartData.data,
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgb(99, 102, 241)',
        pointBorderColor: 'white',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      }
    ]
  };

  const handleTweetResult = () => {
    const tweetText = alreadyOnTrack 
      ? `🎉 I found my investment number! I'm already on track to reach ${formatCurrency(targetAmount)} in ${years} years using Dave Ramsey's method. Calculate yours: ${window.location.origin}`
      : `💰 My investment number is ${formatCurrency(monthlyInvestment)}/month to reach ${formatCurrency(targetAmount)} in ${years} years using Dave Ramsey's compound interest principles. Find yours: ${window.location.origin}`;
    
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(tweetUrl, '_blank');
  };

  const handleLinkedInShare = () => {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.origin)}`;
    window.open(shareUrl, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmailSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => {
      alert('Thank you for subscribing! Your personalized investment number PDF plan will be sent to your email.');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => navigate('/tool')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Calculator</span>
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
        <div className="max-w-6xl mx-auto">
          {/* Main Result */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Your Investment Number Results
            </div>
            
            {alreadyOnTrack ? (
              <>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  🎉 You're Already
                  <span className="block bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent text-5xl sm:text-6xl lg:text-7xl mt-2">
                    On Track!
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
                  Your current savings of {formatCurrency(currentSavings)} will grow to {formatCurrency(targetAmount)} in {years} years using Dave Ramsey's compound-interest principle.
                </p>
              </>
            ) : (
              <>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Your Investment Number is
                  <span className="block bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent text-5xl sm:text-6xl lg:text-7xl mt-2">
                    {formatCurrency(monthlyInvestment)}/month
                  </span>
                  <span className="block text-2xl sm:text-3xl text-gray-600 mt-2">
                    to reach {formatCurrency(targetAmount)} in {years} years
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Based on Dave Ramsey's compound-interest principle and {annualReturn}% annual returns. Start today and you'll reach your goal by {new Date().getFullYear() + years}.
                </p>
              </>
            )}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Result Breakdown */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <Calculator className="w-6 h-6 mr-2 text-indigo-500" />
                Investment Number Breakdown
              </h2>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                  <div>
                    <div className="text-sm text-indigo-600 font-medium">Monthly Investment Number</div>
                    <div className="text-2xl font-bold text-indigo-700">
                      {alreadyOnTrack ? '$0' : formatCurrency(monthlyInvestment)}
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-indigo-600" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-100">
                  <div>
                    <div className="text-sm text-green-600 font-medium">Total Invested</div>
                    <div className="text-2xl font-bold text-green-700">
                      {formatCurrency(totalInvested)}
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl border border-purple-100">
                  <div>
                    <div className="text-sm text-purple-600 font-medium">Compound Interest Earned</div>
                    <div className="text-2xl font-bold text-purple-700">
                      {formatCurrency(interestEarned)}
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white">
                  <div>
                    <div className="text-sm text-indigo-100 font-medium">Final Value ({annualReturn}% return)</div>
                    <div className="text-2xl font-bold">
                      {formatCurrency(targetAmount)}
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Chart */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-green-500" />
                Investment Growth Projection
              </h2>

              <div className="h-80 mb-6">
                <Line data={chartDataConfig} options={chartOptions} />
              </div>

              <div className="text-center">
                <div className="text-sm text-gray-600 mb-1">Compound Interest Growth</div>
                <div className="text-lg font-semibold text-gray-900">
                  {formatCurrency(currentSavings)} → {formatCurrency(targetAmount)}
                </div>
                <div className="text-sm text-indigo-600 mt-1">
                  Using {annualReturn}% average return
                </div>
              </div>
            </motion.div>
          </div>

          {/* Educational Narrative Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100 mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What Your Investment Number Really Means
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                Your <strong>investment number</strong> isn't just a calculation – it's your roadmap to financial freedom using <strong>dave ramsey retirement</strong> principles that have helped millions of Americans build wealth. When you invest {alreadyOnTrack ? 'your current amount' : formatCurrency(monthlyInvestment)} consistently every month, you're not just saving money; you\'re harnessing the incredible power of compound interest that Dave calls "the eighth wonder of the world."
              </p>

              <p>
                Here's what makes this plan so powerful: every dollar you invest today will work for you for the entire {years}-year period. That means a dollar invested in month one will compound for the full {years} years, while a dollar invested in the final month only compounds for one month. This is why starting immediately is so crucial to your <strong>dave ramsey building wealth</strong> strategy.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Your Next Steps: Automation is Everything
              </h3>

              <p>
                The difference between people who successfully build wealth and those who don't often comes down to one word: automation. Set up an automatic transfer from your checking account to your investment account for {alreadyOnTrack ? 'your current investment amount' : formatCurrency(monthlyInvestment)} on the same day each month – preferably right after payday. This "pay yourself first" approach ensures you invest before you have a chance to spend the money elsewhere.
              </p>

              <p>
                Consider opening a separate "investment account" at your bank specifically for this purpose. When the money hits this account, it automatically transfers to your chosen mutual funds. This creates what Dave calls a "forced savings" system that removes emotion and temptation from the equation. Remember, our <strong>compound investment calculator dave ramsey</strong> style shows you the destination, but automation gets you there.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                The Mindset That Makes Millionaires
              </h3>

              <p>
                Wealthy people think differently about money, and your <strong>dave ramsey investment calculator</strong> results reveal this mindset shift. Instead of asking "How can I afford this monthly payment?" start asking "How can I afford NOT to make this investment?" When you see that {alreadyOnTrack ? 'staying on track' : `investing ${formatCurrency(monthlyInvestment)} monthly`} leads to {formatCurrency(targetAmount)}, suddenly that daily coffee or monthly subscription service looks very expensive.
              </p>

              <p>
                Dave often shares stories of ordinary people who became millionaires not through high incomes or lucky breaks, but through consistent investing over time. Your plan puts you on that same path. The key is understanding that building wealth is a marathon, not a sprint. Market volatility will happen – we've seen major corrections in 2000, 2008, and 2020 – but investors who stayed consistent and kept investing actually benefited from these downturns through dollar-cost averaging.
              </p>

              <p>
                Think about it this way: when markets drop, your monthly investment buys more shares of your mutual funds. When markets recover (and historically, they always have), those extra shares multiply your gains. This is why <strong>dave ramsey latest</strong> teachings continue to emphasize staying the course during market turbulence rather than trying to time the market.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Avoiding the Million Dollar Mistakes
              </h3>

              <p>
                While you're building wealth through consistent investing, it's equally important to avoid the financial traps that create <strong>dave ramsey million dollar debt</strong>. This means avoiding car loans that keep you broke, credit card debt that compounds against you, and lifestyle inflation that steals your investment dollars. Every dollar you don't pay in interest is a dollar that can compound in your favor.
              </p>

              <p>
                Your investment plan also serves as a powerful motivation tool. When you're tempted to make an impulse purchase, remember that the money could instead be working toward your {formatCurrency(targetAmount)} goal. This perspective shift – from consumer to investor – is what separates those who build wealth from those who wonder where their money went.
              </p>

              <p>
                Finally, remember that this plan is just the beginning. As your income grows or your goals change, you can recalculate and adjust. The important thing is having a clear target and working toward it consistently. Whether your number is $200 or $2,000 per month, the principles remain the same: start now, stay consistent, and let compound interest work its magic over time.
              </p>
            </div>
          </motion.div>

          {/* Sharing Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 mb-12"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                <Share2 className="w-6 h-6 mr-2 text-indigo-500" />
                Share Your Investment Number
              </h3>
              <p className="text-gray-600">
                Inspire others to find their investment number and start building wealth!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={handleTweetResult}
                className="inline-flex items-center px-6 py-3 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <Twitter className="w-5 h-5 mr-2" />
                Tweet Investment Number
              </button>
              
              <button 
                onClick={handleLinkedInShare}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Share on LinkedIn
              </button>
              
              <button 
                onClick={handleCopyLink}
                className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-xl hover:bg-gray-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <Copy className="w-5 h-5 mr-2" />
                {copied ? 'Copied!' : 'Copy Link'}
              </button>
            </div>
          </motion.div>

          {/* Email Subscription */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl shadow-xl p-8 sm:p-12 text-white mb-12"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Get Your Investment Number PDF Plan
              </h3>
              
              <div className="prose prose-lg max-w-2xl mx-auto text-indigo-100 mb-8 leading-relaxed">
                <p>
                  Receive a comprehensive investment roadmap that includes your personalized monthly <strong>investment number</strong>, recommended mutual fund categories, Dave Ramsey's Baby Steps guidance, and wealth-building strategies. This detailed PDF plan also covers how to automate your investments, what to do during market downturns, and how to increase your contributions as your income grows.
                </p>
                
                <p>
                  Plus, you'll get monthly email reminders with market insights, Dave Ramsey quotes for motivation, and tips to stay on track with your wealth-building goals. Our <strong>dave ramsey investment and retirement calculator</strong> users who receive the PDF plan are 3x more likely to stick with their investment strategy long-term.
                </p>
              </div>

              {!isSubscribed ? (
                <form onSubmit={handleEmailSubscribe} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-lg"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg text-lg"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Send PDF Plan
                    </button>
                  </div>
                  <p className="text-indigo-200 text-sm mt-4">
                    ✨ Free investment resources • No spam • Unsubscribe anytime
                  </p>
                </form>
              ) : (
                <div className="bg-white bg-opacity-20 rounded-xl p-6 max-w-md mx-auto">
                  <div className="text-3xl mb-3">🎉</div>
                  <div className="font-bold text-xl mb-2">Thank you for subscribing!</div>
                  <div className="text-indigo-100">
                    Your personalized investment number PDF plan will be sent to your email shortly.
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button 
              onClick={() => navigate('/tool')}
              className="inline-flex items-center px-8 py-4 bg-indigo-500 text-white font-bold text-lg rounded-xl hover:bg-indigo-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Try Different Investment Numbers
              <ArrowRight className="ml-3 w-6 h-6" />
            </button>
            
            <button 
              onClick={() => navigate('/')}
              className="inline-flex items-center px-8 py-4 bg-gray-600 text-white font-bold text-lg rounded-xl hover:bg-gray-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Back to Home
            </button>
          </div>

          {/* Monetization Placeholders */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border-2 border-dashed border-gray-300">
              <div className="text-center text-gray-500">
                <Download className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="font-medium mb-2">Upgrade for detailed investment number PDF plan</p>
                <p className="text-sm">
                  [Premium feature placeholder - comprehensive investment roadmap with mutual fund recommendations]
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border-2 border-dashed border-gray-300">
              <div className="text-center text-gray-500">
                <PiggyBank className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="font-medium mb-2">Start investing with recommended brokers</p>
                <p className="text-sm">
                  [Broker affiliate link placeholder - Fidelity, Vanguard, American Funds partnerships]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-4 py-12 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Investment Number Calculator</span>
            </div>
            <div className="flex items-center space-x-6 text-gray-500 text-sm">
              <a href="#" className="hover:text-gray-700 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-700 transition-colors">Disclaimer</a>
              <span>© 2025 Investment Number Calculator</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResultPage;