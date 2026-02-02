
"use client";

import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-6">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        Payment Cancelled ❌
      </h1>

      <p className="text-lg text-gray-700 mb-6 max-w-md">
        Your payment was not completed.  
        Don’t worry—no money was charged.
      </p>

      <div className="flex gap-4">
        <Link
          href="/payment"
          className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          Try Again
        </Link>

        <Link
          href="/"
          className="px-6 py-3 border border-black rounded hover:bg-black hover:text-white transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
