
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useCurrency } from "@/context/CurrencyContext";
import { useLanguage } from "@/context/LanguageContext";

export default function OrderForm({ product, mode = "product" }) {
  const { convertPrice } = useCurrency();
  const { t } = useLanguage();

  const [quantity, setQuantity] = useState(1);
  const [glassBox, setGlassBox] = useState("with");
  const [customText, setCustomText] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white rounded-3xl p-6 md:p-10 shadow space-y-8"
    >
      {/* TITLE */}
      {mode === "product" && product?.title && (
        <h1 className="text-3xl md:text-4xl font-serif text-center">
          {product.title}
        </h1>
      )}

      {/* PRICE INFO */}
      <div className="bg-gradient-to-r from-[#5c2574] to-[#7a3fa1] text-white p-5 rounded-2xl shadow-lg">
        <p className="text-center">{t("priceAfterReview")}</p>
      </div>

      {/* SIZE */}
      <div className="space-y-3">
        <p className="text-sm font-medium">{t("selectSize")}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {["13", "10"].map((size) => (
            <motion.button
              key={size}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedSize(size)}
              className={`rounded-2xl border p-4 text-left transition
                ${
                  selectedSize === size
                    ? "bg-[#501a67] text-white shadow-lg"
                    : "bg-white hover:bg-gray-50"
                }`}
            >
              <p className="font-medium">
                {size} inch Engagement Tray
              </p>
              <p className="opacity-80 mt-1">
                {t("from")} {convertPrice(size === "13" ? 115 : 100)}
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* GLASS BOX */}
      <div className="space-y-3">
        <p className="text-sm font-medium">{t("glassBoxes")}</p>
        <div className="grid grid-cols-2 gap-3">
          {["with", "without"].map((type) => (
            <motion.button
              key={type}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setGlassBox(type)}
              className={`py-3 rounded-xl border transition ${
                glassBox === type
                  ? "bg-[#290d35] text-white shadow"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {t(type === "with" ? "withGlass" : "withoutGlass")}
            </motion.button>
          ))}
        </div>
      </div>

      {/* CUSTOM TEXT */}
      <textarea
        value={customText}
        onChange={(e) => setCustomText(e.target.value)}
        placeholder={t("customTextPlaceholder") || "Names, date, short quote..."}
        className="w-full border rounded-2xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-purple-300"
      />

      {/* QUANTITY */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="h-10 w-10 rounded-full border text-xl"
        >
          −
        </button>
        <span className="font-medium">{quantity}</span>
        <button
          onClick={() => setQuantity((q) => q + 1)}
          className="h-10 w-10 rounded-full border text-xl"
        >
          +
        </button>
      </div>

      {/* SPECIAL REQUEST */}
      <textarea
        value={specialRequest}
        onChange={(e) => setSpecialRequest(e.target.value)}
        placeholder={t("specialRequest") || "Any additional requests..."}
        className="w-full border rounded-2xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-purple-300"
      />

      {/* SUBMIT BUTTON */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className="w-full bg-black text-white py-4 rounded-2xl text-lg font-medium"
      >
        {mode === "custom" ? t("submitCustomOrder") || "Submit Custom Order" : t("addToCart")}
      </motion.button>

      <p className="text-xs text-center text-gray-500">
        {t("noReturn")}
      </p>
    </motion.div>
  );
}
