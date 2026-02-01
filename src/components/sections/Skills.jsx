"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const { t } = useLanguage();

  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
    "HTML5", "CSS3", "Tailwind CSS", "Sass", "GraphQL", 
    "PostgreSQL", "MongoDB", "Git", "Docker", "AWS", 
    "Figma", "Jest", "CI/CD"
  ];

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t.skills.title}
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Badge variant="outline" className="text-lg py-2 px-4 hover:bg-secondary/80 transition-colors cursor-default">
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
