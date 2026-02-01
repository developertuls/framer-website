
"use client";

import { useState, useRef, useEffect } from "react";
import { useCurrency } from "@/context/CurrencyContext";
import { motion, AnimatePresence } from "framer-motion";
import { FaCaretDown } from "react-icons/fa";

const currencies = [
  { code: "BDT", label: "Bangladesh", symbol: "৳", flag: "🇧🇩" },
  { code: "CAD", label: "Canada", symbol: "$", flag: "🇨🇦" },
  { code: "USD", label: "United States", symbol: "$", flag: "🇺🇸" },
  { code: "GBP", label: "United Kingdom", symbol: "£", flag: "🇬🇧" },
];

export default function CurrencySelector() {
  const { currency, changeCurrency, loading } = useCurrency();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // 🔹 Outside click close
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const active =
    currencies.find((c) => c.code === currency) || currencies[0];

  // ⏳ Loading skeleton
  if (loading) {
    return (
      <div className="w-[90px] h-[40px] rounded-full bg-gray-200 animate-pulse" />
    );
  }

  return (
    <div ref={ref} className="relative">
      {/* BUTTON */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-full hover:bg-white transition"
      >
        <span className="text-lg">{active.flag}</span>
        <span className="text-sm font-medium">{active.code}</span>
        <FaCaretDown className="w-4 h-4 opacity-60" />
      </button>

      {/* DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-lg z-50"
          >
            {currencies.map((c) => (
              <button
                key={c.code}
                onClick={() => {
                  changeCurrency(c.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-100 ${
                  c.code === currency ? "bg-gray-50 font-medium" : ""
                }`}
              >
                <span className="text-lg">{c.flag}</span>
                <span className="flex-1">{c.code}</span>
                <span className="opacity-70">{c.symbol}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
