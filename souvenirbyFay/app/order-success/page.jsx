
"use client";

import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function OrderSuccess() {
  const emailSentRef = useRef(false);

  useEffect(() => {
    if (emailSentRef.current) return;
    emailSentRef.current = true;

    const orderData = JSON.parse(localStorage.getItem("orderData"));
    if (!orderData) return;

    const { customer, product } = orderData;

    const templateParams = {
      // 👤 Customer Info
      name: customer?.name || "N/A",
      email: customer?.email || "N/A",
      phone: customer?.phone || "N/A",
      address: customer?.address || "N/A",
      glassBox: customer?.glassBox || "N/A",

      // 📦 Product Info
      product: product?.title || "Custom Order",
      quantity: product?.quantity || 1,
      size: product?.size || "N/A",
      customText: product?.customText || "",
      specialRequest: product?.specialRequest || "",
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => console.log("✅ Email sent"))
      .catch((err) => console.error("❌ EmailJS error:", err));
  }, []);

  return (
    <div className="text-center py-32">
      <h1 className="text-3xl font-bold text-green-600">
        Payment Successful 🎉
      </h1>
      <p className="mt-4">Your order has been confirmed.</p>
    </div>
  );
}
