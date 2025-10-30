'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface QuoteScreenProps {
  onComplete: () => void;
}

const quotes = [
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts. Every setback is just a setup for a comeback.",
    author: "Winston Churchill"
  },
  {
    text: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle for anything less than extraordinary.",
    author: "Steve Jobs"
  },
  {
    text: "Believe you can and you're halfway there. The mind is everything. What you think you become, and what you believe you achieve.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Don't be afraid to give up the good to go for the great. Sometimes you have to let go of what's comfortable to reach what's possible.",
    author: "John D. Rockefeller"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams. Dream big, work hard, and never give up on what you truly want.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "It is during our darkest moments that we must focus to see the light. Every challenge is an opportunity to grow stronger and wiser.",
    author: "Aristotle"
  },
  {
    text: "The only impossible journey is the one you never begin. Take that first step, even if you don't see the whole staircase.",
    author: "Tony Robbins"
  },
  {
    text: "Success is walking from failure to failure with no loss of enthusiasm. Every 'no' gets you closer to your 'yes'.",
    author: "Winston Churchill"
  },
  {
    text: "Your limitation—it's only your imagination. Push yourself, because no one else is going to do it for you. You are your own greatest asset.",
    author: "Unknown"
  },
  {
    text: "Great things never come from comfort zones. Step outside your comfort zone and watch yourself grow beyond what you thought possible.",
    author: "Roy T. Bennett"
  },
  {
    text: "The way to get started is to quit talking and begin doing. Action is the foundational key to all success and achievement in life.",
    author: "Walt Disney"
  },
  {
    text: "Don't let yesterday take up too much of today. Focus on what you can control, work hard, and trust the process of your journey.",
    author: "Will Rogers"
  }
];

export default function QuoteScreen({ onComplete }: QuoteScreenProps) {
  const [selectedQuote, setSelectedQuote] = useState(quotes[0]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Select random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setSelectedQuote(quotes[randomIndex]);

    // Progress animation
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 200);
          return 100;
        }
        return prev + 1.67;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,217,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,0,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }}
    >
      <div className="text-center max-w-4xl px-8">
        {/* Decorative Top Pixels */}
        <motion.div 
          className="flex justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { color: '#00d9ff', delay: 0 },
            { color: '#ff00ff', delay: 0.1 },
            { color: '#ffff00', delay: 0.2 }
          ].map((pixel, index) => (
            <motion.div
              key={index}
              className="w-[10px] h-[10px]"
              style={{ backgroundColor: pixel.color }}
              animate={{
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: pixel.delay,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Quote Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-start justify-center mb-4">
            <span className="text-[22px] font-press-start-2p text-[#00d9ff] mr-2">"</span>
            <p className="text-[26px] text-black/70 leading-[1.8] font-mono font-bold">
              {selectedQuote.text}
            </p>
            <span className="text-[22px] font-press-start-2p text-[#00d9ff] ml-2">"</span>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="w-[10px] h-[10px] bg-[#ff00ff] mr-2"></div>
            <span className="text-[21px] font-mono text-black/50">
              {selectedQuote.author}
            </span>
            <div className="w-[10px] h-[10px] bg-[#ff00ff] ml-2"></div>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-[448px] mx-auto"
        >
          <div 
            className="w-full h-1.5 bg-black/5"
            style={{
              clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)'
            }}
          >
            <motion.div
              className="h-full bg-[#00d9ff]"
              style={{
                clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)'
              }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
