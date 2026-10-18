"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Sparkles, FolderGit2 } from "lucide-react";

const Projects = () => {
  const { t } = useLanguage();

  const projectGradients = [
    "from-blue-500/20 via-indigo-500/10 to-transparent",
    "from-emerald-500/20 via-teal-500/10 to-transparent",
    "from-purple-500/20 via-pink-500/10 to-transparent",
    "from-amber-500/20 via-orange-500/10 to-transparent",
  ];

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="container max-w-7xl px-4 md:px-6 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 space-y-3">
          <Badge
            variant="outline"
            className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider gap-1.5 border-border/80 bg-muted/40"
          >
            <Sparkles className="h-3 w-3 text-primary" />
            {t.projects.title}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Featured Projects & Engineering Case Studies
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            A selection of web apps, analytics dashboards, and mobile platforms built with performance and clean code.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {t.projects.items.map((project, index) => {
            const gradient = projectGradients[index % projectGradients.length];

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border/60 bg-card/60 backdrop-blur-sm hover:border-primary/50 hover:bg-card/90 transition-all duration-300 shadow-sm flex flex-col justify-between overflow-hidden group">
                  {/* Decorative Project Header Banner */}
                  <div
                    className={`h-28 w-full bg-gradient-to-br ${gradient} p-5 flex items-center justify-between border-b border-border/40 relative overflow-hidden`}
                  >
                    <div className="p-2.5 rounded-xl bg-background/80 backdrop-blur-md border border-border/60 text-primary shadow-sm group-hover:scale-105 transition-transform">
                      <FolderGit2 className="h-5 w-5" />
                    </div>
                    <Badge
                      variant="outline"
                      className="text-[11px] font-mono bg-background/80 backdrop-blur-md border-border/60"
                    >
                      Production
                    </Badge>
                  </div>

                  <CardHeader className="pt-5 pb-3">
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ExternalLink className="h-4 w-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-primary" />
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground pt-1.5 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs font-mono font-normal border border-border/40 hover:bg-secondary/90 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-4 border-t border-border/40 flex items-center justify-between gap-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-xs h-8 px-3 rounded-lg gap-1.5 text-muted-foreground hover:text-foreground"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>Code</span>
                    </Button>
                    <Button
                      size="sm"
                      className="text-xs h-8 px-4 rounded-lg gap-1.5 shadow-sm"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
