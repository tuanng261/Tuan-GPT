'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface PreloadScreenProps {
  onStart: () => void;
}

export default function PreloadScreen({ onStart }: PreloadScreenProps) {
  const [isExiting, setIsExiting] = useState(false);

  const handleStartClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      onStart();
    }, 500); // Match fade out duration
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: isExiting ? 0.5 : 0.6, ease: "easeOut" }}
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
      >
        {/* Main Title */}
        <motion.h1
          className="text-[38px] font-press-start-2p text-black mb-2"
          style={{ letterSpacing: '2px' }}
        >
          TUAN.GPT
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-[24px] font-press-start-2p mb-8"
          style={{ 
            letterSpacing: '2px',
            opacity: 0.8,
            color: '#ff0000'
          }}
        >
          ASKED ME ANYTHING
        </motion.p>

        {/* START Button */}
        <motion.button
          onClick={handleStartClick}
          className="relative px-5 py-2.5 text-[28px] font-press-start-2p text-white bg-black mb-6"
          style={{
            letterSpacing: '2px',
            clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
            boxShadow: '0 4px 0 #000000'
          }}
          whileHover={{
            scale: 1.05,
            y: -2,
            backgroundColor: '#00d9ff',
            color: '#000000',
            boxShadow: '0 0 20px #00d9ff'
          }}
          whileTap={{
            scale: 0.95,
            y: 2
          }}
          animate={{
            y: [0, -4, 0]
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          START
        </motion.button>

        {/* Decorative Pixels */}
        <div className="flex justify-center gap-2">
          {[
            { color: '#00d9ff', delay: 0 },
            { color: '#ff00ff', delay: 0.2 },
            { color: '#ffff00', delay: 0.4 }
          ].map((pixel, index) => (
            <motion.div
              key={index}
              className="w-[13px] h-[13px]"
              style={{ backgroundColor: pixel.color }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileInView={{
                scale: [1, 1.2, 1]
              }}
              transition={{
                scale: {
                  duration: 1.5,
                  repeat: Infinity,
                  delay: pixel.delay,
                  ease: "easeInOut"
                },
                delay: pixel.delay,
                duration: 0.3,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
