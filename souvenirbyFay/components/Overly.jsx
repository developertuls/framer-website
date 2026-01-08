
"use client";

import { motion } from "framer-motion";

export default function OurWorkSection() {
  return (
    <div className="mt-9 p-9">
      <div className="relative mb-16 overflow-hidden text-white shadow-md">

        {/* Animated Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://instagram.fdac198-2.fna.fbcdn.net/v/t51.82787-15/530846552_17914861497160224_4563255880527262803_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=100&ig_cache_key=MzY5NzcxNDExMjQ3MDM0Mzk0Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5oZHIuQzMifQ%3D%3D&_nc_ohc=_NKGTaIjTsgQ7kNvwExtpqP&_nc_oc=AdlbKFjFSn7pUvZixBK0VSCN3CjBS7MZRr29GoKofcMiBHZxZaynL-UEV36UqCVm5v0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fdac198-2.fna&_nc_gid=97fQXbqMYrg85QhPRPDFLw&oh=00_AfoMRqpob368K1Zsm4CQO2nbRKGNb_lc57cq3iUinhczGA&oe=696537C0')",
          }}
          initial={{ scale: 1, x: 0 }}
          animate={{ scale: 1.1, x: -30 }}
          transition={{
            duration: 18,
            ease: "linear",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#000]/55" />

        {/* Content */}
        <div
          className="
            relative
            max-w-6xl
            mx-auto
            px-4
            sm:px-6
            md:px-16
            py-20
            md:py-28
            text-center
          "
        >
          {/* Small title */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6">
            <span className="h-px w-10 sm:w-16 bg-white" />
            <p className="tracking-[0.25em] text-xs sm:text-sm md:text-lg uppercase">
              Our Work
            </p>
            <span className="h-px w-10 sm:w-16 bg-white" />
          </div>

          {/* Heading */}
          <h2 className="font-bold text-3xl sm:text-4xl md:text-6xl mb-6 leading-tight">
            What we like to do best at
          </h2>

          {/* Paragraphs */}
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-white/90 text-justify">
              Crafted with gentle hands and heartfelt devotion, our collections
              are adorned with the beautiful names of Almighty Allah, verses from
              the Quran, and Hadith. These timeless pieces bring a sense of peace,
              spirituality and barakah into your home, shop, or any space.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-white/90 text-justify">
              In addition, for blessed occasions such as weddings and nikahs, our
              creations serve as a unique and meaningful gift—preserving the
              cherished memories of the beginning of a beautiful and
              barakah-filled new journey for both bride and groom.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
