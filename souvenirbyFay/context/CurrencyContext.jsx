
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { detectUserCurrency } from "@/lib/detectUserCurrency";
import { currencyRates } from "@/lib/currencyRates";

const CurrencyContext = createContext(null);

// ✅ currency config এখানেই রাখো
// lib/countryToCurrency.js
export const countryToCurrency = {
  BD: "BDT",
  US: "USD",
  CA: "CAD",
  GB: "GBP",
  JP: "JPY",
};


export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Auto detect or load saved
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
      } catch {
        setCurrency("USD");
      } finally {
        setLoading(false);
      }
    }

    initCurrency();
  }, []);

  // 🔹 Manual change
  const changeCurrency = (newCurrency) => {
    setCurrency(newCurrency);
    localStorage.setItem("currency", newCurrency);
  };

  const convertPrice = (priceInGBP) => {
    if (!currency) return priceInGBP;
    const rate = currencyRates[currency] || 1;
    return (priceInGBP * rate).toFixed(2);
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        changeCurrency,
        convertPrice,
        loading,
        currencyInfo: currencyData[currency],
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => useContext(CurrencyContext);
