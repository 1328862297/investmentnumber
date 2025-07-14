import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { usePageTracking } from './hooks/useAnalytics';
import LandingPage from './pages/LandingPage';
import ToolPage from './pages/ToolPage';
import ResultPage from './pages/ResultPage';

// Guide pages - Only import created pages
import CompoundInterestGuide from './pages/guide/CompoundInterestGuide';
import InvestmentBasics from './pages/guide/InvestmentBasics';
import RetirementPlanning from './pages/guide/RetirementPlanning';
import EmergencyFund from './pages/guide/EmergencyFund';

// Dave Ramsey pages - Only import created pages
import BabySteps from './pages/dave-ramsey/BabySteps';
import TwelvePercentRule from './pages/dave-ramsey/TwelvePercentRule';

// TODO: Create these pages later
// import DebtSnowball from './pages/dave-ramsey/DebtSnowball';
// import RetirementCalculator from './pages/calculators/RetirementCalculator';
// import DebtPayoffCalculator from './pages/calculators/DebtPayoffCalculator';
// import EmergencyFundCalculator from './pages/calculators/EmergencyFundCalculator';
// import InvestmentWorksheet from './pages/resources/InvestmentWorksheet';
// import BudgetTemplate from './pages/resources/BudgetTemplate';
// import FAQ from './pages/FAQ';
// import HowToInvest from './pages/HowToInvest';

// Component to handle analytics tracking inside Router
function AppContent() {
  usePageTracking();
  
  return (
    <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/tool" element={<ToolPage />} />
          <Route path="/result" element={<ResultPage />} />
          
          {/* Guide pages - Only created pages */}
          <Route path="/guide/compound-interest-calculator" element={<CompoundInterestGuide />} />
          <Route path="/guide/investment-basics" element={<InvestmentBasics />} />
          <Route path="/guide/retirement-planning" element={<RetirementPlanning />} />
          <Route path="/guide/emergency-fund" element={<EmergencyFund />} />
          
          {/* Dave Ramsey pages - Only created pages */}
          <Route path="/dave-ramsey/baby-steps" element={<BabySteps />} />
          <Route path="/dave-ramsey/12-percent-rule" element={<TwelvePercentRule />} />
          
          {/* TODO: Add these routes when pages are created
          <Route path="/dave-ramsey/debt-snowball" element={<DebtSnowball />} />
          <Route path="/calculators/retirement-calculator" element={<RetirementCalculator />} />
          <Route path="/calculators/debt-payoff-calculator" element={<DebtPayoffCalculator />} />
          <Route path="/calculators/emergency-fund-calculator" element={<EmergencyFundCalculator />} />
          <Route path="/resources/investment-worksheet" element={<InvestmentWorksheet />} />
          <Route path="/resources/budget-template" element={<BudgetTemplate />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/how-to-invest" element={<HowToInvest />} />
          */}
    </Routes>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;