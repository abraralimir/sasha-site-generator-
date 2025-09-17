
import { CheckCircle2 } from "lucide-react";
import ContactDialog from "@/components/website-components/ContactDialog";
import ChatInput from "@/components/website-components/ChatInput";

const implementationSteps = [
    {
      title: "1. Secure System Integration",
      description: "Sasha securely connects to your core financial systems, including ERPs (SAP, Oracle), accounting software (QuickBooks, Xero), and banking APIs, using encrypted protocols."
    },
    {
      title: "2. Define Reporting Cadence & Rules",
      description: "Specify your reporting requirements: 'Generate monthly P&L, balance sheet, and cash flow statements. Flag any expense categories that are 15% over budget.'"
    },
    {
      title: "3. Autonomous Data Consolidation",
      description: "Sasha automatically pulls data from all connected systems, handling currency conversions, inter-company eliminations, and data reconciliation to create a single source of truth."
    },
    {
      title: "4. Report Generation & Analysis",
      description: "The agent generates pixel-perfect financial statements and autonomously writes an executive summary that highlights key variances, trends, and potential financial risks."
    },
    {
      title: "5. Compliance & Audit Trail",
      description: "Every action Sasha takes is logged, creating a fully transparent and auditable trail. The system can be configured to follow specific compliance rules like GAAP or IFRS."
    },
    {
        "title": "6. Board-Ready Distribution",
        "description": "Sasha formats the final reports into board-ready presentations or secure PDFs and automatically distributes them to the specified stakeholders on schedule."
    }
];

const benefits = [
    "Close your books in days, not weeks, with fully automated reconciliation.",
    "Drastically reduce the risk of human error in financial statements.",
    "Ensure continuous compliance with regulatory standards.",
    "Free up your finance team from manual data entry to focus on strategic analysis.",
    "Gain real-time visibility into financial health, not just at month-end.",
];

export default function AutomatedFinancialReportingPage() {
  return (
    <div className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="lg:max-w-lg">
                        <p className="text-base font-semibold leading-7 text-primary">Solution</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-headline">Automated Financial Reporting</h1>
                        <p className="mt-6 text-xl leading-8 text-neutral-300">
                            Eliminate manual reporting errors and delays. Sasha connects to your financial systems to automate compliance, generate reports, and perform complex financial analysis.
                        </p>
                    </div>
                </div>
            </div>

            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <div className="w-[48rem] max-w-none rounded-xl bg-neutral-900 shadow-xl ring-1 ring-neutral-400/10 sm:w-[57rem]">
                    <div className="p-4 bg-neutral-800 text-xs text-neutral-400 font-mono">
                         <p>&gt; Sasha, prepare the EOM financial package for the board.</p>
                         <p className="text-green-400 animate-pulse">&gt; Connecting to SAP S/4HANA and multiple banking APIs...</p>
                         <p className="text-green-400 animate-pulse">&gt; Consolidating data from 5 international subsidiaries. Reconciling 1.2M transactions...</p>
                         <p className="text-green-400 animate-pulse">&gt; Analysis: Revenue is up 8% QoQ, but COGS increased by 15%. Root cause: increased shipping costs.</p>
                         <p className="text-green-400 animate-pulse">&gt; Generating P&L, Balance Sheet, and Cash Flow statements.</p>
                         <p className="text-green-400">&gt; ✅ EOM Board Package generated and sent to stakeholders. Audit trail saved.</p>
                    </div>
                     <div className="p-8">
                        <h3 className="text-xl font-bold font-headline mb-4 text-white">Use Case: Global Month-End Close</h3>
                        <p className="text-neutral-300">
                            A multinational corporation with operations in 10 countries used to spend 15 days on their month-end financial close. Sasha was deployed to automate the process. By integrating with their various regional ERPs, Sasha autonomously consolidated financial data, performed inter-company reconciliations, and generated the complete reporting package. The close process was reduced from 15 days to just 4 hours, and the accuracy of the reports improved significantly.
                        </p>
                     </div>
                </div>
            </div>

            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="max-w-xl text-base leading-7 text-neutral-300 lg:max-w-lg">
                        <h2 className="text-2xl font-bold text-white font-headline">How It Works</h2>
                        <p className="mt-6">
                          Sasha acts as an autonomous financial controller, executing complex reporting workflows with precision, speed, and full auditability.
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
