
import { CheckCircle2 } from "lucide-react";
import ContactDialog from "@/components/website-components/ContactDialog";
import ChatInput from "@/components/website-components/ChatInput";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Hyper-Personalized Marketing',
  description: 'Stop batch-and-blast marketing. Sasha creates and manages campaigns that adapt to individual customer behavior, maximizing engagement and ROI.',
  openGraph: {
    title: 'Sasha | AI Hyper-Personalized Marketing',
    description: 'Move to 1-to-1 personalization at scale. Sasha autonomously segments audiences, generates copy and images, and A/B tests campaigns for maximum ROI.',
  },
};

const implementationSteps = [
    {
      title: "1. Unified Customer Profile",
      description: "Sasha integrates with your CRM, analytics tools, and support desk to build a 360-degree view of each customer, including their behavior, preferences, and purchase history."
    },
    {
      title: "2. Define Campaign Goal",
      description: "State your marketing objective in natural language, e.g., 'Launch a campaign to re-engage users who have not logged in for 30 days' or 'Promote our new feature to power users.'"
    },
    {
      title: "3. Autonomous Segmentation & Content Generation",
      description: "Sasha intelligently segments your audience based on behavior and autonomously writes personalized email copy, subject lines, and even generates unique promotional images for each segment."
    },
    {
      title: "4. Multi-Channel Campaign Execution",
      description: "The agent deploys the campaign across multiple channels—email, push notifications, and even social media ads—ensuring the right message reaches the right user on the right platform."
    },
    {
      title: "5. A/B Testing and Optimization",
      description: "Sasha automatically A/B tests different subject lines, copy, and creative. It monitors performance in real-time and dynamically shifts budget and volume to the winning variants."
    },
    {
        "title": "6. Performance Reporting & Insight",
        "description": "After the campaign, Sasha delivers a comprehensive report detailing open rates, click-through rates, conversion, and ROI, along with insights on what drove performance."
    }
];

const benefits = [
    "Increase marketing campaign ROI by over 200% through deep personalization.",
    "Reduce manual effort in campaign creation and management by 95%.",
    "Improve customer engagement and loyalty with messaging that truly resonates.",
    "Move from broad segments to true 1-to-1 personalization at scale.",
    "Continuously optimize marketing performance with autonomous A/B testing.",
];

export default function HyperPersonalizedMarketingPage() {
  return (
    <div className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="lg:max-w-lg">
                        <p className="text-base font-semibold leading-7 text-primary">Solution</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-headline">Hyper-Personalized Marketing</h1>
                        <p className="mt-6 text-xl leading-8 text-neutral-300">
                            Stop batch-and-blast marketing. Sasha creates and manages campaigns that adapt to individual customer behavior, maximizing engagement and ROI.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:flex lg:items-center lg:justify-center">
                <div className="rounded-xl bg-neutral-900 shadow-xl ring-1 ring-neutral-400/10">
                    <div className="p-4 bg-neutral-800 text-xs text-neutral-400 font-mono">
                         <p>&gt; Sasha, create a campaign to win back customers who churned in the last 6 months.</p>
                         <p className="text-green-400 animate-pulse">&gt; Accessing CRM... Identified 2,500 churned customers.</p>
                         <p className="text-green-400 animate-pulse">&gt; Segmenting users by 'reason for churn' and 'previous usage level'...</p>
                         <p className="text-green-400 animate-pulse">&gt; Autonomously generating 4 unique email sequences with personalized 'we miss you' offers...</p>
                         <p className="text-green-400 animate-pulse">&gt; Deploying campaign via HubSpot. Initiating A/B/n testing on subject lines.</p>
                         <p className="text-green-400">&gt; ✅ Campaign live. Real-time dashboard is available at /dashboards/winback-2024.</p>
                    </div>
                     <div className="p-8">
                        <h3 className="text-xl font-bold font-headline mb-4 text-white">Use Case: E-commerce Abandoned Cart Recovery</h3>
                        <p className="text-neutral-300">
                           An online fashion retailer was losing significant revenue from abandoned carts. Sasha was integrated with their Shopify store and CRM. For each abandoned cart, Sasha would autonomously generate a personalized follow-up email. Instead of a generic reminder, it would reference the specific items in the cart, highlight positive reviews for those products, and in some cases, offer a small, time-sensitive discount. This hyper-personalized approach increased their abandoned cart recovery rate from 8% to 25%, adding millions in annual revenue.
                        </p>
                     </div>
                </div>
            </div>

            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="max-w-xl text-base leading-7 text-neutral-300 lg:max-w-lg">
                        <h2 className="text-2xl font-bold text-white font-headline">How It Works</h2>
                        <p className="mt-6">
                          Sasha acts as an entire marketing team—strategist, copywriter, and analyst—all in one. It manages the full lifecycle of a campaign, from ideation to reporting.
                        </p>
                        <ul role="list" className="mt-8 space-y-8 text-neutral-400">
                            {implementationSteps.map((step) => (
                                <li key={step.title} className="flex gap-x-3">
                                    <div>
                                        <h3 className="font-semibold text-white">{step.title}</h3>
                                        <p className="mt-1">{step.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                         <h2 className="mt-16 text-2xl font-bold text-white font-headline">Key Benefits</h2>
                         <ul className="mt-8 space-y-4">
                            {benefits.map((benefit) => (
                                <li key={benefit} className="flex items-start gap-x-3">
                                    <CheckCircle2 className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                         </ul>
                    </div>
                </div>
            </div>
        </div>

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
  )
}
