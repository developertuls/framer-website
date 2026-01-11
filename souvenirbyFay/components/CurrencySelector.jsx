
"use client";

import { useCurrency } from "@/context/CurrencyContext";

export default function CurrencySelector() {
  const { currency, setCurrency } = useCurrency();

  return (
    <select
      value={currency}
      onChange={(e) => setCurrency(e.target.value)}
      className="border px-3 py-1 rounded-lg bg-white"
    >
      <option value="GBP">£ GBP</option>
      <option value="USD">$ USD</option>
      <option value="EUR">€ EUR</option>
      <option value="BDT">৳ BDT</option>
      <option value="AED">د.إ AED</option>
    </select>
  );
}
