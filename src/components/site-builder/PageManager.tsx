'use client';

import { useSiteBuilder } from '@/hooks/useSiteBuilder';
import { Button } from '@/components/ui/button';
import { File, MoreVertical, PlusCircle, Trash, Edit } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Input } from '../ui/input';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function PageManager() {
  const { pages, activePageId, setActivePageId, addPage, updatePageName, deletePage } = useSiteBuilder();
  const [editingPageId, setEditingPageId] = useState<string | null>(null);
  const [newName, setNewName] = useState('');

  const handleAddPage = () => {
    const newPageName = prompt('Enter new page name:');
    if (newPageName && newPageName.trim()) {
      addPage(newPageName.trim());
    }
  };
  
  const handleRename = (id: string, currentName: string) => {
    setEditingPageId(id);
    setNewName(currentName);
  }

  const handleSaveRename = (id: string) => {
    if (newName.trim()) {
      updatePageName(id, newName.trim());
    }
    setEditingPageId(null);
    setNewName('');
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, id: string) => {
    if (event.key === 'Enter') {
      handleSaveRename(id);
    } else if (event.key === 'Escape') {
      setEditingPageId(null);
      setNewName('');
    }
  }

  return (
    <div className="flex flex-col gap-1 p-2">
      <p className="px-2 text-xs font-semibold text-muted-foreground">PAGES</p>
      {pages.map((page) => (
        <div key={page.id} className={cn(
          "group flex items-center rounded-md pr-2 transition-colors",
          activePageId === page.id && 'bg-sidebar-accent text-sidebar-accent-foreground'
          )}>
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start gap-2 flex-grow h-8 text-sm",
              activePageId === page.id && 'bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent/90'
            )}
            onClick={() => setActivePageId(page.id)}
          >
            <File className="h-4 w-4" />
            {editingPageId === page.id ? (
               <Input 
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, page.id)}
                onBlur={() => handleSaveRename(page.id)}
                autoFocus
                className="h-7 text-sm"
              />
            ) : (
              <span className="truncate">{page.name}</span>
            )}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-7 w-7 shrink-0 opacity-0 group-hover:opacity-100 data-[state=open]:opacity-100">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => handleRename(page.id, page.name)}>
                <Edit className="mr-2 h-4 w-4" />
                Rename
              </DropdownMenuItem>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()} disabled={pages.length <= 1} className="text-destructive focus:text-destructive">
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                    </DropdownMenuItem>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the page "{page.name}".
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => deletePage(page.id)} className="bg-destructive hover:bg-destructive/90">Delete</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ))}
      <Button variant="ghost" className="mt-2 justify-start gap-2 text-sm h-8" onClick={handleAddPage}>
        <PlusCircle className="h-4 w-4" />
        Add New Page
      </Button>
    </div>
  );
}
