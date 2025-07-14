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
    title: "How Much Should I Invest Monthly? | Investment Calculator",
    description: "Figure out your monthly investment amount in minutes. Based on Dave Ramsey's approach - just enter your goal and timeline.",
    robots: "index, follow",
    ogTitle: "How Much Should I Invest Each Month?",
    ogDescription: "Figure out your monthly investment amount in minutes. Based on Dave Ramsey's approach.",
    canonical: "https://investmentnumber.net"
  },
  tool: {
    title: "Investment Calculator | Figure Out Your Monthly Number",
    description: "Set your financial goal and see exactly how much to invest monthly. Simple sliders make it easy to plan your future.",
    robots: "index, follow, max-snippet:160",
    canonical: "https://investmentnumber.net/tool"
  },
  result: {
    title: "Your Monthly Investment Plan | Personal Results",
    description: "Here's your personalized plan. See how your monthly investments grow over time and adjust if needed.",
    robots: "noindex, nofollow",
    canonical: "https://investmentnumber.net/result"
  },
  compoundInterest: {
    title: "How Compound Interest Really Works | Complete Guide",
    description: "Understanding compound interest made simple. Real examples show how your money grows over time.",
    robots: "index, follow, max-image-preview:large",
    canonical: "https://investmentnumber.net/guide/compound-interest-calculator"
  },
  investmentBasics: {
    title: "Investing for Beginners | Start Here if You're New",
    description: "Never invested before? This guide covers everything you need to know to get started safely.",
    robots: "index, follow, max-image-preview:large",
    canonical: "https://investmentnumber.net/guide/investment-basics"
  },
  retirementPlanning: {
    title: "Retirement Planning Made Simple | How Much Do I Need?",
    description: "Planning for retirement doesn't have to be overwhelming. Find out how much you need and how to get there.",
    robots: "index, follow, max-image-preview:large",
    canonical: "https://investmentnumber.net/guide/retirement-planning"
  },
  emergencyFund: {
    title: "Emergency Fund Guide | How Much Should I Save?",
    description: "Build your financial safety net the right way. Learn how much to save and where to keep it.",
    robots: "index, follow, max-image-preview:large",
    canonical: "https://investmentnumber.net/guide/emergency-fund"
  },
  babySteps: {
    title: "Dave Ramsey's 7 Baby Steps | Complete Financial Plan",
    description: "The step-by-step plan that's helped millions get out of debt and build wealth. See how it works.",
    robots: "index, follow, max-image-preview:large",
    canonical: "https://investmentnumber.net/dave-ramsey/baby-steps"
  },
  twelvePercentRule: {
    title: "Why Dave Ramsey Uses 12% Returns | The Real Story",
    description: "Is 12% realistic? Here's the data behind Dave's famous return assumption and what it means for you.",
    robots: "index, follow, max-image-preview:large",
    canonical: "https://investmentnumber.net/dave-ramsey/12-percent-rule"
  }
};