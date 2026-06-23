
"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { sendOrderEmails } from "@/lib/sendOrderEmails";
 import Link from "next/link";


function SuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (!sessionId) return;

    const orderRaw = localStorage.getItem("orderPayload");
    if (!orderRaw) return;

    const order = JSON.parse(orderRaw);

    sendOrderEmails(order)
      .then(() => {
        console.log("Emails sent successfully");
        localStorage.removeItem("orderPayload");
      })
      .catch((err) => {
        console.error("Email error:", err);
      });
  }, [sessionId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-3xl p-10 max-w-lg w-full text-center"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className="flex justify-center mb-6"
        >
          <CheckCircle className="w-20 h-20 text-green-500" />
        </motion.div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800">
          Payment Successful!
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-gray-600">
          Thank you for your purchase. Your order has been successfully placed.
          A confirmation email has been sent to your email address.
        </p>

        {/* Divider */}
        <div className="my-6 border-t"></div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition duration-300"
          >
            Go to Home
          </button>

          <button
            // onClick={() => router.push("/shop")}
            className="px-6 py-3 rounded-xl border border-gray-300 font-semibold hover:bg-gray-100 transition duration-300"
          >
            <Link href="/products">
             Continue Shopping
            </Link>
          
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-lg font-medium">
          Processing Payment...
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}






// "use client";

// import { Suspense, useEffect, useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   CheckCircle2,
//   ShoppingBag,
//   Home,
//   PackageCheck,
// } from "lucide-react";

// import { sendOrderEmails } from "@/lib/sendOrderEmails";

// function SuccessContent() {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const sessionId = searchParams.get("session_id");

//   const [orderEmail, setOrderEmail] = useState("");

//   useEffect(() => {
//     if (!sessionId) return;

//     const orderRaw = localStorage.getItem("orderPayload");
//     if (!orderRaw) return;

//     const order = JSON.parse(orderRaw);

//     if (order?.email) {
//       setOrderEmail(order.email);
//     }

//     sendOrderEmails(order)
//       .then(() => {
//         console.log("Emails sent successfully");
//         localStorage.removeItem("orderPayload");
//       })
//       .catch((err) => {
//         console.error("Email error:", err);
//       });
//   }, [sessionId]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#F8F5EE] via-white to-[#F3EFE7] flex items-center justify-center px-4 py-10">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
//       >
//         {/* Header */}
//         <div className="bg-gradient-to-r from-green-50 to-green-100 py-10 px-6 text-center md:top-29">
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{
//               type: "spring",
//               stiffness: 180,
//               damping: 10,
//             }}
//             className="flex justify-center"
//           >
//             <CheckCircle2 className="w-24 h-24 text-green-500" />
//           </motion.div>

//           <h1 className="mt-5 text-4xl font-bold text-gray-900">
//             Payment Successful!
//           </h1>

//           <p className="mt-3 text-gray-600 max-w-xl mx-auto">
//             Thank you for your purchase. Your order has been received and is
//             currently being processed.
//           </p>
//         </div>

//         {/* Body */}
//         <div className="p-8">
//           {/* Order Info */}
//           <div className="grid md:grid-cols-2 gap-4">
//             <div className="bg-gray-50 border rounded-2xl p-5">
//               <div className="flex items-center gap-2 mb-2">
//                 <PackageCheck className="text-green-600" />
//                 <h3 className="font-semibold text-lg">
//                   Order Confirmation
//                 </h3>
//               </div>

//               <p className="text-sm text-gray-600">
//                 Your order has been confirmed successfully.
//               </p>
//             </div>

//             <div className="bg-gray-50 border rounded-2xl p-5">
//               <h3 className="font-semibold text-lg mb-2">
//                 Order Details
//               </h3>

//               <div className="space-y-2 text-sm text-gray-600">
//                 <p>
//                   <span className="font-medium text-gray-800">
//                     Order ID:
//                   </span>{" "}
//                   {sessionId
//                     ? sessionId.slice(sessionId.length - 12)
//                     : "N/A"}
//                 </p>

//                 <p>
//                   <span className="font-medium text-gray-800">
//                     Status:
//                   </span>{" "}
//                   Confirmed
//                 </p>

//                 <p>
//                   <span className="font-medium text-gray-800">
//                     Processing:
//                   </span>{" "}
//                   1-3 Business Days
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Email Confirmation */}
//           {orderEmail && (
//             <div className="mt-6 bg-green-50 border border-green-200 rounded-2xl p-5">
//               <h3 className="font-semibold text-green-700">
//                 Confirmation Email Sent
//               </h3>

//               <p className="mt-2 text-gray-700">
//                 A confirmation email has been sent to:
//               </p>

//               <p className="font-semibold text-gray-900 mt-1">
//                 {orderEmail}
//               </p>
//             </div>
//           )}

//           {/* Thank You Section */}
//           <div className="mt-8 text-center">
//             <h2 className="text-2xl font-bold text-gray-900">
//               Thank You For Supporting Our Handmade Creations ❤️
//             </h2>

//             <p className="mt-3 text-gray-600 leading-relaxed">
//               We truly appreciate your trust in Souvenir By Fay.
//               Each handcrafted resin piece is made with care and
//               attention to detail. We hope your order becomes a
//               cherished memory for years to come.
//             </p>
//           </div>

//           {/* Buttons */}
//           <div className="mt-10 flex flex-col sm:flex-row gap-4">
//             <button
//               onClick={() => router.push("/")}
//               className="flex-1 flex items-center justify-center gap-2 bg-[#D4AF37] text-white py-4 rounded-xl font-semibold hover:opacity-90 transition"
//             >
//               <Home size={20} />
//               Go To Home
//             </button>

//             <Link
//               href="/products"
//               className="flex-1 flex items-center justify-center gap-2 border border-gray-300 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
//             >
//               <ShoppingBag size={20} />
//               Continue Shopping
//             </Link>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default function SuccessPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="min-h-screen flex items-center justify-center text-lg font-medium">
//           Processing Payment...
//         </div>
//       }
//     >
//       <SuccessContent />
//     </Suspense>
//   );
// }




// h1uuu