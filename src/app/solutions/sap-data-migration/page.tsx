
import { CheckCircle2 } from "lucide-react";
import ContactDialog from "@/components/website-components/ContactDialog";
import ChatInput from "@/components/website-components/ChatInput";

const implementationSteps = [
    {
      title: "1. Autonomous System Analysis",
      description: "Sasha connects to your source SAP ECC and target S/4HANA systems. It autonomously analyzes your existing data structures, custom objects (Z-tables), and configurations."
    },
    {
      title: "2. Intelligent Data Mapping & Cleansing",
      description: "The agent intelligently maps legacy data fields to the new S/4HANA structures, including the Business Partner model. It automatically identifies data quality issues, duplicates, and inconsistencies, then performs autonomous cleansing and enrichment."
    },
    {
      title: "3. Mock Migration & Validation",
      description: "Sasha performs multiple mock migration cycles in a sandbox environment. It generates detailed validation reports, comparing data sets post-migration to ensure 100% data integrity and business continuity."
    },
    {
      title: "4. Optimized Cutover Planning",
      description: "Based on mock run performance, Sasha generates an optimized cutover plan that minimizes business downtime. It creates a detailed, sequenced runbook for the final migration event."
    },
    {
      title: "5. Automated Go-Live Execution",
      description: "During the go-live weekend, Sasha executes the migration plan, providing real-time dashboard visibility into progress and autonomously handling exceptions."
    },
    {
        "title": "6. Post-Migration Reconciliation",
        "description": "After cutover, Sasha performs a final, comprehensive reconciliation to provide a fully auditable report confirming that all data has been migrated successfully and accurately."
    }
];

const benefits = [
    "Reduce migration timelines by up to 50% compared to traditional methods.",
    "Minimize business risk with automated data validation and reconciliation.",
    "Lower migration costs by dramatically reducing manual effort and reliance on consultants.",
    "Ensure data quality in your new S/4HANA system from day one.",
    "Gain full transparency and auditability throughout the entire migration process.",
];

export default function SAPDataMigrationPage() {
  return (
    <div className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="lg:max-w-lg">
                        <p className="text-base font-semibold leading-7 text-primary">Solution</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-headline">Autonomous SAP Data Migration</h1>
                        <p className="mt-6 text-xl leading-8 text-neutral-300">
                           De-risk and accelerate your move to S/4HANA. Sasha is an agentic AI that automates complex SAP data migrations, ensuring speed, accuracy, and business continuity.
                        </p>
                    </div>
                </div>
            </div>

            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:flex lg:items-center lg:justify-center">
                <div className="w-full max-w-none rounded-xl bg-neutral-900 shadow-xl ring-1 ring-neutral-400/10">
                    <div className="p-4 bg-neutral-800 text-xs text-neutral-400 font-mono">
                         <p>&gt; Sasha, plan and execute our migration from SAP ECC 6.0 to S/4HANA.</p>
                         <p className="text-green-400 animate-pulse">&gt; Analyzing ECC source system... Found 150+ custom Z-tables and 2.5TB of data.</p>
                         <p className="text-green-400 animate-pulse">&gt; Generating data mapping rules for Business Partner conversion...</p>
                         <p className="text-green-400 animate-pulse">&gt; Initiating Mock Migration 1... Identified 8,500 data quality issues. Autonomously cleansing...</p>
                         <p className="text-green-400 animate-pulse">&gt; Mock Migration 2 successful. Data validation 100% pass rate. Downtime estimated at 8 hours.</p>
                         <p className="text-green-400">&gt; ✅ Migration plan generated. Ready for cutover scheduling.</p>
                    </div>
                     <div className="p-8">
                        <h3 className="text-xl font-bold font-headline mb-4 text-white">Use Case: Manufacturing Co. S/4HANA Transformation</h3>
                        <p className="text-neutral-300">
                           A global manufacturing firm was facing a 24-month timeline and a multi-million dollar budget for their S/4HANA migration. Sasha was deployed to automate the process. It reduced the project timeline to just 9 months by autonomously handling data analysis, cleansing, and validation cycles. This resulted in a 60% cost saving and allowed the business to realize the benefits of S/4HANA over a year ahead of schedule.
                        </p>
                     </div>
                </div>
            </div>

            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="max-w-xl text-base leading-7 text-neutral-300 lg:max-w-lg">
                        <h2 className="text-2xl font-bold text-white font-headline">How It Works</h2>
                        <p className="mt-6">
                          Sasha acts as an autonomous migration expert, understanding the complexities of SAP landscapes and executing the migration with precision and control.
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
