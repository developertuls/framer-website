
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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto max-w-2xl rounded-3xl bg-[#fcffff] shadow-2xl p-6 sm:p-8 md:p-10 shadow-xl space-y-8"
    >
      {/* TITLE */}
      {mode === "product" && product?.title && (
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900">
          {product.title}
        </h1>
      )}

      {/* PRICE NOTE */}
      <div className="rounded-2xl bg-gradient-to-r from-[#5c2574] to-[#7a3fa1] p-4 text-center text-sm sm:text-base text-white shadow">
        {t("priceAfterReview")}
      </div>

      {/* SIZE */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-gray-700">
          {t("selectSize")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {["13", "10"].map((size) => (
            <motion.button
              key={size}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setSelectedSize(size)}
              className={`rounded-2xl border p-5 text-left transition-all ${
                selectedSize === size
                  ? "bg-[#501a67] text-white shadow-lg"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              <p className="font-medium">
                {size} inch Engagement Tray
              </p>
              <p className="mt-1 text-sm opacity-80">
                {t("from")} {convertPrice(size === "13" ? 115 : 100)}
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* GLASS BOX */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-gray-700">
          {t("glassBoxes")}
        </p>

        <div className="grid grid-cols-2 gap-4">
          {["with", "without"].map((type) => (
            <motion.button
              key={type}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setGlassBox(type)}
              className={`rounded-xl py-3 border transition-all ${
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
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          {t("customText") || "Custom Text"}
        </label>
        <textarea
          value={customText}
          onChange={(e) => setCustomText(e.target.value)}
          placeholder={t("customTextPlaceholder") || "Names, date, short quote..."}
          className="w-full rounded-2xl border p-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 resize-none"
          rows={3}
        />
      </div>

      {/* QUANTITY */}
      <div className="flex items-center justify-between rounded-2xl border p-4">
        <p className="text-sm font-medium text-gray-700">
          {t("quantity") || "Quantity"}
        </p>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="h-9 w-9 rounded-full border text-lg hover:bg-gray-100"
          >
            −
          </button>
          <span className="min-w-[24px] text-center font-medium">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="h-9 w-9 rounded-full border text-lg hover:bg-gray-100"
          >
            +
          </button>
        </div>
      </div>

      {/* SPECIAL REQUEST */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          {t("specialRequest") || "Special Request"}
        </label>
        <textarea
          value={specialRequest}
          onChange={(e) => setSpecialRequest(e.target.value)}
          placeholder={t("specialRequestPlaceholder") || "Any additional requests..."}
          className="w-full rounded-2xl border p-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 resize-none"
          rows={3}
        />
      </div>

      {/* SUBMIT */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.96 }}
        className="w-full rounded-2xl bg-[#336a68] hover:cursor-pointer  py-4 text-white text-lg font-medium hover:bg-[#4e9492] transition"
      >
        {mode === "custom"
          ? t("submitCustomOrder") || "Submit Custom Order"
          : t("addToCart") || "Add to Cart"}
      </motion.button>

      <p className="text-center text-xs text-gray-500">
        {t("noReturn")}
      </p>
    </motion.div>
  );
}
