
"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const languages = [
    { code: "en", label: "English" },
    { code: "bn", label: "বাংলা" },
    { code: "ar", label: "العربية" },
  ];

  return (
    <div ref={ref} className="relative">
      {/* ICON BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="hover:cursor-pointer hover:bg-[#fffefe]   flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 transition"
      >
        <Globe className="w-5 h-5 text-[#7a9ddf]" />
        <span className="text-sm font-medium uppercase ">
          {lang}
        </span>
      </button>

      {/* DROPDOWN */}
      {open && (
      <AnimatePresence>
  {open && (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.95 }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg  overflow-hidden z-50"
    >
      {languages.map((l) => (
        <button
          key={l.code}
          onClick={() => {
            setLang(l.code);
            setOpen(false);
          }}
          className={`w-full px-4 py-3 text-left text-sm transition
            hover:bg-gray-100
            ${lang === l.code ? "bg-gray-100 font-medium" : ""}
          `}
        >
          {l.label}
        </button>
      ))}
    </motion.div>
  )}
</AnimatePresence>

      )}
    </div>
  );
}
