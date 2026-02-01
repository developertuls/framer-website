
export async function detectUserCurrency() {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();

    switch (data.country_code) {
      case "BD":
        return "BDT";
      case "SA":
        return "SAR";
      case "AE":
        return "AED";
      case "US":
        return "USD";
      case "GB":
        return "GBP";
      case "FR":
      case "DE":
        return "EUR";
      default:
        return "GBP";
    }
  } catch (error) {
    return "GBP";
  }
}
