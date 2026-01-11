
"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { detectUserCurrency } from "@/lib/detectCountry";
import { currencyRates } from "@/lib/currency";

const CurrencyContext = createContext();

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState("GBP");

  useEffect(() => {
    const userCurrency = detectUserCurrency();
    setCurrency(userCurrency);
  }, []);

  const convertPrice = (priceInGBP) => {
    return (priceInGBP * currencyRates[currency]).toFixed(2);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => useContext(CurrencyContext);
