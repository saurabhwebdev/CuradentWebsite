import React from 'react';

export const CuradentLogo = ({ className = "w-8 h-8" }) => (
  <svg 
    className={className} 
    viewBox="0 0 100 100" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#6366f1' }} />
        <stop offset="100%" style={{ stopColor: '#818cf8' }} />
      </linearGradient>
      <filter id="shadow">
        <feDropShadow dx="0" dy="1" stdDeviation="2" floodOpacity="0.3"/>
      </filter>
    </defs>
    
    {/* Background Circle with subtle shadow */}
    <circle 
      cx="50" 
      cy="50" 
      r="45" 
      fill="url(#brandGradient)"
      filter="url(#shadow)"
    />
    
    {/* Inner Circle for depth */}
    <circle 
      cx="50" 
      cy="50" 
      r="40" 
      fill="url(#brandGradient)"
      opacity="0.7"
    />
    
    {/* Text with better positioning and style */}
    <text
      x="50"
      y="63"
      fontSize="38"
      fontWeight="700"
      fontFamily="Arial, sans-serif"
      fill="white"
      textAnchor="middle"
      filter="url(#shadow)"
      letterSpacing="-1"
    >
      CD
    </text>
    
    {/* Subtle highlight */}
    <circle 
      cx="35" 
      cy="35" 
      r="15" 
      fill="white"
      opacity="0.1"
    />
  </svg>
);

export default CuradentLogo; 