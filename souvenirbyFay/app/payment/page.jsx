
"use client";

import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const router = useRouter();

  const handlePaymentSuccess = () => {
    // payment success logic here
    router.push("/order-success");
  };

  return (
    <div className="py-32 text-center">
      <h1 className="text-2xl font-bold">Payment Page</h1>

      <button
        onClick={handlePaymentSuccess}
        className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg"
      >
        Pay Now
      </button>
    </div>
  );
}
