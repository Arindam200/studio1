"use client";
import { TeamCard } from "./team-card";
import { teamMembers } from "@/constants/data";
import { motion } from "motion/react";

export const Team = () => {
  return (
    <motion.div
      className="mt-28 mb-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl mb-10 font-primary font-semibold text-center leading-tight"
      >
        Meet our Team
      </motion.div>

      <div className="grid mx-auto max-w-4xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 * (index % 3), duration: 0.7 }}
          >
            <TeamCard member={member} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
