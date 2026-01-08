
"use client";

import { useCurrency } from "@/context/CurrencyContext";

export default function Currency() {
  const { currency, changeCurrency } = useCurrency();

  return (
    <div className="flex gap-3 items-center">
      {["GBP", "USD", "EUR"].map((cur) => (
        <button
          key={cur}
          onClick={() => changeCurrency(cur)}
          className={`px-3 py-1 text-sm border rounded
            ${currency === cur ? "bg-black text-white" : ""}
          `}
        >
          {cur}
        </button>
      ))}
    </div>
  );
}
