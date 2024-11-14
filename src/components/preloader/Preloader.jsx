import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedLogoPreloader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          onLoadingComplete?.();
          return 100;
        }
        return prev + 0.5; // Slower progress increment
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="relative w-[400px] h-[120px]">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 120"
            className="w-[400px] h-[120px]"
            initial="hidden"
            animate="visible"
          >
            {/* Animated Background Financial Graph */}
            <motion.path
              d="M0 100 Q50 80 100 85 T200 70 T300 60 T400 40"
              fill="none"
              stroke="#E8EFF6"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: 1,
                transition: { duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }
              }}
            />
            
            {/* Main Logo Container */}
            <g transform="translate(20, 10)">
              {/* Animated Building */}
              <motion.path
                d="M10 30 L50 10 L90 30 L90 80 L10 80 Z"
                fill="#3B82F6"
                opacity="0.9"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: [0, 0.9, 0.7, 0.9],
                  transition: { 
                    duration: 2,
                    opacity: { repeat: Infinity, duration: 3 }
                  }
                }}
              />
              
              {/* Animated Columns */}
              {[20, 40, 60].map((x, i) => (
                <motion.rect
                  key={i}
                  x={x}
                  y="40"
                  width="10"
                  height="40"
                  fill="#2B3674"
                  initial={{ scaleY: 0 }}
                  animate={{ 
                    scaleY: 1,
                    transition: { delay: 1.5 + (i * 0.3), duration: 0.8 }
                  }}
                />
              ))}
              
              {/* Animated Text */}
              <motion.text
                x="110"
                y="55"
                fontFamily="Arial, sans-serif"
                fontSize="36"
                fontWeight="700"
                fill="#2B3674"
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: 2.5, duration: 0.8 }
                }}
              >
                KMS
              </motion.text>
              
              <motion.text
                x="110"
                y="75"
                fontFamily="Arial, sans-serif"
                fontSize="24"
                fontWeight="600"
                fill="#3B82F6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: 3, duration: 0.8 }
                }}
              >
                SACCO
              </motion.text>
            </g>
            
            {/* Animated Growth Arrow */}
            <g transform="translate(280, 30)">
              <motion.circle
                cx="20"
                cy="20"
                r="25"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3"
                initial={{ scale: 0 }}
                animate={{ 
                  scale: 1,
                  transition: { delay: 3.2, duration: 0.8 }
                }}
              />
              <motion.path
                d="M20 35 L20 5 M20 5 L10 15 M20 5 L30 15"
                stroke="#3B82F6"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ 
                  pathLength: 1,
                  transition: { delay: 3.5, duration: 0.8 }
                }}
              />
              <motion.path
                d="M10 25 L20 35 L30 25"
                stroke="#3B82F6"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ 
                  pathLength: 1,
                  transition: { delay: 3.8, duration: 0.8 }
                }}
              />
            </g>
            
            {/* Animated Currency Symbols */}
            {['$', '€', '£'].map((symbol, i) => (
              <motion.text
                key={symbol}
                x={340 + (i * 15)}
                y={20 + (i % 2) * 10}
                fontSize="14"
                fill="#2B3674"
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: [0, 0.7, 0.4, 0.7],
                  y: 0,
                  transition: { 
                    delay: 4 + (i * 0.2), 
                    duration: 0.8,
                    opacity: { repeat: Infinity, duration: 2 }
                  }
                }}
              >
                {symbol}
              </motion.text>
            ))}
            
            {/* Animated Grid Lines */}
            {[100, 80, 60].map((y, i) => (
              <motion.line
                key={i}
                x1="0"
                y1={y}
                x2="400"
                y2={y}
                stroke="#E8EFF6"
                strokeWidth="1"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ 
                  opacity: 0.3, 
                  scaleX: 1,
                  transition: { delay: 0.5 + (i * 0.3), duration: 1 }
                }}
              />
            ))}
          </motion.svg>
        </div>

        {/* Progress Bar and Percentage */}
        <div className="w-[400px] mt-8">
          <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div 
              className="absolute left-0 top-0 h-full bg-blue-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <motion.div 
            className="mt-2 text-center text-blue-600 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Loading... {Math.round(progress)}%
          </motion.div>
        </div>

        {/* Animated Dots */}
        <div className="mt-4 flex space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-blue-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedLogoPreloader;