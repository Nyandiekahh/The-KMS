import React from 'react';

const FinanceAnimation = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" className="w-full h-full">
      <defs>
        <linearGradient id="networkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:'#3B82F6', stopOpacity:0.8}}/>
          <stop offset="100%" style={{stopColor:'#2B3674', stopOpacity:0.6}}/>
        </linearGradient>
        
        <filter id="softGlow">
          <feGaussianBlur result="coloredBlur" stdDeviation="4"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Background Pattern - Lighter and more subtle */}
      <g stroke="#3B82F6" strokeWidth="0.5" opacity="0.05">
        <path d="M0,25 L25,0 L75,0 L100,25 L100,75 L75,100 L25,100 L0,75 Z">
          <animate 
            attributeName="opacity"
            values="0.05;0.1;0.05"
            dur="3s"
            repeatCount="indefinite"/>
        </path>
      </g>

      {/* Main Wave - More visible against light background */}
      <path 
        d="M-100,300 Q100,250 300,300 T700,250"
        fill="none"
        stroke="#3B82F6"
        strokeWidth="3"
        filter="url(#softGlow)">
        <animate
          attributeName="d"
          values="
            M-100,300 Q100,250 300,300 T700,250;
            M-100,250 Q100,300 300,250 T700,300;
            M-100,300 Q100,250 300,300 T700,250"
          dur="10s"
          repeatCount="indefinite"/>
      </path>

      {/* Floating Circles - Adjusted colors */}
      <g>
        <g transform="translate(200,200)">
          <circle r="30" fill="#3B82F6" opacity="0.2">
            <animate
              attributeName="r"
              values="30;35;30"
              dur="2s"
              repeatCount="indefinite"/>
          </circle>
          <text x="-20" y="7" fill="#2B3674" fontSize="16" fontFamily="Arial">25%</text>
        </g>

        <g transform="translate(400,300)">
          <circle r="40" fill="#3B82F6" opacity="0.2">
            <animate
              attributeName="r"
              values="40;45;40"
              dur="3s"
              repeatCount="indefinite"/>
          </circle>
          <text x="-20" y="7" fill="#2B3674" fontSize="16" fontFamily="Arial">KMS</text>
        </g>

        <g transform="translate(600,250)">
          <circle r="35" fill="#3B82F6" opacity="0.2">
            <animate
              attributeName="r"
              values="35;40;35"
              dur="2.5s"
              repeatCount="indefinite"/>
          </circle>
          <text x="-20" y="7" fill="#2B3674" fontSize="16" fontFamily="Arial">50%</text>
        </g>
      </g>

      {/* Connection Lines - More visible */}
      <g stroke="#3B82F6" strokeWidth="2" opacity="0.3">
        <line x1="200" y1="200" x2="400" y2="300">
          <animate
            attributeName="opacity"
            values="0.3;0.5;0.3"
            dur="2s"
            repeatCount="indefinite"/>
        </line>
        <line x1="400" y1="300" x2="600" y2="250">
          <animate
            attributeName="opacity"
            values="0.3;0.5;0.3"
            dur="2s"
            begin="1s"
            repeatCount="indefinite"/>
        </line>
      </g>

      {/* Currency Symbols - Darker for visibility */}
      <g fontFamily="Arial" fontWeight="bold" fill="#2B3674">
        <text x="300" y="200" fontSize="24">
          <animate
            attributeName="y"
            values="200;190;200"
            dur="3s"
            repeatCount="indefinite"/>
          $
        </text>
        <text x="500" y="400" fontSize="24">
          <animate
            attributeName="y"
            values="400;390;400"
            dur="2.5s"
            repeatCount="indefinite"/>
          $
        </text>
      </g>

      {/* Pulse Rings - More visible */}
      <g transform="translate(400,300)">
        <circle r="50" fill="none" stroke="#3B82F6" strokeWidth="2">
          <animate
            attributeName="r"
            values="50;70;50"
            dur="3s"
            repeatCount="indefinite"/>
          <animate
            attributeName="opacity"
            values="0.4;0;0.4"
            dur="3s"
            repeatCount="indefinite"/>
        </circle>
        <circle r="50" fill="none" stroke="#3B82F6" strokeWidth="2">
          <animate
            attributeName="r"
            values="50;90;50"
            dur="3s"
            begin="1s"
            repeatCount="indefinite"/>
          <animate
            attributeName="opacity"
            values="0.4;0;0.4"
            dur="3s"
            begin="1s"
            repeatCount="indefinite"/>
        </circle>
      </g>

      {/* Data Streams - Lighter and more subtle */}
      <g stroke="#3B82F6" strokeWidth="1" opacity="0.2">
        <path d="M0,100 Q200,150 400,100 T800,150">
          <animate
            attributeName="d"
            values="
              M0,100 Q200,150 400,100 T800,150;
              M0,150 Q200,100 400,150 T800,100;
              M0,100 Q200,150 400,100 T800,150"
            dur="15s"
            repeatCount="indefinite"/>
        </path>
      </g>
    </svg>
  );
};

export default FinanceAnimation;