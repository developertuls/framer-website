
"use client";

import { motion } from "framer-motion";

export default function OurCraft() {
  return (
    <section className="w-full   craft-overly  py-32 overflow-hidden">
      
      {/* Outer container */}
      <div className="max-w-[1440px] mx-auto px-8">
        
        {/* Animated Inner Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="mx-auto
                     max-w-6xl
                     bg-[#fff]/60
                     rounded-3xl
                     shadow-2xl
                     px-16 py-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="  flex justify-center md:justify-start"
            >
              <motion.div
  initial={{ opacity: 0, x: -80 }}  
  whileInView={{ opacity: 1, x: 0 }} 
  viewport={{ once: true, amount: 0.3 }} 
  transition={{ duration: 0.7, ease: "easeOut" }}
  className="  md:ml-9  relative w-[320px] lg:w-[360px] aspect-square rounded-2xl overflow-hidden"
>
  <img
    src="/s3.png"
    alt="Our Craft"
    className=" absolute shadow-2xl inset-0 w-full h-full object-cover"
  />
</motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className=""
            >
              <span className="text-xs tracking-[0.4em] text-[#b7a38a] uppercase block mb-6">
              OUR WORK
              </span>

              <h2 className="font-serif text-4xl lg:text-5xl text-gray-800 leading-tight mb-8">
               What we like to do <br /> best at
              </h2>

              <p className="text-gray-600   leading-relaxed text-justify hyphens-auto max-w-lg mb-6">
              Crafted with gentle hands and heartfelt devotion, our collections are adorned with the beautiful names of Almighty Allah, verses from the Quran, and Hadith. These timeless pieces bring a sense of peace, spirituality and barakah into your home, shop, or any space.

In addition, for blessed occasions such as weddings and nikahs, our creations serve as a unique and meaningful gift—preserving the cherished memories of the beginning of a beautiful and barakah-filled new journey for both bride and groom.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#8a6f4d]
                           text-sm font-medium hover:gap-3 transition-all"
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
