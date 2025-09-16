'use client';

import React from 'react';
import { micromark } from 'micromark';
import EditableText from '../site-builder/EditableText';
import type { WebsiteComponent } from '@/lib/types';
import { useSiteBuilder } from '@/hooks/useSiteBuilder';

export default function Article(props: WebsiteComponent) {
  const { id, type, content } = props;
  const { isEditMode } = useSiteBuilder();
  
  // Use a unique key for the article content to force re-render when it changes in edit mode
  const articleKey = `article-${id}-${content.article?.length}`;

  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4">
        <article className="prose lg:prose-xl mx-auto dark:prose-invert">
          <h1>
            <EditableText 
              componentId={id} 
              componentType={type} 
              field="title" 
              fieldDescription="Article Title" 
              initialValue={content.title}
              className="font-headline"
            />
          </h1>
          {isEditMode ? (
             <div className="mt-8">
                <p className="text-sm text-muted-foreground mb-2">You can edit the article content below (supports Markdown):</p>
                <EditableText
                    componentId={id}
                    componentType={type}
                    field="article"
                    fieldDescription="Article Content"
                    initialValue={content.article}
                    as="div"
                    className="w-full min-h-[200px] p-2 border rounded-md"
                />
             </div>
          ) : (
             <div 
                key={articleKey}
                dangerouslySetInnerHTML={{ __html: micromark(content.article || '') }} 
             />
          )}
        </article>
      </div>
    </section>
  );
}
