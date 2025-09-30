
import { CheckCircle2 } from "lucide-react";
import ContactDialog from "@/components/website-components/ContactDialog";
import ChatInput from "@/components/website-components/ChatInput";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Autonomous Support Agents',
  description: 'Move beyond chatbots. Deploy truly autonomous agents that resolve complex customer issues, understand context, and integrate with your tools to take real action.',
  openGraph: {
    title: 'Sasha | Autonomous Support Agents',
    description: 'Provide instant, 24/7 support with AI agents that can process refunds, update accounts, and escalate seamlessly to human experts when needed.',
  },
};

const implementationSteps = [
    {
      title: "1. Knowledge Ingestion",
      description: "Sasha connects to your knowledge bases (Zendesk, Confluence, PDFs, websites) and learns your products, policies, and support procedures inside and out."
    },
    {
      title: "2. Goal-Oriented Training",
      description: "You define the agent's goals, such as 'Resolve 80% of Tier 1 tickets without human intervention' or 'Achieve a customer satisfaction score of 95%.'"
    },
    {
      title: "3. Contextual Understanding",
      description: "The agent understands the full context of a customer's issue, including their purchase history, previous interactions, and sentiment, by integrating with your CRM."
    },
    {
      title: "4. Tool Integration & Action",
      description: "Unlike chatbots, Sasha can take action. It integrates with APIs to process refunds, update account details, track shipments, and more, directly within the support conversation."
    },
    {
      title: "5. Seamless Human Escalation",
      description: "When an issue is too complex, Sasha intelligently routes the entire conversation, with a summary of actions taken, to the correct human agent, ensuring a smooth handoff."
    },
    {
        "title": "6. Continuous Learning",
        "description": "After every interaction, Sasha learns. It analyzes resolved tickets to improve its knowledge and identifies recurring issues to provide feedback to your product teams."
    }
];

const benefits = [
    "Provide instant, 24/7 support to your customers worldwide.",
    "Reduce support ticket volume by up to 80%, freeing up human agents for complex issues.",
    "Increase customer satisfaction with faster, more accurate resolutions.",
    "Lower operational costs by scaling your support capabilities without scaling headcount.",
    "Turn your support center from a cost center into a proactive, insight-generating department."
];

export default function AutonomousSupportAgentsPage() {
  return (
    <div className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="lg:max-w-lg">
                        <p className="text-base font-semibold leading-7 text-primary">Solution</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-headline">Autonomous Support Agents</h1>
                        <p className="mt-6 text-xl leading-8 text-neutral-300">
                           Move beyond chatbots. Deploy truly autonomous agents that resolve complex customer issues, understand context, and integrate with your tools to take real action.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:flex lg:items-center lg:justify-center">
                <div className="rounded-xl bg-neutral-900 shadow-xl ring-1 ring-neutral-400/10">
                    <div className="p-4 bg-neutral-800 text-xs text-neutral-400 font-mono">
                         <p>&gt; Sasha, handle incoming support ticket #78345.</p>
                         <p className="text-green-400 animate-pulse">&gt; Analyzing ticket: Customer 'John Doe' reports a billing discrepancy.</p>
                         <p className="text-green-400 animate-pulse">&gt; Accessing CRM... Customer is on 'Pro Plan'. Checking Stripe for payment history...</p>
                         <p className="text-green-400 animate-pulse">&gt; Discrepancy found: Customer was double-billed due to a known bug (BUG-512).</p>
                         <p className="text-green-400 animate-pulse">&gt; Initiating refund via Stripe API and applying a 10% credit to the account for the inconvenience.</p>
                         <p className="text-green-400">&gt; ✅ Ticket #78345 resolved. Composed and sent personalized apology email to customer.</p>
                    </div>
                     <div className="p-8">
                        <h3 className="text-xl font-bold font-headline mb-4 text-white">Use Case: SaaS Billing Support</h3>
                        <p className="text-neutral-300">
                            A leading SaaS company deployed Sasha to handle their front-line billing support. Sasha was able to autonomously resolve 75% of incoming tickets—including processing refunds, changing subscription plans, and explaining charges—without any human intervention. This led to a 40% reduction in support costs and a 15-point increase in their Customer Satisfaction (CSAT) score within three months.
                        </p>
                     </div>
                </div>
            </div>

            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="max-w-xl text-base leading-7 text-neutral-300 lg:max-w-lg">
                        <h2 className="text-2xl font-bold text-white font-headline">How It Works</h2>
                        <p className="mt-6">
                         Sasha's support agents are not simple question-and-answer bots. They are goal-driven, tool-using agents that can reason and execute multi-step solutions.
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
