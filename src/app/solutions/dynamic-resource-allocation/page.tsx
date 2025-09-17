
import { CheckCircle2 } from "lucide-react";
import ContactDialog from "@/components/website-components/ContactDialog";
import ChatInput from "@/components/website-components/ChatInput";

const implementationSteps = [
    {
      title: "1. Infrastructure & Workforce Monitoring",
      description: "Sasha integrates with your cloud providers (AWS, Azure, GCP) and workforce management tools (e.g., HRIS, project management software) to get a real-time view of utilization and cost."
    },
    {
      title: "2. Business Goal Alignment",
      description: "Define your optimization goals: 'Minimize cloud spend while maintaining 99.9% uptime' or 'Allocate engineering resources to projects with the highest potential ROI.'"
    },
    {
      title: "3. Predictive Demand Forecasting",
      description: "By analyzing historical usage patterns and upcoming business events (like marketing launches), Sasha predicts future resource needs for both infrastructure and personnel."
    },
    {
      title: "4. Autonomous Allocation & Scaling",
      description: "Sasha automatically scales cloud resources up or down based on real-time demand, purchases/sells reserved instances to optimize cost, and can even suggest re-allocating engineers from low-priority to high-priority tasks."
    },
    {
      title: "5. Anomaly Detection & Cost Control",
      description: "The agent constantly watches for spending anomalies. If a developer spins up an unnecessarily large server, Sasha can flag it, notify the manager, and even automatically terminate it based on predefined rules."
    },
    {
        "title": "6. ROI and Efficiency Reporting",
        "description": "Sasha provides clear, concise dashboards showing exactly how much money and time is being saved through its autonomous optimizations, linking resource allocation directly to business outcomes."
    }
];

const benefits = [
    "Reduce cloud infrastructure costs by up to 40% through intelligent rightsizing and scaling.",
    "Improve operational efficiency by ensuring resources are always aligned with strategic priorities.",
    "Prevent budget overruns with proactive anomaly detection and automated controls.",
    "Increase engineering velocity by focusing talent on high-impact projects.",
    "Make complex resource planning decisions autonomously, based on data, not guesswork.",
];

export default function DynamicResourceAllocationPage() {
  return (
    <div className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="lg:max-w-lg">
                        <p className="text-base font-semibold leading-7 text-primary">Solution</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-headline">Dynamic Resource Allocation</h1>
                        <p className="mt-6 text-xl leading-8 text-neutral-300">
                           Stop guessing. Sasha optimizes cloud spending and workforce management by autonomously allocating resources based on real-time demand and strategic priority.
                        </p>
                    </div>
                </div>
            </div>

            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <div className="w-[48rem] max-w-none rounded-xl bg-neutral-900 shadow-xl ring-1 ring-neutral-400/10 sm:w-[57rem]">
                    <div className="p-4 bg-neutral-800 text-xs text-neutral-400 font-mono">
                         <p>&gt; Sasha, optimize our AWS spend for the 'production' environment.</p>
                         <p className="text-green-400 animate-pulse">&gt; Analyzing CloudWatch metrics and Cost Explorer data for the last 90 days...</p>
                         <p className="text-green-400 animate-pulse">&gt; Anomaly Detected: 15 EC2 instances are oversized and underutilized (avg. CPU < 10%).</p>
                         <p className="text-green-400 animate-pulse">&gt; Recommendation: Downsize instances from 'm5.2xlarge' to 'm5.large'. Estimated savings: $4,200/month.</p>
                         <p className="text-green-400 animate-pulse">&gt; Executing change during the next maintenance window (Sunday, 2:00 AM UTC)...</p>
                         <p className="text-green-400">&gt; ✅ Optimization scheduled. Monitoring for performance impact after change.</p>
                    </div>
                     <div className="p-8">
                        <h3 className="text-xl font-bold font-headline mb-4 text-white">Use Case: Cloud Cost Optimization</h3>
                        <p className="text-neutral-300">
                           A major tech company was facing a ballooning AWS bill. After integrating Sasha, the agent immediately identified millions in potential savings. It autonomously analyzed usage patterns and began rightsizing over-provisioned servers, deleting unattached storage volumes, and purchasing Reserved Instances for steady-state workloads. Within three months, Sasha had reduced the company's cloud spend by 30% without any negative impact on performance.
                        </p>
                     </div>
                </div>
            </div>

            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="max-w-xl text-base leading-7 text-neutral-300 lg:max-w-lg">
                        <h2 className="text-2xl font-bold text-white font-headline">How It Works</h2>
                        <p className="mt-6">
                          Sasha functions as an autonomous FinOps and Resource Manager, continuously aligning your operational expenditure with business value in real time.
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
  );
}
