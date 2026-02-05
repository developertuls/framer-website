
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function SuccessClient() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (!sessionId) return;

    console.log("Stripe Session:", sessionId);
    // email / order logic here
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
