"use client";

import React, { createContext, useContext, useState, useSyncExternalStore } from "react";
import { en } from "./dictionaries/en";
import { vi } from "./dictionaries/vi";

const LanguageContext = createContext({
  language: "en",
  toggleLanguage: () => {},
  t: en,
});

function subscribe(callback) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot() {
  if (typeof window === "undefined") return "en";
  try {
    const val = localStorage.getItem("language");
    return val === "vi" ? "vi" : "en";
  } catch {
    return "en";
  }
}

function getServerSnapshot() {
  return "en";
}

export const LanguageProvider = ({ children }) => {
  const storeLang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [overrideLang, setOverrideLang] = useState(null);

  const language = overrideLang || storeLang;

  const toggleLanguage = (lang) => {
    if (lang === "en" || lang === "vi") {
      setOverrideLang(lang);
      try {
        localStorage.setItem("language", lang);
      } catch {
        // ignore
      }
    }
  };

  const t = language === "vi" ? vi : en;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
