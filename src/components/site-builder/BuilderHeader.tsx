'use client';

import React from 'react';
import { Eye, Archive, Sparkles, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useSiteBuilder } from '@/hooks/useSiteBuilder';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SidebarTrigger } from '../ui/sidebar';

export default function BuilderHeader({className}: {className?: string}) {
  const { isEditMode, setIsEditMode } = useSiteBuilder();
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: 'Feature Coming Soon!',
      description: 'The ability to download your site as a zip file is being developed.',
    });
  };

  return (
    <header className={cn(
      "sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6",
      className
      )}>
      <div className="flex items-center gap-4">
        <SidebarTrigger className="md:hidden" />
        <Sparkles className="h-6 w-6 text-primary" />
        <h1 className="font-headline text-xl font-semibold tracking-tight">Agentic SiteForge</h1>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Home
          </Link>
        </Button>
        <div className="flex items-center space-x-2">
          <Switch id="edit-mode" checked={isEditMode} onCheckedChange={setIsEditMode} />
          <Label htmlFor="edit-mode" className="text-sm font-medium">Edit Mode</Label>
        </div>
        <Button variant="outline" size="sm">
          <Eye className="mr-2 h-4 w-4" />
          Preview
        </Button>
        <Button size="sm" onClick={handleDownload}>
          <Archive className="mr-2 h-4 w-4" />
          Download Code
        </Button>
      </div>
    </header>
  );
}
