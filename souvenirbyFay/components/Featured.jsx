
"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedHeading from "@/components/AnimatedHeading";
import { useLanguage } from "@/context/LanguageContext";

const collections = [
  { id: 1, title: "Wedding Keepsakes", slug: "wedding-keepsakes", image: "/fu-11.jpeg" },
  { id: 2, title: "Islamic Calligraphy", slug: "islamic-calligraphy", image: "/fu-14.jpeg" },
  { id: 3, title: "Custom Resin Art", slug: "custom-resin-art", image: "/fu-16.jpg" },
  { id: 4, title: "Wedding Keepsakes", slug: "custom-resin-art", image: "/fu-10.jpeg" },
  { id: 5, title: "Wedding Keepsakes", slug: "custom-resin-art", image: "/fu-17.jpg" },
  { id: 6, title: "Custom Resin Art", slug: "custom-resin-art", image: "/image-3.jpg" },
];

export default function FeaturedCollections() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 md:px-12">
      
      {/* 🔥 Animated Heading */}
      <div className="flex justify-center items-center py-12 overflow-visible perspective-[1000px]">
        <h2
          className="
            featured
            bg-white px-6 py-4
            text-center text-4xl md:text-6xl font-bold
            flex gap-3
            shadow-xl
            transform-gpu
            -translate-y-4 md:-translate-y-10
          "
          style={{
            textShadow: "0 6px 18px rgba(0,0,0,0.25)",
          }}
        >
          <AnimatedHeading direction="left">
            {t?.featured || "Featured"}
          </AnimatedHeading>

          <AnimatedHeading direction="right">
            <span className="text-[#f31c6b]">Collections</span>
          </AnimatedHeading>
        </h2>
      </div>

      {/* 🖼️ Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {collections.map((item) => (
          <Link
            key={item.id}
            href={`/collections/${item.slug}`}
            className="group relative overflow-hidden rounded-xl
                       shadow-md hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative h-[380px] w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40
                            transition-colors duration-500 flex items-end">
              <div className="w-full bg-white/95 p-5 text-center
                              translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
