import React, { useState } from 'react';
import { ArrowLeft, DollarSign, TrendingUp, Calculator, BarChart3 } from 'lucide-react';
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
import { CalculationResult } from '../App';

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

interface CalculatorPageProps {
  onCalculationComplete: (result: CalculationResult) => void;
  onBackToLanding: () => void;
}

const CalculatorPage: React.FC<CalculatorPageProps> = ({ onCalculationComplete, onBackToLanding }) => {
  const [initialInvestment, setInitialInvestment] = useState(1000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [annualReturn, setAnnualReturn] = useState(8);
  const [years, setYears] = useState(25);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateFutureValue = () => {
    const monthlyRate = annualReturn / 100 / 12;
    const months = years * 12;
    
    // Future value of initial investment
    const futureInitial = initialInvestment * Math.pow(1 + monthlyRate, months);
    
    // Future value of monthly contributions
    const futureMonthly = monthlyContribution * 
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
    
    return futureInitial + futureMonthly;
  };

  const generateChartData = () => {
    const data = [];
    const labels = [];
    
    for (let year = 0; year <= years; year++) {
      const monthlyRate = annualReturn / 100 / 12;
      const months = year * 12;
      
      let value = initialInvestment;
      if (year > 0) {
        const futureInitial = initialInvestment * Math.pow(1 + monthlyRate, months);
        const futureMonthly = monthlyContribution * 
          ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
        value = futureInitial + futureMonthly;
      }
      
      data.push(Math.round(value));
      labels.push(year.toString());
    }
    
    return { data, labels };
  };

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
        borderColor: 'rgba(59, 130, 246, 0.5)',
        borderWidth: 1,
        callbacks: {
          label: function(context: {parsed: {y: number}}) {
            return `Wealth: $${context.parsed.y.toLocaleString()}`;
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
          callback: function(value: number) {
            return '$' + value.toLocaleString();
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
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgb(59, 130, 246)',
        pointBorderColor: 'white',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      }
    ]
  };

  const handleCalculate = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const futureValue = calculateFutureValue();
      const totalInvested = initialInvestment + (monthlyContribution * 12 * years);
      const interestEarned = futureValue - totalInvested;
      
      const result: CalculationResult = {
        futureValue,
        totalInvested,
        interestEarned,
        initialInvestment,
        monthlyContribution,
        annualReturn,
        years
      };
      
      onCalculationComplete(result);
      setIsCalculating(false);
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
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      {/* Header */}
      <header className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBackToLanding}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
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
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-sky-100 text-sky-800 rounded-full text-sm font-medium mb-6">
              <Calculator className="w-4 h-4 mr-2" />
              Interactive Calculator
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Calculate Your Future Wealth
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Adjust the sliders below to see how your investments will grow over time with compound interest.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Inputs */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                  <DollarSign className="w-6 h-6 mr-2 text-sky-500" />
                  Investment Parameters
                </h2>
                <p className="text-gray-600">Customize your investment scenario</p>
              </div>

              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
                    Initial Investment: {formatCurrency(initialInvestment)}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="50000"
                    step="100"
                    value={initialInvestment}
                    onChange={(e) => setInitialInvestment(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>$0</span>
                    <span>$50,000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
                    Monthly Contribution: {formatCurrency(monthlyContribution)}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    step="25"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>$0</span>
                    <span>$2,000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
                    Annual Return Rate: {annualReturn}%
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    step="0.5"
                    value={annualReturn}
                    onChange={(e) => setAnnualReturn(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>1%</span>
                    <span>15%</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">S&P 500 historical average: ~10%</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
                    Investment Period: {years} years
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
                </div>

                <button
                  onClick={handleCalculate}
                  disabled={isCalculating}
                  className="w-full py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-lg rounded-xl hover:from-sky-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isCalculating ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Calculating...
                    </div>
                  ) : (
                    <>Calculate My Wealth</>
                  )}
                </button>
              </div>
            </div>

            {/* Chart Area */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                  <BarChart3 className="w-6 h-6 mr-2 text-green-500" />
                  Growth Projection
                </h2>
                <p className="text-gray-600">Watch your wealth grow over time</p>
              </div>

              <div className="h-80 mb-8">
                <Line data={chartDataConfig} options={chartOptions} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-sky-50 rounded-xl p-4 border border-sky-100">
                  <div className="text-sm text-sky-600 font-medium mb-1">Final Value</div>
                  <div className="text-2xl font-bold text-sky-700">
                    {formatCurrency(calculateFutureValue())}
                  </div>
                </div>
                <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                  <div className="text-sm text-green-600 font-medium mb-1">Interest Earned</div>
                  <div className="text-2xl font-bold text-green-700">
                    {formatCurrency(calculateFutureValue() - (initialInvestment + monthlyContribution * 12 * years))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: linear-gradient(to right, #0ea5e9, #2563eb);
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          border: 2px solid white;
        }

        .slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: linear-gradient(to right, #0ea5e9, #2563eb);
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          border: 2px solid white;
        }
      `}</style>
    </div>
  );
};

export default CalculatorPage;