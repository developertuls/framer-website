
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { detectUserCurrency } from "@/lib/detectUserCurrency";
import { currencyRates } from "@/lib/currencyRates";

const CurrencyContext = createContext(null);

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState("GBP");
  const [loading, setLoading] = useState(true);

  // 🔹 Auto detect / load saved
  useEffect(() => {
    async function initCurrency() {
      try {
        const saved = localStorage.getItem("currency");

        if (saved) {
          setCurrency(saved);
          return;
        }

        const detected = await detectUserCurrency();
        setCurrency(detected);
        localStorage.setItem("currency", detected);
      } catch (err) {
        setCurrency("USD"); // fallback
      } finally {
        setLoading(false);
      }
    }

    initCurrency();
  }, []);

  // 🔹 Manual change (dropdown / button)
  const changeCurrency = (newCurrency) => {
    setCurrency(newCurrency);
    localStorage.setItem("currency", newCurrency);
  };

  const convertPrice = (priceInGBP) => {
    const rate = currencyRates[currency] || 1;
    return (priceInGBP * rate).toFixed(2);
  };

  return (
    <CurrencyContext.Provider
      value={{ currency, changeCurrency, convertPrice, loading }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => {
  const ctx = useContext(CurrencyContext);
  if (!ctx) {
    throw new Error("useCurrency must be used inside CurrencyProvider");
  }
  return ctx;
};
