'use client';

import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EditableText from '../site-builder/EditableText';
import type { WebsiteComponent } from '@/lib/types';
import { useSiteBuilder } from '@/hooks/useSiteBuilder';

export default function Header(props: WebsiteComponent) {
  const { id, content } = props;
  const { isEditMode, updateComponentContent, activePageId } = useSiteBuilder();
  const navItems = content.navItems || [];

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-semibold">
            <EditableText componentId={id} field="brandName" initialValue={content.brandName} as="span" />
          </span>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item: any, index: number) => (
            <a key={index} href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              <EditableText componentId={id} field={`navItems[${index}].label`} initialValue={item.label} as="span" />
            </a>
          ))}
        </nav>
        <Button>
          <EditableText componentId={id} field="buttonText" initialValue={content.buttonText} as="span" />
        </Button>
      </div>
    </header>
  );
}
