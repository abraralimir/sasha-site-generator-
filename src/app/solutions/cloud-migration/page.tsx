
import { CheckCircle2 } from "lucide-react";
import ContactDialog from "@/components/website-components/ContactDialog";
import ChatInput from "@/components/website-components/ChatInput";

const implementationSteps = [
    {
      title: "1. Automated Discovery & Assessment",
      description: "Sasha connects to your on-premise environment (using vCenter or other tools) to autonomously discover all applications, servers, databases, and their dependencies. It analyzes performance and usage to recommend the optimal target architecture in the cloud."
    },
    {
      title: "2. Target Architecture Generation",
      description: "Based on the assessment, Sasha generates a 'best-fit' target architecture in your chosen cloud (e.g., AWS, Azure, GCP), using a mix of IaaS, PaaS, and serverless components to optimize for cost and performance."
    },
    {
      title: "3. Autonomous Migration Planning",
      description: "The agent generates a detailed, phased migration plan, including pre-migration checklists, data replication strategies (e.g., using AWS DMS or Azure Migrate), and a sequenced cutover plan designed to minimize downtime."
    },
    {
      title: "4. Automated Data & Schema Replication",
      description: "Sasha orchestrates the replication of data from on-premise databases to cloud-native databases, including schema conversion and validation to ensure data integrity."
    },
    {
      title: "5. Infrastructure as Code (IaC) Generation",
      description: "Sasha writes the necessary Infrastructure as Code (e.g., Terraform, CloudFormation) to provision the target environment, ensuring it is repeatable, scalable, and secure."
    },
    {
        "title": "6. Post-Migration Validation & Optimization",
        "description": "After migration, Sasha performs automated validation to ensure the application is performing correctly in the cloud. It then monitors usage and provides recommendations for cost optimization and performance tuning."
    }
];

const benefits = [
    "Reduce cloud migration time and costs by up to 60%.",
    "De-risk complex migrations with automated dependency mapping and data validation.",
    "Ensure your target architecture is optimized for cloud-native performance and cost-efficiency.",
    "Eliminate manual effort in infrastructure provisioning and data replication.",
    "Achieve faster time-to-value from your cloud investment.",
];

export default function CloudMigrationPage() {
  return (
    <div className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="lg:max-w-lg">
                        <p className="text-base font-semibold leading-7 text-primary">Solution</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-headline">Autonomous Cloud Migration</h1>
                        <p className="mt-6 text-xl leading-8 text-neutral-300">
                           Seamlessly migrate your applications, databases, and infrastructure from on-premise servers to any cloud provider (AWS, Azure, Google Cloud) or execute complex cloud-to-cloud migrations with an autonomous AI agent.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:flex lg:items-center lg:justify-center">
                <div className="rounded-xl bg-neutral-900 shadow-xl ring-1 ring-neutral-400/10">
                    <div className="p-4 bg-neutral-800 text-xs text-neutral-400 font-mono">
                         <p>&gt; Sasha, plan and execute a migration of our on-premise monolith application to a microservices architecture on AWS.</p>
                         <p className="text-green-400 animate-pulse">&gt; Analyzing source infrastructure... 35 VMs, 12TB Oracle DB detected.</p>
                         <p className="text-green-400 animate-pulse">&gt; Generating target architecture on AWS... Recommending EKS for containers, RDS for database.</p>
                         <p className="text-green-400 animate-pulse">&gt; Creating autonomous data replication and validation plan.</p>
                         <p className="text-green-400 animate-pulse">&gt; Mock migration initiated. No downtime expected for production.</p>
                         <p className="text-green-400">&gt; ✅ Migration plan successful. Ready for phased cutover.</p>
                    </div>
                     <div className="p-8">
                        <h3 className="text-xl font-bold font-headline mb-4 text-white">Use Case: On-Premise to Azure Migration</h3>
                        <p className="text-neutral-300">
                           A financial services company wanted to move their legacy, on-premise trading application to Azure to improve scalability and reduce costs. A manual migration was quoted at 18 months. Sasha was deployed and autonomously mapped the entire environment, designed a new microservices-based architecture on Azure Kubernetes Service (AKS), and automated the data migration from their on-premise SQL Server to Azure SQL. The entire migration was completed and validated in 5 months with zero downtime.
                        </p>
                     </div>
                </div>
            </div>

            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="max-w-xl text-base leading-7 text-neutral-300 lg:max-w-lg">
                        <h2 className="text-2xl font-bold text-white font-headline">How It Works</h2>
                        <p className="mt-6">
                            Sasha acts as an autonomous cloud architect and migration specialist, handling every phase of the project from discovery to optimization.
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
