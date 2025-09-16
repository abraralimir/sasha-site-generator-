
import type { WebsitePage } from './types';

export interface WebsiteTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  imageHint: string;
  pages: WebsitePage[];
}

const templates: WebsiteTemplate[] = [
  {
    id: 'template-blog',
    name: 'Modern Blog',
    description: 'A clean, modern, and content-focused blog template.',
    category: 'Blog',
    imageUrl: 'https://picsum.photos/seed/template-blog/800/600',
    imageHint: 'minimalist workspace',
    pages: [
      {
        id: 'page-home',
        name: 'Home',
        slug: '/',
        components: [
          {
            id: 'comp-header-1',
            type: 'Header',
            content: {
              brandName: 'My Awesome Blog',
              navItems: [
                { label: 'Home' },
                { label: 'About' },
                { label: 'Contact' },
              ],
              buttonText: 'Subscribe',
            },
          },
          {
            id: 'comp-hero-1',
            type: 'Hero',
            content: {
              headline: 'Thoughts, Stories & Ideas',
              subheading: 'Welcome to my corner of the internet. Here, I share my musings on tech, design, and life.',
              button1Text: 'Read Latest',
              button2Text: 'About Me',
            },
          },
          {
            id: 'comp-footer-1',
            type: 'Footer',
            content: {
              brandName: 'My Awesome Blog',
              copyright: `© ${new Date().getFullYear()} My Awesome Blog. All rights reserved.`,
            },
          },
        ],
      },
    ],
  },
  {
    id: 'template-ecommerce',
    name: 'E-commerce Store',
    description: 'A stylish and professional template for online shops.',
    category: 'Shop',
    imageUrl: 'https://picsum.photos/seed/template-shop/800/600',
    imageHint: 'modern storefront',
    pages: [
      {
        id: 'page-home',
        name: 'Home',
        slug: '/',
        components: [
          {
            id: 'comp-header-1',
            type: 'Header',
            content: {
              brandName: 'Urban Threads',
              navItems: [
                { label: 'Shop' },
                { label: 'New Arrivals' },
                { label: 'Collections' },
              ],
              buttonText: 'My Cart',
            },
          },
           {
            id: 'comp-hero-1',
            type: 'Hero',
            content: {
              headline: 'Style That Defines You',
              subheading: 'Discover our new collection of modern apparel. Free shipping on orders over $50.',
              button1Text: 'Shop Now',
              button2Text: 'View Collections',
            },
          },
          {
            id: 'comp-features-1',
            type: 'FeatureGrid',
            content: {
                headline: 'Featured Products',
                subheading: 'Check out our best-selling items this week.',
                features: [
                  { id: 'feature-1', title: 'Classic Tee', description: 'A comfortable and stylish tee for everyday wear.' },
                  { id: 'feature-2', title: 'Denim Jacket', description: 'The perfect layering piece for any season.' },
                  { id: 'feature-3', title: 'Leather Boots', description: 'Handcrafted boots that blend style and durability.' },
                ],
            },
          },
          {
            id: 'comp-cta-1',
            type: 'CallToAction',
            content: {
              headline: 'Join Our Newsletter',
              subheading: 'Get 10% off your first order and stay updated on new arrivals.',
              buttonText: 'Subscribe',
            },
          },
          {
            id: 'comp-footer-1',
            type: 'Footer',
            content: {
              brandName: 'Urban Threads',
              copyright: `© ${new Date().getFullYear()} Urban Threads. All rights reserved.`,
            },
          },
        ],
      },
    ],
  },
  {
    id: 'template-restaurant',
    name: 'Restaurant Page',
    description: 'A delicious and inviting template for restaurants and cafes.',
    category: 'Restaurant',
    imageUrl: 'https://picsum.photos/seed/template-resto/800/600',
    imageHint: 'gourmet food plate',
    pages: [
       {
        id: 'page-home',
        name: 'Home',
        slug: '/',
        components: [
          {
            id: 'comp-header-1',
            type: 'Header',
            content: {
              brandName: 'The Golden Spoon',
              navItems: [
                { label: 'Menu' },
                { label: 'Reservations' },
                { label: 'Contact' },
              ],
              buttonText: 'Order Online',
            },
          },
           {
            id: 'comp-hero-1',
            type: 'Hero',
            content: {
              headline: 'Experience Culinary Excellence',
              subheading: 'Authentic flavors, locally sourced ingredients. Book your table tonight.',
              button1Text: 'Make a Reservation',
              button2Text: 'View Menu',
            },
          },
          {
            id: 'comp-footer-1',
            type: 'Footer',
            content: {
              brandName: 'The Golden Spoon',
              copyright: `© ${new Date().getFullYear()} The Golden Spoon. All rights reserved.`,
            },
          },
        ],
      }
    ]
  }
];

export default templates;
