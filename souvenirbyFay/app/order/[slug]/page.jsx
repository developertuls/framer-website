
"use client";

import { useParams } from "next/navigation";
import { useState, useRef } from "react";
import Image from "next/image";
import FullScreenImage from "@/components/FullScreenImage";

import wedding from "@/data/wedding";
import islamic from "@/data/islamic";
import resin from "@/data/resin";

import { useCurrency } from "@/context/CurrencyContext";
import { useLanguage } from "@/context/LanguageContext";

export default function OrderPage() {
  const { slug } = useParams();
  const { currency, convertPrice } = useCurrency();
  const { t } = useLanguage();

  const [quantity, setQuantity] = useState(1);
  const [glassBox, setGlassBox] = useState("with");
  const [customText, setCustomText] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const imageRef = useRef(null);
  const [zoomStyle, setZoomStyle] = useState({
    transform: "scale(1)",
  });

  /* ---------------- PRODUCT ---------------- */
  const allProducts = [...wedding, ...islamic, ...resin];
  const product = allProducts.find(p => p.slug === slug);

  if (!product) {
    return <p className="p-10 text-red-500">Product not found</p>;
  }

  /* ---------------- PRICE ---------------- */
  const glassBoxPrice = glassBox === "with" ? 5 : 0;
  const unitPrice = convertPrice(product.price);
  const totalPrice = convertPrice(
    (product.price + glassBoxPrice) * quantity
  );

  /* ---------------- IMAGE ZOOM ---------------- */
  const handleMouseMove = (e) => {
    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setZoomStyle({
      transform: "scale(2)",
      transformOrigin: `${x}% ${y}%`,
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      transform: "scale(1)",
      transformOrigin: "center",
    });
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ================= IMAGE ================= */}
          <div>
            <div
              ref={imageRef}
              onMouseEnter={() => setIsHover(true)}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => {
                setIsHover(false);
                handleMouseLeave();
              }}
              onClick={() => setShowImage(true)}
              className="relative w-full aspect-square overflow-hidden rounded-3xl cursor-zoom-in bg-gray-100 shadow"
            >
              <Image
                src={isHover && product.zoomImage ? product.zoomImage : product.image}
                alt={product.title}
                fill
                priority
                className="object-cover transition-transform duration-300"
                style={isHover ? zoomStyle : {}}
              />
            </div>

            <p className="text-xs text-center text-gray-500 mt-3">
              Click image to view full screen
            </p>
          </div>

          {/* ================= FORM ================= */}
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow space-y-8">

            {/* TITLE */}
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-serif">
                {product.title}
              </h1>

              {/* PRICE CARD */}
              <div className="bg-gradient-to-r from-[#5c2574] to-[#7a3fa1] text-white p-5 rounded-2xl shadow-lg">
                <p className="text-sm opacity-90">{t("total Price")}</p>
                <p className="text-2xl font-semibold">
                  {totalPrice} {currency}
                </p>
              </div>
            </div>

            {/* PRICE BREAKDOWN */}
            <div className="border rounded-2xl p-4 text-sm space-y-2">
              <div className="flex justify-between">
                <span>{t("unitPrice")}</span>
                <span>{unitPrice} {currency}</span>
              </div>
              <div className="flex justify-between">
                <span>{t("quantity")}</span>
                <span>× {quantity}</span>
              </div>
              {glassBox === "with" && (
                <div className="flex justify-between">
                  <span>{t("glassBoxes")}</span>
                  <span>+ {convertPrice(glassBoxPrice)} {currency}</span>
                </div>
              )}
            </div>

            {/* GLASS BOX */}
           <div className="space-y-3">
  <p className="text-sm font-medium">{t("glassBoxes")}</p>

  <div className="grid grid-cols-2 gap-3">
    {["with", "without"].map(type => (
      <button
        key={type}
        onClick={() => setGlassBox(type)}
        className={`py-3 rounded-xl border transition ${
          glassBox === type
            ? "bg-[#290d35] text-white shadow"
            : "bg-white hover:bg-gray-100"
        }`}
      >
        {t(type === "with" ? "withGlass" : "withoutGlass")}
      </button>
    ))}
  </div>
</div>


            {/* CUSTOM TEXT */}
            <div className="space-y-2 ">
              <label className=" text-sm font-medium">
                {t("Personalised Engraving")}
              </label>
              <textarea
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Names, date, short quote..."
                className="w-full border rounded-2xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-black/20"
              />
            </div>

            {/* QUANTITY */}
            <div className="space-y-2 ">
              <label className="  text-sm font-medium ">{t("quantity")}</label>
              <div className="flex items-center gap-6">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 rounded-full border hover:bg-gray-100"
                >
                  −
                </button>
                <span className=" text-lg font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 rounded-full border hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* SPECIAL REQUEST */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
              {t("anyspecialRequest")}
              </label>
              <textarea
                value={specialRequest}
                onChange={(e) => setSpecialRequest(e.target.value)}
                placeholder="Any additional requests..."
                className="w-full border rounded-2xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-black/20"
              />
            </div>

            {/* TRUST */}
            <p className="text-xs text-gray-500 text-center">
              Handcrafted with care • Worldwide delivery • Secure checkout
            </p>
          
            {/* CTA */}
            <button className="w-full bg-black text-white py-4 rounded-2xl text-lg font-medium hover:opacity-90 transition">
            {t("addToCart")}
            </button>
         <p className="text-sm text-gray-500 text-center mt-2">
  {t("noReturn")}

       </p>





          </div>
        </div>
      </div>

      {/* FULL SCREEN IMAGE */}
      <FullScreenImage
        showImage={showImage}
        setShowImage={setShowImage}
        product={product}
      />
    </>
  );
}
