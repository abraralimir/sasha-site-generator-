
import { CheckCircle2 } from "lucide-react";
import ContactDialog from "@/components/website-components/ContactDialog";
import ChatInput from "@/components/website-components/ChatInput";

const implementationSteps = [
    {
      title: "1. End-to-End Data Integration",
      description: "Sasha connects to every node of your supply chain: supplier ERPs, warehouse management systems (WMS), shipping carrier APIs, and point-of-sale data."
    },
    {
      title: "2. Autonomous Demand Forecasting",
      description: "Using advanced ML models, Sasha analyzes historical sales, seasonality, market trends, and even external factors like weather to create hyper-accurate demand forecasts for every SKU."
    },
    {
      title: "3. Intelligent Inventory Optimization",
      description: "Sasha automatically sets reorder points and safety stock levels for each item at each location, balancing the cost of carrying inventory against the risk of stockouts to maximize profitability."
    },
    {
      title: "4. Automated Purchase Order Generation",
      description: "When inventory drops to the reorder point, Sasha autonomously generates and sends purchase orders to your suppliers, ensuring you never run out of stock."
    },
    {
      title: "5. Real-time Logistics & Disruption Management",
      description: "Sasha tracks shipments in real-time. If a delay is detected (e.g., a container stuck at port), it can automatically re-route other shipments or arrange for alternative carriers to mitigate the impact."
    },
    {
        "title": "6. Performance & Cost Analysis",
        "description": "Receive continuous reports on key supply chain KPIs like inventory turnover, carrying costs, and on-time delivery rates, with Sasha providing actionable recommendations for improvement."
    }
];

const benefits = [
    "Reduce stockouts by up to 50% and increase sales.",
    "Lower inventory holding costs by up to 30% through optimized stock levels.",
    "Improve operational efficiency by automating manual procurement and logistics tasks.",
    "Increase supply chain resilience by proactively identifying and mitigating disruptions.",
    "Enhance collaboration with suppliers through automated communication and ordering.",
];

export default function IntelligentSupplyChainPage() {
  return (
    <div className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="lg:max-w-lg">
                        <p className="text-base font-semibold leading-7 text-primary">Solution</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-headline">Intelligent Supply Chain</h1>
                        <p className="mt-6 text-xl leading-8 text-neutral-300">
                           From forecasting demand to managing logistics, Sasha is an autonomous agent that optimizes your entire supply chain, reducing costs and eliminating stockouts.
                        </p>
                    </div>
                </div>
            </div>

            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                <div className="w-[48rem] max-w-none rounded-xl bg-neutral-900 shadow-xl ring-1 ring-neutral-400/10 sm:w-[57rem]">
                    <div className="p-4 bg-neutral-800 text-xs text-neutral-400 font-mono">
                         <p>&gt; Sasha, optimize inventory levels for our Q4 peak season.</p>
                         <p className="text-green-400 animate-pulse">&gt; Analyzing last 3 years of sales data and Q4 market trend reports...</p>
                         <p className="text-green-400 animate-pulse">&gt; Demand forecast generated. Predicted 30% uplift for SKU #8A-23E.</p>
                         <p className="text-green-400 animate-pulse">&gt; Adjusting safety stock and reorder points across 5 distribution centers.</p>
                         <p className="text-green-400 animate-pulse">&gt; Anomaly: Supplier 'Global Imports' has a 25% delay rate. Suggesting diversifying 15% of order to 'Reliable Co'.</p>
                         <p className="text-green-400">&gt; ✅ Inventory optimized for Q4. Automated POs will be sent on schedule.</p>
                    </div>
                     <div className="p-8">
                        <h3 className="text-xl font-bold font-headline mb-4 text-white">Use Case: CPG Demand & Inventory Planning</h3>
                        <p className="text-neutral-300">
                            A consumer packaged goods (CPG) company struggled with frequent stockouts of popular items and overstocking of others. Sasha was implemented to take over their demand and inventory planning. By analyzing point-of-sale data in real-time, Sasha created forecasts that were 40% more accurate than the company's previous methods. It then automated the entire procurement process, resulting in a 90% reduction in stockouts and a 25% reduction in excess inventory, adding millions to their bottom line.
                        </p>
                     </div>
                </div>
            </div>

            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="max-w-xl text-base leading-7 text-neutral-300 lg:max-w-lg">
                        <h2 className="text-2xl font-bold text-white font-headline">How It Works</h2>
                        <p className="mt-6">
                          Sasha operates as a 24/7 supply chain analyst and manager, making intelligent, data-driven decisions to keep your operations running smoothly and efficiently.
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
