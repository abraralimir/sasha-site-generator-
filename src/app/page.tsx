'use client';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Cog, Bot, DatabaseZap, ShoppingCart, Target, Factory, FileText, Cloud, DollarSign } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Scene from '@/components/website-components/Scene';
import type { WebsiteComponent } from '@/lib/types';
import ChatInput from '@/components/website-components/ChatInput';


const solutions = [
  {
    icon: <BrainCircuit className="h-8 w-8 text-white" />,
    title: 'Automated ML Pipelines',
    description: 'Sasha builds, deploys, and manages end-to-end machine learning pipelines, accelerating your data science initiatives.',
  },
  {
    icon: <Cog className="h-8 w-8 text-white" />,
    title: 'Business Process Automation',
    description: 'Automate complex workflows across your organization, from finance to HR, increasing efficiency and reducing errors.',
  },
  {
    icon: <Bot className="h-8 w-8 text-white" />,
    title: 'Autonomous Support Agents',
    description: 'Deploy intelligent agents that resolve customer issues, understand context, and escalate seamlessly to human experts.',
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-white" />,
    title: 'Intelligent Supply Chain',
    description: 'Optimize logistics, forecast demand, and manage inventory in real-time with an AI that understands market dynamics.',
  },
  {
    icon: <DatabaseZap className="h-8 w-8 text-white" />,
    title: 'Advanced Data Analytics',
    description: 'Turn raw data into actionable intelligence. Sasha autonomously discovers patterns, generates reports, and provides insights.',
  },
  {
    icon: <Target className="h-8 w-8 text-white" />,
    title: 'Hyper-Personalized Marketing',
    description: 'Create and manage marketing campaigns that adapt to individual customer behavior, maximizing engagement and ROI.',
  },
  {
    icon: <Factory className="h-8 w-8 text-white" />,
    title: 'Predictive Maintenance',
    description: 'For manufacturing and IoT, Sasha predicts equipment failure before it happens, minimizing downtime and saving costs.',
  },
  {
    icon: <FileText className="h-8 w-8 text-white" />,
    title: 'Automated Financial Reporting',
    description: 'Connect to your financial systems to automate compliance, generate reports, and perform complex financial analysis.',
  },
   {
    icon: <Cloud className="h-8 w-8 text-white" />,
    title: 'Enterprise Integrations',
    description: 'Sasha seamlessly connects with your existing enterprise tools, including SAP, Salesforce, Azure, AWS, and Google Cloud.',
  },
  {
    icon: <DollarSign className="h-8 w-8 text-white" />,
    title: 'Dynamic Resource Allocation',
    description: 'Optimize cloud spending and workforce management by allowing Sasha to allocate resources based on real-time demand.',
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
          <p className="mt-4 text-lg md:text-xl max-w-2xl text-neutral-300 opacity-80">
            The world's most advanced agentic AI for enterprise.
          </p>
        </motion.div>
      </section>
      {/* --- End Hero Section --- */}


      <div className="relative z-10">
        {/* --- Solutions Section --- */}
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
                A New Class of Agentic AI
              </h2>
              <p className="mt-4 text-lg text-neutral-300">
                Sasha is a real-world agentic AI that autonomously runs complex business operations, builds ML pipelines, and integrates with high-level enterprise tools like SAP, Azure, AWS, and Google.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  className="rounded-[20px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm shadow-lg shadow-black/20 transition-all duration-300 ease-in-out hover:bg-white/10 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
                >
                  <div className="bg-white/10 p-3 rounded-full w-fit mb-4">{solution.icon}</div>
                  <h3 className="font-headline text-2xl font-bold">{solution.title}</h3>
                  <p className="mt-4 text-neutral-300">{solution.description}</p>
                </motion.div>
              ))}
            </div>
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
              Ready for True Automation?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-lg max-w-2xl mx-auto text-neutral-300"
            >
              Contact us to learn how Sasha's agentic AI can transform your enterprise.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" variant="default" asChild>
                <Link href="/">
                  Request a Demo
                </Link>
              </Button>
              <ChatInput />
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
