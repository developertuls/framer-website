
"use client";
import { useState } from "react";
import Image from "next/image";
import { useCurrency } from "@/context/CurrencyContext";

export default function CurrencySwitcher() {
  const { currency, setCurrency, currencyList } = useCurrency();
  const [open, setOpen] = useState(false);

  const current = currencyList[currency];

  return (
    <div className="relative">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 border rounded-full px-3 py-2 bg-white hover:bg-gray-100 transition"
      >
        <Image
          src={current.flag}
          alt={currency}
          width={20}
          height={20}
          className="rounded-full"
        />
        <span className="font-medium text-sm">
          {currency} ({current.symbol})
        </span>
        <span className="text-xs">▼</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white border rounded-xl shadow-lg z-50 overflow-hidden">
          {Object.keys(currencyList).map((cur) => (
            <button
              key={cur}
              onClick={() => {
                setCurrency(cur);
                setOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-100 text-sm"
            >
              <Image
                src={currencyList[cur].flag}
                alt={cur}
                width={18}
                height={18}
                className="rounded-full"
              />
              <span className="flex-1">
                {cur} ({currencyList[cur].symbol})
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
