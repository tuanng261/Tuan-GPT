'use client';

import { motion } from 'framer-motion';

interface RecommendedQuestionsProps {
  onSuggestionClick: (suggestion: string) => void;
}

const suggestionChips = [
  { text: "What skills do you have Tuan?", color: "#FF006B" },
  { text: "What is your ideal company?", color: "#00D9FF" },
  { text: "Tell me about your UX projects?", color: "#00FF85" },
  { text: "What's your sales experience?", color: "#FF3B30" },
];

export default function RecommendedQuestions({ onSuggestionClick }: RecommendedQuestionsProps) {
  return (
    <motion.div 
      className="px-6 pb-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Suggestion Chips */}
      <div className="flex flex-wrap gap-2 justify-center">
        {suggestionChips.map((chip, index) => (
          <motion.button
            key={index}
            onClick={() => onSuggestionClick(chip.text)}
            className="px-3 py-2 text-xs font-mono text-gray-600 bg-white border border-gray-200 rounded-sm hover:bg-gray-50 transition-all duration-200 pixel-corners pixel-button relative group"
            style={{
              borderColor: 'rgba(0, 0, 0, 0.2)',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${chip.color}40`;
              e.currentTarget.style.boxShadow = `0 0 6px ${chip.color}20`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.2)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span 
              className="text-xs mr-1" 
              style={{ color: chip.color }}
            >
              +
            </span>
            {chip.text}
            {/* Colored pixel corner on hover */}
            <div 
              className="absolute top-0 right-0 w-1 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
              style={{backgroundColor: chip.color}}
            ></div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
