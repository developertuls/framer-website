
"use client";

import { motion, AnimatePresence } from "framer-motion";





export default  function PricingGate({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60"
          />

          {/* Box */}
          
        <motion.div
  initial={{ y: "-100%", opacity: 0 }}
  animate={{ y: "0%", opacity: 1 }}
  exit={{ y: "-100%", opacity: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="
    fixed top-0 left-0 right-0 z-50 mx-auto
    w-full max-w-3xl
    rounded-b-3xl bg-[#0a0a1e]
    px-5 py-6 sm:p-8
    shadow-2xl 
  "
>
  {/* Header */}
  <div className="  mb-6 flex items-center justify-between">
    <h3 className="text-white  flex items-center gap-2 text-xl sm:text-2xl font-semibold">
      <span className="animate-bounce">💰</span> Pricing Guide
    </h3>

    <button
      onClick={onClose}
      className="
        rounded-full bg-white
        px-4 py-1.5
        text-sm text-black
        transition hover:opacity-80
      "
    >
      Close
    </button>
  </div>

  {/* Content */}
  <div className="space-y-6 text-sm sm:text-base leading-relaxed">
    {/* 13 inch */}
    <div className="space-y-3">


<p className="mb-4 text-sm opacity-80 font-medium text-white">
  We also offer favors for weddings, engagements, baby showers & other special occasions.
</p>


      <p className="opacity-90 text-white md:pb-3">
        Our 13-inch engagement trays are fully customizable.
        You can choose your preferred design, colors, and add a personal touch.
        Each tray includes handles and a ring box.
      </p>

      <div className="hover:scale-[1.01] transition  flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
        <span className=" font-medium ">13 inch Engagement Tray</span>
        <span className=" animate-bounce  decoration-2 transition-all font-semibold ">from $115</span>
      </div>
    </div>

    {/* 10 inch tray */}
    <div className="space-y-3">
      <p className="opacity-80 text-white md:pb-3">
        Our 10-inch engagement trays are also fully customizable.
        You can design them according to your preference,
        and each tray includes handles and a ring box.
      </p>

      <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
        <span className="font-medium">10 inch Engagement Tray</span>
        <span className="animate-bounce  decoration-2 transition-all   font-semibold">from $100</span>
      </div>
    </div>

    {/* Plaque */}
    <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
      <span className="font-medium">10 inch Plaque</span>
      <span className="italic opacity-70">Fully customizable</span>
    </div>
  </div>

  {/* Footer note */}
  <div className="mt-6 rounded-xl bg-gray-100 px-4 py-3 text-xs sm:text-sm text-[#1B1464]">
    Final price depends on size, design, personalization & packaging.
  </div>
</motion.div>

        </>
      )}
    </AnimatePresence>
  );
}
