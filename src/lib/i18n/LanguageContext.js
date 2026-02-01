"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { en } from "./dictionaries/en";
import { vi } from "./dictionaries/vi";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  // Load language from local storage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang && (savedLang === "en" || savedLang === "vi")) {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = language === "vi" ? vi : en;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
