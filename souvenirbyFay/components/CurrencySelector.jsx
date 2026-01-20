"use client";

import { useState, useRef, useEffect } from "react";
import { useCurrency } from "@/context/CurrencyContext";
import { DollarSign } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCaretDown } from "react-icons/fa";
import Image from "next/image";

export default function CurrencySelector() {
  const { currency, setCurrency } = useCurrency();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

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
];




  const active = currencies.find(c => c.code === currency);

  return (
    <div ref={ref} className="relative">
      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-full hover:bg-white transition"
      >
  

        {/* FLAG / IMAGE */}
        {active?.image ? (
          
          <Image
            src={active.image}
            alt={active.code}
            width={30}
            height={30}
            className="rounded-full w-[30px] h-[30px]"
          />
        ) : (
          <span className="text-lg">{active?.flag}</span>
        )}




        <span className="text-sm font-medium">{active?.code}</span>
     <DollarSign className="w-4 h-4" />
     

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
          >
            {currencies.map((c) => (
              <button
                key={c.code}
                onClick={() => {
                  setCurrency(c.code);
                  setOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-100"
              >
                {c.image ? (
                  <Image src={c.image} alt={c.code} width={18} height={18} />
                ) : (
                  <span className="text-lg">{c.flag}</span>
                )}
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
