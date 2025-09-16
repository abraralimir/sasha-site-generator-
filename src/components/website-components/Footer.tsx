'use client';
import { Sparkles, Twitter, Github, Linkedin } from 'lucide-react';
import EditableText from '../site-builder/EditableText';
import type { WebsiteComponent } from '@/lib/types';

export default function Footer(props: WebsiteComponent) {
  const { id, type, content } = props;

  return (
    <footer className="bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="font-headline text-lg font-semibold">
              <EditableText componentId={id} componentType={type} field="brandName" fieldDescription="Brand name in footer" initialValue={content.brandName} as="span" />
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            <EditableText componentId={id} componentType={type} field="copyright" fieldDescription="Copyright text" initialValue={content.copyright} as="span" />
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
