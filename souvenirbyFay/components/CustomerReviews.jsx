
"use client";

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
    if (!isHovered && isMuted) {
      timeoutRef.current = setTimeout(() => {
        setIndex((prev) => (prev + 1) % reviews.length);
      }, 7000);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [index, isHovered, isMuted]);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">

      {/* 🎥 Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/eng.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <motion.div
        animate={{ opacity: isMuted ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 bg-black/50 z-10"
      />

      {/* Sound Button */}
      <button
        onClick={toggleSound}
        className="absolute bottom-8 right-8 z-50
                   bg-white/80 hover:bg-white
                   text-black text-sm
                    rounded-full
                   shadow-xl transition"
      >
        {isMuted ? " 🔇 " : "🔊 "}
      </button>

      <div className="relative z-20 h-full flex flex-col justify-center">

        {/* Heading */}
        <motion.div
          animate={{ opacity: isMuted ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mt-9">
            Happy Customers
          </h2>
          <p className="mt-3 text-gray-200">
            Real feedback from our lovely clients
          </p>
        </motion.div>

        {/* Slider */}
        <motion.div
            animate={{
    x: !isMuted && typeof window !== "undefined" && window.innerWidth >= 768 ? "35vw" : 0,
    y: !isMuted && typeof window !== "undefined" && window.innerWidth >= 768 ? "30vh" : 0,
    scale: !isMuted && typeof window !== "undefined" && window.innerWidth >= 768 ? 0.55 : 1,
  }}
  transition={{
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="relative w-full max-w-5xl mx-auto
             h-[320px] sm:h-[380px] md:h-[450px]
             overflow-hidden px-4"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={reviews[index].id}
              initial={{ x: "100%", opacity: 0.8 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.9,
                  ease: "easeOut",
                },
              }}
              exit={{
                x: "-120%",
                opacity: 0,
                transition: {
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Card Background Hidden When Sound On */}
              <motion.div
                animate={{
                  backgroundColor: isMuted
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(0,0,0,0)",
                  backdropFilter: isMuted
                    ? ""
                    : "blur(0px)",
                  borderColor: isMuted
                    ? "rgba(255,255,255,0.2)"
                    : "rgba(0,0,0,0)",
                }}
                transition={{ duration: 0.6 }}
                className="w-full h-full
                           rounded-2xl md:rounded-3xl
                           p-4 sm:p-6 md:p-8
                           shadow-2xl
                           flex flex-col mb-9" 
              >
                {/* Hide Extra Elements */}
                {isMuted && (
                  <div className="text-center text-yellow-400 text-base md:text-lg mb-3 md:mb-4">
                    ★★★★★
                  </div>
                )}

                {/* Image */}
                <div className="relative flex-1 rounded-xl md:rounded-2xl overflow-hidden">
                  <Image
                    src={reviews[index].image}
                    alt="Customer Review"
                    fill
                    className="object-contain"
                  />
                </div>

                {isMuted && (
                  <div className="text-center text-xs sm:text-sm text-white mt-3 md:mt-4">
                    ✔ Verified Customer
                  </div>
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
