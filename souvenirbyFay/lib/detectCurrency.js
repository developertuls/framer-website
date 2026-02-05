
export function detectUserCurrency() {
  if (typeof window === "undefined") return "USD";

  const locale = navigator.language;

  if (locale.includes("GB")) return "GBP";
  if (locale.includes("CA")) return "CAD";
  if (locale.includes("SA") || locale.includes("ar")) return "SAR";

  return "USD";
}
