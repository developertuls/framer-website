
"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

import { useCurrency } from "@/context/CurrencyContext";
import { useLanguage } from "@/context/LanguageContext";

import wedding from "@/data/wedding";
import islamic from "@/data/islamic";
import resin from "@/data/resin";

export default function OrderPage() {
  const { slug } = useParams();
  const { t } = useLanguage();
  const { convert, symbol, currency } = useCurrency();

  const [quantity, setQuantity] = useState(1);

  const allProducts = [...wedding, ...islamic, ...resin];
  const product = allProducts.find((item) => item.slug === slug);

  if (!product) {
    return (
      <p className="text-center py-20 text-red-500 text-lg">
        {t.productNotFound}
      </p>
    );
  }

  const unitPrice =Number( convert(product.price));
  const totalPrice = unitPrice * quantity;

  return (
    <div className="mt-9 max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">

      {/* LEFT IMAGE */}
      <div className="relative w-full h-[520px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="space-y-6 shadow-md p-8">

        {/* TITLE */}
        <h1 className="text-4xl font-serif capitalize">
          {product.title}
        </h1>

        {/* PRICE */}
        <div>
          <p className="text-2xl font-semibold">
            {symbol}
            {unitPrice.toFixed(2)}{" "}
            <span className="text-sm font-normal">{currency}</span>
          </p>

          <p className="text-sm text-gray-500">
            {t.taxShipping}
          </p>
        </div>

        {/* CUSTOM TEXT */}
        <div>
          <label className="block mb-2 font-medium">
            {t.customTextLabel}
          </label>
          <textarea
            rows={4}
            className="w-full border rounded-xl p-4 focus:outline-none focus:ring-1 focus:ring-black"
            placeholder={t.customTextPlaceholder}
          />
        </div>

        {/* QUANTITY */}
        <div>
          <label className="block mb-2 font-medium">
            {t.quantity}
          </label>

          <div className="flex items-center gap-4">
            <button
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              className="w-10 h-10 border rounded-lg text-lg"
            >
              −
            </button>

            <span className="text-lg font-medium">{quantity}</span>

            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 border rounded-lg text-lg"
            >
              +
            </button>
          </div>
        </div>

        {/* TOTAL */}
        <div className="border-t pt-4">
          <p className="text-lg font-medium flex justify-between">
            <span>{t.total}</span>
            <span>
              {symbol}
              {totalPrice.toFixed(2)} {currency}
            </span>
          </p>
        </div>

        {/* SPECIAL REQUEST */}
        <div>
          <label className="block mb-2 font-medium">
            {t.specialRequest}
          </label>
          <textarea
            rows={4}
            className="w-full border rounded-xl p-4 focus:outline-none focus:ring-1 focus:ring-black"
            placeholder={t.specialRequestPlaceholder}
          />
        </div>

        {/* CTA */}
        <button className="w-full bg-black text-white py-4 rounded-xl text-lg hover:bg-gray-800 transition">
          {t.addToCart}
        </button>

        {/* FOOT NOTE */}
        <p className="text-sm text-gray-500">
          ✔ {t.madeToOrder} • ✔ {t.worldwideShipping} • ✔ {t.noRefund}  • ✔ {t.Privacy} 
        </p>
        
      </div>
    </div>
  );
}
