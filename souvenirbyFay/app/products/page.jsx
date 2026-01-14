

"use client";


import Image from "next/image";
import Link from "next/link";
import AnimatedHeading from "@/components/AnimatedHeading";
import ProductsData from "@/productData/ProductsData"

/************************************************************************/






export default function AllProducts() {
 

  return (
    <section className="py-20 px-4 md:px-12">
      
     




     {/* Heading FeaturedCollection style animate */}

      {/* <div className="  flex md:mt-[-20px]  justify-center items-center py-12 overflow-visible perspective-[1000px]">
        <h2
          className="
            font bold
            bg-white px-6 py-4
            text-center text-4xl md:text-6xl font-bold
            flex gap-3
            shadow-xl
            transform-gpu
            -translate-y-4 md:-translate-y-10
          "
          style={{
            textShadow: "0 6px 18px rgba(0,0,0,0.25)",
          }}>

          <AnimatedHeading direction="left">
            <span className="text-[#000]">Featured</span>
          </AnimatedHeading>

          <AnimatedHeading direction="right">
            <span className="text-[#000]">Collections</span>
          </AnimatedHeading>
        </h2>
      </div> */}






      {/* 🖼️ Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {ProductsData.map((item) => (
          <Link
            key={item.id}
            href={`/collections/${item.slug}`}
            className="group relative overflow-hidden rounded-xl
                       shadow-md hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative h-[380px] w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            
            </div>

            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40
                            transition-colors duration-500 flex items-end">
              <div className="w-full bg-white/95 p-5 text-center
                              translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                  {/* <p>price {item.price}</p> */}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
     
    </section>
    
  );
}
