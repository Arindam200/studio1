import { TeamCard } from "./team-card";
import { teamMembers } from "@/constants/data";
export const Team = () => {
  return (
    <div className="mt-28 mb-32">
      <div className="text-2xl mb-10 font-primary font-semibold text-center leading-tight">
        Meet our Team
      </div>
      <div className="grid mx-auto max-w-4xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {teamMembers.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
};
