"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowUp, Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/50 bg-background/60 backdrop-blur-md py-10 relative">
      <div className="container max-w-7xl px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <Avatar className="h-7 w-7 border border-border">
            <AvatarImage src="/IMG_2259.jpeg" alt="CanhDEV" className="object-cover" />
            <AvatarFallback className="text-[10px]">CD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-foreground">
              Cảnh DEV (Do Canh Tommy)
            </span>
            <p className="text-xs text-muted-foreground">
              {t.footer.copyright}
            </p>
          </div>
        </div>

        {/* Tech Credits */}
        <div className="hidden lg:flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
          <span>Crafted with</span>
          <Heart className="h-3 w-3 text-red-500 fill-red-500 inline" />
          <span>using Next.js & shadcn/ui</span>
        </div>

        {/* Links & Back to Top */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground"
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="h-8 w-8 rounded-full border-border/80 text-muted-foreground hover:text-foreground ml-2"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
