'use client';

import React from 'react';
import { Code, Eye, Archive, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useSiteBuilder } from '@/hooks/useSiteBuilder';
import { useToast } from '@/hooks/use-toast';

export default function BuilderHeader() {
  const { isEditMode, setIsEditMode } = useSiteBuilder();
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: 'Feature Coming Soon!',
      description: 'The ability to download your site as a zip file is being developed.',
    });
  };

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
      <div className="flex items-center gap-4">
        <Sparkles className="h-6 w-6 text-primary" />
        <h1 className="font-headline text-xl font-semibold tracking-tight">Agentic SiteForge</h1>
      </div>
      <div className="flex items-center gap-4">
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
