'use client';

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useSiteBuilder } from '@/hooks/useSiteBuilder';
import { AiContentToolbar } from './AiContentToolbar';

interface EditableTextProps {
  componentId: string;
  componentType: string;
  field: string;
  fieldDescription: string;
  initialValue: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
}

export default function EditableText({
  componentId,
  componentType,
  field,
  fieldDescription,
  initialValue,
  className,
  as: Tag = 'div',
}: EditableTextProps) {
  const { isEditMode, updateComponentContent, activePageId } = useSiteBuilder();
  const ref = useRef<HTMLElement>(null);
  const [currentValue, setCurrentValue] = useState(initialValue);

  useEffect(() => {
    setCurrentValue(initialValue);
    if (ref.current && ref.current.textContent !== initialValue) {
      ref.current.textContent = initialValue;
    }
  }, [initialValue]);

  const handleBlur = () => {
    if (ref.current && activePageId) {
      const newValue = ref.current.textContent || '';
      if (newValue !== initialValue) {
        updateComponentContent(activePageId, componentId, field, newValue);
      }
    }
  };
  
  const handleInput = (e: React.FormEvent<HTMLElement>) => {
    // This is to ensure the react state is also up-to-date, mainly for the AiContentToolbar
     if (ref.current) {
        setCurrentValue(ref.current.textContent || '');
     }
  };

  const commonProps = {
    className: cn(
      className,
      isEditMode && 'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm cursor-text'
    ),
    onBlur: isEditMode ? handleBlur : undefined,
    onInput: isEditMode ? handleInput : undefined,
    suppressContentEditableWarning: true,
  };
  
  if (isEditMode) {
    return (
      <AiContentToolbar 
        componentId={componentId}
        componentType={componentType}
        field={field}
        fieldDescription={fieldDescription}
        initialContent={currentValue}
      >
        <Tag
          ref={ref}
          contentEditable={isEditMode}
          dangerouslySetInnerHTML={{ __html: initialValue }}
          {...commonProps}
        />
      </AiContentToolbar>
    );
  }

  return (
    <Tag {...commonProps} dangerouslySetInnerHTML={{ __html: initialValue }} />
  );
}
