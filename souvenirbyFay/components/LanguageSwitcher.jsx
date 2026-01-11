
"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <select
      value={lang}
      onChange={(e) => setLang(e.target.value)}
      className="border px-3 py-1 rounded-lg"
    >
      <option value="en">English</option>
      <option value="bn">বাংলা</option>
      <option value="ar">Arabic</option>
    </select>
  );
}
