'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { useSiteBuilder } from '@/hooks/useSiteBuilder';
import { cn } from '@/lib/utils';
import { Upload } from 'lucide-react';
import { Button } from '../ui/button';

interface EditableImageProps {
  componentId: string;
  field: string;
  initialValue: {
    src: string;
    alt: string;
    imageHint?: string;
  };
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
}

export default function EditableImage({
  componentId,
  field,
  initialValue,
  className,
  ...props
}: EditableImageProps) {
  const { isEditMode, updateComponentContent, activePageId } = useSiteBuilder();
  const [currentSrc, setCurrentSrc] = useState(initialValue.src);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setCurrentSrc(initialValue.src);
  }, [initialValue.src]);

  const handleImageClick = () => {
    if (isEditMode) {
      fileInputRef.current?.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && activePageId) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newSrc = e.target?.result as string;
        setCurrentSrc(newSrc);
        updateComponentContent(activePageId, componentId, `${field}.src`, newSrc);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={cn('relative group', isEditMode && 'cursor-pointer')}
      onClick={handleImageClick}
    >
      <Image
        key={currentSrc}
        src={currentSrc}
        alt={initialValue.alt}
        width={props.fill ? undefined : props.width}
        height={props.fill ? undefined : props.height}
        fill={props.fill}
        className={cn(className, isEditMode && 'group-hover:opacity-70 transition-opacity')}
        priority={props.priority}
        data-ai-hint={initialValue.imageHint}
      />
      {isEditMode && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="sm" variant="secondary">
            <Upload className="mr-2 h-4 w-4" />
            Change Image
          </Button>
        </div>
      )}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
  );
}
