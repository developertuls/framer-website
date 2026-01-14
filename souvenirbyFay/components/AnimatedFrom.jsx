
"use client";
import { motion } from "framer-motion";

export default function AnimatedFrom({ children }) {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1], // luxury smooth easing
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
