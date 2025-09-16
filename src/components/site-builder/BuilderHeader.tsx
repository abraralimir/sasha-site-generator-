'use client';

import React from 'react';
import { Eye, Archive, Sparkles, Home, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useSiteBuilder } from '@/hooks/useSiteBuilder';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SidebarTrigger } from '../ui/sidebar';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

// Helper to generate component code
const generateComponentCode = (component: any) => {
  const propsString = Object.entries(component.content)
    .map(([key, value]) => {
      if (typeof value === 'string') {
        return `${key}="${value.replace(/"/g, '\\"')}"`;
      }
      if (Array.isArray(value)) {
        return `${key}={${JSON.stringify(value, null, 2)}}`;
      }
      return `${key}={${JSON.stringify(value)}}`;
    })
    .join(' ');

  return `<${component.type} ${propsString} />`;
};


export default function BuilderHeader({className}: {className?: string}) {
  const { isEditMode, setIsEditMode, isPreview, setIsPreview, activePage } = useSiteBuilder();
  const [isDownloadModalOpen, setDownloadModalOpen] = React.useState(false);
  const [generatedCode, setGeneratedCode] = React.useState('');

  const handleDownload = () => {
    if (!activePage) return;

    const imports = [
      ...new Set(activePage.components.map(c => `import ${c.type} from '@/components/website-components/${c.type}';`))
    ].join('\n');
    
    const pageComponent = `
export default function ${activePage.name.replace(/\s+/g, '')}Page() {
  return (
    <>
      ${activePage.components.map(generateComponentCode).join('\n      ')}
    </>
  );
}
    `;
    setGeneratedCode(`${imports}\n\n${pageComponent}`);
    setDownloadModalOpen(true);
  };
  
  const handlePreviewClick = () => {
    setIsPreview(!isPreview);
  };

  if (isPreview) {
    return (
       <div className="fixed bottom-4 right-4 z-50">
          <Button onClick={handlePreviewClick} size="lg" className="shadow-lg">
            <Eye className="mr-2 h-4 w-4" /> Exit Preview
          </Button>
        </div>
    );
  }

  return (
    <>
      <header className={cn(
        "sticky top-0 z-20 flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6",
        className
        )}>
        <div className="flex items-center gap-4">
          <SidebarTrigger />
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
          <Button variant="outline" size="sm" onClick={handlePreviewClick}>
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>
          <Button size="sm" onClick={handleDownload}>
            <Archive className="mr-2 h-4 w-4" />
            Download Code
          </Button>
        </div>
      </header>

      <Dialog open={isDownloadModalOpen} onOpenChange={setDownloadModalOpen}>
        <DialogContent className="max-w-4xl h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2"><Code /> Generated Page Code</DialogTitle>
            <DialogDescription>
              Here is the Next.js code for the '{activePage?.name}' page. You can copy and paste this into your project.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="flex-1 rounded-md border p-4">
            <pre className="text-sm font-code">
                <code>{generatedCode}</code>
            </pre>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}
