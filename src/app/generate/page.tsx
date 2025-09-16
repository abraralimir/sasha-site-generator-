
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader, Wand2, ArrowRight } from 'lucide-react';
import { useSiteBuilder, SiteBuilderProvider } from '@/hooks/useSiteBuilder';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import templates from '@/lib/templates';
import type { WebsiteTemplate } from '@/lib/templates';
import { set } from 'lodash';

const steps = [
  { id: 'name', title: 'What would you like to name your site?' },
  { id: 'template', title: 'Choose a starting point for your website' },
  { id: 'generating', title: 'Setting up your website...' },
];

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

function GeneratePageContent() {
  const [currentStep, setCurrentStep] = useState(0);
  const [siteName, setSiteName] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState<WebsiteTemplate | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { setPages, setActivePageId } = useSiteBuilder();

  const handleNext = () => {
    if (currentStep < steps.length - 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleTemplateSelect = (template: WebsiteTemplate) => {
    setSelectedTemplate(template);
    setIsLoading(true);
    setCurrentStep(steps.findIndex(s => s.id === 'generating'));

    // Apply the site name to the template content
    const updatedPages = template.pages.map(page => ({
      ...page,
      components: page.components.map(component => {
        const newComponent = { ...component, content: { ...component.content } };
        if (newComponent.content.brandName) {
           set(newComponent, 'content.brandName', siteName);
        }
         if (newComponent.content.copyright) {
           set(newComponent, 'content.copyright', `© ${new Date().getFullYear()} ${siteName}. All rights reserved.`);
        }
        return newComponent;
      })
    }));

    setPages(updatedPages);
    setActivePageId(updatedPages[0].id);

    // This is a bit of a hack to make sure the local storage is updated before navigating
    setTimeout(() => {
      router.push('/editor');
    }, 500);
  };
  
  const renderStepContent = () => {
    const step = steps[currentStep];
    switch (step.id) {
      case 'name':
        return (
          <div className="w-full max-w-lg flex flex-col items-center gap-8">
            <Input
              name="name"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              placeholder="e.g., 'My Awesome Site'"
              className="w-full max-w-lg text-lg p-6 text-center"
              autoFocus
            />
            <Button
              size="lg"
              onClick={handleNext}
              disabled={!siteName}
              className="font-semibold bg-white text-black hover:bg-neutral-200"
            >
              Continue <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        );
      case 'template':
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
                {templates.map(template => (
                    <Card key={template.id} className="cursor-pointer hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all" onClick={() => handleTemplateSelect(template)}>
                        <CardHeader>
                            <div className="aspect-[4/3] relative mb-4">
                                <Image src={template.imageUrl} alt={template.name} fill className="rounded-t-lg object-cover" data-ai-hint={template.imageHint} />
                            </div>
                            <CardTitle>{template.name}</CardTitle>
                            <CardDescription>{template.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <Button variant="outline" className="w-full">Select & Continue</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        );
      case 'generating':
        return (
          <div className="flex flex-col items-center gap-4 text-center">
            <Loader className="h-12 w-12 animate-spin" />
            <p className="text-lg text-neutral-300">Building your template. This might take a moment...</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dark min-h-screen w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom,_#000000,_#111111)] text-white p-8">
       <div className="flex flex-col items-center justify-center w-full">
            <AnimatePresence mode="wait">
                <motion.div
                key={currentStep}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center gap-8 w-full"
                >
                <h1 className="font-headline text-3xl md:text-5xl font-bold text-center max-w-4xl">
                    {steps[currentStep].title}
                </h1>
                <div className="mt-8">
                    {renderStepContent()}
                </div>
                </motion.div>
            </AnimatePresence>
        </div>
    </div>
  );
}

export default function GeneratePage() {
  return (
    <SiteBuilderProvider>
      <GeneratePageContent />
    </SiteBuilderProvider>
  );
}
