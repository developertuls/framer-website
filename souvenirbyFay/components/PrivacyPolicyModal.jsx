
"use client";

import AnimatedHeading from "./AnimatedHeading";










export default function PrivacyPolicyModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />
  <AnimatedHeading>
      {/* MODAL */}
      <div className="relative bg-white w-[95%] md:w-[700px] max-h-[80vh] rounded-xl shadow-xl overflow-hidden">

        {/* HEADER */}
       
        <div className="flex items-center justify-between px-6 py-4 border-b">
         
         <img src="/sou.avif" alt="souv" 
         width={100}
         height={100}
         />
         
          <h2 className="text-lg font-semibold">Privacy Policy</h2>
          <button
            onClick={onClose}
            className="text-2xl leading-none hover:opacity-60"
          >
            ×
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-6 overflow-y-auto text-sm text-gray-700 space-y-4">
          <p>
            When you visit our website, we may collect personal information
            such as name, email address, shipping address and payment details.
          </p>

          <p>
            All custom and made-to-order products are non-refundable.
            Full payment is required before production begins.
          </p>

          <p>
            We offer worldwide shipping. Shipping fees are calculated at checkout.
          </p>

          <p>
            Your data is securely stored and never shared with third parties
            except for payment and delivery purposes.
          </p>

          <p className="font-medium">
            By using our website, you agree to this Privacy Policy.
          </p>
        </div>
      </div>
      </AnimatedHeading>
    </div>
  );
}
