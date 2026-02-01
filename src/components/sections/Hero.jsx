"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 md:px-6 py-12 md:py-24 space-y-8 text-center bg-background">
      
      {/* Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Avatar className="h-24 w-24 md:h-32 md:w-32 border-2 border-muted">
          <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </motion.div>

      {/* Status Pill */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border border-border/50"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-sm font-medium text-secondary-foreground">Available for work</span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl text-primary"
      >
        Clean, thoughtful, user-focused web development.
      </motion.h1>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 pt-4"
      >
        <Button size="lg" className="rounded-full h-12 px-8 text-base">
          Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
