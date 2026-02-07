

"use client";

import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import Image from "next/image";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function CheckoutPage() {
  const { cartItems } = useCart();
  const { convertPrice, currency } = useCurrency();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // ================= TOTAL CALCULATION =================
  const orderTotal = useMemo(() => {
    return cartItems.reduce((total, item) => {
      const addonsTotal =
        item.addons?.reduce((sum, addon) => sum + addon.price, 0) || 0;

      return (
        total +
        (item.price + addonsTotal) * item.quantity
      );
    }, 0);
  }, [cartItems]);

  // ================= FORMAT PRICE =================
  const formatPrice = (amount) => {
    const converted = convertPrice(amount);
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(converted);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitOrderRequest = (e) => {
    e.preventDefault();

    const orderPayload = {
      customer: form,
      items: cartItems,
      total: orderTotal,
      currency: currency,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("orderPayload", JSON.stringify(orderPayload));
    router.push("/payment");
  };

  if (cartItems.length === 0) {
    return (
      <div className="py-40 text-center text-lg text-gray-500">
        Your cart is empty.
      </div>
    );
  }

  return (
    <section className="px-4 py-24 bg-[#fcffff]">
      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-[#1e1b4b]">
          Review Your Order Request
        </h1>
        <div className="w-16 h-[2px] bg-[#d6a756] mx-auto my-5" />
        <p className="text-gray-600">
          This is a custom order request. No payment is required now.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">

        {/* ================= LEFT – ORDER SUMMARY ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="rounded-2xl bg-blue-50 border border-blue-200 p-4 text-sm text-blue-800 text-center">
            All items are handmade & custom.
            <br />
            Final price will be confirmed after review.
          </div>

          <h2 className="text-xl font-semibold">Order Summary</h2>

          {cartItems.map((item) => {
            const addonsTotal =
              item.addons?.reduce((sum, addon) => sum + addon.price, 0) || 0;

            const itemTotal =
              (item.price + addonsTotal) * item.quantity;

            return (
              <div
                key={item.id}
                className="flex gap-4 bg-white rounded-3xl p-4 shadow-md"
              >
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 space-y-1">
                  <p className="font-medium">{item.title}</p>

                  {item.size && (
                    <p className="text-sm text-gray-600">
                      Size: {item.size} inch
                    </p>
                  )}

                  <p className="text-sm text-gray-600">
                    Quantity: {item.quantity}
                  </p>

                  {item.addons?.length > 0 && (
                    <div className="text-sm text-gray-500">
                      Add-ons:
                      <ul className="list-disc ml-5">
                        {item.addons.map((addon, i) => (
                          <li key={i}>
                            {addon.label} (+{formatPrice(addon.price)})
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <p className="text-sm font-medium text-[#336a68] mt-2">
                    Estimated: {formatPrice(itemTotal)}
                  </p>
                </div>
              </div>
            );
          })}

          {/* TOTAL BOX */}
          <div className="bg-white rounded-3xl shadow-xl p-6 flex justify-between items-center">
            <span className="text-lg font-semibold">
              Estimated Total
            </span>
            <span className="text-2xl font-bold text-[#336a68]">
              {formatPrice(orderTotal)}
            </span>
          </div>
        </motion.div>

        {/* ================= RIGHT – CUSTOMER FORM ================= */}
        <motion.form
          onSubmit={handleSubmitOrderRequest}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl p-8 space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="Full Name"
              required
              onChange={handleChange}
              className="w-full rounded-xl bg-gray-100 px-4 py-4 text-sm focus:ring-2 focus:ring-[#336a68] outline-none"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="Email Address"
              required
              onChange={handleChange}
              className="w-full rounded-xl bg-gray-100 px-4 py-4 text-sm focus:ring-2 focus:ring-[#336a68] outline-none"
            />
          </div>

          <input
            type="text"
            name="phone"
            value={form.phone}
            placeholder="Phone Number"
            required
            onChange={handleChange}
            className="w-full rounded-xl bg-gray-100 px-4 py-4 text-sm focus:ring-2 focus:ring-[#336a68] outline-none"
          />

          <textarea
            name="address"
            rows={4}
            value={form.address}
            placeholder="Full Delivery Address"
            required
            onChange={handleChange}
            className="w-full rounded-xl bg-gray-100 px-4 py-4 text-sm focus:ring-2 focus:ring-[#336a68] outline-none"
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full rounded-full bg-[#0f766e] py-4 text-white text-lg font-medium"
          >
            Submit Order Request
          </motion.button>

          <p className="text-xs text-gray-500 text-center">
            We will contact you within 24 hours to confirm final pricing.
          </p>
        </motion.form>
      </div>
    </section>
  );
}