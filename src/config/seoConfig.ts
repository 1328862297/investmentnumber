export interface SEOData {
  title: string;
  description: string;
  robots?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
  structuredData?: object;
}

export const seoConfig: Record<string, SEOData> = {
  home: {
    title: "Dave Ramsey Investment Calculator | Monthly Amount",
    description: "Want to know exactly how much to invest each month? This Dave Ramsey investment calculator shows your number in seconds. Just enter your goal and timeline.",
    robots: "index, follow",
    ogTitle: "Dave Ramsey Investment Calculator | Monthly Investment Planner",
    ogDescription: "Calculate your monthly investment amount using Dave Ramsey's proven wealth building method.",
    canonical: "https://investmentnumber.net"
  },
  tool: {
    title: "Investing Calculator | Find Your Monthly Investment Amount",
    description: "Set your financial goal and this investing calculator shows exactly how much to save monthly. Dave Ramsey approved method with simple sliders.",
    robots: "index, follow, max-snippet:160",
    canonical: "https://investmentnumber.net/tool"
  },
  result: {
    title: "Your Monthly Investment Plan | Calculator Results",
    description: "Here's your personalized monthly investment plan. See how your money grows using Dave Ramsey's compound interest principles.",
    robots: "noindex, nofollow",
    canonical: "https://investmentnumber.net/result"
  },
  compoundInterest: {
    title: "Compound Interest Calculator Guide | How It Really Works",
    description: "Understanding compound interest made simple. Real examples show how your money grows using our investment calculator.",
    robots: "index, follow, max-image-preview:large",
    canonical: "https://investmentnumber.net/guide/compound-interest-calculator"
  },
  investmentBasics: {
    title: "Investment Calculator for Beginners | Start Here",
    description: "Never invested before? Learn the basics then use our beginner investment calculator to find your monthly amount.",
    robots: "index, follow, max-image-preview:large",
    canonical: "https://investmentnumber.net/guide/investment-basics"
  },
  retirementPlanning: {
    title: "Retirement Investment Calculator | How Much Do I Need?",
    description: "Planning for retirement made simple. Use our retirement investment calculator to find out how much you need monthly.",
    robots: "index, follow, max-image-preview:large",
    canonical: "https://investmentnumber.net/guide/retirement-planning"
  },
  emergencyFund: {
    title: "Emergency Fund Calculator | How Much Should I Save?",
    description: "Build your financial safety net the right way. Calculate how much you need then use our investment calculator for wealth building.",
    robots: "index, follow, max-image-preview:large",
    canonical: "https://investmentnumber.net/guide/emergency-fund"
  },
  babySteps: {
    title: "Dave Ramsey Baby Steps | 7 Step Investment Plan",
    description: "Dave Ramsey's 7 baby steps have helped millions build wealth. See how his investment approach works with our calculator.",
    robots: "index, follow, max-image-preview:large",
    canonical: "https://investmentnumber.net/dave-ramsey/baby-steps"
  },
  twelvePercentRule: {
    title: "Dave Ramsey 12% Rule | Calculator Explained",
    description: "Why does Dave Ramsey use 12% returns? Here's the real data behind his investment calculator assumptions and what it means for you.",
    robots: "index, follow, max-image-preview:large",
    canonical: "https://investmentnumber.net/dave-ramsey/12-percent-rule"
  }
};