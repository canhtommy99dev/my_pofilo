"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, Sparkles, Building2 } from "lucide-react";

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="container max-w-5xl px-4 md:px-6 mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 space-y-3">
          <Badge
            variant="outline"
            className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider gap-1.5 border-border/80 bg-muted/40"
          >
            <Sparkles className="h-3 w-3 text-primary" />
            {t.experience.title}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Career Journey & Experience
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Demonstrated track record of delivering high-impact frontend and full-stack solutions.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-border/70 ml-4 md:ml-32 space-y-10 pl-6 md:pl-10">
          {t.experience.items.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-6 flex items-center justify-center">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40 opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-primary border-2 border-background" />
                </span>
              </div>

              {/* Experience Card */}
              <Card className="border-border/60 bg-card/60 backdrop-blur-sm hover:border-primary/40 hover:bg-card/90 transition-all duration-300 shadow-sm group">
                <CardHeader className="pb-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors">
                        {exp.role}
                      </CardTitle>
                      <div className="flex items-center gap-2 pt-1 text-sm font-medium text-muted-foreground">
                        <Building2 className="h-3.5 w-3.5 text-primary/70" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="w-fit text-xs font-mono font-normal border-border/80 bg-muted/40 gap-1.5 px-3 py-1 rounded-full"
                    >
                      <Calendar className="h-3 w-3 text-muted-foreground" />
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
