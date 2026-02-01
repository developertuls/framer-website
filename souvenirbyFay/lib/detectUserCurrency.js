
// lib/detectUserCurrency.js
export async function detectUserCurrency() {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();

    const map = {
      BD: "BDT",
      CA: "CAD",
      US: "USD",
      GB: "GBP",
    };

    return map[data.country_code] || "USD";
  } catch {
    return "USD";
  }
}
