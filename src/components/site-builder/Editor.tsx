'use client';

import {
  SidebarProvider,
  Sidebar,
  SidebarInset,
} from '@/components/ui/sidebar';
import BuilderHeader from './BuilderHeader';
import SidebarControls from './SidebarControls';
import WebsitePreview from './WebsitePreview';

export default function Editor() {
  return (
    <SidebarProvider>
      <div className="grid h-screen w-full grid-rows-[auto_1fr] md:grid-cols-[auto_1fr]">
        <BuilderHeader className="col-span-2" />
        <Sidebar collapsible="icon" className="h-full max-h-full">
          <SidebarControls />
        </Sidebar>
        <SidebarInset className="overflow-auto">
          <WebsitePreview />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
