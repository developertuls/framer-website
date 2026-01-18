
// app/returns/page.jsx
"use client";

import { motion } from "framer-motion";

export default function ReturnPolicyPage() {
  return (
    <section className="bg-[#fcffff]  max-w-5xl mx-auto px-4 md:px-10 py-16 overflow-hidden">
      
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12 "
      >
        <h1 className="text-4xl md:text-5xl md:mt-7 mb-4">
          Return Policy
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Please review our return policy carefully before placing an order.
        </p>
      </motion.div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: 120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-white  rounded-3xl shadow-2xl p-6 md:p-10 space-y-8"
      >
        {/* Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Handmade & Custom Products
          </h2>
          <p className="text-gray-600 leading-relaxed">
            All our products are handcrafted and made to order. Due to the
            custom nature of our items, returns or exchanges are not accepted
            once production has started.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            Damaged or Incorrect Items
          </h2>
          <p className="text-gray-600 leading-relaxed">
            If you receive a damaged or incorrect item, please contact us
            within <strong>24 hours</strong> of delivery with clear photos or
            videos.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            Replacement Policy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Verified claims will be eligible for replacement only. Refunds are
            not available for handmade or custom products.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            Non-Returnable Items
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Customized or personalized items</li>
            <li>Products with customer-provided text or design</li>
            <li>Items damaged after delivery</li>
            <li>Used or altered products</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            Order Cancellation
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Orders cannot be canceled once production has begun. Please review
            all details carefully before confirming your order.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            Shipping Costs
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Shipping fees are non-refundable. If a replacement is approved,
            shipping costs may apply.
          </p>
        </div>

        {/* Help Box */}
        <div className="bg-gray-50 border rounded-2xl p-5 text-center">
          <h3 className="font-medium mb-2">Need Assistance?</h3>
          <p className="text-gray-600 text-sm">
            For any questions regarding our return policy, feel free to reach
            out to us. We’re always here to help.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
