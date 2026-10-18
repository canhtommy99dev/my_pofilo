"use client";

import React from 'react'

import { useLanguage } from "@/lib/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t py-12 bg-background">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6 mx-auto">
        <p className="text-sm text-muted-foreground">
          {t.footer.copyright}
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
           <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
           <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
           <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
