
import { CheckCircle2 } from "lucide-react";
import ContactDialog from "@/components/website-components/ContactDialog";
import ChatInput from "@/components/website-components/ChatInput";


const implementationSteps = [
    {
      title: "1. Connect Your Data",
      description: "Sasha autonomously integrates with your data sources, whether they're in cloud storage like AWS S3, databases like BigQuery, or enterprise systems like SAP."
    },
    {
      title: "2. Define Your Objective",
      description: "Simply tell Sasha your business goal in natural language, such as 'Forecast next quarter's sales for our top 5 products' or 'Predict which customers are likely to churn.'"
    },
    {
      title: "3. Autonomous Feature Engineering",
      description: "Sasha intelligently analyzes your data, automatically creating and selecting the most relevant features to build a highly predictive model, saving hundreds of data science hours."
    },
    {
      title: "4. Model Training & Selection",
      description: "Sasha trains multiple state-of-the-art models in parallel, from deep neural networks to gradient boosted trees, and automatically selects the top-performing one for your specific use case."
    },
    {
      title: "5. One-Click Deployment",
      description: "With a single command, Sasha deploys the winning model as a scalable, secure API endpoint, ready for integration into your applications."
    },
    {
      title: "6. Continuous Monitoring & Retraining",
      description: "The work doesn't stop at deployment. Sasha continuously monitors model performance and data drift, automatically triggering retraining to ensure your predictions are always accurate."
    }
];

const benefits = [
    "Reduce time-to-market for ML models from months to hours.",
    "Eliminate the need for large, specialized MLOps teams.",
    "Ensure models are always performing optimally with automated monitoring.",
    "Democratize AI by allowing business users to launch ML initiatives.",
];

export default function AutomatedMLPipelinesPage() {
  return (
    <div className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="lg:max-w-lg">
                        <p className="text-base font-semibold leading-7 text-primary">Solution</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-headline">Automated ML Pipelines</h1>
                        <p className="mt-6 text-xl leading-8 text-neutral-300">
                            Sasha transforms machine learning from a complex, manual process into an autonomous, self-optimizing engine for business growth.
                        </p>
                    </div>
                </div>
            </div>

            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                <div className="w-[48rem] max-w-none rounded-xl bg-neutral-900 shadow-xl ring-1 ring-neutral-400/10 sm:w-[57rem]">
                    <div className="p-4 bg-neutral-800 text-xs text-neutral-400 font-mono">
                        <p>&gt; Sasha, build and deploy a demand forecasting model using our retail sales data from BigQuery.</p>
                        <p className="text-green-400 animate-pulse">&gt; Analyzing schema... 2.4M rows detected.</p>
                        <p className="text-green-400 animate-pulse">&gt; Initiating autonomous feature engineering...</p>
                        <p className="text-green-400 animate-pulse">&gt; Training 5 candidate models... [XGBoost, LSTM, Prophet...]</p>
                        <p className="text-green-400 animate-pulse">&gt; Best model found: XGBoost (RMSE: 12.45). Deploying to secure endpoint...</p>
                        <p className="text-green-400">&gt; ✅ API Endpoint ready: `https://api.sasha-agentic/prod/forecast`</p>
                    </div>
                     <div className="p-8">
                        <h3 className="text-xl font-bold font-headline mb-4 text-white">Real-World Example: Retail Demand Forecasting</h3>
                        <p className="text-neutral-300">
                            A leading retailer used Sasha to automate their demand forecasting. By connecting their sales data, Sasha autonomously built and deployed a model that reduced forecasting errors by 35%, leading to a 15% reduction in stockouts and a 10% increase in revenue. The entire process, from data connection to deployment, took less than a day.
                        </p>
                     </div>
                </div>
            </div>

            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="max-w-xl text-base leading-7 text-neutral-300 lg:max-w-lg">
                        <h2 className="text-2xl font-bold text-white font-headline">How It Works</h2>
                        <p className="mt-6">
                           Sasha's agentic approach means you don't manage infrastructure or write boilerplate code. You simply state your goal, and Sasha executes the end-to-end process.
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
              Ready to Automate?
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
