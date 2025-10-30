'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatTime24 = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };

  return (
    <div className="w-full bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 fixed top-0 left-0 right-0 z-50" style={{backgroundColor: '#ffffff'}}>
      {/* Left side - Brand name and title */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          {/* Left pulsing cyan pixel */}
          <motion.div 
            className="w-2 h-2" 
            style={{backgroundColor: '#00D9FF'}}
            animate={{
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.h1 
            className="text-sm font-press-start-2p text-gray-900 tracking-[0.15em]"
            whileHover={{
              textShadow: [
                '0 0 0 #00d9ff',
                '2px 0 0 #00d9ff, -2px 0 0 #ff00ff',
                '0 0 0 #00d9ff'
              ]
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            TUAN NGUYEN
          </motion.h1>
          {/* Right pulsing magenta pixel */}
          <motion.div 
            className="w-2 h-2" 
            style={{backgroundColor: '#FF006B'}}
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        {/* Vertical separator line */}
        <div className="w-px h-4 bg-gray-300"></div>
        
        {/* Title */}
        <div className="text-gray-600 text-xs font-mono uppercase tracking-wider">
          EXPERIENCE DESIGNER • TECH SALES • D1 VIBECODER
        </div>
      </div>

      {/* Right side - Time and Location */}
      <div className="flex items-center space-x-3">
        {/* Time Block */}
        <div 
          className="flex items-center space-x-2 px-3 py-2 pixel-corners transition-all duration-200 relative group"
          style={{
            border: '1px solid rgba(0, 0, 0, 0.2)',
            backgroundColor: 'transparent',
            boxShadow: '0 0 10px rgba(0, 217, 255, 0.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.4)';
            e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 217, 255, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.2)';
            e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 217, 255, 0.1)';
          }}
        >
          <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12,6 12,12 16,14"></polyline>
          </svg>
          <span className="text-sm text-gray-900">{formatTime24(currentTime)}</span>
          <div className="w-1.5 h-1.5" style={{backgroundColor: '#00D9FF'}}></div>
          {/* Blinking cyan pixel corner */}
          <div className="absolute top-0 right-0 w-1 h-1 animate-pulse" style={{backgroundColor: '#00D9FF'}}></div>
        </div>

        {/* Location Block */}
        <div 
          className="flex items-center space-x-2 px-3 py-2 pixel-corners transition-all duration-200 relative group"
          style={{
            border: '1px solid rgba(0, 0, 0, 0.2)',
            backgroundColor: 'transparent',
            boxShadow: '0 0 10px rgba(255, 0, 255, 0.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 0, 255, 0.4)';
            e.currentTarget.style.boxShadow = '0 0 10px rgba(255, 0, 255, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.2)';
            e.currentTarget.style.boxShadow = '0 0 10px rgba(255, 0, 255, 0.1)';
          }}
        >
          <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span className="text-sm text-gray-900">NYC</span>
          <div className="w-px h-3 bg-gray-300"></div>
          <span className="text-sm text-gray-900">68°F</span>
          <div className="w-1.5 h-1.5" style={{backgroundColor: '#FF006B'}}></div>
          {/* Blinking magenta pixel corner with delay */}
          <div className="absolute top-0 right-0 w-1 h-1 animate-pulse" style={{backgroundColor: '#FF00FF', animationDelay: '1s'}}></div>
        </div>
      </div>
    </div>
  );
}

