"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container px-4 md:px-6 mx-auto text-center">
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-primary">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contact.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="h-12 px-8 rounded-full text-base">
              <Mail className="mr-2 h-4 w-4" /> {t.contact.buttons.getInTouch}
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 rounded-full text-base">
              {t.contact.buttons.services} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
