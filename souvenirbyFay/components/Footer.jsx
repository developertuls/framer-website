
"use client";

import Link from "next/link";
import { Instagram, Mail,   } from "lucide-react";
import { FaTiktok } from "react-icons/fa";



export default function Footer({ onOpenPrivacy }) {
  return (
    <footer className="bg-[#0a313a] text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* GRID */}
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">

          {/* BRAND */}
          <div className="space-y-4 text-center md:text-left">
     

   <Link href={'/'}>


            <div className="flex justify-center md:justify-start items-center gap-3">
              <img
                src="/sou.avif"
                alt="SouvenirbyFay"
                className="h-12 w-12 rounded-full bg-white object-cover"
              />
              <h3 className="text-2xl font-semibold text-white">
                SouvenirbyFay
              </h3>
            </div>
     </Link>
   

            <p className="text-sm text-gray-400 leading-relaxed">
              Luxury handmade resin art crafted with care, faith, and elegance.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="text-center md:text-left">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "Shop", href: "/products" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="transition hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* HELP */}
          <div className="text-center md:text-left">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Help
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/shiping"
                  className="transition hover:text-white"
                >
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="transition hover:text-white"
                >
                  Return Policy
                </Link>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="transition hover:text-white"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="text-center md:text-left">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="flex justify-center md:justify-start items-center gap-2">
                <Mail size={16} />
                <span>souvenirbyFay@gmail.com</span>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/souvenirbyfay/"
                  target="_blank"
                  className="flex justify-center md:justify-start items-center gap-2 transition hover:text-white"
                >
                  <Instagram size={18} />
                  souvenirbyFay
                </a>
              </li>

              <li>
                <a
                  href="https://www.tiktok.com/@souvenirbyfay"
                  target="_blank"
                  className="flex justify-center md:justify-start items-center gap-2 transition hover:text-white"
                >
                  <FaTiktok  size={18} />
                  souvenirbyFay
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 text-center text-xs sm:text-sm text-gray-500">
        © {new Date().getFullYear()} SouvenirbyFay Artistry. All rights reserved.
      </div>
    </footer>
  );
}
