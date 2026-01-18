
"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function CheckoutPage() {
  const { cartItems } = useCart();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderData = {
      customer: form,
      items: cartItems,
    };

    console.log("FINAL ORDER 👉", orderData);

    setTimeout(() => {
      router.push("/order-success");
    }, 1200);
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
          Checkout
        </h1>
        <div className="w-16 h-[2px] bg-[#d6a756] mx-auto my-5" />
        <p className="text-gray-600 text-sm md:text-base">
          Please review your order and provide delivery information.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
        {/* LEFT – ORDER SUMMARY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-xl font-medium mb-4">
            Order Summary
          </h2>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 bg-white rounded-3xl p-4 shadow-md"
            >
              {item.image ? (
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-24 h-24 rounded-2xl bg-gray-100 flex items-center justify-center text-sm text-gray-500">
                  Custom
                </div>
              )}

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

                {item.customText && (
                  <p className="text-sm text-gray-500">
                    Text: {item.customText}
                  </p>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* RIGHT – CUSTOMER FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 space-y-8"
        >
          {/* NAME + EMAIL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs tracking-widest text-gray-500 mb-2">
                NAME
              </label>
              <input
                type="text"
                name="name"
                placeholder="Jane Smith"
                required
                onChange={handleChange}
                className="w-full rounded-xl bg-gray-100 px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#336a68]"
              />
            </div>

            <div>
              <label className="block text-xs tracking-widest text-gray-500 mb-2">
                EMAIL
              </label>
              <input
                type="email"
                name="email"
                placeholder="jane@email.com"
                required
                onChange={handleChange}
                className="w-full rounded-xl bg-gray-100 px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#336a68]"
              />
            </div>
          </div>

          {/* PHONE */}
          <div>
            <label className="block text-xs tracking-widest text-gray-500 mb-2">
              PHONE
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              required
              onChange={handleChange}
              className="w-full rounded-xl bg-gray-100 px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#336a68]"
            />
          </div>

          {/* ADDRESS */}
          <div>
            <label className="block text-xs tracking-widest text-gray-500 mb-2">
              ADDRESS
            </label>
            <textarea
              name="address"
              rows={4}
              placeholder="Full delivery address"
              required
              onChange={handleChange}
              className="w-full rounded-xl bg-gray-100 px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#336a68]"
            />
          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full rounded-full bg-[#0f766e] py-4 text-white text-lg font-medium"
          >
            Submit Order
          </motion.button>

          <p className="text-xs text-gray-500 text-center">
            Order confirmation will be done after review.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
