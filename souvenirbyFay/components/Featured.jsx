


"use client";


import Link from "next/link";
import Image from "next/image";
import ProductsData from "@/productData/ProductsData";
import AnimatedHeading from "./AnimatedHeading";
import { motion } from "framer-motion";



    
      
    








export default function HomeCollections() {
  const wedding = ProductsData.filter(p => p.category === "wedding").slice(0, 6);
  const islamic = ProductsData.filter(p => p.category === "islamic").slice(0, 6);

  return (
    <div className="space-y-32 craft-product-sections">

      {/* ===== WEDDING ===== */}
      <SectionHeading
        title="Engagement trays include ring box & handles"
        subtitle="Made to celebrate love & new beginnings"
      />

      <CollectionGrid items={wedding} category="wedding" />

      {/* ===== ISLAMIC ===== */}
      <SectionHeading
        title="Islamic Collection"
        subtitle="Handmade with islamic elegance & devotion"
      />

      <CollectionGrid items={islamic} category="islamic" />
    </div>
  );
}


/* ================== Reusable Components ================== */

function SectionHeading({ title, subtitle }) {
  return (
    <div className="relative py-14 md:py-16 text-center ">
      <div className="absolute inset-0  rounded-md  pointer-events-none" />

      <div className="relative mt-[-30]">
        <h2 className=" font-bold text-3xl md:text-4xl lg:text-5xl text-[#0a313a] mb-2">
          {title}
        </h2>

        <p className="text-sm md:text-base text-[#585349]">
          {subtitle}
        </p>
      </div>
    </div>
  );
}



function CollectionGrid({ items, category }) {
  return (
    <div className="mt-[-130]     grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map(item => (
        <Link
          key={item.id}
          href={`/products?category=${category}&focus=${item.slug}`}
          className="group"



        >
           
         <motion.div
  className="overflow-hidden rounded-xl shadow-md"
  initial={{ y: -60, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: 'easeOut' }}
>
  <div className="relative w-full aspect-[4/3]">
    <Image
      src={item.image}
      alt={item.title}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-110"
    />
  </div>
</motion.div>

       
        </Link>
      ))}
    </div>
  );
}
