"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  FileCode2,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import SplitText from "@/components/ui/SplitText";
import { FlipFadeText } from "@/components/ui/flip-fade-text";
import ASCIIText from "@/components/ui/ASCIIText";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-24 pb-16 px-4 md:px-6 overflow-hidden">
      {/* Background ASCII Canvas (ambient aesthetic layer) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-25 select-none -z-10">
        <ASCIIText
          enableWaves
          asciiFontSize={7}
          text="Cảnh DEV"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl mx-auto text-center space-y-7">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Badge
            variant="outline"
            className="px-3.5 py-1.5 rounded-full text-xs font-medium gap-2 border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 backdrop-blur-md shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            {t.hero.status}
          </Badge>
        </motion.div>

        {/* Profile Avatar with Ambient Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative group"
        >
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/30 via-purple-500/20 to-blue-500/30 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
          <Avatar className="relative h-28 w-28 md:h-36 md:w-36 border-2 border-border/80 shadow-2xl ring-4 ring-background/60">
            <AvatarImage
              src="/IMG_2259.jpeg"
              alt="Cảnh DEV Profile"
              className="object-cover"
            />
            <AvatarFallback className="text-xl font-bold">CD</AvatarFallback>
          </Avatar>
        </motion.div>

        {/* Greeting & Code Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-muted/60 border border-border/60 text-xs md:text-sm font-mono text-muted-foreground shadow-sm"
        >
          <FileCode2 className="h-4 w-4 text-primary" />
          <SplitText
            text="CanhDEV.code('Hello World')"
            className="font-medium"
            delay={50}
            duration={1.1}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            showCallback
          />
        </motion.div>

        {/* Dynamic Role Titles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full min-h-[3.5rem] flex items-center justify-center"
        >
          <FlipFadeText
            words={[t.hero.vername1, t.hero.vername2, t.hero.vername3, t.hero.vername4]}
            interval={4500}
            className="font-extrabold tracking-tight text-3xl sm:text-5xl md:text-6xl"
          />
        </motion.div>

        {/* Headline Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          {t.hero.headline}
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          <Button
            asChild
            size="lg"
            className="h-11 px-7 rounded-full shadow-lg shadow-primary/10 gap-2 font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <a href="#contact">
              <Mail className="h-4 w-4" />
              <span>{t.hero.cta}</span>
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-11 px-6 rounded-full border-border/80 gap-2 font-medium backdrop-blur-sm transition-all hover:bg-accent/60"
          >
            <a href="#projects">
              <span>{t.nav.projects}</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>

          {/* Social Quick Links */}
          <div className="flex items-center gap-2 pl-1">
            <Button
              asChild
              variant="outline"
              size="icon"
              className="h-11 w-11 rounded-full border-border/80 text-muted-foreground hover:text-foreground"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              className="h-11 w-11 rounded-full border-border/80 text-muted-foreground hover:text-foreground"
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Quick Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl mx-auto text-left"
        >
          <div className="p-3 rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm">
            <div className="text-xl font-bold text-foreground">5+ Years</div>
            <div className="text-xs text-muted-foreground">Engineering Exp</div>
          </div>
          <div className="p-3 rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm">
            <div className="text-xl font-bold text-foreground">20+ Projects</div>
            <div className="text-xs text-muted-foreground">Shipped & Scaled</div>
          </div>
          <div className="col-span-2 sm:col-span-1 p-3 rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm">
            <div className="text-xl font-bold text-foreground">Full-Stack</div>
            <div className="text-xs text-muted-foreground">Web & Mobile</div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors"
      >
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
