# CLAUDE.md

This file provides guidance for Claude Code (claude.ai/code) when working in this codebase.

## Development Commands

- **Development Server**: `npm run dev` (starts Vite development server)
- **Build**: `npm run build` (builds production version)
- **Lint**: `npm run lint` (runs ESLint on all files)
- **Preview**: `npm run preview` (previews production build)

## Project Architecture

This is a React + TypeScript investment calculator web application that helps users calculate monthly investment amounts using Dave Ramsey's compound interest principles.

### Tech Stack
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with PostCSS
- **Routing**: React Router DOM
- **Charts**: Chart.js with react-chartjs-2
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **SEO**: React Helmet Async

### Application Structure

**Core Pages/Routes:**
- `/` - Landing page with marketing content and main sections
- `/tool` - Investment calculator tool page with sliders for user input
- `/result` - Results page showing calculated monthly investment amount and projections

**Educational Content Pages:**
- `/guide/compound-interest-calculator` - Compound Interest Guide
- `/guide/investment-basics` - Investment Basics for Beginners
- `/guide/retirement-planning` - Retirement Planning Guide
- `/guide/emergency-fund` - Emergency Fund Guide

**Dave Ramsey Content Pages:**
- `/dave-ramsey/baby-steps` - Dave's 7 Baby Steps to Financial Peace
- `/dave-ramsey/12-percent-rule` - The 12% Rule Explained

**Component Organization:**
- `src/pages/` - Main page components (LandingPage, ToolPage, ResultPage)
- `src/pages/guide/` - Educational guide pages
- `src/pages/dave-ramsey/` - Dave Ramsey specific content pages
- `src/components/` - Reusable components (CalculatorPage, LandingPage, ResultPage, SEO)
- `src/config/` - Configuration files (seoConfig.ts)
- `src/App.tsx` - Main application component with routing
- `src/main.tsx` - Application entry point

### Core Functionality

**Investment Calculator:**
- Reverse engineers financial goals to determine required monthly investment
- Uses compound interest formulas with customizable parameters:
  - Target amount ($10K - $2M)
  - Current savings ($0 - $500K)
  - Annual return rate (6% - 15%, default 12% based on Dave Ramsey recommendations)
  - Time horizon (1 - 50 years)

**Data Flow:**
1. User inputs parameters on ToolPage through interactive sliders
2. Parameters are passed to ResultPage via URL search parameters
3. ResultPage calculates monthly investment using compound interest formulas
4. Interactive Chart.js visualization shows wealth growth over time

**Calculation Logic:**
- Monthly payment calculation: `PMT = FV - PV(1+r)^n / [((1+r)^n - 1) / r]`
- Future value of current savings: `FV = PV(1+r)^n`
- Year-by-year chart generation showing portfolio growth

### Content Strategy

The application is heavily optimized for SEO with Dave Ramsey-related keywords and educational content about investment principles, compound interest, and wealth building. Content emphasizes practical financial advice targeted at users searching for investment calculators and retirement planning tools.

### Design Patterns

- Gradient backgrounds (indigo/purple theme)
- Rounded corners (xl, 2xl, 3xl variants)
- Shadow effects for depth
- Hover animations and transforms
- Responsive design with mobile-first approach
- Custom slider styling in JSX style blocks
- Consistent component structure with motion animations

### SEO Configuration

The application uses a centralized SEO configuration system:
- Dynamic meta tags for each page
- Structured data for better search indexing
- Optimized titles and descriptions for investment-related keywords
- React Helmet Async for proper meta tag management

## Project Update Log

### 2025-07-13 - Complete English Translation and Project Update (Claude Code)

**Major Changes Completed:**

1. **Complete English Translation**
   - ✅ All navigation systems fully translated to English
   - ✅ All guide pages completely translated with natural, high-quality content
   - ✅ All Dave Ramsey content pages translated
   - ✅ SEO meta tags and descriptions updated for English market
   - ✅ Removed all AI-generated mechanical language patterns

2. **Content Quality Improvements**
   - Rewrote all educational content with natural, conversational tone
   - Added real-world examples and practical case studies
   - Integrated Dave Ramsey's financial principles throughout
   - Optimized content for investment calculator and retirement planning keywords
   - Removed keyword stuffing while maintaining SEO optimization

3. **Technical Architecture Updates**
   - Added centralized SEO configuration system (`src/config/seoConfig.ts`)
   - Implemented React Helmet Async for dynamic meta tag management
   - All pages now have proper SEO optimization
   - Clean component structure with consistent design patterns
   - Responsive design optimized for all devices

**Translation Status - 100% Complete:**
- ✅ Navigation system and UI elements
- ✅ Landing page content and marketing copy
- ✅ Compound Interest Guide (`/guide/compound-interest-calculator`)
- ✅ Investment Basics Guide (`/guide/investment-basics`)
- ✅ Retirement Planning Guide (`/guide/retirement-planning`)
- ✅ Emergency Fund Guide (`/guide/emergency-fund`)
- ✅ Dave Ramsey's 7 Baby Steps (`/dave-ramsey/baby-steps`)
- ✅ The 12% Rule Explained (`/dave-ramsey/12-percent-rule`)

**Current Technical Status:**
- ✅ Build Status: Successful (no errors)
- ✅ ESLint: All checks passing
- ✅ Bundle Size: 630KB (JS) + 33KB (CSS)
- ✅ All Routes: Functional and tested
- ✅ SEO: Fully optimized for English market
- ✅ Responsive Design: Mobile and desktop optimized

**Content Features:**
- Comprehensive investment education content
- Dave Ramsey methodology integration
- Real-world calculation examples
- Interactive user flow from education to calculation
- Cross-linked content for better user engagement
- Professional financial advice presentation

**Ready for Production:**
The application is now fully translated, technically sound, and ready for deployment to English-speaking markets. All educational content provides genuine value while supporting the core investment calculator functionality.