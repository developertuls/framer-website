
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";          // Language switch
import Currency from "@/components/Currency";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 ">
          <Image
            src="/fatimalogo.avif"
            alt="Fatima Artistry"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 text-[15px] font-light tracking-wide text-gray-800">
          <Link href="/" className="hover:opacity-70">Home</Link>
          <Link href="/collections" className="hover:opacity-70">Products</Link>
          <Link href="/about" className="hover:opacity-70">About</Link>
          <Link href="/contact" className="hover:opacity-70">Contact</Link>
          <Link href="/faq" className="hover:opacity-70">FAQ</Link>
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          <Nav />        {/* Language */}
          <Currency />  {/* Currency */}

          {/* Desktop CTA */}
          <Link
            href="/custom-order"
            className="hidden md:inline-block rounded-full border border-gray-400 px-6 py-2 text-sm font-light text-gray-800 transition hover:bg-gray-900 hover:text-white"
          >
            Custom Order
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col gap-4 px-6 py-6 text-gray-800">
            <Link onClick={() => setOpen(false)} href="/">Home</Link>
            <Link onClick={() => setOpen(false)} href="/collections">Products</Link>
            <Link onClick={() => setOpen(false)} href="/about">About</Link>
            <Link onClick={() => setOpen(false)} href="/contact">Contact</Link>
            <Link onClick={() => setOpen(false)} href="/faq">FAQ</Link>

            <Link
              href="/custom-order"
              className="mt-4 rounded-lg bg-black px-4 py-3 text-center text-white"
            >
              Custom Order Request
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
