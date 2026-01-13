
"use client";

import { motion } from "framer-motion";

export default function AnimateFromBottom({ children }) {
  return (
    <motion.div
      initial={{
        y: 104,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
   type: "spring",
  stiffness: 40,
  damping: 18,
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
