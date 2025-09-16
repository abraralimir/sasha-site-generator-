import type { WebsiteComponent, WebsitePage } from './types';

const defaultComponentContent: Record<string, Record<string, any>> = {
  Header: {
    brandName: 'Agentic SiteForge',
    navItems: [{ label: 'Home' }, { label: 'About' }, { label: 'Contact' }],
    buttonText: 'Get Started',
  },
  Hero: {
    headline: 'Create Your Website with AI',
    subheading: 'Build beautiful, professional websites in minutes. No coding required.',
    button1Text: 'Start Building',
    button2Text: 'Learn More',
    image: {
        src: 'https://picsum.photos/seed/hero/1920/1080',
        alt: 'Abstract background for hero section',
        imageHint: 'abstract background'
    }
  },
  FeatureGrid: {
    headline: 'Powerful Features',
    subheading: 'Everything you need to launch your online presence.',
    features: [
      { id: 'feature-1', title: 'AI Content Generation', description: 'Let AI write compelling content for your site.', image: { src: 'https://picsum.photos/seed/f1/200/200', alt: 'Icon for feature 1', imageHint: 'technology icon'} },
      { id: 'feature-2', title: 'Drag & Drop Editor', description: 'Easily customize your site layout and design.', image: { src: 'https://picsum.photos/seed/f2/200/200', alt: 'Icon for feature 2', imageHint: 'data icon'} },
      { id: 'feature-3', title: 'Deploy Anywhere', description: 'Download your site and host it on any platform.', image: { src: 'https://picsum.photos/seed/f3/200/200', alt: 'Icon for feature 3', imageHint: 'cloud icon'} },
    ],
  },
  Article: {
    title: 'My First Blog Post',
    article: 'This is the beginning of a great article. Start writing in markdown!'
  },
  CallToAction: {
    headline: 'Ready to Get Started?',
    subheading: 'Join thousands of creators building their dream sites with Agentic SiteForge.',
    buttonText: 'Sign Up Now',
    image: {
        src: 'https://picsum.photos/seed/cta/600/400',
        alt: 'Image for call to action section',
        imageHint: 'team collaboration'
    }
  },
  Footer: {
    brandName: 'Agentic SiteForge',
    copyright: `© ${new Date().getFullYear()} Agentic SiteForge. All rights reserved.`,
  },
};

const initialPages: WebsitePage[] = [
  {
    id: 'page-home',
    name: 'Home',
    slug: '/',
    components: [
      { id: 'comp-header-1', type: 'Header', content: defaultComponentContent.Header },
      { id: 'comp-hero-1', type: 'Hero', content: defaultComponentContent.Hero },
      { id: 'comp-features-1', type: 'FeatureGrid', content: defaultComponentContent.FeatureGrid },
      { id: 'comp-cta-1', type: 'CallToAction', content: defaultComponentContent.CallToAction },
      { id: 'comp-footer-1', type: 'Footer', content: defaultComponentContent.Footer },
    ],
  },
];

export const initialSiteData = {
  pages: initialPages,
  defaultComponentContent,
};
