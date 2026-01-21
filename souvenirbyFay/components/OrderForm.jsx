
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useCurrency } from "@/context/CurrencyContext";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import emailjs from "emailjs-com";

export default function OrderForm({ product, mode = "product" }) {
  const { convertPrice } = useCurrency();
  const { t } = useLanguage();
  const { addToCart } = useCart();
  const router = useRouter();

  const [quantity, setQuantity] = useState(1);
  const [glassBox, setGlassBox] = useState("with");
  const [customText, setCustomText] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [email, setEmail] = useState("");
  const [selectedSize, setSelectedSize] = useState(null);

  

  // ===============================
  // SUBMIT
  // ===============================
 const handleSubmit = (e) => {
  e.preventDefault();

  if (!selectedSize) {
    alert("Please select a size");
    return;
  }

  addToCart({
    id: Date.now(),
    type: mode,
    title: product?.title || "Custom Order",
    image: mode === "product" ? product?.image : null,
    size: selectedSize,
    glassBox,
    quantity,
    customText,
    specialRequest,
    email,
    // phone,
    // FullName,
  });

  router.push("/cart");
};


  return (
    <form
      onSubmit={handleSubmit}
      className=" flex justify-center px-4 sm:px-6 lg:px-8 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl bg-[#fcffff] rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 space-y-8"
      >
        {/* TITLE */}
        {mode === "product" && product?.title && (
          <h1 className="text-center text-3xl font-serif">
            {product.title}
          </h1>
        )}

        {/* PRICE NOTE */}
        <div className="rounded-2xl bg-gradient-to-r from-[#5c2574] to-[#7a3fa1] p-4 text-center text-sm text-white">
          {t("priceAfterReview")}
        </div>

        {/* SIZE */}
        <div className="space-y-3">
          <p className="text-sm font-medium">{t("selectSize")}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {["13", "10"].map((size) => (
              <button
                type="button"
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`rounded-2xl border p-5 text-left transition ${
                  selectedSize === size
                    ? "bg-[#501a67] text-white"
                    : "bg-white hover:border-[#501a67]"
                }`}
              >
                <p className="font-medium">{size} inch Engagement Tray</p>
                <p className="text-sm mt-1">
                  {t("from")} {convertPrice(size === "13" ? 115 : 100)}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* GLASS BOX */}
        <div className="grid grid-cols-2 gap-4">
          {["with", "without"].map((type) => (
            <button
              type="button"
              key={type}
              onClick={() => setGlassBox(type)}
              className={`rounded-full py-3 text-sm font-medium transition ${
                glassBox === type
                  ? "bg-[#290d35] text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {t(type === "with" ? "withGlass" : "withoutGlass")}
            </button>
          ))}
        </div>

        {/* CUSTOM TEXT */}
        <textarea
          value={customText}
          onChange={(e) => setCustomText(e.target.value)}
          placeholder="Custom text"
          className="w-full rounded-2xl border bg-gray-50 p-4 text-sm focus:ring-2 focus:ring-[#336a68] outline-none"
        />

        {/* QUANTITY */}
        <div className="flex justify-between items-center bg-gray-50 rounded-2xl p-4">
          <span>{t("quantity")}</span>
          <div className="flex gap-4 items-center">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="h-9 w-9 rounded-full bg-white shadow text-lg"
            >
              −
            </button>
            <span>{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="h-9 w-9 rounded-full bg-white shadow text-lg"
            >
              +
            </button>
          </div>
        </div>

        {/* SPECIAL REQUEST */}
        <textarea
          value={specialRequest}
          onChange={(e) => setSpecialRequest(e.target.value)}
          placeholder="Special request"
          className="w-full rounded-2xl border bg-gray-50 p-4 text-sm focus:ring-2 focus:ring-[#336a68] outline-none"
        />

        {/* CUSTOMER INFO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="name"
            placeholder="Full Name"
            required
            className="w-full rounded-2xl border bg-gray-50 p-4 text-sm focus:ring-2 focus:ring-[#336a68] outline-none"
          />
          <input
           value={email}
          onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full rounded-2xl border bg-gray-50 p-4 text-sm focus:ring-2 focus:ring-[#336a68] outline-none"
          />
        </div>

        <input
          name="phone"
          placeholder="Phone"
          required
          className="w-full rounded-2xl border bg-gray-50 p-4 text-sm focus:ring-2 focus:ring-[#336a68] outline-none"
        />

        {/* SUBMIT */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full rounded-full bg-[#336a68] py-4 text-white text-lg font-medium shadow-lg"
        >
          {mode === "custom" ? "Submit Custom Order" : "Add to Cart"}
        </motion.button>
      </motion.div>
    </form>
  );
}
