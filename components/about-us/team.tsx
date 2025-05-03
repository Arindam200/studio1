"use client";
import { TeamCard } from "./team-card";
import { teamMembers } from "@/constants/data";
import { motion } from "motion/react";

export const Team = () => {
  return (
    <motion.div
      className="mt-28 mb-32 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="top-[-2rem] left-[65%] absolute bg-gradient-to-t opacity-50 dark:opacity-60 dark:lg:opacity-50 from-primary dark:to-primary to-primary blur-[5em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out size-[12rem] -rotate-[60deg]"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 md:text-5xl">
          Meet Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary1 to-primary ">
            Leadership Team
          </span>{" "}
        </h2>
        <p className="text-muted-foreground ">
          We’re a team of writers, engineers and DevRels <br /> who care about
          clarity, craft and developer outcomes.
        </p>
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
