"use client";

import React, { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { type Locale, defaultLocale, localeDirection, getTranslation } from "@/lib/i18n";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: ReturnType<typeof getTranslation>;
  dir: "rtl" | "ltr";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    // Check localStorage for saved locale
    const savedLocale = localStorage.getItem("locale") as Locale | null;
    if (savedLocale && (savedLocale === "fa" || savedLocale === "en")) {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
    // Update document direction
    document.documentElement.dir = localeDirection[newLocale];
    document.documentElement.lang = newLocale;
  };

  useEffect(() => {
    // Set initial direction
    document.documentElement.dir = localeDirection[locale];
    document.documentElement.lang = locale;
  }, [locale]);

  const value: LanguageContextType = {
    locale,
    setLocale,
    t: getTranslation(locale),
    dir: localeDirection[locale],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
