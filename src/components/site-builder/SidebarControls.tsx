'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import PageManager from './PageManager';
import ComponentLibrary from './ComponentLibrary';
import ThemeGenerator from './ThemeGenerator';

export default function SidebarControls() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-y-auto">
        <Accordion type="multiple" defaultValue={['pages', 'components']} className="w-full">
          <AccordionItem value="pages">
            <AccordionTrigger className="px-4 text-sm font-semibold">Pages</AccordionTrigger>
            <AccordionContent>
              <PageManager />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="components">
            <AccordionTrigger className="px-4 text-sm font-semibold">Components</AccordionTrigger>
            <AccordionContent>
              <ComponentLibrary />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="theme">
            <AccordionTrigger className="px-4 text-sm font-semibold">AI Theme</AccordionTrigger>
            <AccordionContent>
              <ThemeGenerator />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
