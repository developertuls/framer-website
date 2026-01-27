
// app/returns/page.jsx
"use client";

import { motion } from "framer-motion";

export default function ReturnPolicyPage() {
  return (
    <section className="craft-overly px-4 md:mt-9 mt-5 md:px-12 py-20 overflow-hidden">
      
      {/* Page Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          Return Policy
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          Please take a moment to review our return and replacement policy
          before placing an order.
        </p>
      </motion.div>

      {/* Policy Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-4xl mx-auto bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-12 space-y-10"
      >

        {/* Policy Item */}
        <PolicyItem
          title="Handmade & Custom Products"
          text="All our products are handcrafted and made to order. Due to the custom nature of our items, returns or exchanges are not accepted once production has started."
        />

        <PolicyItem
          title="Damaged or Incorrect Items"
          text="If you receive a damaged or incorrect item, please contact us within 24 hours of delivery with clear photos or videos for verification."
          highlight
        />

        <PolicyItem
          title="Replacement Policy"
          text="Once verified, we offer replacement only. Refunds are not available for handmade or custom-made items."
        />

        {/* List Section */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold mb-3">
            Non-Returnable Items
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Customized or personalized products</li>
            <li>Items with customer-provided text or designs</li>
            <li>Products damaged after delivery</li>
            <li>Used or altered items</li>
          </ul>
        </div>

        <PolicyItem
          title="Order Cancellation"
          text="Orders cannot be canceled once production has begun. Please review all details carefully before confirming your order."
        />

        <PolicyItem
          title="Shipping Costs"
          text="Shipping fees are non-refundable. Replacement shipments may include additional shipping charges."
        />

        {/* Help Box */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
          <h3 className="font-semibold mb-2">Need Help?</h3>
          <p className="text-gray-600 text-sm">
            If you have any questions about our return policy, feel free to
            contact us. We’re always happy to help 🤍
          </p>
        </div>

      </motion.div>
    </section>
  );
}

/* Reusable Policy Item */
function PolicyItem({ title, text, highlight }) {
  return (
    <div className="space-y-2">
      <h2 className="text-lg md:text-xl font-semibold">
        {title}
        {highlight && (
          <span className="ml-2 text-sm text-red-500 font-medium">
            (Important)
          </span>
        )}
      </h2>
      <p className="text-gray-600 leading-relaxed">{text}</p>
    </div>
  );
}
