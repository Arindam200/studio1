import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    name: 'Discovery',
    description: 'We analyze your current DevRel efforts and identify opportunities for improvement.'
  },
  {
    name: 'Strategy',
    description: 'Develop a customized roadmap aligned with your business goals and developer needs.'
  },
  {
    name: 'Implementation',
    description: 'Execute the strategy with our experienced team of DevRel professionals.'
  },
  {
    name: 'Measurement',
    description: 'Track KPIs and adjust strategies based on data-driven insights.'
  }
];

export default function Process() {
  return (
    <div id="process" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Process
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            A systematic approach to elevate your developer relations
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-8">
            {steps.map((step, stepIdx) => (
              <div key={step.name} className="relative">
                <div className="relative flex items-center space-x-4">
                  <div>
                    <span className="h-12 w-12 rounded-full bg-indigo-50 flex items-center justify-center ring-8 ring-white">
                      <CheckCircle2 className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-medium text-gray-900">
                      {step.name}
                    </h3>
                    <p className="text-base text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </div>
                {stepIdx !== steps.length - 1 && (
                  <div className="absolute left-6 top-12 h-16 w-px bg-gray-300" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}