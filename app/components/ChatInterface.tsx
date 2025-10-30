'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './Sidebar';
import Header from './Header';
import WelcomeScreen from './WelcomeScreen';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import AboutPage from './AboutPage';
import PreloadScreen from './PreloadScreen';
import QuoteScreen from './QuoteScreen';
import FloatingPixelBackground from './FloatingPixelBackground';
import RecommendedQuestions from './RecommendedQuestions';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showPreloadScreen, setShowPreloadScreen] = useState(true);
  const [showQuoteScreen, setShowQuoteScreen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize messages on client side to avoid hydration mismatch
  useEffect(() => {
    if (!isInitialized) {
      setMessages([]);
      setIsInitialized(true);
    }
  }, [isInitialized]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(msg => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        
        // Handle rate limit (429)
        if (response.status === 429) {
          throw new Error(errorData.error || "You've reached the message limit. Please try again in an hour.");
        }
        
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: error instanceof Error ? error.message : 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
  };

  const clearChat = () => {
    setMessages([]);
    setShowAbout(false);
  };

  const handleAboutToggle = () => {
    setShowAbout(!showAbout);
  };

  const handlePreloadStart = () => {
    setShowPreloadScreen(false);
    setShowQuoteScreen(true);
  };

  const handleQuoteComplete = () => {
    setShowQuoteScreen(false);
  };

  const isFirstInteraction = messages.length === 0 && isInitialized;

  // Show preload screen first
  if (showPreloadScreen) {
    return <PreloadScreen onStart={handlePreloadStart} />;
  }

  // Show quote screen second
  if (showQuoteScreen) {
    return <QuoteScreen onComplete={handleQuoteComplete} />;
  }

  return (
    <>
      <FloatingPixelBackground />
      <motion.div 
        className="h-screen tech-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ backgroundColor: '#ffffff' }}
      >
        {/* Header - Fixed at top */}
        <Header />
      
        {/* Sidebar - Fixed positioned */}
        <Sidebar 
          onNewChat={clearChat} 
          onAboutToggle={handleAboutToggle}
          showAbout={showAbout}
        />

      {/* Main content with top padding to account for fixed header */}
      <div className="min-h-screen pt-16">
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col ml-72 min-h-[calc(100vh-4rem)]" style={{ contain: 'layout style' }}>
          {/* Content Area - Scrollable */}
          <div className={`flex-1 overflow-y-auto ${!isFirstInteraction ? 'pb-64' : 'pb-40'}`} style={{ contain: 'layout style paint' }}>
            <AnimatePresence mode="wait">
              {showAbout ? (
                <motion.div
                  key="about"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  style={{ willChange: 'transform, opacity' }}
                >
                  <AboutPage />
                </motion.div>
              ) : (
                <motion.div
                  key="chat"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  style={{ willChange: 'transform, opacity' }}
                >
                  {/* Messages or Welcome Screen */}
                  {isFirstInteraction ? (
                    <WelcomeScreen onSuggestionClick={handleSuggestionClick} messages={messages} />
                  ) : (
                    <MessageList messages={messages} isLoading={isLoading} />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Scroll anchor */}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Fixed Input Area */}
      {!showAbout && (
        <div className="fixed bottom-0 left-72 right-0 bg-white z-10">
          {/* Recommended Questions - Only show when conversation has started */}
          {!isFirstInteraction && (
            <RecommendedQuestions onSuggestionClick={handleSuggestionClick} />
          )}
          
          {/* Chat Input */}
          <ChatInput
            input={input}
            setInput={setInput}
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </div>
      )}
      </motion.div>
    </>
  );
}