
"use client";

import { createContext, useContext, useState } from "react";
import en from "@/locales/en.json";
import bn from "@/locales/bn.json";
import ar from "@/locales/ar.json";

const LanguageContext = createContext();

const languages = { en, bn, ar };

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  const t = (key) => languages[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
