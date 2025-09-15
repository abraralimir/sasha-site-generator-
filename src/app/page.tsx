'use client';

import { SiteBuilderProvider } from '@/hooks/useSiteBuilder';
import Editor from '@/components/site-builder/Editor';

export default function Home() {
  return (
    <SiteBuilderProvider>
      <Editor />
    </SiteBuilderProvider>
  );
}
