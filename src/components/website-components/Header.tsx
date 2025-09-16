'use client';

import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EditableText from '../site-builder/EditableText';
import type { WebsiteComponent } from '@/lib/types';
import { cn } from '@/lib/utils';

export default function Header(props: WebsiteComponent) {
  const { id, type, content } = props;
  const navItems = content.navItems || [];

  return (
    <header className={cn("sticky top-0 z-50 border-b", "glass-effect")}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-semibold">
            <EditableText componentId={id} componentType={type} field="brandName" fieldDescription="Brand Name" initialValue={content.brandName} as="span" />
          </span>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item: any, index: number) => (
            <a key={index} href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              <EditableText componentId={id} componentType={type} field={`navItems[${index}].label`} fieldDescription={`Navigation item #${index + 1}`} initialValue={item.label} as="span" />
            </a>
          ))}
        </nav>
        <Button>
          <EditableText componentId={id} componentType={type} field="buttonText" fieldDescription="Header button text" initialValue={content.buttonText} as="span" />
        </Button>
      </div>
    </header>
  );
}
