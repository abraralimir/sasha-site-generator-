'use client';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Wand2, Zap, Star } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Scene from '@/components/website-components/Scene';
import type { WebsiteComponent } from '@/lib/types';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


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

const testimonials = [
  {
    name: 'Sarah L.',
    title: 'Freelance Designer',
    quote: "Sasha Site Generator has been a game-changer for my client work. I can prototype and build stunning, AI-enhanced websites in a fraction of the time. The AI design assistant is pure magic!",
    avatar: 'https://picsum.photos/seed/avatar1/100/100'
  },
  {
    name: 'David Chen',
    title: 'Startup Founder',
    quote: "As a non-technical founder, I was able to launch our company's website over a weekend. The intuitive editor and AI content tools made it possible. We're already seeing great results from the SEO suggestions.",
    avatar: 'https://picsum.photos/seed/avatar2/100/100'
  },
  {
    name: 'Maria G.',
    title: 'Restaurant Owner',
    quote: "I never thought I'd be able to build our own website. Sasha made it simple. Our customers love the online menu and the site looks like it was designed by a professional agency.",
    avatar: 'https://picsum.photos/seed/avatar3/100/100'
  }
];


const sceneComponent: WebsiteComponent = {
  id: 'scene-landing',
  type: 'Scene',
  content: {}
}

export default function LandingPage() {
  return (
    <div className="text-white overflow-x-hidden bg-gradient-to-b from-black to-[#111111]">
      {/* --- Hero Section (Untouched as requested) --- */}
      <section className="relative h-[60vh] min-h-[500px] md:h-screen flex items-center justify-center text-center">
        <Scene {...sceneComponent} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 flex flex-col items-center"
        >
          <h1 className="font-headline text-8xl md:text-9xl font-bold [text-shadow:0_0_20px_rgba(255,255,255,0.3)]">
            SASHA
          </h1>
          <p className="font-body text-2xl md:text-3xl text-neutral-300 opacity-80 tracking-widest mt-2">
            SITE GENERATOR
          </p>
          <p className="mt-4 text-lg md:text-xl max-w-2xl text-neutral-300 opacity-80">
            The AI-native way to build and deploy stunning websites.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8"
          >
            <Button size="lg" variant="glass" asChild>
              <Link href="/generate">
                Get Started
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>
      {/* --- End Hero Section --- */}


      <div className="relative z-10">
        {/* --- Features Section --- */}
        <section className="relative z-20 py-20 md:py-32 bg-transparent">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
            >
              <h2 className="font-headline text-4xl md:text-5xl font-bold">
                Powerful Features, Effortless Creation
              </h2>
              <p className="mt-4 text-lg text-neutral-300">
                Sasha Site Generator combines powerful AI with an intuitive editor to bring your ideas to life.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:bg-white/10 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
                >
                  <div className="bg-white/10 p-3 rounded-full w-fit mb-4">{feature.icon}</div>
                  <h3 className="font-headline text-2xl font-bold">{feature.title}</h3>
                  <p className="mt-4 text-neutral-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Testimonials Section --- */}
        <section className="relative z-20 py-20 md:py-32 bg-transparent">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-headline text-4xl md:text-5xl font-bold">
                Loved by Creators Everywhere
              </h2>
              <p className="mt-4 text-lg text-neutral-300">
                See what our users are saying about their experience.
              </p>
            </motion.div>

             <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1 h-full">
                        <Card className="h-full flex flex-col justify-between rounded-xl border-white/10 bg-white/5 text-white">
                          <CardContent className="p-6 flex flex-col gap-6">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-primary fill-primary" />)}
                            </div>
                            <p className="text-base text-neutral-200">"{testimonial.quote}"</p>
                            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                              <Avatar>
                                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-semibold">{testimonial.name}</p>
                                <p className="text-sm text-neutral-400">{testimonial.title}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="text-white -left-4 bg-white/10 border-white/20 hover:bg-white/20" />
                <CarouselNext className="text-white -right-4 bg-white/10 border-white/20 hover:bg-white/20" />
              </Carousel>
             </motion.div>
          </div>
        </section>

        {/* --- Final CTA Section --- */}
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
              <Button size="lg" variant="glass" asChild>
                <Link href="/generate">
                  Begin Your Creation
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
