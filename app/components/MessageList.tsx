'use client';

import { motion } from 'framer-motion';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
}

export default function MessageList({ messages, isLoading }: MessageListProps) {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20,
              delay: index * 0.1 
            }}
          >
            {message.role === 'user' ? (
              // User message layout
              <div className="flex items-start space-x-3 max-w-[75%]">
                {/* User label and message bubble */}
                <div className="flex flex-col items-end space-y-1">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#FF006B'}}></div>
                    <span className="text-[9px] font-mono uppercase tracking-wide" style={{color: '#FF006B'}}>YOU</span>
                  </div>
                  <div className="bg-gray-200 px-4 py-3 rounded-lg">
                    <div className="whitespace-pre-wrap text-sm font-system-ui leading-relaxed text-gray-900">
                      {message.content}
                    </div>
                  </div>
                </div>
                {/* User avatar */}
                <div className="w-8 h-8 rounded flex items-center justify-center" style={{backgroundColor: '#FF006B'}}>
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            ) : (
              // Assistant message layout
              <div className="flex items-start space-x-3 max-w-[75%]">
                {/* Bot avatar */}
                <div className="w-8 h-8 rounded flex items-center justify-center" style={{backgroundColor: '#00D9FF'}}>
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                  </svg>
                </div>
                {/* Bot label and message bubble */}
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-[9px] font-mono uppercase tracking-wide" style={{color: '#00D9FF'}}>TUAN NGUYEN</span>
                  </div>
                  <div className="bg-white border px-4 py-3 rounded-lg" style={{borderColor: '#00D9FF'}}>
                    <div className="whitespace-pre-wrap text-sm font-system-ui leading-relaxed text-gray-900">
                      {message.content}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}

        {/* Typing Indicator */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-3">
              {/* Bot avatar */}
              <div className="w-8 h-8 rounded flex items-center justify-center" style={{backgroundColor: '#00D9FF'}}>
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              {/* Bot label and typing indicator */}
              <div className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-system-ui uppercase tracking-wide" style={{color: '#00D9FF'}}>TUAN NGUYEN</span>
                </div>
                <div className="bg-white border px-4 py-3 rounded-lg" style={{borderColor: '#00D9FF'}}>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

