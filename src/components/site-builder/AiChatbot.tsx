'use client';

import * as React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useSiteBuilder } from '@/hooks/useSiteBuilder';
import { Bot, User, Send, CircleDashed } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { ScrollArea } from '../ui/scroll-area';
import { cn } from '@/lib/utils';
import { Badge } from '../ui/badge';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  isLoading?: boolean;
}

export default function AiChatbot() {
  const { isChatbotOpen, setIsChatbotOpen } = useSiteBuilder();
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [inputValue, setInputValue] = React.useState('');
  const scrollAreaRef = React.useRef<HTMLDivElement>(null);

  // Mock initial message
  React.useEffect(() => {
    if (isChatbotOpen && messages.length === 0) {
      setMessages([
        { id: '1', sender: 'ai', text: "Hello! I'm your AI assistant. How can I help you build your website today?" },
      ]);
    }
  }, [isChatbotOpen, messages.length]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputValue,
    };
    
    // For now, we'll just mock a response.
    const aiResponse: Message = {
      id: (Date.now() + 1).toString(),
      sender: 'ai',
      text: `Okay, I will process this request: "${inputValue}"`,
      isLoading: false
    };

    setMessages(prev => [...prev, userMessage, aiResponse]);
    setInputValue('');
  };
  
   React.useEffect(() => {
    // Scroll to the bottom when new messages are added
    if (scrollAreaRef.current) {
       const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }
  }, [messages]);


  return (
    <Sheet open={isChatbotOpen} onOpenChange={setIsChatbotOpen}>
      <SheetContent className="w-[400px] sm:w-[540px] flex flex-col p-0">
        <SheetHeader className="p-6">
          <SheetTitle className="flex items-center gap-2">
            <Bot /> AI Assistant
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex-1" ref={scrollAreaRef}>
          <div className="p-6 space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  'flex items-start gap-3',
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                {message.sender === 'ai' && (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Bot className="h-5 w-5" />
                  </div>
                )}
                <div
                  className={cn(
                    'max-w-[75%] rounded-lg p-3 text-sm',
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  )}
                >
                  {message.isLoading ? (
                    <div className="flex items-center gap-2">
                      <CircleDashed className="h-4 w-4 animate-spin" />
                      <span>Thinking...</span>
                    </div>
                  ) : (
                    <p>{message.text}</p>
                  )}
                </div>

                {message.sender === 'user' && (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
                    <User className="h-5 w-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="border-t p-4 bg-background">
          <form onSubmit={handleSendMessage} className="flex items-center gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="e.g., 'Change the headline to...'"
              className="flex-1"
              autoFocus
            />
            <Button type="submit" size="icon" disabled={!inputValue.trim()}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge variant="outline" className="cursor-pointer hover:bg-muted">Change theme</Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-muted">Add a section</Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-muted">Rewrite text</Badge>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
