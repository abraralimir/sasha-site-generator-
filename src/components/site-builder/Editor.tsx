'use client';

import {
  SidebarProvider,
  Sidebar,
  SidebarInset,
} from '@/components/ui/sidebar';
import BuilderHeader from './BuilderHeader';
import SidebarControls from './SidebarControls';
import WebsitePreview from './WebsitePreview';
import AiChatbot from './AiChatbot';
import { useSiteBuilder } from '@/hooks/useSiteBuilder';
import { cn } from '@/lib/utils';

export default function Editor() {
  const { isPreview } = useSiteBuilder();

  return (
    <SidebarProvider>
       <div className={cn(
          "grid h-screen w-full grid-rows-[auto_1fr]",
          !isPreview && "md:grid-cols-[auto_1fr]"
        )}>
        <BuilderHeader className={cn(!isPreview && "md:col-span-2")} />
        
        {!isPreview && (
          <Sidebar collapsible="icon" className="h-full max-h-full hidden md:flex">
            <SidebarControls />
          </Sidebar>
        )}
        
        <SidebarInset className="overflow-auto">
          <WebsitePreview />
          <AiChatbot />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
