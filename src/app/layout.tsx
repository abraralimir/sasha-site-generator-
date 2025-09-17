import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const siteConfig = {
  name: "Sasha",
  url: "https://sasha.site", // Replace with your actual domain
  description: "The world's most advanced agentic AI for enterprise. Automate complex processes, build ML pipelines, and integrate with enterprise systems.",
  ogImage: "https://picsum.photos/seed/sasha-og/1200/630", // A representative image for social sharing
};


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Agentic AI",
    "Enterprise AI",
    "Business Process Automation",
    "Machine Learning",
    "ML Pipelines",
    "SAP",
    "Salesforce",
    "Azure",
    "AWS",
    "Google Cloud",
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
