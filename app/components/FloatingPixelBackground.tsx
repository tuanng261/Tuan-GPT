'use client';

import { motion } from 'framer-motion';

const FloatingPixelBackground = () => {
  const colors = ['#00d9ff', '#ff00ff', '#ffff00'];
  
  const pixels = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    color: colors[i % colors.length],
    duration: 10 + Math.random() * 10, // 10-20 seconds
    delay: Math.random() * 5, // Random start delay
    x: Math.random() * 100, // Random horizontal position (0-100%)
    drift: (Math.random() - 0.5) * 100, // Random horizontal drift (±50px)
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" style={{ contain: 'layout style paint' }}>
      {pixels.map((pixel) => (
        <motion.div
          key={pixel.id}
          className="absolute w-2 h-2"
          style={{
            backgroundColor: pixel.color,
            opacity: 0.15,
            left: `${pixel.x}%`,
            bottom: '-8px',
            willChange: 'transform',
            contain: 'layout style paint'
          }}
          animate={{
            y: ['0px', '-100vh'],
            x: [`0px`, `${pixel.drift}px`],
            rotate: [0, 360],
          }}
          transition={{
            duration: pixel.duration,
            delay: pixel.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingPixelBackground;
