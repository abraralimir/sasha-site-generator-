'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

export default function ChatInput() {
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    // Encode the message to make it safe for a URL
    const encodedMessage = encodeURIComponent(message);
    router.push(`/chat?message=${encodedMessage}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md items-center space-x-2">
      <Input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Talk to Sasha..."
        className="flex-1 bg-white/10 border-white/20 rounded-full h-12 px-6 focus:ring-primary focus:ring-2 text-white placeholder:text-neutral-400"
      />
      <Button type="submit" size="icon" variant="glass" className="h-12 w-12 rounded-full">
        <Send className="h-5 w-5" />
      </Button>
    </form>
  );
}
