
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';



const siteConfig = {
  name: "Sasha",
  url: "https://sasha-agentic.vercel.app/",
  description: "Advanced agentic AI for enterprise. Automate complex processes, build ML pipelines, and integrate with enterprise systems.",
  ogImage: "https://i.ibb.co/bF05W4v/sasha-og-red.png",
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
    creator: "@sasha_ai",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Sasha",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "Advanced agentic AI for enterprise. Automate complex processes, build ML pipelines, and integrate with enterprise systems.",
    "url": "https://sasha-agentic.vercel.app/",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sasha AI"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-body antialiased bg-transparent">
        
        {children}
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
