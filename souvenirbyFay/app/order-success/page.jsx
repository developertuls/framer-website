

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center space-y-6"
      >
        {/* ICON */}
        <div className="mx-auto w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
          <span className="text-4xl">✅</span>
        </div>

        {/* TITLE */}
        <h1 className="text-2xl font-semibold text-gray-800">
          Order Confirmed!
        </h1>

        {/* MESSAGE */}
        <p className="text-gray-600 text-sm">
          Thank you for your order.  
          We have received your request and sent a confirmation email.
        </p>

        <p className="text-xs text-gray-500">
          Our team will contact you soon for further details.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col gap-3 pt-4">
          <Link
            href="/"
            className="w-full rounded-xl bg-[#336a68] py-3 text-white font-medium hover:bg-[#4e9492] transition"
          >
            Back to Home
          </Link>

          <Link
            href="/cart"
            className="w-full rounded-xl border py-3 text-gray-700 hover:bg-gray-100 transition"
          >
            View Cart
          </Link>
        </div>
      </motion.div>
    </div>
  );
}