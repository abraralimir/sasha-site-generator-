'use client';

import { SiteBuilderProvider } from '@/hooks/useSiteBuilder';
import Editor from '@/components/site-builder/Editor';

export default function EditorPage() {
  return (
    <SiteBuilderProvider>
      <Editor />
    </SiteBuilderProvider>
  );
}
