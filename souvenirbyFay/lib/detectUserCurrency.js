
// lib/detectUserCurrency.js
import { countryToCurrency } from "./countryToCurrency";

export async function detectUserCurrency() {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();

    const countryCode = data.country; // BD, US, CA
    return countryToCurrency[countryCode] || "USD";
  } catch (err) {
    return "USD";
  }
}
