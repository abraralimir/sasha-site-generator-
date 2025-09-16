'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import EditableText from '../site-builder/EditableText';
import type { WebsiteComponent } from '@/lib/types';
import EditableImage from '../site-builder/EditableImage';

export default function FeatureGrid(props: WebsiteComponent) {
  const { id, type, content } = props;
  const features = content.features || [];

  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            <EditableText componentId={id} componentType={type} field="headline" fieldDescription="Feature grid headline" initialValue={content.headline} />
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            <EditableText componentId={id} componentType={type} field="subheading" fieldDescription="Feature grid subheading" initialValue={content.subheading} as="span" />
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature: any, index: number) => {
             return (
                <Card key={feature.id} className="text-center">
                    <CardHeader>
                    {feature.image && (
                        <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                            <EditableImage
                                componentId={id}
                                field={`features[${index}].image`}
                                initialValue={feature.image}
                                width={80}
                                height={80}
                                className="rounded-full object-cover"
                             />
                        </div>
                    )}
                    <CardTitle className="font-headline">
                        <EditableText componentId={id} componentType={type} field={`features[${index}].title`} fieldDescription={`Title for feature #${index + 1}`} initialValue={feature.title} as="h3" />
                    </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        <EditableText componentId={id} componentType={type} field={`features[${index}].description`} fieldDescription={`Description for feature #${index + 1}`} initialValue={feature.description} as="p" />
                    </CardContent>
                </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}
