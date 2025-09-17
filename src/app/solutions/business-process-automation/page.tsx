
import { CheckCircle2 } from "lucide-react";
import ContactDialog from "@/components/website-components/ContactDialog";
import ChatInput from "@/components/website-components/ChatInput";


const implementationSteps = [
    {
      title: "1. Process Discovery",
      description: "Sasha connects to your existing tools (like Salesforce, SAP, or ServiceNow) and observes workflows to automatically map out your current business processes and identify bottlenecks."
    },
    {
      title: "2. Define Automation Goal",
      description: "State your objective in plain English, such as 'Automate the new employee onboarding process, from HR paperwork to IT account creation.'"
    },
    {
      title: "3. Autonomous Workflow Generation",
      description: "Sasha generates a resilient, automated workflow that handles tasks, triggers approvals, integrates with necessary APIs, and manages exceptions without human intervention."
    },
    {
      title: "4. Human-in-the-Loop Integration",
      description: "For steps requiring human judgment, Sasha seamlessly integrates approval tasks into your team's existing tools (like Slack or email), ensuring processes don't stall."
    },
    {
      title: "5. Deployment & Optimization",
      description: "Sasha deploys the automated process and provides a real-time dashboard to monitor performance, ROI, and other key metrics, continually suggesting optimizations."
    }
];

const benefits = [
    "Reduce manual effort on repetitive tasks by up to 90%.",
    "Increase process efficiency and reduce operational costs.",
    "Minimize human error and improve data accuracy and compliance.",
    "Free up your employees to focus on high-value, strategic work."
];

export default function BusinessProcessAutomationPage() {
  return (
    <div className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="lg:max-w-lg">
                        <p className="text-base font-semibold leading-7 text-primary">Solution</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-headline">Business Process Automation</h1>
                        <p className="mt-6 text-xl leading-8 text-neutral-300">
                            Sasha moves beyond simple task automation to autonomously manage and optimize your most complex, cross-departmental business workflows.
                        </p>
                    </div>
                </div>
            </div>

            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <div className="w-[48rem] max-w-none rounded-xl bg-neutral-900 shadow-xl ring-1 ring-neutral-400/10 sm:w-[57rem]">
                    <div className="p-4 bg-neutral-800 text-xs text-neutral-400 font-mono">
                         <p>&gt; Sasha, automate our new employee onboarding process.</p>
                         <p className="text-green-400 animate-pulse">&gt; Process discovery initiated... Mapping steps from HR (Workday) to IT (Okta).</p>
                         <p className="text-green-400 animate-pulse">&gt; Identified 14 manual steps and 3 bottlenecks.</p>
                         <p className="text-green-400 animate-pulse">&gt; Generating automated workflow... Integrating with Workday API and Okta API.</p>
                         <p className="text-green-400 animate-pulse">&gt; Inserting human-in-the-loop approval for manager via Slack.</p>
                         <p className="text-green-400">&gt; ✅ Onboarding workflow automated. Estimated time savings: 20 hours/week.</p>
                    </div>
                     <div className="p-8">
                        <h3 className="text-xl font-bold font-headline mb-4 text-white">Use Case: New Employee Onboarding</h3>
                        <p className="text-neutral-300">
                            A fast-growing tech company was struggling with a slow and error-prone manual onboarding process. Sasha autonomously mapped their existing workflow across HR, IT, and Finance, then built an automated process that provisions accounts, orders equipment, and schedules orientation, all triggered by a single "hire" event in their HR system. This reduced onboarding time from 3 days to 2 hours.
                        </p>
                     </div>
                </div>
            </div>

            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="max-w-xl text-base leading-7 text-neutral-300 lg:max-w-lg">
                        <h2 className="text-2xl font-bold text-white font-headline">How It Works</h2>
                        <p className="mt-6">
                          Sasha's agentic nature allows it to understand processes, not just tasks. It coordinates across your entire software stack to deliver true end-to-end automation.
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
