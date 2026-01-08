
"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex gap-4">
      <button onClick={() => setLang("en")}>EN</button>
      <button onClick={() => setLang("bn")}>BN</button>
    </div>
  );
}
