
"use client";

import { useState, useRef, useEffect } from "react";
import { useCurrency } from "@/context/CurrencyContext";
import { motion, AnimatePresence } from "framer-motion";
import { FaCaretDown } from "react-icons/fa";
import Image from "next/image";

export default function CurrencySelector() {
  const { currency, changeCurrency , loading } = useCurrency();
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

  const currencies = [
    { code: "GBP", label: "GBP", symbol: "£", image: "/flags/gb.png" },
    { code: "USD", label: "USD", symbol: "$", image: "/flags/us.png" },
    { code: "EUR", label: "EUR", symbol: "€", image: "/flags/europ.png" },
    { code: "BDT", label: "BDT", symbol: "৳", image: "/flags/bd.png" },
    { code: "AED", label: "AED", symbol: "د.إ", image: "/flags/arob.png" },
    { code: "SAR", label: "SAR", symbol: "﷼", image: "/flags/sa.png" },
  ];

  const active =
    currencies.find((c) => c.code === currency) || currencies[0];

  // ⏳ Loading guard
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
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {/* FLAG */}
        <Image
          src={active.image}
          alt={active.code}
          width={28}
          height={28}
          className="rounded-full"
        />

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
            className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-md z-50"
            role="listbox"
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
                role="option"
                aria-selected={c.code === currency}
              >
                <Image src={c.image} alt={c.code} width={18} height={18} />
                <span className="flex-1">{c.label}</span>
                <span className="opacity-70">{c.symbol}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
