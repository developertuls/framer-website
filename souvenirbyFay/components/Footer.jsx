
"use client";

import Link from "next/link";
import { Instagram, Mail } from "lucide-react";
import { image } from "framer-motion/client";





export default function Footer({ onOpenPrivacy }) {
  return (
    <footer className="bg-[#070428] text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>

            {/* logo image */}
            <div className="flex justify-center items-center gap-3">
               <img src="/sou.avif" alt="souven" 
               
               className="rounded-full bg-[#fff] w-[50px] h-[50px]"
               />
            <h3 className=" text-2xl text-white">
              SouvenirbyFay
            </h3>
           
            </div>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Luxury handmade resin art crafted with care, faith, and elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/products">Shop</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Help
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/shipping">Shipping & Delivery</Link></li>
              <li><Link href="/returns">Return Policy</Link></li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-white transition"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                souvenirbyFay@gmail.com
              </li>



              <li className="">

 <a href=" https://www.instagram.com/souvenirbyfay/" className="flex gap-2">

    <Instagram size={18}  className="cursor-pointer "/>souvenirbyFay
             
             
             </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SouvenirbyFay Artistry. All rights reserved.
      </div>
    </footer>
  );
}
