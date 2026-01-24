
"use client";

import { sendOrderEmails } from "@/lib/sendOrderEmails";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const router = useRouter();
  const [order, setOrder] = useState(null);
  const [method, setMethod] = useState("card");

  // 🔒 duplicate email prevent
  const emailSentRef = useRef(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orderPayload"));
    if (!data) {
      router.push("/cart");
      return;
    }
    setOrder(data);
  }, [router]);

  if (!order) return null;

  const handlePayment = async () => {
    if (emailSentRef.current) return; // 🔐 stop double call
    emailSentRef.current = true;

    const updatedOrder = {
      ...order,
      payment: {
        method,
        status: "paid",
        transactionId: "TXN_" + Date.now(),
      },
    };

    try {
      await sendOrderEmails(updatedOrder);
    } catch (err) {
      console.error("Email send failed", err);
    }

    localStorage.removeItem("orderPayload");
    router.push("/order-success");
  };

  return (
    <div className="max-w-3xl mx-auto py-24 px-4 space-y-8">
      <h1 className="text-3xl text-center font-serif">Payment</h1>

      {/* PAYMENT METHODS */}
      <div className="space-y-4">
        {["card", "paypal", "bank"].map((m) => (
          <label
            key={m}
            className={`block border rounded-2xl p-4 cursor-pointer ${
              method === m ? "border-[#336a68]" : ""
            }`}
          >
            <input
              type="radio"
              checked={method === m}
              onChange={() => setMethod(m)}
              className="mr-2"
            />
            {m.toUpperCase()}
          </label>
        ))}
      </div>

      <button
        onClick={handlePayment}
        className="w-full bg-[#336a68] text-white py-4 rounded-full text-lg"
      >
        Pay Now
      </button>
    </div>
  );
}
