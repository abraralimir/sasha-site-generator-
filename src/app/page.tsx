'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LayoutDashboard, Wand2, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/website-components/Scene'), { ssr: false });

const features = [
  {
    icon: <Wand2 className="h-8 w-8 text-white" />,
    title: 'AI-Powered Content',
    description:
      'Generate engaging text and find the perfect images with our integrated AI assistant.',
    imageUrl: 'https://picsum.photos/seed/ai-power/800/600',
    imageHint: 'artificial intelligence brain'
  },
  {
    icon: <LayoutDashboard className="h-8 w-8 text-white" />,
    title: 'Drag & Drop Editor',
    description:
      'Effortlessly build and customize your site with an intuitive, real-time editor.',
    imageUrl: 'https://picsum.photos/seed/drag-drop/800/600',
    imageHint: 'web design grid'
  },
  {
    icon: <Zap className="h-8 w-8 text-white" />,
    title: 'Instant Deployment',
    description:
      'Download your complete website code and host it anywhere you want, with no restrictions.',
    imageUrl: 'https://picsum.photos/seed/deploy/800/600',
    imageHint: 'server database'
  },
];

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={containerRef} className="bg-black text-white relative isolate overflow-hidden">
       <div className="fixed inset-0 -z-10 h-full w-full">
        <Scene />
      </div>
      <div className="fixed inset-0 -z-20 h-full w-full bg-black [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#3399FF_100%)] opacity-20" />
      
      <motion.section
        className="h-screen flex flex-col justify-center items-center text-center p-4"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]),
          scale: useTransform(scrollYProgress, [0, 0.1], [1, 0.9]),
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold"
        >
          SASHA SITE GENERATOR
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-lg md:text-xl max-w-2xl text-neutral-300"
        >
          The AI-native way to build and deploy stunning websites. No code, just creativity.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8"
        >
            <Button size="lg" asChild className="font-semibold bg-white text-black hover:bg-neutral-200">
          <Link href="/editor">
              Get Started
          </Link>
            </Button>
        </motion.div>
      </motion.section>

      <section className="relative z-10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">What it can do</h2>
            <p className="mt-4 text-lg text-neutral-300">
              Sasha Site Generator combines powerful AI with an intuitive editor to bring your ideas to life.
            </p>
          </div>

          <div className="mt-16 md:mt-24 space-y-24">
            {features.map((feature, index) => {
              const direction = index % 2 === 0 ? 'flex-row' : 'flex-row-reverse';
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col md:${direction} items-center gap-8 md:gap-16`}
                >
                  <div className="md:w-1/2">
                    <div className="flex items-center gap-4">
                      <div className="bg-white/10 p-3 rounded-full">{feature.icon}</div>
                      <h3 className="font-headline text-3xl font-bold">{feature.title}</h3>
                    </div>
                    <p className="mt-4 text-lg text-neutral-300">{feature.description}</p>
                  </div>
                  <div className="md:w-1/2">
                    <Image
                      src={feature.imageUrl}
                      alt={feature.title}
                      width={800}
                      height={600}
                      data-ai-hint={feature.imageHint}
                      className="rounded-xl shadow-2xl shadow-white/5 object-cover"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 md:py-32 text-center">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="font-headline text-4xl md:text-5xl font-bold"
          >
            Ready to Build?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg max-w-2xl mx-auto text-neutral-300"
          >
            Start creating your professional website in minutes. It's free to get started.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <Button size="lg" asChild className="font-semibold bg-white text-black hover:bg-neutral-200">
                <Link href="/editor">
                    Get Started
                </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}