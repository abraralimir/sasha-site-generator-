
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
        id: 'page-home-blog',
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
              image: { src: 'https://picsum.photos/seed/template-blog-hero/1920/1080', alt: 'A clean desk setup', imageHint: 'minimalist desk'}
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
        id: 'page-home-ecomm',
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
              image: { src: 'https://picsum.photos/seed/template-ecom-hero/1920/1080', alt: 'Fashionable clothes on a rack', imageHint: 'clothing rack boutique'}
            },
          },
          {
            id: 'comp-features-1',
            type: 'FeatureGrid',
            content: {
                headline: 'Featured Products',
                subheading: 'Check out our best-selling items this week.',
                features: [
                  { id: 'feature-1', title: 'Classic Tee', description: 'A comfortable and stylish tee for everyday wear.', image: { src: 'https://picsum.photos/seed/ecom-f1/400/400', alt: 'T-shirt', imageHint: 'white t-shirt product'} },
                  { id: 'feature-2', title: 'Denim Jacket', description: 'The perfect layering piece for any season.', image: { src: 'https://picsum.photos/seed/ecom-f2/400/400', alt: 'Denim Jacket', imageHint: 'denim jacket model'} },
                  { id: 'feature-3', title: 'Leather Boots', description: 'Handcrafted boots that blend style and durability.', image: { src: 'https://picsum.photos/seed/ecom-f3/400/400', alt: 'Leather boots', imageHint: 'leather boots pair'} },
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
              image: { src: 'https://picsum.photos/seed/ecom-cta/600/400', alt: 'Person typing on a laptop', imageHint: 'email marketing laptop'}
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
        id: 'page-home-resto',
        name: 'Home',
        slug: '/',
        components: [
          {
            id: 'comp-header-resto-1',
            type: 'Header',
            content: {
              brandName: 'The Golden Spoon',
              navItems: [
                { label: 'Home' },
                { label: 'Menu' },
                { label: 'About' },
                { label: 'Contact' },
              ],
              buttonText: 'Reservations',
            },
          },
           {
            id: 'comp-hero-resto-1',
            type: 'Hero',
            content: {
              headline: 'Experience Culinary Excellence',
              subheading: 'Authentic flavors, locally sourced ingredients. Book your table tonight.',
              button1Text: 'Make a Reservation',
              button2Text: 'View Menu',
              image: { src: 'https://picsum.photos/seed/resto-hero/1920/1080', alt: 'Interior of a cozy restaurant', imageHint: 'restaurant interior dining'}
            },
          },
           {
            id: 'comp-cta-resto-1',
            type: 'CallToAction',
            content: {
              headline: 'An Unforgettable Dining Experience',
              subheading: 'Book your table online or give us a call. We look forward to serving you.',
              buttonText: 'Book a Table',
              image: { src: 'https://picsum.photos/seed/resto-cta/600/400', alt: 'Chef preparing a dish', imageHint: 'chef plating food'}
            },
          },
          {
            id: 'comp-footer-resto-1',
            type: 'Footer',
            content: {
              brandName: 'The Golden Spoon',
              copyright: `© ${new Date().getFullYear()} The Golden Spoon. All rights reserved.`,
            },
          },
        ],
      },
      {
        id: 'page-menu-resto',
        name: 'Menu',
        slug: '/menu',
        components: [
            {
                id: 'comp-header-resto-2',
                type: 'Header',
                content: {
                  brandName: 'The Golden Spoon',
                  navItems: [
                    { label: 'Home' },
                    { label: 'Menu' },
                    { label: 'About' },
                    { label: 'Contact' },
                  ],
                  buttonText: 'Reservations',
                },
            },
            {
                id: 'comp-features-resto-menu',
                type: 'FeatureGrid',
                content: {
                    headline: 'Our Menu',
                    subheading: 'Crafted with passion, from our kitchen to your table.',
                    features: [
                        { id: 'feature-1', title: 'Sizzling Steak', description: 'Perfectly grilled steak with a side of seasonal vegetables.', image: { src: 'https://picsum.photos/seed/resto-f1/400/400', alt: 'A sizzling steak', imageHint: 'grilled steak plate'} },
                        { id: 'feature-2', title: 'Seafood Pasta', description: 'A delightful mix of fresh seafood in a creamy white wine sauce.', image: { src: 'https://picsum.photos/seed/resto-f2/400/400', alt: 'A bowl of seafood pasta', imageHint: 'seafood pasta bowl'} },
                        { id: 'feature-3', title: 'Chocolate Lava Cake', description: 'A decadent dessert with a molten chocolate center.', image: { src: 'https://picsum.photos/seed/resto-f3/400/400', alt: 'Chocolate lava cake', imageHint: 'chocolate lava cake'} },
                    ],
                },
            },
            {
                id: 'comp-footer-resto-2',
                type: 'Footer',
                content: {
                  brandName: 'The Golden Spoon',
                  copyright: `© ${new Date().getFullYear()} The Golden Spoon. All rights reserved.`,
                },
            },
        ]
      },
      {
        id: 'page-about-resto',
        name: 'About',
        slug: '/about',
        components: [
            {
                id: 'comp-header-resto-3',
                type: 'Header',
                content: {
                  brandName: 'The Golden Spoon',
                  navItems: [
                    { label: 'Home' },
                    { label: 'Menu' },
                    { label: 'About' },
                    { label: 'Contact' },
                  ],
                  buttonText: 'Reservations',
                },
            },
            {
                id: 'comp-hero-resto-about',
                type: 'Hero',
                content: {
                    headline: 'Our Story',
                    subheading: 'Founded in 2010, The Golden Spoon has been a family-owned establishment dedicated to authentic cuisine and warm hospitality.',
                    button1Text: 'Meet the Team',
                    button2Text: 'Our Philosophy',
                    image: { src: 'https://picsum.photos/seed/resto-about/1920/1080', alt: 'The restaurant founders', imageHint: 'restaurant owner portrait'}
                }
            },
            {
                id: 'comp-footer-resto-3',
                type: 'Footer',
                content: {
                  brandName: 'The Golden Spoon',
                  copyright: `© ${new Date().getFullYear()} The Golden Spoon. All rights reserved.`,
                },
            },
        ]
      },
      {
        id: 'page-contact-resto',
        name: 'Contact',
        slug: '/contact',
        components: [
            {
                id: 'comp-header-resto-4',
                type: 'Header',
                content: {
                  brandName: 'The Golden Spoon',
                  navItems: [
                    { label: 'Home' },
                    { label: 'Menu' },
                    { label: 'About' },
                    { label: 'Contact' },
                  ],
                  buttonText: 'Reservations',
                },
            },
            {
                id: 'comp-cta-resto-contact',
                type: 'CallToAction',
                content: {
                    headline: 'Get In Touch',
                    subheading: 'We are located at 123 Culinary Lane, Foodie City. For reservations, please call (555) 123-4567 or use our online booking system.',
                    buttonText: 'Book Online',
                    image: { src: 'https://picsum.photos/seed/resto-contact/600/400', alt: 'A map showing location', imageHint: 'city map location'}
                },
            },
            {
                id: 'comp-footer-resto-4',
                type: 'Footer',
                content: {
                  brandName: 'The Golden Spoon',
                  copyright: `© ${new Date().getFullYear()} The Golden Spoon. All rights reserved.`,
                },
            },
        ]
      }
    ]
  }
];

export default templates;
