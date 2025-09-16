'use client';

import React from 'react';
import { useSiteBuilder } from '@/hooks/useSiteBuilder';
import Header from '../website-components/Header';
import Hero from '../website-components/Hero';
import FeatureGrid from '../website-components/FeatureGrid';
import CallToAction from '../website-components/CallToAction';
import Footer from '../website-components/Footer';
import Article from '../website-components/Article';
import type { WebsiteComponent } from '@/lib/types';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Trash } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

const componentMap = {
  Header,
  Hero,
  FeatureGrid,
  CallToAction,
  Footer,
  Article,
};

function SortableItem({ component }: { component: WebsiteComponent }) {
  const { isEditMode, deleteComponent, activePageId } = useSiteBuilder();
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: component.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : 1,
  };
  
  const ComponentToRender = componentMap[component.type];

  if (!ComponentToRender) {
    return (
      <div className="bg-red-100 text-red-800 p-4 rounded-md">
        Unknown component type: {component.type}
      </div>
    );
  }

  return (
    <div ref={setNodeRef} style={style} className="relative group">
      {isEditMode && (
         <div className="absolute top-1/2 -left-8 -translate-y-1/2 flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <Button variant="ghost" size="icon" className="cursor-grab h-8 w-8" {...attributes} {...listeners}>
              <GripVertical className="h-5 w-5 text-muted-foreground" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => deleteComponent(activePageId, component.id)}>
              <Trash className="h-4 w-4 text-destructive" />
            </Button>
        </div>
      )}
      <ComponentToRender {...component} />
    </div>
  );
}


export default function WebsitePreview() {
  const { activePage, isEditMode, setComponents, isPreview } = useSiteBuilder();

  if (!activePage) {
    return (
      <div className="flex h-full items-center justify-center bg-muted/20">
        <p className="text-muted-foreground">Select a page to view its content</p>
      </div>
    );
  }
  
  const handleDragEnd = (event: any) => {
    const {active, over} = event;
    
    if (active.id !== over.id) {
        const oldIndex = activePage.components.findIndex((c) => c.id === active.id);
        const newIndex = activePage.components.findIndex((c) => c.id === over.id);
        const newComponents = arrayMove(activePage.components, oldIndex, newIndex);
        setComponents(activePage.id, newComponents);
    }
  }

  const componentIds = activePage.components.map(c => c.id);

  const previewContent = (
    <div className="bg-background">
        {activePage.components.map((component) => (
             <SortableItem key={component.id} component={component} />
        ))}
    </div>
  );

  return (
    <main className={cn(
        "h-full bg-muted/40",
        !isPreview && "p-4"
      )}>
      <div className={cn(
          "mx-auto",
          !isPreview && "max-w-7xl shadow-lg ring-1 ring-border rounded-md overflow-hidden"
        )}>
        {isEditMode ? (
            <DndContext
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext items={componentIds} strategy={verticalListSortingStrategy}>
                    {previewContent}
                </SortableContext>
            </DndContext>
        ) : (
            <>
              {previewContent}
            </>
        )}
       </div>
    </main>
  );
}
