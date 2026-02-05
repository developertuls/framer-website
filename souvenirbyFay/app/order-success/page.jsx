
"use client";

import { useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function OrderSuccessClient() {
  useEffect(() => {
    const order = JSON.parse(localStorage.getItem("orderPayload"));
    if (!order) return;

    const { customer, items, payment } = order;

    // 🔴 ADMIN EMAIL
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID,
      {
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
        address: customer.address,
        products: items
          .map((i) => `${i.title} x${i.quantity}`)
          .join(", "),
        paymentMethod: payment.method,
        transactionId: payment.transactionId,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );

    // 🟢 USER EMAIL
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_USER_TEMPLATE_ID,
      {
        name: customer.name,
        email: customer.email,
        products: items.map((i) => i.title).join(", "),
        date: new Date().toLocaleDateString(),
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );

    localStorage.removeItem("orderPayload");
  }, []);

  return (
    <div className="text-center py-32">
      <h1 className="text-3xl font-bold text-green-600">
        Order Successful 🎉
      </h1>
      <p className="mt-4">
        Payment received. Order details sent to your email.
      </p>
    </div>
  );
}
