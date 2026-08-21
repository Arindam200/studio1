"use client";
import { TeamCard } from "./team-card";
import { teamMembers } from "@/constants/data";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type TeamProps = {
  showHeader?: boolean;
  className?: string;
};

export const Team = ({ showHeader = true, className }: TeamProps) => {
  return (
    <motion.div
      className={cn("relative mt-28 mb-32", className)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="top-[-2rem] left-[65%] absolute bg-gradient-to-t opacity-50 dark:opacity-60 dark:lg:opacity-50 from-primary dark:to-primary to-primary blur-[5em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out size-[12rem] -rotate-[60deg]"></div>

      {showHeader ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 font-primary text-4xl font-normal tracking-tight md:text-5xl">
            Meet Our{" "}
            <span className="serif-accent font-accent italic font-normal text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary1 to-primary">
              Leadership Team
            </span>{" "}
          </h2>
          <p className="text-muted-foreground ">
            We’re a team of writers, engineers and DevRels <br /> who care about
            clarity, craft and developer outcomes.
          </p>
        </motion.div>
      ) : null}

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 md:grid-cols-3">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 * (index % 3), duration: 0.3 }}
          >
            <TeamCard member={member} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
