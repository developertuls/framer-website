
"use client";

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function ContactPage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔒 Safety check (very important)
    if (
      !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE ||
      !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ) {
      console.error("EmailJS environment variables missing");
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      console.error("Contact Email Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#fcffff] craft-overly md:mt-9 mt-10 py-14 sm:py-20">
      <div className="max-w-3xl mx-auto px-4">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl text-center mb-4"
        >
          Contact Us
        </motion.h1>

        {/* Subtitle */}
        <p className="text-center text-gray-600 mb-10">
          Have questions or need a custom order?
          Send us a message and we’ll be happy to help.
        </p>

        {/* Success Message */}
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-xl bg-green-100 text-green-700 px-4 py-3 text-sm mb-6"
          >
            ✅ Message sent successfully! We’ll get back to you soon.
          </motion.div>
        )}

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-6 bg-white/40 p-6 sm:p-10 rounded-3xl shadow-lg"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl bg-[#fff] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0a6562]"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl bg-[#fff] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0a6562]"
            />
          </div>

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full rounded-xl bg-[#fff] px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#0a6562]"
          />

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-xl bg-red-100 text-red-700 px-4 py-3 text-sm"
            >
              ❌ Something went wrong. Please try again.
            </motion.div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#0a6562] py-3 text-white font-medium transition hover:bg-[#119894] disabled:opacity-60"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}



