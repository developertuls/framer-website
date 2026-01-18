


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
    <div className="space-y-24 px-4 md:px-10">

      {/* ===== WEDDING COLLECTION ===== */}
      <SectionHeading title1="Wedding" title2="Collection" />

      <CollectionGrid
        items={wedding}
        category="wedding"
      />

      {/* ===== ISLAMIC COLLECTION ===== */}
      <SectionHeading title1="Islamic" title2="Collection" />

      <CollectionGrid
        items={islamic}
        category="islamic"
      />
    </div>
  );
}

/* ================== Reusable Components ================== */

function SectionHeading({ title1, title2 }) {
  return (
    <div className="bgred  flex justify-center py-12">
      <h2
        className="bg-white px-6 py-4 text-center
        text-3xl md:text-5xl font-bold
        flex gap-2 shadow-xl -translate-y-6  rounded-full mt-9"
        
        style={{ textShadow: "0 6px 18px rgba(0,0,0,0.25)" }}
      >
        <AnimatedHeading direction="left">
          <span className="">{title1}</span>
        </AnimatedHeading>
        <AnimatedHeading direction="right">
          <span>{title2}</span>
        </AnimatedHeading>
      </h2>


     
    </div>
  );
}

function CollectionGrid({ items, category }) {
  return (
    <div className=" md:mt-[-100px] md:p-9 md:mb-9 md:shadow-xl  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map(item => (
        <Link
          key={item.id}
          href={`/products?category=${category}&focus=${item.slug}`}
          className="group"



        >
           
          <motion.div className="overflow-hidden rounded-xl shadow-md"
            initial={{ y: -60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
          
          
          
          >
          
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={500}
              className=" animate-slideInLeft   w-full h-[280px] object-cover
              transition-transform duration-500 group-hover:scale-110"
            />
           
          </motion.div>
       
        </Link>
      ))}
    </div>
  );
}
