
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CurrencySelector from "@/components/CurrencySelector";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const pathname = usePathname();

  const navClass = (path) =>
    `transition hover:opacity-70 ${
      pathname === path
        ? "text-[#44bd32] font-semibold "
        : "text-gray-800"
    }`;

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
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-light">
          <Link href="/" className={navClass("/") } >{t("Home" )}</Link>
          <Link href="/products" className={navClass("/products")}>{t("Products")}</Link>
          <Link href="/about" className={navClass("/about")}>{t("About")}</Link>
          <Link href="/contact" className={navClass("/contact")}>{t("Contact")}</Link>
          <Link href="/faq" className={navClass("/faq")}>{t("FAQ")}</Link>
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          {/* CUSTOM ORDER CTA */}
          <Link
            href="/custom-order"
            className={`hidden md:inline-flex rounded-full px-6 py-2 text-sm font-medium transition
              ${
                pathname === "/custom-order"
                  ? "bg-[#080249] text-white"
                  : "border border-gray-400 text-gray-800 hover:bg-[#080249] hover:text-white"
              }`}
          >
            {t("customOrder")}
          </Link>

          {/* Currency & Language */}
          <div className="hidden md:flex items-center gap-2">
            <div className="rounded-full ring-2 ring-[#080249]/30">
              <CurrencySelector />
            </div>
            <div className="rounded-full ring-2 ring-[#080249]/30">
              <LanguageSwitcher />
            </div>
          </div>

          {/* MOBILE */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-white border-t shadow-xl">
          <nav className="flex flex-col gap-5 px-6 py-6">

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
                className={`text-lg ${
                  pathname === link.href
                    ? "text-[#e11840] font-semibold"
                    : "text-[red]"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/custom-order"
              onClick={() => setOpen(false)}
              className={`mt-4 rounded-xl px-4 py-3 text-center text-lg
                ${
                  pathname === "/custom-order"
                    ? "bg-[#080249] text-white"
                    : "bg-black text-white"
                }`}
            >
              {t("customOrder")}
            </Link>

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
