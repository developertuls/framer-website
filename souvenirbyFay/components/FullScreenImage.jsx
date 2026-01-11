
"use client";

import Image from "next/image";

export default function FullScreenImage({ showImage, setShowImage, product }) {
  if (!showImage) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={() => setShowImage(false)}
    >
      {/* CLOSE BUTTON */}
      <button
        className="absolute top-6 right-6 text-white text-4xl z-50 hover:opacity-70"
        onClick={() => setShowImage(false)}
      >
        ×
      </button>

      {/* IMAGE */}
      <div
        className="relative w-screen h-screen max-w-6xl max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
}
