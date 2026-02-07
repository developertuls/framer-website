

"use client";

import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();
  const { convertPrice, currency } = useCurrency();

  const formatPrice = (amount) => {
    const converted = convertPrice(amount);
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(converted);
  };

  const grandTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="py-40 text-center space-y-6">
        <h2 className="text-2xl font-semibold">Your cart is empty</h2>
        <Link
          href="/products"
          className="inline-block bg-[#336a68] text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-20 px-4">
      <h1 className="text-4xl text-center mb-12 font-semibold">
        Your Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-10">
        
        {/* LEFT SIDE - CART ITEMS */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row gap-6 border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              {item.image && (
                <div className="relative w-full sm:w-40 h-40 rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="flex-1 space-y-2">
                <h2 className="text-xl font-semibold">
                  {item.title}
                </h2>

                <p className="text-sm text-gray-500">
                  Size: {item.size} inch
                </p>

                <p className="text-sm text-gray-500">
                  Quantity: {item.quantity}
                </p>

                {item.customText && (
                  <p className="text-sm">
                    Custom Text: {item.customText}
                  </p>
                )}

                {item.specialRequest && (
                  <p className="text-sm">
                    Note: {item.specialRequest}
                  </p>
                )}

                {item.addons?.length > 0 && (
                  <div className="pt-2">
                    <p className="font-medium text-sm mb-1">
                      Add-ons:
                    </p>
                    {item.addons.map((addon, i) => (
                      <p key={i} className="text-sm text-gray-600">
                        • {addon.label} ({formatPrice(addon.price)})
                      </p>
                    ))}
                  </div>
                )}

                <div className="flex justify-between items-center pt-4">
                  <p className="text-lg font-semibold text-[#336a68]">
                    {formatPrice(item.price * item.quantity)}
                  </p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE - SUMMARY */}
        <div className="border rounded-2xl p-6 shadow-sm h-fit">
          <h2 className="text-xl font-semibold mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between mb-3">
            <span>Subtotal</span>
            <span>{formatPrice(grandTotal)}</span>
          </div>

          <div className="flex justify-between mb-3 text-sm text-gray-500">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>

          <div className="border-t pt-4 flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>{formatPrice(grandTotal)}</span>
          </div>

          <Link
            href="/checkout"
            className="block text-center mt-6 bg-[#336a68] text-white py-4 rounded-2xl hover:opacity-90 transition"
          >
            Review Order Request
          </Link>
        </div>
      </div>
    </div>
  );
}