
"use client";

import { motion } from "framer-motion";

export default function AnimatedHeading({ children, direction = "left" }) {
  return (
    <motion.span
      initial={{
        opacity: 0,
        x: direction === "left" ? -120 : 120,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.5 }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
}
