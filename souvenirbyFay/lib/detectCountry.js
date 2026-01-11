
export function detectUserCurrency() {
  if (typeof window === "undefined") return "GBP";

  const lang = navigator.language;

  if (lang.includes("bn")) return "BDT";
  if (lang.includes("en-US")) return "USD";
  if (lang.includes("ar")) return "AED";
  if (lang.includes("fr") || lang.includes("de")) return "EUR";

  return "GBP";
}
