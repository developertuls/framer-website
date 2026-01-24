
// "use client";

// import { motion } from "framer-motion";

// export default function OurWorkSection() {
//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 80, scale: 0.98 }}
//       whileInView={{ opacity: 1, y: 0, scale: 1 }}
//       transition={{
//         duration: 1.2,
//         ease: "easeOut",
//       }}
//       viewport={{ once: true, amount: 0.3 }}
//       className="mt-9 p-9"
//     >
//       <div className="relative mb-16 overflow-hidden text-white shadow-md">
//         {/* Animated Background Image */}
//         <motion.div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage:
//               "url('https://instagram.fdac198-2.fna.fbcdn.net/v/t51.82787-15/530846552_17914861497160224_4563255880527262803_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=100&ig_cache_key=MzY5NzcxNDExMjQ3MDM0Mzk0Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5oZHIuQzMifQ%3D%3D&_nc_ohc=XNfvkuVLMPEQ7kNvwGO4rxn&_nc_oc=AdkCZlKQ-sbh9DEAZDbcu_ow1sis0Wjpomaj53VwOMBd27T_G2puqoBYLdV3_ay-Kc0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fdac198-2.fna&_nc_gid=Pz4aO2EOR1gXvbfpz_xtMg&oh=00_AfoQtwHrji86wMiZbmn7ncmE5uRwJRIOOUFY0xGFezDoHA&oe=69711540')",
//           }}
//           initial={{ scale: 1.2 }}
//           animate={{ scale: 1.05 }}
//           transition={{
//             duration: 20,
//             ease: "linear",
//             repeat: Infinity,
//             repeatType: "mirror",
//           }}
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/55" />

//         {/* Content */}
//         <div className="relative max-w-6xl mx-auto px-4 md:px-16 py-20 md:py-28 text-center">
//           <div className="flex items-center justify-center gap-6 mb-6">
//             <span className="h-px w-16 bg-white" />
//             <p className="tracking-[0.3em] text-sm uppercase">Our Work</p>
//             <span className="h-px w-16 bg-white" />
//           </div>

//           <h2 className="font-bold text-3xl sm:text-4xl md:text-6xl mb-6">
//             What we like to do best at
//           </h2>
//   {/* Paragraphs */}
//           <div className="max-w-4xl mx-auto space-y-6">
//             <p className="text-base sm:text-lg md:text-xl text-white/90 text-justify">
//               Crafted with gentle hands and heartfelt devotion, our collections
//               are adorned with the beautiful names of Almighty Allah, verses from
//               the Quran, and Hadith. These timeless pieces bring a sense of peace,
//               spirituality and barakah into your home, shop, or any space.
//             </p>

//             <p className="text-base sm:text-lg md:text-xl text-white/90 text-justify">
//               In addition, for blessed occasions such as weddings and nikahs, our
//               creations serve as a unique and meaningful gift—preserving the
//               cherished memories of the beginning of a beautiful and
//               barakah-filled new journey for both bride and groom.
//             </p>
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// }











export default function OurCraft() {
  return (
    <section className="w-full bg-[#f5f3ef] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-10">

          <div className="flex justify-center">
            <img
              src="/sec.png"
              alt="Islamic Art"
              className="max-w-sm w-full rounded-xl"
            />
          </div>

          <div>
            <p className="text-sm tracking-[0.3em] text-[#b7a38a] mb-4">
              OUR CRAFT
            </p>

            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight mb-6">
              What we like to do <br /> best at
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Crafted with gentle hands and heartfelt devotion, our pieces are
              adorned with the beautiful names of Almighty Allah, verses from
              the Quran, and Hadith.
            </p>

            <a className="text-[#8a6f4d] text-sm font-medium inline-flex items-center gap-2 hover:gap-3 transition-all cursor-pointer">
              Learn More →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
