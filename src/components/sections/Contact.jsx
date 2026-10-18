"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  ArrowRight,
  Sparkles,
  Copy,
  Check,
  Send,
  MapPin,
  Clock,
  Github,
  Linkedin,
} from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const email = "canhdev.dev@gmail.com";

  const handleCopyEmail = () => {
    try {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container max-w-5xl px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="relative overflow-hidden border-border/80 bg-gradient-to-b from-card/90 via-card/60 to-card/90 backdrop-blur-xl shadow-2xl rounded-3xl p-6 sm:p-10 md:p-14 text-center">
            {/* Subtle Gradient Glow inside Card */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            {/* Availability Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8 relative z-10">
              <Badge
                variant="outline"
                className="px-3.5 py-1.5 rounded-full text-xs font-medium gap-2 border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 backdrop-blur-md"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                {t.hero?.status || "Available for projects"}
              </Badge>

              <Badge
                variant="outline"
                className="px-3 py-1.5 rounded-full text-xs font-mono text-muted-foreground gap-1.5 border-border/80 bg-background/50 backdrop-blur-md"
              >
                <Clock className="h-3 w-3 text-primary" />
                <span>Response &lt; 24h</span>
              </Badge>

              <Badge
                variant="outline"
                className="px-3 py-1.5 rounded-full text-xs font-mono text-muted-foreground gap-1.5 border-border/80 bg-background/50 backdrop-blur-md"
              >
                <MapPin className="h-3 w-3 text-primary" />
                <span>Vietnam & Remote</span>
              </Badge>
            </div>

            {/* Title & Description */}
            <div className="max-w-2xl mx-auto space-y-4 relative z-10">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                {t.contact.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                {t.contact.description}
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-8 pb-4 relative z-10">
              <Button
                asChild
                size="lg"
                className="h-12 px-8 rounded-full shadow-xl shadow-primary/15 gap-2.5 text-sm sm:text-base font-medium w-full sm:w-auto"
              >
                <a href={`mailto:${email}?subject=Project%20Inquiry%20from%20Portfolio`}>
                  <Send className="h-4 w-4" />
                  <span>{t.contact.buttons.getInTouch}</span>
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleCopyEmail}
                className="h-12 px-6 rounded-full border-border/80 gap-2 text-sm sm:text-base font-medium bg-background/60 hover:bg-accent/80 transition-all w-full sm:w-auto"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-500" />
                    <span>Copied! ({email})</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Copy Email</span>
                  </>
                )}
              </Button>
            </div>

            {/* Social Links Footer */}
            <div className="pt-8 mt-6 border-t border-border/40 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-muted-foreground relative z-10">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <Github className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-border">•</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <Linkedin className="h-3.5 w-3.5" />
                <span>LinkedIn</span>
              </a>
              <span className="text-border">•</span>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>{email}</span>
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
