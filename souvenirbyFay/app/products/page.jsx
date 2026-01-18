
"use client";
import { Suspense } from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import ProductsData from "@/productData/ProductsData";
import PricingGate from "../../components/PricingGate";

export default function ProductsContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const focusSlug = searchParams.get("focus");

  const [openPricing, setOpenPricing] = useState(false);

  // 🔹 Filter products
  let products = category
    ? ProductsData.filter(p => p.category === category)
    : ProductsData;

  // 🔹 Show clicked product first
  if (focusSlug) {
    const clicked = products.find(p => p.slug === focusSlug);
    const rest = products.filter(p => p.slug !== focusSlug);
    products = clicked ? [clicked, ...rest] : products;
  }

  // 🔹 Open pricing gate on load
  useEffect(() => {
    setOpenPricing(true);
  }, []);

  return (
     <Suspense fallback={<div>Loading...</div>}>
    <>
      {/* 🔥 Pricing Gate */}
      <PricingGate
        open={openPricing}
        onClose={() => setOpenPricing(false)}
      />

      {/* 🔹 Page Wrapper */}
      <section className="mt-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          {/* 🔹 Header */}
          <div className="mb-14 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1B1464]">
              Our Signature Creations
            </h1>

            <p className="mt-4 text-sm sm:text-base text-gray-600">
              Handcrafted resin art for the special moments of your life
            </p>

            <div className="mx-auto mt-6 h-[2px] w-24 rounded-full bg-[#C9A24D]" />
          </div>

          {/* 🔹 Products Grid */}
          <div
            className="
              grid grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              gap-6 sm:gap-8
            "
          >
            {products.map(product => (
              <Link
                key={product.id}
                href={`/order/${product.slug}`}
                className="group"
              >
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="
                    relative overflow-hidden rounded-2xl
                    bg-white shadow-md
                    transition-all duration-300
                    hover:shadow-xl
                  "
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={500}
                    height={500}
                    className="
                      h-[260px] w-full object-cover
                      transition-transform duration-500
                      group-hover:scale-110
                    "
                  />

                  <div className="
                    absolute inset-0
                    bg-black/10 opacity-0
                    transition-opacity duration-300
                    group-hover:opacity-100
                  " />
                </motion.div>

                <p className="mt-4 text-center text-sm sm:text-base font-medium text-gray-800">
                  {product.title}
                </p>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </>
    </Suspense>
  );
}
