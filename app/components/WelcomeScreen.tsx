'use client';

import { motion } from 'framer-motion';

interface WelcomeScreenProps {
  onSuggestionClick: (suggestion: string) => void;
  messages: any[];
}

const suggestionChips = [
  { text: "What skills do you have Tuan", color: "#FF006B" },
  { text: "What is your ideal company?", color: "#00D9FF" },
  { text: "Are you single?", color: "#00FF85" },
  { text: "What is your dream?", color: "#FF3B30" },
];

const dotColors = [
  "#FF3B30", // red
  "#FF9500", // orange
  "#FFD60A", // yellow
  "#00FF85", // green
  "#007AFF", // blue
  "#FF006B", // pink
  "#AF52DE", // purple
];

export default function WelcomeScreen({ onSuggestionClick, messages }: WelcomeScreenProps) {
  return (
    <div className="flex flex-col items-center justify-start p-8 pt-16 relative min-h-full">
      {/* Polaroid Photo Collage - Only shows when no messages */}
      {messages.length === 0 && (
        <motion.div 
          className="w-full flex justify-center mb-12"
          initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 15, 
            delay: 0.2 
          }}
        >
          {/* Photo 1 - Far left */}
          <div className="mx-2 transition-all duration-300 ease-in-out hover:-translate-y-4 hover:scale-105 hover:rotate-2 hover:z-30 group">
            <img 
              src="/Container.png" 
              alt="Snoopy with Woodstock" 
              className="w-[230px] h-[230px] object-contain transition-all duration-300 ease-in-out"
              style={{
                transition: 'all 0.3s ease'
              }}
            />
          </div>

          {/* Photo 2 - Left */}
          <div className="mx-2 transition-all duration-300 ease-in-out hover:-translate-y-4 hover:scale-105 hover:-rotate-2 hover:z-30 group">
            <img 
              src="/Container (1).png" 
              alt="City street scene" 
              className="w-[230px] h-[230px] object-contain transition-all duration-300 ease-in-out"
              style={{
                transition: 'all 0.3s ease'
              }}
            />
          </div>

          {/* Photo 3 - Center */}
          <div className="mx-2 transition-all duration-300 ease-in-out hover:-translate-y-4 hover:scale-105 hover:rotate-1 hover:z-30 group">
            <img 
              src="/Container (2).png" 
              alt="Soccer players" 
              className="w-[230px] h-[230px] object-contain transition-all duration-300 ease-in-out"
              style={{
                transition: 'all 0.3s ease'
              }}
            />
          </div>

          {/* Photo 4 - Right */}
          <div className="mx-2 transition-all duration-300 ease-in-out hover:-translate-y-4 hover:scale-105 hover:-rotate-1 hover:z-30 group">
            <img 
              src="/Container (3).png" 
              alt="Child with cake" 
              className="w-[230px] h-[230px] object-contain transition-all duration-300 ease-in-out"
              style={{
                transition: 'all 0.3s ease'
              }}
            />
          </div>

          {/* Photo 5 - Far right */}
          <div className="mx-2 transition-all duration-300 ease-in-out hover:-translate-y-4 hover:scale-105 hover:rotate-2 hover:z-30 group">
            <img 
              src="/Container (4).png" 
              alt="Two men outdoors" 
              className="w-[230px] h-[230px] object-contain transition-all duration-300 ease-in-out"
              style={{
                transition: 'all 0.3s ease'
              }}
            />
          </div>
        </motion.div>
      )}

      <div className="text-center max-w-2xl w-full">

        {/* Main Heading */}
        <motion.div 
          className="flex items-center justify-center space-x-2 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="text-2xl font-bold" style={{color: '#00FF85'}}>+</span>
          <h1 className="text-2xl font-press-start-2p text-gray-900 tracking-[0.2em]">HEY! WHAT'S UP!</h1>
          <span className="text-2xl font-bold" style={{color: '#00FF85'}}>+</span>
        </motion.div>

        {/* Pixel Divider Wave */}
        <motion.div className="flex justify-center mb-8">
          {Array.from({ length: 15 }, (_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 mx-0.5"
              style={{ backgroundColor: '#00d9ff' }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          className="text-sm text-gray-600 font-mono leading-relaxed"
          style={{ marginBottom: '70px' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Hi, I'm Tuan Nguyen (you can say it like 'win'). I love startups and learning by doing. With experience in sales, design, and development, I like solving problems, connecting ideas, and building things that matter.
        </motion.p>

        {/* Suggestion Chips Grid */}
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto mt-5">
          {suggestionChips.map((chip, index) => (
            <motion.button
              key={index}
              onClick={() => onSuggestionClick(chip.text)}
              className="bg-white border p-4 text-left hover:bg-gray-50 transition-all duration-200 flex items-center space-x-2 whitespace-nowrap pixel-corners pixel-button relative group"
              style={{
                borderWidth: '1px',
                borderColor: 'rgba(0, 0, 0, 0.4)',
                borderStyle: 'solid'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.4)';
                e.currentTarget.style.boxShadow = '0 0 8px rgba(0, 217, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.4)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span 
                className="text-lg font-bold flex-shrink-0" 
                style={{ color: chip.color }}
              >
                +
              </span>
              <span className="text-sm font-mono text-gray-700">{chip.text}</span>
              {/* Cyan pixel corner on hover */}
              <div className="absolute top-0 right-0 w-1.5 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{backgroundColor: '#00D9FF'}}></div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}