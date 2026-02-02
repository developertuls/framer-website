

"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { sendOrderEmails } from "@/lib/sendOrderEmails";

export default function SuccessPage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const session_id = searchParams.get("session_id");
    if (!session_id) return;

    verifyAndSend(session_id);
  }, []);

  const verifyAndSend = async (session_id) => {
    const res = await fetch("/api/verify-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ session_id }),
    });

    const data = await res.json();

    if (data.success) {
      // ✅ Stripe CONFIRMED → now email
      await sendOrderEmails(data.orderPayload);
    }
  };

  return (
    <div className="text-center py-24">
      <h1 className="text-3xl font-serif">Payment Successful 🎉</h1>
      <p className="mt-3 text-gray-500">
        Your order has been confirmed. A confirmation email has been sent.
      </p>
    </div>
  );
}
