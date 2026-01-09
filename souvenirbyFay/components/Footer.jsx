
import Link from "next/link";
import { Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#070428] text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl text-white">
              SouvenirbyFay
            </h3>
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
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-white transition">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Help
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/shipping" className="hover:text-white transition">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white transition">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 hover:text-white">
                <Mail size={16} />
               <a href="#">
                  <span>souvenirbyFay@gmail.com</span>
               </a>
              
              </li>
              <li className="mt-4 flex gap-4">
                <a href="https://www.instagram.com/souvenirbyfay/" className="hover:text-white transition">
                  <Instagram size={18} />
                </a>
                <a href="#" className="hover:text-white transition">
                 
                  <span>souvenirbyFayinstagram</span>
                </a>

              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Fatima Artistry. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
