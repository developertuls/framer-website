
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  "/images/fatima.avif",
  "/hero-1.jpeg",
  "/hero-2.jpeg",
  "/hero-3.jpeg",
  "/hero-4.jpeg",
];

const directionKeys = ["left", "right", "top", "bottom"];

const directionMap = {
  left: { x: -120, y: 0 },
  right: { x: 120, y: 0 },
  top: { x: 0, y: -120 },
  bottom: { x: 0, y: 120 },
};

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("left");

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % slides.length;
        const randomDir =
          directionKeys[Math.floor(Math.random() * directionKeys.length)];
        setDirection(randomDir);
        return next;
      });
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* IMAGE SLIDER */}
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            ...directionMap[direction],
            scale: 1.05,
          }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.6,
            ease: "easeOut",
          }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index]}
            alt="Hero Image"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="   absolute inset-0 bg-gradient-to-r from-[#12CBC4]/30 via-black/40 to-transparent z-10" />

      {/* CONTENT */}
      <div className="md:mt-9  relative z-20 flex min-h-screen items-center px-4 sm:px-8 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            max-w-xl
            bg-[#182C61]/30
          
            text-white
            p-6 sm:p-8 md:p-12
            rounded-xl
            shadow-2xl
          "
        >
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
            Elevate your space
            <br />
            with custom resin art
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90">
            Handcrafted, timeless pieces that preserve memories
            and elevate interiors.
          </p>

          <Link
            href="/shop"
            className="inline-block mt-6 rounded-full bg-white px-8 py-3
                       text-sm font-semibold text-gray-900 hover:bg-gray-200 transition"
          >
            Explore Collection
          </Link>
        </motion.div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full transition-all
              ${i === index ? "bg-white scale-125" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
}
