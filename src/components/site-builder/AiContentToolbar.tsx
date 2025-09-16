'use client';

import * as React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useSiteBuilder } from '@/hooks/useSiteBuilder';
import { Wand2 } from 'lucide-react';
import { modifyThemeContent } from '@/ai/flows/modify-theme-content';

interface AiContentToolbarProps {
  children: React.ReactNode;
  componentId: string;
  componentType: string;
  field: string;
  fieldDescription: string;
  initialContent: string;
}

export function AiContentToolbar({ children, componentId, componentType, field, fieldDescription, initialContent }: AiContentToolbarProps) {
  const { updateComponentContent, activePage } = useSiteBuilder();
  const [popoverOpen, setPopoverOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [suggestion, setSuggestion] = React.useState('');
  const [selectedText, setSelectedText] = React.useState('');
  const [currentContent, setCurrentContent] = React.useState(initialContent);

  React.useEffect(() => {
    setCurrentContent(initialContent);
  }, [initialContent]);

  const handleSelection = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().trim().length > 5) {
      setSelectedText(selection.toString());
      setPopoverOpen(true);
    } else {
      setPopoverOpen(false);
    }
  };
  
  const generateSuggestion = async () => {
    setIsLoading(true);
    setSuggestion('');
    try {
      const result = await modifyThemeContent({
        selectedContent: selectedText,
        theme: 'Modern and Professional', // This could be dynamic later
        pageContext: activePage?.name || 'Main page',
        componentContext: componentType,
        fieldDescription: fieldDescription,
      });
      setSuggestion(result.suggestedContent);
    } catch (error) {
      console.error('Error modifying content:', error);
      setSuggestion('Failed to get suggestion. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const applySuggestion = () => {
    if (!activePage) return;
    const newContent = currentContent.replace(selectedText, suggestion);
    updateComponentContent(activePage.id, componentId, field, newContent);
    setCurrentContent(newContent);
    setPopoverOpen(false);
    setSuggestion('');
    setSelectedText('');
  };

  return (
    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverTrigger asChild onMouseUp={handleSelection} onBlur={() => setTimeout(() => setPopoverOpen(false), 100)}>
        {children}
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Improve with AI</h4>
            <p className="text-sm text-muted-foreground">
              Selected: <span className="font-semibold italic">"{selectedText.length > 50 ? `${selectedText.substring(0, 50)}...` : selectedText}"</span>
            </p>
          </div>
          <Button onClick={generateSuggestion} disabled={isLoading}>
            <Wand2 className="mr-2 h-4 w-4" />
            {isLoading ? 'Generating...' : 'Generate Suggestion'}
          </Button>
          {suggestion && (
            <div className="space-y-2">
              <p className="text-sm font-medium">Suggestion:</p>
              <Textarea value={suggestion} onChange={(e) => setSuggestion(e.target.value)} rows={4} />
              <Button onClick={applySuggestion} className="w-full">Apply Suggestion</Button>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
