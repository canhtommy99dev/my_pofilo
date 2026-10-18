"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SplitText from "@/components/ui/SplitText";
import { FlipFadeText } from "@/components/ui/flip-fade-text"
import ASCIIText from "@/components/ui/ASCIIText";
// import Shuffle from '@/components/ui/Shuffle';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-background overflow-hidden">

      {/* Avatar */}
      <ASCIIText
        enableWaves
        asciiFontSize={8}
        text="Cảnh DEV"
      />

      <div className="relative z-10 flex flex-col items-center justify-center px-4 md:px-6 py-12 md:py-24 space-y-8 text-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="pt-10"
        >
          <Avatar className="h-24 w-24  md:h-32 md:w-32 border-2 border-muted">
            <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
            <AvatarFallback>CanhDEV</AvatarFallback>
          </Avatar>
        </motion.div>
        <SplitText
          text="CanhDEV.code('Hello World')"
          className="text-2xl font-semibold text-center"
          delay={70}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-50px"
          textAlign="center"
          showCallback
        />
        <FlipFadeText
          words={[t.hero.vername1, t.hero.vername2, t.hero.vername3, t.hero.vername4]}
          interval={5000}
        />

        {/* Headline */}


        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-20 text-4xl md:text-6xl lg:text-2xl font-bold tracking-tight max-w-4xl text-primary"
        >
          {t.hero.headline}
        </motion.h1>

        {/* CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 pt-2"
        >
          <Button size="lg" className="rounded-full h-10 px-8 text-base">
            {t.hero.cta} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;
