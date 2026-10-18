"use client";

import React, { useRef } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Shuffle from "@/components/ui/Shuffle";
import {
  Code,
  Smartphone,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Globe2,
  CheckCircle2,
} from "lucide-react";

const About = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.4"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  const highlights = [
    {
      icon: Layers,
      title: "Full-Stack Web",
      desc: "React, Next.js, TypeScript, Tailwind, Node.js, and modern REST/GraphQL APIs.",
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      desc: "Cross-platform mobile apps using Flutter, Android Kotlin, and iOS Swift.",
    },
    {
      icon: Zap,
      title: "Performance First",
      desc: "Optimized Core Web Vitals, accessible UI components, and clean architecture.",
    },
    {
      icon: Globe2,
      title: "Global Collaboration",
      desc: "Experienced with remote workflows, agile teams, and bilingual communication.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="container max-w-7xl px-4 md:px-6 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-10">
          <Badge
            variant="outline"
            className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider gap-1.5 border-border/80 bg-muted/40"
          >
            <Sparkles className="h-3 w-3 text-primary" />
            {t.about.title}
          </Badge>
          <div className="pt-2">
            <Shuffle
              text="I'm Do Canh Tommy"
              shuffleDirection="right"
              duration={0.45}
              animationMode="evenodd"
              shuffleTimes={3}
              ease="power2.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover
              respectReducedMotion={true}
              loop={false}
              loopDelay={0}
              className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground"
            />
          </div>
        </div>

        {/* Content Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Story Narrative */}
          <div ref={containerRef} className="lg:col-span-7 space-y-6">
            <motion.p
              style={{ opacity }}
              className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed tracking-tight text-foreground/90 transition-colors"
            >
              {t.about.content}
            </motion.p>

            <div className="pt-4 flex flex-wrap gap-2.5">
              {[
                "Next.js 15",
                "React 19",
                "TypeScript",
                "Flutter",
                "Node.js",
                "Python",
                "Tailwind CSS",
                "shadcn/ui",
              ].map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="px-3 py-1 text-xs font-mono rounded-lg border border-border/40 hover:bg-accent/80 transition-colors"
                >
                  <CheckCircle2 className="h-3 w-3 mr-1 text-emerald-500" />
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Highlights Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="border-border/60 bg-card/60 backdrop-blur-sm hover:border-primary/40 hover:bg-card/90 transition-all duration-300 shadow-sm group">
                    <CardContent className="p-4 sm:p-5 flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-normal">
                          {item.desc}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
