
// app/contact/page.jsx
"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section className="bg-[#fcffff] py-20 overflow-hidden md:mt-5">
      <div className="max-w-3xl mx-auto px-4">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl  text-[#1B1464] text-center mb-4"
        >
          Contact us
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mb-6 h-[2px] w-20 origin-left rounded-full bg-[#C9A24D]"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-[#1B1464] mb-14 leading-relaxed text-sm sm:text-base"
        >
          Have questions or need a custom order? Send us a message
          <br className="hidden sm:block" />
          and we’d be happy to help!
        </motion.p>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-8 bg-white p-8 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all"
        >

          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {["Name", "Email"].map((label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                viewport={{ once: true }}
              >
                <label className="block text-xs tracking-widest uppercase text-gray-600 mb-2">
                  {label}
                </label>
                <input
                  type={label === "Email" ? "email" : "text"}
                  placeholder={label === "Email" ? "jane@framer.com" : "Jane Smith"}
                  className="w-full rounded-xl bg-gray-100 px-5 py-4 text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-[#2b8a87] transition"
                />
              </motion.div>
            ))}
          </div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <label className="block text-xs tracking-widest uppercase text-gray-600 mb-2">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Your message..."
              className="w-full rounded-xl bg-gray-100 px-5 py-4 text-gray-800 placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-[#408280] transition resize-none"
            />
          </motion.div>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            type="submit"
            className="w-full rounded-full bg-[#0a6562] py-4 text-white text-base sm:text-lg font-medium
            hover:bg-[#119894] hover:scale-[1.02] hover:cursor-pointer active:scale-[0.96] transition-all duration-300"
          >
            Submit Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
