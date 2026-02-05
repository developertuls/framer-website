
"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";



export default function OrderForm({ product }) {
  const { addToCart } = useCart();
  const router = useRouter();

  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [customText, setCustomText] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [email, setEmail] = useState("");

  const [addons, setAddons] = useState({
    coasterNoBase: false,
    coasterWithBase: false,
    flowerHeart: false,
  });

  // ================= PRICE CALCULATION =================
  const priceDetails = useMemo(() => {
    let base = 0;

    // ✅ SIZE BASED (Wedding)
    if (product?.type === "size-based") {
      const sizeData = product?.sizes?.find(
        (s) => s.label === selectedSize
      );
      base = sizeData?.price || 0;
    }

    // ✅ FIXED (Islamic)
    if (product?.type === "fixed") {
      base = product?.basePrice || 0;
    }

    let addonsTotal = 0;

    if (product?.type === "size-based") {
      if (addons.coasterNoBase) addonsTotal += 50;
      if (addons.coasterWithBase) addonsTotal += 60;
      if (addons.flowerHeart) addonsTotal += 120;
    }

    const finalTotal = (base + addonsTotal) * quantity;

    return { base, addonsTotal, finalTotal };
  }, [selectedSize, addons, quantity, product]);



  // ================= SUBMIT =================
  const handleSubmit = (e) => {
    e.preventDefault();

    if (product?.type === "size-based" && !selectedSize) {
      alert("Please select a tray size");
      return;
    }

    const selectedAddons = [];

    if (addons.coasterNoBase)
      selectedAddons.push({ label: "4 Coasters (No Base)", price: 50 });

    if (addons.coasterWithBase)
      selectedAddons.push({ label: "4 Coasters (With Base)", price: 60 });

    if (addons.flowerHeart)
      selectedAddons.push({
        label: "Flower Preservation (Heart)",
        price: 120,
      });

    addToCart({
      id: Date.now(),
      title: product?.title,
      image: product?.image,
      size: product?.type === "size-based" ? selectedSize : null,
      quantity,
      customText,
      specialRequest,
      email,
      addons: product?.type === "size-based" ? selectedAddons : [],
      price: priceDetails.finalTotal,
      category: product?.category,
    });

    router.push("/cart");
  };









const { currency, convertPrice, currencyList } = useCurrency();

const formatPrice = (amount) => {
  const converted = convertPrice(amount);

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(converted);
};







  return (
    <div className="min-h-screen py-16 px-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 space-y-8"
      >


        {/* PRICE NOTE */}
        <div className="rounded-2xl bg-gradient-to-r from-[#5c2574] to-[#7a3fa1] p-4 text-center text-sm text-white">
            
  Pricing depends on size, design & customization.
  After reviewing your request, we’ll confirm the final price.
</div>
        



        {/* TITLE */}
        <h1 className="text-3xl font-serif text-center">
          {product?.title}
        </h1>

        {/* SIZE (ONLY WEDDING) */}
        {product?.type === "size-based" && (
          <div>
            <p className="text-sm font-medium mb-4">Select Size</p>
            <div className="grid grid-cols-2 gap-5">
              {product?.sizes?.map((item) => (
                <button
                  type="button"
                  key={item.label}
                  onClick={() => setSelectedSize(item.label)}
                  className={`rounded-2xl border p-6 text-left transition ${
                    selectedSize === item.label
                      ? "bg-[#501a67] text-white border-[#501a67]"
                      : "bg-white hover:border-[#501a67]"
                  }`}
                >
                  <p className="font-medium">
                    {item.label} Engagement Tray
                  </p>
                  <p className="text-sm mt-1">
                    {formatPrice(item.price)}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ADDONS (ONLY WEDDING) */}
        {product?.type === "size-based" && (
          <div>
            <p className="text-sm font-medium mb-4">Add-ons (Optional)</p>

            {[
              ["coasterNoBase", "4 Coasters (No Base $50)"],
              ["coasterWithBase", "4 Coasters (With Base $60)"],
              ["flowerHeart", "Flower Preservation $120 (Heart)"],
            ].map(([key, label]) => (
              <label
                key={key}
                className="flex justify-between bg-gray-50 p-4 rounded-xl mb-3"
              >
                <span>{label}</span>
                <input
                  type="checkbox"
                  checked={addons[key]}
                  onChange={() =>
                    setAddons((prev) => ({
                      ...prev,
                      [key]: !prev[key],
                    }))
                  }
                />
              </label>
            ))}
          </div>
        )}

        {/* QUANTITY */}
        <div className="flex justify-between items-center bg-gray-50 rounded-xl p-4">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="h-9 w-9 rounded-full bg-white shadow"
            >
              −
            </button>
            <span>{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="h-9 w-9 rounded-full bg-white shadow"
            >
              +
            </button>
          </div>
        </div>

        {/* TEXTAREAS */}
        <textarea
          value={customText}
          onChange={(e) => setCustomText(e.target.value)}
          placeholder="Custom text (Name, Date, etc.)"
          className="w-full rounded-2xl border bg-gray-50 p-4 text-sm"
        />

        <textarea
          value={specialRequest}
          onChange={(e) => setSpecialRequest(e.target.value)}
          placeholder="Special request (Color, design preference, etc.)"
          className="w-full rounded-2xl border bg-gray-50 p-4 text-sm"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          placeholder="Email"
          className="w-full rounded-2xl border bg-gray-50 p-4 text-sm"
        />

        {/* LIVE PRICE BOX */}
        {(product?.type === "fixed" || selectedSize) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-white shadow-2xl border p-6 space-y-4"
          >
            <h3 className="text-lg font-semibold">Order Summary</h3>

            <div className="flex justify-between text-sm">
              <span>Base Price</span>
              <span>{formatPrice(priceDetails.base)}</span>
            </div>

            {priceDetails.addonsTotal > 0 && (
              <div className="flex justify-between text-sm">
                <span>Add-ons</span>
                <span>{formatPrice(priceDetails.addonsTotal)}</span>
              </div>
            )}

            <div className="border-t pt-4 flex justify-between">
              <span className="font-medium">Estimated Total</span>
              <span className="text-xl font-bold">
                {formatPrice(priceDetails.finalTotal)}
              </span>
            </div>
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full rounded-full bg-[#336a68] py-4 text-white text-lg"
        >
          Add to Cart
        </motion.button>
      </form>
    </div>
  );
}
