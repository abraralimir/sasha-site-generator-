'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LayoutDashboard, Wand2, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Scene from '@/components/website-components/Scene';

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
  const scrollContainerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ['start start', 'end end'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 2.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0.9, 1], ['0%', '-100%']);


  return (
    <div className="text-white overflow-x-hidden">
      <Scene />
      <div className="relative z-10">
        <div className="flex h-screen items-center justify-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold [text-shadow:0_0_20px_rgba(255,255,255,0.3)]">
                SASHA SITE GENERATOR
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl text-neutral-300 opacity-80">
                The AI-native way to build and deploy stunning websites.
            </p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8"
            >
                <Button size="lg" asChild className="font-semibold bg-white text-black hover:bg-neutral-200">
                <Link href="/generate">
                    Get Started
                </Link>
                </Button>
            </motion.div>
            </motion.div>
        </div>
        
        <div ref={scrollContainerRef} className="relative z-10 h-[150vh] bg-transparent">
          <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
              <motion.div style={{ y }} className="flex flex-col items-center text-center">
                <motion.h2 style={{ scale, opacity }} className="font-headline text-4xl md:text-7xl font-bold flex flex-col items-center">
                  <span>What it can do</span>
                </motion.h2>
              </motion.div>
          </div>
        </div>

        <section className="relative z-20 py-20 md:py-32 bg-transparent -mt-[50vh]">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
            >
              <p className="mt-4 text-lg text-neutral-300">
                Sasha Site Generator combines powerful AI with an intuitive editor to bring your ideas to life.
              </p>
            </motion.div>

            <div className="space-y-24">
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
                      <motion.div 
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                      >
                        <div className="flex items-center gap-4">
                          <div className="bg-white/10 p-3 rounded-full">{feature.icon}</div>
                          <h3 className="font-headline text-3xl font-bold">{feature.title}</h3>
                        </div>
                        <p className="mt-4 text-lg text-neutral-300">{feature.description}</p>
                      </motion.div>
                    </div>
                    <div className="md:w-1/2">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                      >
                        <Image
                          src={feature.imageUrl}
                          alt={feature.title}
                          width={800}
                          height={600}
                          data-ai-hint={feature.imageHint}
                          className="rounded-xl shadow-2xl shadow-white/5 object-cover"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative z-20 py-20 md:py-32 text-center bg-transparent">
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
                  <Link href="/generate">
                      Get Started
                  </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
