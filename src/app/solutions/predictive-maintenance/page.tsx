
import { CheckCircle2 } from "lucide-react";
import ContactDialog from "@/components/website-components/ContactDialog";
import ChatInput from "@/components/website-components/ChatInput";

const implementationSteps = [
    {
      title: "1. IoT Sensor Data Integration",
      description: "Sasha ingests real-time data from IoT sensors on your critical equipment—vibration, temperature, pressure, acoustics, and more—via MQTT, OPC-UA, or direct API connections."
    },
    {
      title: "2. Historical Data Analysis",
      description: "The agent analyzes historical maintenance logs and failure data to understand the unique failure signatures of each piece of equipment."
    },
    {
      title: "3. Anomaly Detection & Failure Prediction",
      description: "Using unsupervised machine learning, Sasha establishes a 'healthy' baseline for each machine. It then monitors for subtle deviations from this baseline that are precursors to failure, often weeks in advance."
    },
    {
      title: "4. Automated Work Order Generation",
      description: "When Sasha predicts an impending failure, it automatically generates a detailed work order in your CMMS (e.g., IBM Maximo, SAP PM), including the likely root cause and recommended parts."
    },
    {
      title: "5. Optimized Maintenance Scheduling",
      description: "Sasha schedules the maintenance at the most opportune time, taking into account production schedules and technician availability to minimize operational disruption."
    },
    {
        "title": "6. Feedback Loop and Model Refinement",
        "description": "After maintenance is performed, Sasha incorporates the technician's feedback into its models, continuously improving the accuracy of its predictions over time."
    }
];

const benefits = [
    "Reduce unplanned downtime by up to 70%.",
    "Decrease maintenance costs by 25-30% by moving from reactive to predictive schedules.",
    "Extend the operational lifespan of your critical equipment.",
    "Improve technician safety by addressing issues before catastrophic failure occurs.",
    "Optimize spare parts inventory by knowing what will be needed and when.",
];

export default function PredictiveMaintenancePage() {
  return (
    <div className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="lg:max-w-lg">
                        <p className="text-base font-semibold leading-7 text-primary">Solution</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-headline">Predictive Maintenance</h1>
                        <p className="mt-6 text-xl leading-8 text-neutral-300">
                            Stop reacting to failures. For manufacturing and IoT, Sasha predicts equipment failure before it happens, minimizing downtime and saving millions.
                        </p>
                    </div>
                </div>
            </div>

            <div className="lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:flex lg:items-center lg:justify-center">
                <div className="w-full max-w-none rounded-xl bg-neutral-900 shadow-xl ring-1 ring-neutral-400/10 lg:w-[57rem]">
                    <div className="p-4 bg-neutral-800 text-xs text-neutral-400 font-mono">
                         <p>&gt; Sasha, monitor the health of our CNC machine fleet.</p>
                         <p className="text-green-400 animate-pulse">&gt; Ingesting real-time vibration and temperature data from 250 machines...</p>
                         <p className="text-green-400 animate-pulse">&gt; Establishing normal operating baselines for each machine model...</p>
                         <p className="text-green-400 animate-pulse">&gt; Anomaly Detected: Machine #17 shows a 15% increase in high-frequency vibrations.</p>
                         <p className="text-green-400 animate-pulse">&gt; Prediction: 85% probability of bearing failure within 7-10 days. Generating work order in SAP PM and ordering replacement part.</p>
                         <p className="text-green-400">&gt; ✅ Maintenance scheduled for non-production hours. Catastrophic failure averted.</p>
                    </div>
                     <div className="p-8">
                        <h3 className="text-xl font-bold font-headline mb-4 text-white">Use Case: Manufacturing Plant Downtime Prevention</h3>
                        <p className="text-neutral-300">
                           An automotive parts manufacturer was losing over $20 million annually to unplanned downtime on their production line. Sasha was deployed to monitor their critical machinery. In the first month, Sasha predicted a gearbox failure on a primary stamping press three weeks before it was due to happen. The maintenance team was able to schedule the repair during a planned shutdown, preventing 48 hours of lost production, which alone saved the company over $1.5 million.
                        </p>
                     </div>
                </div>
            </div>

            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="max-w-xl text-base leading-7 text-neutral-300 lg:max-w-lg">
                        <h2 className="text-2xl font-bold text-white font-headline">How It Works</h2>
                        <p className="mt-6">
                          Sasha acts as an AI reliability engineer, constantly listening to your machines, diagnosing potential problems, and automating the entire maintenance workflow.
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
