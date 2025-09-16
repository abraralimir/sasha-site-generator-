'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader, Wand2 } from 'lucide-react';
import { useSiteBuilder, SiteBuilderProvider } from '@/hooks/useSiteBuilder';
import { generateFullWebsite } from '@/ai/flows/generate-full-website';

const steps = [
  { id: 'name', title: 'What would you like to name your site?', type: 'input' },
  { id: 'description', title: 'Describe the website you want to create.', type: 'textarea' },
  { id: 'generating', title: 'Generating your website...', type: 'loader' },
];

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

function GeneratePageContent() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({ name: '', description: '' });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { setPages, setActivePageId } = useSiteBuilder();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = async () => {
    if (currentStep < steps.length - 2) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsLoading(true);
      setCurrentStep(steps.findIndex(s => s.id === 'generating'));

      try {
        const result = await generateFullWebsite({
          siteName: formData.name,
          description: formData.description,
        });
        
        setPages(result.pages);
        setActivePageId(result.pages[0].id);

        // This is a bit of a hack to make sure the local storage is updated before navigating
        setTimeout(() => {
          router.push('/editor');
        }, 500);

      } catch (error) {
        console.error('Failed to generate website:', error);
        alert('There was an error generating your website. Please try again.');
        setCurrentStep(0);
        setIsLoading(false);
      }
    }
  };

  const renderStepContent = () => {
    const step = steps[currentStep];
    switch (step.type) {
      case 'input':
        return (
          <Input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="e.g., 'My Awesome Portfolio'"
            className="w-full max-w-lg text-lg p-6 text-center"
            autoFocus
          />
        );
      case 'textarea':
        return (
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="e.g., 'A modern portfolio for a photographer, with a clean design, a gallery, and a contact page.'"
            className="w-full max-w-lg text-lg p-6"
            rows={5}
            autoFocus
          />
        );
      case 'loader':
        return (
          <div className="flex flex-col items-center gap-4 text-center">
            <Loader className="h-12 w-12 animate-spin" />
            <p className="text-lg text-neutral-300">The AI is crafting your masterpiece. This might take a moment...</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dark flex h-screen w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom,_#000000,_#111111)] text-white p-4">
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
          <div className="w-full max-w-lg">
            {renderStepContent()}
          </div>
          {!isLoading && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <Button
                size="lg"
                onClick={handleNext}
                disabled={(currentStep === 0 && !formData.name) || (currentStep === 1 && !formData.description)}
                className="font-semibold bg-white text-black hover:bg-neutral-200"
              >
                {currentStep === steps.length - 2 ? 'Generate Website' : 'Continue'}
                <Wand2 className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
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
