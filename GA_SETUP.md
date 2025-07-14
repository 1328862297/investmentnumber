# Google Analytics 4 Setup Guide

## 🚀 Quick Setup

### Step 1: Create GA4 Property
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property for your website
3. Copy your **Measurement ID** (format: G-XXXXXXXXXX)

### Step 2: Update Configuration
1. Open `src/config/analytics.ts`
2. Replace `'G-XXXXXXXXXX'` with your actual Measurement ID:

```typescript
export const GA_MEASUREMENT_ID = 'G-YOUR-MEASUREMENT-ID';
```

### Step 3: Test Integration
1. Run `npm run dev` to start development server
2. Open browser developer tools (F12)
3. Go to Network tab and filter by "google"
4. Navigate through your site - you should see GA requests
5. Check GA4 Real-time reports to confirm data collection

## 📊 Event Tracking

The following events are automatically tracked:

### Page Views
- Automatically tracked on route changes
- Includes page title and URL

### Calculator Events
- **calculator_use**: When user completes calculation
- **result_view**: When user views results page
- **guide_read**: When user reads educational content

### Custom Event Usage

```typescript
import { useAnalytics } from '../hooks/useAnalytics';

const { trackCalculatorUse, trackResultView, trackGuideRead } = useAnalytics();

// Track calculator usage
trackCalculatorUse({
  target_amount: 1000000,
  time_years: 30,
  return_rate: 12,
  current_savings: 10000
});

// Track result viewing
trackResultView(2500); // monthly investment amount

// Track guide reading
trackGuideRead('compound-interest-guide');
```

## 🔧 Configuration Options

### Environment Variables (Optional)
Create `.env.local` file:
```
VITE_GA_MEASUREMENT_ID=G-YOUR-MEASUREMENT-ID
```

Then update `analytics.ts`:
```typescript
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
```

### Development vs Production
- Development: GA tracking disabled when ID is 'G-XXXXXXXXXX'
- Production: Replace with real measurement ID

## 📈 Key Metrics to Monitor

### Goals to Set Up in GA4
1. **Calculator Completion**: calculator_use event
2. **Result Engagement**: result_view event  
3. **Educational Engagement**: guide_read event
4. **Page Engagement**: session duration, bounce rate

### Custom Dimensions
Consider adding these custom dimensions in GA4:
- Investment Target Amount
- Time Horizon
- Expected Return Rate
- User Journey Stage

## 🚨 Privacy Compliance

### GDPR/CCPA Considerations
- Consider adding cookie consent banner
- Implement analytics opt-out functionality
- Review data retention settings in GA4

### Implementation Example
```typescript
// Optional: Check for user consent before tracking
const trackEvent = (event) => {
  if (hasUserConsent()) {
    // Track event
  }
};
```

## 🛠️ Troubleshooting

### Common Issues
1. **No data in GA4**: Check measurement ID is correct
2. **Events not firing**: Check browser console for errors
3. **Duplicate events**: Ensure GA is only initialized once

### Debug Mode
Enable debug mode in development:
```typescript
gtag('config', GA_MEASUREMENT_ID, {
  debug_mode: true
});
```

## ✅ Verification Checklist

- [ ] GA4 property created
- [ ] Measurement ID updated in code
- [ ] Real-time data showing in GA4
- [ ] Custom events firing correctly
- [ ] Page view tracking working
- [ ] No console errors
- [ ] Privacy compliance addressed

---

**Need Help?** Check the [GA4 documentation](https://developers.google.com/analytics/devguides/collection/ga4) or Google Analytics Help Center.