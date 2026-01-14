
"use client";

import { useState, useRef, useEffect } from "react";
import { useCurrency } from "@/context/CurrencyContext";
import { DollarSign, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CurrencySelector() {
  const { currency, setCurrency } = useCurrency();
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

  const currencies = [
    { code: "GBP", label: "GBP", symbol: "£", flag: "🇬🇧" },
    { code: "USD", label: "USD", symbol: "$", flag: "🇺🇸" },
    { code: "EUR", label: "EUR", symbol: "€", flag: "🇪🇺" },
    { code: "BDT", label: "BDT", symbol: "৳", flag: "🇧🇩" },
    { code: "AED", label: "AED", symbol: "د.إ", flag: "🇦🇪" },
  ];

  const active = currencies.find(c => c.code === currency);

  return (
    <div ref={ref} className="relative">
      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="hover:cursor-pointer      hover:bg-[#fffefe] bg-gray-100   flex items-center gap-2 px-3 py-2 rounded-full transition"
      >
        <DollarSign className="w-4 h-4" />
        <span className="text-sm font-medium">
          {active?.flag} {active?.code}
        </span>
        <ChevronDown className="w-4 h-4 opacity-60" />
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
      className="absolute right-0 mt-2 w-44 bg-[#fff] rounded-xl shadow-md overflow-hidden z-50"
    >
      {currencies.map((c) => (
        <button
          key={c.code}
          onClick={() => {
            setCurrency(c.code);
            setOpen(false);
          }}
          className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-100 transition
            ${currency === c.code ? "bg-gray-100 font-medium" : ""}
          `}
        >
          <span className="text-lg">{c.flag}</span>
          <span className="flex-1">{c.label}</span>
          <span className="opacity-70">{c.symbol}</span>
        </button>
      ))}
    </motion.div>
  )}
</AnimatePresence>

      )}
    </div>
  );
}
