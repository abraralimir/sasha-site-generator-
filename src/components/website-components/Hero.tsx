'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import EditableText from '../site-builder/EditableText';
import type { WebsiteComponent } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero(props: WebsiteComponent) {
  const { id, type, content } = props;
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative h-[60vh] min-h-[400px] w-full text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <div className="container px-4">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl">
            <EditableText componentId={id} componentType={type} field="headline" fieldDescription="Hero headline" initialValue={content.headline} as="span" />
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-foreground/80 md:text-xl">
             <EditableText componentId={id} componentType={type} field="subheading" fieldDescription="Hero subheading" initialValue={content.subheading} as="span" />
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" className="font-semibold">
              <EditableText componentId={id} componentType={type} field="button1Text" fieldDescription="Primary hero button" initialValue={content.button1Text} as="span" />
            </Button>
            <Button size="lg" variant="secondary" className="font-semibold">
              <EditableText componentId={id} componentType={type} field="button2Text" fieldDescription="Secondary hero button" initialValue={content.button2Text} as="span" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
