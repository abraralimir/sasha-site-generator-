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
import { generateBlogPost } from '@/ai/flows/generate-blog-post';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  isLoading?: boolean;
}

export default function AiChatbot() {
  const { isChatbotOpen, setIsChatbotOpen, pages, setPages, setActivePageId } = useSiteBuilder();
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [inputValue, setInputValue] = React.useState('');
  const scrollAreaRef = React.useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  React.useEffect(() => {
    if (isChatbotOpen && messages.length === 0) {
      setMessages([
        { id: '1', sender: 'ai', text: "Hello! I'm your AI assistant. I can help you create content, modify your site, and more. What would you like to do? Try asking me to create a blog post!" },
      ]);
    }
  }, [isChatbotOpen, messages.length]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputValue,
    };
    
    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');

    // Add a loading message from the AI
    const loadingMessageId = (Date.now() + 1).toString();
    const loadingMessage: Message = {
        id: loadingMessageId,
        sender: 'ai',
        text: 'Thinking...',
        isLoading: true,
    };
    setMessages(prev => [...prev, loadingMessage]);
    
    const lowerCaseInput = currentInput.toLowerCase();

    // Simple command parsing
    if (lowerCaseInput.startsWith('blog:') || lowerCaseInput.includes('blog post') || lowerCaseInput.includes('write an article')) {
      const topic = currentInput.replace(/blog:|write an article about|create a blog post about/i, '').trim();
      if (topic) {
        try {
          const result = await generateBlogPost({ topic });
          const newPage = result.page;
          setPages([...pages, newPage]);

          setMessages(prev => prev.map(m => m.id === loadingMessageId ? {
            ...m,
            isLoading: false,
            text: `I've created a new blog post titled "${newPage.name}". I'll switch to it for you now.`
          } : m));

          setActivePageId(newPage.id);
          toast({
            title: "Page Created",
            description: `Successfully generated and added the page: ${newPage.name}`,
          });

        } catch (error) {
           console.error('Error generating blog post:', error);
           setMessages(prev => prev.map(m => m.id === loadingMessageId ? {
            ...m,
            isLoading: false,
            text: "I'm sorry, I had trouble generating the blog post. The AI model might be overloaded. Please try again in a moment."
          } : m));
           toast({
            variant: "destructive",
            title: "Generation Failed",
            description: "There was a problem creating the blog post.",
          });
        }
      } else {
        setMessages(prev => prev.map(m => m.id === loadingMessageId ? {
          ...m,
          isLoading: false,
          text: "Of course! What topic should the blog post be about?"
        } : m));
      }
    } else if (lowerCaseInput.includes('rewrite') || lowerCaseInput.includes('improve this text')) {
       setMessages(prev => prev.map(m => m.id === loadingMessageId ? {
        ...m,
        isLoading: false,
        text: "I can help with that! Simply highlight any text on your page, and an 'Improve with AI' toolbar will appear. You can generate new suggestions from there."
      } : m));
    }
    else {
       setMessages(prev => prev.map(m => m.id === loadingMessageId ? {
        ...m,
        isLoading: false,
        text: `I'm sorry, I can't do that just yet. Right now, I'm best at creating blog posts. Try asking: "Create a blog post about..."`
      } : m));
    }
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
        <SheetHeader className="p-6 border-b">
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
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shrink-0">
                    <Bot className="h-5 w-5" />
                  </div>
                )}
                <div
                  className={cn(
                    'max-w-[85%] rounded-lg p-3 text-sm shadow-sm',
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
                    <p className="leading-relaxed">{message.text}</p>
                  )}
                </div>

                {message.sender === 'user' && (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground shrink-0">
                    <User className="h-5 w-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="border-t p-4 bg-background">
           <div className="mb-3 flex flex-wrap gap-2">
            <Badge variant="outline" className="cursor-pointer hover:bg-muted" onClick={() => setInputValue('Create a blog post about ')}>New Blog Post</Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-muted" onClick={() => setInputValue('How can I rewrite text?')}>Rewrite Text</Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-muted" onClick={() => setInputValue('How do I change my theme?')}>Change Theme</Badge>
          </div>
          <form onSubmit={handleSendMessage} className="flex items-center gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="e.g., 'Create a blog post about AI...'"
              className="flex-1"
              autoFocus
            />
            <Button type="submit" size="icon" disabled={!inputValue.trim()}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
}
