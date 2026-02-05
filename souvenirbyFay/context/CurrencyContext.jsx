
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const CurrencyContext = createContext();

const currencyMap = {
  US: "USD",
  GB: "GBP",
  CA: "CAD",
  SA: "SAR",
  BD: "BDT",
};

export const currencyList = {
  USD: { symbol: "$", rate: 1, flag: "/flags/us.png" },
  GBP: { symbol: "£", rate: 0.79, flag: "/flags/gb.png" },
  CAD: { symbol: "C$", rate: 1.35, flag: "/flags/canada.png" },
  SAR: { symbol: "﷼", rate: 3.75, flag: "/flags/sa.webp" },
 
};

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    const saved = localStorage.getItem("currency");

    if (saved) {
      setCurrency(saved);
      return;
    }

    const country = Cookies.get("user-country") || "US";
    const detectedCurrency = currencyMap[country] || "USD";

    setCurrency(detectedCurrency);
  }, []);

  useEffect(() => {
    localStorage.setItem("currency", currency);
  }, [currency]);

  const convertPrice = (amount) => {
    const rate = currencyList[currency].rate;
    return amount * rate;
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        currencyList,
        convertPrice,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => useContext(CurrencyContext);
