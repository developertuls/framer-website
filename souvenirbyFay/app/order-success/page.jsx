
"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { sendOrderEmails } from "@/lib/sendOrderEmails"; // path ঠিক করো

function SuccessContent() {
  const searchParams = useSearchParams();
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
