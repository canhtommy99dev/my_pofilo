"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Shuffle from "@/components/ui/Shuffle";

const About = () => {
  const { t } = useLanguage();
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
          {t.about.title}
        </label>
        <Shuffle
          text="I'm Do Canh Tommy"
          shuffleDirection="right"
          duration={0.50}
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
        />
        <div ref={containerRef} className="max-w-4xl">
          <motion.p
            style={{ opacity }}
            className="text-3xl md:text-5xl font-medium leading-tight text-primary transition-colors"
          >
            {t.about.content}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
