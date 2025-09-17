'use client';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Cog, Bot, DatabaseZap, ShoppingCart, Target, Factory, FileText, Cloud } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Scene from '@/components/website-components/Scene';
import type { WebsiteComponent } from '@/lib/types';
import ChatInput from '@/components/website-components/ChatInput';
import ContactDialog from '@/components/website-components/ContactDialog';


const solutions = [
  {
    icon: <BrainCircuit className="h-8 w-8 text-white" />,
    title: 'Automated ML Pipelines',
    description: 'Sasha builds, deploys, and manages end-to-end machine learning pipelines, accelerating your data science initiatives.',
    href: '/solutions/automated-ml-pipelines',
  },
  {
    icon: <Cog className="h-8 w-8 text-white" />,
    title: 'Business Process Automation',
    description: 'Automate complex workflows across your organization, from finance to HR, increasing efficiency and reducing errors.',
    href: '/solutions/business-process-automation',
  },
  {
    icon: <Bot className="h-8 w-8 text-white" />,
    title: 'Autonomous Support Agents',
    description: 'Deploy intelligent agents that resolve customer issues, understand context, and escalate seamlessly to human experts.',
    href: '/solutions/autonomous-support-agents',
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-white" />,
    title: 'Intelligent Supply Chain',
    description: 'Optimize logistics, forecast demand, and manage inventory in real-time with an AI that understands market dynamics.',
    href: '/solutions/intelligent-supply-chain',
  },
  {
    icon: <DatabaseZap className="h-8 w-8 text-white" />,
    title: 'Advanced Data Analytics',
    description: 'Turn raw data into actionable intelligence. Sasha autonomously discovers patterns, generates reports, and provides insights.',
    href: '/solutions/advanced-data-analytics',
  },
  {
    icon: <Target className="h-8 w-8 text-white" />,
    title: 'Hyper-Personalized Marketing',
    description: 'Create and manage marketing campaigns that adapt to individual customer behavior, maximizing engagement and ROI.',
    href: '/solutions/hyper-personalized-marketing',
  },
  {
    icon: <Factory className="h-8 w-8 text-white" />,
    title: 'Predictive Maintenance',
    description: 'For manufacturing and IoT, Sasha predicts equipment failure before it happens, minimizing downtime and saving costs.',
    href: '/solutions/predictive-maintenance',
  },
  {
    icon: <FileText className="h-8 w-8 text-white" />,
    title: 'Automated Financial Reporting',
    description: 'Connect to your financial systems to automate compliance, generate reports, and perform complex financial analysis.',
    href: '/solutions/automated-financial-reporting',
  },
   {
    icon: <Cloud className="h-8 w-8 text-white" />,
    title: 'Enterprise Integrations',
    description: 'Sasha seamlessly connects with your existing enterprise tools, including SAP, Salesforce, Azure, AWS, and Google Cloud.',
    href: '/solutions/enterprise-integrations',
  }
];

const sceneComponent: WebsiteComponent = {
  id: 'scene-landing',
  type: 'Scene',
  content: {},
}

export default function LandingPage() {
  return (
    <div className="text-white overflow-x-hidden bg-gradient-to-b from-black to-[#111111] selection:bg-primary/20">
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
            Advanced agentic AI for enterprise.
          </p>
        </motion.div>
      </section>
      {/* --- End Hero Section --- */}


      <div className="relative z-10">
        {/* --- Solutions Section --- */}
        <section className="relative z-20 py-20 md:py-32 bg-transparent">
          <div className="container mx-auto px-4">
            <div
              className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
            >
              <h2 className="font-headline text-4xl md:text-5xl font-bold">
                A New Class of Agentic AI
              </h2>
              <p className="mt-4 text-lg text-neutral-300">
                Sasha is a real-world agentic AI that autonomously runs complex business operations, builds ML pipelines, and integrates with high-level enterprise tools like SAP, Azure, AWS, and Google.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Link key={index} href={solution.href || '#'} >
                  <div
                    className="h-full rounded-[20px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm shadow-lg shadow-black/20 transition-all duration-300 ease-in-out hover:bg-white/10 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
                  >
                    <div className="bg-white/10 p-3 rounded-full w-fit mb-4">{solution.icon}</div>
                    <h3 className="font-headline text-2xl font-bold">{solution.title}</h3>
                    <p className="mt-4 text-neutral-300">{solution.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* --- Final CTA Section --- */}
        <section className="relative z-20 py-20 md:py-32 text-center bg-transparent">
          <div className="container mx-auto px-4">
            <h2
              className="font-headline text-4xl md:text-5xl font-bold"
            >
              Ready for True Automation?
            </h2>
            <p
              className="mt-4 text-lg max-w-2xl mx-auto text-neutral-300"
            >
              Contact us to learn how Sasha's agentic AI can transform your enterprise.
            </p>
            <div
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <ContactDialog />
              <ChatInput />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
