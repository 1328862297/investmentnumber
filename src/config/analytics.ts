// Google Analytics 4 Configuration
// For development: Use a demo ID to show GA is integrated
// For production: Replace with your actual GA4 Measurement ID
export const GA_MEASUREMENT_ID = 'G-DEMO123456';

// Google Analytics Events
export interface GAEvent {
  event_name: string;
  event_category?: string;
  event_label?: string;
  value?: number;
  custom_parameters?: Record<string, unknown>;
}

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    // Load gtag script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Make gtag available globally
    window.gtag = gtag;
  }
};

// Track page views
export const trackPageView = (page_title: string, page_location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title,
      page_location,
    });
  }
};

// Track custom events
export const trackEvent = (event: GAEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event.event_name, {
      event_category: event.event_category,
      event_label: event.event_label,
      value: event.value,
      ...event.custom_parameters,
    });
  }
};

// Predefined events for the investment calculator
export const trackCalculatorUse = (params: {
  target_amount: number;
  time_years: number;
  return_rate: number;
  current_savings: number;
}) => {
  trackEvent({
    event_name: 'calculator_use',
    event_category: 'investment_calculator',
    event_label: 'calculation_completed',
    value: params.target_amount,
    custom_parameters: {
      target_amount: params.target_amount,
      time_years: params.time_years,
      return_rate: params.return_rate,
      current_savings: params.current_savings,
    },
  });
};

export const trackResultView = (monthly_investment: number) => {
  trackEvent({
    event_name: 'result_view',
    event_category: 'investment_calculator',
    event_label: 'result_page_viewed',
    value: monthly_investment,
    custom_parameters: {
      monthly_investment,
    },
  });
};

export const trackGuideRead = (guide_name: string) => {
  trackEvent({
    event_name: 'guide_read',
    event_category: 'educational_content',
    event_label: guide_name,
    custom_parameters: {
      guide_name,
    },
  });
};