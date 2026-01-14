
"use client";

import OrderForm from "@/components/OrderForm";

export default function CustomOrderPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">

      <h1 className="md:mt-5  text-4xl font-serif mb-10 text-center">
        Custom Order
      </h1>

      <OrderForm mode="custom" />
    </div>
  );
}
