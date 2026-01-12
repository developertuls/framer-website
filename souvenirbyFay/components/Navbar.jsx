
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CurrencySelector from "@/components/CurrencySelector";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";







export default function Navbar() {
  const [open, setOpen] = useState(false);
   const { t } = useLanguage();

  return (
    <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur border-b">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/fatimalogo.avif"
            alt="Fatima Artistry"
            width={120}
            height={40}
            priority
            className="object-contain"
          />
        </Link>
 {/* {t("specialRequest")} */}
        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-light text-gray-800">
          <Link href="/" className="hover:opacity-70">{t("Home")}</Link>
          <Link href="/products" className="hover:opacity-70">{t("Products")}</Link>
          <Link href="/about" className="hover:opacity-70">{t("About")}</Link>
          <Link href="/contact" className="hover:opacity-70">{t("Contact")}</Link>
          <Link href="/faq" className="hover:opacity-70">{t("FAQ")}</Link>
        </nav>

        {/* RIGHT CONTROLS */}
        <div className="flex items-center gap-3">

          {/* CTA */}
          <Link
            href="/custom-order"
            className="hidden md:inline-flex rounded-full border border-gray-400 px-6 py-2 text-sm font-medium text-gray-800 transition hover:bg-gray-900 hover:text-white"
          >
        {t("CusTomOrder")}
          </Link>

          {/* Currency & Language */}
          <div className="hidden md:flex items-center gap-2">
            <CurrencySelector />
            <LanguageSwitcher />
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-white border-t shadow-xl">
          <nav className="flex flex-col gap-5 px-6 py-6 text-gray-800">

            {[
              { name: "Home", href: "/" },
              { name: "Products", href: "/products" },
              { name: "About", href: "/about" },
              { name: "Contact", href: "/contact" },
              { name: "FAQ", href: "/faq" },
            ].map(link => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium"
              >
                {link.name}
              </Link>
            ))}

            {/* MOBILE CTA */}
            <Link
              href="/custom-order"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-xl bg-black px-4 py-3 text-center text-white text-lg"
            >
              {t("Custom Order")}
            </Link>

            {/* MOBILE CONTROLS */}
            <div className="mt-4 flex gap-3">
              <CurrencySelector />
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
