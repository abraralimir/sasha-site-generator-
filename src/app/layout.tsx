import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const siteConfig = {
  name: "Sasha Site Generator",
  url: "https://sasha.site", // Replace with your actual domain
  description: "The AI-native way to build and deploy stunning websites. Generate content, design themes, and customize everything with an intuitive editor.",
  ogImage: "https://picsum.photos/seed/sasha-og/1200/630", // A representative image for social sharing
};


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "AI website builder",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Site generator",
    "No-code website",
    "AI content",
  ],
  authors: [{ name: "Sasha AI" }],
  creator: "Sasha AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@sasha_ai", // Replace with your Twitter handle
  },
  icons: {
    icon: "/favicon.ico", // Assuming you will add a favicon here
  },
  manifest: `${siteConfig.url}/site.webmanifest`, // Assuming a webmanifest file
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-transparent">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
