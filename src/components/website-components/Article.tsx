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
        <div className="prose lg:prose-xl mx-auto dark:prose-invert">
          <EditableText 
            componentId={id} 
            componentType={type} 
            field="title" 
            fieldDescription="Article Title" 
            initialValue={content.title}
            className="font-headline !mb-0"
            as="h1"
          />
          <div 
              key={articleKey}
              className="mt-8"
            >
              <EditableText
                componentId={id}
                componentType={type}
                field="article"
                fieldDescription="Article Content (Markdown)"
                initialValue={isEditMode ? content.article : micromark(content.article || '')}
                as="div"
                className="prose-p:m-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
