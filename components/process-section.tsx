import { Icon, IconProps } from "@tabler/icons-react";
import ProcessCard from "./process-card";
import { Data } from "@/data";

export default function ProcessSection({
  steps,
}: {
  steps: {
    name: string;
    description: string;
    icon: React.ForwardRefExoticComponent<
      IconProps & React.RefAttributes<Icon>
    >;
    details: React.JSX.Element[];
  }[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      {steps.map((step, stepIdx) => (
        <ProcessCard key={step.name} step={step} index={stepIdx} />
      ))}
    </div>
  );
}
