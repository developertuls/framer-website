
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  "/images/fatima.avif",
  "/hero-1.jpeg",
  "/hero-2.jpeg",
  "/hero-3.jpeg",
  "/hero-4.jpeg",
  "/hero-5.jpeg",
 
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[100vh] overflow-hidden bg-amber-700">
      {/* SLIDER */}
      <div
        className="absolute inset-0 flex transition-transform duration-[1500ms] ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((img, i) => (
          <div key={i} className="relative h-[100vh]   w-[100%] overflow-hidden flex-shrink-0  ">
            <Image
              src={img}
              alt="Hero Image"
              fill
              priority
              quality={100}
              className="object-cover h-[108vh] "
            />
          </div>
        ))}
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0  z-10" />

      {/* TEXT CONTENT */}
      <div className="relative z-20 flex h-full items-center px-6 md:px-20">
        <div className="w-[70%]  text-white bg-[#182C61]/60 p-16  mt-20 rounded-sm">
          <h1 className="font-sans font-bold text-4xl md:text-5xl leading-tight">
            Elevate your space with custom made resin
            <br />
         
          </h1>

          <p className=" text-white md:text-2xl mt-4">
       Timeless, handcrafted pieces made with love for any occasion, whether you'd like to capture a memory or just decorate your home!


          </p>

          <Link
            href="/shop"
            className="inline-block mt-4 rounded-full bg-white px-8 py-3 text-sm text-gray-900 hover:bg-gray-200 transition"
          >
            Explore Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
