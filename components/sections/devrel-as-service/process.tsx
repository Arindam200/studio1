import React from "react";
import {
  CheckCircle2,
  ArrowRight,
  Search,
  LightbulbIcon,
  Rocket,
  BarChart,
} from "lucide-react";

const steps = [
  {
    name: 'Discovery',
    description: 'We analyze your current DevRel efforts and identify opportunities for improvement.',
    icon: Search,
    details: [
      'Audit existing developer programs',
      'Analyze community engagement',
      'Identify growth opportunities',
      'Assessment report'
    ]
  },
  {
    name: 'Strategy',
    description: 'Develop a customized roadmap aligned with your business goals and developer needs.',
    icon: LightbulbIcon,
    details: [
      'Custom roadmap creation',
      'Resource allocation',
      'Timeline planning',
      'KPI definition'
    ]
  },
  {
    name: 'Implementation',
    description: 'Execute the strategy with our experienced team of DevRel professionals.',
    icon: Rocket,
    details: [
      'Content creation',
      'Community building',
      'Plan exciting campaigns',
      'Developer engagement'
    ]
  },
  {
    name: 'Measurement',
    description: 'Track KPIs and adjust strategies based on data-driven insights.',
    icon: BarChart,
    details: [
      'Performance tracking',
      'Analytics review',
      'Strategy adjustment',
      'ROI measurement'
    ]
  }
];
export default function Process() {
  return (
    <div id="process" className="bg-black text-white py-8 max-sm:px-5 sm:py-10 flex flex-col justify-center items-center">
      <div className="text-center font-semibold lg:text-5xl text-2xl sm:pb-4">
        How it{" "}
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600">
          Works
        </span>{" "}
        ?
      </div>
      <div className="sm:mt-16 mt-8">
        <div className="space-y-12">
          {steps.map((step, stepIdx) => (
            <div key={step.name} className="relative">
              <div className="relative flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <div className="relative flex">
                    <span className="h-16 w-16 rounded-md bg-zinc-900 flex items-center justify-center ring-8 ring-black">
                      <step.icon
                        className="h-8 w-8 text-orange-500"
                        aria-hidden="true"
                      />
                    </span>
                    {stepIdx !== steps.length - 1 && (
                      <div className="hidden md:block absolute left-8 top-16 h-24 w-px bg-gradient-to-b from-orange-500 to-gray-700" />
                    )}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center">
                    <h3 className="text-xl mt-2.5 font-bold text-white">
                      {step.name}
                    </h3>
                    {stepIdx !== steps.length - 1 && (
                      <ArrowRight className="hidden md:block h-5 w-5 text-orange-500 ml-4" />
                    )}
                  </div>
                  <p className="mt-2 text-gray-400">{step.description}</p>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {step.details.map((detail, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-3 text-sm"
                      >
                        <CheckCircle2 className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-300">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}