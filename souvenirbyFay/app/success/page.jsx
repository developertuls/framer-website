
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const session_id = searchParams.get("session_id");
    if (!session_id) return;

    verifyAndSend(session_id);
  }, [searchParams]);

  const verifyAndSend = async (session_id) => {
    try {
      const res = await fetch("/api/verify-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id }),
      });

      const data = await res.json();

      if (data.success) {
        console.log("Stripe verified ✅");
      } else {
        console.log("Verification failed ❌");
      }
    } catch (error) {
      console.error("Error verifying session:", error);
    }
  };

  return (
    <div className="text-center py-24">
      <h1 className="text-3xl font-serif text-green-600">
        Payment Successful 🎉
      </h1>
      <p className="mt-3 text-gray-500">
        Your order has been confirmed. A confirmation email has been sent.
      </p>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center">
          <h1 className="text-2xl">Loading...</h1>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
