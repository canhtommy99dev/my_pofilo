"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Server,
  Smartphone,
  Wrench,
  Sparkles,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: Code2,
    description: "Modern, reactive web interfaces and high-performance design systems.",
    skills: [
      "React 19",
      "Next.js 15",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS v4",
      "GSAP Animations",
      "shadcn/ui",
      "HTML5 / CSS3",
      "Redux / Zustand",
    ],
  },
  {
    title: "Backend & Cloud",
    icon: Server,
    description: "Scalable server architectures, APIs, and robust data persistence.",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "RESTful APIs",
      "GraphQL",
      "Docker",
      "AWS Basics",
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    description: "Fluid cross-platform and native mobile user experiences.",
    skills: [
      "Flutter",
      "Dart",
      "Android (Kotlin)",
      "iOS (Swift)",
      "React Native",
      "Mobile UI/UX",
      "App Store & Play Store",
    ],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    description: "Continuous integration, quality testing, and developer tooling.",
    skills: [
      "Git & GitHub",
      "CI/CD Pipelines",
      "Jest & Testing",
      "Figma to Code",
      "Vite & Webpack",
      "Clean Architecture",
      "Performance Audit",
    ],
  },
];

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="container max-w-7xl px-4 md:px-6 mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14 space-y-3">
          <Badge
            variant="outline"
            className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider gap-1.5 border-border/80 bg-muted/40"
          >
            <Sparkles className="h-3 w-3 text-primary" />
            {t.skills.title}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Technical Proficiency & Tech Stack
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            A comprehensive set of modern technologies, libraries, and frameworks I use to bring ideas to production.
          </p>
        </div>

        {/* 4-Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Card className="h-full border-border/60 bg-card/60 backdrop-blur-sm hover:border-primary/40 hover:bg-card/90 transition-all duration-300 shadow-sm flex flex-col justify-between group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {cat.title}
                        </CardTitle>
                        <p className="text-xs text-muted-foreground pt-0.5">
                          {cat.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="px-2.5 py-1 text-xs font-normal border border-border/50 hover:border-primary/40 hover:bg-accent/80 transition-all cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
