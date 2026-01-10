

"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CurrencyContext = createContext(null);

const DEFAULT_CURRENCY = {
  currency: "BDT",
  symbol: "৳",
  rate: 1,
};

export default function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState(DEFAULT_CURRENCY);

  // 🔁 Manual change
  const changeCurrency = (code) => {
    const map = {
      BDT: { currency: "BDT", symbol: "৳", rate: 1 },
      USD: { currency: "USD", symbol: "$", rate: 0.0091 },
      GBP: { currency: "GBP", symbol: "£", rate: 0.0072 },
      EUR: { currency: "EUR", symbol: "€", rate: 0.0084 },
    };

    const selected = map[code] || DEFAULT_CURRENCY;

    console.log("🔄 Currency manually changed:", selected);

    setCurrency(selected);
    localStorage.setItem("currency", JSON.stringify(selected));
  };

  // 🌍 Load / detect
  useEffect(() => {
    const saved = localStorage.getItem("currency");

    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed?.rate) {
          console.log("📦 Currency loaded:", parsed);
          setCurrency(parsed);
          return;
        }
      } catch {
        localStorage.removeItem("currency");
      }
    }

    console.log("🌍 Default currency applied:", DEFAULT_CURRENCY);
    setCurrency(DEFAULT_CURRENCY);
    localStorage.setItem("currency", JSON.stringify(DEFAULT_CURRENCY));
  }, []);

  // ✅ SAFE convert (currency always exists)
  const convert = (price) => {
    if (!currency || !currency.rate) return Number(price);
    return Number((price * currency.rate).toFixed(2));
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency: currency.currency,
        symbol: currency.symbol,
        rate: currency.rate,
        convert,
        changeCurrency,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

// ✅ custom hook
export const useCurrency = () => {
  const ctx = useContext(CurrencyContext);
  if (!ctx) {
    throw new Error("useCurrency must be used inside CurrencyProvider");
  }
  return ctx;
};
