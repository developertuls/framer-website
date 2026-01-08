
"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CurrencyContext = createContext();

const rates = {
  GBP: 1,
  USD: 1.27,
  EUR: 1.17,
};

const symbols = {
  GBP: "£",
  USD: "$",
  EUR: "€",
};

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState("GBP");

  useEffect(() => {
    const saved = localStorage.getItem("currency");
    if (saved) setCurrency(saved);
  }, []);

  const changeCurrency = (cur) => {
    setCurrency(cur);
    localStorage.setItem("currency", cur);
  };

  const convert = (priceGBP) => {
    return (priceGBP * rates[currency]).toFixed(2);
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        symbol: symbols[currency],
        convert,
        changeCurrency,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => useContext(CurrencyContext);
