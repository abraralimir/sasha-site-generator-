
import { CheckCircle2 } from "lucide-react";
import ContactDialog from "@/components/website-components/ContactDialog";
import ChatInput from "@/components/website-components/ChatInput";

const implementationSteps = [
    {
      title: "1. Natural Language Integration Request",
      description: "Simply tell Sasha what you want to connect: 'Integrate our Salesforce Opportunity data with our SAP S/4HANA financial system. When an opportunity is marked 'Closed Won,' create a corresponding sales order in SAP.'"
    },
    {
      title: "2. Autonomous API Discovery & Mapping",
      description: "Sasha automatically inspects the APIs of both systems, understands the relevant objects (Opportunity, Account, Sales Order, etc.), and intelligently maps the required fields between them."
    },
    {
      title: "3. Workflow and Logic Generation",
      description: "The agent generates the necessary integration logic, including data transformations (e.g., converting data formats), error handling, and conditional logic, without writing a single line of code."
    },
    {
      title: "4. Secure Credential Management",
      description: "Sasha securely prompts for and stores API keys and credentials in an encrypted vault, ensuring your sensitive access tokens are never exposed."
    },
    {
      title: "5. Deployment and Real-time Monitoring",
      description: "Sasha deploys the integration as a managed, serverless process. It provides a real-time dashboard to monitor data flows, API health, and successful transactions."
    },
    {
        "title": "6. Self-Healing and Maintenance",
        "description": "If an API changes or an endpoint fails, Sasha can detect the issue, attempt to self-heal by re-authenticating or re-mapping fields, and alerts the appropriate team if manual intervention is needed."
    }
];

const benefits = [
    "Reduce integration projects from months to hours.",
    "Eliminate the need for expensive, specialized integration platforms or consultants.",
    "Create a truly connected enterprise where data flows seamlessly between departments.",
    "Ensure integrations are resilient, monitored, and self-healing.",
    "Unlock new automation possibilities by breaking down data silos between critical systems.",
];

export default function EnterpriseIntegrationsPage() {
  return (
    <div className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="lg:max-w-lg">
                        <p className="text-base font-semibold leading-7 text-primary">Solution</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-headline">Enterprise Integrations</h1>
                        <p className="mt-6 text-xl leading-8 text-neutral-300">
                           Your enterprise systems don't talk to each other. Sasha makes them. It seamlessly connects your existing tools—SAP, Salesforce, Azure, AWS—autonomously.
                        </p>
                    </div>
                </div>
            </div>

            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                <div className="w-[48rem] max-w-none rounded-xl bg-neutral-900 shadow-xl ring-1 ring-neutral-400/10 sm:w-[57rem]">
                    <div className="p-4 bg-neutral-800 text-xs text-neutral-400 font-mono">
                         <p>&gt; Sasha, connect our Shopify store to our NetSuite ERP.</p>
                         <p className="text-green-400 animate-pulse">&gt; Discovering Shopify and NetSuite APIs... Authenticating...</p>
                         <p className="text-green-400 animate-pulse">&gt; Mapping Shopify 'Order' object to NetSuite 'Sales Order' object.</p>
                         <p className="text-green-400 animate-pulse">&gt; Generated data transformation logic for customer records and line items.</p>
                         <p className="text-green-400 animate-pulse">&gt; Deploying real-time sync workflow...</p>
                         <p className="text-green-400">&gt; ✅ Integration live. New Shopify orders will now be created as Sales Orders in NetSuite automatically.</p>
                    </div>
                     <div className="p-8">
                        <h3 className="text-xl font-bold font-headline mb-4 text-white">Use Case: Quote-to-Cash Automation</h3>
                        <p className="text-neutral-300">
                           A B2B company's sales team used Salesforce, but their finance team used SAP. This created a manual, error-prone process for turning a closed deal into a provisioned customer. Sasha was tasked with automating this. It built an integration that, upon an opportunity being marked 'Closed-Won' in Salesforce, automatically created the customer in SAP, generated a sales order, and provisioned their services in the company's backend system. This reduced the time from 'deal closed' to 'customer live' from 5 days to 5 minutes.
                        </p>
                     </div>
                </div>
            </div>

            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="max-w-xl text-base leading-7 text-neutral-300 lg:max-w-lg">
                        <h2 className="text-2xl font-bold text-white font-headline">How It Works</h2>
                        <p className="mt-6">
                          Sasha acts as an autonomous integration developer, understanding the intent behind your request and handling the complex, tedious work of connecting disparate systems.
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
