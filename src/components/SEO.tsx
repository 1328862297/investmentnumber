import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEOData } from '../config/seoConfig';
import { GA_MEASUREMENT_ID } from '../config/analytics';

interface SEOProps {
  data: SEOData;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({ data, structuredData }) => {
  const {
    title,
    description,
    robots = "index, follow",
    ogTitle = title,
    ogDescription = description,
    ogImage = '/og-investment-calculator.jpg',
    canonical
  } = data;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      {canonical && <meta property="og:url" content={canonical} />}
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={ogTitle} />
      <meta property="twitter:description" content={ogDescription} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="robots" content={robots} />
      <meta name="author" content="Investment Number Calculator" />
      
      {/* Google Analytics 4 */}
      {GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX' && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </script>
        </>
      )}
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;