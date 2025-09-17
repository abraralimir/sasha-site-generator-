export type WebsiteComponent = {
  id: string;
  type: 'Header' | 'Hero' | 'FeatureGrid' | 'CallToAction' | 'Footer' | 'Article' | 'Scene';
  content: Record<string, any>;
};

export type WebsitePage = {
  id: string;
  name: string;
  slug: string;
  components: WebsiteComponent[];
};

export type ImageContent = {
  src: string;
  alt: string;
  imageHint?: string;
}
