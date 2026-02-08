
"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrivacyPolicyModal from "@/components/PrivacyPolicyModal";
import CustomerReviews from "@/components/CustomerReviews";
export default function ClientLayout({ children }) {
  const [openPrivacy, setOpenPrivacy] = useState(false);

  // 🔒 BODY SCROLL LOCK (GLOBAL & SAFE)
  useEffect(() => {
    if (openPrivacy) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [openPrivacy]);

  return (
    <>
      <Navbar />

      {children}
     <CustomerReviews />
      <Footer onOpenPrivacy={() => setOpenPrivacy(true)} />

      <PrivacyPolicyModal
        open={openPrivacy}
        onClose={() => setOpenPrivacy(false)}
      />
    </>
  );
}
