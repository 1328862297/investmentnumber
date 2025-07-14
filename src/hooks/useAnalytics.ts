import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../config/analytics';

// Hook to track page views automatically
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view when location changes
    const page_title = document.title;
    const page_location = window.location.href;
    
    trackPageView(page_title, page_location);
  }, [location]);
};

// Hook for manual event tracking with common patterns
export const useAnalytics = () => {
  return {
    trackPageView,
    trackCalculatorUse: (params: {
      target_amount: number;
      time_years: number;
      return_rate: number;
      current_savings: number;
    }) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'calculator_use', {
          event_category: 'investment_calculator',
          event_label: 'calculation_completed',
          value: params.target_amount,
          target_amount: params.target_amount,
          time_years: params.time_years,
          return_rate: params.return_rate,
          current_savings: params.current_savings,
        });
      }
    },
    trackResultView: (monthly_investment: number) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'result_view', {
          event_category: 'investment_calculator',
          event_label: 'result_page_viewed',
          value: monthly_investment,
          monthly_investment,
        });
      }
    },
    trackGuideRead: (guide_name: string) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'guide_read', {
          event_category: 'educational_content',
          event_label: guide_name,
          guide_name,
        });
      }
    },
  };
};