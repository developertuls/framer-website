
"use client";

import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // success | error
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .send(
        "service_o10gr7l",
        "template_0uamih2",
        formData,
        "V5UV5l4V0Soqp-qYd"
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="bg-[#fcffff] py-14 sm:py-20">
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

 {/* Status Message */}
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-xl bg-green-100 text-green-700 px-4 py-3 text-sm"
            >
              ✅ Message sent successfully! We’ll get back to you soon.
            </motion.div>
          )}



        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-6 bg-white p-6 sm:p-10 rounded-3xl shadow-lg"
        >
          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl bg-gray-100 px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-[#0a6562]"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl bg-gray-100 px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-[#0a6562]"
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full rounded-xl bg-gray-100 px-4 py-3 resize-none
            focus:outline-none focus:ring-2 focus:ring-[#0a6562]"
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

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#0a6562] py-3
            text-white font-medium transition
            hover:bg-[#119894]
            disabled:opacity-60"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
