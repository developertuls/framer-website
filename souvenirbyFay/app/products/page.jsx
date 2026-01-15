
"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ProductsData from "@/productData/ProductsData";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const focusSlug = searchParams.get("focus");

  // ✅ category না থাকলে সব products
  let products = category
    ? ProductsData.filter(p => p.category === category)
    : ProductsData;

  // ✅ clicked image first
  if (focusSlug) {
    const clicked = products.find(p => p.slug === focusSlug);
    const rest = products.filter(p => p.slug !== focusSlug);
    products = clicked ? [clicked, ...rest] : products;
  }


  return (
    <div className="px-4 md:px-10 py-12">
      <div className="
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-8
      ">
        {products.map(product => (
          <Link
            key={product.id}
            href={`/order/${product.slug}`}
            className="group"
          >
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={product.image}
                alt={product.title}
                width={500}
                height={500}
                className="w-full h-[280px] object-cover
                transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <p className="mt-3 text-center font-medium">
              {product.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
