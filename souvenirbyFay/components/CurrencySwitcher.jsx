
"use client";

import { useCurrency } from "@/context/CurrencyContext";
import { countryCurrencyMap } from "@/utils/currencyMap";

export default function CurrencySwitcher() {
  const { setCurrency } = useCurrency();

  return (
    <select
      onChange={(e) => {
        const config = countryCurrencyMap[e.target.value];
        setCurrency(config.currency);
      }}
      className="border rounded px-2 py-1"
    >
      <option value="US">USD</option>
      <option value="BD">BDT</option>
      <option value="IN">INR</option>
    </select>
  );
}
