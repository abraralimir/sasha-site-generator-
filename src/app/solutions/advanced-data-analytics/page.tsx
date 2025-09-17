
import { CheckCircle2 } from "lucide-react";
import ContactDialog from "@/components/website-components/ContactDialog";
import ChatInput from "@/components/website-components/ChatInput";

const implementationSteps = [
    {
      title: "1. Unified Data Integration",
      description: "Sasha connects to all your disparate data sources—databases, data lakes, SaaS tools, and event streams—creating a unified, queryable view of your entire business landscape."
    },
    {
      title: "2. Natural Language Querying",
      description: "Ask complex business questions in plain English. For example, 'What was our customer lifetime value for users acquired through paid search last quarter, segmented by country?'"
    },
    {
      title: "3. Autonomous Insight Discovery",
      description: "Sasha doesn't just answer questions; it proactively surfaces hidden patterns, correlations, and anomalies in your data that you didn't even know to look for, alerting you to critical opportunities and threats."
    },
    {
      title: "4. Automated Report & Dashboard Generation",
      description: "Based on your objectives, Sasha autonomously designs and generates interactive dashboards and reports, complete with visualizations, trend analysis, and executive summaries."
    },
    {
      title: "5. Root Cause Analysis",
      description: "When a key metric changes, Sasha can perform a root cause analysis, digging through layers of data to explain not just *what* happened, but *why* it happened."
    },
    {
        "title": "6. Predictive Analytics & Forecasting",
        "description": "Sasha moves beyond historical data to generate predictive insights. It can forecast future trends, predict business outcomes, and run simulations to model the impact of potential decisions."
    }
];

const benefits = [
    "Transform data from a cost center into a strategic asset.",
    "Empower non-technical users to perform sophisticated data analysis.",
    "Reduce reliance on overloaded data teams and expensive BI tools.",
    "Gain proactive, real-time insights instead of reactive, historical reports.",
    "Make faster, data-driven decisions with a higher degree of confidence.",
];

export default function AdvancedDataAnalyticsPage() {
  return (
    <div className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="lg:max-w-lg">
                        <p className="text-base font-semibold leading-7 text-primary">Solution</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-headline">Advanced Data Analytics</h1>
                        <p className="mt-6 text-xl leading-8 text-neutral-300">
                           Go beyond dashboards. Sasha is an autonomous data analyst that turns raw data into actionable intelligence, discovering patterns and generating insights 24/7.
                        </p>
                    </div>
                </div>
            </div>

            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                <div className="w-[48rem] max-w-none rounded-xl bg-neutral-900 shadow-xl ring-1 ring-neutral-400/10 sm:w-[57rem]">
                    <div className="p-4 bg-neutral-800 text-xs text-neutral-400 font-mono">
                         <p>&gt; Sasha, analyze our Q3 sales data and identify key growth drivers and churn indicators.</p>
                         <p className="text-green-400 animate-pulse">&gt; Integrating data from Salesforce, Google Analytics, and Stripe...</p>
                         <p className="text-green-400 animate-pulse">&gt; Autonomous analysis initiated. Generating 54 potential hypotheses...</p>
                         <p className="text-green-400 animate-pulse">&gt; Insight Found: Customers who use 'Feature X' within 3 days have a 70% higher LTV.</p>
                         <p className="text-green-400 animate-pulse">&gt; Insight Found: Churn risk increases by 45% for users in the 'EMEA' region who haven't logged in for 15 days.</p>
                         <p className="text-green-400">&gt; ✅ Generated 'Q3 Performance Review' dashboard with 7 key findings.</p>
                    </div>
                     <div className="p-8">
                        <h3 className="text-xl font-bold font-headline mb-4 text-white">Use Case: E-commerce Performance Analysis</h3>
                        <p className="text-neutral-300">
                           An online retailer was struggling to understand the drivers of customer churn. Sasha was given access to their sales and product usage data. Within hours, it identified a critical behavioral pattern: customers who didn't make a second purchase within 45 days were 90% likely to churn. Sasha then autonomously drafted an email campaign for the marketing team to target this specific segment with a personalized offer, reducing churn by 22% in the following quarter.
                        </p>
                     </div>
                </div>
            </div>

            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="max-w-xl text-base leading-7 text-neutral-300 lg:max-w-lg">
                        <h2 className="text-2xl font-bold text-white font-headline">How It Works</h2>
                        <p className="mt-6">
                          Sasha functions as a tireless member of your data team, using its agentic capabilities to not just report on data, but to interpret it and recommend actions.
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
