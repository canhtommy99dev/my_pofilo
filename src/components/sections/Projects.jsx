"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Weather App",
      description: "A beautiful weather dashboard with real-time data visualization.",
      tags: ["React", "API", "Tailwind"],
    },
    {
      title: "Finance Dashboard",
      description: "Comprehensive financial analytics tool for personal use.",
      tags: ["Next.js", "Chart.js", "Supabase"],
    },
    {
      title: "Delivery Platform",
      description: "Tracking and management system for local logistics.",
      tags: ["Vue", "Firebase", "Maps"],
    },
    {
      title: "Portfolio 2024",
      description: "Modern minimalist portfolio built with Next.js 14.",
      tags: ["Next.js", "Framer Motion"],
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-12 block">
          Examples of My Work
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-border/50 bg-card/50 hover:bg-card/80 transition-colors cursor-pointer group">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <CardDescription className="text-base pt-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-normal text-muted-foreground">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
