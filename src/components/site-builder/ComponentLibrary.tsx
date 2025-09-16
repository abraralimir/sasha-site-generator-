'use client';

import { Button } from '@/components/ui/button';
import { useSiteBuilder } from '@/hooks/useSiteBuilder';
import { LayoutTemplate, PlusCircle, Star, Type, GalleryVerticalEnd, Newspaper, Waves } from 'lucide-react';

const availableComponents = [
  { type: 'Header', name: 'Header', icon: <LayoutTemplate className="h-4 w-4" /> },
  { type: 'Hero', name: 'Hero Section', icon: <Star className="h-4 w-4" /> },
  { type: 'FeatureGrid', name: 'Feature Grid', icon: <GalleryVerticalEnd className="h-4 w-4" /> },
  { type: 'Article', name: 'Article', icon: <Newspaper className="h-4 w-4" /> },
  { type: 'CallToAction', name: 'Call to Action', icon: <Type className="h-4 w-4" /> },
  { type: 'Scene', name: 'Animated Scene', icon: <Waves className="h-4 w-4" /> },
  { type: 'Scene', name: 'Interactive Scene', icon: <Waves className="h-4 w-4" />, content: { isInteractive: true } },
  { type: 'Footer', name: 'Footer', icon: <LayoutTemplate className="h-4 w-4" /> },
];

export default function ComponentLibrary() {
  const { addComponent, activePageId } = useSiteBuilder();

  const handleAddComponent = (type: 'Header' | 'Hero' | 'FeatureGrid' | 'CallToAction' | 'Footer' | 'Article' | 'Scene', content?: Record<string, any>) => {
    addComponent(activePageId, type, content);
  };

  return (
    <div className="flex flex-col gap-2 p-2">
      <p className="px-2 text-xs font-semibold text-muted-foreground">ADD COMPONENTS</p>
      {availableComponents.map((comp) => (
        <Button
          key={comp.name}
          variant="ghost"
          className="justify-start gap-2"
          onClick={() => handleAddComponent(comp.type as any, comp.content)}
        >
          {comp.icon}
          <span>{comp.name}</span>
          <PlusCircle className="ml-auto h-4 w-4 text-muted-foreground" />
        </Button>
      ))}
    </div>
  );
}
