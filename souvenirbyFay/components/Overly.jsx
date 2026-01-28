"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function OurCraft() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="w-full craft-overly py-24 sm:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="
            mx-auto max-w-6xl
            bg-white/70 backdrop-blur-sm
            rounded-3xl shadow-2xl
            px-6 sm:px-12 lg:px-16
            py-14 sm:py-20
          "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-20 items-center">
            
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex justify-center md:justify-start"
            >
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="
                  relative
                  w-[280px] sm:w-[320px] lg:w-[360px]
                  aspect-square
                  rounded-2xl
                  overflow-hidden
                  shadow-2xl
                "
              >
                <img
                  src="/s3.png"
                  alt="Our Craft"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.8 }}
            >
              <span className="text-xs tracking-[0.4em] text-[#b7a38a] uppercase block mb-5">
                OUR WORK
              </span>

              <h2 className="fon text-3xl sm:text-4xl lg:text-5xl text-gray-800 leading-tight mb-7">
                This is what we do best and what we love most
              </h2>

              {/* TEXT WRAPPER */}
              <div
                className="
                  text-gray-600
                  text-[15.5px] sm:text-base
                  leading-[1.9]
                  tracking-[0.01em]
                  max-w-full sm:max-w-xl
                "
              >
                {/* Mobile short text */}
                <p className="md:hidden">
                  Crafted with gentle hands and heartfelt devotion, our collections
                  are adorned with the beautiful names of Almighty Allah, verses
                  from the Quran, and Hadith.
                  {!expanded && "…"}
                </p>

                {/* Mobile expanded text */}
                {expanded && (
                  <p className="md:hidden mt-4">
                    These timeless pieces bring a sense of peace, spirituality,
                    and barakah into your home, shop, or any space. In addition,
                    for blessed occasions such as weddings and nikahs, our creations
                    serve as a unique and meaningful gift—preserving the cherished
                    memories of the beginning of a beautiful and barakah-filled new
                    journey for both bride and groom.
                  </p>
                )}

                {/* Desktop full text */}
                <p className="hidden md:block">
                  Crafted with gentle hands and heartfelt devotion, our collections
                  are adorned with the beautiful names of Almighty Allah, verses
                  from the Quran, and Hadith. These timeless pieces bring a sense
                  of peace, spirituality, and barakah into your home, shop, or
                  any space.
                  <br /><br />
                  In addition, for blessed occasions such as weddings and nikahs,
                  our creations serve as a unique and meaningful gift—preserving
                  the cherished memories of the beginning of a beautiful and
                  barakah-filled new journey for both bride and groom.
                </p>

                {/* Read more button (mobile only) */}
               <button
  onClick={() => setExpanded(!expanded)}
  className="
    md:hidden mt-4
    text-sm
    text-gray-500
    hover:text-[#8a6f4d]
    transition-colors
    underline-offset-4
    hover:underline
  "
>
  {expanded ? "Read less ↑" : "Read more.."}
</button>

              </div>
<a
  href="/products"
  className="
    inline-flex items-center gap-2
    mt-8
    px-6 py-3
    rounded-full
    border border-[#8a6f4d]
    text-[#8a6f4d]
    text-sm font-medium
    hover:bg-[#8a6f4d]
    hover:text-white
    transition-all
  "
>
  Learn More →
</a>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
