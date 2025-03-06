"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";
import CircularGallery from "@/components/ui/circular-gallery";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { arindamNoBg, amiteshNoBg, shivayNoBg } from "@/constants/image";
import { cn } from "@/lib/utils";

const jobOpenings = [
  {
    id: 1,
    title: "Senior Product Designer",
    department: "Design",
    location: "San Francisco, CA",
    type: "Full-time",
    isRemote: true,
    postedDate: "2 days ago",
  },
  {
    id: 2,
    title: "Frontend Developer",
    department: "Engineering",
    location: "New York, NY",
    type: "Full-time",
    isRemote: true,
    postedDate: "1 week ago",
  },
  {
    id: 3,
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Austin, TX",
    type: "Full-time",
    isRemote: false,
    postedDate: "3 days ago",
  },
  {
    id: 4,
    title: "UX Researcher",
    department: "Design",
    location: "Seattle, WA",
    type: "Full-time",
    isRemote: true,
    postedDate: "4 days ago",
  },
  {
    id: 5,
    title: "Backend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    isRemote: true,
    postedDate: "Just now",
  },
  {
    id: 6,
    title: "Product Manager",
    department: "Product",
    location: "Chicago, IL",
    type: "Full-time",
    isRemote: true,
    postedDate: "2 weeks ago",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    null
  );

  const filteredJobs = selectedDepartment
    ? jobOpenings.filter((job) => job.department === selectedDepartment)
    : jobOpenings;

  const departments = Array.from(
    new Set(jobOpenings.map((job) => job.department))
  );

  return (
    <div className="relative max-w-7xl overflow-x-hidden md:overflow-visible mx-auto">
      <div className="top-[-10rem] md:top-[-18rem] z-[-1] left-[-80%] md:left-[-20%] absolute bg-gradient-to-t opacity-50 dark:opacity-100 from-primary dark:to-primary to-primary blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out  h-[50rem] md:h-[60rem] w-[10rem] -rotate-[60deg]"></div>
      <div className="top-[-10rem] md:top-[-18rem] z-[-1] right-[-80%] md:right-[-20%] absolute bg-gradient-to-t opacity-50 dark:opacity-100 from-primary dark:to-primary to-primary blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out  h-[50rem] md:h-[60rem] w-[10rem] rotate-[40deg]"></div>
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-0 h-[60rem] max-h-fit flex flex-col lg:px-8">
        <div className="max-w-6xl mx-auto pt-20 pb-16 sm:pt-32 sm:pb-24">
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Badge className="mb-4 bg-primary/10 text-primary border-0 px-3 py-1 text-sm font-medium">
                We're hiring
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-6xl mb-6"
              variants={itemVariants}
            >
              Join Our Team
            </motion.h1>

            <motion.p
              className="mt-6 text-lg leading-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              We're on a mission to create products that delight our customers
              and simplify their work. Join us and help shape the future of how
              people interact with technology.
            </motion.p>

            <motion.div className="mt-10" variants={itemVariants}>
              <Button
                className="cta-button group px-6 py-6 rounded-full bg-primary hover:bg-primary/90"
                onClick={() =>
                  document
                    .getElementById("open-positions")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                See Open Positions
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative flex items-center group w-fit mx-auto justify-center gap-2"
        >
          <motion.img
            variants={itemVariants}
            className="w-36 md:!w-60 aspect-[3/4] bg-accent/20 backdrop-blur-md translate-y-4 translate-x-8 transition-all duration-200 ease-linear group-hover:translate-x-10 !-rotate-6 group-hover:-rotate-[5deg]  drop-shadow-2xl border-[3px] border-orange-200/40 object-cover rounded-lg"
            src={amiteshNoBg.src}
            width={1000}
            height={1000}
            alt="img-1"
          />
          <motion.img
            variants={itemVariants}
            className="w-44 md:!w-72 aspect-[3/4] bg-accent/20 backdrop-blur-md  z-10 shadow-3xl shadow-black border-[3px] drop-shadow-2xl  border-orange-200/40 object-cover rounded-lg"
            src={arindamNoBg.src}
            width={1000}
            height={1000}
            alt="img-1"
          />
          <motion.img
            variants={itemVariants}
            className="w-36 md:!w-60 aspect-[3/4] bg-accent/20 backdrop-blur-md translate-y-4 -translate-x-8 transition-all duration-200 ease-linear group-hover:-translate-x-10 !rotate-6 group-hover:rotate-[5deg] drop-shadow-2xl shadow-3xl shadow-black border-[3px] border-orange-200/40 object-cover rounded-lg"
            src={shivayNoBg.src}
            width={1000}
            height={1000}
            alt="img-1"
          />
        </motion.div>
      </section>

      {/* Job Openings Section */}
      <motion.section
        id="open-positions"
        className="px-6 lg:px-8 mt-20 pb-24 max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Open Positions
          </h2>

          {/* Department Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-10"
            variants={itemVariants}
          >
            <Button
              variant={selectedDepartment === null ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setSelectedDepartment(null)}
            >
              All
            </Button>

            {departments.map((dept) => (
              <Button
                key={dept}
                variant={selectedDepartment === dept ? "default" : "outline"}
                className="rounded-full"
                onClick={() => setSelectedDepartment(dept)}
              >
                {dept}
              </Button>
            ))}
          </motion.div>
        </motion.div>

        {/* Job Grid with staggered animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {filteredJobs.map((job) => (
            <motion.div key={job.id} variants={itemVariants}>
              <Card className="bg-opacity-70 relative group flex p-6 flex-col h-[20rem] overflow-hidden backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <div
                  className={cn(
                    "right-[-29rem] group-hover:opacity-100 opacity-0 z-[-1] absolute bg-gradient-to-t from-primary/10 dark:from-primary to-orange-200 dark:to-primary/90 blur-[4em] rounded-3xl transition-all duration-700 ease-out w-[10rem] md:w-[30rem] h-[20rem] md:h-[30rem] rotate-[54deg]",
                    "left-[50%] translate-x-[30%]"
                  )}
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-4">{job.title}</h3>

                  <div className="space-y-2 mb-5">
                    <div className="flex items-center text-neutral-500 dark:text-neutral-300 font-semibold text-xs">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-neutral-500 dark:text-neutral-300 font-semibold text-xs">
                      <Briefcase className="w-4 h-4 mr-2" />
                      <span>
                        {job.type}
                        {job.isRemote && " • Remote"}
                      </span>
                    </div>
                  </div>
                </div>
                <Button
                  className="w-fit flex items-center gap-2 hover:bg-accent/40 hover:text-primary group"
                  variant="secondary"
                >
                  <Link href={"#"}>Apply now</Link>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Careers;
