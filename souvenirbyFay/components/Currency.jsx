
"use client";

import { useCurrency } from "@/context/CurrencyContext";

const options = ["BDT", "USD", "GBP", "EUR"];

export default function Currency() {
  const { currency, changeCurrency } = useCurrency();

  return (
    <div className="flex gap-2">
      {options.map((code) => (
        <button
          key={code}
          onClick={() => changeCurrency(code)}
          className={`px-3 py-1 border rounded transition
            ${currency === code ? "bg-black text-white" : "bg-white"}
          `}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
