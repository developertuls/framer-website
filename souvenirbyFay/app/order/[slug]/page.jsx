
"use client";

import { useParams } from "next/navigation";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import FullScreenImage from "@/components/FullScreenImage";
import OrderForm from "@/components/OrderForm";
import ProductsData from "@/productData/ProductsData";

export default function OrderPage() {
  // ✅ params ঠিকভাবে নিলাম
  const params = useParams();

  const product = ProductsData.find(
    (p) => p.slug === params.slug
  );

  if (!product) {
    return (
      <p className="p-10 text-center text-red-500">
        Product not found
      </p>
    );
  }

  /* IMAGE STATE */
  const [showImage, setShowImage] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [activeImage, setActiveImage] = useState(product.image);
  const imageRef = useRef(null);

  const [zoomStyle, setZoomStyle] = useState({
    transform: "scale(1)",
    transformOrigin: "center",
  });

  const handleMouseMove = (e) => {
    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setZoomStyle({
      transform: "scale(1.8)",
      transformOrigin: `${x}% ${y}%`,
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      transform: "scale(1)",
      transformOrigin: "center",
    });
  };

  return (
    <>
      <div className=" craft-overly   max-w-7xl mx-auto px-4 md:px-10 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* IMAGE COLUMN */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div
              ref={imageRef}
              onMouseEnter={() => setIsHover(true)}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => {
                setIsHover(false);
                handleMouseLeave();
              }}
              onClick={() => setShowImage(true)}
              className="md:mt-17   relative w-full aspect-square overflow-hidden rounded-3xl cursor-zoom-in bg-gray-100 shadow"
            >
              <Image
                src={
                  isHover && product.zoomImage
                    ? product.zoomImage
                    : activeImage
                }
                alt={product.title}
                fill
                priority
                className="object-cover transition-transform duration-500"
                style={isHover ? zoomStyle : {}}
              />
            </div>

            {/* BADGES */}
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="px-3 py-1 text-xs rounded-full bg-gray-100">
                ✨ Handcrafted
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-gray-100">
                🌍 Worldwide Delivery
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-gray-100">
                🎁 Custom Made
              </span>
            </div>
          </motion.div>

          {/* FORM COLUMN */}
          <OrderForm product={product} mode="product" />

        </div>
      </div>

      <FullScreenImage
        showImage={showImage}
        setShowImage={setShowImage}
        product={product}
      />
    </>
  );
}
