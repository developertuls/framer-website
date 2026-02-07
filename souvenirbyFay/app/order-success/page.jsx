
"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import emailjs from "@emailjs/browser";

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (!sessionId) return;

    const orderRaw = localStorage.getItem("orderPayload");
    if (!orderRaw) return;

    const order = JSON.parse(orderRaw);

    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      {
        customer_name: order.customerName,
        customer_email: order.email,
        total_price: order.total,
      },
      "YOUR_PUBLIC_KEY"
    )
    .then(() => {
      console.log("Email sent successfully");
      localStorage.removeItem("orderPayload");
    })
    .catch((error) => {
      console.error("Email error:", error);
    });

  }, [sessionId]);

  return (
    <div className="py-32 text-center">
      <h1 className="text-3xl font-bold text-green-600">
        Payment Successful 🎉
      </h1>
      <p className="mt-4">Thank you for your order.</p>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="py-32 text-center">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
