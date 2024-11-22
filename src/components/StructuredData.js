import React from 'react';
import { Helmet } from 'react-helmet-async';

function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "CuraDent",
    "image": "https://curadent.com/og-image.jpg",
    "description": "Modern dental care clinic offering comprehensive dental services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "#301, First floor, 2nd Main Road, East of NGEF Layout",
      "addressLocality": "Kasturi Nagar",
      "addressRegion": "Bengaluru",
      "addressCountry": "India"
    },
    "openingHours": [
      "Mo-Sa 10:00-20:00"
    ],
    "telephone": [
      "(+91) 9108161850",
      "(+91) 9900379125"
    ],
    "email": [
      "hello@curadent.in",
      "hellocuradent@gmail.com",
      "kritilaxmijha@gmail.com"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}

export default StructuredData; 