
"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const reviews = [
  { id: 1, image: "/reviews/rv1.jpeg" },
  { id: 2, image: "/reviews/gv.jpeg" },
  { id: 3, image: "/reviews/rv3.jpeg" },
  { id: 4, image: "/reviews/rv4.jpeg" },
  { id: 5, image: "/reviews/rv5.jpeg" },
  { id: 6, image: "/reviews/rvv.jpeg" },
  { id: 7, image: "/reviews/rv7.jpeg" },
  { id: 8, image: "/reviews/rv8.jpeg" },
];

export default function CustomerReviews() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);

  // Auto Slide
  useEffect(() => {
    if (!isHovered) {
      timeoutRef.current = setTimeout(() => {
        setIndex((prev) => (prev + 1) % reviews.length);
      }, 6000);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [index, isHovered]);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">

      {/* 🎥 Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700
        ${!isMuted ? "brightness-110 scale-105" : "brightness-75"}`}
      >
        <source src="/eng.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className={`absolute inset-0 transition-all duration-500 z-10 
        ${!isMuted ? "bg-black/30" : "bg-black/60"}`} />

      {/* 🔊 Premium Sound Button */}
      <motion.button
        onClick={toggleSound}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-5 right-5 md:bottom-8 md:right-8 z-50"
      >
        <div className="w-10 h-10 md:w-12 md:h-12
                        rounded-full
                        bg-white/20 backdrop-blur-md
                        border border-white/30
                        flex items-center justify-center
                        shadow-xl">
          {isMuted ? (
            <VolumeX size={18} className="text-white" />
          ) : (
            <Volume2 size={18} className="text-white" />
          )}
        </div>
      </motion.button>

      <div className="relative z-20">

        {/* Heading */}
        <motion.div
          animate={{ opacity: !isMuted ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-14 text-white px-4"
        >
          <h2 className="text-2xl md:text-4xl font-semibold tracking-wide">
            Happy Customers
          </h2>
          <p className="mt-2 text-gray-200 text-xs md:text-sm">
            Real feedback from our lovely clients
          </p>
        </motion.div>

        {/* Slider */}
        <div
          className="relative w-full max-w-4xl mx-auto
                     h-[340px] sm:h-[400px] md:h-[480px]
                     overflow-hidden px-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={reviews[index].id}
              initial={{ x: "100%" }}
              animate={{
                x: 0,
                transition: { duration: 0.45 } // fast from right
              }}
              exit={{
                x: "-100%",
                transition: { duration: 1.2 } // slow to left
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className={`w-full h-full 
                               rounded-3xl 
                               bg-white/10
                               backdrop-blur-md
                               border border-white/20
                               shadow-2xl
                               p-4 md:p-8
                               transition-all duration-500
                               ${!isMuted ? "opacity-0 scale-95" : "opacity-100 scale-100"}
                               flex flex-col`}>

                <div className="text-center text-yellow-400 text-sm md:text-lg mb-3">
                  ★★★★★
                </div>

                <div className="relative flex-1 rounded-2xl overflow-hidden">
                  <Image
                    src={reviews[index].image}
                    alt="Customer Review"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="text-center text-xs md:text-sm text-white mt-3">
                  ✔ Verified Customer
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
