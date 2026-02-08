
"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { sendOrderEmails } from "@/lib/sendOrderEmails";

function SuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (!sessionId) return;

    const orderRaw = localStorage.getItem("orderPayload");
    if (!orderRaw) return;

    const order = JSON.parse(orderRaw);

    sendOrderEmails(order)
      .then(() => {
        console.log("Emails sent successfully");
        localStorage.removeItem("orderPayload");
      })
      .catch((err) => {
        console.error("Email error:", err);
      });
  }, [sessionId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-3xl p-10 max-w-lg w-full text-center"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className="flex justify-center mb-6"
        >
          <CheckCircle className="w-20 h-20 text-green-500" />
        </motion.div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800">
          Payment Successful!
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-gray-600">
          Thank you for your purchase. Your order has been successfully placed.
          A confirmation email has been sent to your email address.
        </p>

        {/* Divider */}
        <div className="my-6 border-t"></div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition duration-300"
          >
            Go to Home
          </button>

          <button
            onClick={() => router.push("/shop")}
            className="px-6 py-3 rounded-xl border border-gray-300 font-semibold hover:bg-gray-100 transition duration-300"
          >
            Continue Shopping
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-lg font-medium">
          Processing Payment...
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
