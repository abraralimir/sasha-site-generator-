'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Wand2 } from 'lucide-react';
import { generateThemeCss } from '@/ai/flows/generate-theme-css';

export default function ThemeGenerator() {
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!description) return;
    setIsLoading(true);

    try {
      const result = await generateThemeCss({ themeDescription: description });
      
      // Create a style element and append it to the head
      const styleId = 'ai-generated-theme';
      let styleElement = document.getElementById(styleId) as HTMLStyleElement | null;
      if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = styleId;
        document.head.appendChild(styleElement);
      }
      styleElement.innerHTML = result.themeCss;

    } catch (error) {
      console.error('Error generating theme:', error);
      alert('An error occurred while generating the theme.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4 p-4">
      <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">Describe your desired theme</p>
          <Textarea
              placeholder="e.g., a dark, futuristic theme for a tech startup..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
          />
      </div>
      <Button onClick={handleGenerate} disabled={isLoading || !description} className="w-full">
          <Wand2 className="mr-2 h-4 w-4" />
          {isLoading ? 'Generating...' : 'Apply AI Theme'}
      </Button>
    </div>
  );
}
