"use client";

import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "Senior Frontend Developer",
      company: "Tech Corp",
      period: "2023 - Present",
      description: "Leading the frontend team, migrating to Next.js 14, and establishing design systems.",
    },
    {
      role: "Frontend Developer",
      company: "Creative Agency",
      period: "2021 - 2023",
      description: "Developed award-winning websites for international clients using React and GSAP.",
    },
    {
      role: "Junior Developer",
      company: "StartUp Inc",
      period: "2019 - 2021",
      description: "Full stack development with Node.js and React. Built internal dashboard tools.",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-12 block">
          My Experience
        </label>
        
        <div className="space-y-12 max-w-3xl">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-4 md:gap-10 border-l border-border pl-6 md:pl-0 md:border-l-0"
            >
              <div className="min-w-[140px] text-sm text-muted-foreground pt-1">
                {exp.period}
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-xl font-semibold text-primary">{exp.role}</h3>
                <h4 className="text-base font-medium text-foreground">{exp.company}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
