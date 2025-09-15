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
      <div className="flex h-screen flex-col">
        <BuilderHeader />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar collapsible="icon" className="transition-all duration-300 ease-in-out">
            <SidebarControls />
          </Sidebar>
          <SidebarInset className="flex-1 overflow-auto">
            <WebsitePreview />
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}
