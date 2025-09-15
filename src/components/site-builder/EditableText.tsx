'use client';

import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useSiteBuilder } from '@/hooks/useSiteBuilder';
import { AiContentToolbar } from './AiContentToolbar';

interface EditableTextProps {
  componentId: string;
  field: string;
  initialValue: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
}

export default function EditableText({
  componentId,
  field,
  initialValue,
  className,
  as: Tag = 'div',
}: EditableTextProps) {
  const { isEditMode, updateComponentContent, activePageId } = useSiteBuilder();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = initialValue;
    }
  }, [initialValue]);

  const handleBlur = () => {
    if (ref.current) {
      const newValue = ref.current.textContent || '';
      if (newValue !== initialValue) {
        updateComponentContent(activePageId, componentId, field, newValue);
      }
    }
  };

  const commonProps = {
    className: cn(
      className,
      isEditMode && 'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm cursor-text'
    ),
    onBlur: isEditMode ? handleBlur : undefined,
    suppressContentEditableWarning: true,
  };
  
  if (isEditMode) {
    return (
      <AiContentToolbar componentId={componentId} field={field} initialContent={initialValue}>
        <Tag
          ref={ref}
          contentEditable={isEditMode}
          {...commonProps}
        />
      </AiContentToolbar>
    );
  }

  return (
    <Tag {...commonProps}>{initialValue}</Tag>
  );
}
