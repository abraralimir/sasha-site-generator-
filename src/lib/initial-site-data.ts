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
  },
  FeatureGrid: {
    headline: 'Powerful Features',
    subheading: 'Everything you need to launch your online presence.',
    features: [
      { id: 'feature-1', title: 'AI Content Generation', description: 'Let AI write compelling content for your site.' },
      { id: 'feature-2', title: 'Drag & Drop Editor', description: 'Easily customize your site layout and design.' },
      { id: 'feature-3', title: 'Deploy Anywhere', description: 'Download your site and host it on any platform.' },
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
