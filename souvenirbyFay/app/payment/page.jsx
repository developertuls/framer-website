
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PaymentPage() {

  const handlePay = async () => {
    const orderRaw = localStorage.getItem("orderPayload");

    if (!orderRaw) {
      alert("No order found");
      return;
    }

    const order = JSON.parse(orderRaw);

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: order.items,
      }),
    });

    const data = await res.json();

    if (data?.url) {
      window.location.href = data.url;
    }
  };

  return (
    <section className="bg-[#fcffff] px-4 py-24 min-h-screen flex items-center">
      <div className="max-w-xl w-full mx-auto space-y-10">

        {/* HEADER */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-serif">Secure Checkout</h1>
          <p className="text-gray-500 text-sm">
            You’ll complete payment on Stripe’s secure page
          </p>
        </div>

        {/* PAYMENT METHODS */}
        <div className="bg-white rounded-3xl shadow-lg p-6 space-y-5">
          <p className="text-center text-sm text-gray-600">
            Available payment methods
          </p>

          <div className="flex justify-center gap-4 flex-wrap items-center">
            <Image src="/flags/visa.png" width={48} height={30} alt="Visa" />
            <Image src="/flags/mas.webp" width={48} height={30} alt="Mastercard" />
            <Image src="/flags/ame.png" width={48} height={30} alt="American Express" />
            <Image src="/flags/apple.png" width={48} height={30} alt="Apple Pay" />
            <Image src="/flags/gool.png" width={48} height={30} alt="Google Pay" />
          </div>

          <p className="text-xs text-center text-gray-400">
            Payment methods may vary based on your device & country
          </p>
        </div>

        {/* PAY BUTTON */}
        <motion.button
          onClick={handlePay}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full bg-[#336a68] text-white py-5 rounded-full text-lg font-medium shadow-xl"
        >
          Pay Securely
        </motion.button>

        {/* TRUST */}
        <p className="text-center text-xs text-gray-500">
          🔒 Secured by Stripe · PCI-DSS compliant
        </p>
      </div>
    </section>
  );
}
