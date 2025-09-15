export type WebsiteComponent = {
  id: string;
  type: 'Header' | 'Hero' | 'FeatureGrid' | 'CallToAction' | 'Footer';
  content: Record<string, any>;
};

export type WebsitePage = {
  id: string;
  name: string;
  slug: string;
  components: WebsiteComponent[];
};
