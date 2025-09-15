'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import EditableText from '../site-builder/EditableText';
import type { WebsiteComponent } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function CallToAction(props: WebsiteComponent) {
  const { id, content } = props;
  const ctaImage = PlaceHolderImages.find(p => p.id === 'cta-image');

  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="items-center rounded-lg bg-card p-8 shadow-lg md:grid md:grid-cols-2 md:gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl">
              <EditableText componentId={id} field="headline" initialValue={content.headline} />
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              <EditableText componentId={id} field="subheading" initialValue={content.subheading} as="span" />
            </p>
            <div className="mt-6">
              <Button size="lg" className="font-semibold">
                <EditableText componentId={id} field="buttonText" initialValue={content.buttonText} as="span" />
              </Button>
            </div>
          </div>
          <div className="mt-8 flex justify-center md:mt-0">
            {ctaImage && (
              <Image
                src={ctaImage.imageUrl}
                alt={ctaImage.description}
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-md"
                data-ai-hint={ctaImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
