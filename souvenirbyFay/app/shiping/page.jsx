
// app/shipping/page.jsx
"use client";

import { motion } from "framer-motion";
import { Truck, Clock, Globe, ShieldCheck } from "lucide-react";

export default function ShippingPage() {
  return (
    <section className="bg-[#fcffff] shadow-2xl md:mt-5 py-20">
      <div className=" p-9  mx-auto max-w-5xl px-4 md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-3">
            Information
          </p>

          <h1 className="text-4xl md:text-5xl  text-gray-900">
            Shipping & Delivery
          </h1>

          <div className="mx-auto mt-6 h-[2px] w-24 rounded-full bg-[#C9A24D]" />

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Carefully crafted by hand and delivered with care — please review
            our shipping details below.
          </p>
        </motion.div>

        {/* Content Card */}
        <div className="space-y-10 shadow-2xl p-8">

          {/* Processing Time */}
          <InfoCard
          
            icon={<Clock />}
            title="Processing Time"
            en="All our products are handcrafted and made to order. Once your order is confirmed, it usually takes 5–10 business days to prepare your item."
        
          />

          {/* Shipping Time */}
          <InfoCard
            icon={<Truck />}
            title="Shipping Time"
            en={
              <>
                • Inside Bangladesh: 2–4 business days <br />
                • International Orders: 7–14 business days
              </>
            }
        
          />

          {/* Shipping Method */}
          <InfoCard
            icon={<ShieldCheck />}
            title="Shipping Method"
            en="We ship all orders through trusted courier services to ensure safe and secure delivery."
         
          />

          {/* Delivery Charges */}
          <InfoCard
            icon={<Globe />}
            title="Delivery Charges"
            en="Shipping costs are calculated at checkout based on your location and order size."
         
          />

          {/* Tracking */}
          <InfoCard
            title="Order Tracking"
            en="Once your order is shipped, you will receive a tracking number via email or WhatsApp."
       
          />

          {/* Handmade Notice */}
          <InfoCard
            highlight
            title="Custom & Handmade Notice"
            en="As each piece is handmade, slight variations in color, texture, or design may occur. These variations are part of the unique charm of handcrafted art."
     
          />

          {/* Delay */}
          <InfoCard
            title="Possible Delays"
            en="Delivery times may vary due to customs clearance, holidays, or unforeseen circumstances. Thank you for your patience."
        
          />
        </div>
      </div>
    </section>
  );
}

/* Reusable Card */
function InfoCard({ icon, title, en, bn, highlight }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`rounded-3xl p-8 shadow-sm ${
        highlight ? "bg-[#fff7e8] shadow-2xl" : "bg-white"
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        {icon && <span className="text-[#C9A24D]">{icon}</span>}
        <h3 className="text-xl font-medium text-gray-900">{title}</h3>
      </div>

      <p className="text-gray-700 leading-relaxed mb-3">{en}</p>
      <p className="text-gray-500 leading-relaxed text-sm">{bn}</p>
    </motion.div>
  );
}
