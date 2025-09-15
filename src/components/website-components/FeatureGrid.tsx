'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import EditableText from '../site-builder/EditableText';
import type { WebsiteComponent } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function FeatureGrid(props: WebsiteComponent) {
  const { id, content } = props;
  const features = content.features || [];
  
  const getImage = (featureId: string) => {
    const imageMap: { [key: string]: string } = {
      'feature-1': 'feature-1',
      'feature-2': 'feature-2',
      'feature-3': 'feature-3',
    };
    return PlaceHolderImages.find(p => p.id === imageMap[featureId]);
  };

  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            <EditableText componentId={id} field="headline" initialValue={content.headline} />
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            <EditableText componentId={id} field="subheading" initialValue={content.subheading} as="span" />
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature: any, index: number) => {
             const featureImage = getImage(feature.id);
             return (
                <Card key={feature.id} className="text-center">
                    <CardHeader>
                    {featureImage && (
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                            <Image
                                src={featureImage.imageUrl}
                                alt={featureImage.description}
                                width={40}
                                height={40}
                                className="rounded-full"
                                data-ai-hint={featureImage.imageHint}
                             />
                        </div>
                    )}
                    <CardTitle className="font-headline">
                        <EditableText componentId={id} field={`features[${index}].title`} initialValue={feature.title} as="h3" />
                    </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        <EditableText componentId={id} field={`features[${index}].description`} initialValue={feature.description} as="p" />
                    </CardContent>
                </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}
