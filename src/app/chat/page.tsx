'use client';

import { useState, useEffect, Suspense, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import { sashaChat } from '@/ai/flows/chat';
import { micromark } from 'micromark';

type Message = {
  text: string;
  sender: 'user' | 'bot';
};

function ChatPageContent() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    // Read the initial message from sessionStorage
    const initialMessage = sessionStorage.getItem('initialChatMessage');
    if (initialMessage) {
      handleSend(initialMessage);
      // Clear the message from storage so it's not re-sent on refresh
      sessionStorage.removeItem('initialChatMessage');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSend = async (messageText: string) => {
    if (!messageText.trim()) return;

    const userMessage: Message = { text: messageText, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setInput('');

    try {
      const botResponse = await sashaChat(messageText);
      const botMessage: Message = { text: botResponse, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      const errorMessage: Message = { text: 'Sorry, I encountered an error. Please try again.', sender: 'bot' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
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
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 my-4 ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-xl p-4 rounded-3xl prose prose-invert prose-sm ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-lg'
                      : 'bg-white/10 backdrop-blur-md border border-white/20 rounded-bl-lg'
                  }`}
                  dangerouslySetInnerHTML={{ __html: micromark(message.text) }}
                >
                </div>
              </div>
            ))}
             {isLoading && (
              <div
                className="flex items-start gap-4 my-4 justify-start"
              >
                <div className="max-w-md p-4 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 rounded-bl-lg flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse delay-0"></span>
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse delay-150"></span>
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse delay-300"></span>
                </div>
              </div>
            )}
           <div ref={messagesEndRef} />
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
