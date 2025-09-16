'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import type { WebsitePage, WebsiteComponent } from '@/lib/types';
import { initialSiteData } from '@/lib/initial-site-data';
import { set, cloneDeep } from 'lodash';

interface SiteBuilderContextType {
  pages: WebsitePage[];
  setPages: (pages: WebsitePage[]) => void;
  activePageId: string;
  setActivePageId: (id: string) => void;
  addPage: (pageOrName: WebsitePage | string) => void;
  updatePageName: (id: string, newName: string) => void;
  deletePage: (id: string) => void;
  activePage: WebsitePage | undefined;
  addComponent: (pageId: string, type: 'Header' | 'Hero' | 'FeatureGrid' | 'CallToAction' | 'Footer' | 'Article' | 'Scene', content?: Record<string, any>) => void;
  updateComponentContent: (pageId: string, componentId: string, field: string, value: any) => void;
  deleteComponent: (pageId: string, componentId: string) => void;
  setComponents: (pageId: string, components: WebsiteComponent[]) => void;
  isEditMode: boolean;
  setIsEditMode: (isEditing: boolean) => void;
  isPreview: boolean;
  setIsPreview: (isPreviewing: boolean) => void;
  isChatbotOpen: boolean;
  setIsChatbotOpen: (isOpen: boolean) => void;
}

const SiteBuilderContext = createContext<SiteBuilderContextType | undefined>(undefined);

// Debounce function
function debounce<F extends (...args: any[]) => void>(func: F, waitFor: number) {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<F>): void => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), waitFor);
  };
}


export const SiteBuilderProvider = ({ children }: { children: ReactNode }) => {
  const [pages, setPages] = useState<WebsitePage[]>([]);
  const [activePageId, setActivePageId] = useState<string>('');
  const [isEditMode, setIsEditMode] = useState(true);
  const [isPreview, setIsPreview] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load from localStorage only on the client side
    const savedSite = localStorage.getItem('siteData');
    let loadedPages: WebsitePage[];
    if (savedSite) {
      try {
        const parsedSite = JSON.parse(savedSite);
        if (parsedSite.pages && parsedSite.pages.length > 0) {
          loadedPages = parsedSite.pages;
        } else {
          loadedPages = cloneDeep(initialSiteData.pages);
        }
      } catch (e) {
        console.error("Failed to parse site data from localStorage", e);
        loadedPages = cloneDeep(initialSiteData.pages);
      }
    } else {
      loadedPages = cloneDeep(initialSiteData.pages);
    }
    setPages(loadedPages);
    setActivePageId(loadedPages[0]?.id || '');
    setIsLoaded(true);
  }, []);

  const saveToLocalStorage = (newPages: WebsitePage[]) => {
      if (typeof window !== 'undefined' && isLoaded) {
        const siteData = { pages: newPages };
        localStorage.setItem('siteData', JSON.stringify(siteData));
      }
  }

  const debouncedSave = React.useCallback(debounce(saveToLocalStorage, 500), [isLoaded]);

  const handleSetPages = (newPages: WebsitePage[]) => {
    setPages(newPages);
    debouncedSave(newPages);
  }

  const addPage = (pageOrName: WebsitePage | string) => {
    let newPage: WebsitePage;
    if (typeof pageOrName === 'string') {
        const slug = `/${pageOrName.toLowerCase().replace(/\s+/g, '-')}`;
        newPage = {
            id: `page-${Date.now()}`,
            name: pageOrName,
            slug: slug,
            components: [
                { id: `comp-header-${Date.now()}`, type: 'Header', content: cloneDeep(initialSiteData.defaultComponentContent.Header) },
                { id: `comp-footer-${Date.now()}`, type: 'Footer', content: cloneDeep(initialSiteData.defaultComponentContent.Footer) },
            ],
        };
    } else {
        newPage = pageOrName;
    }
    
    const newPages = [...pages, newPage];
    setPages(newPages); // Eagerly update UI
    setActivePageId(newPage.id);
    localStorage.setItem('siteData', JSON.stringify({ pages: newPages })); // Save immediately
  };

  const updatePageName = (id: string, newName: string) => {
    const newPages = pages.map((p) =>
        p.id === id ? { ...p, name: newName, slug: `/${newName.toLowerCase().replace(/\s+/g, '-')}` } : p
      );
    handleSetPages(newPages);
  };
  
  const deletePage = (id: string) => {
    if (pages.length <= 1) {
      alert("You cannot delete the last page.");
      return;
    }
    const newPages = pages.filter((p) => p.id !== id);
    setPages(newPages); // Eagerly update UI
    localStorage.setItem('siteData', JSON.stringify({ pages: newPages })); // Save immediately on delete

    if (activePageId === id) {
      setActivePageId(newPages[0].id);
    }
  };

  const addComponent = (pageId: string, type: 'Header' | 'Hero' | 'FeatureGrid' | 'CallToAction' | 'Footer' | 'Article' | 'Scene', content?: Record<string, any>) => {
    if (!pageId) return;
    const pageIndex = pages.findIndex(p => p.id === pageId);
    if (pageIndex === -1) return;
    
    const newComponent: WebsiteComponent = {
      id: `comp-${type}-${Date.now()}`,
      type,
      content: content || cloneDeep(initialSiteData.defaultComponentContent[type] || {}),
    };

    const updatedPages = cloneDeep(pages);
    updatedPages[pageIndex].components.push(newComponent);
    handleSetPages(updatedPages);
  };

  const updateComponentContent = (pageId: string, componentId: string, field: string, value: any) => {
     if (!pageId) return;
     const newPages = cloneDeep(pages);
     const page = newPages.find((p: WebsitePage) => p.id === pageId);
     if (page) {
       const component = page.components.find((c: WebsiteComponent) => c.id === componentId);
       if (component) {
         set(component, `content.${field}`, value);
         handleSetPages(newPages);
       }
     }
  };

  const deleteComponent = (pageId: string, componentId: string) => {
    if (!pageId) return;
    const newPages = pages.map(p => {
        if (p.id === pageId) {
            return {
                ...p,
                components: p.components.filter(c => c.id !== componentId)
            };
        }
        return p;
    });
    handleSetPages(newPages);
  };

  const setComponents = (pageId: string, components: WebsiteComponent[]) => {
      if (!pageId) return;
      const newPages = pages.map(p => p.id === pageId ? {...p, components} : p);
      handleSetPages(newPages);
  }
  
  const activePage = pages.find((p) => p.id === activePageId);

  useEffect(() => {
    if(isPreview) {
      setIsEditMode(false);
    }
  }, [isPreview]);

  if (!isLoaded) {
      return React.createElement('div', { className: 'flex h-screen w-full items-center justify-center bg-background' }, 'Loading Editor...');
  }

  const contextValue: SiteBuilderContextType = {
    pages,
    setPages: handleSetPages,
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
    isPreview,
    setIsPreview,
    isChatbotOpen,
    setIsChatbotOpen,
  };

  return React.createElement(SiteBuilderContext.Provider, { value: contextValue }, children);
};

export const useSiteBuilder = () => {
  const context = useContext(SiteBuilderContext);
  if (context === undefined) {
    throw new Error('useSiteBuilder must be used within a SiteBuilderProvider');
  }
  return context;
};
