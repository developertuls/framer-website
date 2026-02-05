
"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (!sessionId) return;

    console.log("Stripe Session:", sessionId);
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
