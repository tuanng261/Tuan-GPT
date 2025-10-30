'use client';

import { motion } from 'framer-motion';

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export default function ChatInput({ input, setInput, onSubmit, isLoading }: ChatInputProps) {
  return (
    <motion.div 
      className="border-t border-gray-200 p-6 bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <form onSubmit={onSubmit} className="max-w-4xl mx-auto">
        <div 
          className="flex pixel-corners bg-white transition-all duration-200"
          style={{
            border: '1px solid rgba(0, 0, 0, 0.2)',
            backgroundColor: '#ffffff'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.4)';
            e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 217, 255, 0.1)';
          }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.2)';
              e.currentTarget.style.boxShadow = 'none';
            }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything about Tuan's work or experience..."
            className="flex-1 px-4 py-4 border-0 focus:outline-none text-sm font-mono placeholder-gray-400 bg-white text-gray-900"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="px-4 py-4 text-sm font-mono flex items-center space-x-2 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed text-gray-600 hover:text-gray-800 m-1 pixel-corners pixel-button relative group"
            style={{
              border: '1px solid rgba(0, 0, 0, 0.2)',
              backgroundColor: input.trim() && !isLoading ? 'rgba(0, 217, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'
            }}
            onMouseEnter={(e) => {
              if (!e.currentTarget.disabled) {
                e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.5)';
                e.currentTarget.style.backgroundColor = 'rgba(0, 217, 255, 0.1)';
                e.currentTarget.style.boxShadow = '0 0 8px rgba(0, 217, 255, 0.2)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.2)';
              e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span>Send</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            {/* Cyan pixel corner on hover */}
            <div className="absolute top-0 right-0 w-1.5 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{backgroundColor: '#00D9FF'}}></div>
          </button>
        </div>
        
        {/* Hint text */}
        <div className="flex items-center justify-center space-x-2 mt-3">
          <div className="w-2 h-2" style={{backgroundColor: '#FF006B'}}></div>
          <span className="text-xs text-gray-400 font-mono">Press Enter to send</span>
          <div className="w-2 h-2" style={{backgroundColor: '#00D9FF'}}></div>
        </div>
      </form>
    </motion.div>
  );
}

