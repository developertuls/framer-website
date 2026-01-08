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

  const [showImage, setShowImage] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const allProducts = [...wedding, ...islamic, ...resin];
  const product = allProducts.find(item => item.slug === slug);

  if (!product) {
    return (
      <p className="text-center py-20 text-red-500 text-lg">
        {t.productNotFound}
      </p>
    );
  }

  const unitPrice = Number(convert(product.price));
  const totalPrice = unitPrice * quantity;

  return (
    <>
      {/* ================= FULLSCREEN IMAGE MODAL ================= */}
      {showImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setShowImage(false)}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl z-50 hover:opacity-70"
            onClick={() => setShowImage(false)}
          >
            ×
          </button>

          <div
            className="relative w-screen h-[100vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={product.image}
              alt={product.title}
              fill
              priority
              className="object-contain animate-slow-pan "
            />
          </div>
        </div>
      )}

      {/* ================= ORDER PAGE ================= */}
      <div className="mt-10 max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">

        {/* LEFT IMAGE */}
        <div
          onClick={() => setShowImage(true)}
          className="relative w-full h-[520px] rounded-2xl overflow-hidden shadow-lg cursor-zoom-in group"
        >
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
            <span className="text-white text-sm bg-black/70 px-4 py-2 rounded-full">
              Click to view full image
            </span>
          </div>
        </div>
<div className="bg-[#f4f1ee] p-10 rounded-2xl space-y-8">

  {/* TITLE */}
  <h1 className="text-5xl font-serif text-center capitalize text-gray-800">
    {product.title}
  </h1>

  {/* PRICE */}
  <div className="text-center space-y-2">
    <p className="text-xl tracking-wide text-gray-700">
      {symbol}{unitPrice.toFixed(2)} <span className="uppercase">{currency}</span>
    </p>
    <p className="text-sm text-gray-500">
      Taxes included. Shipping calculated at checkout.
    </p>
  </div>

  {/* CUSTOM TEXT */}
  <div className="space-y-2">
    <label className="text-sm text-gray-600">
      Customised text: Quote, Couples name & Date:
    </label>
    <textarea
      rows={4}
      className="w-full bg-transparent border border-gray-400 rounded-xl p-4 focus:outline-none focus:ring-1 focus:ring-gray-700"
    />
  </div>

  {/* QUANTITY */}
  <div className="space-y-2">
    <label className="text-sm text-gray-600">Quantity</label>
    <div className="inline-flex items-center border border-gray-400 rounded-xl overflow-hidden">
      <button
        onClick={() => quantity > 1 && setQuantity(quantity - 1)}
        className="px-4 py-2 text-xl hover:bg-gray-200"
      >
        −
      </button>
      <span className="px-6 py-2">{quantity}</span>
      <button
        onClick={() => setQuantity(quantity + 1)}
        className="px-4 py-2 text-xl hover:bg-gray-200"
      >
        +
      </button>
    </div>
  </div>

  {/* SPECIAL REQUEST */}
  <div className="space-y-2">
    <label className="text-sm text-gray-600">
      Any special requests:
    </label>
    <textarea
      rows={4}
      className="w-full bg-transparent border border-gray-400 rounded-xl p-4 focus:outline-none focus:ring-1 focus:ring-gray-700"
    />
  </div>

  {/* ADD TO CART */}
  <button className="w-full bg-[#2f3531] text-white py-4 rounded-xl text-lg tracking-wide hover:opacity-90 transition">
    Add to cart
  </button>




        {/* FOOT NOTE */}
        <p className="text-sm text-gray-500">
          ✔ {t.madeToOrder} • ✔ {t.worldwideShipping} • ✔ {t.noRefund}  • ✔ {t.Privacy} 
        </p>



</div>

      </div>
    </>
  );
}
