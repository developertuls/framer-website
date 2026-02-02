
"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="py-32 text-center space-y-4">
        <p className="text-lg">Your cart is empty.</p>
        <Link href="/products" className="underline text-gray-700">
          Continue shopping
        </Link>
      </div>
    );
  }



 useEffect(() => {
  console.log("CART CONTEXT STATE 👉", cartItems);
}, [cartItems]);



  return (
    <div className="bg-[#fcffff] md:mt-3 shadow max-w-4xl mx-auto py-20 px-4 space-y-8">
      {/* TITLE */}
      <h1 className="text-3xl  text-center">Your Cart</h1>

    <div className="rounded-2xl bg-yellow-50 border border-yellow-200 p-4 text-sm text-yellow-800 text-center">
  Items in your cart are <strong>custom-made</strong>.
  <br />
  Prices shown are estimates. Final price will be confirmed after review.
</div>


      {/* CART ITEMS */}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col  sm:flex-row gap-4 border rounded-2xl p-4"
          >
            {/* IMAGE */}
            {item.image ? (
              <div className="relative w-full sm:w-32 h-32 rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-full sm:w-32 h-32 rounded-xl bg-gray-100 flex items-center justify-center text-sm text-gray-500">
                Custom Order
              </div>
            )}

            {/* INFO */}
            <div className="flex-1 space-y-1">
              <p className="font-medium text-lg">{item.title}</p>

              {item.size && (
                <p className="text-sm text-gray-600">
                  Size: {item.size} inch
                </p>
              )}

              {item.glassBox && (
                <p className="text-sm text-gray-600">
                  Glass box: {item.glassBox}
                </p>
              )}

              <p className="text-sm text-gray-600">
                Quantity: {item.quantity}
              </p>

              {item.customText && (
                <p className="text-sm text-gray-500">
                  Custom text: {item.customText}
                </p>
              )}

              {item.specialRequest && (
                <p className="text-sm text-gray-500">
                  Note: {item.specialRequest}
                </p>
              )}

{item.size && (
  <p className="text-xs text-gray-500 mt-1">
    Estimated price:{" "}
    <span className="font-medium">
      ${item.size === "13" ? 115 : 100}
    </span>{" "}
    per item
  </p>
)}


              <button
                onClick={() => removeFromCart(item.id)}
                className="text-sm text-red-500 mt-2 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Link
        href="/checkout"
        className="block text-center bg-[#336a68] text-white py-4 rounded-2xl hover:bg-gray-900 transition"
      >
       Review Order Request

      </Link>
    </div>
  );
}
