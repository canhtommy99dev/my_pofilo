"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.5"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8 block">
          About Me
        </label>
        <div ref={containerRef} className="max-w-4xl">
          <motion.p 
            style={{ opacity }}
            className="text-3xl md:text-5xl font-medium leading-tight text-primary transition-colors"
          >
            I'm a passionate developer with 5+ years of experience building modern web applications. 
            I specialize in React, Next.js, and creating intuitive user experiences. 
            Based in SF, focusing on performance, accessibility, and clean code.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
