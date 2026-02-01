
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { detectUserCurrency } from "@/lib/detectUserCurrency";
import { currencyRates } from "@/lib/currencyRates";
import { currencyData } from "@/lib/currencyData";

const CurrencyContext = createContext(null);

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Auto detect (first visit) or load saved currency
  useEffect(() => {
    async function initCurrency() {
      try {
        const saved = localStorage.getItem("currency");

        if (saved) {
          setCurrency(saved);
          setLoading(false);
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

  // 🔹 Manual currency change (dropdown)
  const changeCurrency = (newCurrency) => {
    setCurrency(newCurrency);
    localStorage.setItem("currency", newCurrency);
  };

  // 🔹 Price convert
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
