import React from 'react';

const Logo = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 400 120"
      className={className}
      style={{ width: '150px', height: 'auto' }} // Adjust size as needed
    >
      {/* Background Financial Graph */}
      <path 
        d="M0 100 Q50 80 100 85 T200 70 T300 60 T400 40" 
        fill="none" 
        stroke="#E8EFF6" 
        strokeWidth="4"
      />
      
      {/* Main Logo Container */}
      <g transform="translate(20, 10)">
        {/* Financial Building/Bank Columns */}
        <path 
          d="M10 30 L50 10 L90 30 L90 80 L10 80 Z" 
          fill="#3B82F6" 
          opacity="0.9"
        />
        <rect x="20" y="40" width="10" height="40" fill="#2B3674"/>
        <rect x="40" y="40" width="10" height="40" fill="#2B3674"/>
        <rect x="60" y="40" width="10" height="40" fill="#2B3674"/>
        
        {/* KMS Text */}
        <text 
          x="110" 
          y="55" 
          fontFamily="Arial, sans-serif" 
          fontSize="36" 
          fontWeight="700" 
          fill="#2B3674"
        >
          KMS
        </text>
        
        {/* SACCO Text */}
        <text 
          x="110" 
          y="75" 
          fontFamily="Arial, sans-serif" 
          fontSize="24" 
          fontWeight="600" 
          fill="#3B82F6"
        >
          SACCO
        </text>
      </g>
      
      {/* Growth Arrow Icon */}
      <g transform="translate(280, 30)">
        <circle 
          cx="20" 
          cy="20" 
          r="25" 
          fill="none" 
          stroke="#3B82F6" 
          strokeWidth="3"
        />
        <path 
          d="M20 35 L20 5 M20 5 L10 15 M20 5 L30 15" 
          stroke="#3B82F6" 
          strokeWidth="3" 
          fill="none"
        />
        <path 
          d="M10 25 L20 35 L30 25" 
          stroke="#3B82F6" 
          strokeWidth="3" 
          fill="none"
        />
      </g>
      
      {/* Currency Symbols */}
      <g transform="translate(340, 30)" fill="#2B3674" opacity="0.7">
        <text x="0" y="20" fontSize="14">$</text>
        <text x="15" y="30" fontSize="14">€</text>
        <text x="30" y="20" fontSize="14">£</text>
      </g>
      
      {/* Subtle Grid Lines */}
      <g stroke="#E8EFF6" strokeWidth="1" opacity="0.3">
        <line x1="0" y1="100" x2="400" y2="100"/>
        <line x1="0" y1="80" x2="400" y2="80"/>
        <line x1="0" y1="60" x2="400" y2="60"/>
      </g>
    </svg>
  );
};

export default Logo;