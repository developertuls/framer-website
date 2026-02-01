
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { detectUserCurrency } from "@/lib/detectUserCurrency";
import { currencyRates } from "@/lib/currencyRates";

const CurrencyContext = createContext();

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState("GBP");
  const [loading, setLoading] = useState(true);

  // 🔹 Load saved or auto detect
  useEffect(() => {
    async function initCurrency() {
      const saved = localStorage.getItem("currency");
      if (saved) {
        setCurrency(saved);
        setLoading(false);
        return;
      }

      const detected = await detectUserCurrency();
      setCurrency(detected);
      localStorage.setItem("currency", detected);
      setLoading(false);
    }

    initCurrency();
  }, []);

  // 🔹 Save manual change
  useEffect(() => {
    if (!loading) {
      localStorage.setItem("currency", currency);
    }
  }, [currency, loading]);

  const convertPrice = (priceInGBP) => {
    const rate = currencyRates[currency] || 1;
    return (priceInGBP * rate).toFixed(2);
  };

  return (
    <CurrencyContext.Provider
      value={{ currency, setCurrency, convertPrice, loading }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => useContext(CurrencyContext);
