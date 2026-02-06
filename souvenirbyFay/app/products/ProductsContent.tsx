
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import ProductsData from "@/productData/ProductsData";
import PricingGate from "@/components/PricingGate";

export default function ProductsContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const focusSlug = searchParams.get("focus");

  const [openPricing, setOpenPricing] = useState(false);

  let products = category
    ? ProductsData.filter(p => p.category === category)
    : ProductsData;

  if (focusSlug) {
    const clicked = products.find(p => p.slug === focusSlug);
    const rest = products.filter(p => p.slug !== focusSlug);
    products = clicked ? [clicked, ...rest] : products;
  }

  useEffect(() => {
    setOpenPricing(true);
  }, []);

  return (
    <>
      <PricingGate open={openPricing} onClose={() => setOpenPricing(false)} />

      <section className="mt-24 craft-product-sections px-4 sm:px-6 lg:px-8 md:mb-4 mb-3 shadow-md p-5">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1B1464]">
              Our Signature Creations
            </h1>
            <p className="mt-4 text-sm sm:text-base text-gray-600">
              Handcrafted resin art for the special moments of your life
            </p>
            <div className="mx-auto mt-6 h-[2px] w-24 rounded-full bg-[#C9A24D]" />
          </div>

          <div className=" hovereffect grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {products.map(product => (
       
       <Link
  key={product.id}
  href={`/order/${product.slug}`}
  className="group block"
>
  <motion.div
    initial={{ y: 40, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition"
  >
    {/* Image */}
    <Image
      src={product.image}
      alt={product.title}
      width={500}
      height={500}
      className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-110"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500" />

    {/* Hover Content */}
    <div className="absolute inset-0 flex flex-col items-center justify-center 
                    text-center px-4
                    opacity-0 translate-y-6
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-500">

      <p className="text-white text-lg font-semibold mb-2">
        {product.pteg}
      </p>

      <span className="text-gray-200 text-sm">
        {product.note}
      </span>

    </div>
  </motion.div>

  {/* Title */}
  <p className="mt-4 text-center text-sm font-medium text-gray-800 group-hover:text-[#C9A24D] transition">
    {product.title}
  </p>
</Link>


              
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

// kl