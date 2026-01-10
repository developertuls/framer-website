
"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CurrencyContext = createContext(null);

export function useCurrency() {
  return useContext(CurrencyContext);
}

const DEFAULT = {
  currency: "BDT",
  symbol: "৳",
  rate: 1,
};

export default function CurrencyProvider({ children }) {
  const [state, setState] = useState(DEFAULT);

  // 🌍 Load currency (cookie → localStorage → default)
  useEffect(() => {
    try {
      const saved = localStorage.getItem("currency");
      if (saved) {
        setState(JSON.parse(saved));
        return;
      }

      const cookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("geo_currency="));

      if (cookie) {
        const value = JSON.parse(decodeURIComponent(cookie.split("=")[1]));
        setState(value);
        localStorage.setItem("currency", JSON.stringify(value));
      }
    } catch (e) {
      console.error("Currency load error:", e);
    }
  }, []);

  // 🔁 Manual switch
  const changeCurrency = (data) => {
    setState(data);
    localStorage.setItem("currency", JSON.stringify(data));
  };

  // 💱 Convert price
  const convert = (price) =>
    Number((Number(price) * state.rate).toFixed(2));

  return (
    <CurrencyContext.Provider
      value={{
        currency: state.currency,
        symbol: state.symbol,
        rate: state.rate,
        convert,
        changeCurrency,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}
