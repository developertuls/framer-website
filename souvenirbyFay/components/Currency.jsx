
"use client";

import { useCurrency } from "@/context/CurrencyContext";

const options = {
  BDT: { currency: "BDT", symbol: "৳", rate: 1 },
  USD: { currency: "USD", symbol: "$", rate: 0.0091 },
  GBP: { currency: "GBP", symbol: "£", rate: 0.0072 },
  EUR: { currency: "EUR", symbol: "€", rate: 0.0084 },
};

export default function Currency() {
  const { currency, changeCurrency } = useCurrency();

  return (
    <div className="flex gap-2">
      {Object.keys(options).map((key) => (
        <button
          key={key}
          onClick={() => changeCurrency(options[key])}
          className={`px-3 py-1 border rounded ${
            currency === key ? "bg-black text-white" : ""
          }`}
        >
          {key}
        </button>
      ))}
    </div>
  );
}
