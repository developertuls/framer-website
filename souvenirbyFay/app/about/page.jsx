
// app/about/page.jsx
"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section
      className="craft-overly-about  relative bg-[#040619] text-white md:mt-5 bg-cover bg-contain"
    
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-10 py-20">

        {/* 🔹 Header → TOP */}
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-14 text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl">
            About Us
          </h1>

          <div className="mx-auto mt-6 h-[2px] w-24 rounded-full bg-[#C9A24D]" />
        </motion.div>

        {/* 🔹 Content → LEFT & RIGHT */}
        <div className="mx-auto max-w-3xl space-y-8 text-center">

          <motion.p
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-base sm:text-lg leading-relaxed"
          >
            We create <span className="font-medium">
              handcrafted, made-to-order decorative products</span> designed
            to celebrate meaningful moments. Every piece is carefully crafted
            with attention to detail and premium materials.
          </motion.p>

          <motion.p
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-base sm:text-lg leading-relaxed"
          >
            Our collections include <span className="font-medium">
              wedding décor, Islamic art, and resin-based designs</span>. We proudly
            offer worldwide shipping to bring our creations to customers across
            the globe.
          </motion.p>

        </div>

        {/* 🔹 Brand Statement → BOTTOM */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mx-auto mt-16 max-w-4xl rounded-3xl bg-white px-6 py-10 text-center shadow-sm"
        >
          <p className="text-sm sm:text-base text-gray-700 italic">
            “Luxury handmade resin art crafted with care, faith, and elegance.”
          </p>
        </motion.div>

      </div>
    </section>
  );
}
