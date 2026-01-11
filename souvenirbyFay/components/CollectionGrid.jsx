
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/* Animation Variants */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};




export default function CollectionGrid({ images, title }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 shadow-md p-9"
    >
      {images.map((item) => (
        <motion.div
          key={item.id}
          variants={itemVariant}
          className="group relative overflow-hidden rounded-2xl shadow-md"
        >
          <Link href={`/order/${item.slug}`}>
            <Image
              src={item.image}
              alt={item.title || title}
              width={600}
              height={500}
              className="h-[380px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="border   absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            
          </Link>



{/* Text */}
            <div className=" transition-all duration-500 p-8">
              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="text-sm opacity-80 mt-1">View details →</p>
              <p className="text-sm opacity-80 mt-1">price :{item.price}</p>
             
            </div>





        </motion.div>
      ))}
    </motion.div>
  );
}
