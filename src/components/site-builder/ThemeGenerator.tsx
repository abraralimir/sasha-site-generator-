'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Wand2 } from 'lucide-react';
import { generateWebsiteTheme } from '@/ai/flows/generate-website-theme';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '../ui/scroll-area';

export default function ThemeGenerator() {
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleGenerate = async () => {
    if (!description) return;
    setIsLoading(true);
    setGeneratedCode('');

    try {
      const result = await generateWebsiteTheme({ themeDescription: description });
      setGeneratedCode(result.themeCode);
      setIsDialogOpen(true);
    } catch (error) {
      console.error('Error generating theme:', error);
      setGeneratedCode('// An error occurred while generating the theme.');
      setIsDialogOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4 p-4">
       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
            {isLoading ? 'Generating...' : 'Generate Theme Code'}
        </Button>
        <DialogContent className="max-w-4xl">
            <DialogHeader>
                <DialogTitle>Generated Theme Code</DialogTitle>
                <DialogDescription>
                    Here is the generated Next.js code for your theme. Copy and integrate it into your project.
                </DialogDescription>
            </DialogHeader>
            <ScrollArea className="h-[60vh] rounded-md border p-4">
                <pre className="text-sm font-code">
                    <code>{generatedCode}</code>
                </pre>
            </ScrollArea>
        </DialogContent>
       </Dialog>
    </div>
  );
}
