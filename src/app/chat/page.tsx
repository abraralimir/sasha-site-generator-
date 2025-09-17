'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, User, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  text: string;
  sender: 'user' | 'bot';
};

function ChatPageContent() {
  const searchParams = useSearchParams();
  const initialMessage = searchParams.get('message');
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (initialMessage) {
      handleSend(initialMessage);
    }
  }, [initialMessage]);

  const handleSend = async (messageText: string) => {
    if (!messageText.trim()) return;

    const userMessage: Message = { text: messageText, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate a bot response
    setTimeout(() => {
      const botMessage: Message = { text: `Sasha is thinking about: "${messageText}"`, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);

    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(input);
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <header className="p-4 border-b border-white/20 text-center">
        <h1 className="text-2xl font-headline">Chat with Sasha</h1>
      </header>
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence initial={false}>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`flex items-start gap-4 my-4 ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.sender === 'bot' && (
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6 text-primary-foreground" />
                  </div>
                )}
                <div
                  className={`max-w-md p-4 rounded-3xl ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-lg'
                      : 'bg-white/10 backdrop-blur-md border border-white/20 rounded-bl-lg'
                  }`}
                >
                  <p>{message.text}</p>
                </div>
                 {message.sender === 'user' && (
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6" />
                  </div>
                )}
              </motion.div>
            ))}
             {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-4 my-4 justify-start"
              >
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Bot className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="max-w-md p-4 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 rounded-bl-lg flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse delay-0"></span>
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse delay-150"></span>
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse delay-300"></span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <footer className="p-4 bg-black/50 border-t border-white/20">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Talk to Sasha..."
            className="flex-1 bg-white/10 border-white/20 rounded-full h-12 px-6 focus:ring-primary focus:ring-2"
            disabled={isLoading}
          />
          <Button type="submit" size="icon" className="h-12 w-12 rounded-full bg-primary" disabled={isLoading}>
            <Send className="h-6 w-6" />
          </Button>
        </form>
      </footer>
    </div>
  );
}


export default function ChatPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ChatPageContent />
        </Suspense>
    )
}
