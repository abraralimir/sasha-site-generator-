'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { WebsitePage, WebsiteComponent } from '@/lib/types';
import { initialSiteData } from '@/lib/initial-site-data';
import { set } from 'lodash';

interface SiteBuilderContextType {
  pages: WebsitePage[];
  activePageId: string;
  setActivePageId: (id: string) => void;
  addPage: (name: string) => void;
  updatePageName: (id: string, newName: string) => void;
  deletePage: (id: string) => void;
  activePage: WebsitePage | undefined;
  addComponent: (pageId: string, type: 'Header' | 'Hero' | 'FeatureGrid' | 'CallToAction' | 'Footer') => void;
  updateComponentContent: (pageId: string, componentId: string, field: string, value: any) => void;
  deleteComponent: (pageId: string, componentId: string) => void;
  setComponents: (pageId: string, components: WebsiteComponent[]) => void;
  isEditMode: boolean;
  setIsEditMode: (isEditing: boolean) => void;
}

const SiteBuilderContext = createContext<SiteBuilderContextType | undefined>(undefined);

export const SiteBuilderProvider = ({ children }: { children: ReactNode }) => {
  const [pages, setPages] = useState<WebsitePage[]>(initialSiteData.pages);
  const [activePageId, setActivePageId] = useState<string>(initialSiteData.pages[0]?.id || '');
  const [isEditMode, setIsEditMode] = useState(true);

  const addPage = (name: string) => {
    const newPage: WebsitePage = {
      id: `page-${Date.now()}`,
      name,
      slug: name.toLowerCase().replace(/\s+/g, '-'),
      components: [],
    };
    setPages([...pages, newPage]);
    setActivePageId(newPage.id);
  };

  const updatePageName = (id: string, newName: string) => {
    setPages(
      pages.map((p) =>
        p.id === id ? { ...p, name: newName, slug: newName.toLowerCase().replace(/\s+/g, '-') } : p
      )
    );
  };
  
  const deletePage = (id: string) => {
    if (pages.length <= 1) {
      alert("You cannot delete the last page.");
      return;
    }
    const newPages = pages.filter((p) => p.id !== id);
    setPages(newPages);
    if (activePageId === id) {
      setActivePageId(newPages[0].id);
    }
  };

  const addComponent = (pageId: string, type: 'Header' | 'Hero' | 'FeatureGrid' | 'CallToAction' | 'Footer') => {
    const pageIndex = pages.findIndex(p => p.id === pageId);
    if (pageIndex === -1) return;
    
    const newComponent: WebsiteComponent = {
      id: `comp-${Date.now()}`,
      type,
      content: initialSiteData.defaultComponentContent[type],
    };

    const updatedPages = [...pages];
    updatedPages[pageIndex].components.push(newComponent);
    setPages(updatedPages);
  };

  const updateComponentContent = (pageId: string, componentId: string, field: string, value: any) => {
    setPages(pages => {
      const newPages = JSON.parse(JSON.stringify(pages));
      const page = newPages.find((p: WebsitePage) => p.id === pageId);
      if (page) {
        const component = page.components.find((c: WebsiteComponent) => c.id === componentId);
        if (component) {
          set(component, `content.${field}`, value);
        }
      }
      return newPages;
    });
  };

  const deleteComponent = (pageId: string, componentId: string) => {
    setPages(pages.map(p => {
        if (p.id === pageId) {
            return {
                ...p,
                components: p.components.filter(c => c.id !== componentId)
            };
        }
        return p;
    }));
  };

  const setComponents = (pageId: string, components: WebsiteComponent[]) => {
      setPages(pages.map(p => p.id === pageId ? {...p, components} : p));
  }
  
  const activePage = pages.find((p) => p.id === activePageId);

  return (
    <SiteBuilderContext.Provider
      value={{
        pages,
        activePageId,
        setActivePageId,
        addPage,
        updatePageName,
        deletePage,
        activePage,
        addComponent,
        updateComponentContent,
        deleteComponent,
        setComponents,
        isEditMode,
        setIsEditMode,
      }}
    >
      {children}
    </SiteBuilderContext.Provider>
  );
};

export const useSiteBuilder = () => {
  const context = useContext(SiteBuilderContext);
  if (context === undefined) {
    throw new Error('useSiteBuilder must be used within a SiteBuilderProvider');
  }
  return context;
};
